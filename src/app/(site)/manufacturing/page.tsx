import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

export const metadata: Metadata = {
  title: 'Manufacturing Facilities | Sunkey Design Systems',
  description:
    'Sunkey\'s in-house manufacturing capabilities — SMT lines, through-hole assembly, injection moulding, tool room, and end-of-line testing. E2E hardware production from Chennai, India.',
  alternates: { canonical: 'https://sunkeydesignsystems.com/manufacturing' },
}

/* ── Data ──────────────────────────────────────────────────── */

const OVERVIEW_STATS = [
  { value: '3',    label: 'SMT Lines'            },
  { value: 'E2E',  label: 'In-house Production'  },
  { value: '50+',  label: 'Products Manufactured'},
  { value: 'CE/FCC', label: 'Compliance Ready'   },
]

const FACILITIES = [
  {
    id: 'smt',
    label: 'Surface Mount Technology',
    title: 'SMT Assembly Line',
    subtitle: '3 fully automatic high-speed lines',
    desc: 'Our SMT floor operates three high-speed automated lines capable of placing ultra-fine pitch components down to 0201 and BGA packages. Inline SPI and AOI at every stage ensure zero-defect output before boards move downstream.',
    specs: [
      '3 fully automatic high-speed pick-and-place machines',
      'Ultra-fine pitch placement — down to 0201, 01005, and BGA',
      'Inline solder paste inspection (SPI) before placement',
      'Automated optical inspection (AOI) post-reflow',
      'Lead-free and leaded reflow profiles available',
      'Stencil printing with closed-loop feedback control',
      'Throughput: up to 25,000 components per hour per line',
    ],
    bg: 'bg-white',
  },
  {
    id: 'testing',
    label: 'Electrical Testing',
    title: 'Testing Line',
    subtitle: 'ICT, Functional, Hi-Pot and AOI',
    desc: 'Every board that leaves our facility passes through a multi-stage testing protocol. In-circuit testing verifies component placement and solder integrity; functional test validates operating behaviour against a defined test plan.',
    specs: [
      'In-circuit test (ICT) for all medium and high-volume runs',
      'Custom functional test fixtures — designed in-house',
      'Hi-pot (dielectric withstand) testing for power electronics',
      'Flying-probe test for low-volume and prototype runs',
      'Automated optical inspection (AOI) — 3D inspection available',
      'Traceability: board-level serial number with test report',
      'Test coverage report delivered with every shipment',
    ],
    bg: '#F5F6F9',
  },
  {
    id: 'advanced-pcb',
    label: 'Advanced PCB Work',
    title: 'Advanced PCB Manufacturing',
    subtitle: 'BGA rework, X-ray, potting and laser marking',
    desc: 'Capabilities beyond standard SMT — including BGA rework and reballing, X-ray inspection for hidden solder joints, conformal coating and potting for environmental protection, and laser marking for permanent part identification.',
    specs: [
      'BGA rework and reballing station with infrared reflow',
      'X-ray inspection — detects cold joints, voids, and bridging under BGA and QFN',
      'Conformal coating — acrylic, silicone and polyurethane',
      'Potting and encapsulation for harsh environments',
      'Laser marking for PCB serialisation and PN engraving',
      'Selective soldering for mixed-technology assemblies',
      'Press-fit connector insertion with controlled force',
    ],
    bg: 'bg-white',
  },
  {
    id: 'through-hole',
    label: 'Through-Hole Assembly',
    title: 'Through-Hole Line',
    subtitle: 'Manual and wave solder for leaded components',
    desc: 'Wave soldering and hand-soldering lines handle through-hole components, connectors, transformers, and heat-sunk power devices that cannot be reflowed. Mixed-technology boards run SMT first, then pass to the through-hole line.',
    specs: [
      'Automated wave solder with nitrogen atmosphere option',
      'Selective solder for tight-tolerance mixed assemblies',
      'Manual soldering bays for prototypes and small batches',
      'Through-hole inspection per IPC-A-610 Class 2 and Class 3',
      'Potted connector assemblies for vibration environments',
      'Suitable for power supplies, motor drives and industrial controls',
    ],
    bg: '#F5F6F9',
  },
  {
    id: 'injection',
    label: 'Injection Moulding',
    title: 'Injection Moulding',
    subtitle: 'Plant 2, Plant 3 and Plant 4',
    desc: 'Three dedicated moulding plants produce enclosures, brackets, cable management components and custom plastic parts for electronic assemblies. Tooling is designed and manufactured in-house, giving us full control over lead times and revisions.',
    specs: [
      'Injection moulding machines from 50T to 250T clamp force',
      'ABS, PC, PA66, PP and engineering-grade thermoplastics',
      'In-house toolmaking — steel and aluminium moulds',
      'Overmoulding and insert moulding for connector assemblies',
      'Surface finishes: textured, glossy, paint-ready',
      'Secondary operations: ultrasonic welding, heat-staking, sub-assembly',
      'Short-run production from 500 pieces with in-house tooling',
    ],
    bg: 'bg-white',
  },
  {
    id: 'toolroom',
    label: 'Tool Room',
    title: 'Unit-1 Tool Room',
    subtitle: '4/5-axis VMC, EDM and wire-cut capabilities',
    desc: 'Our dedicated tool room manufactures precision jigs, fixtures, test probes and mould tooling. CNC machining, EDM sparking, and wire-cut EDM allow complex geometries in hardened steel for production-grade tooling.',
    specs: [
      '4-axis and 5-axis vertical machining centres (VMC)',
      'EDM die-sinking (spark erosion) for complex cavity forms',
      'Wire-cut EDM for precision profiles and punch-and-die sets',
      'Surface grinding and cylindrical grinding',
      'CMM inspection for all critical tooling dimensions',
      'In-house mould design in SolidWorks and CATIA',
      'Rapid tooling turnaround: 2–4 weeks for prototype moulds',
    ],
    bg: '#F5F6F9',
  },
  {
    id: 'eol',
    label: 'End of Line Testing',
    title: 'End-of-Line Testing',
    subtitle: 'Custom ATE for every product line',
    desc: 'Every finished unit is verified at end-of-line using custom automatic test equipment (ATE) designed to the product\'s specification. EOL testing catches assembly faults that pass electrical test, ensuring what leaves the facility works.',
    specs: [
      'Custom ATE designed per product — no off-the-shelf compromise',
      'Functional verification of all input/output channels',
      'Communication interface testing — UART, SPI, I2C, CAN, Ethernet',
      'RF functional test for wireless modules',
      'Power supply characterisation: line regulation, load regulation',
      'Safety test integration: hi-pot and ground bond as required',
      'Pass/fail records tied to unit serial number for full traceability',
    ],
    bg: 'bg-white',
  },
]

/* ── Page ──────────────────────────────────────────────────── */

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg pt-[160px] pb-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format&fit=crop"
            alt="" fill sizes="100vw" className="object-cover object-center"
            style={{ filter:'brightness(0.15) saturate(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/82 to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
        </div>
        <div aria-hidden="true"
             className="absolute w-[480px] h-[480px] -top-[100px] right-0 rounded-full pointer-events-none z-[1]"
             style={{ background:'radial-gradient(circle, rgba(255,90,31,0.14) 0%, transparent 68%)' }} />

        <div className="section-container relative z-10">
          <AnimateOnView>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[0.75rem] font-semibold text-white/35">Sunkey</span>
              <span className="text-white/20 text-[0.75rem]">/</span>
              <span className="text-[0.75rem] font-semibold text-white/50">Manufacturing</span>
            </div>
            <h1 className="font-black tracking-tightest leading-[1.08] text-white mb-5 max-w-[680px]"
                style={{ fontSize:'clamp(2rem,3.5vw,3rem)' }}>
              <span className="gradient-text">In-house manufacturing</span>
              <br />from prototype to production.
            </h1>
            <p className="text-[1rem] leading-[1.72] text-white/50 max-w-[560px] mb-8">
              Sunkey operates dedicated SMT lines, through-hole assembly, injection moulding,
              precision tool room, and end-of-line testing facilities — all under one roof in
              Chennai, India. No subcontracting surprises.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">Get a Manufacturing Quote</Link>
              <Link href="/contact?type=meeting" className="btn-ghost">Book a Facility Call</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Overview stats */}
      <section className="py-[60px] bg-white border-b border-[#E8E9EE]">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {OVERVIEW_STATS.map((s, i) => (
              <AnimateOnView key={s.label} delay={i * 0.07} className="text-center">
                <div className="font-black tracking-tightest gradient-text mb-1"
                     style={{ fontSize:'clamp(1.8rem,3vw,2.6rem)' }}>
                  {s.value}
                </div>
                <div className="text-[0.78rem] font-medium" style={{ color:'#5A6072' }}>{s.label}</div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Facility sections */}
      {FACILITIES.map((fac, fi) => (
        <section
          key={fac.id}
          className={`py-[80px] ${typeof fac.bg === 'string' && fac.bg.startsWith('bg-') ? fac.bg : ''}`}
          style={typeof fac.bg === 'string' && !fac.bg.startsWith('bg-') ? { background: fac.bg } : {}}
        >
          <div className="section-container">
            <AnimateOnView>
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
                {/* Left — text */}
                <div>
                  <div className="section-label mb-3">{fac.label}</div>
                  <h2 className="font-extrabold tracking-tightest leading-[1.1] mb-2"
                      style={{ fontSize:'clamp(1.6rem,2.8vw,2.2rem)', color:'#0D0F14' }}>
                    {fac.title}
                  </h2>
                  <p className="text-[0.78rem] font-bold tracking-[0.04em] mb-5 gradient-text uppercase">
                    {fac.subtitle}
                  </p>
                  <p className="text-[0.92rem] leading-[1.76]" style={{ color:'#5A6072' }}>
                    {fac.desc}
                  </p>
                </div>
                {/* Right — specs */}
                <div>
                  <ul className="space-y-3 list-none">
                    {fac.specs.map((spec, si) => (
                      <li key={si} className="flex items-start gap-3 text-[0.87rem] leading-[1.65]"
                          style={{ color:'#5A6072' }}>
                        <span className="w-[5px] h-[5px] rounded-full mt-[9px] flex-shrink-0"
                              style={{ background:'linear-gradient(135deg,#FF5A1F,#ec4040)' }} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </section>
      ))}

      {/* Compliance strip */}
      <section className="py-[60px]" style={{ background:'#F5F6F9', borderTop:'1px solid #E8E9EE' }}>
        <div className="section-container">
          <AnimateOnView className="text-center max-w-[680px] mx-auto">
            <div className="section-label mb-3">Quality and Compliance</div>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] mb-5"
                style={{ fontSize:'clamp(1.5rem,2.5vw,2rem)', color:'#0D0F14' }}>
              Built to certify — <span className="gradient-text">CE, FCC and EMI/EMC</span> support throughout.
            </h2>
            <p className="text-[0.9rem] leading-[1.76]" style={{ color:'#5A6072' }}>
              Compliance is not an afterthought. Our engineering and manufacturing process includes
              DFM, DFT and pre-compliance test as standard. We support customers through CE, FCC, and
              EMI/EMC certification with test-house liaison and design modifications.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] bg-bg">
        <div className="section-container text-center">
          <AnimateOnView>
            <h2 className="font-extrabold tracking-tightest leading-[1.1] text-white mb-5"
                style={{ fontSize:'clamp(1.8rem,3vw,2.6rem)' }}>
              Ready to manufacture your <span className="gradient-text">next product?</span>
            </h2>
            <p className="text-[0.95rem] leading-[1.72] text-white/40 mb-8 max-w-[400px] mx-auto">
              Share your requirement and receive a scoped manufacturing quote within 2 business days.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link href="/contact?type=requirement" className="btn-primary">Get a Manufacturing Quote</Link>
              <Link href="/contact?type=meeting" className="btn-ghost">Book a Facility Call</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
