'use client'

import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

/**
 * WCAG 2.1 — prefers-reduced-motion compliance.
 *
 * Wrap every animated component's variants with this hook.
 * Returns the variants unchanged for standard users.
 * Returns an empty object (no animation) for users who prefer reduced motion.
 *
 * @example
 * const safeVariants = useMotionSafe(fadeUp)
 * <motion.div variants={safeVariants} initial="hidden" whileInView="visible">
 */
export function useMotionSafe<T extends Variants>(
  variants: T,
): T | Record<string, never> {
  const reduce = useReducedMotion()
  return reduce ? {} : variants
}
