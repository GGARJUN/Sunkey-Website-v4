import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICE_INDUSTRY_COMBOS, INDUSTRY_LABELS, SERVICE_LABELS } from '@/lib/data/pseoServiceIndustry'
import { SERVICE_DETAILS } from '@/lib/data/serviceDetails'
import { INDUSTRY_DETAILS } from '@/lib/data/industryDetails'
import { ServiceIndustryPage } from '@/components/sections/pseo/ServiceIndustryPage'
import { servicePageJsonLd } from '@/lib/utils/jsonld'

/* ── Static params — all 54 combinations built at compile time ── */
export function generateStaticParams() {
  return SERVICE_INDUSTRY_COMBOS.map(({ serviceSlug, industrySlug }) => ({
    slug:     serviceSlug,
    industry: industrySlug,
  }))
}

/* ── Per-page metadata ────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; industry: string }>
}): Promise<Metadata> {
  const { slug, industry: industrySlug } = await params
  const service  = SERVICE_DETAILS[slug]
  const industry = INDUSTRY_DETAILS[industrySlug]
  if (!service || !industry) return {}

  const svcLabel = SERVICE_LABELS[slug]         ?? service.name.toLowerCase()
  const indLabel = INDUSTRY_LABELS[industrySlug] ?? industry.name.toLowerCase()

  const title       = `${service.name} for ${industry.name} Companies`
  const description = `Sunkey provides ${svcLabel} for ${indLabel} hardware teams in the USA and Europe. ${service.heroTagline}`

  return {
    title,
    description: description.slice(0, 158),
    alternates: {
      canonical: `https://sunkeydesignsystems.com/services/${slug}/${industrySlug}`,
    },
    openGraph: {
      title:       `${title} | Sunkey Design Systems`,
      description: description.slice(0, 158),
      url:         `https://sunkeydesignsystems.com/services/${slug}/${industrySlug}`,
    },
  }
}

/* ── Page ─────────────────────────────────────────────────────── */
export default async function ServiceIndustryRoute({
  params,
}: {
  params: Promise<{ slug: string; industry: string }>
}) {
  const { slug, industry: industrySlug } = await params

  const service  = SERVICE_DETAILS[slug]
  const industry = INDUSTRY_DETAILS[industrySlug]

  if (!service || !industry) notFound()

  // Validate this is a known combination
  const isValid = SERVICE_INDUSTRY_COMBOS.some(
    c => c.serviceSlug === slug && c.industrySlug === industrySlug
  )
  if (!isValid) notFound()

  const svcLabel = SERVICE_LABELS[slug]         ?? service.name.toLowerCase()
  const indLabel = INDUSTRY_LABELS[industrySlug] ?? industry.name.toLowerCase()

  const jsonLd = servicePageJsonLd({
    slug:        `${slug}/${industrySlug}`,
    name:        `${service.name} for ${industry.name} Companies`,
    description: `Sunkey provides ${svcLabel} for ${indLabel} hardware teams in the USA and Europe.`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceIndustryPage service={service} industry={industry} />
    </>
  )
}
