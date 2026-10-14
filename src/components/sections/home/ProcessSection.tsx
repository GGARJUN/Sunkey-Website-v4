import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

const STEPS = [
  { num:'01', title:'Share Your Requirement', desc:'Fill the brief or book a call. Describe your project, board spec, and timeline.', time:'Starts immediately' },
  { num:'02', title:'Scoping & Quote', desc:'Detailed cost breakdown within 2 business days — design, prototype, or resource.', time:'Within 2 business days' },
  { num:'03', title:'Design, Build & Review', desc:'Milestone visibility throughout. Review gates built in — not a single handoff.', time:'Per agreed schedule' },
  { num:'04', title:'Ship & Support', desc:'Prototypes in 2–3 weeks. Production on a confirmed schedule. Post-delivery support included.', time:'2–3 weeks to prototype' },
] as const

export function ProcessSection() {
  return (
    /* LIGHT GRAY — different from white Services above */
    <section id="how" className="py-[120px] relative overflow-hidden" style={{ background:'linear-gradient(135deg, #FF5A1F 0%, #ec4040 100%)' }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-100"
           style={{ backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize:'32px 32px' }} />

      <div className="section-container relative z-10">
        <AnimateOnView className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-[72px] gap-4">
          <div>
            <div className="section-label" style={{ color:"rgba(255,255,255,0.75)" }}>The Process</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white"
                style={{ fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              From brief<br /><span className="text-white font-black">to delivered.</span>
            </h2>
          </div>
          <p className="text-[0.88rem] text-white/80 lg:max-w-[260px] lg:text-right leading-[1.6]">
            Fast to start, transparent throughout, no handoff delays.
          </p>
        </AnimateOnView>

        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div aria-hidden="true"
               className="hidden lg:block absolute top-[27px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-px"
               style={{ background:'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.5), rgba(255,255,255,0.3))' }} />
          {STEPS.map((step, i) => (
            <AnimateOnView key={step.num} delay={i * 0.1} className="h-full">
              <div className="group card-v2 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 text-[0.85rem] font-bold text-accent"
                       style={{ border:'1px solid rgba(255,90,31,0.45)', background:'rgba(255,90,31,0.08)' }}>
                    {step.num}
                  </div>
                  <ArrowRight size={15} strokeWidth={2} className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0 mt-1"
                               style={{ transitionDuration:'250ms' }} />
                </div>
                <div className="font-bold text-white mb-2" style={{ fontSize:'0.95rem' }}>{step.title}</div>
                <p className="text-[0.8rem] leading-[1.68] text-white/50 mb-3 flex-1">{step.desc}</p>
                <div className="text-[0.68rem] font-bold tracking-[0.04em] text-white/90 mt-auto">{step.time}</div>
              </div>
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView className="mt-12 text-center">
          <Link href="/how-we-work" className="text-[0.88rem] font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 cursor-pointer"
                style={{ transitionDuration:'150ms' }}>
            See the full process <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </AnimateOnView>
      </div>
    </section>
  )
}
