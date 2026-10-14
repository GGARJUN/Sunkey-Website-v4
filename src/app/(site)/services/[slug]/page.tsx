import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICE_DETAILS } from '@/lib/data/serviceDetails'
import { ALL_SERVICES } from '@/lib/data/services'
import { ServiceDetailPage } from '@/components/sections/service/ServiceDetailPage'
import { servicePageJsonLd } from '@/lib/utils/jsonld'

/* ── Static params — all 9 service slugs built at compile time ── */
export function generateStaticParams() {
  return ALL_SERVICES.map(s => ({ slug: s.slug }))
}

/* ── Per-page metadata ────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICE_DETAILS[slug]
  if (!service) return {}

  return {
    title:       service.pageTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://sunkeydesignsystems.com/services/${slug}`,
    },
    openGraph: {
      title:       `${service.pageTitle} | Sunkey Design Systems`,
      description: service.metaDescription,
      url:         `https://sunkeydesignsystems.com/services/${slug}`,
      type:        'website',
    },
  }
}

/* ── Page ─────────────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICE_DETAILS[slug]

  if (!service) notFound()

  const jsonLd = servicePageJsonLd({
    slug,
    name:        service.name,
    description: service.metaDescription,
  })

  return (
    <>
      {/* JSON-LD structured data — Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceDetailPage service={service} />
    </>
  )
}
