import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { CASE_STUDIES } from '@/lib/data/caseStudies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real electronics engineering projects delivered by Sunkey — PCB design, firmware, PCBA, and full product builds for hardware teams in the USA and Europe.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/case-studies' },
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-[160px] pb-[100px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute w-[400px] h-[400px] -top-[80px] right-[5%] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,80,48,0.14) 0%, transparent 68%)' }}
        />
        <div className="section-container relative z-10">
          <AnimateOnView>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.30)' }}>
              Selected Work
            </div>
            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-5">
              Projects that{' '}
              <span className="gradient-text">shipped.</span>
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[460px]">
              Real projects, real technical specs — all client details anonymized.
              These are the kinds of problems we solve.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-[100px] bg-surface">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px]">
            {CASE_STUDIES.map((cs, i) => (
              <AnimateOnView key={cs.slug} delay={i * 0.08}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block bg-white p-8 h-full transition-[box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_48px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-brand-red mb-3.5">
                    {cs.vertical} · {cs.location}
                  </div>
                  <div className="text-[1rem] font-bold tracking-tight leading-[1.32] text-dark mb-3">
                    {cs.title}
                  </div>
                  <p className="text-[0.8rem] leading-[1.7] text-muted mb-6">
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border-light mb-5">
                    {cs.specs.map(spec => (
                      <span key={spec} className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-dark">
                        <span
                          className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg,#f05030,#ec4040)' }}
                          aria-hidden="true"
                        />
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-brand-red transition-gap duration-150 group-hover:gap-2.5">
                    Read project details <ArrowRight size={12} strokeWidth={2.5} />
                  </span>
                </Link>
              </AnimateOnView>
            ))}
          </div>

          {/* CTA to share requirement */}
          <AnimateOnView className="mt-16 text-center">
            <p className="text-[0.9rem] text-muted mb-5">
              Have a similar project?
            </p>
            <Link href="/contact?type=requirement" className="btn-primary">
              Share Your Requirement
            </Link>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
