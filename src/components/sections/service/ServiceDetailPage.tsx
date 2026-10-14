import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import type { ServiceDetailData } from '@/lib/data/serviceDetails'
import { ALL_SERVICES } from '@/lib/data/services'
import { INDUSTRIES } from '@/lib/data/industries'

interface ServiceDetailPageProps { service: ServiceDetailData }

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const relatedServices   = ALL_SERVICES.filter(s => service.relatedSlugs.includes(s.slug))
  const relatedIndustries = INDUSTRIES.filter(i  => service.industrySlugs.includes(i.slug))

  return (
    <>
      {/* Hero — dark with PCB stock photography */}
      <section className="relative bg-bg pt-[160px] pb-[100px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&q=80&auto=format&fit=crop"
            alt="" fill sizes="100vw"
            className="object-cover object-center"
            style={{ filter:'brightness(0.18) saturate(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/82 to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
        </div>
        <div aria-hidden="true" className="absolute w-[480px] h-[480px] -top-[100px] right-0 rounded-full pointer-events-none z-[1]"
             style={{ background:'radial-gradient(circle, rgba(255,90,31,0.15) 0%, transparent 68%)' }} />

        <div className="section-container relative z-10">
          <AnimateOnView>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/services" className="text-[0.75rem] font-semibold text-white/35 hover:text-white/60 transition-colors cursor-pointer">Services</Link>
              <span className="text-white/20 text-[0.75rem]">/</span>
              <span className="text-[0.75rem] font-semibold text-white/50">{service.name}</span>
            </div>
            <h1 className="font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[700px]"
                style={{ fontSize:'clamp(1.9rem,3vw,2.6rem)' }}>
              <span className="gradient-text">{service.name}</span>
              <br />{service.heroTagline}
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/50 max-w-[560px] mb-8">{service.longDescription}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">Get a Quote</Link>
              <Link href="/contact?type=meeting" className="btn-ghost">Book a Discovery Call</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Capabilities — white background, dark text */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <AnimateOnView className="mb-10">
            <div className="section-label">Capabilities</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] max-w-[500px]"
                style={{ fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'#0D0F14' }}>
              What we deliver on every engagement.
            </h2>
          </AnimateOnView>
          <div className="grid lg:grid-cols-3 gap-4">
            {service.capabilities.map((cap, i) => (
              <AnimateOnView key={cap.title} delay={i * 0.08} className="h-full">
                <div className="card-v2 h-full flex flex-col">
                  <div className="text-[0.95rem] font-bold tracking-tight text-white mb-4">{cap.title}</div>
                  <ul className="space-y-2.5 list-none flex-1">
                    {cap.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-[0.82rem] leading-[1.66] text-text-muted">
                        <span className="w-[5px] h-[5px] rounded-full mt-[8px] flex-shrink-0"
                              style={{ background:'linear-gradient(135deg,#FF5A1F,#ec4040)' }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Tools + Deliverables — light gray, dark text */}
      <section className="py-[80px]" style={{ background:'#F5F6F9' }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14">
            <AnimateOnView>
              <div className="section-label">Tools &amp; Platforms</div>
              <h2 className="text-[1.2rem] font-bold tracking-tight mb-5" style={{ color:'#0D0F14' }}>What we work with</h2>
              <div className="flex flex-wrap gap-2">
                {service.tools.map(tool => <span key={tool} className="pill">{tool}</span>)}
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.1}>
              <div className="section-label">Deliverables</div>
              <h2 className="text-[1.2rem] font-bold tracking-tight mb-5" style={{ color:'#0D0F14' }}>What you receive</h2>
              <ul className="space-y-2.5 list-none">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[0.85rem] leading-[1.65]" style={{ color:'#5A6072' }}>
                    <span className="w-[5px] h-[5px] rounded-full mt-[9px] flex-shrink-0"
                          style={{ background:'linear-gradient(135deg,#FF5A1F,#ec4040)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ICP — white, dark text */}
      <section className="py-[70px] bg-white">
        <div className="section-container">
          <AnimateOnView className="max-w-[680px]">
            <div className="section-label">Is This Right for You?</div>
            <p className="text-[1.02rem] leading-[1.75] mt-3 mb-8" style={{ color:'#5A6072' }}>{service.icpText}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">Share Your Requirement</Link>
              <Link href="/contact?type=meeting" className="btn-ghost">Book a Discovery Call</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Related industries — light gray, dark text */}
      {relatedIndustries.length > 0 && (
        <section className="py-[70px]" style={{ background:'#F5F6F9' }}>
          <div className="section-container">
            <AnimateOnView className="mb-8">
              <div className="section-label">Industries</div>
              <h2 className="text-[1.2rem] font-bold tracking-tight" style={{ color:'#0D0F14' }}>Verticals where we apply this service</h2>
            </AnimateOnView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedIndustries.map((ind, i) => (
                <AnimateOnView key={ind.slug} delay={i * 0.07} className="h-full">
                  <Link href={`/industries/${ind.slug}`} className="group card-v2 flex items-center justify-between cursor-pointer h-full">
                    <span className="text-[0.92rem] font-semibold text-white group-hover:text-accent transition-colors duration-[250ms]">{ind.name}</span>
                    <ArrowRight size={14} strokeWidth={2} className="text-text-muted group-hover:text-accent transition-colors duration-[250ms] flex-shrink-0" />
                  </Link>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services — white, dark headings */}
      {relatedServices.length > 0 && (
        <section className="py-[70px] bg-white">
          <div className="section-container">
            <AnimateOnView className="mb-8">
              <div className="section-label">Related Services</div>
              <h2 className="text-[1.2rem] font-bold tracking-tight" style={{ color:'#0D0F14' }}>Services clients often pair with this one</h2>
            </AnimateOnView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((svc, i) => (
                <AnimateOnView key={svc.slug} delay={i * 0.07} className="h-full">
                  <Link href={`/services/${svc.slug}`} className="group card-v2 flex items-center justify-between cursor-pointer h-full">
                    <span className="text-[0.92rem] font-semibold text-white group-hover:text-accent transition-colors duration-[250ms]">{svc.name}</span>
                    <ArrowRight size={14} strokeWidth={2} className="text-text-muted group-hover:text-accent transition-colors duration-[250ms] flex-shrink-0" />
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
