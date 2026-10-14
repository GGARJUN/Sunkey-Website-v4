'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { WORK_PROJECTS, type WorkProject } from '@/lib/data/workProjects'

const N = WORK_PROJECTS.length

function mod(n: number, m: number) { return ((n % m) + m) % m }

export function ProjectsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const prev = useCallback(() => setCurrent(c => mod(c - 1, N)), [])
  const next = useCallback(() => setCurrent(c => mod(c + 1, N)), [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, next])

  const projects = [
    WORK_PROJECTS[mod(current - 1, N)],
    WORK_PROJECTS[current],
    WORK_PROJECTS[mod(current + 1, N)],
  ]

  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="section-container mb-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-[#0D0F14]"
                style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>
              Projects that <span className="gradient-text">shipped.</span>
            </h2>
          </div>
          <p className="text-[0.88rem] text-[#5A6072] max-w-[280px] leading-[1.65]">
            Real board photography. Real specs. All client details anonymized.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative"
           onMouseEnter={() => setPaused(true)}
           onMouseLeave={() => setPaused(false)}>

        {/* Slides — 3 visible simultaneously */}
        <div className="grid gap-3 px-4 md:px-8"
             style={{ gridTemplateColumns: '1fr 1.5fr 1fr' }}>

          {/* Prev */}
          <button onClick={prev} className="relative overflow-hidden rounded-card cursor-pointer group border-0 p-0 text-left"
                  style={{ height: 460 }} aria-label="Previous project">
            <Image src={projects[0].image} alt={projects[0].title} fill
                   sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-card" style={{ background:'rgba(0,0,0,0.72)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-accent/70 mb-1">{projects[0].industryLabel}</div>
              <div className="text-[0.9rem] font-bold text-white/60 line-clamp-2">{projects[0].title}</div>
            </div>
          </button>

          {/* Current — featured, overlay card */}
          <div className="relative overflow-hidden rounded-card" style={{ height: 460 }}>
            <Image src={projects[1].image} alt={projects[1].title} fill priority
                   sizes="50vw" className="object-cover" />
            {/* Base dark overlay */}
            <div className="absolute inset-0" style={{ background:'rgba(0,0,0,0.45)' }} />

            {/* Overlay content card — bottom left, ManageEngine style */}
            <div className="absolute bottom-6 left-6 right-6 rounded-card p-6"
                 style={{ background:'rgba(13,15,20,0.88)', backdropFilter:'blur(12px)', border:'1px solid rgba(255,90,31,0.2)' }}>
              <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
                {projects[1].industryLabel} · {projects[1].client}
              </div>
              <h3 className="font-bold text-white mb-2 leading-[1.25]"
                  style={{ fontSize:'clamp(1rem,2vw,1.25rem)' }}>
                {projects[1].title}
              </h3>
              <p className="text-[0.78rem] text-white/55 leading-[1.6] mb-4 line-clamp-2">
                {projects[1].description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {projects[1].specs.slice(0,2).map(s => (
                    <span key={s} className="card-tag">{s}</span>
                  ))}
                </div>
                <Link href={`/work/${projects[1].slug}`}
                      className="flex items-center gap-1.5 text-[0.8rem] font-bold text-accent hover:text-white transition-colors flex-shrink-0 ml-3 cursor-pointer"
                      style={{ transitionDuration:'150ms' }}>
                  View Project <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>

          {/* Next */}
          <button onClick={next} className="relative overflow-hidden rounded-card cursor-pointer group border-0 p-0 text-left"
                  style={{ height: 460 }} aria-label="Next project">
            <Image src={projects[2].image} alt={projects[2].title} fill
                   sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-card" style={{ background:'rgba(0,0,0,0.72)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-accent/70 mb-1">{projects[2].industryLabel}</div>
              <div className="text-[0.9rem] font-bold text-white/60 line-clamp-2">{projects[2].title}</div>
            </div>
          </button>
        </div>

        {/* Left arrow */}
        <button onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-accent hover:border-accent transition-all cursor-pointer"
                style={{ background:'rgba(13,15,20,0.7)', backdropFilter:'blur(8px)', transitionDuration:'200ms' }}
                aria-label="Previous">
          <ArrowLeft size={16} strokeWidth={2} />
        </button>

        {/* Right arrow */}
        <button onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-accent hover:border-accent transition-all cursor-pointer"
                style={{ background:'rgba(13,15,20,0.7)', backdropFilter:'blur(8px)', transitionDuration:'200ms' }}
                aria-label="Next">
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Dots + CTA */}
      <div className="section-container mt-8 flex flex-col items-center gap-6">
        {/* Dot pagination */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Carousel navigation">
          {WORK_PROJECTS.map((_, i) => (
            <button key={i} role="tab" aria-selected={i === current}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all cursor-pointer border-0"
                    style={{
                      width:  i === current ? 28 : 8,
                      height: 8,
                      background: i === current ? 'var(--accent)' : 'rgba(0,0,0,0.15)',
                      transitionDuration: '300ms',
                    }}
                    aria-label={`Project ${i+1}`} />
          ))}
        </div>

        {/* CTA */}
        <Link href="/work" className="btn-primary">
          View All Projects <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  )
}
