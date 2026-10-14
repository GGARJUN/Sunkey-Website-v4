import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import type { IndustryDetailData } from '@/lib/data/industryDetails'
import { ALL_SERVICES } from '@/lib/data/services'
import { INDUSTRIES } from '@/lib/data/industries'

interface IndustryDetailPageProps { industry: IndustryDetailData }

export function IndustryDetailPage({ industry }: IndustryDetailPageProps) {
  const relevantServices  = ALL_SERVICES.filter(s => industry.relevantSlugs.includes(s.slug))
  const relatedIndustries = INDUSTRIES.filter(i  => industry.relatedSlugs.includes(i.slug))

  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-[160px] pb-[100px] relative overflow-hidden">
        <div aria-hidden="true"
             className="absolute w-[480px] h-[480px] -top-[100px] right-0 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(255,90,31,0.15) 0%, transparent 68%)' }} />
        <div className="section-container relative z-10">
          <AnimateOnView>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/industries" className="text-[0.75rem] font-semibold text-white/35 hover:text-white/60 transition-colors cursor-pointer">Industries</Link>
              <span className="text-white/20 text-[0.75rem]">/</span>
              <span className="text-[0.75rem] font-semibold text-white/50">{industry.name}</span>
            </div>
            <h1 className="font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[660px]"
                style={{ fontSize:'clamp(1.9rem,3vw,2.6rem)' }}>
              <span className="gradient-text">{industry.name}</span>
              <br />{industry.heroTagline}
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/50 max-w-[540px] mb-8">{industry.longDescription}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">Share Your Requirement</Link>
              <Link href="/contact?type=meeting" className="btn-ghost">Book a Discovery Call</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <AnimateOnView className="mb-10">
            <div className="section-label">The Engineering Challenges</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] max-w-[520px]"
                style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', color:'#0D0F14' }}>
              What makes {industry.name.toLowerCase()} electronics{' '}
              <span className="gradient-text">different.</span>
            </h2>
          </AnimateOnView>
          <div className="grid lg:grid-cols-3 gap-4">
            {industry.challenges.map((challenge, i) => (
              <AnimateOnView key={challenge.title} delay={i * 0.08}>
                <div className="card-v2 h-full">
                  <div className="w-7 h-[2px] mb-5 flex-shrink-0"
                       style={{ background: 'linear-gradient(90deg,#FF5A1F,#ec4040)' }} aria-hidden="true" />
                  <div className="text-[0.95rem] font-bold tracking-tight text-white mb-3">{challenge.title}</div>
                  <p className="text-[0.83rem] leading-[1.7] text-text-muted">{challenge.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-[80px]" style={{ background:'#F5F6F9' }}>
        <div className="section-container">
          <AnimateOnView className="mb-10">
            <div className="section-label">How Sunkey Helps</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] max-w-[520px]"
                style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', color:'#0D0F14' }}>
              What we bring to{' '}
              <span className="gradient-text">{industry.name.toLowerCase()} projects.</span>
            </h2>
          </AnimateOnView>
          <div className="flex flex-col gap-4">
            {industry.howWeHelp.map((item, i) => (
              <AnimateOnView key={item.title} delay={i * 0.06}>
                <div className="card-v2 grid lg:grid-cols-[240px_1fr] gap-6 items-start">
                  <div className="text-[0.95rem] font-bold tracking-tight" style={{ color:'#0D0F14' }}>{item.title}</div>
                  <p className="text-[0.87rem] leading-[1.72] text-text-muted">{item.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant services */}
      {relevantServices.length > 0 && (
        <section className="py-[70px] bg-white">
          <div className="section-container">
            <AnimateOnView className="mb-8">
              <div className="section-label">Services</div>
              <h2 className="text-[1.2rem] font-bold tracking-tight" style={{ color:'#0D0F14' }}>
                Services we apply to {industry.name.toLowerCase()} projects
              </h2>
            </AnimateOnView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relevantServices.map((svc, i) => (
                <AnimateOnView key={svc.slug} delay={i * 0.06}>
                  <Link href={`/services/${svc.slug}`}
                        className="group card-v2 flex items-center justify-between cursor-pointer">
                    <span className="text-[0.87rem] font-semibold text-white group-hover:text-accent transition-colors duration-[250ms]">{svc.name}</span>
                    <ArrowRight size={13} strokeWidth={2} className="text-text-muted group-hover:text-accent flex-shrink-0 transition-colors duration-[250ms]" />
                  </Link>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-[80px] bg-bg">
        <div className="section-container">
          <AnimateOnView className="max-w-[600px]">
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
              Have a <span className="gradient-text">{industry.name.toLowerCase()}</span> project?
            </h2>
            <p className="text-[0.92rem] leading-[1.72] text-white/45 mb-8">
              Share the brief and we will provide a scoped quote within 2 business days.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">Share Your Requirement</Link>
              <Link href="/contact?type=meeting" className="btn-ghost">Book a Discovery Call</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Related industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-[50px] bg-surface border-t border-border-card">
          <div className="section-container">
            <AnimateOnView className="mb-6">
              <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-text-muted">Other Industries</div>
            </AnimateOnView>
            <div className="flex flex-wrap gap-3">
              {relatedIndustries.map((ind, i) => (
                <AnimateOnView key={ind.slug} delay={i * 0.06}>
                  <Link href={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-card border border-border-card text-[0.85rem] font-semibold text-white hover:border-accent hover:text-accent transition-all duration-[250ms] cursor-pointer">
                    {ind.name}
                    <ArrowRight size={12} strokeWidth={2} />
                  </Link>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
