'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { INDUSTRY_IMAGES } from '@/lib/data/industryImages'

const LEFT_INDUSTRIES = [
  { slug: 'semiconductor',         name: 'Semiconductor',        desc: 'Test equipment, validation boards, chip design support.',       badge: 'Primary'   as const },
  { slug: 'industrial-automation', name: 'Industrial Automation', desc: 'ATE, rugged PCBs, embedded control and fieldbus firmware.',      badge: 'Primary'   as const },
  { slug: 'drone-uav',             name: 'Drone & UAV',           desc: 'ESC, GPS, power distribution, radar dome — 30+ projects.',      badge: 'Primary'   as const },
] as const

const RIGHT_INDUSTRIES = [
  { slug: 'iot-smart-devices',       name: 'IoT & Smart Devices',     desc: 'Sensor nodes, gateways, cloud-connected M66 & BG95 platforms.', badge: 'Primary'   as const },
  { slug: 'automotive',              name: 'Automotive',              desc: 'OBD, CAN bus, functional safety-aware electronics design.',    badge: 'Secondary' as const },
  { slug: 'agricultural-technology', name: 'Agricultural Technology', desc: 'Precision GPS, radar terrain sensing, agri-drone electronics.', badge: 'Secondary' as const },
] as const

type Industry = typeof LEFT_INDUSTRIES[number] | typeof RIGHT_INDUSTRIES[number]

const CARD_H  = 82
const CARD_GAP = 16

export function IndustryHubSection() {
  const totalH = 3 * CARD_H + 2 * CARD_GAP

  return (
    <section className="py-[100px] overflow-hidden" style={{ background: '#F5F6F9' }}>
      <div className="section-container">

        <AnimateOnView className="text-center mb-14">
          <div className="section-label">Industries</div>
          <h2 className="font-extrabold tracking-tightest leading-[1.1] text-[#0D0F14]"
              style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>
            Built for the verticals
            <br />
            <span className="gradient-text">where precision matters.</span>
          </h2>
        </AnimateOnView>

        {/* Desktop hub */}
        <div className="hidden lg:grid items-center"
             style={{ gridTemplateColumns: '1fr 52px 200px 52px 1fr' }}>

          <AnimateOnView delay={0.05} className="flex flex-col gap-4">
            {LEFT_INDUSTRIES.map(ind => <IndustryCard key={ind.slug} ind={ind} />)}
          </AnimateOnView>

          <div className="relative self-stretch" aria-hidden="true">
            {[0,1,2].map(i => (
              <div key={i} className="absolute left-0 right-0"
                   style={{ top: `${i*(CARD_H+CARD_GAP)+CARD_H/2}px`, borderTop: '1.5px dashed rgba(255,90,31,0.3)' }} />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-5 py-4 relative" style={{ height: `${totalH}px` }}>
            <AnimateOnView delay={0.1} className="flex flex-col items-center justify-center gap-5 py-4 relative">
              {[0,1,2].map(i => (
                <div key={`l${i}`} aria-hidden="true" className="absolute left-0 w-2 h-2 rounded-full bg-accent/50"
                     style={{ top:`${i*(CARD_H+CARD_GAP)+CARD_H/2-4}px`, transform:'translateX(-50%)' }} />
              ))}
              {[0,1,2].map(i => (
                <div key={`r${i}`} aria-hidden="true" className="absolute right-0 w-2 h-2 rounded-full bg-accent/50"
                     style={{ top:`${i*(CARD_H+CARD_GAP)+CARD_H/2-4}px`, transform:'translateX(50%)' }} />
              ))}

              <div className="relative flex items-center justify-center">
                <div className="absolute rounded-full border border-accent/15"
                     style={{ width:180, height:180, animation:'sonar 3s ease-out infinite' }} />
                <div className="absolute rounded-full border border-accent/15"
                     style={{ width:140, height:140, animation:'sonar 3s ease-out 1s infinite' }} />
                <div className="absolute rounded-full border border-accent/2"
                     style={{ width:105, height:105, animation:'sonar 3s ease-out 2s infinite' }} />
                <Link href="/industries" aria-label="Explore all industries"
                      className="relative z-10 rounded-full overflow-hidden block"
                      style={{ width:72, height:72, animation:'breathe 4s ease-in-out infinite' }}>
                  <Image src="/images/favicon.png" alt="Sunkey" width={72} height={72} className="rounded-full" />
                </Link>
              </div>

              <Link href="/industries"
                    className="flex items-center gap-1.5 text-[0.7rem] font-bold tracking-[0.1em] uppercase text-accent hover:opacity-70 transition-opacity cursor-pointer">
                All Industries <ArrowRight size={11} strokeWidth={2.5} />
              </Link>
            </AnimateOnView>
          </div>

          <div className="relative self-stretch" aria-hidden="true">
            {[0,1,2].map(i => (
              <div key={i} className="absolute left-0 right-0"
                   style={{ top:`${i*(CARD_H+CARD_GAP)+CARD_H/2}px`, borderTop:'1.5px dashed rgba(255,90,31,0.3)' }} />
            ))}
          </div>

          <AnimateOnView delay={0.05} className="flex flex-col gap-4">
            {RIGHT_INDUSTRIES.map(ind => <IndustryCard key={ind.slug} ind={ind} />)}
          </AnimateOnView>
        </div>

        {/* Mobile fallback */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {[...LEFT_INDUSTRIES, ...RIGHT_INDUSTRIES].map(ind => (
            <IndustryCard key={ind.slug} ind={ind} />
          ))}
          <div className="sm:col-span-2 text-center pt-4">
            <Link href="/industries" className="btn-primary inline-flex">Explore All Industries</Link>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes sonar {
          0%   { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.7);  opacity: 0; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.06); }
        }
      `}</style>
    </section>
  )
}

function IndustryCard({ ind }: { ind: Industry }) {
  return (
    <Link href={`/industries/${ind.slug}`}
          className="group flex items-center gap-3 cursor-pointer rounded-card border transition-all"
          style={{ background:'var(--surface)', borderColor:'var(--border-card)', padding:'14px 16px',
                   transitionDuration:'250ms', transitionTimingFunction:'var(--ease-apple)' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'var(--accent)'
            el.style.boxShadow = '0 4px 20px rgba(255,90,31,0.15)'
            el.style.transform = 'translateY(-3px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'var(--border-card)'
            el.style.boxShadow = 'none'
            el.style.transform = 'none'
          }}>
      <div className="relative flex-shrink-0 rounded-lg overflow-hidden" style={{ width:52, height:52 }}>
        <Image src={INDUSTRY_IMAGES[ind.slug]} alt={ind.name} fill sizes="52px" className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <span className={[
          'inline-block px-1.5 py-0.5 rounded text-[0.55rem] font-bold uppercase tracking-wide mb-0.5',
          ind.badge === 'Primary' ? 'text-accent bg-accent/10' : 'text-white/40 bg-white/5',
        ].join(' ')}>{ind.badge}</span>
        <div className="text-[0.85rem] font-bold text-white leading-tight mb-0.5 truncate group-hover:text-accent"
             style={{ transitionProperty:'color', transitionDuration:'250ms' }}>{ind.name}</div>
        <p className="text-[0.7rem] text-white/45 leading-[1.4] line-clamp-1">{ind.desc}</p>
      </div>
    </Link>
  )
}