import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Sunkey\'s engineering process — from first brief to delivered hardware. Scoping in 2 days, prototypes in 2–3 weeks, transparent milestone tracking throughout.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/how-we-work' },
}

const STEPS = [
  {
    num: '01',
    title: 'Share your requirement',
    time: 'Day 0',
    detail: [
      'Fill the brief form on our contact page or book a 30-minute discovery call.',
      'Tell us the board spec, key components, target volume, and timeline. The more detail, the faster the scope.',
      'If you have existing schematics, BoM, or reference designs — attach them. We review everything before the scoping call.',
    ],
  },
  {
    num: '02',
    title: 'Engineering scoping & quote',
    time: 'Day 1–2',
    detail: [
      'Our engineers review your requirement and build a detailed scope covering design complexity, estimated hours, and material costs.',
      'You receive a clear cost breakdown — not a ballpark — within 2 business days of sharing your requirement.',
      'For prototype builds: we quote material, assembly, and testing separately so you can make informed go/no-go decisions at each stage.',
    ],
  },
  {
    num: '03',
    title: 'Design, build & milestone reviews',
    time: 'Week 1–N',
    detail: [
      'Engineering kicks off on agreed scope. You get milestone visibility — not a single handoff at the end.',
      'For PCB design: schematic review, layout review, and DFM check are built-in gates before Gerbers are released.',
      'For firmware: architecture review, module-level testing, and integration testing are scheduled, not optional.',
      'Change requests are scoped and priced transparently before being actioned.',
    ],
  },
  {
    num: '04',
    title: 'Ship, test & support',
    time: '2–3 weeks (prototype)',
    detail: [
      'Prototype hardware ships in 2–3 weeks from design sign-off. Production timelines are quoted per volume.',
      'Every build includes functional testing. AOI, X-ray, and end-of-line test reports are shared with the shipment.',
      'Post-delivery support is included — not a separate contract. Bug fixes and design revisions are handled under the original engagement.',
    ],
  },
] as const

const ENGAGEMENT_MODELS = [
  {
    name: 'Fixed-cost project',
    best: 'Well-defined scope — specific PCB design, firmware module, or prototype build',
    desc: 'We scope the work, agree a price, and deliver to that spec. Suitable for discrete, bounded projects where requirements are clear upfront.',
  },
  {
    name: 'Time & Materials (T&M)',
    best: 'Exploratory or evolving work — R&D, early-stage product development, design iterations',
    desc: 'You pay for engineering hours at agreed rates. Suitable when scope is expected to change, or when you need flexibility to redirect priorities mid-engagement.',
  },
  {
    name: 'Monthly retainer',
    best: 'Ongoing engineering capacity — dedicated contract engineers embedded in your team',
    desc: 'A set number of hours per month at a fixed monthly cost. Suitable for companies with a continuous flow of engineering work who want a reliable, dedicated resource without headcount.',
  },
] as const

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background:"var(--bg)" }}>
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format&fit=crop"
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
              The Process
            </div>
            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-6 max-w-[600px]">
              A process that removes<br />
              <span className="gradient-text">the guesswork.</span>
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[500px]">
              Every Sunkey engagement follows the same four-stage process — transparent at each
              step, with no surprises on cost or timeline.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Step-by-step detail */}
      <section className="py-[100px] bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <AnimateOnView key={step.num} delay={0.05}>
                <div className={[
                  'grid lg:grid-cols-[200px_1fr] gap-10 py-14',
                  i < STEPS.length - 1 ? 'border-b border-border-light' : '',
                ].join(' ')}>
                  {/* Left */}
                  <div>
                    <div className="text-[2.5rem] font-black tracking-tightest gradient-text leading-none mb-2">
                      {step.num}
                    </div>
                    <div className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-muted">
                      {step.time}
                    </div>
                  </div>
                  {/* Right */}
                  <div>
                    <h2 className="text-[1.3rem] font-bold tracking-tight text-dark mb-5 capitalize">
                      {step.title}
                    </h2>
                    <ul className="space-y-3 list-none">
                      {step.detail.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-3 text-[0.88rem] leading-[1.72] text-muted">
                          <span
                            className="w-[5px] h-[5px] rounded-full mt-[9px] flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg,#f05030,#ec4040)' }}
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-[100px] bg-surface">
        <div className="section-container">
          <AnimateOnView className="mb-14">
            <div className="section-label">Engagement Models</div>
            <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark max-w-[480px]">
              Choose the structure that{' '}
              <span className="gradient-text">fits your project.</span>
            </h2>
          </AnimateOnView>

          <div className="grid lg:grid-cols-3 gap-[2px]">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <AnimateOnView key={model.name} delay={i * 0.08}>
                <div className="bg-white p-9 h-full">
                  <div className="text-[0.98rem] font-bold tracking-tight text-dark mb-1.5">
                    {model.name}
                  </div>
                  <div className="text-[0.72rem] font-semibold text-brand-red tracking-[0.04em] mb-4">
                    Best for: {model.best}
                  </div>
                  <p className="text-[0.85rem] leading-[1.72] text-muted">{model.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-dark">
        <div className="section-container text-center">
          <AnimateOnView>
            <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-white mb-5">
              Ready to start?
            </h2>
            <p className="text-[0.95rem] leading-[1.72] text-white/40 mb-8 max-w-[380px] mx-auto">
              Share your requirement and receive a scoped quote within 2 business days.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link href="/contact?type=meeting" className="btn-primary">
                Book a Discovery Call
              </Link>
              <Link href="/contact?type=requirement" className="btn-ghost">
                Share Your Requirement
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
