/**
 * Extended industry data for individual industry pages.
 * Base data (slug, name, shortDescription, priority, icon) lives in industries.ts.
 * This file adds everything needed to render a full industry page.
 */

export interface IndustryChallenge {
  title: string
  desc:  string
}

export interface HowWeHelp {
  title: string
  desc:  string
}

export interface IndustryDetailData {
  slug:            string
  name:            string
  pageTitle:       string
  metaDescription: string
  heroTagline:     string
  longDescription: string
  challenges:      IndustryChallenge[]
  howWeHelp:       HowWeHelp[]
  relevantSlugs:   string[]   // service slugs relevant to this industry
  relatedSlugs:    string[]   // other industry slugs
}

/** Keyed by slug for O(1) lookup in the dynamic route. */
export const INDUSTRY_DETAILS: Record<string, IndustryDetailData> = {

  /* ── Semiconductor ────────────────────────────────────────── */
  semiconductor: {
    slug: 'semiconductor',
    name: 'Semiconductor',
    pageTitle: 'Electronics Engineering for Semiconductor Companies',
    metaDescription:
      'PCB design, FPGA carrier boards, and contract engineering for semiconductor test and validation equipment. Sunkey serves chip design and verification teams in the USA and Europe.',
    heroTagline:
      'Engineering support for the teams behind the chips.',
    longDescription:
      'Semiconductor companies need engineering partners who understand the precision required at this end of the market — the layer counts, the signal integrity requirements, the IP sensitivity, and the urgency of tape-out schedules. Sunkey provides PCB design for test and characterization boards, FPGA carrier cards for validation platforms, and contract engineers who slot into chip design and verification teams without a long ramp-up.',
    challenges: [
      {
        title: 'Specialist PCB design for test equipment',
        desc:  'Chip validation and test equipment runs at speeds that expose every routing mistake. Controlled impedance, DDR4, PCIe Gen3/4, and JESD204B interfaces are the norm, and finding PCB designers with genuine experience at these speeds is difficult.',
      },
      {
        title: 'Engineering bandwidth at tape-out time',
        desc:  'Tape-out timelines compress every project around them. When the verification team needs hardware to match silicon availability, the usual option — hire — is too slow. Contract engineers who can start in days, not months, change the calculus.',
      },
      {
        title: 'IP sensitivity and confidentiality',
        desc:  'Semiconductor IP is among the most sensitive in any industry. Engineering partners with clear IP assignment terms, signed NDAs, and disciplined information handling are a prerequisite, not a preference.',
      },
    ],
    howWeHelp: [
      {
        title: 'FPGA carrier boards and validation hardware',
        desc:  'Sunkey designs FPGA carrier cards for Xilinx Zynq, UltraScale, and Intel Arria/Cyclone platforms — the standard substrate for pre-silicon and post-silicon validation. Our SI analysis is run during layout, not afterward.',
      },
      {
        title: 'PCB design for ATE and characterization',
        desc:  'Automated test equipment, probe boards, and characterization platforms require PCB designers who understand the electrical performance requirements at the board level. Sunkey\'s high-speed design team handles these projects.',
      },
      {
        title: 'Contract engineers for chip design teams',
        desc:  'We provide hardware engineers on retainer or T&M for chip design and verification teams — PCB designers for evaluation boards, firmware engineers for software-defined radio and mixed-signal platforms, and validation engineers for bring-up.',
      },
    ],
    relevantSlugs: ['pcb-design', 'high-speed-fpga-design', 'rapid-prototyping', 'contract-engineering'],
    relatedSlugs:  ['industrial-automation', 'automotive'],
  },

  /* ── Industrial Automation ────────────────────────────────── */
  'industrial-automation': {
    slug: 'industrial-automation',
    name: 'Industrial Automation',
    pageTitle: 'Electronics Engineering for Industrial Automation',
    metaDescription:
      'Embedded systems, custom PCBs, measurement and control devices, and ATE development for industrial automation. Rugged design for harsh environments.',
    heroTagline:
      'Industrial electronics that holds up in the field.',
    longDescription:
      'Industrial automation electronics operates in environments that consumer and commercial hardware is not designed for — wide temperature ranges, vibration, moisture, electrical noise, and the expectation of years of continuous operation without failure. Sunkey designs and builds electronics for PLCs, HMIs, sensor interfaces, motor drive systems, and industrial communication nodes, with a design practice that accounts for these conditions from the first schematic.',
    challenges: [
      {
        title: 'Harsh environment reliability',
        desc:  'Industrial electronics must operate across wide temperature ranges, survive vibration and shock, and handle electrical transients from nearby motor drives and switching power supplies. Consumer-grade design practices fail here.',
      },
      {
        title: 'Industrial communication protocols',
        desc:  'Industrial networks — Modbus RTU/TCP, CANopen, PROFIBUS, EtherCAT, and PROFINET — require specific hardware and firmware implementations. Most embedded teams cover one or two; industrial automation spans all of them.',
      },
      {
        title: 'ATE and end-of-line testing',
        desc:  'Automated test equipment for production lines and in-process measurement systems require electrical design, mechanical integration, and software development to work together. Coordinating separate suppliers for each adds delay and integration risk.',
      },
    ],
    howWeHelp: [
      {
        title: 'Rugged PCB and enclosure design',
        desc:  'We design PCBs specified for industrial temperature ranges (-40°C to +85°C), with conformal coating, vibration-resistant component selection, and EMC design practice applied throughout — not bolted on after layout.',
      },
      {
        title: 'Industrial protocol firmware',
        desc:  'Our firmware team has implemented Modbus RTU/TCP, CANopen, CAN J1939, RS-485, and PROFIBUS interfaces on custom hardware. We handle the low-level protocol layer so your application team doesn\'t have to.',
      },
      {
        title: 'ATE and test fixture development',
        desc:  'Sunkey designs and builds automated test equipment for manufacturing lines — functional test fixtures, parametric measurement systems, and end-of-line pass/fail stations — with full test software development included.',
      },
    ],
    relevantSlugs: ['pcb-design', 'embedded-firmware', 'pcba-manufacturing', 'cable-harness-box-build', 'contract-engineering'],
    relatedSlugs:  ['semiconductor', 'automotive', 'iot-smart-devices'],
  },

  /* ── Drone & UAV ──────────────────────────────────────────── */
  'drone-uav': {
    slug: 'drone-uav',
    name: 'Drone & UAV',
    pageTitle: 'Electronics Engineering for Drone & UAV Companies',
    metaDescription:
      'End-to-end electronics design for drone and UAV systems. ESC boards, GPS modules, power distribution, radar dome, autopilot integration. 30+ drone projects delivered.',
    heroTagline:
      'We have built the electronics inside 30+ drone systems.',
    longDescription:
      'Drone electronics is a specialty. Weight, power efficiency, electromagnetic compatibility between high-current motor drives and sensitive GPS and RF systems, and the consequences of field failure combine to make UAV electronics harder than most embedded hardware. Sunkey has delivered more than 30 drone electronics projects — agricultural, inspection, and specialized autonomous systems — and understands the constraints that define success in this vertical.',
    challenges: [
      {
        title: 'Weight and form factor constraints',
        desc:  'Every gram of electronics comes out of payload capacity or flight endurance. Drone PCBs need to be small, light, and dense — without sacrificing the reliability that operating 50 meters in the air requires.',
      },
      {
        title: 'EMI between power and RF systems',
        desc:  'High-current ESC switching, GPS receivers, and telemetry radios must coexist on a drone without the motor drive noise corrupting positioning data or uplink telemetry. Getting this right requires deliberate EMC design, not luck.',
      },
      {
        title: 'Regulatory compliance',
        desc:  'FCC Part 15, CE RED, and increasingly, remote ID and spectrum management requirements apply to commercial drones. Compliance is not optional, and designing in compliance from the start is far cheaper than a redesign.',
      },
    ],
    howWeHelp: [
      {
        title: 'Full UAV electronics design',
        desc:  'We design and build the full electronics complement for a UAV system — ESC boards, power distribution, GPS and positioning modules, radar altimeters, flight controller carrier boards, and telemetry systems — as a coordinated system.',
      },
      {
        title: 'Agricultural UAV specialization',
        desc:  'Sunkey has particular depth in agricultural drone electronics — precision GPS for spray pattern control, radar-based terrain following, spray pump control, and the environmental protection requirements for field deployment.',
      },
      {
        title: 'EMC and compliance support',
        desc:  'We include EMC design practice in every drone electronics design and provide pre-compliance test support and design iteration to reach CE and FCC compliance without a test lab surprise.',
      },
    ],
    relevantSlugs: ['drone-uav-electronics', 'pcb-design', 'embedded-firmware', 'pcba-manufacturing'],
    relatedSlugs:  ['agricultural-technology', 'iot-smart-devices'],
  },

  /* ── IoT & Smart Devices ──────────────────────────────────── */
  'iot-smart-devices': {
    slug: 'iot-smart-devices',
    name: 'IoT & Smart Devices',
    pageTitle: 'IoT Hardware Design & Engineering',
    metaDescription:
      'Full IoT hardware design — sensor nodes, gateways, cellular data loggers, and cloud-connected devices. ZigBee, BLE, LoRa, NB-IoT, CAT-M1, and WiFi 6.',
    heroTagline:
      'From sensor to cloud. IoT hardware designed and shipped.',
    longDescription:
      'IoT hardware spans the widest range of any electronics vertical — from $2 coin-cell-powered sensor nodes running for 10 years on a single charge, to LTE-connected industrial gateways processing sensor data and pushing it to cloud infrastructure. Sunkey has designed IoT hardware across this full range, and our firmware team handles the connectivity stack alongside the hardware so the client doesn\'t have to integrate two separate partners.',
    challenges: [
      {
        title: 'Multi-protocol wireless complexity',
        desc:  'Most IoT products need more than one wireless technology — Bluetooth for commissioning, ZigBee for mesh, and cellular for backhaul. Designing hardware that handles all three, coexists without interference, and certifies to FCC and CE is a specialist skill.',
      },
      {
        title: 'Ultra-low-power design for battery life',
        desc:  'Years of battery life from a small primary cell requires power budgeting from the first line of schematic — component selection, sleep state design, wake-up latency, and firmware architecture all interact. Getting this wrong at the hardware stage cannot be fixed in firmware.',
      },
      {
        title: 'Cloud connectivity and provisioning',
        desc:  'Hardware engineers and cloud engineers often work in isolation. The result is hardware that technically works but is difficult to provision at scale, update in the field, or monitor for failures. IoT hardware needs to be designed with the cloud architecture in mind.',
      },
    ],
    howWeHelp: [
      {
        title: 'Full IoT hardware design',
        desc:  'We design IoT hardware from sensor interface to radio front-end, selecting modules and discrete components based on the application power budget, certification requirements, and bill-of-materials target.',
      },
      {
        title: 'Connectivity firmware and OTA',
        desc:  'Sunkey\'s firmware team implements the wireless stack, cloud connectivity protocol, and OTA update system alongside the hardware design — not after. The result is a hardware and firmware combination that works as a system from the first prototype.',
      },
      {
        title: 'Certification support',
        desc:  'FCC, CE, and PTCRB certification paths are built into our IoT design process. We select pre-certified modules where the application allows it, and provide pre-compliance test support and design iteration where custom RF design is required.',
      },
    ],
    relevantSlugs: ['iot-wireless', 'embedded-firmware', 'pcb-design', 'rapid-prototyping'],
    relatedSlugs:  ['industrial-automation', 'agricultural-technology', 'drone-uav'],
  },

  /* ── Automotive ───────────────────────────────────────────── */
  automotive: {
    slug: 'automotive',
    name: 'Automotive & Transportation',
    pageTitle: 'Automotive Electronics Engineering',
    metaDescription:
      'Electronics design for automotive and transportation systems — FPGA-based processing, functional safety-aware design, IATF 16949 certified supplier processes, automotive-grade component selection.',
    heroTagline:
      'Automotive-grade electronics design. Functional safety-aware from the first schematic.',
    longDescription:
      'Automotive electronics operates under a different set of constraints — wider temperature ranges, vibration, EMC requirements stricter than commercial standards, and increasingly, functional safety requirements that trace back to ISO 26262. Sunkey designs electronics for automotive applications with automotive-grade component selection, IATF 16949:2016 certified supplier processes, and a design practice that accounts for functional safety requirements at the architecture stage.',
    challenges: [
      {
        title: 'Automotive-grade component and supply chain requirements',
        desc:  'AEC-Q100 and AEC-Q200 qualified components, extended temperature ratings, and long production lifetimes change the component selection and supply chain management picture entirely from commercial electronics.',
      },
      {
        title: 'Functional safety and ISO 26262',
        desc:  'Automotive electronics increasingly requires a functional safety case. Hardware designs need to account for hardware diagnostic coverage, single-point fault metrics, and design documentation that supports a safety analysis.',
      },
      {
        title: 'EMC to CISPR 25 and other automotive standards',
        desc:  'Automotive EMC standards are stricter and differently structured from FCC and CE. Designing to CISPR 25 and ISO 11452 from the board layout stage is essential — retrofitting EMC compliance is expensive.',
      },
    ],
    howWeHelp: [
      {
        title: 'Automotive-grade PCB design',
        desc:  'Our PCB design practice for automotive applications includes automotive-grade component selection, extended temperature range qualification, design for conformal coating, and EMC design practice aligned to CISPR 25.',
      },
      {
        title: 'FPGA-based processing for ADAS and powertrain',
        desc:  'FPGA carrier board design for automotive processing applications — sensor fusion, real-time control, and deterministic signal processing — with the signal integrity and thermal management required in automotive environments.',
      },
      {
        title: 'Functional safety-aware design',
        desc:  'We design hardware with functional safety considerations from the architecture stage — diagnostic coverage, redundancy, safe states, and design documentation that supports your safety case.',
      },
    ],
    relevantSlugs: ['pcb-design', 'high-speed-fpga-design', 'embedded-firmware', 'contract-engineering'],
    relatedSlugs:  ['semiconductor', 'industrial-automation'],
  },

  /* ── Agricultural Technology ──────────────────────────────── */
  'agricultural-technology': {
    slug: 'agricultural-technology',
    name: 'Agricultural Technology',
    pageTitle: 'Agricultural Technology Electronics Engineering',
    metaDescription:
      'Agricultural drone electronics, precision GPS modules, soil sensor systems, and radar-based terrain sensing for AgTech hardware companies in the USA and Europe.',
    heroTagline:
      'Electronics for precision agriculture. GPS, radar, sensors, deployed in the field.',
    longDescription:
      'Agricultural technology hardware operates outdoors, in dust and moisture, under vibration from agricultural machinery, with the requirement to maintain GPS positioning accuracy at the centimeter level while simultaneously running spray control systems and terrain-following algorithms. Sunkey has delivered agricultural electronics for US AgTech customers in active field deployment and understands the specific requirements of this vertical.',
    challenges: [
      {
        title: 'Precision positioning in outdoor environments',
        desc:  'Centimeter-level GPS accuracy for precision spraying or seeding requires multi-frequency GNSS receiver design, careful RF layout to avoid self-interference from onboard electronics, and ground-truthing with RTK correction infrastructure.',
      },
      {
        title: 'Outdoor durability and environmental protection',
        desc:  'Field equipment sees dust, moisture, UV exposure, and wide temperature swings that destroy electronics designed for benign environments. IP67 or IP68 enclosure design, conformal coating, and component selection for extended temperature ranges are the starting point.',
      },
      {
        title: 'Integration with precision agriculture platforms',
        desc:  'Agricultural electronics must integrate with tractor control systems, drone autopilots, and cloud data management platforms using agricultural-specific communication protocols and data formats.',
      },
    ],
    howWeHelp: [
      {
        title: 'Agricultural drone electronics',
        desc:  'Sunkey has delivered ESC boards, GPS positioning modules, power distribution systems, spray pump controllers, and radar dome assemblies for agricultural UAV systems deployed in US precision agriculture operations.',
      },
      {
        title: 'Precision GNSS module design',
        desc:  'We design multi-frequency GNSS receiver boards for precision agriculture applications — BDS/GPS dual-frequency, L1/L2 or L1/L5, with RTK support for centimeter-level positioning.',
      },
      {
        title: 'Environmental protection and field reliability',
        desc:  'Our agricultural electronics designs are specified from the outset for outdoor deployment — IP-rated enclosures, conformal coating, vibration-resistant assembly, and component selection for extended temperature operation.',
      },
    ],
    relevantSlugs: ['drone-uav-electronics', 'iot-wireless', 'pcb-design', 'embedded-firmware'],
    relatedSlugs:  ['drone-uav', 'iot-smart-devices'],
  },
}
