import { Suspense } from 'react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { ContactForm } from '@/components/ui/ContactForm'

const CHECKLIST = [
  'Prototype costing within 2 business days',
  'No minimum order quantity on prototypes',
  'CE, FCC, and EMI/EMC compliance support built in',
  'Flexible engagement — T&M, fixed cost, or retainer',
  'Serving 2+ active clients across USA and Europe',
] as const

export function ContactSection() {
  return (
    <section id="contact" className="relative py-[120px] overflow-hidden" aria-label="Contact Sunkey" style={{ background:'linear-gradient(135deg, #FF5A1F 0%, #ec4040 100%)' }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-100"
           style={{ backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize:'32px 32px' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <AnimateOnView>
            <div className="text-[0.68rem] font-bold tracking-[0.14em] uppercase mb-5" style={{ color:"rgba(255,255,255,0.7)" }}>
              Start a Conversation
            </div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white mb-4" style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>
              Ready to build<br />
              <span className="text-white font-black">your next product?</span>
            </h2>
            <p className="text-[0.92rem] leading-[1.72] text-white/80 mb-9">
              Whether you have a complete schematic or just a product concept, we scope your
              project within 2 business days — no retainer required.
            </p>
            <ul className="flex flex-col gap-2.5 list-none">
              {CHECKLIST.map(item => (
                <li key={item} className="flex items-center gap-2.5 text-[0.84rem] font-medium text-white/85">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 border border-white/40"
                        style={{ background: 'rgba(255,255,255,0.18)' }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateOnView>

          {/* Right — form */}
          <AnimateOnView delay={0.12}>
            <Suspense fallback={<div className="h-64 rounded-card bg-surface animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </AnimateOnView>

        </div>
      </div>
    </section>
  )
}
