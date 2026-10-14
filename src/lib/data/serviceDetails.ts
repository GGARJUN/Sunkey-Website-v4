/**
 * Extended service data for individual service pages.
 * The base service data (slug, name, shortDescription, specs, category, icon)
 * lives in services.ts. This file adds everything needed to render a full page.
 */

export interface CapabilityGroup {
  title:  string
  points: string[]
}

export interface ServiceDetailData {
  slug:           string
  name:           string
  pageTitle:      string
  metaDescription: string
  heroTagline:    string
  longDescription: string
  capabilities:   CapabilityGroup[]
  tools:          string[]
  deliverables:   string[]
  icpText:        string              // "This service is right for you if..."
  relatedSlugs:   string[]           // other service slugs
  industrySlugs:  string[]           // industry slugs this service maps to
}

/** Keyed by slug for O(1) lookup in the dynamic route. */
export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {

  /* ── PCB Design ─────────────────────────────────────────── */
  'pcb-design': {
    slug: 'pcb-design',
    name: 'PCB Design',
    pageTitle: 'PCB Design Services',
    metaDescription:
      'Professional PCB design from 2-layer to 20+ layer HDI — DDR4, PCIe Gen3, USB 3.x, FPGA carrier boards, RF, and mixed-signal. DFM-optimized, signal-integrity reviewed, Gerber-ready.',
    heroTagline:
      'From 2-layer to 20-layer HDI. Signal-accurate, DFM-optimized, Gerber-ready.',
    longDescription:
      'Sunkey\'s PCB design team covers the full complexity range — from straightforward 2-layer consumer boards to 20-layer HDI boards carrying DDR4 memory, PCIe Gen3 interfaces, and high-speed serial links at 10 Gbps and above. Every layout is reviewed for signal integrity, impedance control, and DFM compliance before Gerbers are released to fabrication.',
    capabilities: [
      {
        title: 'Layer count and board types',
        points: [
          '2 to 20+ layer boards across FR4, Rogers, and high-Tg materials',
          'HDI designs with blind and buried vias for fine-pitch BGA components',
          'Rigid, flex, and rigid-flex board designs',
          'RF and mixed-signal layouts with proper ground plane management',
          'High-current power boards with thermal relief and copper pour optimization',
        ],
      },
      {
        title: 'Signal integrity and compliance',
        points: [
          'Controlled impedance routing — single-ended and differential pairs',
          'DDR3/DDR4 fly-by topology with length matching to JEDEC specifications',
          'PCIe Gen3/Gen4 trace routing with reference plane continuity',
          'EMI/EMC design practice built into every layout, not added at the end',
          'SI simulation and eye diagram analysis for >5 Gbps interfaces',
        ],
      },
      {
        title: 'Review and DFM',
        points: [
          'Schematic review before layout begins — catching errors upstream saves time',
          'DRC run against manufacturer-specific design rules before any output',
          'DFM check with assembly review — pad sizes, courtyard clearances, solder mask expansion',
          'Fabrication-ready output: Gerbers, ODB++, drill files, BoM, and assembly drawings',
        ],
      },
    ],
    tools: [
      'Altium Designer',
      'Cadence Allegro',
      'Cadence OrCAD',
      'KiCad',
      'HyperLynx (SI analysis)',
    ],
    deliverables: [
      'Schematic (where Sunkey designs from concept)',
      'PCB layout files (native format)',
      'Gerber + ODB++ fabrication package',
      'Drill files (NC drill)',
      'Bill of Materials (BoM)',
      'Assembly drawings (top and bottom)',
      'Signal integrity report (high-speed designs)',
    ],
    icpText:
      'This service is the right fit if your team is designing hardware with DDR memory, PCIe, USB 3.x, or high-speed Ethernet interfaces — or if you need a partner who can take a schematic to Gerbers without you project-managing every step.',
    relatedSlugs: ['embedded-firmware', 'high-speed-fpga-design', 'rapid-prototyping'],
    industrySlugs: ['semiconductor', 'industrial-automation', 'drone-uav', 'iot-smart-devices'],
  },

  /* ── Embedded Firmware ────────────────────────────────────── */
  'embedded-firmware': {
    slug: 'embedded-firmware',
    name: 'Embedded Firmware',
    pageTitle: 'Embedded Firmware Development',
    metaDescription:
      'BSP development, RTOS integration, OTA firmware, device drivers, and firmware migration for ARM, RISC-V, and FPGA platforms in C/C++/Python.',
    heroTagline:
      'Firmware that runs reliably, first time. BSP to application layer, RTOS to OTA.',
    longDescription:
      'Sunkey\'s firmware engineers work across the full embedded stack — from board support packages and hardware abstraction layers through to application firmware and OTA update infrastructure. We have delivered firmware on ARM Cortex-M and Cortex-A series, RISC-V, and Xilinx and Intel FPGA platforms, in environments ranging from bare-metal microcontrollers to Linux-based SoCs.',
    capabilities: [
      {
        title: 'Low-level development',
        points: [
          'Board Support Package (BSP) bring-up for new hardware designs',
          'Device driver development — SPI, I2C, UART, CAN, USB, Ethernet',
          'Bootloader development and secure boot configuration',
          'Hardware Abstraction Layer (HAL) design for portability across MCU families',
          'Low-level peripheral configuration and interrupt handling',
        ],
      },
      {
        title: 'RTOS and middleware',
        points: [
          'FreeRTOS and Zephyr RTOS integration and task architecture',
          'Memory management, stack sizing, and real-time performance tuning',
          'Middleware integration — TCP/IP stacks, filesystems, USB stacks',
          'Communication protocol implementations — MQTT, CoAP, Modbus, CANopen',
        ],
      },
      {
        title: 'OTA updates and production firmware',
        points: [
          'Over-the-air (OTA) firmware update design and implementation',
          'Rollback protection and dual-bank flash management',
          'Firmware versioning, signing, and cryptographic verification',
          'Production firmware build systems and factory programming flows',
        ],
      },
    ],
    tools: [
      'GCC / Clang toolchains',
      'STM32CubeIDE / STM32CubeMX',
      'MPLAB X / XC compilers',
      'Keil MDK / IAR Embedded Workbench',
      'Xilinx Vitis / Vivado (FPGA + PS firmware)',
      'JTAG / SWD debugging (J-Link, OpenOCD)',
    ],
    deliverables: [
      'Full firmware source code (Git repository, documented)',
      'Build system (Makefile or CMake)',
      'Flashing and debug instructions',
      'Release binary with version manifest',
      'OTA update package (where applicable)',
      'Factory test firmware (on request)',
    ],
    icpText:
      'Right for you if you have hardware designed (or being designed) and need engineers who can take it from power-on to a functional, testable firmware image — without months of ramp-up.',
    relatedSlugs: ['pcb-design', 'iot-wireless', 'drone-uav-electronics'],
    industrySlugs: ['semiconductor', 'industrial-automation', 'iot-smart-devices', 'drone-uav'],
  },

  /* ── PCBA & Manufacturing ─────────────────────────────────── */
  'pcba-manufacturing': {
    slug: 'pcba-manufacturing',
    name: 'PCBA & Electronics Manufacturing',
    pageTitle: 'PCBA & Electronics Manufacturing',
    metaDescription:
      'SMT and through-hole PCBA for low-to-mid volume runs. AOI, X-ray inspection, ICT, and end-of-line functional testing included. NPI to production.',
    heroTagline:
      'From Gerbers to tested, boxed hardware. SMT, through-hole, AOI, X-ray, functional test.',
    longDescription:
      'Sunkey provides electronics manufacturing for hardware teams who need reliable, well-tested assemblies without minimum order constraints that don\'t fit prototype or low-volume production runs. Our assembly process covers SMT and through-hole, with automated optical inspection, X-ray verification for BGA and hidden-joint components, and end-of-line functional testing as standard — not optional extras.',
    capabilities: [
      {
        title: 'Assembly',
        points: [
          'SMT assembly — fine-pitch QFN, BGA, 0201 components, and below',
          'Through-hole assembly — axial, radial, connectors, and press-fit',
          'Mixed-technology boards — SMT and through-hole in a single build',
          'Low-to-mid volume runs — NPI quantities through production batches',
          'Lead-free (RoHS) and leaded assembly depending on specification',
        ],
      },
      {
        title: 'Inspection and quality',
        points: [
          'Automated Optical Inspection (AOI) on every board — not sampled',
          'X-ray inspection for BGA solder joint verification',
          'In-Circuit Test (ICT) for populated component verification',
          'First Article Inspection report on new builds',
          'IPC-A-610 workmanship standard applied throughout',
        ],
      },
      {
        title: 'Testing and delivery',
        points: [
          'End-of-line functional test — board powers up, firmware loads, peripherals tested',
          'Custom functional test fixture development on request',
          'Serial number labeling, conformal coating, and packaging as required',
          'Traceability records — component lot numbers, inspection results, test results',
        ],
      },
    ],
    tools: [
      'SMT pick-and-place lines',
      'Reflow and wave soldering',
      'AOI systems',
      'X-ray inspection',
      'Custom functional test fixtures',
    ],
    deliverables: [
      'Assembled and tested PCBAs',
      'AOI inspection reports',
      'X-ray reports (BGA builds)',
      'Functional test reports',
      'Packing list and traceability records',
    ],
    icpText:
      'Right for you if you need assembled and tested boards — NPI quantities for design validation or production runs — and want a single partner who covers manufacturing and testing without you coordinating multiple vendors.',
    relatedSlugs: ['rapid-prototyping', 'pcb-design', 'cable-harness-box-build'],
    industrySlugs: ['industrial-automation', 'iot-smart-devices', 'drone-uav', 'semiconductor'],
  },

  /* ── Rapid Prototyping ────────────────────────────────────── */
  'rapid-prototyping': {
    slug: 'rapid-prototyping',
    name: 'Rapid Prototyping',
    pageTitle: 'Rapid Hardware Prototyping',
    metaDescription:
      'Prototype PCBs and assembled boards in 2–3 weeks. Prototype costing in 2 business days. DFM review and first-article inspection included.',
    heroTagline:
      'Working hardware in 2–3 weeks. Costing in 2 days. DFM review built in.',
    longDescription:
      'Sunkey\'s rapid prototyping service is designed for hardware teams who are moving fast and need a partner who can match that pace. We provide a detailed cost breakdown within 2 business days of receiving a requirement, and deliver assembled, tested prototype boards in 2 to 3 weeks from design sign-off. Every prototype build includes a DFM review — catching assembly and fabrication issues before they become expensive respins.',
    capabilities: [
      {
        title: 'Speed and process',
        points: [
          'Prototype costing within 2 business days of receiving requirement and design files',
          'Assembled prototype delivery in 2–3 weeks from design sign-off',
          'Parallel sourcing — components ordered while fabrication is running',
          'Expedite options available for critical path builds',
        ],
      },
      {
        title: 'DFM and design review',
        points: [
          'DFM review on received Gerbers before fabrication is ordered',
          'Component availability check at quote stage — no supply surprises mid-build',
          'Alternate component recommendations for long-lead or obsolete parts',
          'Footprint and land pattern verification against assembly tolerances',
        ],
      },
      {
        title: 'Build and test',
        points: [
          'SMT and through-hole assembly for all prototype builds',
          'AOI and visual inspection on every assembly',
          'First-article inspection report included',
          'Functional test — board powers up, interfaces verified, firmware loaded',
        ],
      },
    ],
    tools: [
      'Rapid PCB fabrication (standard and expedite lead times)',
      'Component sourcing from Digi-Key, Mouser, Arrow, LCSC',
      'SMT assembly for prototype quantities',
      'AOI and functional test',
    ],
    deliverables: [
      'Assembled and tested prototype boards',
      'DFM review report',
      'First-article inspection report',
      'Functional test report',
      'Detailed cost breakdown (materials + assembly + test)',
    ],
    icpText:
      'Right for you if you\'re at the NPI stage and need to validate a design before committing to production — or if you\'ve had a design revision and need working boards quickly to stay on schedule.',
    relatedSlugs: ['pcba-manufacturing', 'pcb-design', 'high-speed-fpga-design'],
    industrySlugs: ['semiconductor', 'drone-uav', 'iot-smart-devices', 'industrial-automation'],
  },

  /* ── IoT & Wireless ───────────────────────────────────────── */
  'iot-wireless': {
    slug: 'iot-wireless',
    name: 'IoT & Wireless',
    pageTitle: 'IoT & Wireless Hardware Design',
    metaDescription:
      'Full-stack IoT hardware design — sensor nodes, gateways, and connected devices. ZigBee, BLE 5.0, LoRa, NB-IoT, CAT-M1, Z-Wave, and WiFi 6. Industrial, agricultural, and building applications.',
    heroTagline:
      'Connected hardware, from sensor to cloud. Every wireless protocol, every application layer.',
    longDescription:
      'Sunkey designs IoT hardware across the full protocol stack — from ultra-low-power sensor nodes running BLE or ZigBee to LTE-M cellular gateways with cloud connectivity. We have delivered IoT platforms for industrial monitoring, precision agriculture, and smart building applications, and our firmware team handles the embedded stack alongside the hardware design so integration is not the client\'s problem.',
    capabilities: [
      {
        title: 'Wireless protocol coverage',
        points: [
          'ZigBee and Thread mesh networking for smart building and industrial automation',
          'BLE 5.0 and BLE Mesh for consumer and industrial IoT',
          'LoRa and LoRaWAN for long-range, low-power wide-area applications',
          'NB-IoT and CAT-M1 (LTE-M) cellular for remote monitoring without WiFi infrastructure',
          'Z-Wave for home automation and security applications',
          'WiFi 6 (802.11ax) for high-throughput gateway and edge compute designs',
        ],
      },
      {
        title: 'Hardware design',
        points: [
          'Antenna design and RF layout — trace antenna, chip antenna, and external antenna configurations',
          'Multi-protocol modules: u-blox, Nordic nRF series, Silicon Labs, Quectel',
          'Ultra-low-power design for battery-operated sensor nodes',
          'Power management — energy harvesting, supercapacitor backup, fuel gauge integration',
          'Sensor interface design — I2C, SPI, UART, analog ADC, 4-20mA, RS-485',
        ],
      },
      {
        title: 'Embedded and connectivity stack',
        points: [
          'Firmware for sensor data acquisition, processing, and transmission',
          'MQTT, CoAP, and LwM2M protocol stacks for cloud connectivity',
          'OTA firmware update with rollback protection',
          'Device provisioning, certificate management, and secure element integration',
        ],
      },
    ],
    tools: [
      'Nordic nRF Connect SDK / Zephyr',
      'Silicon Labs Simplicity Studio',
      'u-blox toolchain',
      'Quectel module SDKs',
      'AWS IoT Core / Azure IoT Hub integration',
    ],
    deliverables: [
      'IoT hardware design (schematic + layout)',
      'Firmware source code and build system',
      'RF antenna test report',
      'Assembled and tested prototype boards',
      'Cloud connectivity proof-of-concept (on request)',
    ],
    icpText:
      'Right for you if you\'re building a connected product and need a partner who can handle the full hardware and firmware stack — without treating the wireless layer and the rest of the board as separate problems.',
    relatedSlugs: ['embedded-firmware', 'pcb-design', 'rapid-prototyping'],
    industrySlugs: ['iot-smart-devices', 'industrial-automation', 'agricultural-technology'],
  },

  /* ── Drone & UAV Electronics ──────────────────────────────── */
  'drone-uav-electronics': {
    slug: 'drone-uav-electronics',
    name: 'Drone & UAV Electronics',
    pageTitle: 'Drone & UAV Electronics Design',
    metaDescription:
      'Electronics design and manufacturing for drone and UAV systems. ESC boards, GPS modules, power distribution, radar dome assemblies, autopilot integration. 30+ projects delivered.',
    heroTagline:
      'Electronics for hardware that flies. 30+ drone projects delivered end to end.',
    longDescription:
      'Sunkey has delivered electronics for agricultural drones, inspection UAVs, and specialized autonomous systems — more than 30 projects completed to date. Our team covers ESC design, GPS and positioning modules, power distribution units, radar dome assemblies, and flight controller carrier boards. We understand the weight, thermal, and EMI constraints that separate working drone electronics from boards that cause interference, overheat, or fail in the field.',
    capabilities: [
      {
        title: 'Drive and power electronics',
        points: [
          'Electronic Speed Controller (ESC) board design for BLDC motors',
          'Power Distribution Unit (PDU) design — multi-output, current-sensing, telemetry',
          'Battery management and cell balancing circuits',
          'High-current bus design with GaN or SiC FET switching stages',
          'Thermal management for high-power ESC and PDU designs',
        ],
      },
      {
        title: 'Positioning and sensing',
        points: [
          'GPS and GNSS receiver board design — BDS, GPS, GLONASS dual-frequency',
          'IMU and magnetometer integration for attitude estimation',
          'Radar altimeter and terrain sensing module design',
          'Radar dome assembly — RF design, radome construction, and antenna integration',
          'Lidar interface and processing boards',
        ],
      },
      {
        title: 'Flight controller and communication',
        points: [
          'Autopilot carrier board design (PX4, ArduPilot, custom flight controllers)',
          'SBUS, PPM, and MAVLink communication interface design',
          'Telemetry radio integration — SiK, DroneCAN, custom RF links',
          'Video transmission system hardware design',
          'Agricultural spray system integration and control electronics',
        ],
      },
    ],
    tools: [
      'Altium Designer (board design)',
      'MATLAB / Simulink (control system simulation)',
      'PX4 / ArduPilot (firmware integration)',
      'DroneCAN toolchain',
      'RF simulation tools for antenna and radar designs',
    ],
    deliverables: [
      'Full hardware design package (schematics, layout, BoM)',
      'Assembled and tested prototype boards',
      'Firmware integration and field test support',
      'EMI/EMC pre-compliance test support',
      'Flight test support (remote or on-site)',
    ],
    icpText:
      'Right for you if you\'re building UAV systems and need electronics engineers who have actually done this before — understanding the constraints of size, weight, EMI, and field reliability that generic electronics teams miss.',
    relatedSlugs: ['embedded-firmware', 'pcb-design', 'pcba-manufacturing'],
    industrySlugs: ['drone-uav', 'agricultural-technology'],
  },

  /* ── High-Speed & FPGA Design ─────────────────────────────── */
  'high-speed-fpga-design': {
    slug: 'high-speed-fpga-design',
    name: 'High-Speed & FPGA Design',
    pageTitle: 'High-Speed PCB & FPGA Board Design',
    metaDescription:
      'Signal integrity analysis, controlled impedance routing, and EMI/EMC design for DDR4, PCIe Gen3/4, 10GbE, and FPGA carrier boards. HDI layout with full SI reporting.',
    heroTagline:
      'Signal integrity from schematic to silicon. DDR4, PCIe Gen4, 10GbE, FPGA carrier boards.',
    longDescription:
      'Sunkey designs the boards that other PCB designers turn down — high-layer-count HDI layouts with DDR4 memory channels, PCIe Gen3 and Gen4 lanes, and FPGA carrier cards where every trace length and reference plane discontinuity matters. We run signal integrity analysis as part of the layout process, not as an afterthought, and deliver full SI reports alongside the Gerber package.',
    capabilities: [
      {
        title: 'High-speed interface design',
        points: [
          'DDR4 fly-by topology with length matching to JEDEC timing specs',
          'PCIe Gen3 and Gen4 lane routing with reference plane continuity checks',
          '10GbE and 25GbE differential pair routing with crosstalk management',
          'USB 3.1 / 3.2 Gen2 layout with proper length matching and via placement',
          'JESD204B and LVDS interface routing for RF and data converter boards',
        ],
      },
      {
        title: 'FPGA board design',
        points: [
          'FPGA carrier board design for Xilinx Zynq-7000, UltraScale, and Versal families',
          'Intel (Altera) Cyclone and Arria series carrier boards',
          'Multi-bank power supply design with proper decoupling and PDN analysis',
          'High-pin-count BGA escape routing on HDI substrates',
          'Mezzanine and FMC connector interface design',
        ],
      },
      {
        title: 'Signal integrity and EMC',
        points: [
          'Pre-layout stackup recommendation — layer count, Dk, loss tangent selection',
          'Controlled impedance target setting for all high-speed nets',
          'Post-layout SI simulation — eye diagram, crosstalk, and return loss analysis',
          'EMC design practice — stitching vias, guard traces, split plane management',
          'EMC pre-compliance test support and design iteration',
        ],
      },
    ],
    tools: [
      'Altium Designer (layout)',
      'Cadence Allegro (layout)',
      'HyperLynx (SI and EMC simulation)',
      'Ansys SIwave / HFSS (advanced SI/PI analysis)',
      'Saturn PCB Toolkit (impedance and via modeling)',
    ],
    deliverables: [
      'Stackup specification document',
      'PCB layout with full layer structure',
      'Gerber + ODB++ fabrication package',
      'Signal integrity simulation report',
      'Impedance control notes for fabricator',
      'DFM and DFA review report',
    ],
    icpText:
      'Right for you if your board is too complex for a generalist PCB designer — FPGA carrier cards, DDR4 channels, multi-gigabit serial links, or anything where signal integrity analysis is required rather than optional.',
    relatedSlugs: ['pcb-design', 'rapid-prototyping', 'embedded-firmware'],
    industrySlugs: ['semiconductor', 'industrial-automation', 'drone-uav'],
  },

  /* ── Cable Harness & Box Build ────────────────────────────── */
  'cable-harness-box-build': {
    slug: 'cable-harness-box-build',
    name: 'Cable Harness & Box Build',
    pageTitle: 'Cable Harness & Box Build Assembly',
    metaDescription:
      'Cable harness design and assembly, wire looms, panel wiring, and full box-build integration with product-level testing. IPC-A-620 workmanship standard.',
    heroTagline:
      'Electromechanical assembly, complete. Harnesses, panel builds, box builds, tested.',
    longDescription:
      'Sunkey provides complete electromechanical assembly — from cable harness design and manufacture through to full box-build integration and product-level testing. Our assembly team works to IPC-A-620 workmanship standards, and every build is tested against a functional test plan before shipment. This service completes the picture for hardware teams who need a single partner for boards and enclosure assembly.',
    capabilities: [
      {
        title: 'Cable harness and wire assembly',
        points: [
          'Custom cable harness design and assembly — point-to-point and split harnesses',
          'Wire loom design and manufacture for automotive, industrial, and UAV applications',
          'Connector termination — crimping, soldering, press-fit for all major connector families',
          'Coaxial and RF cable assembly — SMA, N-type, MHF/U.FL, and custom configurations',
          'High-current cable assemblies for power distribution applications',
        ],
      },
      {
        title: 'Panel and rack wiring',
        points: [
          'Control panel wiring and DIN rail assembly',
          'Industrial enclosure wiring — marshalling, terminal blocks, cable management',
          'Electrical panel build from schematic and wiring diagram',
          'Test and functional verification against panel drawing',
        ],
      },
      {
        title: 'Box build and integration',
        points: [
          'Full box-build integration — PCBAs, cable harnesses, mechanical enclosures assembled and tested as a unit',
          'Thermal management — heat sink installation, thermal interface material application',
          'Label application, conformal coating, and final QC inspection',
          'Product-level functional test before shipment',
        ],
      },
    ],
    tools: [
      'Wire processing equipment (cut, strip, crimp)',
      'Coaxial cable assembly tools',
      'Panel wiring and continuity test equipment',
      'Functional test fixtures for box-level testing',
    ],
    deliverables: [
      'Assembled cable harnesses or wire looms',
      'Assembled and wired panels or enclosures',
      'Complete box-build assemblies',
      'Continuity and insulation resistance test records',
      'Product-level functional test report',
    ],
    icpText:
      'Right for you if you need a partner who can take PCBAs, enclosures, and cable harnesses and integrate them into a complete, tested product — without you managing a separate assembly house on top of your board manufacturer.',
    relatedSlugs: ['pcba-manufacturing', 'rapid-prototyping', 'contract-engineering'],
    industrySlugs: ['industrial-automation', 'drone-uav', 'automotive'],
  },

  /* ── Contract Engineering ─────────────────────────────────── */
  'contract-engineering': {
    slug: 'contract-engineering',
    name: 'Contract Engineering',
    pageTitle: 'Contract Electronics Engineering',
    metaDescription:
      'Dedicated contract hardware and firmware engineers — 5 to 30 years of experience — on monthly retainer, T&M, or contract-to-hire. Available within days, not months.',
    heroTagline:
      'Engineering bandwidth, on demand. Dedicated engineers available within days.',
    longDescription:
      'Sunkey provides dedicated electronics engineers for hardware teams who need capacity, specific skills, or a bridge hire — without a multi-month recruitment process. Our engineers bring 5 to 30 years of hands-on experience in PCB design, embedded firmware, FPGA development, RF engineering, and hardware validation, and they engage on your terms: monthly retainer, time and materials, or contract-to-hire.',
    capabilities: [
      {
        title: 'Engineering disciplines available',
        points: [
          'PCB design — 2-layer to complex multi-layer HDI, all major EDA tools',
          'Embedded firmware — ARM, RISC-V, FPGA, RTOS, and Linux-based platforms',
          'FPGA design — RTL coding in VHDL and Verilog, Xilinx and Intel families',
          'RF and wireless hardware design — antenna, PCB RF layout, RF front-end',
          'Hardware validation and test — functional test, bench debug, SI measurement',
          'Systems engineering — architecture, requirements, and design integration',
        ],
      },
      {
        title: 'Engagement structures',
        points: [
          'Monthly retainer — fixed monthly hours at agreed rates, renews monthly',
          'Time and Materials (T&M) — hours tracked and invoiced, flexible scope',
          'Contract-to-hire — trial period with option to convert to a full-time role',
          'Project-based — scoped deliverables on a fixed-cost basis',
        ],
      },
      {
        title: 'How we work',
        points: [
          'Engineers work to your tools, processes, and communication cadence',
          'Regular check-ins and progress reports as agreed — daily standups or weekly summaries',
          'IP assignment and confidentiality covered by standard engagement agreement',
          'Replacement engineer available if original assignee is unavailable — no single point of failure',
        ],
      },
    ],
    tools: [
      'All major EDA tools (Altium, Cadence, KiCad)',
      'Embedded toolchains (GCC, IAR, Keil)',
      'FPGA tools (Xilinx Vivado / Vitis, Intel Quartus)',
      'Version control (Git, SVN)',
      'Project tracking (Jira, Linear, Asana — your choice)',
    ],
    deliverables: [
      'Dedicated engineer(s) embedded in your team',
      'All work products (code, schematics, layouts) owned by client',
      'Weekly or bi-weekly progress reports',
      'Signed NDA and IP assignment agreement',
    ],
    icpText:
      'Right for you if your team is at capacity, missing a specific skill, under a hiring freeze, or needs a senior engineer for a defined project without the 4-month recruitment cycle.',
    relatedSlugs: ['pcb-design', 'embedded-firmware', 'high-speed-fpga-design'],
    industrySlugs: ['semiconductor', 'industrial-automation', 'automotive'],
  },

  /* ── Hardware System Design ─────────────────────────────── */
  'hardware-system-design': {
    slug: 'hardware-system-design',
    name: 'Hardware System Design',
    pageTitle: 'Hardware System Design Services',
    metaDescription:
      'End-to-end hardware system design — feasibility studies, component benchmarking, multicore architecture, multilayer PCB, design reviews, power optimisation, prototyping, and certification support.',
    heroTagline:
      'From concept to NPI. Rigorous architecture, DFM-ready hardware, certification-ready.',
    longDescription:
      'Sunkey delivers full-cycle hardware system design from the first feasibility study through prototype validation and certification submission. Our engineers handle the entire chain: defining product architecture, selecting and benchmarking components, designing multilayer PCBs, reviewing for power efficiency and signal integrity, building and testing prototypes, and supporting CE/FCC/UL/EMI/FDA pre-compliance. Whether you are launching a new embedded product or redesigning an existing platform, we embed with your team and own the hardware work end to end.',
    capabilities: [
      {
        title: 'Feasibility and architecture',
        points: [
          'Product feasibility studies and technical risk assessment',
          'System architecture definition: processor, memory, connectivity, power',
          'Multicore hardware design for compute-intensive embedded applications',
          'Component benchmarking and supplier shortlisting',
          'BoM cost optimisation and obsolescence management',
        ],
      },
      {
        title: 'Design and review',
        points: [
          'Schematic design and multilayer PCB layout (up to 20+ layers)',
          'Signal integrity and power integrity analysis',
          'Design-for-manufacture (DFM) and design-for-test (DFT) reviews',
          'Power optimisation: LDO, DCDC, battery charging, power sequencing',
          'Thermal analysis and EMI/EMC pre-compliance design',
        ],
      },
      {
        title: 'Prototyping and validation',
        points: [
          'Prototype builds from 1 unit in 2 to 3 weeks',
          'Bring-up, debug, and hardware validation testing',
          'Pre-compliance testing for CE, FCC, UL, EMI, and FDA',
          'Certification documentation and submission support',
          'Design iteration based on test results',
        ],
      },
      {
        title: 'NPI and lifecycle',
        points: [
          'NPI handoff packages: Gerbers, BoM, assembly drawings, test procedures',
          'Transition from prototype to low-volume production',
          'Component lifecycle monitoring and drop-in replacement identification',
          'Legacy hardware refresh and redesign',
        ],
      },
    ],
    tools: [
      'Altium Designer, Cadence Allegro/OrCAD, KiCad',
      'SIwave, HyperLynx (signal and power integrity)',
      'Ansys Icepak (thermal simulation)',
      'SolidWorks / STEP for mechanical integration',
      'LTspice for power circuit simulation',
    ],
    deliverables: [
      'Feasibility report and architecture document',
      'Complete schematic and multilayer PCB layout files',
      'BoM with sourcing alternatives and pricing',
      'DFM/DFT review reports',
      'Prototype hardware with test report',
      'NPI package ready for production handoff',
    ],
    icpText:
      'Right for you if you are building a new embedded hardware product from scratch, redesigning an existing platform for cost or performance, or need a team that can own the hardware end-to-end while your software team focuses on application development.',
    relatedSlugs: ['pcb-design', 'embedded-firmware', 'rapid-prototyping'],
    industrySlugs: ['semiconductor', 'industrial-automation', 'iot-smart-devices'],
  },
}
