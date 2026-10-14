import type { Variants } from 'framer-motion'

/* ============================================================
   ENTRY VARIANTS
   Use these as the `variants` prop on motion elements.
   Pair with initial="hidden" whileInView="visible"
============================================================ */

/** Standard scroll-reveal — translates up + fades in */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

/** Fade only — no translate. For backgrounds and overlays */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

/** Slides in from the right — hero right panel */
export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

/** Slides in from the left */
export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

/** Scale up from slightly small — cards, images */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

/** Clip-path wipe reveal — for text and image reveals */
export const clipReveal: Variants = {
  hidden:  { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ============================================================
   STAGGER CONTAINERS
============================================================ */

/** Standard stagger — card grids, feature lists */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/** Slow stagger — hero text lines, large headlines */
export const staggerContainerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* ============================================================
   VIEWPORT CONFIG
   Plain object — avoids Framer Motion Viewport type mismatch
   across package versions. Used directly on whileInView props.
============================================================ */

/** Standard viewport — use on all whileInView animations */
export const viewport = { once: true, margin: '-80px' } as const

/** Tighter margin for elements near the viewport edge */
export const viewportEager = { once: true, margin: '-40px' } as const
