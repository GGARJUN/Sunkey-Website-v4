import Image from 'next/image'
import type { Metadata } from 'next'
import { WorkGallery } from './WorkGallery'

export const metadata: Metadata = {
  title: 'Our Work — 16 Projects Delivered',
  description:
    'Real electronics engineering projects by Sunkey Design Systems — PCB design, embedded firmware, IoT, drone electronics, and automotive. All client details anonymized.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/work' },
  openGraph: {
    title: 'Our Work | Sunkey Design Systems',
    description: 'PCB design, firmware, IoT, drone and automotive electronics projects — real board photography, real specs.',
    url: 'https://sunkeydesignsystems.com/work',
  },
}

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background:"var(--bg)" }}>
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1920&q=80&auto=format&fit=crop"
                 alt="" fill sizes="100vw" className="object-cover object-center"
                 style={{ filter:'brightness(0.18) saturate(0.7)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
        </div>
        <div aria-hidden="true"
             className="absolute w-[500px] h-[500px] -top-[120px] right-0 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(255,90,31,0.12) 0%, transparent 68%)' }} />
        <div className="section-container relative z-10 pt-[160px] pb-[100px]">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.35)' }}>Our Work</div>
          <h1 className="font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[640px]"
              style={{ fontSize: 'clamp(2.8rem,5vw,4.2rem)' }}>
            Projects that
            <br />
            <span className="gradient-text">shipped.</span>
          </h1>
          <p className="text-[1rem] leading-[1.72] text-white/55 max-w-[500px]">
            Real projects, real board photography, real technical specifications.
            All client details fully anonymized.
          </p>
        </div>
      </section>

      {/* Filterable project gallery — client component */}
      <WorkGallery />
    </>
  )
}
