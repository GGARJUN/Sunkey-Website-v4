import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

export const metadata: Metadata = {
  title: 'About Sunkey Design Systems',
  description:
    'Sunkey Design Systems is a DPIIT-recognized electronics engineering company based in Chennai, India. Founded in 2025, we serve hardware teams in the USA and Europe.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/about' },
}

const DIFFERENTIATORS = [
  {
    title: 'Truly end-to-end',
    desc: 'Most engineering partners cover one phase. Sunkey covers all of them — PCB design, firmware, PCBA, manufacturing, and testing — under a single engagement. No handoff gaps, no integration risk.',
  },
  {
    title: '2-day costing, 2–3 week prototypes',
    desc: 'Hardware moves slowly by default. We eliminate two of the biggest delays: quoting and prototyping. Detailed cost breakdowns in 2 business days. Working prototypes in 2 to 3 weeks.',
  },
  {
    title: 'India cost structure, global quality standard',
    desc: 'Our engineering team is based in Chennai. Our quality commitments — CE, FCC, EMI/EMC support, and ISO 9001:2015 and IATF 16949:2016 certified supplier processes — match the expectations of US and European hardware teams.',
  },
] as const

const STATS = [
  { value: '30+', label: 'Projects delivered'       },
  { value: '98%', label: 'Project success rate'     },
  { value: '99%', label: 'On-time delivery'         },
  { value: '9.7', label: 'Client satisfaction / 10' },
] as const

const CERTS = [
  { name: 'CE',          desc: 'European conformity support for all applicable product directives' },
  { name: 'FCC',         desc: 'US Federal Communications Commission compliance support'           },
  { name: 'EMI / EMC',   desc: 'Electromagnetic interference and compatibility design practice'    },
  { name: 'ISO 9001',    desc: 'Quality management system — certified supplier standard'           },
  { name: 'IATF 16949',  desc: 'Automotive quality management — certified supplier standard'      },
  { name: 'DPIIT',       desc: 'Government of India startup recognition — DIPP273645'              },
] as const

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background:"var(--bg)" }}>
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop"
                 alt="" fill sizes="100vw" className="object-cover object-center"
                 style={{ filter:'brightness(0.18) saturate(0.7)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
        </div>
        <div
          aria-hidden="true"
          className="absolute w-[480px] h-[480px] -top-[100px] right-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,80,48,0.14) 0%, transparent 68%)' }}
        />
        <div className="section-container relative z-10 pt-[160px] pb-[100px]">
          <AnimateOnView>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.30)' }}>
              About Sunkey
            </div>
            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-6 max-w-[640px]">
              Built in Chennai,<br />
              <span className="gradient-text">engineered for the world.</span>
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[520px]">
              Sunkey Design Systems is a DPIIT-recognized electronics engineering company
              serving hardware teams in the USA and Europe. We handle the full product
              lifecycle — from first schematic to final shipment.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Story */}
      <section className="py-[100px] bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnView>
              <div className="section-label">Who We Are</div>
              <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark mb-6">
                One partner for the{' '}
                <span className="gradient-text">entire hardware journey.</span>
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.1} className="space-y-5">
              <p className="text-[0.95rem] leading-[1.75] text-muted">
                Sunkey Design Systems Private Limited was founded in April 2025 with a single
                goal: eliminate the vendor fragmentation that slows hardware development.
                When PCB design, firmware, PCBA, and manufacturing sit with different partners,
                integration is the client&apos;s problem. At Sunkey, it is ours.
              </p>
              <p className="text-[0.95rem] leading-[1.75] text-muted">
                Our engineering team has delivered projects across semiconductor test equipment,
                industrial automation, drone electronics, IoT platforms, and automotive systems —
                primarily for clients in the USA and Europe who need the speed and cost advantages
                of India-based engineering without any compromise on quality or responsiveness.
              </p>
              <p className="text-[0.95rem] leading-[1.75] text-muted">
                We are a DPIIT-recognized startup with active engagements across multiple verticals.
                Every project we take on is staffed by engineers who have done exactly this kind of
                work before, on similar hardware, at similar complexity.
              </p>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-[100px] bg-surface">
        <div className="section-container">
          <AnimateOnView className="mb-14">
            <div className="section-label">What Sets Us Apart</div>
            <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark max-w-[480px]">
              Three reasons clients{' '}
              <span className="gradient-text">stay with Sunkey.</span>
            </h2>
          </AnimateOnView>

          <div className="grid lg:grid-cols-3 gap-[2px]">
            {DIFFERENTIATORS.map((d, i) => (
              <AnimateOnView key={d.title} delay={i * 0.08}>
                <div className="bg-white p-9 h-full">
                  <div
                    className="w-8 h-[2px] mb-6"
                    style={{ background: 'linear-gradient(90deg,#f05030,#ec4040)' }}
                    aria-hidden="true"
                  />
                  <div className="text-[1rem] font-bold tracking-tight text-dark mb-3">
                    {d.title}
                  </div>
                  <p className="text-[0.85rem] leading-[1.72] text-muted">{d.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[80px] bg-dark">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {STATS.map((s, i) => (
              <AnimateOnView
                key={s.label}
                delay={i * 0.08}
                className={[
                  'text-center px-8 py-6',
                  i < STATS.length - 1 ? 'border-r border-white/[0.08]' : '',
                ].join(' ')}
              >
                <div className="text-hero font-black tracking-tightest leading-none mb-1.5 gradient-text">
                  {s.value}
                </div>
                <div className="text-[0.78rem] font-medium text-white/35">{s.label}</div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-[100px] bg-white">
        <div className="section-container">
          <AnimateOnView className="mb-14">
            <div className="section-label">Certifications & Recognition</div>
            <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark max-w-[480px]">
              Standards your team{' '}
              <span className="gradient-text">already requires.</span>
            </h2>
          </AnimateOnView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {CERTS.map((cert, i) => (
              <AnimateOnView key={cert.name} delay={i * 0.06}>
                <div className="bg-surface p-7">
                  <div className="text-[1.1rem] font-black tracking-tightest gradient-text mb-2">
                    {cert.name}
                  </div>
                  <p className="text-[0.82rem] leading-[1.65] text-muted">{cert.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-surface border-t border-border-light">
        <div className="section-container text-center">
          <AnimateOnView>
            <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark mb-5">
              Ready to start a project?
            </h2>
            <p className="text-[0.95rem] leading-[1.72] text-muted mb-8 max-w-[420px] mx-auto">
              Share your requirement and we will scope it within 2 business days.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link href="/contact?type=meeting" className="btn-primary">
                Book a Discovery Call
              </Link>
              <Link href="/contact?type=requirement" className="btn-ghost-dark">
                Share Your Requirement
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
