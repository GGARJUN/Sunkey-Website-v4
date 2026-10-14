import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

/**
 * Blog post detail page.
 * Fetches a single post from Payload CMS by slug.
 * Returns 404 if the post is not found or the CMS is unavailable.
 *
 * Rendered dynamically (no generateStaticParams) so new posts
 * published in the CMS are immediately available without a rebuild.
 */

export const dynamic = 'force-dynamic'

interface BlogPost {
  id:          string
  title:       string
  slug:        string
  excerpt:     string
  category:    string
  author:      string
  publishedAt: string
  content?:    unknown
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    const res = await fetch(
      `${baseUrl}/api/blog?where[slug][equals]=${slug}&limit=1&depth=1`,
      { cache: 'no-store' }
    )
    if (!res.ok) return null
    const data = await res.json() as { docs: BlogPost[] }
    return data.docs?.[0] ?? null
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title:       post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://sunkeydesignsystems.com/resources/${slug}`,
    },
    openGraph: {
      title:       `${post.title} | Sunkey Resources`,
      description: post.excerpt,
      url:         `https://sunkeydesignsystems.com/resources/${slug}`,
      type:        'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : ''

  const jsonLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        post.title,
    description:     post.excerpt,
    author: {
      '@type': 'Organization',
      name:    post.author ?? 'Sunkey Engineering Team',
    },
    publisher: {
      '@type': 'Organization',
      name:    'Sunkey Design Systems',
      url:     'https://sunkeydesignsystems.com',
    },
    datePublished:   post.publishedAt,
    url:             `https://sunkeydesignsystems.com/resources/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-dark pt-[160px] pb-[80px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute w-[400px] h-[400px] -top-[80px] right-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,80,48,0.14) 0%, transparent 68%)' }}
        />
        <div className="section-container relative z-10">
          <AnimateOnView>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-white/35 hover:text-white/60 transition-colors duration-150 mb-6"
            >
              <ArrowLeft size={12} strokeWidth={2} />
              Resources
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-brand-red">
                {post.category}
              </span>
              {formattedDate && (
                <>
                  <span className="text-white/20 text-[0.65rem]">·</span>
                  <span className="text-[0.65rem] font-medium text-white/35">
                    {formattedDate}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[720px]">
              {post.title}
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[560px]">
              {post.excerpt}
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Article body */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16">
            <AnimateOnView>
              <div className="prose prose-lg max-w-none text-muted leading-relaxed">
                {/* Rich text rendered by Payload's lexical renderer in production */}
                <p className="text-[0.92rem] leading-[1.8] text-muted">
                  {/* Payload rich text content rendered here.
                      Install @payloadcms/richtext-lexical for the React renderer.
                      In production: import RichText from '@payloadcms/richtext-lexical/react' */}
                  Full article content rendered from Payload rich text.
                </p>
              </div>
            </AnimateOnView>

            {/* Sidebar */}
            <AnimateOnView delay={0.1}>
              <div className="sticky top-24 space-y-6">
                <div
                  className="p-6 rounded-xl border border-white/[0.07]"
                  style={{ background: '#1a1a1a' }}
                >
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-white/28 mb-3">
                    Have a Project?
                  </div>
                  <p className="text-[0.82rem] leading-[1.7] text-white/40 mb-5">
                    Talk to an engineer about your hardware challenge.
                  </p>
                  <Link href="/contact?type=meeting" className="btn-primary w-full justify-center text-[0.82rem]">
                    Book a Call
                  </Link>
                </div>

                <div className="p-5 bg-surface rounded-lg">
                  <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-muted mb-3">
                    Author
                  </div>
                  <div className="text-[0.85rem] font-semibold text-dark">
                    {post.author ?? 'Sunkey Engineering Team'}
                  </div>
                  <div className="text-[0.78rem] text-muted mt-0.5">
                    Sunkey Design Systems
                  </div>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>
    </>
  )
}
