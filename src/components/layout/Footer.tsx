import Image from 'next/image'
import Link from 'next/link'

const SERVICES = [
  { label: 'PCB Design',                href: '/services/pcb-design'             },
  { label: 'Embedded Firmware',         href: '/services/embedded-firmware'       },
  { label: 'PCBA & Manufacturing',      href: '/services/pcba-manufacturing'      },
  { label: 'Drone & UAV Electronics',   href: '/services/drone-uav-electronics'   },
  { label: 'IoT & Wireless',            href: '/services/iot-wireless'            },
  { label: 'High-Speed & FPGA',         href: '/services/high-speed-fpga-design'  },
  { label: 'Contract Engineering',      href: '/services/contract-engineering'    },
  { label: 'Cable Harness & Box Build', href: '/services/cable-harness-box-build' },
] as const

const INDUSTRIES = [
  { label: 'Semiconductor',         href: '/industries/semiconductor'           },
  { label: 'Industrial Automation', href: '/industries/industrial-automation'   },
  { label: 'Drone & UAV',           href: '/industries/drone-uav'               },
  { label: 'IoT & Smart Devices',   href: '/industries/iot-smart-devices'       },
  { label: 'Automotive',            href: '/industries/automotive'              },
  { label: 'Agricultural Tech',     href: '/industries/agricultural-technology' },
] as const

const COMPANY = [
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'How We Work',   href: '/how-we-work'  },
  { label: 'Our Work',      href: '/work'          },
  { label: 'About',         href: '/about'         },
  { label: 'Resources',     href: '/resources'     },
  { label: 'Contact',       href: '/contact'       },
  { label: 'LinkedIn',      href: 'https://linkedin.com/company/sunkey-design-systems', external: true },
] as const

const CERTS = ['CE', 'FCC', 'EMI/EMC', 'ISO 9001', 'IATF 16949'] as const

export function Footer() {
  return (
    <footer className="bg-[#080A0D] pt-[72px] pb-9 border-t border-white/[0.06]" aria-label="Site footer">
      <div className="section-container">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-[52px] mb-[52px]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-5 cursor-pointer" aria-label="Sunkey Design Systems">
              <Image
                src="/images/logo-white.png"
                alt="Sunkey Design Systems"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-[0.85rem] leading-[1.72] text-white/55 mb-5 max-w-[270px]">
              End-to-end electronics engineering — PCB design, embedded firmware, PCBA, and manufacturing
              for hardware teams in the USA and Europe.
            </p>
            <div className="flex flex-col gap-1.5">
              <span className="text-[0.78rem] text-white/40">Chennai, India</span>
              <a href="mailto:info@sunkeydesignsystems.com" className="text-[0.82rem] text-white/55 hover:text-white transition-colors duration-150 cursor-pointer">
                info@sunkeydesignsystems.com
              </a>
              <a href="https://www.sunkeydesignsystems.com" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-white/55 hover:text-white transition-colors duration-150 cursor-pointer">
                sunkeydesignsystems.com
              </a>
            </div>
          </div>

          <FooterCol title="Services"   links={SERVICES}   />
          <FooterCol title="Industries" links={INDUSTRIES}  />
          <FooterCol title="Company"    links={COMPANY}     />
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-white/[0.06] flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 flex-wrap">
            <span className="text-[0.7rem] text-white/30">
              © 2025 Sunkey Design Systems Pvt. Ltd.&nbsp;&nbsp;·&nbsp;&nbsp;
              DPIIT: DIPP273645&nbsp;&nbsp;·&nbsp;&nbsp;
              CIN: U71100TN2025PTC178926
            </span>
            <div className="flex gap-2 flex-wrap">
              {CERTS.map(cert => (
                <span key={cert} className="px-2.5 py-0.5 border border-white/[0.1] rounded text-[0.6rem] font-bold tracking-[0.08em] text-white/35">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-[0.72rem] text-white/35 hover:text-white/70 transition-colors duration-150 cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[0.72rem] text-white/35 hover:text-white/70 transition-colors duration-150 cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

interface LinkItem { readonly label: string; readonly href: string; readonly external?: boolean }

function FooterCol({ title, links }: { title: string; links: readonly LinkItem[] }) {
  return (
    <div>
      <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-white/30 mb-[18px]">{title}</div>
      <ul className="list-none flex flex-col gap-2.5">
        {links.map(link => (
          <li key={link.href}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer"
                className="text-[0.84rem] text-white/55 hover:text-white transition-colors duration-150 cursor-pointer">
                {link.label}
              </a>
            ) : (
              <Link href={link.href}
                className="text-[0.84rem] text-white/55 hover:text-white transition-colors duration-150 cursor-pointer">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
