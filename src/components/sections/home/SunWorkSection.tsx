'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { WORK_PROJECTS } from '@/lib/data/workProjects'

/* ── 8 featured projects for the sun layout ── */
const FEATURED = WORK_PROJECTS.slice(0, 8)
const N        = FEATURED.length

/* ── Layout constants ── */
const CX = 440  // container center x
const CY = 440  // container center y
const R  = 310  // orbit radius — card center distance from sun

const CARD_W = 185   // card width
const CARD_H = 215   // card total height
const IMG_H  = 155   // image area height (72% of card)

/* Compute absolute card position for index i (0 = top, clockwise) */
function pos(i: number) {
  const angle = (i * (360 / N) - 90) * (Math.PI / 180)
  const cx    = CX + R * Math.cos(angle)
  const cy    = CY + R * Math.sin(angle)
  return { cx, cy, left: cx - CARD_W / 2, top: cy - CARD_H / 2 }
}

const CONTAINER = CX * 2   // 880px

export function SunWorkSection() {
  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="section-container">
        <AnimateOnView className="text-center mb-12">
          <div className="section-label">Selected Work</div>
          <h2 className="font-extrabold tracking-tightest leading-[1.1] text-[#0D0F14]"
              style={{ fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
            Projects that <span className="gradient-text">shipped.</span>
          </h2>
        </AnimateOnView>

        {/* ── Desktop: radial sun layout ── */}
        <div className="hidden lg:block relative mx-auto"
             style={{ width: CONTAINER, height: CONTAINER }}>

          {/* SVG ray lines from center to each card */}
          <svg viewBox={`0 0 ${CONTAINER} ${CONTAINER}`} aria-hidden="true"
               style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }}>
            {FEATURED.map((_, i) => {
              const { cx, cy } = pos(i)
              return (
                <line key={i} x1={CX} y1={CY} x2={cx} y2={cy}
                      stroke="rgba(255,90,31,0.22)" strokeWidth={1.5} strokeDasharray="5 5" />
              )
            })}
          </svg>

          {/* Center — Sunkey sun (S-mark logo) */}
          <div style={{ position:'absolute', left:CX-44, top:CY-44, width:88, height:88, zIndex:3 }}>
            <Link href="/work" aria-label="View all projects"
                  className="block cursor-pointer">
              <div className="relative rounded-full overflow-hidden"
                   style={{ width:88, height:88, border:'3px solid rgba(255,90,31,0.5)',
                            animation:'breathe 4s ease-in-out infinite',
                            boxShadow:'0 0 28px rgba(255,90,31,0.3)' }}>
                <Image src="/images/favicon.png" alt="Sunkey" width={88} height={88} priority />
              </div>
            </Link>
            {/* Sonar rings */}
            {[130, 175, 225].map((size, i) => (
              <div key={size} aria-hidden="true"
                   style={{ position:'absolute',
                            top: (88-size)/2, left: (88-size)/2,
                            width:size, height:size,
                            borderRadius:'50%',
                            border:'1px solid rgba(255,90,31,0.15)',
                            animation:`sonar 3s ease-out ${i*0.9}s infinite` }} />
            ))}
          </div>

          {/* Project cards in orbit */}
          {FEATURED.map((project, i) => {
            const { left, top } = pos(i)
            return (
              <Link key={project.slug} href={`/work/${project.slug}`}
                    className="group absolute overflow-hidden rounded-card border border-border-card cursor-pointer transition-all"
                    style={{ left, top, width:CARD_W, height:CARD_H, zIndex:1, background:'var(--surface)',
                             transitionDuration:'250ms', transitionTimingFunction:'var(--ease-apple)' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'var(--accent)'
                      el.style.boxShadow   = '0 8px 28px rgba(255,90,31,0.18)'
                      el.style.transform   = 'translateY(-5px) scale(1.02)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'var(--border-card)'
                      el.style.boxShadow   = 'none'
                      el.style.transform   = 'none'
                    }}>
                {/* Image — 72% of card height */}
                <div style={{ position:'relative', width:CARD_W, height:IMG_H, overflow:'hidden' }}>
                  <Image src={project.image} alt={project.title} fill
                         sizes="185px"
                         className="object-cover transition-transform duration-500 group-hover:scale-108" />
                  <div style={{ position:'absolute', inset:0,
                                background:'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35))' }} />
                </div>
                {/* Title area */}
                <div style={{ padding:'8px 10px 10px' }}>
                  <div style={{ fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.1em',
                                textTransform:'uppercase', color:'var(--accent)', marginBottom:3 }}>
                    {project.industryLabel}
                  </div>
                  <div className="font-bold text-white leading-tight group-hover:text-accent line-clamp-2"
                       style={{ fontSize:'0.8rem', transitionProperty:'color', transitionDuration:'250ms' }}>
                    {project.title}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
          {FEATURED.map(project => (
            <Link key={project.slug} href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-card border border-border-card cursor-pointer">
              <div className="relative w-full" style={{ height:120 }}>
                <Image src={project.image} alt={project.title} fill
                       sizes="(max-width:640px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-3" style={{ background:'var(--surface)' }}>
                <div className="text-[0.62rem] font-bold uppercase tracking-wide text-accent mb-0.5">{project.industryLabel}</div>
                <div className="font-bold text-white text-[0.78rem] line-clamp-2">{project.title}</div>
              </div>
            </Link>
          ))}
        </div>

        <AnimateOnView className="text-center mt-12">
          <Link href="/work" className="btn-primary inline-flex">
            View All 16 Projects <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </AnimateOnView>
      </div>

      <style>{`
        @keyframes sonar  { 0%{transform:scale(0.85);opacity:0.7;} 100%{transform:scale(1.8);opacity:0;} }
        @keyframes breathe{ 0%,100%{transform:scale(1);} 50%{transform:scale(1.06);} }
        .group-hover\:scale-108:hover { transform: scale(1.08); }
      `}</style>
    </section>
  )
}
