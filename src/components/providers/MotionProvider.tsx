'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

/**
 * Wraps the site in a single LazyMotion provider.
 * All animated components use `m.div` (not `motion.div`) to
 * benefit from this shared feature bundle — reduces JS payload.
 *
 * Applied once in (site)/layout.tsx.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
