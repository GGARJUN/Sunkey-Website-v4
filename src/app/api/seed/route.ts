import type { NextRequest } from 'next/server'
import { NextResponse }     from 'next/server'
import { getPayload }       from 'payload'
import configPromise        from '@payload-config'
import { SEED_ARTICLES }    from '@/lib/seed/articles'

/**
 * POST /api/seed
 *
 * Seeds the Payload CMS database with the 6 launch blog articles.
 * Protected by SEED_SECRET environment variable — never expose this endpoint
 * publicly without the secret check.
 *
 * Usage (run once after initial deployment):
 *   curl -X POST https://sunkeydesignsystems.com/api/seed \
 *     -H "Authorization: Bearer <SEED_SECRET>"
 *
 * Safe to run multiple times — existing slugs are skipped via upsert logic.
 * Only available when DATABASE_URI is configured.
 */
export async function POST(req: NextRequest) {
  /* ── Auth guard ──────────────────────────────────────── */
  const secret = process.env.SEED_SECRET
  if (!secret) {
    return NextResponse.json(
      { error: 'SEED_SECRET environment variable is not set. Seeding is disabled.' },
      { status: 403 }
    )
  }

  const authHeader = req.headers.get('authorization') ?? ''
  const token = authHeader.replace('Bearer ', '').trim()

  if (token !== secret) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  /* ── Seed ────────────────────────────────────────────── */
  try {
    const payload = await getPayload({ config: configPromise })

    const results: { slug: string; status: 'created' | 'skipped' }[] = []

    for (const article of SEED_ARTICLES) {
      // Check if slug already exists
      const existing = await payload.find({
        collection: 'blog',
        where: { slug: { equals: article.slug } },
        limit: 1,
      })

      if (existing.totalDocs > 0) {
        results.push({ slug: article.slug, status: 'skipped' })
        continue
      }

      await payload.create({
        collection: 'blog',
        data: {
          title:       article.title,
          slug:        article.slug,
          excerpt:     article.excerpt,
          category:    article.category,
          author:      article.author,
          publishedAt: article.publishedAt,
          content:     article.content,
        },
      })

      results.push({ slug: article.slug, status: 'created' })
    }

    const created = results.filter(r => r.status === 'created').length
    const skipped = results.filter(r => r.status === 'skipped').length

    return NextResponse.json({
      success: true,
      message: `Seeding complete. ${created} articles created, ${skipped} skipped (already exist).`,
      results,
    })
  } catch (err) {
    console.error('[api/seed] Error:', err)
    return NextResponse.json(
      { error: 'Seeding failed. Check server logs for details.', details: String(err) },
      { status: 500 }
    )
  }
}

/* GET /api/seed — health check, shows article slugs that will be seeded */
export async function GET(req: NextRequest) {
  const secret = process.env.SEED_SECRET
  const authHeader = req.headers.get('authorization') ?? ''
  const token = authHeader.replace('Bearer ', '').trim()

  if (!secret || token !== secret) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  return NextResponse.json({
    articles: SEED_ARTICLES.map(a => ({
      slug:     a.slug,
      title:    a.title,
      category: a.category,
    })),
    count: SEED_ARTICLES.length,
  })
}
