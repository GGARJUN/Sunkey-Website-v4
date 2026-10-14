import type { Metadata } from 'next'
import { Suspense } from 'react'
import { GlobalClientele } from '@/components/sections/GlobalClientele'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { ContactForm } from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a discovery call or share your project requirement. Sunkey provides scoped quotes within 2 business days.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/contact' },
}

const DETAILS = [
  { label: 'Location',  value: 'Chennai, Tamil Nadu, India'          },
  { label: 'Email',     value: 'info@sunkeydesignsystems.com', href: 'mailto:info@sunkeydesignsystems.com' },
  { label: 'Website',   value: 'sunkeydesignsystems.com',     href: 'https://sunkeydesignsystems.com' },
  { label: 'LinkedIn',  value: 'sunkey-design-systems',       href: 'https://linkedin.com/company/sunkey-design-systems' },
] as const

const COMMITMENTS = [
  'Scoped quote within 2 business days',
  'No commitment required to receive a quote',
  'CE, FCC, and EMI/EMC compliance support built in',
  'T&M, fixed cost, or monthly retainer — your choice',
] as const

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-[160px] pb-[80px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute w-[480px] h-[480px] -top-[100px] right-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,80,48,0.14) 0%, transparent 68%)' }}
        />
        <div className="section-container relative z-10">
          <AnimateOnView>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.30)' }}>
              Get in Touch
            </div>
            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[560px]">
              Let&apos;s build something<br />
              <span className="gradient-text">together.</span>
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[460px]">
              Book a 30-minute discovery call or share your project requirement directly.
              We scope and quote within 2 business days.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-[80px] bg-dark border-t border-white/[0.05]">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_440px] gap-20 items-start">

            {/* Form */}
            <AnimateOnView>
              <Suspense fallback={<FormSkeleton />}>
                <ContactForm />
              </Suspense>
            </AnimateOnView>

            {/* Details sidebar */}
            <AnimateOnView delay={0.12}>
              <div className="space-y-10">

                {/* Commitments */}
                <div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-white/28 mb-5">
                    What to expect
                  </div>
                  <ul className="space-y-3 list-none">
                    {COMMITMENTS.map(c => (
                      <li key={c} className="flex items-center gap-2.5 text-[0.85rem] text-white/50">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-orange/25"
                          style={{ background: 'rgba(240,80,48,0.12)' }}
                          aria-hidden="true"
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 4l2 2 4-4" stroke="#f05030" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact details */}
                <div>
                  <div className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-white/28 mb-5">
                    Contact details
                  </div>
                  <div className="space-y-3">
                    {DETAILS.map(d => (
                      <div key={d.label} className="flex flex-col gap-0.5">
                        <span className="text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-white/22">
                          {d.label}
                        </span>
                        {'href' in d ? (
                          <a
                            href={d.href}
                            target={d.href.startsWith('http') ? '_blank' : undefined}
                            rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[0.85rem] text-white/50 hover:text-white transition-colors duration-150"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <span className="text-[0.85rem] text-white/50">{d.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </AnimateOnView>

          </div>
        </div>
      </section>
          <GlobalClientele />
    </>
  )
}

function FormSkeleton() {
  return (
    <div className="rounded-xl border border-white/[0.07] overflow-hidden animate-pulse"
         style={{ background: 'rgba(255,255,255,0.035)' }}>
      <div className="h-14 bg-white/[0.04] border-b border-white/[0.06]" />
      <div className="p-7 space-y-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="h-10 bg-white/[0.04] rounded-md" />
        ))}
        <div className="h-11 bg-white/[0.06] rounded-md" />
      </div>
    </div>
  )
}
