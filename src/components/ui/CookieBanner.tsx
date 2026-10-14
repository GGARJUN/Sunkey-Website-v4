'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CONSENT_KEY } from '@/components/providers/AnalyticsProvider'

/**
 * Cookie consent banner.
 *
 * - Shown on first visit (no localStorage entry).
 * - Hidden permanently after the user accepts or declines.
 * - On Accept: stores 'granted' and dispatches 'analytics-consent' event
 *   so AnalyticsProvider loads GTM in the current session.
 * - On Decline: stores 'denied'. GTM is never loaded.
 * - Slide-up animation, accessible (role="dialog", focus management).
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const existing = localStorage.getItem(CONSENT_KEY)
    if (!existing) {
      // Small delay so banner doesn't flash during hydration
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'granted')
    setDismissed(true)
    setTimeout(() => setVisible(false), 350)
    window.dispatchEvent(
      new CustomEvent('analytics-consent', { detail: 'granted' })
    )
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'denied')
    setDismissed(true)
    setTimeout(() => setVisible(false), 350)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className={[
        'fixed bottom-0 left-0 right-0 z-[500] transition-transform duration-350',
        dismissed ? 'translate-y-full' : 'translate-y-0',
      ].join(' ')}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Panel */}
      <div
        className="mx-auto max-w-[1200px] px-4 sm:px-6 mb-4"
      >
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl px-6 py-5 shadow-[0_4px_32px_rgba(0,0,0,0.18)]"
          style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Text */}
          <p className="text-[0.82rem] leading-[1.65] text-white/55 flex-1 min-w-0">
            We use analytics cookies to understand how visitors use this site.
            You can accept or decline — no analytics are loaded without your consent.{' '}
            <Link
              href="/privacy-policy"
              className="text-white/75 underline underline-offset-2 hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-[0.8rem] font-semibold text-white/45 hover:text-white/75 transition-colors duration-150 cursor-pointer bg-transparent border-none"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 rounded-md text-[0.82rem] font-bold text-white cursor-pointer border-none transition-opacity duration-150 hover:opacity-85"
              style={{ background: 'linear-gradient(135deg, #f05030 0%, #ec4040 100%)' }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
