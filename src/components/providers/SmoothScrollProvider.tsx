'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

/**
 * Wraps the site in Lenis smooth scroll.
 * Applied once in (site)/layout.tsx — not in root layout,
 * so Payload admin panel does not inherit it.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
