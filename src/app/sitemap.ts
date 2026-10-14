import type { MetadataRoute } from 'next'
import { ALL_SERVICES } from '@/lib/data/services'
import { INDUSTRIES } from '@/lib/data/industries'
import { CASE_STUDIES } from '@/lib/data/caseStudies'
import { SERVICE_INDUSTRY_COMBOS } from '@/lib/data/pseoServiceIndustry'
import { TECHNOLOGIES } from '@/lib/data/pseoTechnology'
import { WORK_PROJECTS } from '@/lib/data/workProjects'

const BASE = 'https://sunkeydesignsystems.com'
const NOW  = new Date()

type Freq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

function url(
  path: string,
  priority: number,
  changeFrequency: Freq = 'monthly',
): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: NOW, priority, changeFrequency }
}

/**
 * Sitemap covering all Phase 1 pages.
 * Blog posts fetched from Payload CMS and included if available.
 * Phase 2 Service × Location pages (~144) added after launch.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  /* ── Core static pages ──────────────────────────────── */
  const staticPages: MetadataRoute.Sitemap = [
    url('/',              1.0, 'weekly'),
    url('/about',          0.9),
    url('/manufacturing',  0.9),
    url('/how-we-work',    0.9),
    url('/contact',       0.9),
    url('/services',      0.9),
    url('/industries',    0.9),
    url('/case-studies',  0.8),
    url('/work',          0.9, 'weekly'),
    url('/resources',     0.8, 'weekly'),
  ]

  /* ── Service pages ──────────────────────────────────── */
  const servicePages: MetadataRoute.Sitemap = ALL_SERVICES.map(s =>
    url(`/services/${s.slug}`, 0.8)
  )

  /* ── Industry pages ─────────────────────────────────── */
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map(i =>
    url(`/industries/${i.slug}`, 0.8)
  )

  /* ── Case study pages ───────────────────────────────── */
  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map(cs =>
    url(`/case-studies/${cs.slug}`, 0.7)
  )

  /* ── pSEO: Service × Industry (54 pages) ────────────── */
  const serviceIndustryPages: MetadataRoute.Sitemap = SERVICE_INDUSTRY_COMBOS.map(
    ({ serviceSlug, industrySlug }) =>
      url(`/services/${serviceSlug}/${industrySlug}`, 0.5, 'yearly')
  )

  /* ── pSEO: Technology (40 pages) ────────────────────── */
  const technologyPages: MetadataRoute.Sitemap = TECHNOLOGIES.map(t =>
    url(`/technology/${t.slug}`, 0.6)
  )

  /* ── Blog posts from Payload CMS ─────────────────────
     Fetched at build time. Returns empty if CMS unavailable.
  ─────────────────────────────────────────────────────── */
  const blogPages = await getBlogPages()

  /* ── Work project detail pages (16) ─────────────────── */
  const workProjectPages: MetadataRoute.Sitemap = WORK_PROJECTS.map(p =>
    url(`/work/${p.slug}`, 0.8)
  )

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...caseStudyPages,
    ...workProjectPages,
    ...serviceIndustryPages,
    ...technologyPages,
    ...blogPages,
  ]
}

async function getBlogPages(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(
      `${BASE}/api/blog?limit=100&depth=0&select[slug]=true&select[updatedAt]=true`,
      { cache: 'no-store' }
    )
    if (!res.ok) return []
    const data = await res.json() as { docs: { slug: string; updatedAt: string }[] }
    return (data.docs ?? []).map(post => ({
      url:             `${BASE}/resources/${post.slug}`,
      lastModified:    new Date(post.updatedAt),
      priority:        0.6,
      changeFrequency: 'monthly' as Freq,
    }))
  } catch {
    return []
  }
}
