/**
 * Seed data for the Sunkey blog.
 * 6 launch articles targeting ICP search queries and positioning Sunkey
 * as a technically credible engineering partner.
 *
 * Content is stored in a simple paragraph-array format.
 * The toLexical() helper converts to Payload's Lexical editor state.
 *
 * Run via: POST /api/seed (development only, guarded by SEED_SECRET)
 */

/* ── Lexical format helper ──────────────────────────────── */

function p(text: string) {
  return {
    children: [{ detail: 0, format: 0, mode: 'normal', style: '', text, type: 'text', version: 1 }],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'paragraph',
    version: 1,
  }
}

function h(text: string, tag: 'h2' | 'h3' = 'h2') {
  return {
    children: [{ detail: 0, format: 1, mode: 'normal', style: '', text, type: 'text', version: 1 }],
    direction: 'ltr',
    format: '',
    indent: 0,
    tag,
    type: 'heading',
    version: 1,
  }
}

function toLexical(nodes: ReturnType<typeof p | typeof h>[]) {
  return {
    root: {
      children: nodes,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

/* ── Articles ───────────────────────────────────────────── */

export const SEED_ARTICLES = [

  /* 1 ── DDR4 PCB Layout */
  {
    title:       'DDR4 PCB Layout: Six Mistakes That Cause Signal Integrity Failures',
    slug:        'ddr4-pcb-layout-signal-integrity-mistakes',
    excerpt:     'DDR4 signal integrity failures are almost always preventable. These six layout mistakes are the most common causes of DDR4 bring-up problems.',
    category:    'pcb-design',
    author:      'Sunkey Engineering Team',
    publishedAt: '2025-07-01',
    content:     toLexical([
      p('DDR4 bring-up failures fall into two categories: boards that fail SI tests in the lab and boards that pass initially but fail intermittently in the field. Both are usually caused by the same set of PCB layout mistakes. Here are the six we see most often.'),
      h('1. Incorrect fly-by topology routing'),
      p('DDR4 uses fly-by topology for address, command, and control signals — a daisy-chain where the clock and control traces visit each DRAM in sequence, with termination at the far end. Designers who route these as star topologies from the controller cause reflections that corrupt the signal at every device on the bus. This is the single most common DDR4 mistake.'),
      h('2. Net length mismatch beyond JEDEC budget'),
      p('JEDEC DDR4 timing budgets are tight. The maximum allowable length mismatch between the DQS differential pair and the DQ bits in its associated byte lane is typically 25 mils. Exceeding this causes setup and hold violations at higher speeds. Every DDR4 design should have a length-matching report generated as part of the DRC before Gerbers are released.'),
      h('3. Reference plane breaks under differential pairs'),
      p('When a DDR4 trace crosses from one PCB layer to another, it needs a via. When a differential pair crosses a layer boundary, there must be a reference plane continuous beneath both members of the pair at the transition. A plane split, slot, or void beneath a DDR4 differential pair creates an impedance discontinuity that generates reflections and crosstalk.'),
      h('4. Insufficient decoupling at DRAM power pins'),
      p('DDR4 DRAM devices have multiple power supply inputs — VDD, VDDQ, VPP, and VREFCA — each of which needs dedicated decoupling capacitors placed as close as possible to the package. Designers who share decoupling between multiple DRAM devices, or who place decoupling capacitors more than a few millimeters from the relevant power pin, create a power delivery network that cannot respond fast enough to the transient current demands of DDR4 read and write cycles.'),
      h('5. Via stub resonance on thick boards'),
      p('When a DDR4 trace transitions from a top-layer routing layer to an inner signal layer on a 10 or 12-layer board, the portion of the via that extends below the signal layer forms a stub. Stubs resonate at frequencies that are inversely proportional to their length. For DDR4-3200 and above, stub resonances can fall within the signal bandwidth and cause significant signal degradation. Back-drilling or using blind and buried vias to eliminate stubs is necessary on thick boards at high DDR4 speeds.'),
      h('6. Crosstalk between DQS and adjacent DQ bits'),
      p('The DQS differential strobe is the most electromagnetically active signal in a DDR4 bus during write operations. Routing DQS in close proximity to DQ bits without adequate spacing creates inductive and capacitive crosstalk that is worst when DQS is switching and DQ bits are supposed to be stable. JEDEC recommends a minimum spacing of 3× the trace width between DQS and adjacent DQ traces.'),
      h('Simulation before fabrication'),
      p('Signal integrity problems found after board fabrication cost five to ten times more to fix than problems caught during layout. Running a post-layout SI simulation — eye diagram analysis at the DRAM input pins for each data lane — before releasing Gerbers catches all six of the problems above before they become a hardware respin. At Sunkey, SI simulation is a standard step in every DDR4 layout, not an optional extra.'),
    ]),
  },

  /* 2 ── LPWAN protocol selection */
  {
    title:       'NB-IoT vs LoRa vs CAT-M1: Choosing the Right LPWAN for Your IoT Hardware',
    slug:        'nb-iot-lora-cat-m1-lpwan-comparison',
    excerpt:     'The LPWAN protocol you choose determines your hardware cost, battery life, data rate, and coverage. Here is how to match each protocol to your application.',
    category:    'iot-wireless',
    author:      'Sunkey Engineering Team',
    publishedAt: '2025-07-08',
    content:     toLexical([
      p('Low Power Wide Area Networks — NB-IoT, LoRa, and CAT-M1 (LTE-M) — solve the same fundamental problem: connecting battery-powered devices to the internet over long distances. But they solve it in very different ways, and choosing the wrong protocol early in a hardware design is expensive to fix.'),
      h('LoRa and LoRaWAN'),
      p('LoRa uses a proprietary chirp spread spectrum modulation that trades data rate (0.3 to 27 kbps) for extraordinary link budget (up to 157 dB). It operates in unlicensed sub-GHz spectrum — 868 MHz in Europe, 915 MHz in the US — and does not require a cellular subscription. A single LoRaWAN gateway covers a radius of several kilometers in open areas.'),
      p('LoRa is the right choice when: your deployment area has LoRaWAN coverage or you can deploy your own gateways, your data payload is small (under 250 bytes per transmission), transmissions are infrequent (a few times per day), and battery life is paramount (multi-year on AA cells is achievable with careful firmware design).'),
      p('LoRa is the wrong choice when: you need reliable two-way communication, your payloads are large, you need guaranteed delivery within a specific time window, or you are deploying in areas where LoRaWAN gateways do not exist and you cannot deploy your own.'),
      h('NB-IoT'),
      p('NB-IoT operates in licensed cellular spectrum, uses existing cellular tower infrastructure, and is deployed by mobile network operators in most of Europe and Asia. It offers reliable indoor coverage (20 dB better than GSM), symmetric uplink and downlink, and guaranteed delivery. Data rates are low (up to 127 kbps downlink), and the PSM (Power Saving Mode) and eDRX features allow multi-year battery life on small lithium primary cells.'),
      p('NB-IoT is the right choice when: you need guaranteed delivery and network-managed reliability, your devices are deployed in urban or suburban environments with good cellular coverage, you need reliable indoor penetration through walls and into basements, and you need regulatory-grade network quality of service.'),
      p('NB-IoT is not available in the US on most networks. For US deployments, CAT-M1 is the preferred cellular IoT technology.'),
      h('CAT-M1 (LTE-M)'),
      p('CAT-M1 offers higher data rates than NB-IoT (up to 1 Mbps in some configurations), supports voice, and — critically for US deployments — is widely available on AT&T, T-Mobile, and Verizon. Modules like the Quectel BG95 support both CAT-M1 and NB-IoT with automatic fallback, which gives maximum coverage with a single hardware design.'),
      p('CAT-M1 is the right choice when: you need more bandwidth than NB-IoT provides, you are deploying in the US where NB-IoT coverage is limited, you need OTA firmware updates that are large enough to require more throughput, or you need to support voice (emergency alerts, for example).'),
      h('The hardware design implications'),
      p('Protocol choice has direct hardware consequences. LoRa modules are simpler to design — no SIM card, no cellular certification, lower RF power requirements — but you need to design for the sub-GHz antenna and handle gateway deployment. NB-IoT and CAT-M1 require a SIM circuit (or eSIM), cellular antenna design, peak current handling during LTE transmission bursts, and a SIM or carrier relationship. The total hardware BOM cost for a cellular design is typically 3 to 5 times higher than an equivalent LoRa design.'),
      p('The right protocol is determined by your coverage requirement, data needs, deployment geography, and battery life target — not by which module your team has used before.'),
    ]),
  },

  /* 3 ── FreeRTOS vs bare-metal */
  {
    title:       'FreeRTOS vs Bare-Metal: A Practical Guide for Embedded Firmware Engineers',
    slug:        'freertos-vs-bare-metal-embedded-firmware',
    excerpt:     'RTOS adds overhead and complexity. So does a badly structured super-loop. Here is how to decide which is right for your embedded application.',
    category:    'embedded-firmware',
    author:      'Sunkey Engineering Team',
    publishedAt: '2025-07-15',
    content:     toLexical([
      p('The question of whether to use an RTOS or bare-metal firmware comes up in almost every embedded project. The answer is not always RTOS, and it is definitely not always bare-metal. The right answer depends on your application requirements, hardware constraints, and the long-term maintainability of the firmware.'),
      h('What bare-metal super-loop actually means'),
      p('Bare-metal firmware without an RTOS runs as a single infinite loop — read inputs, update state, drive outputs, repeat. This is simple, deterministic, and uses minimal stack and code memory. It is the right choice for simple, single-purpose firmware where the loop runs fast enough to service all events within their deadlines.'),
      p('The problem is that super-loops become unmaintainable as application complexity grows. When you add a second peripheral that needs servicing, then a third, then a communication protocol, then a watchdog, the super-loop becomes a tangle of polling, flag-testing, and state machines that is nearly impossible to reason about. The firmware works until it suddenly does not, and finding out why requires understanding the entire loop in detail.'),
      h('What FreeRTOS actually costs you'),
      p('FreeRTOS is not magic — it is a scheduler, a set of synchronization primitives, and a memory allocator. The costs are real: FreeRTOS requires a context switch overhead (typically 10 to 20 CPU cycles plus stack push/pop), a stack allocation for each task (minimum 512 bytes, typically 1 to 4 KB), and a tick interrupt that fires at your configured tick rate (usually 1 kHz).'),
      p('On a modern 168 MHz Cortex-M4 with 256 KB of RAM, these costs are negligible. On a Cortex-M0+ running at 16 MHz with 8 KB of RAM, FreeRTOS may not fit at all. Know your hardware before committing to an RTOS.'),
      h('When to use bare-metal'),
      p('Bare-metal is appropriate when: your application has a single primary function with a small number of easily polled peripherals, your hardware has severe memory constraints (under 16 KB RAM), you have hard real-time requirements with sub-microsecond deadlines that cannot tolerate scheduler jitter, or your firmware will never grow significantly beyond its initial scope.'),
      h('When to use FreeRTOS'),
      p('FreeRTOS is appropriate when: your application has multiple independent functions that need to run concurrently, you need blocking waits (waiting for a UART byte, a timer expiry, or an I2C transaction) without stalling the rest of the system, you have multiple communication protocols running in parallel, or you want modular firmware where each feature is a task that can be developed and tested independently.'),
      h('The hidden cost of the wrong choice'),
      p('Teams that choose bare-metal for a complex application spend enormous engineering time managing timing conflicts, race conditions, and priority inversion manually — exactly the problems that FreeRTOS primitives (mutexes, semaphores, queues) solve. Teams that add FreeRTOS to a simple application on a tiny microcontroller spend time fighting the memory map.'),
      p('The decision should be made at the architecture stage, not retrofitted after the firmware is written. Retrofitting an RTOS into a bare-metal firmware that was not designed for concurrency is one of the most expensive firmware rework exercises that exists.'),
    ]),
  },

  /* 4 ── PCB DFM */
  {
    title:       'PCB DFM: Seven Issues That Add Weeks to Your Prototype Timeline',
    slug:        'pcb-dfm-issues-prototype-timeline',
    excerpt:     'DFM problems found at the fabrication stage add weeks, not days. These seven issues are the most common causes of prototype delays — and they are all preventable.',
    category:    'pcb-design',
    author:      'Sunkey Engineering Team',
    publishedAt: '2025-07-22',
    content:     toLexical([
      p('Design for Manufacturability (DFM) problems discovered after Gerbers are released to a fabricator or assembler are expensive in time and sometimes in money. Each problem requires a design revision, a re-release, and a restart of the fabrication queue. Here are the seven issues that most commonly delay hardware prototypes.'),
      h('1. Insufficient annular ring on vias'),
      p('The annular ring is the copper pad around a drilled via. When drill-to-copper tolerance is applied, the remaining ring must meet the fabricator\'s minimum requirement — typically 100 to 125 μm for standard fabrication. Designers who set annular rings too tight for the drill tolerance find that vias become opens after drilling. This is especially common when working with fine-pitch BGAs where via sizes are reduced to maximize routing density.'),
      h('2. Silkscreen text over pads'),
      p('Silkscreen ink over a copper pad prevents solder from wetting the pad correctly during reflow. Component reference designators and polarity marks that overlap with pad copper — including pads on the opposite side of the board that are not visible in the layout view being checked — cause assembly defects. DRC tools catch this, but only if the correct DRC profile is applied before Gerber output.'),
      h('3. Component courtyard overlap'),
      p('Courtyards define the keepout zone around a component body. When two component courtyards overlap, the assembler cannot place both components without one component interfering with the other. The DRC will flag this, but many designers suppress these warnings without investigating whether the actual components physically fit. They often do not.'),
      h('4. Insufficient clearance for hand soldering or rework'),
      p('Automated assembly handles fine-pitch components correctly. But prototype boards are often reworked by hand — replacing a component, adding a modification wire, resoldering a cold joint. Designs that pack components so tightly that a soldering iron cannot reach a pad without touching adjacent parts become a maintenance problem on day one.'),
      h('5. No test points on critical nets'),
      p('Debugging a PCB without test points requires probing IC leads and component pads directly — a practice that damages components and creates unreliable probe connections. Designing test points on power rails, communication buses, and debug signals before the board goes to fabrication is dramatically cheaper than adding them in a second spin.'),
      h('6. Missing or incorrect stack-up information for controlled impedance'),
      p('High-speed designs require controlled impedance traces. The impedance is a function of trace width, copper thickness, dielectric thickness, and dielectric constant — all of which depend on the PCB stack-up. If the stack-up is not specified in the fabrication notes, or if the trace widths were calculated for a different stack-up than the fabricator uses by default, the resulting board will have incorrect impedance. The fabricator will not warn you — they will just build what is specified.'),
      h('7. Components that are not available'),
      p('The fastest way to extend a prototype timeline by six to eight weeks is to design in a component that is on allocation or discontinued. Component availability should be checked at the point of schematic entry, not after layout is complete. At Sunkey, we run a supply check on every BoM before finalising a design, with identified alternates for any component with less than 90 days of stock at major distributors.'),
      h('The DFM review'),
      p('A DFM review before Gerbers are released catches all seven of these issues. It is a 30-minute process on a completed design — running a DRC against manufacturer rules, verifying the stack-up and impedance notes, checking component availability, and reviewing the assembly drawing. The review costs 30 minutes. The problems it prevents cost weeks.'),
    ]),
  },

  /* 5 ── Agricultural drone electronics */
  {
    title:       'Designing Electronics for Agricultural Drones: EMI, Weight, and Field Reliability',
    slug:        'agricultural-drone-electronics-design',
    excerpt:     'Agricultural drones have requirements that general electronics engineering experience does not prepare you for. This is what we learned across 30+ drone projects.',
    category:    'drone-uav',
    author:      'Sunkey Engineering Team',
    publishedAt: '2025-07-29',
    content:     toLexical([
      p('Agricultural drones impose constraints that are genuinely different from other electronics applications. The combination of high-current motor drives, sensitive GNSS positioning, precise spray control, and the requirement for reliable operation in dusty, wet, outdoor environments creates a set of engineering tradeoffs that general electronics experience does not immediately prepare you for.'),
      h('Weight is a design constraint, not a packaging preference'),
      p('Every gram of electronics adds to the drone\'s all-up weight, reducing payload capacity or flight endurance. A GPS module that is 5 grams heavier than an alternative with the same specification is not just a different packaging choice — it is a design decision with a direct impact on the product\'s commercial viability. Agricultural drone electronics teams budget weight by component, not by board, and substitute heavier components only when there is no functional alternative.'),
      p('The weight budget drives decisions about board material (FR4 is heavier than Rogers but adequate for most drone boards), connector selection (locking connectors are heavier but necessary for the vibration environment), and component quantity (fewer, more integrated components are almost always lighter than equivalent discrete designs).'),
      h('Motor drive EMI is your worst enemy'),
      p('BLDC motor drives switch high current at high frequency. The resulting electromagnetic interference is broadband and powerful. On a drone, the motor drives, the ESC boards, and the power cabling carrying motor current run very close to the GPS antenna, the telemetry radio, and the flight controller. Without deliberate EMI management, the motor drives corrupt GPS reception and interfere with the telemetry uplink.'),
      p('Managing motor drive EMI on a drone requires: routing motor current cabling as twisted pairs or as flat cables in a controlled geometry rather than as loose individual wires; using common-mode chokes on motor current outputs; shielding the GNSS antenna and receiver from the motor drives physically and electrically; and designing the power distribution unit to avoid sharing ground returns between the motor drive current and the GPS and radio power supplies.'),
      h('GPS and radar must coexist with high-power electronics'),
      p('Modern agricultural drones use multi-frequency GNSS positioning — GPS and BDS dual-frequency — for centimeter-level precision spray pattern control. The GPS receiver frontend is sensitive to interference at L1 (1575 MHz) and L2 (1227 MHz). Motor drive switching harmonics, crystal oscillator emissions, and conducted noise on the power supply can all appear at these frequencies if the PCB layout does not account for them.'),
      p('Radar altimeters for terrain following operate at 24 GHz and 77 GHz. The radar front end is susceptible to the same conducted and radiated noise sources. Physical separation and shielding of the radar board from the high-current power distribution circuitry is necessary — not optional.'),
      h('Field reliability is not the same as bench reliability'),
      p('Drone electronics that work reliably in the lab fail in the field for reasons that are predictable if you design for the field environment from the start. Agricultural fields generate humidity, dust, and agrochemical aerosols that damage electronics through corrosion and contamination. Vibration from motors and rotor wash causes solder joint fatigue and connector fretting. Temperature swings from cool morning flights to hot afternoon operation stress components and solder connections differently than laboratory bench testing.'),
      p('Designing for field reliability means: conformal coating on all boards exposed to humidity or agrochemicals, vibration-resistant connector locking mechanisms, thermal interface material on heat-generating components, and extended-temperature-range components where the operating temperature profile requires it. These are not afterthoughts — they are first-principles design choices.'),
    ]),
  },

  /* 6 ── How Sunkey delivers in 2–3 weeks */
  {
    title:       'How We Deliver Hardware Prototypes in 2–3 Weeks',
    slug:        'hardware-prototype-delivery-2-3-weeks',
    excerpt:     'A 2–3 week prototype turnaround is achievable on most designs. Here is the process that makes it reliable rather than aspirational.',
    category:    'manufacturing',
    author:      'Sunkey Engineering Team',
    publishedAt: '2025-08-05',
    content:     toLexical([
      p('The hardware industry has accepted long prototype turnaround times as a fact of life. Six to eight weeks from schematic to working prototype is common. We have built a process around delivering in two to three weeks — not as an occasional achievement, but as the standard output on most designs. Here is how it works.'),
      h('The 2-day costing commitment'),
      p('Before any prototype build begins, we provide a detailed cost breakdown within two business days of receiving the design files and requirement. This is not an estimate range — it is a line-item breakdown covering fabrication, component sourcing, assembly, and testing. The quote includes lead times, so the client knows before committing whether the 2–3 week target is achievable for their specific design.'),
      p('Getting to a detailed quote in two days requires having established relationships with fabricators and distributors, a process for rapid component availability checking, and a quoting template that captures all the necessary information the first time rather than requiring back-and-forth clarification.'),
      h('Parallel sourcing and fabrication'),
      p('The two biggest time consumers in prototype production are fabrication and component sourcing. On a standard build, these run sequentially — wait for the PCBs, then order the components. In our process, component sourcing begins the moment the BoM is confirmed, in parallel with PCB fabrication. By the time bare boards arrive, most components are already in-house or in transit.'),
      p('We maintain accounts with Digi-Key, Mouser, Arrow, and LCSC, which together cover the vast majority of components used in commercial hardware designs. For components with longer lead times, we have alternate component recommendations ready at the quote stage — so the client can make a substitution decision before fabrication begins rather than discovering the problem when a six-week component shows up on the BoM.'),
      h('DFM review before release'),
      p('A DFM problem discovered after fabrication is ordered adds one to two weeks to the timeline — the board must be revised, re-released, and the fabrication queue restarted. Running a DFM review before releasing Gerbers — checking annular rings, clearances, silkscreen, test point coverage, and stack-up notes — eliminates this delay. The review takes 30 minutes. The problems it prevents can cost weeks.'),
      h('Testing included, not optional'),
      p('Prototype hardware that ships without being tested does not save time — it transfers the debugging to the client\'s team and often results in a second build. Every Sunkey prototype build includes power-on verification, AOI, and a basic functional test confirming the board powers up, the firmware loads, and the primary interfaces respond. First-article inspection documentation is included in the shipment.'),
      p('This is the process. It is not aspirational — it is the standard output on the majority of our prototype builds. The designs where we cannot hit the 2–3 week target are the ones where component lead times are unavoidably long, where the design requires an expedited fabrication technology that has a longer lead time, or where the DFM review reveals problems that require a design revision. In those cases, we tell you at the quote stage, not after fabrication is underway.'),
    ]),
  },

]
