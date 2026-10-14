import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import type { TechnologyData } from '@/lib/data/pseoTechnology'
import { ALL_SERVICES } from '@/lib/data/services'
import { INDUSTRIES } from '@/lib/data/industries'

interface TechnologyPageProps { tech: TechnologyData }

export function TechnologyPage({ tech }: TechnologyPageProps) {
  const relatedServices   = ALL_SERVICES.filter(s => tech.relatedServiceSlugs.includes(s.slug))
  const relatedIndustries = INDUSTRIES.filter(i   => tech.relatedIndustrySlugs.includes(i.slug))

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
              <Link href="/services" className="text-[0.75rem] font-semibold text-white/35 hover:text-white/60 transition-colors cursor-pointer">Services</Link>
              <span className="text-white/20 text-[0.75rem]">/</span>
              <span className="text-[0.75rem] font-semibold text-white/50">{tech.name}</span>
            </div>
            <div className="inline-block px-2.5 py-1 bg-accent/10 border border-accent/20 rounded mb-5">
              <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-accent">{tech.category}</span>
            </div>
            <h1 className="font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[680px]"
                style={{ fontSize: 'clamp(2.5rem,4.5vw,4rem)' }}>
              <span className="gradient-text">{tech.name}</span>
              <br />{tech.heroTagline}
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/50 max-w-[560px] mb-8">{tech.description}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">Get a Quote</Link>
              <Link href="/contact?type=meeting" className="btn-ghost">Book a Discovery Call</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <AnimateOnView className="mb-10">
            <div className="section-label">Capabilities</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] max-w-[480px]"
                style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', color:'#0D0F14' }}>
              What we deliver with <span className="gradient-text">{tech.name}.</span>
            </h2>
          </AnimateOnView>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {tech.capabilities.map((cap, i) => (
              <AnimateOnView key={cap} delay={i * 0.06}>
                <div className="card-v2 flex items-start gap-3">
                  <span className="w-[5px] h-[5px] rounded-full mt-[10px] flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#FF5A1F,#ec4040)' }} />
                  <span className="text-[0.88rem] leading-[1.68] text-text-muted">{cap}</span>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-[60px]" style={{ background:'#F5F6F9' }}>
          <div className="section-container">
            <AnimateOnView className="mb-8">
              <div className="section-label">Covered Under</div>
              <h2 className="text-[1.2rem] font-bold tracking-tight" style={{ color:'#0D0F14' }}>Services that include {tech.name} work</h2>
            </AnimateOnView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((svc, i) => (
                <AnimateOnView key={svc.slug} delay={i * 0.07}>
                  <Link href={`/services/${svc.slug}`}
                        className="group card-v2 flex items-center justify-between cursor-pointer">
                    <span className="text-[0.9rem] font-semibold text-white group-hover:text-accent transition-colors duration-[250ms]">{svc.name}</span>
                    <ArrowRight size={13} strokeWidth={2} className="text-text-muted group-hover:text-accent flex-shrink-0 transition-colors duration-[250ms]" />
                  </Link>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <AnimateOnView className="max-w-[600px]">
            <h2 className="font-extrabold tracking-tightest leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', color:'#0D0F14' }}>
              Working with <span className="gradient-text">{tech.name}?</span>
            </h2>
            <p className="text-[0.92rem] leading-[1.72] mb-8" style={{ color:'#5A6072' }}>
              Share your project requirement and we will scope a quote within 2 business days.
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
        <section className="py-[50px] bg-bg border-t border-border-card">
          <div className="section-container">
            <AnimateOnView className="mb-6">
              <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-text-muted">Industries</div>
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
