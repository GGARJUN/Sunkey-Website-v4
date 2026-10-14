'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Scrolls to the top of the page on every route change.
 * Fixes the issue where navigating between pages retains the previous scroll position.
 * Uses 'instant' behavior so Lenis smooth scroll does not interfere.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
