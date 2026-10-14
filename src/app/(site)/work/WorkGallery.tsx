'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { WORK_PROJECTS, WORK_INDUSTRIES, WORK_SERVICES, type WorkProject } from '@/lib/data/workProjects'

export function WorkGallery() {
  const [activeIndustry, setActiveIndustry] = useState<string>('all')
  const [activeService,  setActiveService]  = useState<string>('all')

  const filtered = useMemo(() => WORK_PROJECTS.filter(p => {
    const matchIndustry = activeIndustry === 'all' || p.industry === activeIndustry
    const matchService  = activeService  === 'all' || p.services.includes(activeService)
    return matchIndustry && matchService
  }), [activeIndustry, activeService])

  return (
    <section className="py-[60px] bg-white min-h-[60vh]">
      <div className="section-container">

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-5 mb-10 pb-7 border-b border-border-card">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-text-muted mr-1">Industry:</span>
            <FilterPill label="All" active={activeIndustry === 'all'} onClick={() => setActiveIndustry('all')} />
            {WORK_INDUSTRIES.map(ind => (
              <FilterPill key={ind.slug} label={ind.label} active={activeIndustry === ind.slug} onClick={() => setActiveIndustry(ind.slug)} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:border-l sm:border-border-card sm:pl-5">
            <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-text-muted mr-1">Service:</span>
            <FilterPill label="All" active={activeService === 'all'} onClick={() => setActiveService('all')} />
            {WORK_SERVICES.map(svc => (
              <FilterPill key={svc.slug} label={svc.label} active={activeService === svc.slug} onClick={() => setActiveService(svc.slug)} />
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="text-[0.78rem] text-text-muted mb-8">
          Showing <span className="text-white font-semibold">{filtered.length}</span> of {WORK_PROJECTS.length} projects
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <AnimateOnView key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </AnimateOnView>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted text-[0.95rem] mb-4">No projects match the selected filters.</p>
            <button onClick={() => { setActiveIndustry('all'); setActiveService('all') }}
                    className="pill pill-active cursor-pointer">
              Clear filters
            </button>
          </div>
        )}

        {filtered.length > 0 && (
          <AnimateOnView className="mt-16 text-center">
            <p className="text-text-muted text-[0.9rem] mb-5">Have a similar project?</p>
            <Link href="/contact?type=requirement" className="btn-primary">Share Your Requirement</Link>
          </AnimateOnView>
        )}
      </div>
    </section>
  )
}

function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
            className={['pill cursor-pointer', active ? 'pill-active' : 'hover:border-accent/50 hover:text-white'].join(' ')}>
      {label}
    </button>
  )
}

function ProjectCard({ project }: { project: WorkProject }) {
  return (
    /* Each card links to its own dedicated page */
    <Link href={`/work/${project.slug}`} className="group card-v2 p-0 overflow-hidden flex flex-col cursor-pointer h-full">

      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image src={project.image} alt={project.title} fill
               sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
               className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[0.62rem] font-semibold px-2 py-0.5 rounded-full bg-black/60 border border-white/20 text-white/80 backdrop-blur-sm">
            {project.client}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">{project.industryLabel}</div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="font-bold tracking-tight text-white leading-[1.3] group-hover:text-accent flex-1"
               style={{ fontSize: '0.98rem', transitionProperty: 'color', transitionDuration: '250ms' }}>
            {project.title}
          </div>
          <ArrowRight size={15} strokeWidth={2}
                      className="text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0 mt-0.5"
                      style={{ transitionDuration: '250ms' }} />
        </div>
        <p className="text-[0.78rem] leading-[1.65] text-text-muted mb-4 flex-1 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-card">
          {project.specs.map((spec, i) => (
            <span key={spec} className="card-tag" style={{ transitionDelay: `${i * 30}ms` }}>{spec}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.serviceLabels.map((svc, i) => (
            <span key={svc}>
              {i > 0 && <span className="text-text-muted text-[0.62rem] mr-1">·</span>}
              <span className="text-[0.62rem] font-semibold text-accent/70">{svc}</span>
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
