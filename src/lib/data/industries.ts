export type IndustryPriority = 'primary' | 'secondary'

export interface IndustryData {
  slug: string
  name: string
  shortDescription: string
  priority: IndustryPriority
  icon: string
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: 'semiconductor',
    name: 'Semiconductor',
    shortDescription:
      'PCB design and EMS support for semiconductor test and validation equipment. Contract engineering resources for chip design and verification teams.',
    priority: 'primary',
    icon: 'Cpu',
  },
  {
    slug: 'industrial-automation',
    name: 'Industrial Automation',
    shortDescription:
      'Embedded systems, custom PCBs, measurement and control devices, and ATE for industrial environments. Proven in harsh-condition deployments.',
    priority: 'primary',
    icon: 'BarChart3',
  },
  {
    slug: 'drone-uav',
    name: 'Drone & UAV',
    shortDescription:
      '30+ projects completed end to end. ESC boards, GPS modules, power distribution, flight controller integration, and full agricultural UAV systems.',
    priority: 'primary',
    icon: 'Navigation',
  },
  {
    slug: 'iot-smart-devices',
    name: 'IoT & Smart Devices',
    shortDescription:
      'Full IoT stack design — sensor nodes, gateways, cloud-connected devices. Proven on M66 and BG95 data logger platforms with multi-protocol wireless.',
    priority: 'primary',
    icon: 'Globe',
  },
  {
    slug: 'automotive',
    name: 'Automotive & Transportation',
    shortDescription:
      'Advanced electronics for vehicle systems — FPGA-based processing, functional safety-aware design, and automotive-grade component selection.',
    priority: 'secondary',
    icon: 'Car',
  },
  {
    slug: 'agricultural-technology',
    name: 'Agricultural Technology',
    shortDescription:
      'Agricultural drone electronics, precision GPS modules, soil sensor systems, and radar-based terrain sensing — deployed for US customers in active field use.',
    priority: 'secondary',
    icon: 'Leaf',
  },
]
