import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { INDUSTRY_IMAGES } from '@/lib/data/industryImages'

const INDUSTRIES = [
  {
    slug:    'semiconductor',
    name:    'Semiconductor',
    desc:    'PCB design and EMS support for semiconductor test and validation equipment.',
    badge:   'Primary' as const,
  },
  {
    slug:    'industrial-automation',
    name:    'Industrial Automation',
    desc:    'Embedded systems, custom PCBs, and ATE for demanding industrial environments.',
    badge:   'Primary' as const,
  },
  {
    slug:    'drone-uav',
    name:    'Drone & UAV',
    desc:    '30+ projects end to end — ESC, GPS, power distribution, and radar dome assemblies.',
    badge:   'Primary' as const,
  },
  {
    slug:    'iot-smart-devices',
    name:    'IoT & Smart Devices',
    desc:    'Full IoT stack — sensor nodes, gateways, and cloud-connected devices.',
    badge:   'Primary' as const,
  },
  {
    slug:    'automotive',
    name:    'Automotive',
    desc:    'Functional safety-aware electronics design with automotive-grade component selection.',
    badge:   'Secondary' as const,
  },
  {
    slug:    'agricultural-technology',
    name:    'Agricultural Technology',
    desc:    'Agricultural drone electronics, precision GPS, and radar terrain sensing.',
    badge:   'Secondary' as const,
  },
] as const

export function IndustriesSection() {
  return (
    <section id="industries" className="py-[120px] bg-surface" aria-label="Industries">
      <div className="section-container">

        <AnimateOnView className="mb-14">
          <div className="section-label">Industries</div>
          <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white max-w-[540px]"
              style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>
            Built for the verticals
            <br />
            <span className="gradient-text">where precision matters.</span>
          </h2>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <AnimateOnView key={ind.slug} delay={i * 0.07}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group relative overflow-hidden rounded-card cursor-pointer block"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={INDUSTRY_IMAGES[ind.slug]}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-0 rounded-card border border-transparent group-hover:border-accent transition-colors duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="mb-3">
                    <span className={[
                      'inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold border cursor-default',
                      ind.badge === 'Primary'
                        ? 'bg-accent border-accent text-white'
                        : 'bg-white/10 border-white/20 text-white/70',
                    ].join(' ')}>
                      {ind.badge} Vertical
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[1rem] font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                        {ind.name}
                      </div>
                      <p className="text-[0.78rem] leading-[1.6] text-white/60 max-w-[240px]">{ind.desc}</p>
                    </div>
                    <ArrowRight size={16} strokeWidth={2}
                                className="text-white/40 group-hover:text-accent flex-shrink-0 mb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </AnimateOnView>
          ))}
        </div>

      </div>
    </section>
  )
}
