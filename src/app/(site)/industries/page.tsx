'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { INDUSTRY_IMAGES } from '@/lib/data/industryImages'

/* ── Hexagonal layout — 6 industries around Sunkey center ── */

const INDUSTRIES = [
  { slug:'semiconductor',         name:'Semiconductor',        sub:'Test & Validation Equipment',   },
  { slug:'industrial-automation', name:'Industrial Automation', sub:'Smart Manufacturing',           },
  { slug:'drone-uav',             name:'Drone & UAV',           sub:'UAV Designs',                  },
  { slug:'iot-smart-devices',     name:'IoT & Smart',           sub:'Connected Product Design',      },
  { slug:'automotive',            name:'Automotive',            sub:'Vehicle Electronics',           },
  { slug:'agricultural-technology',name:'AgriTech',            sub:'Precision Farming Electronics', },
] as const

/* Flat-top hex clip-path */
const HEX_CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

/* Hex size */
const HW = 230   // hex width
const HH = 200   // hex height (W * sqrt(3)/2 ≈ W * 0.866 but flattened slightly)

/* Flower positions: 6 hexes around center, distance D from center */
const D = 248
const CX = 500, CY = 390   // center of the arrangement

const ANGLES_DEG = [90, 30, -30, -90, -150, 150]
const POSITIONS = ANGLES_DEG.map(a => {
  const r = a * Math.PI / 180
  return { x: CX + D * Math.cos(r), y: CY - D * Math.sin(r) }
})

const STATS = [
  { v:'30+', l:'Years Combined Experience' },
  { v:'50+', l:'Products Delivered'        },
  { v:'E2E', l:'End-to-End Solutions'      },
  { v:'20+', l:'Global Customers'          },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg pt-[160px] pb-[60px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop"
                 alt="" fill sizes="100vw" className="object-cover" style={{ filter:'brightness(0.2) saturate(0.7)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
        </div>
        <div className="section-container relative z-10 text-center">
          <AnimateOnView>
            <div className="section-label" style={{ color:'rgba(255,255,255,0.35)' }}>Industries</div>
            <h1 className="font-black tracking-tightest leading-[1.08] text-white mb-4"
                style={{ fontSize:'clamp(2.8rem,5vw,4.2rem)' }}>
              Industries <span className="gradient-text">We Serve</span>
            </h1>
            <p className="text-[1rem] text-white/50 max-w-[500px] mx-auto">
              Innovating today. Powering tomorrow.
              <br />Your Industry. Our Expertise. One Trusted Partner.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Hex layout */}
      <section className="py-[60px] overflow-hidden" style={{ background:'#F5F6F9' }}>
        <div className="w-full max-w-[1100px] mx-auto px-4">

          {/* Desktop hex */}
          <div className="hidden md:block relative mx-auto"
               style={{ width: 1000, height: 800 }}>

            {INDUSTRIES.map((ind, i) => {
              const pos = POSITIONS[i]
              return (
                <Link key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="group absolute"
                      style={{
                        width: HW, height: HH,
                        left: pos.x - HW / 2,
                        top:  pos.y - HH / 2,
                        clipPath: HEX_CLIP,
                        overflow: 'hidden',
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}>
                  {/* Background image */}
                  <Image src={INDUSTRY_IMAGES[ind.slug]} alt={ind.name} fill
                         sizes="240px" className="object-cover transition-transform duration-500 group-hover:scale-110" />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 transition-opacity duration-300"
                       style={{ background:'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.8))',
                                opacity: 1 }} />

                  {/* Hover accent glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ background: 'rgba(255,90,31,0.2)' }} />

                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <div className="text-[0.95rem] font-black text-white leading-tight mb-1 group-hover:text-accent"
                         style={{ transitionProperty:'color', transitionDuration:'250ms' }}>
                      {ind.name}
                    </div>
                    <div className="text-[0.68rem] text-white/60">{ind.sub}</div>
                  </div>
                </Link>
              )
            })}

            {/* Center — Sunkey S-mark */}
            <div className="absolute flex flex-col items-center justify-center"
                 style={{ width: 180, height: 180, left: CX - 90, top: CY - 90, zIndex: 10 }}>
              <div className="relative flex items-center justify-center rounded-full"
                   style={{ width: 180, height: 180, background:'rgba(13,15,20,0.9)', border:'2px solid rgba(255,90,31,0.3)' }}>
                {/* Sonar rings */}
                {[1,2,3].map(n => (
                  <div key={n} className="absolute rounded-full border border-accent/15"
                       style={{ width:180+n*50, height:180+n*50, animation:`sonar 3s ease-out ${(n-1)*0.8}s infinite`, zIndex:-1 }} />
                ))}
                <Link href="/industries" className="rounded-full overflow-hidden block"
                      style={{ width:90, height:90, animation:'breathe 4s ease-in-out infinite' }}>
                  <Image src="/images/favicon.png" alt="Sunkey" width={90} height={90} className="rounded-full" />
                </Link>
              </div>
            </div>

          </div>

          {/* Mobile fallback — 2-col grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
            {INDUSTRIES.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}
                    className="relative overflow-hidden rounded-xl cursor-pointer" style={{ aspectRatio:'1/1' }}>
                <Image src={INDUSTRY_IMAGES[ind.slug]} alt={ind.name} fill sizes="45vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background:'rgba(0,0,0,0.6)' }} />
                <div className="absolute inset-0 flex items-end p-3">
                  <div>
                    <div className="text-[0.82rem] font-bold text-white">{ind.name}</div>
                    <div className="text-[0.65rem] text-white/50">{ind.sub}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-[60px] bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-border-card rounded-card overflow-hidden">
            {STATS.map((s, i) => (
              <div key={s.l} className={['flex flex-col items-center py-8 px-4 text-center',
                    i < 3 ? 'border-r border-border-card' : ''].join(' ')}>
                <div className="font-black gradient-text mb-1" style={{ fontSize:'clamp(2rem,4vw,3rem)' }}>{s.v}</div>
                <div className="text-[0.75rem] text-white/45">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-accent font-bold mt-8 text-[0.88rem] tracking-wide">
            Your Industry. Our Expertise. One Trusted Partner.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes sonar { 0% { transform:scale(1);opacity:0.6; } 100% { transform:scale(1.8);opacity:0; } }
        @keyframes breathe { 0%,100% { transform:scale(1); } 50% { transform:scale(1.06); } }
      `}</style>
    </>
  )
}
