/**
 * pSEO: Technology-specific pages.
 * ~40 pages targeting engineers who search for specific technologies, protocols,
 * or tools that Sunkey works with.
 *
 * URL pattern: /technology/[slug]
 * Target searches: "DDR4 PCB layout services", "ZigBee hardware design company",
 * "Xilinx Zynq board design", "FreeRTOS development services"
 */

export interface TechnologyData {
  slug:              string
  name:              string
  category:          string
  pageTitle:         string
  metaDescription:   string
  heroTagline:       string
  description:       string
  capabilities:      string[]
  relatedServiceSlugs: string[]
  relatedIndustrySlugs: string[]
}

export const TECHNOLOGIES: TechnologyData[] = [

  /* ── High-Speed Interfaces ────────────────────────────── */
  {
    slug:     'ddr4-pcb-layout',
    name:     'DDR4 PCB Layout',
    category: 'High-Speed Design',
    pageTitle: 'DDR4 PCB Layout Services',
    metaDescription:
      'DDR4 fly-by topology PCB layout with length matching to JEDEC specifications. Signal integrity analysis and eye diagram verification included.',
    heroTagline: 'DDR4 layouts delivered to JEDEC timing specifications.',
    description:
      'DDR4 memory interface routing requires fly-by topology, tight net length matching, and controlled impedance that most PCB designers get wrong. Sunkey\'s high-speed design team has laid out DDR4 x16 and x32 interfaces on boards ranging from 4-layer consumer designs to 14-layer HDI server boards, with SI simulation and eye diagram verification on every layout.',
    capabilities: [
      'Fly-by daisy-chain topology for single and multi-DIMM configurations',
      'Net length matching to JEDEC DDR4 timing budgets — address, command, and data groups',
      'Controlled impedance — 40Ω single-ended, 80Ω differential for DDR4',
      'Crosstalk analysis between DQS and DQ nets',
      'Signal integrity simulation and eye diagram verification',
      'Reference plane continuity checks at via transitions',
    ],
    relatedServiceSlugs:  ['pcb-design', 'high-speed-fpga-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'pcie-gen3-board-design',
    name:     'PCIe Gen3 Board Design',
    category: 'High-Speed Design',
    pageTitle: 'PCIe Gen3 & Gen4 PCB Design Services',
    metaDescription:
      'PCIe Gen3 and Gen4 board design with reference plane continuity, trace length matching, and AC coupling capacitor placement. Full SI analysis included.',
    heroTagline: 'PCIe Gen3 and Gen4 routing done right.',
    description:
      'PCIe Gen3 operates at 8 GT/s per lane — a speed that exposes every via stub, impedance discontinuity, and reference plane break. Sunkey designs PCIe Gen3 and Gen4 host and endpoint boards with back-drilling, reference plane continuity checks, and AC coupling capacitor placement to JEDEC and PCI-SIG recommendations.',
    capabilities: [
      'x1 through x16 lane routing on multi-layer HDI boards',
      'Reference plane continuity — no plane breaks under differential pairs',
      'Via stub minimization through back-drilling or blind/buried vias',
      'AC coupling capacitor placement per PCI Express Base Specification',
      'Differential trace length matching within 5 mil between P and N',
      'Pre-layout SI simulation and post-layout verification',
    ],
    relatedServiceSlugs:  ['high-speed-fpga-design', 'pcb-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'usb3-pcb-layout',
    name:     'USB 3.x PCB Layout',
    category: 'High-Speed Design',
    pageTitle: 'USB 3.0 / 3.1 / 3.2 PCB Layout',
    metaDescription:
      'USB 3.0, 3.1 Gen2, and 3.2 Gen2x2 PCB layout services. Differential pair routing, ESD protection placement, and USB-C connector design.',
    heroTagline: 'USB 3.x differential pair routing with EMC compliance in mind.',
    description:
      'USB 3.x differential pair routing requires controlled impedance at 90Ω, careful ESD protection component placement, and USB-C connector layouts that support both USB 3.2 and USB Power Delivery. Sunkey designs USB 3.0, 3.1 Gen2 (10 Gbps), and 3.2 Gen2x2 (20 Gbps) interfaces with EMC design practice applied from the first trace.',
    capabilities: [
      'USB 3.x SS_TX and SS_RX differential pair routing at 90Ω',
      'USB 2.0 HS D+/D- routing on the same board without interference',
      'ESD protection component placement — TVS and common mode choke positioning',
      'USB-C connector layout for USB3.2 + PD + Alt Mode designs',
      'EMI filter placement and PCB layout for conducted emissions compliance',
      'Reference plane continuity through connector transitions',
    ],
    relatedServiceSlugs:  ['pcb-design', 'embedded-firmware'],
    relatedIndustrySlugs: ['industrial-automation', 'iot-smart-devices'],
  },
  {
    slug:     'signal-integrity-analysis',
    name:     'Signal Integrity Analysis',
    category: 'High-Speed Design',
    pageTitle: 'PCB Signal Integrity Analysis Services',
    metaDescription:
      'Pre-layout and post-layout signal integrity analysis for high-speed PCB designs. Eye diagram, crosstalk, return loss, and impedance simulation.',
    heroTagline: 'Signal integrity analysis that catches problems before fabrication.',
    description:
      'Signal integrity problems found after board fabrication cost 5–10× more to fix than problems caught during layout. Sunkey runs SI analysis as a standard step in every high-speed PCB design — pre-layout stackup modeling, during-layout impedance checks, and post-layout simulation of critical nets before Gerbers are released.',
    capabilities: [
      'Pre-layout stackup modeling — Dk, loss tangent, and impedance target setting',
      'During-layout impedance checks using Saturn PCB Toolkit and HyperLynx',
      'Post-layout time-domain simulation — eye diagram for DDR4, PCIe, USB 3.x',
      'Crosstalk analysis on adjacent aggressor/victim net pairs',
      'Return loss and insertion loss for RF and microwave interfaces',
      'PDN analysis — power delivery network simulation for FPGA and processor boards',
    ],
    relatedServiceSlugs:  ['high-speed-fpga-design', 'pcb-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'hdi-pcb-design',
    name:     'HDI PCB Design',
    category: 'High-Speed Design',
    pageTitle: 'HDI PCB Design Services',
    metaDescription:
      'High-density interconnect PCB design with blind and buried vias for fine-pitch BGA components. Microvias, stacked vias, and via-in-pad designs.',
    heroTagline: 'HDI PCB layouts for fine-pitch BGAs and high-density boards.',
    description:
      'High-density interconnect PCBs with blind and buried vias, microvias, and via-in-pad designs are necessary for fine-pitch BGAs, CSPs, and high-component-density boards. Sunkey has designed HDI boards up to 14 layers with stacked and staggered microvia structures, working to the DFM constraints of HDI-capable fabricators in Asia and Europe.',
    capabilities: [
      'Blind and buried via design with correct aspect ratios for HDI fabrication',
      'Microvia (laser-drilled) design for 0.3mm and 0.4mm pitch BGAs',
      'Via-in-pad design with copper-filled pad recommendations',
      'Stacked and staggered microvia structures for dense multi-layer escape routing',
      'DFM review against specific HDI fabricator capabilities',
      'BGA escape routing strategies for 0.5mm, 0.4mm, and 0.3mm pitch',
    ],
    relatedServiceSlugs:  ['pcb-design', 'high-speed-fpga-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },

  /* ── FPGA ─────────────────────────────────────────────── */
  {
    slug:     'fpga-carrier-board-design',
    name:     'FPGA Carrier Board Design',
    category: 'FPGA',
    pageTitle: 'FPGA Carrier Board Design Services',
    metaDescription:
      'FPGA carrier board design for Xilinx Zynq, UltraScale, Versal, and Intel Cyclone/Arria. Multi-bank PDN, high-speed serial interfaces, FMC connector design.',
    heroTagline: 'FPGA carrier boards from stackup to validated prototype.',
    description:
      'FPGA carrier boards are among the most complex PCB designs in commercial electronics — multi-bank power delivery networks, high-speed serial transceivers, DDR4 memory interfaces, and high-pin-count BGA escape routing all on the same board. Sunkey designs carrier boards for Xilinx Zynq-7000, UltraScale+, Versal, and Intel Cyclone/Arria families with full SI analysis and PDN modeling.',
    capabilities: [
      'Zynq-7000, UltraScale, UltraScale+, and Versal carrier board design',
      'Intel Cyclone 10 GX, Arria 10, and Stratix 10 carrier boards',
      'Multi-bank FPGA power delivery network design and PDN simulation',
      'High-pin-count BGA escape routing on HDI substrates',
      'FMC (VITA 57.1) and FMC+ (VITA 57.4) mezzanine connector design',
      'Multi-gigabit transceiver (MGT) trace routing for PCIe, Aurora, and JESD204B',
    ],
    relatedServiceSlugs:  ['high-speed-fpga-design', 'pcb-design', 'rapid-prototyping'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'xilinx-zynq-board-design',
    name:     'Xilinx Zynq Board Design',
    category: 'FPGA',
    pageTitle: 'Xilinx Zynq PCB Design Services',
    metaDescription:
      'Xilinx Zynq-7000 and Zynq UltraScale+ MPSoC board design. PS/PL power sequencing, DDR4, PCIe, Gigabit Ethernet, and custom carrier board development.',
    heroTagline: 'Zynq-7000 and UltraScale+ carrier boards, designed and validated.',
    description:
      'The Xilinx Zynq family combines ARM processing with FPGA fabric on a single SoC — a powerful architecture that requires careful power sequencing, DDR4 routing for both PS and PL interfaces, and multi-voltage I/O bank management. Sunkey has designed Zynq-7000 and UltraScale+ MPSoC carrier boards for semiconductor validation, industrial control, and signal processing applications.',
    capabilities: [
      'Zynq-7000 (XC7Z010 through XC7Z100) carrier board design',
      'Zynq UltraScale+ MPSoC carrier board design',
      'PS DDR4 and PL DDR4 dual-interface routing on the same board',
      'Power sequencing design per Xilinx power-on requirements',
      'PCIe Gen2 and Gen3 endpoint and root complex configurations',
      'QSPI boot flash, SD card, and JTAG debug interface design',
    ],
    relatedServiceSlugs:  ['high-speed-fpga-design', 'embedded-firmware'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'fpga-firmware-development',
    name:     'FPGA Firmware Development',
    category: 'FPGA',
    pageTitle: 'FPGA Firmware Development Services',
    metaDescription:
      'FPGA RTL design in VHDL and Verilog for Xilinx and Intel platforms. IP core development, simulation, synthesis, and implementation for Zynq, Cyclone, and Arria.',
    heroTagline: 'RTL design, simulation, and implementation on Xilinx and Intel FPGAs.',
    description:
      'Sunkey\'s FPGA firmware engineers develop RTL in VHDL and Verilog for Xilinx and Intel platforms — from IP core development and integration through to synthesis, implementation, and hardware bring-up. We work on custom logic design for signal processing, hardware accelerators, interface bridges, and real-time control applications.',
    capabilities: [
      'RTL design in VHDL and Verilog for Xilinx Vivado and Intel Quartus',
      'IP core development — AXI4-Lite/Stream interfaces, memory controllers, protocol bridges',
      'Functional simulation using ModelSim, Questa, and Vivado simulator',
      'Synthesis, implementation, and timing closure for timing-critical designs',
      'Embedded ARM processor integration (Zynq PS) with custom PL peripherals',
      'High-speed serial transceiver configuration — PCIe, Aurora, JESD204B',
    ],
    relatedServiceSlugs:  ['embedded-firmware', 'high-speed-fpga-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },

  /* ── Wireless & IoT ───────────────────────────────────── */
  {
    slug:     'zigbee-hardware-design',
    name:     'ZigBee Hardware Design',
    category: 'Wireless & IoT',
    pageTitle: 'ZigBee Hardware Design Services',
    metaDescription:
      'ZigBee and Thread hardware design services — coordinator and end-device boards, antenna design, mesh network RF layout, and ZigBee 3.0 compliance.',
    heroTagline: 'ZigBee mesh hardware from coordinator to end node.',
    description:
      'ZigBee mesh networking hardware requires careful antenna design, RF PCB layout, and firmware integration to achieve the range and reliability that industrial and building automation applications require. Sunkey designs ZigBee 3.0 coordinator, router, and end-device hardware using Silicon Labs EFR32 and NXP JN series modules, with trace antenna and chip antenna configurations.',
    capabilities: [
      'Silicon Labs EFR32MG series module and chip-level ZigBee hardware design',
      'NXP JN5189 and JN5189T module designs for ZigBee 3.0',
      'Trace antenna, chip antenna, and external antenna PCB layout',
      'RF PCB layout with controlled impedance 50Ω feed lines',
      'ZigBee 3.0 commissioning and touchlink design',
      'Multi-protocol designs — ZigBee + BLE coexistence on a single board',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['iot-smart-devices', 'industrial-automation'],
  },
  {
    slug:     'ble5-pcb-design',
    name:     'BLE 5.0 PCB Design',
    category: 'Wireless & IoT',
    pageTitle: 'BLE 5.0 Hardware & PCB Design Services',
    metaDescription:
      'BLE 5.0 hardware design using Nordic nRF52 and nRF53 series. Antenna design, RF layout, DFU over-the-air updates, and FCC/CE pre-certification.',
    heroTagline: 'BLE 5.0 hardware with validated antenna performance.',
    description:
      'Bluetooth Low Energy 5.0 hardware design goes well beyond placing a module on a board — antenna selection and placement, RF layout, co-existence filtering when other radios are present, and firmware architecture for connection management and DFU all determine whether a BLE product works reliably in the real world. Sunkey designs BLE 5.0 hardware on Nordic nRF52840, nRF5340, and nRF52832 platforms.',
    capabilities: [
      'Nordic nRF52840, nRF5340, and nRF52832 PCB design — module and chip-level',
      'Chip antenna, PCB trace antenna, and u.FL external antenna configurations',
      '50Ω RF feed line routing with impedance-matched transitions',
      'BLE co-existence design — BLE + WiFi + ZigBee on a single board',
      'DFU (Device Firmware Update) over BLE architecture and implementation',
      'FCC Part 15 and CE RED pre-compliance test preparation',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['iot-smart-devices', 'agricultural-technology'],
  },
  {
    slug:     'lora-hardware-design',
    name:     'LoRa Hardware Design',
    category: 'Wireless & IoT',
    pageTitle: 'LoRa & LoRaWAN Hardware Design Services',
    metaDescription:
      'LoRa and LoRaWAN hardware design for LPWAN sensor nodes and gateways. Semtech SX1276/SX1262, antenna design, and sub-GHz RF PCB layout.',
    heroTagline: 'LoRa sensor nodes and gateways for wide-area IoT deployments.',
    description:
      'LoRa\'s combination of long range, low power, and sub-GHz operation makes it the right choice for wide-area IoT deployments where cellular infrastructure is unavailable or too costly. Sunkey designs LoRa sensor nodes, concentrators, and LoRaWAN gateways using Semtech SX1276 and SX1262 chipsets, with RF PCB layout optimized for the sub-GHz bands used in the US and Europe.',
    capabilities: [
      'Semtech SX1276 (LoRa) and SX1262 (LoRa 2.0) reference design and custom layout',
      'LoRaWAN concentrator design using SX1301 and SX1302 multi-channel chipsets',
      'Sub-GHz antenna design — 868 MHz (EU) and 915 MHz (US) optimized',
      'Ultra-low-power node design for multi-year battery life on primary cells',
      'LoRaWAN Class A, B, and C device implementation',
      'Outdoor enclosure design with IP67 rating for field-deployed nodes',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['agricultural-technology', 'industrial-automation'],
  },
  {
    slug:     'nb-iot-hardware-development',
    name:     'NB-IoT Hardware Development',
    category: 'Wireless & IoT',
    pageTitle: 'NB-IoT Hardware Development Services',
    metaDescription:
      'NB-IoT (Narrowband IoT) hardware design using Quectel BC660K, Nordic nRF9160, and u-blox SARA-R410M. Low-power cellular IoT for remote monitoring.',
    heroTagline: 'NB-IoT hardware for remote IoT where LoRa won\'t reach.',
    description:
      'NB-IoT provides cellular IoT connectivity in areas where LoRa gateways don\'t exist and WiFi infrastructure is impractical — remote industrial monitoring, utility metering, and agricultural sensing. Sunkey designs NB-IoT hardware using Quectel BC660K, Nordic nRF9160, and u-blox SARA-R410M modules, with power optimization for multi-year battery operation.',
    capabilities: [
      'Quectel BC660K and EC21-NB1 NB-IoT module hardware design',
      'Nordic nRF9160 SiP cellular IoT hardware design',
      'u-blox SARA-R410M and SARA-R412M module carrier board design',
      'PSM and eDRX sleep mode configuration for low-power operation',
      'SIM card and eSIM interface design',
      'Antenna design for LTE-B1, B3, B8, and B20 NB-IoT bands',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['industrial-automation', 'agricultural-technology'],
  },
  {
    slug:     'cat-m1-hardware-design',
    name:     'CAT-M1 Hardware Design',
    category: 'Wireless & IoT',
    pageTitle: 'CAT-M1 / LTE-M Hardware Design Services',
    metaDescription:
      'CAT-M1 (LTE-M) cellular IoT hardware design using Quectel BG95 and BG77. Higher data rate cellular connectivity for asset tracking and industrial IoT.',
    heroTagline: 'LTE-M hardware for IoT applications that need more than NB-IoT.',
    description:
      'LTE-M (CAT-M1) provides higher data rates than NB-IoT while maintaining low power consumption — the right choice for asset tracking, voice, and OTA-heavy IoT applications. Sunkey has designed LTE-M hardware using Quectel BG95 and BG77 modules, with proven field deployments in industrial monitoring applications.',
    capabilities: [
      'Quectel BG95 and BG77 LTE-M/NB-IoT module hardware design',
      'GPS/GNSS co-integration with LTE-M for asset tracking applications',
      'Fallback to NB-IoT on module support where LTE-M coverage is unavailable',
      'GNSS and LTE antenna design for combined module operation',
      'PSM and eDRX power optimization for battery-powered deployments',
      'OTA firmware update architecture over LTE-M MQTT/FOTA',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['industrial-automation', 'agricultural-technology'],
  },
  {
    slug:     'rf-pcb-design',
    name:     'RF PCB Design',
    category: 'Wireless & IoT',
    pageTitle: 'RF PCB Design Services',
    metaDescription:
      'RF and microwave PCB design services — trace antenna, balun design, RF front-end layout, controlled impedance, and pre-compliance test preparation.',
    heroTagline: 'RF PCB layout where every ohm matters.',
    description:
      'RF PCB design mistakes show up as poor range, failed compliance tests, and radiated emissions violations. Sunkey\'s RF-experienced PCB designers handle antenna design, RF front-end layout, controlled impedance 50Ω traces, and balun component placement for wireless products operating from sub-GHz to 6 GHz.',
    capabilities: [
      'Trace antenna design for 433 MHz, 868/915 MHz, 2.4 GHz, and 5 GHz bands',
      '50Ω controlled impedance RF trace routing and impedance matching',
      'Balun and matching network component placement for differential-to-single-ended conversion',
      'RF front-end layout — LNA, PA, switch, and filter placement',
      'Ground plane management — RF ground isolation and via stitching',
      'FCC and CE pre-compliance test support and layout iteration',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'pcb-design'],
    relatedIndustrySlugs: ['iot-smart-devices', 'drone-uav'],
  },

  /* ── Firmware & Embedded ──────────────────────────────── */
  {
    slug:     'freertos-development',
    name:     'FreeRTOS Development',
    category: 'Firmware & Embedded',
    pageTitle: 'FreeRTOS Firmware Development Services',
    metaDescription:
      'FreeRTOS-based embedded firmware development — task architecture, memory management, RTOS configuration, and middleware integration for ARM Cortex-M platforms.',
    heroTagline: 'FreeRTOS firmware that meets hard real-time requirements.',
    description:
      'FreeRTOS is the most widely deployed RTOS on ARM Cortex-M microcontrollers — but a poorly architected FreeRTOS application has the same determinism problems as a bare-metal super-loop. Sunkey\'s firmware engineers design FreeRTOS task architectures, configure RTOS parameters for deterministic behavior, and integrate middleware stacks including TCP/IP, filesystem, and USB.',
    capabilities: [
      'FreeRTOS task architecture design — priority assignment, stack sizing, and preemption analysis',
      'Memory management configuration — heap allocation strategy and fragmentation avoidance',
      'Inter-task communication — queues, semaphores, event groups, and stream buffers',
      'FreeRTOS+TCP integration for networked embedded applications',
      'FreeRTOS+FAT and LittleFS filesystem integration',
      'Worst-case execution time (WCET) analysis and deadline verification',
    ],
    relatedServiceSlugs:  ['embedded-firmware', 'pcb-design'],
    relatedIndustrySlugs: ['industrial-automation', 'iot-smart-devices'],
  },
  {
    slug:     'ota-firmware-update',
    name:     'OTA Firmware Updates',
    category: 'Firmware & Embedded',
    pageTitle: 'OTA Firmware Update Design & Development',
    metaDescription:
      'Over-the-air firmware update design for embedded systems — dual-bank flash, rollback protection, cryptographic signing, and OTA transport over BLE, WiFi, or cellular.',
    heroTagline: 'OTA firmware updates with rollback protection and cryptographic signing.',
    description:
      'OTA firmware updates are non-optional for any connected product that will be deployed in the field — but a badly implemented OTA system can brick devices at scale. Sunkey designs and implements OTA update systems with dual-bank flash layouts, cryptographic signature verification, and rollback protection, over BLE, WiFi, MQTT, and cellular transports.',
    capabilities: [
      'Dual-bank flash layout design for safe A/B firmware updates',
      'Bootloader development with cryptographic signature verification (ECDSA)',
      'Rollback protection — automatic fallback to last-known-good firmware on boot failure',
      'OTA transport implementation — BLE DFU, MQTT FOTA, and HTTPS delta update',
      'Firmware version management and manifest signing infrastructure',
      'Factory provisioning and initial firmware flashing workflow design',
    ],
    relatedServiceSlugs:  ['embedded-firmware', 'iot-wireless'],
    relatedIndustrySlugs: ['iot-smart-devices', 'industrial-automation'],
  },
  {
    slug:     'stm32-firmware-development',
    name:     'STM32 Firmware Development',
    category: 'Firmware & Embedded',
    pageTitle: 'STM32 Firmware Development Services',
    metaDescription:
      'STM32 firmware development using STM32CubeIDE and HAL — BSP bring-up, peripheral driver development, RTOS integration, and production firmware for STM32F, G, H, and L series.',
    heroTagline: 'STM32 firmware from BSP bring-up to production-ready binary.',
    description:
      'The STM32 family covers the widest range of ARM Cortex-M microcontrollers in the market — from the ultra-low-power STM32L0 through to the STM32H7 running at 480 MHz. Sunkey\'s firmware team develops BSP, peripheral drivers, RTOS integration, and application firmware for STM32F, G, H, L, and U series microcontrollers.',
    capabilities: [
      'BSP bring-up for custom STM32 hardware using STM32CubeMX and HAL',
      'Custom peripheral driver development beyond the standard HAL',
      'FreeRTOS and ThreadX RTOS integration on STM32 platforms',
      'Low-power optimization using STM32 Stop and Standby modes',
      'STM32 USB, Ethernet, CAN, SPI, I2C, and UART peripheral driver development',
      'STM32 secure boot configuration using PCROP and RDP protection levels',
    ],
    relatedServiceSlugs:  ['embedded-firmware', 'pcb-design'],
    relatedIndustrySlugs: ['industrial-automation', 'iot-smart-devices'],
  },
  {
    slug:     'can-bus-firmware',
    name:     'CAN Bus Firmware',
    category: 'Firmware & Embedded',
    pageTitle: 'CAN Bus Firmware Development Services',
    metaDescription:
      'CAN bus and CAN FD firmware development — CANopen, J1939, ISO 11898, and custom protocols on STM32, NXP, and TI microcontrollers.',
    heroTagline: 'CAN bus firmware that handles error frames, bus-off, and node management.',
    description:
      'CAN bus firmware done correctly means more than sending and receiving frames — it means implementing proper error handling, bus-off recovery, node guarding, and protocol state machines. Sunkey develops CAN and CAN FD firmware for automotive (J1939), industrial (CANopen), and custom protocols on STM32, NXP i.MX RT, and TI microcontrollers.',
    capabilities: [
      'CAN 2.0A/B and CAN FD frame transmission and reception with hardware filtering',
      'CANopen Device Profile implementation — NMT, SDO, PDO, and heartbeat',
      'SAE J1939 PGN handling for agricultural and commercial vehicle applications',
      'CAN error handling — error passive, error active, and bus-off recovery state machines',
      'CAN DBC database integration for message decoding in test environments',
      'ISO 15765-2 (ISO-TP) transport protocol for CAN-based diagnostics',
    ],
    relatedServiceSlugs:  ['embedded-firmware', 'pcb-design'],
    relatedIndustrySlugs: ['automotive', 'agricultural-technology', 'industrial-automation'],
  },
  {
    slug:     'modbus-firmware-development',
    name:     'Modbus Firmware',
    category: 'Firmware & Embedded',
    pageTitle: 'Modbus RTU & TCP Firmware Development',
    metaDescription:
      'Modbus RTU and Modbus TCP firmware development for industrial embedded systems — master and slave implementations, register mapping, and RS-485 interface design.',
    heroTagline: 'Modbus RTU and TCP firmware for industrial systems.',
    description:
      'Modbus remains the most widely deployed industrial communication protocol. Sunkey develops Modbus RTU (RS-485) and Modbus TCP (Ethernet) firmware for both master and slave roles, covering register map design, coil and discrete input handling, and exception response management.',
    capabilities: [
      'Modbus RTU master and slave implementation on RS-485 half-duplex interfaces',
      'Modbus TCP server and client implementation on Ethernet and WiFi',
      'Register map design — holding registers, input registers, coils, and discrete inputs',
      'RS-485 transceiver direction control with proper guard timing',
      'Multi-slave bus arbitration and address management',
      'Modbus function code 43 (MEI) device identification implementation',
    ],
    relatedServiceSlugs:  ['embedded-firmware', 'pcb-design'],
    relatedIndustrySlugs: ['industrial-automation', 'semiconductor'],
  },

  /* ── Drone Electronics ────────────────────────────────── */
  {
    slug:     'esc-board-design',
    name:     'ESC Board Design',
    category: 'Drone Electronics',
    pageTitle: 'ESC Board Design for Drones & UAVs',
    metaDescription:
      'Electronic Speed Controller (ESC) board design for BLDC drone motors — GaN and SiC FET switching, current sensing, telemetry, and thermal management.',
    heroTagline: 'ESC board design for drone motors — from gate drive to telemetry.',
    description:
      'Electronic Speed Controller design for drone applications is a specialty — the combination of high switching frequencies, high current, tight weight budgets, and the requirement for position feedback accuracy makes ESC PCB design fundamentally different from general power electronics. Sunkey has designed ESC boards for quadrotor, hexarotor, and fixed-wing UAV applications across a range of motor sizes and operating voltages.',
    capabilities: [
      'BLDC ESC power stage design using GaN and SiC FETs for high efficiency',
      'Gate driver design with bootstrap charging and shoot-through protection',
      'Current sensing using shunt resistors and current transformers',
      'BEMF zero-crossing detection for sensorless commutation',
      'FOC (Field Oriented Control) hardware support with encoder and hall sensor interfaces',
      'Telemetry interface design — UART, CAN, and DSHOT protocol support',
    ],
    relatedServiceSlugs:  ['drone-uav-electronics', 'pcb-design'],
    relatedIndustrySlugs: ['drone-uav', 'agricultural-technology'],
  },
  {
    slug:     'gps-module-design',
    name:     'GPS Module Design',
    category: 'Drone Electronics',
    pageTitle: 'GPS & GNSS Module PCB Design Services',
    metaDescription:
      'GPS and GNSS module PCB design — u-blox M8N, M9N, and F9P multi-frequency receivers, BDS/GPS dual-frequency, RTK designs for precision positioning.',
    heroTagline: 'GNSS receiver boards for precision positioning in the field.',
    description:
      'GPS and GNSS positioning module design requires careful RF PCB layout, antenna selection, and anti-interference design — especially on drone platforms where switching power supplies and motor drives create substantial EMI. Sunkey has designed GPS and BDS/GPS dual-frequency receiver boards for agricultural UAV and industrial positioning applications.',
    capabilities: [
      'u-blox M8N, M9N (L1 single-frequency) module carrier board design',
      'u-blox F9P and F9R multi-frequency RTK receiver board design',
      'BDS/GPS dual-frequency positioning board design for agricultural applications',
      'GNSS antenna interface — active and passive antenna, antenna power supply, and LNA design',
      'GNSS RF layout with proper ground plane and EMI isolation from digital circuitry',
      'PPS (pulse-per-second) output design for precision timing applications',
    ],
    relatedServiceSlugs:  ['drone-uav-electronics', 'iot-wireless'],
    relatedIndustrySlugs: ['drone-uav', 'agricultural-technology'],
  },
  {
    slug:     'radar-dome-design',
    name:     'Radar Dome Design',
    category: 'Drone Electronics',
    pageTitle: 'Radar Altimeter & Dome Assembly Design',
    metaDescription:
      'Radar altimeter and dome assembly design for drones — millimeter-wave radar, antenna design, and mechanical integration for terrain-following applications.',
    heroTagline: 'Radar altimeter electronics for low-altitude UAV terrain following.',
    description:
      'Radar-based terrain sensing and altimetry is essential for low-altitude agricultural and inspection drones operating over varied terrain. Sunkey has designed radar dome assemblies for agricultural UAV systems, covering the millimeter-wave antenna PCB design, signal processing electronics, and mechanical dome integration.',
    capabilities: [
      'Millimeter-wave radar front-end board design for altitude sensing',
      'Patch antenna array PCB design for 24 GHz and 77 GHz radar bands',
      'Radar signal processing electronics — ADC, FPGA/DSP, and data output interface',
      'Mechanical radar dome integration — RF-transparent radome material selection',
      'Terrain-following control output — altitude data output to flight controller',
      'EMI shielding design to protect GPS and telemetry from radar interference',
    ],
    relatedServiceSlugs:  ['drone-uav-electronics', 'high-speed-fpga-design'],
    relatedIndustrySlugs: ['drone-uav', 'agricultural-technology'],
  },

  /* ── Manufacturing & Test ─────────────────────────────── */
  {
    slug:     'ate-development',
    name:     'ATE Development',
    category: 'Manufacturing & Test',
    pageTitle: 'Automated Test Equipment (ATE) Development',
    metaDescription:
      'Automated test equipment design and development for electronics manufacturing — functional test fixtures, parametric measurement, and end-of-line pass/fail systems.',
    heroTagline: 'ATE that catches defects at the line, not in the field.',
    description:
      'Automated test equipment for electronics manufacturing requires a combination of electrical design, software development, and mechanical engineering to work reliably on a production line. Sunkey designs and builds ATE for functional test, parametric measurement, and end-of-line pass/fail systems, with test software development included as part of the engagement.',
    capabilities: [
      'Functional test fixture design — pogo-pin bed-of-nails, flying probe alternatives',
      'Parametric measurement systems — voltage, current, frequency, and timing',
      'Pass/fail decision logic with configurable tolerance bands',
      'Test data logging and traceability record generation',
      'Python and LabVIEW-based test software development',
      'Production line integration — barcode scanning, MES connectivity, and test result export',
    ],
    relatedServiceSlugs:  ['contract-engineering', 'pcba-manufacturing'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'pcb-prototyping-service',
    name:     'PCB Prototyping Service',
    category: 'Manufacturing & Test',
    pageTitle: 'PCB Prototyping Service — 2–3 Week Turnaround',
    metaDescription:
      'PCB prototype assembly service with 2-day costing and 2–3 week delivery. SMT and through-hole assembly, AOI, and functional test included.',
    heroTagline: 'Prototype PCBs assembled and tested in 2–3 weeks.',
    description:
      'Sunkey provides PCB prototype assembly for hardware teams who are moving fast and need working boards quickly. We provide a detailed cost breakdown within 2 business days and deliver assembled, tested prototype boards in 2 to 3 weeks from design sign-off — with DFM review, component sourcing, AOI, and functional test included.',
    capabilities: [
      'Prototype costing within 2 business days of receiving Gerbers and BoM',
      'Component sourcing from Digi-Key, Mouser, Arrow, and LCSC',
      'SMT and through-hole assembly for prototype quantities',
      'DFM review before fabrication is ordered',
      'AOI and visual inspection on all assemblies',
      'Functional test — power-on, firmware load, and interface verification',
    ],
    relatedServiceSlugs:  ['rapid-prototyping', 'pcba-manufacturing'],
    relatedIndustrySlugs: ['semiconductor', 'drone-uav', 'iot-smart-devices'],
  },

  /* ── Module-Specific ──────────────────────────────────── */
  {
    slug:     'quectel-m66-hardware-design',
    name:     'Quectel M66 Hardware Design',
    category: 'Module-Specific',
    pageTitle: 'Quectel M66 GSM Module Hardware Design',
    metaDescription:
      'Hardware design for Quectel M66 GSM/GPRS module — minimal BOM data logger designs, antenna interface, SIM circuit, and AT command firmware integration.',
    heroTagline: 'Quectel M66 hardware proven in field-deployed IoT applications.',
    description:
      'The Quectel M66 quad-band GSM/GPRS module is a proven platform for low-cost cellular IoT data loggers and remote monitoring devices. Sunkey has designed M66-based hardware for industrial monitoring customers, delivering CE-certified products that have been in field deployment in European industrial environments.',
    capabilities: [
      'Quectel M66 carrier board design with minimal BOM for cost-sensitive applications',
      'SIM card and eSIM interface design with ESD protection',
      'GSM antenna design and RF trace routing to M66 antenna port',
      'Power supply design for M66 VBAT with peak current capability during transmission bursts',
      'USB UART, UART, and SPI interface design for host MCU connection',
      'AT command firmware integration and GPRS TCP/IP stack usage',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['industrial-automation', 'iot-smart-devices'],
  },
  {
    slug:     'quectel-bg95-design',
    name:     'Quectel BG95 Hardware Design',
    category: 'Module-Specific',
    pageTitle: 'Quectel BG95 LTE-M / NB-IoT Module Design',
    metaDescription:
      'Hardware design for Quectel BG95-M2 and BG95-M3 LTE-M/NB-IoT modules with integrated GNSS. Multi-mode cellular IoT hardware for asset tracking and monitoring.',
    heroTagline: 'BG95 LTE-M and NB-IoT hardware with integrated GNSS.',
    description:
      'The Quectel BG95 series combines LTE-M, NB-IoT, EGPRS, and integrated GNSS in a single module — eliminating the need for a separate GPS receiver in asset tracking and remote monitoring applications. Sunkey designs BG95-based hardware with optimized antenna design for both cellular and GNSS operation.',
    capabilities: [
      'BG95-M2 (LTE-M + NB-IoT + EGPRS) carrier board design',
      'BG95-M3 (LTE-M + NB-IoT + GPS/BDS) multi-mode design',
      'Dual-antenna design — LTE and GNSS antenna separation and isolation',
      'PSM and eDRX optimization for battery-powered asset trackers',
      'QuecOpen embedded application development on BG95',
      'LTE band configuration for US (B2, B4, B12) and EU (B1, B3, B8, B20) deployments',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['iot-smart-devices', 'agricultural-technology'],
  },
  {
    slug:     'nordic-nrf52-design',
    name:     'Nordic nRF52 Hardware Design',
    category: 'Module-Specific',
    pageTitle: 'Nordic nRF52 & nRF53 Hardware Design Services',
    metaDescription:
      'nRF52840, nRF5340, and nRF52832 hardware design — BLE 5.x, Thread, Zigbee, and proprietary 2.4 GHz. nRF Connect SDK and Zephyr RTOS firmware integration.',
    heroTagline: 'Nordic nRF52 and nRF53 hardware with production-ready RF performance.',
    description:
      'The Nordic nRF52 and nRF53 series are the most widely used BLE SoCs in commercial IoT products. Sunkey designs hardware for nRF52840 (BLE 5 + Thread + Zigbee), nRF5340 (dual-core + BLE 5.4), and nRF52832, with nRF Connect SDK and Zephyr RTOS firmware integration.',
    capabilities: [
      'nRF52840, nRF5340, and nRF52832 chip-level PCB design',
      'DECT NR+ and 2.4 GHz proprietary RF PCB layout',
      'Inverted-F, meander, and chip antenna implementations',
      'DCDC converter configuration for nRF52 power optimization',
      'nRF Connect SDK and Zephyr RTOS peripheral driver development',
      'BLE DFU bootloader and production programming workflow',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['iot-smart-devices', 'industrial-automation'],
  },

  /* ── Design Services ──────────────────────────────────── */
  {
    slug:     'altium-designer-services',
    name:     'Altium Designer PCB Design',
    category: 'Design Tools',
    pageTitle: 'Altium Designer PCB Design Services',
    metaDescription:
      'PCB design services using Altium Designer — schematic capture, layout, DRC, and Gerber output. Native Altium files delivered with full source.',
    heroTagline: 'Altium Designer PCB design with native source files delivered.',
    description:
      'Sunkey\'s primary PCB design tool is Altium Designer. We deliver native Altium project files including schematic, layout, component libraries, and output jobs, so your team can open and modify the design directly without any file conversion or data loss.',
    capabilities: [
      'Schematic capture in Altium Designer with component library management',
      'Multi-sheet hierarchical schematics for complex board designs',
      'PCB layout from import to Gerber output in Altium Designer',
      'DRC run against manufacturer design rules with documented exception handling',
      'Native Altium project files delivered — .PrjPcb, .SchDoc, .PcbDoc, .IntLib',
      'Altium ActiveBOM and output job files for fabrication and assembly',
    ],
    relatedServiceSlugs:  ['pcb-design', 'high-speed-fpga-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'cadence-allegro-pcb-design',
    name:     'Cadence Allegro PCB Design',
    category: 'Design Tools',
    pageTitle: 'Cadence Allegro PCB Design Services',
    metaDescription:
      'PCB design services using Cadence Allegro and OrCAD — schematic in OrCAD Capture, layout in Allegro PCB Designer, native .brd files delivered.',
    heroTagline: 'Cadence Allegro PCB design for teams already on the Cadence ecosystem.',
    description:
      'For teams whose design flow is built around Cadence tools, Sunkey provides PCB design using OrCAD Capture for schematic and Allegro PCB Designer for layout. We deliver native Cadence files so your engineering team can continue working in the same environment.',
    capabilities: [
      'Schematic capture in Cadence OrCAD Capture CIS with component attribute management',
      'PCB layout in Cadence Allegro PCB Designer — standard and high-speed design',
      'Constraint Manager setup for high-speed net classes and length matching',
      'DRC and physical check against Allegro constraint sets',
      'Native .brd and .dsn files delivered alongside Gerber output',
      'Symbol and footprint library creation for custom components',
    ],
    relatedServiceSlugs:  ['pcb-design', 'high-speed-fpga-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'kicad-pcb-design',
    name:     'KiCad PCB Design',
    category: 'Design Tools',
    pageTitle: 'KiCad PCB Design Services',
    metaDescription:
      'KiCad 7 and KiCad 8 PCB design services — schematic, layout, DRC, and Gerber output. Open-source EDA with native KiCad project files delivered.',
    heroTagline: 'KiCad PCB design for open-source hardware projects.',
    description:
      'KiCad is the right choice for open-source hardware projects, cost-sensitive designs, and teams who want to avoid EDA license costs. Sunkey designs PCBs in KiCad 7 and KiCad 8, delivering native project files alongside Gerber output.',
    capabilities: [
      'Schematic capture in KiCad Eeschema with symbol library management',
      'PCB layout in KiCad PCB Editor with interactive router',
      'KiCad footprint and symbol creation for custom and non-standard components',
      'Design rule check (DRC) against manufacturer and project-specific rules',
      'KiCad project files (.kicad_sch, .kicad_pcb, .kicad_pro) delivered',
      'Fabrication output — Gerber, drill, BoM, and position files',
    ],
    relatedServiceSlugs:  ['pcb-design', 'rapid-prototyping'],
    relatedIndustrySlugs: ['iot-smart-devices', 'drone-uav'],
  },

  /* ── Remaining entries ────────────────────────────────── */
  {
    slug:     'mixed-signal-pcb-design',
    name:     'Mixed-Signal PCB Design',
    category: 'High-Speed Design',
    pageTitle: 'Mixed-Signal PCB Design Services',
    metaDescription:
      'Mixed-signal PCB design — analog and digital partition management, ADC/DAC layout, ground plane splitting strategy, and noise isolation for precision measurement boards.',
    heroTagline: 'Analog and digital on one board — done without coupling.',
    description:
      'Mixed-signal PCB design mistakes — shared ground planes between analog and digital sections, ADC input routing near switching regulators, and improper decoupling — show up as noise floors that make precision measurement impossible. Sunkey designs mixed-signal boards with proper partitioning, star grounding, and analog-digital boundary management.',
    capabilities: [
      'Analog-digital partition design — physical separation and return path management',
      'ADC and DAC input routing — shielding, guard traces, and short trace length',
      'Star grounding topology for multi-supply precision analog boards',
      'Switching regulator placement and output filter design to minimize analog noise',
      'Precision reference and instrumentation amplifier layout',
      'EMI shielding design for sensitive analog front-end circuits',
    ],
    relatedServiceSlugs:  ['pcb-design', 'high-speed-fpga-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'battery-management-system-design',
    name:     'Battery Management System Design',
    category: 'Firmware & Embedded',
    pageTitle: 'Battery Management System (BMS) PCB Design',
    metaDescription:
      'Li-ion and LiPo battery management system PCB design — cell balancing, state of charge estimation, protection circuits, and fuel gauge integration.',
    heroTagline: 'BMS hardware design for reliable, safe battery-powered products.',
    description:
      'Battery management system design for Li-ion and LiPo cells must handle cell balancing, protection against overcharge and over-discharge, state of charge estimation, and communication with the host system. Sunkey designs BMS hardware for drone, IoT, and industrial applications with proven chemistry handling.',
    capabilities: [
      'Li-ion and LiPo cell protection IC selection and PCB design',
      'Passive and active cell balancing circuit design for multi-cell packs',
      'Fuel gauge IC integration — TI BQ40Z80, Maxim MAX17205',
      'State of charge (SoC) and state of health (SoH) estimation firmware',
      'SMBus and I2C BMS communication interface design',
      'Thermal management design — thermistor placement and over-temperature protection',
    ],
    relatedServiceSlugs:  ['pcb-design', 'embedded-firmware'],
    relatedIndustrySlugs: ['drone-uav', 'iot-smart-devices'],
  },
  {
    slug:     'functional-test-development',
    name:     'Functional Test Development',
    category: 'Manufacturing & Test',
    pageTitle: 'Electronics Functional Test Development',
    metaDescription:
      'End-of-line functional test development for PCBAs — test fixture design, test software in Python or LabVIEW, pass/fail criteria, and production data logging.',
    heroTagline: 'Functional test that gives confidence before shipment.',
    description:
      'End-of-line functional test verifies that assembled boards work before they leave the production line. Sunkey develops functional test systems — hardware fixtures, test software, pass/fail criteria, and production data logging — for PCBA lines shipping low to mid volume.',
    capabilities: [
      'Functional test specification and test plan development',
      'Pogo-pin test fixture design for production line use',
      'Python-based test software with automated measurement and pass/fail reporting',
      'Production test data logging to CSV, database, or MES integration',
      'Boundary scan (JTAG) test coverage for complex digital boards',
      'First Article Inspection (FAI) procedure development',
    ],
    relatedServiceSlugs:  ['pcba-manufacturing', 'contract-engineering'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'power-electronics-pcb',
    name:     'Power Electronics PCB Design',
    category: 'High-Speed Design',
    pageTitle: 'Power Electronics PCB Design Services',
    metaDescription:
      'High-current power electronics PCB design — DC-DC converters, motor drive, GaN and SiC FET layouts, thermal management, and copper pour optimization.',
    heroTagline: 'High-current power electronics — thermal management from the first layer.',
    description:
      'Power electronics PCB design requires thermal management, high-current trace sizing, GaN and SiC FET gate drive layout, and switching node minimization — all of which interact with each other. Sunkey designs power boards for DC-DC converters, motor drives, and power distribution applications with thermal simulation as a standard design step.',
    capabilities: [
      'High-current trace sizing and copper pour design for power rails',
      'GaN and SiC FET switching node minimization for low EMI',
      'Gate driver PCB layout — bootstrap circuit and isolated gate driver design',
      'Thermal management — exposed pad, heatsink mounting, and copper fill for thermal conductivity',
      'DC bus capacitor placement and decoupling network design',
      'PCB-level thermal simulation using Saturn PCB Toolkit',
    ],
    relatedServiceSlugs:  ['pcb-design', 'drone-uav-electronics'],
    relatedIndustrySlugs: ['industrial-automation', 'drone-uav', 'automotive'],
  },
  {
    slug:     'hardware-validation-services',
    name:     'Hardware Validation Services',
    category: 'Manufacturing & Test',
    pageTitle: 'Hardware Validation & Bring-Up Services',
    metaDescription:
      'Hardware validation and board bring-up services — first power-on, peripheral verification, signal integrity measurement, and debug for new PCB designs.',
    heroTagline: 'Hardware validation from first power-on to functional sign-off.',
    description:
      'New PCB bring-up is one of the highest-risk phases in hardware development. Sunkey provides hardware validation services — first power-on procedure, peripheral bring-up, signal integrity measurement, and debug — for boards designed by Sunkey or supplied by the client.',
    capabilities: [
      'First power-on procedure — voltage sequencing, current monitoring, and thermal check',
      'Peripheral bring-up — UART, SPI, I2C, USB, Ethernet, and CAN interface verification',
      'Signal integrity measurement — eye diagram, impedance, and timing margin',
      'Oscilloscope and logic analyzer debug for digital interface problems',
      'Power supply noise measurement and decoupling effectiveness verification',
      'Hardware validation report with pass/fail results and defect root cause',
    ],
    relatedServiceSlugs:  ['contract-engineering', 'pcb-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'wifi6-hardware-design',
    name:     'WiFi 6 Hardware Design',
    category: 'Wireless & IoT',
    pageTitle: 'WiFi 6 (802.11ax) Hardware Design Services',
    metaDescription:
      'WiFi 6 hardware design using Qualcomm, MediaTek, and Espressif chipsets. RF PCB layout for 2.4 GHz and 5 GHz, MU-MIMO antenna design, and WPA3 security.',
    heroTagline: 'WiFi 6 hardware for high-throughput IoT gateways and edge devices.',
    description:
      'WiFi 6 brings OFDMA and MU-MIMO to IoT gateways and edge compute devices, requiring careful antenna design for both 2.4 GHz and 5 GHz bands. Sunkey designs WiFi 6 hardware using Qualcomm, MediaTek, and Espressif platforms for gateway and edge compute applications.',
    capabilities: [
      'Espressif ESP32-C6 (WiFi 6 + BLE 5) hardware design for IoT applications',
      'MediaTek MT7921 and Qualcomm QCA6390 WiFi 6 module carrier board design',
      'Dual-band 2.4 GHz and 5 GHz antenna design with band-switching',
      'MU-MIMO antenna placement for spatial stream separation',
      'WPA3 security implementation in WiFi firmware stack',
      'WiFi 6 co-existence design with BLE and ZigBee on the same platform',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['iot-smart-devices', 'industrial-automation'],
  },
  {
    slug:     'z-wave-pcb-design',
    name:     'Z-Wave Hardware Design',
    category: 'Wireless & IoT',
    pageTitle: 'Z-Wave PCB Design & Hardware Development',
    metaDescription:
      'Z-Wave hardware design using Silicon Labs ZGM130S and EFR32ZG series. Sub-GHz mesh networking hardware for home automation and smart building applications.',
    heroTagline: 'Z-Wave hardware for home automation and smart building systems.',
    description:
      'Z-Wave\'s sub-GHz operation and mesh networking make it the preferred protocol for home automation products that require reliable range through walls. Sunkey designs Z-Wave hardware using Silicon Labs ZGM130S and EFR32ZG series modules and chips for home automation and smart building applications.',
    capabilities: [
      'Silicon Labs ZGM130S module and EFR32ZG14 chip-level PCB design',
      'Z-Wave 700 and 800 series hardware design with long-range sub-GHz RF layout',
      'Helical, monopole, and chip antenna design for Z-Wave 868/908/916 MHz bands',
      'Z-Wave Z-IP gateway and bridge hardware design',
      'Z-Wave SDK integration and Z-Wave Plus certification support',
      'Low-power Z-Wave FLiRS and always-listening node designs',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'embedded-firmware'],
    relatedIndustrySlugs: ['iot-smart-devices'],
  },
  {
    slug:     'intel-cyclone-board-design',
    name:     'Intel Cyclone FPGA Board Design',
    category: 'FPGA',
    pageTitle: 'Intel Cyclone 10 & Cyclone V FPGA Board Design',
    metaDescription:
      'Intel Cyclone 10 GX, Cyclone V, and Cyclone 10 LP FPGA carrier board design. PCIe, DDR3/DDR4, Gigabit Ethernet, and custom carrier board development.',
    heroTagline: 'Intel Cyclone FPGA carrier boards for cost-optimized applications.',
    description:
      'Intel Cyclone FPGA devices are widely used in cost-sensitive FPGA applications — motor control, industrial I/O, video processing, and communications. Sunkey designs carrier boards for Cyclone 10 GX, Cyclone V, and Cyclone 10 LP devices with PCIe, DDR3/DDR4, and Gigabit Ethernet interfaces.',
    capabilities: [
      'Cyclone 10 GX and Cyclone V SX/ST SoC carrier board design',
      'HPS (Hard Processor System) interface design for Cyclone V SoC',
      'PCIe Gen1/Gen2 endpoint design on Cyclone 10 GX transceivers',
      'DDR3 and DDR3L memory interface routing for Cyclone V and 10',
      'LVDS, LVTTL, and 3.3V CMOS I/O bank configuration',
      'Quartus Prime Pro and Standard integration with timing constraint setup',
    ],
    relatedServiceSlugs:  ['high-speed-fpga-design', 'embedded-firmware'],
    relatedIndustrySlugs: ['industrial-automation', 'semiconductor'],
  },
  {
    slug:     'contract-pcb-engineer',
    name:     'Contract PCB Engineer',
    category: 'Contract Resources',
    pageTitle: 'Contract PCB Design Engineer — Remote & Dedicated',
    metaDescription:
      'Dedicated contract PCB design engineers on monthly retainer or T&M. 5–20 years of experience in Altium, Cadence, and KiCad. Available within days.',
    heroTagline: 'A dedicated PCB engineer when you need one, on your terms.',
    description:
      'When your PCB design backlog is growing faster than your team can handle, a dedicated contract PCB engineer from Sunkey provides the bandwidth without the recruitment overhead. Our PCB engineers are available on monthly retainer or T&M with 5 to 20 years of hands-on board design experience.',
    capabilities: [
      'Dedicated PCB engineer assigned to your projects — not a shared pool',
      'Experience in Altium Designer, Cadence Allegro, OrCAD, and KiCad',
      'Background in high-speed design, RF layout, or mixed-signal as required',
      'Working in your tools, version control, and design review process',
      'Weekly progress reports and transparent time tracking',
      'NDA and IP assignment covered by standard engagement agreement',
    ],
    relatedServiceSlugs:  ['contract-engineering', 'pcb-design'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation'],
  },
  {
    slug:     'embedded-firmware-services',
    name:     'Contract Firmware Engineer',
    category: 'Contract Resources',
    pageTitle: 'Contract Embedded Firmware Engineer — Remote & Dedicated',
    metaDescription:
      'Dedicated contract embedded firmware engineers — ARM Cortex, RTOS, driver development, and OTA updates. Monthly retainer or T&M, available within days.',
    heroTagline: 'Embedded firmware engineering bandwidth, on demand.',
    description:
      'Embedded firmware takes longer than expected, and firmware engineers are hard to recruit. Sunkey provides dedicated contract firmware engineers with hands-on ARM Cortex, RTOS, and connectivity firmware experience, available on monthly retainer or T&M without a multi-month recruitment cycle.',
    capabilities: [
      'Dedicated firmware engineer assigned to your project — available for daily standups',
      'ARM Cortex-M and Cortex-A, RISC-V, and FPGA embedded platforms',
      'RTOS expertise — FreeRTOS, Zephyr, ThreadX, and bare-metal',
      'Connectivity firmware — BLE, WiFi, cellular, CAN, Modbus, and Ethernet',
      'IP assignment and confidentiality agreements as standard',
      'Deliverables in your version control system (Git, SVN, or your choice)',
    ],
    relatedServiceSlugs:  ['contract-engineering', 'embedded-firmware'],
    relatedIndustrySlugs: ['semiconductor', 'iot-smart-devices', 'industrial-automation'],
  },
  {
    slug:     'iot-hardware-development',
    name:     'IoT Hardware Development',
    category: 'Wireless & IoT',
    pageTitle: 'IoT Hardware Development Services',
    metaDescription:
      'Full IoT hardware development — from concept to CE/FCC-certified product. Sensor hardware, wireless connectivity, cloud integration, and OTA firmware.',
    heroTagline: 'IoT hardware from concept to certified, connected product.',
    description:
      'IoT hardware development spans mechanical concept, PCB design, wireless protocol selection, embedded firmware, cloud connectivity, and regulatory certification — a range that most single-discipline engineering teams cannot cover alone. Sunkey handles the full IoT hardware stack as a single engagement.',
    capabilities: [
      'IoT hardware architecture — sensor selection, wireless protocol, and power budget',
      'PCB design for IoT sensor nodes, gateways, and edge compute platforms',
      'Wireless firmware — BLE, ZigBee, LoRa, NB-IoT, and LTE-M',
      'Cloud connectivity — AWS IoT, Azure IoT Hub, and custom MQTT brokers',
      'OTA firmware update design and implementation',
      'FCC, CE, and carrier certification support',
    ],
    relatedServiceSlugs:  ['iot-wireless', 'pcb-design', 'embedded-firmware'],
    relatedIndustrySlugs: ['iot-smart-devices', 'agricultural-technology', 'industrial-automation'],
  },
  {
    slug:     'smt-assembly-pcba',
    name:     'SMT Assembly',
    category: 'Manufacturing & Test',
    pageTitle: 'SMT PCB Assembly Services',
    metaDescription:
      'Surface mount technology (SMT) PCB assembly for low-to-mid volume runs. BGA, QFN, 0201 components, AOI, X-ray inspection, and functional test included.',
    heroTagline: 'SMT assembly from NPI quantities to production runs.',
    description:
      'Sunkey provides SMT PCB assembly for hardware teams who need precise, well-tested assemblies from prototype through to production quantities. Our SMT lines handle fine-pitch BGAs, QFNs, and passive components down to 0201, with automated optical inspection on every board.',
    capabilities: [
      'SMT assembly for fine-pitch BGA, QFN, CSP, and 0201 passive components',
      'Solder paste printing with stencil aperture optimization for fine-pitch parts',
      'Reflow profile development for lead-free and leaded assemblies',
      'Automated Optical Inspection (AOI) on every assembled board',
      'X-ray inspection for BGA solder joint quality verification',
      'First Article Inspection (FAI) on new builds with photographic documentation',
    ],
    relatedServiceSlugs:  ['pcba-manufacturing', 'rapid-prototyping'],
    relatedIndustrySlugs: ['semiconductor', 'industrial-automation', 'iot-smart-devices'],
  },
]

/** Keyed by slug for O(1) lookup in the dynamic route */
export const TECHNOLOGY_MAP: Record<string, TechnologyData> = Object.fromEntries(
  TECHNOLOGIES.map(t => [t.slug, t])
)
