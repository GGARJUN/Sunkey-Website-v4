import Link from 'next/link'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import type { ServiceDetailData } from '@/lib/data/serviceDetails'
import type { IndustryDetailData } from '@/lib/data/industryDetails'
import { ALL_SERVICES } from '@/lib/data/services'
import { INDUSTRIES } from '@/lib/data/industries'
import { INDUSTRY_LABELS, SERVICE_LABELS } from '@/lib/data/pseoServiceIndustry'

interface ServiceIndustryPageProps {
  service:  ServiceDetailData
  industry: IndustryDetailData
}

/**
 * pSEO template for Service × Industry combinations.
 * Generates unique content by combining:
 *   - Service capabilities and deliverables
 *   - Industry challenges and how-we-help
 *
 * 54 pages total — all built at compile time via generateStaticParams.
 * Each page is substantively different due to the unique service + industry data.
 */
export function ServiceIndustryPage({ service, industry }: ServiceIndustryPageProps) {
  const svcLabel = SERVICE_LABELS[service.slug]   ?? service.name.toLowerCase()
  const indLabel = INDUSTRY_LABELS[industry.slug] ?? industry.name.toLowerCase()

  // Select the first 2 capability groups from the service as most relevant
  const highlightedCapabilities = service.capabilities.slice(0, 2)

  // Select the most relevant industry challenge (first one)
  const primaryChallenge = industry.challenges[0]

  // Related services (exclude current) and industries (exclude current)
  const relatedServices  = ALL_SERVICES.filter(s =>
    service.relatedSlugs.includes(s.slug) && s.slug !== service.slug
  ).slice(0, 3)
  const relatedIndustries = INDUSTRIES.filter(i =>
    industry.relatedSlugs.includes(i.slug) && i.slug !== industry.slug
  ).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-[160px] pb-[100px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute w-[480px] h-[480px] -top-[100px] right-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,80,48,0.15) 0%, transparent 68%)' }}
        />
        <div className="section-container relative z-10">
          <AnimateOnView>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <Link href="/services" className="text-[0.72rem] font-semibold text-white/30 hover:text-white/55 transition-colors duration-150">
                Services
              </Link>
              <span className="text-white/20 text-[0.72rem]">/</span>
              <Link href={`/services/${service.slug}`} className="text-[0.72rem] font-semibold text-white/30 hover:text-white/55 transition-colors duration-150">
                {service.name}
              </Link>
              <span className="text-white/20 text-[0.72rem]">/</span>
              <span className="text-[0.72rem] font-semibold text-white/50">{industry.name}</span>
            </div>

            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[720px]">
              <span className="gradient-text capitalize">{svcLabel}</span>
              <br />
              for {indLabel} companies.
            </h1>

            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[560px] mb-8">
              {industry.longDescription.split('.')[0]}. Sunkey provides {svcLabel} specifically
              built for the {indLabel} vertical — matching the reliability, compliance, and
              technical standards the industry requires.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/contact?type=meeting" className="btn-ghost">
                Book a Discovery Call
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* The industry challenge */}
      <section className="py-[80px] bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimateOnView>
              <div className="section-label">The Engineering Challenge</div>
              <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark mb-5">
                What makes {indLabel}{' '}
                <span className="gradient-text">different.</span>
              </h2>
              <div className="flex flex-col gap-6">
                {industry.challenges.slice(0, 2).map(challenge => (
                  <div key={challenge.title}>
                    <div className="text-[0.95rem] font-bold tracking-tight text-dark mb-2">
                      {challenge.title}
                    </div>
                    <p className="text-[0.85rem] leading-[1.72] text-muted">{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.1}>
              <div className="section-label">How Sunkey Addresses It</div>
              <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark mb-5">
                <span className="gradient-text capitalize">{svcLabel}</span> built for this.
              </h2>
              <p className="text-[0.88rem] leading-[1.75] text-muted mb-5">
                {service.longDescription}
              </p>
              <p className="text-[0.85rem] leading-[1.72] text-muted">
                {primaryChallenge && `The specific challenge of "${primaryChallenge.title.toLowerCase()}" in ${indLabel} applications is one that Sunkey's team has addressed on previous projects — our design practice accounts for these requirements from the first schematic, not as an afterthought.`}
              </p>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Service capabilities in this industry context */}
      <section className="py-[80px] bg-surface">
        <div className="section-container">
          <AnimateOnView className="mb-12">
            <div className="section-label">Capabilities</div>
            <h2 className="text-section font-extrabold tracking-tightest leading-[1.1] text-dark max-w-[500px]">
              What we deliver on{' '}
              <span className="gradient-text">{indLabel} projects.</span>
            </h2>
          </AnimateOnView>

          <div className="grid lg:grid-cols-2 gap-[2px] mb-10">
            {highlightedCapabilities.map((cap, i) => (
              <AnimateOnView key={cap.title} delay={i * 0.08}>
                <div className="bg-white p-8 h-full">
                  <div className="text-[0.98rem] font-bold tracking-tight text-dark mb-4">
                    {cap.title}
                  </div>
                  <ul className="space-y-2.5 list-none">
                    {cap.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-[0.82rem] leading-[1.66] text-muted">
                        <span
                          className="w-[5px] h-[5px] rounded-full mt-[8px] flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg,#f05030,#ec4040)' }}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnView>
            ))}
          </div>

          {/* Deliverables */}
          <AnimateOnView>
            <div className="bg-white p-8">
              <div className="text-[0.95rem] font-bold tracking-tight text-dark mb-4">
                What you receive
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[0.82rem] text-muted">
                    <span
                      className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#f05030,#ec4040)' }}
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ICP + CTA */}
      <section className="py-[80px] bg-dark">
        <div className="section-container">
          <AnimateOnView className="max-w-[640px]">
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.30)' }}>
              Is This Right for You?
            </div>
            <p className="text-[1.05rem] leading-[1.75] text-white/55 mt-3 mb-8">
              {service.icpText}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">
                Share Your Requirement
              </Link>
              <Link href={`/services/${service.slug}`} className="btn-ghost">
                Full {service.name} Page →
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Navigation links */}
      <section className="py-[60px] bg-white border-t border-border-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10">

            {relatedServices.length > 0 && (
              <AnimateOnView>
                <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-muted mb-4">
                  Related Services
                </div>
                <div className="flex flex-col gap-2">
                  {relatedServices.map(svc => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}/${industry.slug}`}
                      className="text-[0.85rem] font-semibold text-dark hover:text-brand-red transition-colors duration-150"
                    >
                      {svc.name} for {industry.name} companies →
                    </Link>
                  ))}
                </div>
              </AnimateOnView>
            )}

            {relatedIndustries.length > 0 && (
              <AnimateOnView delay={0.1}>
                <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-muted mb-4">
                  Other Industries
                </div>
                <div className="flex flex-col gap-2">
                  {relatedIndustries.map(ind => (
                    <Link
                      key={ind.slug}
                      href={`/services/${service.slug}/${ind.slug}`}
                      className="text-[0.85rem] font-semibold text-dark hover:text-brand-red transition-colors duration-150"
                    >
                      {service.name} for {ind.name} companies →
                    </Link>
                  ))}
                </div>
              </AnimateOnView>
            )}

          </div>
        </div>
      </section>
    </>
  )
}
