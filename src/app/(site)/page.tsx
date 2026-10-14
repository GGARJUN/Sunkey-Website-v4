import type { Metadata } from 'next'
import { HeroSection }        from '@/components/sections/home/HeroSection'
import { ValueBar }           from '@/components/sections/home/ValueBar'
import { StatsStrip }         from '@/components/sections/home/StatsStrip'
import { TrustBar }           from '@/components/sections/home/TrustBar'
import { ServicesSection }    from '@/components/sections/home/ServicesSection'
import { ProcessSection }     from '@/components/sections/home/ProcessSection'
import { IndustryHubSection } from '@/components/sections/home/IndustryHubSection'
import { SunWorkSection }     from '@/components/sections/home/SunWorkSection'
import { GlobalClientele }    from '@/components/sections/GlobalClientele'
import { ContactSection }     from '@/components/sections/home/ContactSection'

export const metadata: Metadata = {
  title: 'Sunkey Design Systems — End-to-End Electronics Engineering',
  description: 'PCB design, embedded firmware, PCBA, and electronics manufacturing for hardware teams in the USA and Europe. Prototype costing in 2 business days.',
  alternates: { canonical: 'https://sunkeydesignsystems.com' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />       {/* dark — PCB photo */}
      <ValueBar />          {/* white */}
      <StatsStrip />        {/* white */}
      <TrustBar />          {/* white */}
      <ServicesSection />   {/* white — dark cards */}
      <ProcessSection />    {/* light gray */}
      <IndustryHubSection />{/* light gray */}
      <SunWorkSection />    {/* white — sun/rays */}
      <GlobalClientele />   {/* dark — world map */}
      <ContactSection />    {/* dark */}
    </>
  )
}
