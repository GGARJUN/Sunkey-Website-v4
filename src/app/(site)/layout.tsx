import type { ReactNode } from 'react'
import { Navbar }            from '@/components/layout/Navbar'
import { Footer }            from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { MotionProvider }    from '@/components/providers/MotionProvider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import { CookieBanner }      from '@/components/ui/CookieBanner'
import { ScrollToTop }       from '@/components/ui/ScrollToTop'

export default function SiteLayout({ children }: { children: ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? ''

  return (
    <MotionProvider>
      <SmoothScrollProvider>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <AnalyticsProvider gtmId={gtmId} />
      </SmoothScrollProvider>
    </MotionProvider>
  )
}
