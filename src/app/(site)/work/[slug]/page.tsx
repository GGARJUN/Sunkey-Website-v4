import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { WORK_PROJECTS } from '@/lib/data/workProjects'

export function generateStaticParams() {
  return WORK_PROJECTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = WORK_PROJECTS.find(p => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description.slice(0, 155) + '…',
    alternates: { canonical: `https://sunkeydesignsystems.com/work/${slug}` },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = WORK_PROJECTS.find(p => p.slug === slug)
  if (!project) notFound()

  const idx  = WORK_PROJECTS.indexOf(project)
  const prev = WORK_PROJECTS[idx - 1]
  const next = WORK_PROJECTS[idx + 1]

  // Related: any 3 other projects (exclude current)
  const related = WORK_PROJECTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-bg" style={{ minHeight: '60vh' }}>
        <div className="relative w-full" style={{ height: '60vh', minHeight: 400 }}>
          <Image src={project.image} alt={project.title} fill priority sizes="100vw"
                 className="object-cover object-center" style={{ filter: 'brightness(0.45)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 section-container pb-10 z-10">
            <AnimateOnView>
              <div className="flex items-center gap-2 mb-5">
                <Link href="/work" className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                  <ArrowLeft size={12} strokeWidth={2} /> Our Work
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold bg-accent text-white">{project.industryLabel}</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold bg-white/10 border border-white/20 text-white/70">{project.client}</span>
              </div>
              <h1 className="font-black tracking-tightest leading-[1.1] text-white max-w-[760px]"
                  style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>{project.title}</h1>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-14">
            <AnimateOnView>
              <div className="section-label">Project Overview</div>
              <p className="text-[0.95rem] leading-[1.8] text-white/60 mb-8">{project.description}</p>
              <div className="section-label mt-8">Technical Specifications</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 mb-8">
                {project.specs.map(spec => (
                  <div key={spec} className="card-v2 p-4 text-center">
                    <div className="text-[0.78rem] font-bold text-white">{spec}</div>
                  </div>
                ))}
              </div>
              <div className="section-label">Services Delivered</div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.serviceLabels.map(svc => (
                  <span key={svc} className="inline-flex items-center px-3 py-1.5 text-[0.78rem] font-semibold text-white/80"
                        style={{ borderRadius:'6px', background:'rgba(255,90,31,0.12)', border:'1px solid rgba(255,90,31,0.2)' }}>
                    {svc}
                  </span>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.12}>
              <div className="card-v2 p-7 lg:sticky lg:top-24">
                <div className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-white/30 mb-3">Similar Project?</div>
                <p className="text-[0.85rem] leading-[1.7] text-white/45 mb-6">
                  Share your requirement and we will scope a similar engagement within 2 business days.
                </p>
                <Link href="/contact?type=requirement" className="btn-primary w-full justify-center">Share Your Requirement</Link>
                <Link href="/contact?type=meeting"
                      className="flex items-center justify-center gap-2 mt-3 text-[0.8rem] font-semibold text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                      style={{ transitionDuration:'150ms' }}>
                  Book a Discovery Call
                </Link>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-[80px]" style={{ background:'#F5F6F9' }}>
        <div className="section-container">
          <AnimateOnView className="mb-10">
            <div className="section-label">More Projects</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white"
                style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)' }}>
              You might also find these relevant.
            </h2>
          </AnimateOnView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((rp, i) => (
              <AnimateOnView key={rp.slug} delay={i * 0.08} className="h-full">
                <Link href={`/work/${rp.slug}`} className="group card-v2 p-0 overflow-hidden flex flex-col cursor-pointer h-full">
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio:'16/9' }}>
                    <Image src={rp.image} alt={rp.title} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                           className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[0.62rem] font-semibold px-2 py-0.5 rounded-full bg-black/60 border border-white/20 text-white/80 backdrop-blur-sm">
                        {rp.client}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">{rp.industryLabel}</div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="font-bold text-white leading-[1.3] group-hover:text-accent flex-1"
                           style={{ fontSize:'0.95rem', transitionProperty:'color', transitionDuration:'250ms' }}>
                        {rp.title}
                      </div>
                      <ArrowRight size={14} strokeWidth={2}
                                  className="text-text-muted opacity-0 group-hover:opacity-100 flex-shrink-0 mt-0.5 transition-opacity"
                                  style={{ transitionDuration:'250ms' }} />
                    </div>
                    <p className="text-[0.78rem] leading-[1.65] text-text-muted line-clamp-2 flex-1">{rp.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-card mt-auto">
                      {rp.specs.map(spec => <span key={spec} className="card-tag">{spec}</span>)}
                    </div>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Prev/Next navigation */}
      {(prev || next) && (
        <section className="py-[60px] bg-white border-t border-[#E8E9EE]">
          <div className="section-container">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              {prev ? (
                <Link href={`/work/${prev.slug}`}
                      className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer"
                      style={{ transitionDuration:'150ms' }}>
                  <ArrowLeft size={16} strokeWidth={2} className="group-hover:-translate-x-1 transition-transform" style={{ transitionDuration:'200ms' }} />
                  <div>
                    <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30 mb-0.5">Previous</div>
                    <div className="text-[0.88rem] font-semibold line-clamp-1 max-w-[280px]">{prev.title}</div>
                  </div>
                </Link>
              ) : <div />}
              <Link href="/work" className="text-[0.8rem] font-semibold text-white/35 hover:text-white/60 transition-colors cursor-pointer">All Projects</Link>
              {next ? (
                <Link href={`/work/${next.slug}`}
                      className="group flex items-center gap-3 text-right text-white/50 hover:text-white transition-colors cursor-pointer"
                      style={{ transitionDuration:'150ms' }}>
                  <div>
                    <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/30 mb-0.5">Next</div>
                    <div className="text-[0.88rem] font-semibold line-clamp-1 max-w-[280px]">{next.title}</div>
                  </div>
                  <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" style={{ transitionDuration:'200ms' }} />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
