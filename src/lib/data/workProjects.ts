/**
 * All 16 projects from the Sunkey corporate deck.
 * Images are local files in /public/images/work/ (real PCB board photography).
 * Client details anonymized — region only.
 */

export interface WorkProject {
  slug:          string
  title:         string
  description:   string
  image:         string
  industry:      string   // for filtering — matches industry slug
  industryLabel: string   // display
  services:      string[] // for filtering — matches service slugs
  serviceLabels: string[] // display
  client:        'USA' | 'Europe' | 'USA / Europe'
  specs:         string[] // PCB type, layers, key components
}

export const WORK_PROJECTS: WorkProject[] = [

  /* ── DRONE & UAV ──────────────────────────────────────── */
  {
    slug:          'agri-drone-rtk-gps',
    title:         'Agricultural Drone — RTK GPS Module',
    description:   'RTK GPS positioning module for a precision agricultural UAV. STM32 Cortex, u-blox RTK GPS, RM3100 gyro, Bosch altimeter, and Drone CAN bus interface.',
    image:         '/images/work/agri-drone-rtk-gps.jpg',
    industry:      'drone-uav',
    industryLabel: 'Drone & UAV',
    services:      ['pcb-design', 'embedded-firmware', 'pcba-manufacturing'],
    serviceLabels: ['PCB Design', 'Embedded Firmware', 'PCBA'],
    client:        'USA',
    specs:         ['6-Layer FR4', 'u-blox RTK GPS', 'CAN Bus'],
  },
  {
    slug:          'gps-tracker-zed-f9p',
    title:         'GPS Tracker Board — ZED-F9P',
    description:   'Plug-and-play multi-band GNSS RTK tracker based on u-blox ZED-F9P-02B. Centimetre-level positioning for drones, robotics, and autonomous systems.',
    image:         '/images/work/gps-tracker-zed-f9p.jpg',
    industry:      'drone-uav',
    industryLabel: 'Drone & UAV',
    services:      ['pcb-design'],
    serviceLabels: ['PCB Design'],
    client:        'USA',
    specs:         ['4-Layer FR4', 'ZED-F9P-02B', 'L1/L2 GNSS'],
  },
  {
    slug:          'leaf-distribution-board',
    title:         'Leaf Distribution Board — ESC PDU',
    description:   'Specialized drone power distribution unit (PDU) for Electronic Speed Controllers (ESCs). Centralized current distribution for BLDC motors with clean, efficient connections.',
    image:         '/images/work/leaf-distribution-board.jpg',
    industry:      'drone-uav',
    industryLabel: 'Drone & UAV',
    services:      ['pcb-design', 'pcba-manufacturing'],
    serviceLabels: ['PCB Design', 'PCBA'],
    client:        'USA',
    specs:         ['2-Layer FR4', 'High-Current PDU', 'ESC Interface'],
  },
  {
    slug:          'groundlink-power-board',
    title:         'GroundLink Power Board',
    description:   'Specialized power distribution and regulation board for UAV/Drone ground control stations (GCS). Provides stable, regulated power to ground-based telemetry and communication hardware.',
    image:         '/images/work/groundlink-power-board.jpg',
    industry:      'drone-uav',
    industryLabel: 'Drone & UAV',
    services:      ['pcb-design'],
    serviceLabels: ['PCB Design'],
    client:        'USA',
    specs:         ['6-Layer FR4', '2oz Copper', 'GCS Power'],
  },
  {
    slug:          'groundlink-lcd-driver',
    title:         'GroundLink LCD Driver Board',
    description:   'Power regulation board for UAV ground control station LCD touch HMI. Supplies stable, regulated power to communication hardware and the touchscreen display interface.',
    image:         '/images/work/groundlink-lcd-driver.jpg',
    industry:      'drone-uav',
    industryLabel: 'Drone & UAV',
    services:      ['pcb-design'],
    serviceLabels: ['PCB Design'],
    client:        'USA',
    specs:         ['4-Layer FR4', 'LCD HMI Power', 'UAV GCS'],
  },
  {
    slug:          'radar-dome-module',
    title:         'Radar Dome Module',
    description:   'Agricultural UAV radar dome module for terrain sensing. Helps farmers make data-driven decisions by monitoring crops and soil in conditions where cameras or LiDAR fall short.',
    image:         '/images/work/radar-dome-module.jpg',
    industry:      'drone-uav',
    industryLabel: 'Drone & UAV',
    services:      ['pcb-design', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'Embedded Firmware'],
    client:        'USA',
    specs:         ['6-Layer FR4', 'Radar Sensing', 'AgriTech'],
  },

  /* ── IoT & SMART DEVICES ──────────────────────────────── */
  {
    slug:          'm66-iot-logger',
    title:         'M66 IoT Data Logger Module',
    description:   'Compact IoT data logger using Quectel M66 quad-band GSM/GPRS module. Logs data via GSM and HTTP with ultra-low power consumption, voice, SMS, and TCP/IP protocol support.',
    image:         '/images/work/m66-iot-logger.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'iot-wireless', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'IoT & Wireless', 'Firmware'],
    client:        'Europe',
    specs:         ['6-Layer FR4', 'Quectel M66', 'GSM/GPRS'],
  },
  {
    slug:          'bg95-iot-logger',
    title:         'BG95 IoT Data Logger Module',
    description:   'Advanced IoT data logger using Quectel BG95 LTE Cat M1/NB2/EGPRS module with integrated GNSS. Next-generation upgrade from GSM to 4G/NB-IoT with built-in GPS.',
    image:         '/images/work/bg95-iot-logger.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'iot-wireless', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'IoT & Wireless', 'Firmware'],
    client:        'Europe',
    specs:         ['6-Layer FR4', 'Quectel BG95', 'LTE-M / NB-IoT'],
  },
  {
    slug:          'wisol-sigfox-logger',
    title:         'WiSOL Sigfox Data Logger Module',
    description:   'LPWAN IoT data logger using WiSOL Sigfox module. Long-range, low-cost, ultra-low-power connectivity ideal for smart metering, asset tracking, agriculture, and logistics.',
    image:         '/images/work/wisol-sigfox-logger.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'iot-wireless', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'IoT & Wireless', 'Firmware'],
    client:        'Europe',
    specs:         ['6-Layer FR4', 'Sigfox LPWAN', 'Ultra-Low Power'],
  },
  {
    slug:          'heating-oil-gas-monitor',
    title:         'Heating Oil / Gas Supply Chain Monitor',
    description:   'Real-time contactless monitoring system for heating oil and gas supply chain. Integrates radar and ultrasonic sensors with 2G and 4G LTE connectivity. IP68-rated for field deployment.',
    image:         '/images/work/heating-oil-gas-monitor.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'iot-wireless', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'IoT & Wireless', 'Firmware'],
    client:        'Europe',
    specs:         ['6-Layer FR4', '2G/4G LTE', 'IP68 Enclosure'],
  },
  {
    slug:          'angels-share-monitor',
    title:         'Angels\' Share — Whisky Barrel Monitor',
    description:   'Coin-size IoT module that reads whisky level inside a barrel using radar technology. 6-layer Rogers RO4000 PCB, BLE 5.0, ultra-low power — runs on a coin battery for years.',
    image:         '/images/work/angels-share-monitor.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'iot-wireless', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'IoT & Wireless', 'Firmware'],
    client:        'Europe',
    specs:         ['6-Layer Rogers RO4000', 'BLE 5.0', 'Radar Level'],
  },
  {
    slug:          'boiler-management',
    title:         'Conventional Boiler Management System',
    description:   'Advanced IoT hardware to remotely monitor and control conventional boiler operations. ESP32 WiFi/Bluetooth, high-precision thermal probes, real-time monitoring and automation.',
    image:         '/images/work/boiler-management.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'iot-wireless', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'IoT & Wireless', 'Firmware'],
    client:        'USA',
    specs:         ['6-Layer FR4', 'ESP32 WiFi/BT', 'Thermal Probes'],
  },
  {
    slug:          'iot-waste-management',
    title:         'IoT Waste / Trash Management System',
    description:   'Smart IoT waste management system — battery-powered bins with pulsed coherent radar and ultrasonic sensors. STM32, 4G/NB-IoT, IP68-rated enclosure for all-weather operation.',
    image:         '/images/work/iot-waste-management.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'iot-wireless', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'IoT & Wireless', 'Firmware'],
    client:        'Europe',
    specs:         ['6-Layer FR4', 'STM32 + 4G/NB-IoT', 'IP68'],
  },
  {
    slug:          'uhf-rfid-shock-sense',
    title:         'UHF-RFID Shock Sense Tag & Reader',
    description:   'IoT-enabled UHF RFID shock detection system for logistics and cargo. Battery-powered handheld reader with GPS, WiFi, and BLE. Electromechanical tag records shock events without onboard power.',
    image:         '/images/work/uhf-rfid-shock-sense.jpg',
    industry:      'iot-smart-devices',
    industryLabel: 'IoT & Smart Devices',
    services:      ['pcb-design', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'Embedded Firmware'],
    client:        'USA',
    specs:         ['4-Layer FR4', 'UHF RFID + BLE + GPS', 'IP Rated'],
  },

  /* ── AUTOMOTIVE ───────────────────────────────────────── */
  {
    slug:          'obd-diagnostics-dongle',
    title:         'OBD II Diagnostics Dongle',
    description:   'Multi-purpose wireless vehicle diagnostic device. Communicates via CAN, ISO 9141, ISO 14230, and SAE J1850. BLE connection to mobile app for diagnostic readouts and vehicle parameter configuration.',
    image:         '/images/work/obd-diagnostics-dongle.jpg',
    industry:      'automotive',
    industryLabel: 'Automotive',
    services:      ['pcb-design', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'Embedded Firmware'],
    client:        'USA / Europe',
    specs:         ['4-Layer FR4', 'CAN / ISO Protocols', 'BLE 5.0'],
  },
  {
    slug:          'obd-keyfob-programmer',
    title:         'OBD II Key Fob Programmer',
    description:   'Microcontroller-based device that puts the vehicle into key-learning mode via the OBD connector and CAN protocols. Updates EEPROM with new key MAC — cost-effective alternative to dealer scan tools.',
    image:         '/images/work/obd-keyfob-programmer.jpg',
    industry:      'automotive',
    industryLabel: 'Automotive',
    services:      ['pcb-design', 'embedded-firmware'],
    serviceLabels: ['PCB Design', 'Embedded Firmware'],
    client:        'Europe',
    specs:         ['4-Layer FR4', 'CAN Protocol', 'EEPROM Programming'],
  },
]

/** All unique industries across projects */
export const WORK_INDUSTRIES = [
  { slug: 'drone-uav',          label: 'Drone & UAV'         },
  { slug: 'iot-smart-devices',  label: 'IoT & Smart Devices' },
  { slug: 'automotive',         label: 'Automotive'           },
] as const

/** All unique services across projects */
export const WORK_SERVICES = [
  { slug: 'pcb-design',        label: 'PCB Design'          },
  { slug: 'embedded-firmware', label: 'Embedded Firmware'   },
  { slug: 'iot-wireless',      label: 'IoT & Wireless'      },
  { slug: 'pcba-manufacturing', label: 'PCBA'               },
] as const
