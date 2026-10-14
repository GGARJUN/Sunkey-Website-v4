/**
 * pSEO: Service × Industry combinations.
 * 9 services × 6 industries = 54 static pages generated at build time.
 *
 * URL pattern: /services/[slug]/[industry]
 * Example: /services/pcb-design/semiconductor
 *
 * Content is generated dynamically in the template from:
 *   - serviceDetails.ts — service capabilities and deliverables
 *   - industryDetails.ts — industry challenges and how-we-help
 *
 * Phase 2 adds Service × Location (~144 pages).
 */

export interface ServiceIndustryCombo {
  serviceSlug:  string
  industrySlug: string
}

const SERVICES = [
  'pcb-design',
  'embedded-firmware',
  'pcba-manufacturing',
  'rapid-prototyping',
  'iot-wireless',
  'drone-uav-electronics',
  'high-speed-fpga-design',
  'cable-harness-box-build',
  'contract-engineering',
] as const

const INDUSTRIES = [
  'semiconductor',
  'industrial-automation',
  'drone-uav',
  'iot-smart-devices',
  'automotive',
  'agricultural-technology',
] as const

/** All 54 combinations — used by generateStaticParams */
export const SERVICE_INDUSTRY_COMBOS: ServiceIndustryCombo[] = SERVICES.flatMap(
  serviceSlug => INDUSTRIES.map(industrySlug => ({ serviceSlug, industrySlug }))
)

/**
 * Human-readable labels for use in headlines and meta text.
 * Ensures "iot-smart-devices" reads as "IoT & smart device" in sentences.
 */
export const INDUSTRY_LABELS: Record<string, string> = {
  semiconductor:           'semiconductor',
  'industrial-automation': 'industrial automation',
  'drone-uav':             'drone & UAV',
  'iot-smart-devices':     'IoT & smart device',
  automotive:              'automotive',
  'agricultural-technology': 'agricultural technology',
}

export const SERVICE_LABELS: Record<string, string> = {
  'pcb-design':              'PCB design',
  'embedded-firmware':       'embedded firmware development',
  'pcba-manufacturing':      'PCBA & electronics manufacturing',
  'rapid-prototyping':       'rapid hardware prototyping',
  'iot-wireless':            'IoT & wireless hardware design',
  'drone-uav-electronics':   'drone & UAV electronics design',
  'high-speed-fpga-design':  'high-speed & FPGA board design',
  'cable-harness-box-build': 'cable harness & box build assembly',
  'contract-engineering':    'contract engineering',
}
