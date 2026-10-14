import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { TECHNOLOGIES, TECHNOLOGY_MAP } from '@/lib/data/pseoTechnology'
import { TechnologyPage } from '@/components/sections/pseo/TechnologyPage'
import { servicePageJsonLd } from '@/lib/utils/jsonld'

/* ── Static params — all 40 technology slugs built at compile time ── */
export function generateStaticParams() {
  return TECHNOLOGIES.map(t => ({ slug: t.slug }))
}

/* ── Per-page metadata ─────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tech = TECHNOLOGY_MAP[slug]
  if (!tech) return {}

  return {
    title:       tech.pageTitle,
    description: tech.metaDescription,
    alternates: {
      canonical: `https://sunkeydesignsystems.com/technology/${slug}`,
    },
    openGraph: {
      title:       `${tech.pageTitle} | Sunkey Design Systems`,
      description: tech.metaDescription,
      url:         `https://sunkeydesignsystems.com/technology/${slug}`,
    },
  }
}

/* ── Page ──────────────────────────────────────────────────────── */
export default async function TechnologyRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tech = TECHNOLOGY_MAP[slug]

  if (!tech) notFound()

  const jsonLd = servicePageJsonLd({
    slug:        `technology/${slug}`,
    name:        tech.name,
    description: tech.metaDescription,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechnologyPage tech={tech} />
    </>
  )
}
