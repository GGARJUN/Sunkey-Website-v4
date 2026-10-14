import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { WORK_PROJECTS } from '@/lib/data/workProjects'

// Show 3 featured projects on the homepage
const FEATURED = WORK_PROJECTS.slice(0, 3)

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-[120px] bg-surface" aria-label="Selected work">
      <div className="section-container">

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <AnimateOnView>
            <div className="section-label">Selected Work</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white" style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>
              Projects that <span className="gradient-text">shipped.</span>
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Link href="/work" className="flex items-center gap-2 text-[0.85rem] font-bold text-accent hover:text-white transition-colors duration-150 cursor-pointer flex-shrink-0">
              See all 16 projects <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {FEATURED.map((project, i) => (
            <AnimateOnView key={project.slug} delay={i * 0.09}>
              <Link href={`/work/${project.slug}`} className="group card-v2 p-0 overflow-hidden flex flex-col cursor-pointer">
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[0.62rem] font-semibold px-2 py-0.5 rounded-full bg-black/60 border border-white/20 text-white/80 backdrop-blur-sm">
                      {project.client}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
                    {project.industryLabel}
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="text-[0.95rem] font-bold text-white group-hover:text-accent transition-colors duration-[250ms] leading-[1.3]">
                      {project.title}
                    </div>
                    <ArrowRight size={14} className="text-text-muted flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" strokeWidth={2} />
                  </div>
                  <p className="text-[0.78rem] leading-[1.65] text-text-muted mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-card mt-auto">
                    {project.specs.map(spec => (
                      <span key={spec} className="card-tag group-hover:!bg-accent group-hover:!text-white">{spec}</span>
                    ))}
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
