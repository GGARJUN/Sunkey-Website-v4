import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

export const metadata: Metadata = {
  title: 'Resources — Engineering Articles',
  description:
    'Engineering articles from Sunkey Design Systems — PCB design, embedded firmware, IoT hardware, FPGA development, and electronics manufacturing insights.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/resources' },
}

/**
 * Resources listing page.
 *
 * Fetches blog posts from Payload CMS.
 * Shows an empty state with a "coming soon" message if no posts exist yet.
 *
 * Phase 1: Articles drafted and published in Payload during Batch 5.
 * The page is built and indexed now so the URL is established before content lands.
 */

interface BlogPost {
  id:          string
  title:       string
  slug:        string
  excerpt:     string
  category:    string
  author:      string
  publishedAt: string
}

/**
 * Fetch from Payload CMS.
 * Returns empty array if CMS is not yet seeded or DATABASE_URI is not set.
 */
async function getPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    const res = await fetch(
      `${baseUrl}/api/blog?sort=-publishedAt&limit=20&depth=0`,
      { cache: 'no-store' }
    )
    if (!res.ok) return []
    const data = await res.json() as { docs: BlogPost[] }
    return data.docs ?? []
  } catch {
    return []
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  'pcb-design':        'PCB Design',
  'embedded-firmware': 'Embedded Firmware',
  'iot-wireless':      'IoT & Wireless',
  'fpga-high-speed':   'FPGA & High-Speed',
  'drone-uav':         'Drone & UAV',
  'manufacturing':     'Manufacturing',
  'industry-insights': 'Industry Insights',
}

export default async function ResourcesPage() {
  const posts = await getPosts()

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-[160px] pb-[100px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute w-[400px] h-[400px] -top-[80px] right-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,80,48,0.14) 0%, transparent 68%)' }}
        />
        <div className="section-container relative z-10">
          <AnimateOnView>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.30)' }}>
              Resources
            </div>
            <h1 className="text-hero font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[600px]">
              Engineering articles from<br />
              <span className="gradient-text">the Sunkey team.</span>
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/48 max-w-[480px]">
              PCB design, embedded firmware, IoT hardware, FPGA development, and electronics
              manufacturing — practical technical content from engineers who do this work.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Posts or empty state */}
      <section className="py-[80px] bg-surface min-h-[400px]">
        <div className="section-container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px]">
              {posts.map((post, i) => (
                <AnimateOnView key={post.id} delay={i * 0.07}>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="group block bg-white p-7 transition-[box-shadow,transform] duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)]"
                  >
                    <div className="text-[0.62rem] font-bold tracking-[0.1em] uppercase text-brand-red mb-3">
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </div>
                    <div className="text-[1rem] font-bold tracking-tight text-dark leading-[1.3] mb-3">
                      {post.title}
                    </div>
                    <p className="text-[0.8rem] leading-[1.68] text-muted mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border-light">
                      <span className="text-[0.72rem] font-medium text-muted">
                        {post.author ?? 'Sunkey Engineering Team'}
                      </span>
                      <ArrowRight
                        size={13}
                        className="text-muted group-hover:text-brand-red transition-colors duration-150"
                        strokeWidth={2}
                      />
                    </div>
                  </Link>
                </AnimateOnView>
              ))}
            </div>
          ) : (
            <AnimateOnView className="text-center py-16">
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-muted mb-4">
                Coming Soon
              </div>
              <h2 className="text-[1.5rem] font-bold tracking-tight text-dark mb-3">
                Articles are on their way.
              </h2>
              <p className="text-[0.9rem] leading-[1.72] text-muted max-w-[400px] mx-auto mb-8">
                Engineering articles covering PCB design, firmware development, and hardware
                manufacturing will be published here shortly.
              </p>
              <Link href="/contact?type=meeting" className="btn-primary">
                Talk to an Engineer Instead
              </Link>
            </AnimateOnView>
          )}
        </div>
      </section>
    </>
  )
}
