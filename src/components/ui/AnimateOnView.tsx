'use client'

import { m, useReducedMotion } from 'framer-motion'
import type { Variants, TargetAndTransition } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/motion/variants'

interface AnimateOnViewProps {
  children: React.ReactNode
  /** Framer Motion variants. Defaults to fadeUp. */
  variants?: Variants
  /** Extra Tailwind classes on the wrapper div */
  className?: string
  /** Delay in seconds before animation plays */
  delay?: number
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Respects prefers-reduced-motion — renders statically when active.
 * Uses `m.div` which requires MotionProvider in the layout tree.
 */
export function AnimateOnView({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: AnimateOnViewProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  // Merge delay into the visible transition without using `any`
  let v: Variants = variants
  if (delay > 0) {
    const visible = variants.visible as TargetAndTransition | undefined
    v = {
      ...variants,
      visible: {
        ...visible,
        transition: {
          ...(visible?.transition as Record<string, unknown> | undefined),
          delay,
        },
      },
    }
  }

  return (
    <m.div
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </m.div>
  )
}
