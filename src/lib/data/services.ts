export type ServiceCategory = 'design' | 'manufacturing' | 'resources'

export interface ServiceData {
  slug: string
  name: string
  shortDescription: string
  specs: string[]
  category: ServiceCategory
  /** Lucide icon name — rendered in the card */
  icon: string
}

/* ── Design & Engineering ─────────────────────────────── */

export const DESIGN_SERVICES: ServiceData[] = [
  {
    slug: 'pcb-design',
    name: 'PCB Design',
    shortDescription:
      'Single-layer to complex multi-layer boards. HDI, RF, mixed-signal, and high-speed layouts using Altium Designer, Cadence Allegro/OrCAD, and KiCad.',
    specs: ['DDR3/DDR4', 'PCIe', 'USB 3.0', '10GbE', 'FPGA Layout'],
    category: 'design',
    icon: 'Cpu',
  },
  {
    slug: 'embedded-firmware',
    name: 'Embedded Firmware',
    shortDescription:
      'BSP development, device drivers, OTA systems, RTOS integration, and firmware migration across ARM, RISC-V, and FPGA platforms in C/C++/Python.',
    specs: ['Xilinx Zynq-7000', 'Intel Cyclone 10', 'RTOS', 'OTA Updates'],
    category: 'design',
    icon: 'Code2',
  },
  {
    slug: 'iot-wireless',
    name: 'IoT & Wireless',
    shortDescription:
      'Full-stack IoT hardware design spanning the complete wireless protocol landscape. Proven on industrial, agricultural, and smart building applications.',
    specs: ['ZigBee', 'BLE 5.0', 'NB-IoT', 'LoRa', 'CAT-M1', 'Z-Wave'],
    category: 'design',
    icon: 'Wifi',
  },
  {
    slug: 'drone-uav-electronics',
    name: 'Drone & UAV Electronics',
    shortDescription:
      '30+ drone projects delivered. ESC boards, GPS modules, power distribution, autopilot integration, and radar dome assemblies — all in-house.',
    specs: ['ESC Design', 'GPS Boards', 'Power Management', 'Radar Dome'],
    category: 'design',
    icon: 'Navigation',
  },
  {
    slug: 'high-speed-fpga-design',
    name: 'High-Speed & FPGA Design',
    shortDescription:
      'Signal integrity analysis, controlled impedance routing, and EMI/EMC design for high-density interconnect boards and FPGA carrier cards.',
    specs: ['Signal Integrity', 'EMI/EMC', 'HDI', 'DFM', 'MIL-STD'],
    category: 'design',
    icon: 'Zap',
  },
  {
    slug: 'hardware-system-design',
    name: 'Hardware System Design',
    shortDescription:
      'Full architecture from concept to NPI. Feasibility analysis, component selection, BoM optimisation, mechanical design, and prototype validation.',
    specs: ['NPI', 'BoM Optimisation', 'DFT', 'Mechanical Design'],
    category: 'design',
    icon: 'Settings',
  },
]

/* ── Manufacturing ────────────────────────────────────── */

export const MANUFACTURING_SERVICES: ServiceData[] = [
  {
    slug: 'pcba-manufacturing',
    name: 'PCBA & Electronics Manufacturing',
    shortDescription:
      'SMT and through-hole assembly for low-to-mid volume runs. Automated optical inspection, X-ray verification, and end-of-line functional testing included.',
    specs: ['SMT Assembly', 'AOI', 'X-Ray', 'Functional Test'],
    category: 'manufacturing',
    icon: 'Factory',
  },
  {
    slug: 'rapid-prototyping',
    name: 'Rapid Prototyping',
    shortDescription:
      'From schematic to working prototype in 2–3 weeks. Costing within 2 business days. Ideal for NPI and design validation before production.',
    specs: ['2-Day Quote', '2–3 Week Build', 'DFM Review'],
    category: 'manufacturing',
    icon: 'FlaskConical',
  },
  {
    slug: 'cable-harness-box-build',
    name: 'Cable Harness & Box Build',
    shortDescription:
      'Complete electromechanical assembly — cable harnesses, wire looms, panel builds, and full box-build integration with product-level testing.',
    specs: ['Wire Harness', 'Box Build', 'Panel Wiring', 'Product Test'],
    category: 'manufacturing',
    icon: 'Cable',
  },
]

/* ── Contract Resources ───────────────────────────────── */

export const RESOURCE_SERVICES: ServiceData[] = [
  {
    slug: 'contract-engineering',
    name: 'Dedicated Contract Engineers',
    shortDescription:
      'Hardware and firmware engineers with 5–30 years of experience — on monthly retainer, T&M, or contract-to-hire. Up and running within days.',
    specs: ['Monthly Retainer', 'T&M', 'Contract-to-Hire'],
    category: 'resources',
    icon: 'Users',
  },
  {
    slug: 'skill-augmentation',
    name: 'Specialist Skill Augmentation',
    shortDescription:
      'Plug a specific skill gap — FPGA design, RF engineering, high-speed layout, or firmware migration — without a full-time hire.',
    specs: ['FPGA Engineers', 'RF Specialists', 'Firmware Dev', 'HW Validation'],
    category: 'resources',
    icon: 'BookOpen',
  },
  {
    slug: 'system-integration',
    name: 'System Integration & ATE',
    shortDescription:
      'Hardware validation, system integration, and Automated Test Equipment development for end-of-line production testing — at your facility or ours.',
    specs: ['ATE Development', 'System Integration', 'HW Validation'],
    category: 'resources',
    icon: 'TestTubes',
  },
]

/** All services flattened — for sitemap, nav, and pSEO */
export const ALL_SERVICES = [
  ...DESIGN_SERVICES,
  ...MANUFACTURING_SERVICES,
  ...RESOURCE_SERVICES,
]