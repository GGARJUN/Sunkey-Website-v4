import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { CASE_STUDIES } from '@/lib/data/caseStudies'

/**
 * Case Study detail page.
 *
 * Phase 1: Reads from static caseStudies.ts for the 3 initial projects.
 * Phase 2: Payload CMS integration adds richer content and allows new projects
 * without a code deployment. The slug-based lookup is already compatible.
 *
 * generateStaticParams builds all static slugs at compile time.
 */

export function generateStaticParams() {
  return CASE_STUDIES.map(cs => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = CASE_STUDIES.find(c => c.slug === slug)
  if (!cs) return {}

  return {
    title:       cs.title,
    description: cs.description.slice(0, 155) + '…',
    alternates: {
      canonical: `https://sunkeydesignsystems.com/case-studies/${slug}`,
    },
    openGraph: {
      title:       `${cs.title} | Sunkey Case Study`,
      description: cs.description.slice(0, 155) + '…',
      url:         `https://sunkeydesignsystems.com/case-studies/${slug}`,
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = CASE_STUDIES.find(c => c.slug === slug)

  if (!cs) notFound()

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-dark pt-[160px] pb-[100px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute w-[400px] h-[400px] -top-[80px] right-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,80,48,0.14) 0%, transparent 68%)' }}
        />
        <div className="section-container relative z-10">
          <AnimateOnView>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-white/35 hover:text-white/60 transition-colors duration-150"
              >
                <ArrowLeft size={12} strokeWidth={2} />
                Case Studies
              </Link>
            </div>

            {/* Vertical + Location badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-brand-red">
                {cs.vertical}
              </span>
              <span className="text-white/20 text-[0.65rem]">·</span>
              <span className="text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-white/35">
                {cs.location}
              </span>
            </div>

            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-6 max-w-[680px]">
              {cs.title}
            </h1>

            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[560px]">
              {cs.description}
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Technical specs */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <AnimateOnView className="mb-10">
            <div className="section-label">Technical Specifications</div>
            <h2 className="text-[1.3rem] font-bold tracking-tight text-dark">
              Key project parameters
            </h2>
          </AnimateOnView>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px]">
            {cs.specs.map((spec, i) => (
              <AnimateOnView key={spec} delay={i * 0.07}>
                <div className="bg-surface p-6 text-center">
                  <div
                    className="w-5 h-[2px] mx-auto mb-3"
                    style={{ background: 'linear-gradient(90deg,#f05030,#ec4040)' }}
                    aria-hidden="true"
                  />
                  <div className="text-[0.88rem] font-bold tracking-tight text-dark">{spec}</div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Project detail */}
      <section className="py-[80px] bg-surface">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16">
            <AnimateOnView>
              <div className="section-label">Project Detail</div>
              <h2 className="text-[1.3rem] font-bold tracking-tight text-dark mb-6">
                The engineering challenge
              </h2>
              <div className="prose max-w-none">
                <p className="text-[0.92rem] leading-[1.8] text-muted">
                  {cs.description}
                </p>
                <p className="text-[0.92rem] leading-[1.8] text-muted mt-4">
                  All client details are fully anonymized. The technical specifications
                  and outcomes described are accurate to the delivered project.
                </p>
              </div>
            </AnimateOnView>

            {/* Sidebar CTA */}
            <AnimateOnView delay={0.1}>
              <div
                className="p-7 rounded-xl border border-white/[0.07] sticky top-24"
                style={{ background: '#1a1a1a' }}
              >
                <div className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-white/30 mb-3">
                  Similar Project?
                </div>
                <p className="text-[0.85rem] leading-[1.7] text-white/45 mb-6">
                  Share your requirement and we will scope a similar engagement within 2 business days.
                </p>
                <Link href="/contact?type=requirement" className="btn-primary w-full justify-center">
                  Share Your Requirement
                </Link>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      <section className="py-[60px] bg-white border-t border-border-light">
        <div className="section-container">
          <AnimateOnView className="mb-8">
            <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-muted">
              More Projects
            </div>
          </AnimateOnView>
          <div className="flex flex-wrap gap-3">
            {CASE_STUDIES.filter(c => c.slug !== cs.slug).map((related, i) => (
              <AnimateOnView key={related.slug} delay={i * 0.06}>
                <Link
                  href={`/case-studies/${related.slug}`}
                  className="inline-flex flex-col gap-0.5 px-4 py-3 bg-surface hover:bg-dark hover:text-white border border-border-light hover:border-dark rounded transition-all duration-250"
                >
                  <span className="text-[0.62rem] font-bold tracking-[0.1em] uppercase text-brand-red">
                    {related.vertical}
                  </span>
                  <span className="text-[0.82rem] font-semibold text-dark group-hover:text-white">
                    {related.title}
                  </span>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
