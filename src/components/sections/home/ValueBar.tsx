import { Layers, Brain, Gauge, ShieldCheck } from 'lucide-react'

/**
 * Value proposition bar — 4 key differentiators shown immediately below
 * the hero section. Matches the audit spec (Image 2, Section below hero).
 */

const VALUES = [
  {
    icon: Layers,
    title: 'End-to-End Engineering',
    desc:  'Concept to mass production support.',
  },
  {
    icon: Brain,
    title: 'Deep Domain Expertise',
    desc:  'Electronics, Embedded, IoT & Mechanical.',
  },
  {
    icon: Gauge,
    title: 'Faster Time-to-Market',
    desc:  'Agile processes and proven frameworks.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Reliability',
    desc:  'Rigorous testing and industry standards.',
  },
] as const

export function ValueBar() {
  return (
    <section className="bg-white border-y border-[#E8E9EE]" aria-label="Key value propositions">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className={[
                  'flex items-start gap-3 py-6 px-5',
                  i < VALUES.length - 1 ? 'border-r border-border-card' : '',
                ].join(' ')}
              >
                <Icon size={18} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={1.6} />
                <div>
                  <div className="text-[0.82rem] font-bold text-white mb-0.5">{v.title}</div>
                  <div className="text-[0.72rem] text-white/40 leading-[1.5]">{v.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
