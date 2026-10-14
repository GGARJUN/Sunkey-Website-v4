import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { DESIGN_SERVICES, MANUFACTURING_SERVICES, RESOURCE_SERVICES } from '@/lib/data/services'
import { ServiceCard } from '@/components/sections/home/ServicesSection'

export const metadata: Metadata = {
  title: 'Services',
  description: 'End-to-end electronics engineering services — PCB design, embedded firmware, PCBA, rapid prototyping, IoT, drone electronics, high-speed FPGA design, cable harness, and contract engineering.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/services' },
}

const CATEGORIES = [
  { label: 'Design & Engineering', services: DESIGN_SERVICES        },
  { label: 'Manufacturing',        services: MANUFACTURING_SERVICES  },
  { label: 'Contract Resources',   services: RESOURCE_SERVICES       },
] as const

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-bg pt-[160px] pb-[100px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80&auto=format&fit=crop"
                 alt="" fill sizes="100vw" className="object-cover object-center"
                 style={{ filter:'brightness(0.2) saturate(0.7)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-bg/30" />
        </div>
        <div className="section-container relative z-10">
          <AnimateOnView>
            <div className="section-label" style={{ color:'rgba(255,255,255,0.35)' }}>Services</div>
            <h1 className="font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[640px]"
                style={{ fontSize:'clamp(2.8rem,5vw,4.2rem)' }}>
              Every service your hardware<br /><span className="gradient-text">team needs, in one place.</span>
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/55 max-w-[500px]">
              From first schematic to tested, shipped hardware — Sunkey covers PCB design, embedded firmware, PCBA, and manufacturing without you managing multiple vendors.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {CATEGORIES.map((cat, ci) => (
        <section key={cat.label} className={ci % 2 === 0 ? 'py-[80px] bg-white' : 'py-[80px]'}>
          <div className="section-container">
            <AnimateOnView className="mb-10">
              <h2 className="font-bold tracking-tightest text-white" style={{ fontSize:'clamp(1.3rem,2.2vw,1.7rem)' }}>
                {cat.label}
              </h2>
            </AnimateOnView>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.services.map((service, i) => (
                <AnimateOnView key={service.slug} delay={i * 0.07} className="h-full">
                  <ServiceCard service={service} />
                </AnimateOnView>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-[80px] bg-bg">
        <div className="section-container text-center">
          <AnimateOnView>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white mb-4"
                style={{ fontSize:'clamp(1.9rem,3.2vw,2.8rem)' }}>
              Not sure which service fits?
            </h2>
            <p className="text-[0.95rem] leading-[1.72] text-white/45 mb-8 max-w-[380px] mx-auto">
              Book a 30-minute discovery call. We will scope your project and recommend the right approach.
            </p>
            <Link href="/contact?type=meeting" className="btn-primary">Book a Discovery Call</Link>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
