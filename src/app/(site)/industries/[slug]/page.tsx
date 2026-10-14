import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { INDUSTRY_DETAILS } from '@/lib/data/industryDetails'
import { INDUSTRIES } from '@/lib/data/industries'
import { IndustryDetailPage } from '@/components/sections/industry/IndustryDetailPage'
import { industryPageJsonLd } from '@/lib/utils/jsonld'

/* ── Static params — all 6 industry slugs built at compile time ── */
export function generateStaticParams() {
  return INDUSTRIES.map(i => ({ slug: i.slug }))
}

/* ── Per-page metadata ────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = INDUSTRY_DETAILS[slug]
  if (!industry) return {}

  return {
    title:       industry.pageTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://sunkeydesignsystems.com/industries/${slug}`,
    },
    openGraph: {
      title:       `${industry.pageTitle} | Sunkey Design Systems`,
      description: industry.metaDescription,
      url:         `https://sunkeydesignsystems.com/industries/${slug}`,
      type:        'website',
    },
  }
}

/* ── Page ─────────────────────────────────────────────────────── */
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = INDUSTRY_DETAILS[slug]

  if (!industry) notFound()

  const jsonLd = industryPageJsonLd({
    slug,
    name:        industry.name,
    description: industry.metaDescription,
  })

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <IndustryDetailPage industry={industry} />
    </>
  )
}
