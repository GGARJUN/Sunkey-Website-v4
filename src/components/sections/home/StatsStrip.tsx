'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

interface StatDef {
  end:      number
  suffix:   string
  decimals: number
  label:    string
}

const STATS: StatDef[] = [
  { end: 30,  suffix: '+', decimals: 0, label: 'Projects Delivered' },
  { end: 98,  suffix: '%', decimals: 0, label: 'Success Rate'        },
  { end: 99,  suffix: '%', decimals: 0, label: 'On-Time Delivery'    },
  { end: 9.7, suffix: '',  decimals: 1, label: 'Satisfaction / 10'   },
]

/** Numeric count-up — triggered once when scrolled into view.
 *  Respects prefers-reduced-motion: shows final value immediately if active. */
function CountUp({ end, suffix, decimals, label }: StatDef) {
  const ref      = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-80px" // Use string directly instead of importing viewport
  })
  const reduce   = useReducedMotion()
  const [display, setDisplay] = useState(
    decimals > 0 ? end.toFixed(decimals) : String(Math.floor(end))
  )

  useEffect(() => {
    if (reduce || !isInView) return

    const DURATION = 1800   // ms
    const FPS      = 60
    const steps    = Math.round(DURATION / (1000 / FPS))
    let   frame    = 0

    const id = setInterval(() => {
      frame++
      // Ease-out cubic
      const t       = frame / steps
      const eased   = 1 - Math.pow(1 - t, 3)
      const current = eased * end
      setDisplay(
        decimals > 0 ? current.toFixed(decimals) : String(Math.floor(current))
      )
      if (frame >= steps) {
        clearInterval(id)
        setDisplay(decimals > 0 ? end.toFixed(decimals) : String(Math.floor(end)))
      }
    }, 1000 / FPS)

    return () => clearInterval(id)
  }, [isInView, reduce, end, decimals])

  return (
    <AnimateOnView className="text-center px-8 py-2">
      <div ref={ref}
           className="font-black tracking-tightest leading-none mb-1.5 text-white"
           style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>
        {display}{suffix}
      </div>
      <div className="text-[0.8rem] font-medium text-white/70">{label}</div>
    </AnimateOnView>
  )
}

export function StatsStrip() {
  return (
    <section className="py-14" aria-label="Key metrics" style={{ background: 'linear-gradient(135deg, #FF5A1F 0%, #ec4040 100%)' }}>
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.label}
                 className={[
                   i < STATS.length - 1 ? 'border-r border-white/20' : '',
                 ].join(' ')}>
              <CountUp {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}