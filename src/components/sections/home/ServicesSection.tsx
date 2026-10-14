'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Cpu, Code2, Wifi, Navigation, Zap, Settings, Factory, FlaskConical, Cable, Users, BookOpen } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { DESIGN_SERVICES, MANUFACTURING_SERVICES, RESOURCE_SERVICES, type ServiceData } from '@/lib/data/services'

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu, Code2, Wifi, Navigation, Zap, Settings, Factory, FlaskConical, Cable, Users, BookOpen,
}

const TABS = [
  { id: 'design',        label: 'Design & Engineering', services: DESIGN_SERVICES        },
  { id: 'manufacturing', label: 'Manufacturing',        services: MANUFACTURING_SERVICES },
  { id: 'resources',     label: 'Contract Resources',   services: RESOURCE_SERVICES      },
] as const

type TabId = typeof TABS[number]['id']

export function ServicesSection() {
  const [active, setActive] = useState<TabId>('design')
  const currentTab = TABS.find(t => t.id === active)!

  return (
    /* WHITE background — dark cards on white */
    <section id="services" className="py-[120px] bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 items-end mb-14">
          <AnimateOnView>
            <div className="section-label">What We Do</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-[#0D0F14]"
                style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>
              Every service your hardware
              <br />
              <span className="gradient-text">team needs, in one place.</span>
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <p className="text-[0.95rem] leading-[1.72] text-[#5A6072] lg:max-w-[380px] lg:self-end">
              From concept validation and PCB design through to PCBA, testing, and delivery.
              Every service connected so nothing gets lost between vendors.
            </p>
          </AnimateOnView>
        </div>

        <div role="tablist" className="flex border-b border-[#E8E9EE] mb-10">
          {TABS.map(tab => (
            <button key={tab.id} role="tab" aria-selected={active === tab.id}
                    onClick={() => setActive(tab.id)}
                    className={['px-6 py-3.5 text-[0.85rem] font-semibold border-b-2 -mb-px cursor-pointer transition-all',
                      active === tab.id ? 'text-accent border-accent' : 'text-[#9299A6] border-transparent hover:text-[#5A6072]',
                    ].join(' ')}
                    style={{ transitionDuration:'250ms' }}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTab.services.map((service, i) => (
            <AnimateOnView key={service.slug} delay={i * 0.07} className="h-full">
              <ServiceCard service={service} />
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceCard({ service }: { service: ServiceData }) {
  const Icon = ICON_MAP[service.icon] ?? Cpu
  return (
    <Link href={`/services/${service.slug}`} className="group card-v2 flex flex-col cursor-pointer h-full">
      <div className="flex items-start justify-between mb-5">
        <Icon size={28} className="text-accent" strokeWidth={1.6} aria-hidden="true"
              style={{ transition:'transform 250ms var(--ease-apple)' }} />
        <ArrowRight size={16} strokeWidth={2} className="text-accent flex-shrink-0 mt-0.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    style={{ transitionDuration:'250ms' }} />
      </div>
      <div className="font-bold text-white mb-2 group-hover:text-accent"
           style={{ fontSize:'0.98rem', letterSpacing:'-0.02em', transitionProperty:'color', transitionDuration:'250ms' }}>
        {service.name}
      </div>
      <p className="text-[0.82rem] leading-[1.65] text-white/55 mb-5 flex-1">{service.shortDescription}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {service.specs.slice(0,4).map((spec, si) => (
          <span key={spec} className="card-tag group-hover:!bg-accent group-hover:!text-white"
                style={{ transitionDelay:`${si*30}ms` }}>{spec}</span>
        ))}
      </div>
    </Link>
  )
}
