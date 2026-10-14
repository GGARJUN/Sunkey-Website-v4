export interface CaseStudyData {
  slug: string
  vertical: string
  location: string
  title: string
  description: string
  specs: string[]
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'agricultural-uav-gps-radar',
    vertical: 'Drone & UAV',
    location: 'USA Customer',
    title: 'Agricultural UAV — GPS & Radar Dome Module',
    description:
      'A US agricultural technology company needed a GPS positioning board and radar dome assembly for a precision spraying drone operating at low altitude. Sunkey designed, built, and delivered a 6-layer HDI board with integrated BDS/GPS dual-frequency positioning within a 2.5-week cycle.',
    specs: ['6-Layer HDI PCB', 'BDS/GPS Dual-Frequency', 'Radar Integration', '2.5-week delivery'],
  },
  {
    slug: 'industrial-cellular-data-logger',
    vertical: 'IoT & Industrial',
    location: 'European Customer',
    title: 'M66-Based Cellular Data Logger for Industrial Monitoring',
    description:
      'A European industrial monitoring company needed a rugged, low-power data logger with GSM connectivity and sensor fusion. Sunkey handled hardware and firmware — from schematic to CE-certified module — in an 8-week end-to-end cycle.',
    specs: ['Quectel M66 Module', '4-Layer PCB', 'CE Certified', '8-week cycle'],
  },
  {
    slug: 'fpga-carrier-card-semiconductor-test',
    vertical: 'Semiconductor',
    location: 'USA Customer',
    title: 'FPGA Carrier Card for Semiconductor Test Equipment',
    description:
      'A semiconductor test equipment company required a high-density FPGA carrier card with PCIe Gen3 and DDR4 memory channels for a next-generation validation platform. Sunkey delivered full signal integrity analysis and 14-layer HDI layout.',
    specs: ['14-Layer HDI', 'Xilinx Zynq-7000', 'PCIe Gen3', 'DDR4 x32'],
  },
]
