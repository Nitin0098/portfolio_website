/**
 * PORTFOLIO APPLICATION CORE SCRIPT
 * Manages view routing, scrollable card carousels, and dynamic page rendering.
 * Navigation bar & outer shell remain persistent.
 */

// Data Store for Projects and Concepts
const portfolioData = {
  projects: [
    {
      id: 'land-subsidence-predictor',
      name: 'Land Subsidence & Landslide Early Warning System',
      cardImage: 'images/project_land_subsidence_cover.jpeg',
      detail: {
        image: 'images/project_land_subsidence_cover.jpeg',
        name: 'Land Subsidence & Landslide Early Warning System',
        introduction: `This is a device that is meant to be installed in mining areas or landslide-prone zones. It detects early signatures of landslides and land subsidence using tilt, micro-vibrations, and location sensors.<br><br>This was a product me and my team were developing for the Ministry of Coal and Mines during the Smart India Hackathon (SIH) competition.`,
        moreText: `<p><strong>The Problem:</strong><br>In open-cast and underground coal mines, slope failure and ground subsidence can happen suddenly with catastrophic consequences for human lives and heavy machinery. Traditional surveying methods or satellite radar (InSAR) are periodic, costly, and cannot provide real-time, seconds-ahead warning on the ground when slope instability starts developing. We needed an autonomous, field-deployable IoT sensor node that can stay out in harsh conditions 24/7 and yell before the ground moves.</p>

<p><strong>Hardware Architecture:</strong><br>We designed a multi-sensor wireless telemetry node. At its core, the unit uses an ultra-sensitive geophone (SM-4) to pick up micro-vibrations in the ground and an IMU unit (MPU-6050 for our prototype, upgrading to high-precision industrial ISM330DHCX) to measure subtle angular tilt variations.</p>

<div style="margin: 2rem 0; text-align: center;">
  <div style="display: inline-block; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; width: 100%; max-width: 760px;">
    <img src="images/project_land_subsidence_circuit.svg" alt="ESP32 Sensor Node Circuit Diagram" style="width: 100%; height: auto; max-height: 420px; object-fit: contain; margin: 0 auto; display: block;">
    <p style="font-size: 0.88rem; color: #1e293b; margin-top: 0.75rem; font-weight: 500;">Figure: Circuit Schematic of the ESP32 Core, Sensor Interfacing &amp; LoRa Transceiver.</p>
  </div>
</div>

<p><strong>Off-Grid Power &amp; Long-Range LoRa Telemetry:</strong><br>The sensor node is powered by an ESP32 microcontroller with power management handled via a TP4056 BMS module and an 18650 Li-ion battery kept charged by a compact 10&times;10 cm solar panel. Since mining pits often have zero cellular coverage or WiFi, we used SX1278 LoRa modules operating at 433/466 MHz to transmit packet telemetry over several kilometers back to a base receiver station.</p>

<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; text-align: center;">
  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
    <img src="images/project_land_subsidence_receiver.jpeg" alt="Receiver End Hardware Unit" style="max-height: 280px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.88rem; color: var(--text-dim); margin-top: 0.75rem;">Figure: LoRa Base Receiver &amp; Alert Processing Unit.</p>
  </div>
  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
    <img src="images/project_land_subsidence_closeup.png" alt="Field Enclosure 3D Render" style="max-height: 280px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.88rem; color: var(--text-dim); margin-top: 0.75rem;">Figure: Weather-resistant Field Enclosure &amp; Ground Spike.</p>
  </div>
</div>

<h3 class="detail-subheading">Components List</h3>
<ul class="detail-list">
  <li><strong>Sensors:</strong> Geophone (SM-4) &amp; IMU unit (ISM330DHCX / MPU-6050 for prototype)</li>
  <li><strong>Processing:</strong> 2&times; Microcontrollers (ESP32 DevKit, NodeMCU ESP8266)</li>
  <li><strong>Wireless Telemetry:</strong> 2&times; LoRa Modules + Whip Antennas (SX1278, 433/466 MHz)</li>
  <li><strong>Power Source:</strong> 18650 3.7V Li-ion Battery with TP4056 BMS Protection Circuit</li>
  <li><strong>Solar Harvesting:</strong> 10&times;10 cm Solar Panel with DC-DC Boost Converter</li>
  <li><strong>Prototyping:</strong> Solderless breadboards, terminal blocks, and custom jumper harnesses</li>
</ul>

<p style="margin-top: 1.5rem; font-style: italic; color: var(--accent-cyan);">Note: Demo video will be uploaded on YouTube and linked here soon.</p>`,
        references: [
          { title: 'Smart India Hackathon (SIH) — Ministry of Coal & Mines Project Submission', url: '#' },
          { title: 'Subsidence Prediction Network Whitepaper & Field Telemetry Architecture', url: '#' }
        ]
      }
    },
    {
      id: 'smart-wifi-extension-board',
      name: 'Smart WiFi Power Extension Board',
      cardImage: 'images/project_smart_extension_cover.jpeg',
      detail: {
        image: 'images/project_smart_extension_cover.jpeg',
        name: 'Smart WiFi Power Extension Board',
        introduction: `A custom IoT-enabled smart power strip engineered to bring wireless control, automation, and individual socket switching to ordinary home appliances over local WiFi.`,
        moreText: `<p><strong>Why I Built This:</strong><br>Commercial smart plugs available in the market are either overpriced, bulky, or rely on shady cloud servers with terrible latency and privacy issues. I wanted an integrated multi-socket power extension board where every single outlet could be toggled independently via a local web interface or smartphone without relying on external cloud servers or an active internet connection.</p>

<p><strong>Hardware Architecture &amp; High-Voltage Safety:</strong><br>I took a standard multi-outlet extension chassis and gutted its internals to retrofit microcontroller control. The system uses an ESP microcontroller connected to an opto-isolated relay board to switch high-voltage 220V AC lines safely. The high-voltage AC traces were physically isolated from low-voltage DC logic with routed air gaps to prevent arcing and protect the microcontroller.</p>
<p>Power for the ESP microcontroller and relays is derived directly from the 220V AC mains using a compact step-down power supply module (Hi-Link HLK-PM01), eliminating the need for an external wall adapter.</p>

<div style="margin: 2rem 0; text-align: center;">
  <div style="display: inline-block; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; width: 100%; max-width: 760px;">
    <img src="images/project_smart_extension_internals.jpeg" alt="Relay and wiring internals closeup" style="width: 100%; height: auto; max-height: 420px; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.88rem; color: var(--text-dim); margin-top: 0.75rem;">Figure: Internal Relay Wiring, AC Mains Routing &amp; Controller Isolation.</p>
  </div>
</div>

<p><strong>Firmware &amp; Local Network Control:</strong><br>The microcontroller hosts an asynchronous web server directly on your local WiFi network, serving a clean, responsive mobile control UI with instant tactile feedback and state persistence across power outages.</p>

<h3 class="detail-subheading">Components List</h3>
<ul class="detail-list">
  <li><strong>Controller:</strong> ESP8266 / NodeMCU Wi-Fi Microcontroller</li>
  <li><strong>Switching:</strong> Multi-Channel Opto-Isolated 5V Relay Module (10A 250V AC)</li>
  <li><strong>Power Supply:</strong> Hi-Link HLK-PM01 AC-to-DC Step-Down Module (220V AC to 5V DC)</li>
  <li><strong>Mains Hardware:</strong> Heavy-duty Copper Bus Strips &amp; Multi-Socket 3-Pin Outlets</li>
  <li><strong>Safety &amp; Indicators:</strong> Status Indicator LEDs, Thermal Fuse &amp; Manual Override Tactile Buttons</li>
</ul>

<p style="margin-top: 1.5rem; font-style: italic; color: var(--accent-cyan);">Note: Demo video will be uploaded on YouTube and linked here soon.</p>`,
        references: [
          { title: 'Custom Firmware Repository & Embedded Web Server Code', url: '#' },
          { title: 'Mains Electrical Isolation Guidelines & Relay Circuit Schematic', url: '#' }
        ]
      }
    },
    {
      id: 'diy-microscope',
      name: 'DIY Smartphone Microscope',
      cardImage: 'images/project_microscope_cover.jpeg',
      detail: {
        image: 'images/project_microscope_cover.jpeg',
        name: 'DIY Smartphone Microscope',
        introduction: `As a hard tech enthusiast and electronics engineer, biology never stops fascinating me too. I have always wanted a microscope that I can use to see the microscopic world around us.<br><br>Finding the market options out of my budget I decided to do some 'jugaad' and made this. Of course its not as good as a real microscope but considering the components used it works surprisingly good.`,
        moreText: `<p>So this is a DIY microscope that I made with simple components. For the lens, I used plano-convex lenses extracted from cheap 50 Rupees laser pointers (I used two of them).</p>
<p>I made this by sticking those two lenses together (flat side of one lens is stuck on flat side of second lens to reduce optical error) and then I taped this lens on my smartphone camera as close as possible so I can view the image on smartphone and capture photos.</p>

<div style="margin: 2rem 0; text-align: center;">
  <div style="display: inline-block; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; width: 100%; max-width: 760px;">
    <img src="images/project_microscope_setup.jpeg" alt="DIY Smartphone Microscope Optical Assembly" style="width: 100%; height: auto; max-height: 420px; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.88rem; color: var(--text-dim); margin-top: 0.75rem;">Figure: Dual-Lens Assembly &amp; Optical Alignment over Smartphone Camera Sensor.</p>
  </div>
</div>

<h3 class="detail-subheading">Camera Settings (Expert Mode)</h3>
<p>Now this setup alone will provide a blurry image, we need to adjust some camera settings. First switch to expert mode then set the given settings:</p>
<ul class="detail-list">
  <li><strong>1. Focus:</strong> Increase the focus to maximum.</li>
  <li><strong>2. Shutter Speed:</strong> Set Exposure time / Shutter Speed to 1/90s or 1/125s.</li>
  <li><strong>3. Illumination:</strong> Turn on the flash.</li>
  <li><strong>4. Zoom:</strong> Increase zoom as much as possible.</li>
  <li><strong>5. ISO:</strong> ISO to 100.</li>
  <li><strong>6. Exposure Value:</strong> Exposure value to 0.00.</li>
  <li><strong>7. Enjoy:</strong> That's it. Enjoy lurking in the microscopic world!</li>
</ul>

<h3 class="detail-subheading">Microscopic Results Gallery</h3>
<p>Here are some of the results captured directly through this DIY optical setup:</p>

<div style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; text-align: center;">
  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
    <img src="images/project_microscope_cover.jpeg" alt="Onion epidermal cells" style="max-height: 240px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.6rem; font-weight: 500;">Onion Epidermal Cells</p>
  </div>
  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
    <img src="images/project_microscope_ant.jpeg" alt="Red ant microscopic head anatomy" style="max-height: 240px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.6rem; font-weight: 500;">Red Ant Head Anatomy</p>
  </div>
  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
    <img src="images/project_microscope_led.jpeg" alt="LED diode semiconductor die" style="max-height: 240px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.6rem; font-weight: 500;">LED Diode Semiconductor Die</p>
  </div>
  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
    <img src="images/project_microscope_leaf.jpeg" alt="Plant leaf microscopic structure" style="max-height: 240px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.6rem; font-weight: 500;">Plant Leaf Microscopic Veins</p>
  </div>
  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
    <img src="images/project_microscope_display.jpeg" alt="Display sub-pixels matrix" style="max-height: 240px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block; border-radius: var(--radius-sm);">
    <p style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.6rem; font-weight: 500;">RGB Display Sub-Pixel Matrix</p>
  </div>
</div>

<h3 class="detail-subheading">Components List</h3>
<ul class="detail-list">
  <li>2&times; Plano-convex optical lenses (extracted from standard ₹50 laser pointers)</li>
  <li>Smartphone camera with manual/expert mode capability</li>
  <li>Optical transparent adhesive tape / mounting jig</li>
  <li>Specimen slides &amp; LED backlight source</li>
</ul>

<p style="margin-top: 1.5rem; font-style: italic; color: var(--accent-cyan);">Note: Demo video will be uploaded on YouTube and linked here soon.</p>`,
        references: [
          { title: 'DIY Microscopy & Optical Lens Aberration Reduction Principles', url: '#' },
          { title: 'Smartphone Macro Photomicrography Setup Guide', url: '#' }
        ]
      }
    }
  ],

  concepts: [
    {
      id: 'cir-nuclear-fission',
      name: 'CIR - Chain Reaction Independent Nuclear Fission Reactors',
      cardImage: 'images/path_of_particles.png',
      detail: {
        image: 'images/path_of_particles.png',
        name: 'CIR - Chain Reaction Independent Nuclear Fission Reactors',
        introduction: `This is CIR (chain reaction independent nuclear fission reactors), one of the most ambitious project  I ever worked on, I designed this back in the year 2024 in the gap between high school and engineering college. <br><br>This is not just a concept it's my vision of how I imagine the future of  decentralised, small scale , high energy density and safe nuclear power generators`,
        inspiration: {
          textTop: `I was(and still am) deeply fascinated by science fiction and the tech shown in these kind of movies/shows, one of my favourite is Iron Man movie series , that series of movies blurred The line between science fiction and reality seamlessly, I was deeply fascinated about The arc reactor, and  after months of designing and redesigning I designed CIRs , they are smaller in size(when compared to traditional Nuclear reactors), inherently safe, capable of utilising a variety of fuels that is mostly neglected by nuclear industry(U-238, etc) , CIRs are very similar to ADS (Accelerator driven systems) , it's basically a cyclotron and ADS combined into a single unit to solve problems in nuclear physics that troubled humans for centuries.`,
          image: 'images/arc_reactor_inspiration.jpeg',
          textBottom: ''
        },
        moreText: `<p><strong>Here are the problems and how I solved it</strong></p>

<p><strong>1. Critical mass</strong><br>Naturally neutrons leak out of the nuclear core, and in traditional fission reactors we use heavy reflectors and use nuclear fuel of mass greater than critical mass, if it is lower than critical mass, the neutron multiplication factor drops below 1 and the reactor cannot sustain the chain reaction.</p>
<p><strong>How CIRs solve this,</strong><br>Since CIRs fundamentally don't rely on chain reaction, in fact the neutron multiplication factor less than one is intentional, the size of the nuclear fuel is free from critical Mass constraints, allowing us to design the nuclear fuel small as per our needs.</p>

<p><strong>2. One of the most important factor is safety and here's how this design fixed it.</strong></p>
<p>A traditional reactor always holds more than a critical mass of fuel, so it is constantly balanced on a knife-edge using mechanical control rods. If the rods jam, or the coolant pumps lose power, the result can be a runaway power spike or a meltdown, exactly what happened at Chernobyl and Fukushima. Even after shutdown, the fission products keep producing decay heat (about 7% of full power), and in a dense core that heat alone is enough to melt the fuel if cooling is lost.</p>
<p><strong>How CIRs solve this,</strong><br>The CIR core is subcritical (k<sub>eff</sub> &lt; 1), the fuel by itself is physically incapable of sustaining a chain reaction. Fission only happens while the particle beam is hitting the fuel. Earthquake, blackout or equipment failure, the accelerator simply switches off and every fission reaction stops in less than a microsecond. There are no control rods to jam, the power is regulated electrically by adjusting the beam current. And because the fuel in the Type-2 design is spread over a thin outer ring with a huge surface area, the decay heat per square meter is tiny, so even with all pumps dead, natural air circulation and radiation are enough to carry it away. The fuel never melts, the reactor is fail-safe by the laws of physics, true walk-away passive safety.</p>

<p><strong>3. Fuel scarcity and enrichment</strong><br>Natural uranium is only 0.72% U-235, the remaining 99.27% is U-238 which cannot sustain a thermal chain reaction. So uranium has to be enriched in multi-million dollar facilities, and the leftover depleted uranium just piles up as radioactive waste.</p>
<p><strong>How CIRs solve this,</strong><br>CIRs don't need fissile fuel at all, they fission fertile isotopes directly: U-238, Thorium-232 (three to four times more abundant than uranium on Earth) and the depleted uranium stockpiles we already have. No enrichment plant needed, and centuries of energy are unlocked from material we currently call waste.</p>

<p><strong>4. Bulky moderators and reflectors</strong><br>U-235 splits most easily with slow (thermal) neutrons, so traditional reactors are packed with huge volumes of water or graphite to slow neutrons down, and wrapped in thick reflectors to bounce escaping neutrons back in, adding massive volume and high-pressure plumbing.</p>
<p><strong>How CIRs solve this,</strong><br>U-238 in a CIR is split by fast neutrons, so slowing them down is completely unnecessary, and since neutron leakage doesn't kill the reaction, reflectors aren't needed either, standard shielding is enough. Throwing away the moderator tanks, pipes and reflectors drastically cuts the size, weight and complexity of the reactor.</p>

<p>Now this design that I created is comparatively much smaller then traditional Nuclear fission reactor, it can be portable and transported by truck to the places where it is needed, It has potential to power entire building or a group of house in a town using nothing but depleted uranium fuel or other transuranium fuel.</p>
<p>While everyone is chasing nuclear fusion, I believe we gravely neglect nuclear fission and it's capabilities, ADS is something we already have and it's just the leap of engineering that is needed to convert them into small(the size of 2-3 SUVs), decentralised , portable, and safe to be set up in towns, buildings without needing multi-million dollars setup or a 50 persons crew just to maintain, now it's obvious the power output will be significantly lower than traditional fission power plants and the power output should be scalable with size as per my calculations.</p>

<h3 class="detail-subheading">Comparison of CIRs with traditional Nuclear fission reactors</h3>
<p>I call traditional reactors CDRs (Chain Reaction Dependent Reactors), because their power depends entirely on a self-sustaining chain reaction. Here is how the two classes compare:</p>
<div class="table-scroll">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Traditional reactor (CDR)</th>
        <th>CIR</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>Criticality</th><td>Critical (k<sub>eff</sub> = 1), self-multiplying</td><td>Subcritical (k<sub>eff</sub> &lt; 1), driven by external particle beam</td></tr>
      <tr><th>Fuel</th><td>Fissile U-235 / Pu-239, needs enrichment</td><td>Fertile U-238, Th-232, depleted uranium</td></tr>
      <tr><th>Core size</th><td>Must exceed critical mass</td><td>No critical mass limit, size chosen freely for heat removal</td></tr>
      <tr><th>Moderator</th><td>Compulsory (water, graphite)</td><td>Eliminated, fast-spectrum reaction</td></tr>
      <tr><th>Reflectors</th><td>Mandatory to stop neutron leakage</td><td>Unnecessary, standard shielding is sufficient</td></tr>
      <tr><th>Power control</th><td>Mechanical control rods, chemical poisons</td><td>Electrical adjustment of accelerator beam current</td></tr>
      <tr><th>Passive safety</th><td>Vulnerable to power spikes if controls fail</td><td>Fail-safe, reaction stops instantly when beam cuts out</td></tr>
      <tr><th>Fuel abundance</th><td>Scarce (0.72% of natural uranium)</td><td>Abundant (99.27% of natural uranium, 100% of thorium)</td></tr>
      <tr><th>Waste</th><td>Produces long-lived transuranic waste</td><td>Can burn depleted uranium and fertile actinide waste</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">Deep overview of the construction:</h3>
<p><strong>The accelerator, a toroid.</strong><br>The heart of a CIR is a particle accelerator built into a hollow, ring-shaped (toroidal) vacuum chamber. Protons, taken from hydrogen gas, are fed into the chamber and accelerated along circular paths. A charged particle moving through a magnetic field bends into a circle of radius:</p>
<div class="detail-formula">r = m·v / (q·B)</div>
<p>So as the particle speeds up, its orbit naturally wants to grow. The image at the top of this page shows the coil arrangement and the path the particles follow.</p>
<ul class="detail-list">
  <li><strong>Coil-2 (acceleration coils):</strong> placed all along the ring, they switch polarity in a fast, timed rhythm, pulling and pushing the particle forward at every station. Every lap adds more kinetic energy until the particle reaches the target speed.</li>
  <li><strong>Coil-1 (guidance coils):</strong> generate the main magnetic field that provides the centripetal force, keeping the particles inside the vacuum channel instead of crashing into the walls.</li>
</ul>

<p><strong>Type-1 vs Type-2.</strong><br>Depending on where the fuel core sits, I worked out two layouts. In <strong>Type-1 (inward spiral)</strong> the core is at the centre and particles are injected at the outer edge, then forced to spiral inward. This fights against physics: the faster the particle gets, the more it wants to move outward, so the central coils need extremely intense, rapidly pulsing fields, wasting huge amounts of power, and all the heat gets concentrated in a tiny central spot that is hard to cool.</p>
<p>In <strong>Type-2 (outward spiral)</strong> the particles are injected near the centre and the fuel forms a ring around the outer edge. As they accelerate, they naturally spiral outward until they hit the outer core. This is the design I chose:</p>
<div class="table-scroll">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Type-1 (inward spiral)</th>
        <th>Type-2 (outward spiral)</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>Particle orbit</th><td>Outer edge toward centre</td><td>Centre toward outer ring</td></tr>
      <tr><th>Magnetic field</th><td>Rapidly pulsing, high power</td><td>Constant, permanent magnets can be used</td></tr>
      <tr><th>Magnet energy use</th><td>High, fights centrifugal force</td><td>Zero to minimal, works with natural orbit growth</td></tr>
      <tr><th>Core location</th><td>Compact core at the centre</td><td>Wide ring on the outer perimeter</td></tr>
      <tr><th>Cooling area</th><td>Very small</td><td>Very large</td></tr>
      <tr><th>Heat extraction</th><td>Difficult, concentrated hot spot</td><td>Easy and uniform</td></tr>
      <tr><th>Hitting the target</th><td>Needs complex steering inward</td><td>Happens naturally at the outer radius</td></tr>
    </tbody>
  </table>
</div>

<p><strong>The Coulomb barrier problem.</strong><br>My original idea was to smash protons directly into U-238. But a proton (+1) and a uranium nucleus (+92) repel each other strongly, a proton needs about 14.7 MeV just to touch the nucleus. Worse, solid uranium is full of electrons, and a fast proton collides with millions of them long before it ever meets a nucleus, losing almost all its energy as useless heat. The accelerator would consume far more power than the occasional fission could ever produce.</p>
<p><strong>The solution, a lead spallation mantle.</strong><br>I placed an intermediate layer of lead on the inner side of the outer fuel ring. The reaction then happens in three stages:</p>
<ul class="detail-list">
  <li><strong>Stage 1:</strong> accelerated protons hit the lead layer instead of the uranium.</li>
  <li><strong>Stage 2:</strong> each high-energy proton shatters a lead nucleus (spallation), releasing a shower of fast neutrons.</li>
  <li><strong>Stage 3:</strong> neutrons have zero charge, so they feel zero Coulomb repulsion and pass straight into the U-238 fuel.</li>
</ul>
<p>When a neutron with more than about 1.1 MeV strikes U-238, it causes fast fission, releasing around 200 MeV per split. Since one proton produces multiple neutrons, and each neutron can split a different uranium atom, the nuclear energy released is far greater than the electrical energy spent accelerating the proton, giving a real net energy gain.</p>

<p><strong>Cooling and heat extraction.</strong><br>The heat transfer area of a cylindrical core is A = 2&pi;RH. Because the Type-2 fuel ring has a much larger radius than a conventional compact core, its cooling surface is roughly 5 to 10 times larger, which lowers the heat flux, prevents hot spots and reduces strain on the fuel. The heat is carried away by a coolant such as liquid lead-bismuth, helium gas or molten salt, and used to run a turbine for electricity.</p>

<p><strong>Practical engineering considerations</strong></p>
<ul class="detail-list">
  <li><strong>Vacuum:</strong> the toroidal chamber must hold a high vacuum so the particles don't collide with air molecules.</li>
  <li><strong>Liquid metal target:</strong> using liquid lead-bismuth eutectic (LBE) as the converter layer avoids radiation damage and cracking, and it doubles as an excellent coolant.</li>
  <li><strong>Permanent magnets:</strong> in Type-2, permanent magnet arrays can provide the guiding field, removing the electrical cost of running magnet coils continuously.</li>
</ul>`,
        references: [
          { title: 'https://doi.org/10.5281/zenodo.23281205', url: 'https://doi.org/10.5281/zenodo.23281205' }
        ]
      }
    },
    {
      id: 'microbots',
      name: 'Microbots - Self-Assembling Cubic Micro-Robots',
      cardImage: 'images/microbots.png',
      detail: {
        image: 'images/microbots.png',
        name: 'Microbots - Self-Assembling Cubic Micro-Robots',
        introduction: `Microbots is a theoretical concept for autonomous, microscopic cubic robots that can move on command, communicate with one another, share energy, and bond electromagnetically to assemble into dynamic three-dimensional structures.<br><br>I originally conceived the foundation of this idea during 12th grade in high school, driven by the desire to test the physical feasibility of programmable matter. Rather than relying on rigid, pre-assembled machinery, this project explores a future where millions of microscopic building blocks act as collective voxels, reconfiguring their physical geometry to form any tool, mechanism, or structure on demand.`,
        inspiration: {
          textTop: `Growing up, I was deeply captivated by science fiction and how imaginative technology can inspire real-world engineering. One of the biggest creative catalysts for this project was Disney's <em>Big Hero 6</em>, specifically Hiro Hamada's microbots—swarms of tiny magnetic links controlled through a neural headband that could instantly rise into soaring towers, dynamic bridges, and intricate moving machinery.`,
          image: 'images/microbots_inspiration.png',
          textBottom: `While sci-fi portrays micro-assembly effortlessly, making it physically viable requires tackling steep real-world challenges: extreme electromagnetic force decay at micro scales, severe Joule heating in microscopic coils, energy density ceilings, and eliminating onboard batteries altogether.`
        },
        moreText: `<p><strong>The Design Journey: Why the Cube?</strong><br>My earliest design was an elongated diamond with rounded edges that resembled a smooth cylinder. However, early geometric analysis forced me to discard it for three reasons: it offered at most two connection joints, it was exceptionally difficult to organize into dense 3D volumes, and its asymmetry made microscopic lithography impractical.</p>
<p>To build true programmable matter, the geometry needed complete 3-axis symmetry, the ability to pack into space without gaps (tessellation), maximum bonding faces, and compatibility with planar manufacturing. The <strong>cube</strong> was the ideal solution. It tessellates 3D space with zero empty voids, provides 6 symmetrical bonding faces, and is ideally suited for layered lithographic fabrication.</p>

<h3 class="detail-subheading">Core Architecture &amp; Anatomy</h3>
<p>Each microbot is a microscopic cube (engineered around 100&nbsp;&micro;m to 500&nbsp;&micro;m in size) consisting of four integrated subsystems:</p>
<ul class="detail-list">
  <li><strong>Face-Mounted Electromagnetic Coils (6 Faces):</strong> A planar circular copper coil is fabricated onto each face. These coils serve a dual purpose: passing controllable current produces a magnetic dipole to attract, repel, and move adjacent bots, while coils that are not used for bonding, wirelessly harvest ambient power from an external oscillating magnetic field.</li>
  <li><strong>Edge Communication &amp; Power Pads:</strong> Four conductive copper contact pads sit on the edges and corners of each face. When bots latch together, these pads form an electrical bus that transmits commands across the swarm and routes energy from exterior bots to central bots which require more energy to support high structural loads.</li>
  <li><strong>Internal Supercapacitor Energy Buffer:</strong> Instead of chemical batteries, an internal electrostatic storage element buffers energy harvested from the environment for high-current actuation bursts.</li>
  <li><strong>On-Board Micro-Controller:</strong> A microscopic CMOS logic circuit or microcontroller etched into the core coordinates local timing, communication packets, and coil polarities. When linked together, the swarm can operate as a massively distributed computing processor.</li>
</ul>

<div style="margin: 2.25rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; text-align: center;">
  <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <img src="images/microbots_isometric_view.png" alt="Isometric CAD view of cubic microbot" style="max-height: 280px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block;">
    <p style="font-size: 0.88rem; color: #1e293b; margin-top: 0.85rem; font-weight: 500;">Figure: Isometric 3D view showing cubic bonding geometry and face coils.</p>
  </div>
  <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <img src="images/microbots_front_view.png" alt="Front view of cubic microbot" style="max-height: 280px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block;">
    <p style="font-size: 0.88rem; color: #1e293b; margin-top: 0.85rem; font-weight: 500;">Figure: Front face view detailing planar coil layout and edge contact pads.</p>
  </div>
</div>

<h3 class="detail-subheading">Powering the Swarm: Dual-Plexing</h3>
<p>At the micro-scale, conventional chemical batteries are completely impractical due to volume constraints, weight, and cycle degradation. Microbots carry no internal batteries. Instead, they operate completely battery-free by drawing energy from an external oscillating magnetic field via electromagnetic induction.</p>
<p>To prevent interference between power reception and mechanical bonding, the system uses a synchronized control strategy called <strong>dual-plexing</strong>(this is still very imature and needs further development):</p>
<ul class="detail-list">
  <li>For most structure lets say a triangular plate made by these microbots, It is not necessary every bot has to participate in structure formation. microbots use turn based mechanism, first a group of few bots disengage their actuation to harvest energy, while the other bots hold the structure together, then the bots swap, In this way bots act in unison to keep the structure stable, and as for bots that are in critical positions that they cannot disengage their actuation, other bots can simply supply their energy to these bots via communication pads.</li>
</ul>

<h3 class="detail-subheading">Overcoming Energy Limits: The Supercapacitor Breakthrough</h3>
<p>In my initial design version, I calculated the energy storage of a conventional parallel-plate capacitor with high-permittivity barium titanate (BaTiO<sub>3</sub>, &epsilon;<sub>r</sub> = 10,000). At microscopic dimensions (0.5&nbsp;mm cube), the capacitance was just 44.25&nbsp;pF. Even assuming an extreme voltage of 200&nbsp;V—which I think will certainly cause electric arcing and dielectric breakdown at this scale—the stored energy was only ~885&nbsp;nJ, which is far too low to power actuation coils.</p>

<div style="margin: 2rem 0; text-align: center;">
  <div style="display: inline-block; background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; max-width: 440px; width: 100%;">
    <img src="images/microbots_internal_capacitor_view.png" alt="Internal capacitor structure from early design calculations" style="max-height: 260px; width: auto; max-width: 100%; object-fit: contain; margin: 0 auto; display: block;">
    <p style="font-size: 0.88rem; color: #1e293b; margin-top: 0.85rem; font-weight: 500;">Figure: Internal parallel-plate capacitor architecture modeled in the initial design version.</p>
  </div>
</div>

<p>To solve this critical bottleneck, I upgraded the internal storage model to <strong>porous activated-carbon supercapacitor technology</strong> (electric double-layer capacitor). With porous carbon electrodes offering huge surface areas (~100–200&nbsp;F/g):</p>
<div class="detail-formula">C = 100 F/g &times; 12.5 &micro;g = 1.25 mF &emsp;&rArr;&emsp; E = &frac12; C V<sup>2</sup> = &frac12; (1.25 &times; 10<sup>&minus;3</sup>) &times; (2.7)<sup>2</sup> &approx; 4.56 mJ</div>
<p>This increases stored energy by over <strong>4,000&times;</strong> (from nanojoules to 4.56&nbsp;mJ) while operating at a safe, realistic voltage of just 2.7&nbsp;V, completely eliminating the need for high-voltage hazards and making electromagnetic actuation physically viable, This was the second breakthrough I made in this project.</p>

<h3 class="detail-subheading">Preliminary Feasibility Numbers</h3>
<div class="table-scroll">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Physical Parameter</th>
        <th>Calculated Value</th>
        <th>Engineering Significance</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>Cube Edge &amp; Mass</th><td>100 &micro;m edge, ~8.96 &micro;g</td><td>Microscopic scale with negligible gravitational inertia</td></tr>
      <tr><th>Coil Resistance</th><td>~75.3 m&Omega;</td><td>Low resistive loss through optimized conductor cross-section</td></tr>
      <tr><th>Thermal Current Limit</th><td>62.7 mA (at 0.1 s pulse)</td><td>Constrained to a safe &Delta;T of 10&deg;C to prevent thermal breakdown</td></tr>
      <tr><th>Coil Core Magnetic Field</th><td>~1.2 &times; 10<sup>&minus;3</sup> T (1.2 mT)</td><td>Localized field generated per activated face</td></tr>
      <tr><th>Attractive Force (at 20 &micro;m)</th><td>~1.25 &times; 10<sup>&minus;10</sup> N</td><td>Produces an acceleration of ~1.4 m/s&sup2;, enabling deliberate motion</td></tr>
      <tr><th>Supercapacitor Energy</th><td>~4.56 mJ (at 2.7 V)</td><td>High energy density buffer for longer actuation pulses</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">Potential Applications</h3>
<p>Because microbots act as modular building blocks, the range of potential applications spans several sectors:</p>
<ul class="detail-list">
  <li><strong>Medical Nanorobotics:</strong> Targeted micro-scale drug delivery to diseased cells, non-invasive biopsies, and microsurgical intervention through capillary pathways without open incisions.</li>
  <li><strong>Environmental Remediation:</strong> Dispersible swarms for breaking down micro-pollutants and targeted oil spill absorption in marine environments.</li>
  <li><strong>Precision Micro-Manufacturing:</strong> High-precision pick-and-place assembly of micro-optics and semiconductor packages beyond traditional robotic reach.</li>
  <li><strong>Dynamic Programmable Matter:</strong> Reconfigurable tools and rapid prototyping where material geometry adapts in real time to mechanical demands.</li>
</ul>`,
        references: [
          { title: 'https://doi.org/10.13140/RG.2.2.32520.58885', url: 'https://doi.org/10.13140/RG.2.2.32520.58885' }
        ]
      }
    },
    {
      id: 'thermoregulating-fabric',
      name: 'Adaptive Thermoregulating Fabric (ATRF)',
      cardImage: 'images/thermo_fabric_grid.jpeg',
      detail: {
        image: 'images/thermo_fabric_cross_section.jpeg',
        name: 'Adaptive Thermoregulating Fabric (ATRF)',
        introduction: `<strong>Temperature control clothing:</strong> basically a high-tech fabric that can be used to make clothes. What's special about these fabrics is they can regulate our body temperature in unpleasant environments.<br><br>It can be greatly helpful for winters, summers, or maybe in a college lecture hall where we are assumed to be penguins and the ACs are blasted at the lowest temperature—the fabric can regulate our body temperature accordingly.<br><br>Unlike conventional passive textiles that merely trap static air pockets, ATRF continuously senses localized skin surface temperatures in real time and actuates solid-state heating or cooling through an embedded mesh of microscopic thermal modules. Constructed as a decentralized two-dimensional array, the garment degrades gracefully under physical trauma: cutting, tearing, or piercing any section only disables local modules in that damaged zone, while the remainder of the garment continues regulating temperature completely uninterrupted.`,
        inspiration: {
          textTop: `Traditional clothing enforces a rigid compromise: bundle up in thick, bulky winter gear and overheat during physical exertion, or wear light garments and freeze in unexpected chill. I envisioned clothing operating like an artificial, active thermoregulatory organ—a responsive second skin that balances heat flux dynamically.`,
          image: 'images/thermo_fabric_grid.jpeg',
          textBottom: `Conventional wearable heating relies on fragile, continuous wire loops where a single snag or cut breaks the entire circuit. ATRF solves this through architectural fault tolerance: independent, addressable modules linked by flexible serpentine interconnects that maintain system resilience even under severe textile wear.`
        },
        moreText: `<h3 class="detail-subheading">Block Technology &amp; Modular Architecture</h3>
<p>In this design, the fabric uses a modular block architecture where small modules are interconnected to each other across a 2D mesh:</p>
<ul class="detail-list">
  <li><strong>Modules:</strong> Each module has its own temperature sensor and Peltier heating/cooling element. The modules are tiny, about 0.5 &times; 0.5 cm&sup2;. The modules are responsible for sensing and regulating the temperature at that part of the fabric.</li>
  <li><strong>Wires:</strong> There are 3 wires that connect two modules—two for power and the third for an I2C connection. This allows us to communicate with each module, read the temperature at that part of the fabric, and regulate temperature as commanded by the master microcontroller.</li>
  <li><strong>Stretchable Interconnects:</strong> Each module is connected to neighbour modules with loose, stretchable, flexible wires. So if the fabric is cut or torn, modules at that region might be separated while the rest of the fabric works normally.</li>
  <li><strong>Fabric Layering:</strong> The fabric has two external layers on each side sandwiching the internal layer. The internal layer is made up of flexible, porous (for breathability), and thermally conductive material—the modules and wires lie protected inside this layer.</li>
</ul>

<div class="table-scroll" style="margin: 1.5rem 0;">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Component Feature</th>
        <th>Module Specification</th>
        <th>Functional Role</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>Physical Dimensions</th><td>&approx; 0.5 cm &times; 0.5 cm die</td><td>Compact profile seamlessly embeddable into flexible woven yarns</td></tr>
      <tr><th>Integrated Sensor</th><td>Digital micro-thermistor / IR sensor</td><td>Provides high-precision local skin and ambient temperature telemetry</td></tr>
      <tr><th>Thermal Actuator</th><td>Miniaturized Peltier Element (TEC)</td><td>Reversible solid-state heat pump: heats or cools based on current polarity</td></tr>
      <tr><th>Communication Bus</th><td>I2C Addressable Bus (3-wire topology)</td><td>Shared multidrop bus for localized telemetry polling and command delivery</td></tr>
      <tr><th>Power Distribution</th><td>2-Wire DC Power Rail</td><td>Provides high-efficiency low-voltage power across the interconnected grid</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">Other Features</h3>
<ul class="detail-list">
  <li><strong>1. Thermoelectric Energy Harvesting:</strong> The same fabric can also be used to harvest heat from our body (via the Seebeck effect) to generate a small amount of electricity when external temperature contrasts with body heat.</li>
  <li><strong>2. Health Telemetry &amp; Diagnostics:</strong> The fabric can also monitor temperature at each point of the body to predict health complications or diseases (such as early fever onset, inflammation, or circulatory changes).</li>
</ul>

<h3 class="detail-subheading">Current Limitations &amp; Future Outlook</h3>
<p>While the architecture is conceptually sound, physical implementation faces clear engineering bottlenecks:</p>
<ul class="detail-list">
  <li><strong>1. Peltier Inefficiency:</strong> Current Peltier modules are inefficient and waste a lot of energy through resistive losses, which forces the need for larger battery packs.</li>
  <li><strong>2. Battery Packs:</strong> Large battery packs (10,000+ mAh, 3.7V) are heavy, costly, and not very durable inside daily clothing.</li>
</ul>
<p style="margin-top: 1rem; color: var(--accent-cyan);"><em>However, as the boom of electric vehicles (EVs) has made significant advancements in battery technologies, energy density, and flexible cells, this product might not be very far away.</em></p>`,
        references: [
          { title: 'Adaptive Thermoregulating Fabric (ATRF) — Technical Documentation & Concept Architecture Draft (v0.1)', url: '#' },
          { title: 'Research paper DOI and hardware prototype documentation will be updated soon', url: '#' },
          { title: 'Literature on Wearable Thermoelectric Generators and Stretchable E-Textiles', url: '#' }
        ]
      }
    },
    {
      id: 'opto-acoustic',
      name: 'Opto-Acoustic Modulation: Mid-Air Volumetric Display',
      cardImage: 'images/image_1_setup_coverimage.png',
      detail: {
        image: 'images/image_1_setup_coverimage.png',
        name: 'Opto-Acoustic Modulation: Mid-Air Volumetric Display via Ultrasonic Refractive-Index Gradients',
        introduction: `This is another concept I spent a lot of my mental energy on, In brief I was trying to make 3d volumetric displays that could create true 3d images floating in air without requiring reflectors, panels, or wearing any bulky glasses.<br><br>The main aim was to create actual &ldquo;pixels in air&rdquo; that multiple people can view naturally from different angles. This writeup documents the basic idea, how I arrived at it independently, the technical challenges, and the detailed feasibility calculations to see whether current physics and hardware can actually pull this off.`,
        inspiration: {
          textTop: `Another peice of Science Fiction that I was deeply fascinated was 3D holograms shown in Marvel movies, specifically the one which tony stark uses for his engineering purposes. In those movies, he simply swipes his hand, rotates 3d mechanical components in mid-air, and designs his suits right in front of him.`,
          image: 'images/opto_acoustic_inspiration.png',
          textBottom: `While sci-fi makes it look effortless, when you actually try to build it, you run into real physics: how do you create light or deflect light from a point in thin air where there is literally nothing to bounce off?`
        },
        moreText: `<h3 class="detail-subheading">TECHNICAL CHALLENGES</h3>
<p>Now, creating a true 3D hologram technology that could create 3d images in air without requiring reflectors or panel we need to create 'pixels' in air.</p>
<p>That is increadibly difficult because it requires us to produce light from a localised point in air out of nothing or create a microscopic object in air that could reflect light, both of these options are currently impossible or I thought it was. When a light passes through one medium to another with different density, light bends this property is called as dispersion of light (or refraction), we can use this property and create a density gradient for a microscopic volume of air in air, turns out we already do this, the answer is sound waves , sound waves are basically regions or high and low density in air.</p>
<p>This project uses directional interference of ultrasonic sound waves to create localised regions of high or low density in air, and then a laser is fired to that region with distinct density, and the laser bends due to dispersion of light and can reach our eyes, that's the basic idea. Few months later I got to know something like this already exists for years and it's called as 'Opto-Acoustic Modulation'. It's great to realise , I reached deep tech concepts that already exists independently Without any exposure to prior technologies.</p>

<h3 class="detail-subheading">Physical Mechanism &amp; Wave Interference</h3>
<p>When two directional ultrasonic beams cross each other in open air, their sound pressure fields superpose together and form a standing interference pattern:</p>
<div class="detail-formula">p(x,t) = p<sub>a</sub> cos(kx &minus; &omega;t) + p<sub>a</sub> cos(kx + &omega;t) = 2p<sub>a</sub> cos(kx) cos(&omega;t)</div>
<p>Where they constructively interfere, the density oscillates with double the single wave amplitude, creating localized pockets of high density and steep refractive-index gradients in ambient air.</p>

<div style="margin: 2rem 0; text-align: center;">
  <img src="images/image_2_interference.png" alt="Geometric representation of ultrasonic wave interference" style="width: 100%; max-width: 760px; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: #ffffff; padding: 1rem;">
  <p style="font-size: 0.9rem; color: var(--text-dim); margin-top: 0.75rem;">Figure: Geometric wave interference between two directional ultrasonic sources creating localized high-density compression lattices in ambient air.</p>
</div>

<h3 class="detail-subheading">The Piezo-Optic Chain: How Much Light Bends</h3>
<p>For sound waves in air, the change in air density is:</p>
<div class="detail-formula">&delta;&rho; = p / c<sup>2</sup> &emsp;(where c &approx; 343 m/s in air at 20 &deg;C)</div>
<p>And the refractive index follows the <strong>Gladstone&ndash;Dale relation</strong>:</p>
<div class="detail-formula">n &minus; 1 = K &middot; &rho;, &emsp; with K &approx; 2.31 &times; 10<sup>&minus;4</sup> m<sup>3</sup>/kg (for air at 532 nm)</div>
<p>This gives the piezo-optic coefficient of air:</p>
<div class="detail-formula">&delta;n / p = K / c<sup>2</sup> &approx; 1.96 &times; 10<sup>&minus;9</sup> Pa<sup>&minus;1</sup></div>
<p>Across a focal acoustic zone of length <em>L</em> &approx; &Lambda; (~8.6 mm at 40 kHz), the total angle that the laser ray bends is:</p>
<div class="detail-formula">&theta; &approx; 2&pi; &middot; &delta;n &emsp;(in radians)</div>

<h3 class="detail-subheading">Significant Challenges &amp; Reality Check</h3>
<p>This technology is still very immature, faces some significant challenges:</p>

<p><strong>1) The density gradient produced by current directional speakers are tiny.</strong><br>
Here is the calculation of how much density we need and what current speakers can produce:</p>

<div class="table-scroll">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Sound Pressure Level (SPL)</th>
        <th>Peak Pressure Amplitude</th>
        <th>Relative Density (&delta;&rho;/&rho;<sub>0</sub>)</th>
        <th>Index Perturbation (&delta;n)</th>
        <th>Ray Deflection &theta;</th>
        <th>Optical Phase &phi;</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>120 dB (Directional Speaker)</th><td>~28 Pa</td><td>2.0 &times; 10<sup>&minus;4</sup></td><td>5.6 &times; 10<sup>&minus;8</sup></td><td>0.35 &mu;rad</td><td>0.006 rad</td></tr>
      <tr><th>140 dB (High-Power Horn)</th><td>~283 Pa</td><td>2.0 &times; 10<sup>&minus;3</sup></td><td>5.6 &times; 10<sup>&minus;7</sup></td><td>3.5 &mu;rad</td><td>0.056 rad</td></tr>
      <tr><th>150 dB (256-Element Phased Array)</th><td>~894 Pa</td><td>6.3 &times; 10<sup>&minus;3</sup></td><td>1.8 &times; 10<sup>&minus;6</sup></td><td>11 &mu;rad</td><td>0.18 rad</td></tr>
      <tr><th>160 dB (Acoustic Levitation Array)</th><td>~2.8 kPa</td><td>2.0 &times; 10<sup>&minus;2</sup></td><td>5.5 &times; 10<sup>&minus;6</sup></td><td>35 &mu;rad</td><td>0.56 rad</td></tr>
      <tr><th>165 dB (Peak Resonant Focus)</th><td>~5.0 kPa</td><td>3.5 &times; 10<sup>&minus;2</sup></td><td>9.8 &times; 10<sup>&minus;6</sup></td><td>62 &mu;rad</td><td>1.0 rad</td></tr>
    </tbody>
  </table>
</div>

<p>As you can see from the table above, the deflection angle produced by current ultrasonic phased arrays is only around 10 to 62 &mu;rad (which is tiny, ~0.003&deg;). To bend light by even just 1&deg; toward someone's eye, we would need &delta;n &gtrsim; 10<sup>&minus;4</sup>, which means sound pressure above 190 dB! That is near acoustic shockwave levels. And there is a hard physical ceiling: air density cannot be modulated by more than 100% of its own value, so |&delta;n| &le; n<sub>0</sub> &minus; 1 &approx; 2.8 &times; 10<sup>&minus;4</sup> in atmospheric air.</p>

<p><strong>2) Algorithm to synchronize the operations of this technology between creating pixels and how many pixels their shape in 3d space, arrangement of pixels, and when to fire the laser, etc.</strong><br>
At 40 kHz, sound waves oscillate every 25 &mu;s. If you fire a normal continuous laser, the compressions and rarefactions cancel each other out and the beam doesn't bend at all. So you have to pulse the laser in ultra-short bursts synchronized exactly at the peak compression moment (t<sub>fire</sub>). Also, you need high-speed eye tracking cameras to know where the viewer is looking, so the scanner aims the incoming laser at the right angle so the bent light enters their eyes.</p>

<p><strong>3) Computational power needed to run all of this.</strong><br>
Calculating multi-point acoustic hologram phases in real time (using algorithms like GS-PAT on GPUs) requires massive computing power to generate thousands of phase solutions per second, while an FPGA hardware driver must send timed electrical pulses to hundreds of ultrasonic transducers with microsecond precision.</p>

<h3 class="detail-subheading">Applications</h3>
<p>Even though the deflection angle is currently very small, if this technology matures, the applications are numerous:</p>
<ul class="detail-list">
  <li><strong>1) Engineering CAD:</strong> Rotating and inspecting complex 3D engineering designs and mechanical assemblies floating in mid-air, exactly like Tony Stark.</li>
  <li><strong>2) 3D Visualisation:</strong> Displaying complex scientific simulations, architectural blueprints, and molecular structures with true depth.</li>
  <li><strong>3) Entertainment:</strong> Next-generation gaming, interactive mid-air media, and sci-fi stage performances without wearing VR headsets.</li>
  <li><strong>4) Live Meetings:</strong> True telepresence where remote colleagues appear sitting in front of you in genuine 3D space.</li>
  <li><strong>5) Medical Imaging:</strong> Doctors and surgeons inspecting 3D MRI and CT scans hovering in sterile operating rooms without having to touch any screens or mice.</li>
</ul>

<p style="margin-top: 1.5rem; font-style: italic; color: var(--accent-cyan);">this concept has been parked in the 'great parking lot of ideas' for now.</p>`,
        references: [
          { title: 'Nitinkumar Vishwakarma, "Mid-Air Volumetric Display via Ultrasonically Induced Refractive-Index Gradients: Concept, Quantitative Feasibility, and Limitations of Opto-Acoustic Modulation in Free Air" (2026)', url: '#' },
          { title: 'Y. Schrödel et al., "Acousto-optic modulation of gigawatt-scale laser pulses in ambient air," Nature Photonics, 18, 54–59 (2024)', url: '#' },
          { title: 'R. Hirayama et al., "A volumetric display for visual, tactile and audio presentation using acoustic levitation," Nature, 575, 320–323 (2019)', url: '#' },
          { title: 'https://doi.org/10.13140/RG.2.2.35856.37126', url: 'https://doi.org/10.13140/RG.2.2.35856.37126' }
        ]
      }
    },
    {
      id: 'mobius-law',
      name: 'The Möbius Law: Phase-Difference Framing of Multi-Twisted Strips',
      cardImage: 'images/mobius_cover.jpg',
      detail: {
        image: 'images/mobius_cover.jpg',
        name: 'The M&ouml;bius Law: Phase-Difference Framing of Multi-Twisted Strips',
        introduction: `I call this the <strong>M&ouml;bius Law</strong>&mdash;it's a phenomenon I discovered while experimenting with M&ouml;bius strips a few years ago.<br><br>If we take a strip of paper and rotate one end (by 180 degrees) of the paper keeping the other end fixed and glue the ends together, we get a M&ouml;bius strip. In this case, the phase difference between the same plane on both ends is &pi;. But what happens if the phase difference between the same plane on both ends is <em>n&pi;</em>?<br><br>And then, we cut the strip by the length of the strip of paper: we observe an interesting, strict topological pattern across parities.<br><br><span style="font-style: italic; color: var(--accent-cyan);">Note: Maybe not a brand-new discovery to mathematics, but a mathematical topological result that I conceived independently&mdash;anyways, a great personal discovery for me.</span>`,
        inspiration: {
          textTop: `This concept emerged from tactile mathematical curiosity&mdash;taking scissors, paper, and tape to explore spatial topology from first principles. I wanted to see what happens when you generalize beyond the classic single-twist M&ouml;bius strip into arbitrary multi-twist loops, cataloging the resulting topologies systematically.`,
          image: 'images/mobius_law_diagram.jpeg',
          textBottom: `By tracing centerline paths with a pencil before cutting, a profound topological truth revealed itself: one-sided surfaces possess a single continuous boundary curve of double length, whereas two-sided surfaces possess two distinct boundaries. The physical cut simply exposes the underlying boundary geometry.`
        },
        moreText: `<h3 class="detail-subheading">Setup and Definitions</h3>
<p>Take a strip of paper and rotate one end (by 180 degrees) of the paper keeping the other end fixed, and glue the ends together:</p>
<ul class="detail-list">
  <li>The rotation angle defines the <strong>phase difference</strong>, <em>n&pi;</em>, between the same plane on both ends (where <em>n</em> represents the number of half-twists).</li>
  <li><em>n</em> = 0 corresponds to an ordinary, untwisted cylindrical loop.</li>
  <li><em>n</em> = 1 corresponds to the canonical M&ouml;bius strip (single half-twist, phase &pi;).</li>
  <li>Now, cut the strip continuously along the length of the strip of paper (down its centerline).</li>
</ul>

<h3 class="detail-subheading">We Observe an Interesting Pattern (Statement of the Law)</h3>
<p>Given a closed band formed with phase difference <em>n&pi;</em> between end planes, cutting it along its centerline produces:</p>
<div class="detail-formula">
  If n is even &rArr; 2 rings (strips with ends glued together) with n&pi; phase difference between the end planes (linked together)<br><br>
  If n is odd &rArr; 1 strip of 2(n + 1)&pi; phase difference (double length)
</div>

<h3 class="detail-subheading">Worked Examples Across Parities</h3>
<div class="table-scroll">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>n (Before Cut)</th>
        <th>Twist Phase</th>
        <th>Parity</th>
        <th>Topological Result After Centerline Cut</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>1</th><td>&pi; (Standard M&ouml;bius)</td><td>Odd</td><td>1 single strip, double length, phase 2(1 + 1)&pi; = <strong>4&pi;</strong></td></tr>
      <tr><th>2</th><td>2&pi; (Full twist)</td><td>Even</td><td>2 linked separate strips, each phase <strong>2&pi;</strong>, linked 1 time</td></tr>
      <tr><th>3</th><td>3&pi; (Triple half-twist)</td><td>Odd</td><td>1 single strip, double length, phase 2(3 + 1)&pi; = <strong>8&pi;</strong></td></tr>
      <tr><th>4</th><td>4&pi; (Double twist)</td><td>Even</td><td>2 linked separate strips, each phase <strong>4&pi;</strong>, linked 2 times</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">The Core Insight</h3>
<p>The fundamental symmetry breaking behind this law can be stated succinctly:</p>
<blockquote style="border-left: 3px solid var(--accent-cyan); padding-left: 1.2rem; margin: 1.5rem 0; color: var(--accent-cyan); font-size: 1.15rem; font-style: italic;">
  &ldquo;Even the strip doesn't want its offspring to be odd.&rdquo;
</blockquote>
<p>No matter what phase difference you begin with, cutting a band along its centerline <em>never produces an odd-phase result</em>. An odd-phase input (<em>n</em> odd) collapses into a single strip whose new phase, 2(<em>n</em>&nbsp;+&nbsp;1)&pi;, is strictly even. An even-phase input (<em>n</em> even) bifurcates into two distinct strips that each preserve the original even phase.</p>
<p>Consequently, <strong>every strip emerging from a centerline cut is strictly two-sided and orientable (even phase)</strong>. The cut operation physically forbids the creation of one-sided offspring: only the parent strip can possess non-orientable topology; nothing produced by a centerline cut ever does.</p>

<h3 class="detail-subheading">Topological Mechanism</h3>
<p>This behavior is governed by the boundary structure of the strip prior to cutting:</p>
<ul class="detail-list">
  <li><strong>Odd n (non-orientable):</strong> An odd-twist band is one-sided and bounded by a single continuous closed curve that winds twice around the core before closing. Cutting down the centerline is geometrically equivalent to tracing parallel to this solitary edge, resulting in one continuous ribbon of double length.</li>
  <li><strong>Even n (orientable):</strong> An even-twist band is two-sided and possesses two distinct, independent boundary edges. Cutting along the centerline cleanly partitions the two boundaries into two separate bands, linked together due to the initial spatial rotation.</li>
</ul>

<h3 class="detail-subheading">Relationship to Established Mathematics</h3>
<p>This phenomenon corresponds to a classical result in geometric topology termed <strong>paradromic rings</strong>, first systematically investigated in 1847 by German mathematician Johann Benedict Listing (who coined the term <em>topology</em>). While conventional literature frames the theorem in terms of half-twists <em>N</em>, formulating it in terms of continuous phase difference <em>n&pi;</em> offers an intuitive wave-phase perspective discovered through independent physical experimentation.</p>

<h3 class="detail-subheading">Further Explorations</h3>
<ul class="detail-list">
  <li><strong>Off-Center Cuts:</strong> Cutting at a fractional width (e.g., 1/3 from an edge) creates interlocking rings of unequal widths and distinct twist configurations.</li>
  <li><strong>Recursive Cutting:</strong> Applying the transformation recursively across consecutive generations to map branching topological trees.</li>
  <li><strong>Linking Numbers in Knot Theory:</strong> Rigorously formalizing the Gauss linking integral for higher-order even parity strips.</li>
</ul>`,
        references: [
          { title: 'J. B. Listing, "Vorstudien zur Topologie" (Göttinger Studien, 1847) — Foundational Analysis of Paradromic Rings', url: '#' },
          { title: 'Research paper DOI and formal topological documentation will be updated soon', url: '#' }
        ]
      }
    },
    {
      id: 'photon-rocket',
      name: 'Photon Rocket Propulsion for Interstellar Flight',
      cardImage: 'images/photon_rocket_flight_profile.jpeg',
      detail: {
        image: 'images/photon_rocket_flight_profile.jpeg',
        name: 'Photon Rocket Propulsion for Interstellar Flight',
        introduction: `<strong>The Problem:</strong> Normal fuel rockets work fine for travelling to other planets or moons in our solar system, but we face a physical bottleneck when it's about interstellar travel to a different star. We can carry only a limited amount of fuel in the rocket; the fuel, no matter how much, will run out after a while, and large amounts of fuel are also harder to get outside of Earth's atmosphere. All of these problems limit our dreams to fly to a different star in a practical timeframe.<br><br><strong>The Concept:</strong> So I thought, why not get rid of chemical fuels and maybe rely on electricity, because sufficient amounts of electricity can be generated by nuclear reactors reliably for long durations of time. But the problem is to gain momentum in space we have to push against something. In the case of chemical fuels we pushed gas to accelerate, but for electricity? There exists only one option (as far as I know) and that is photons.<br><br>So the photon rocket engine is basically a rocket engine that creates a large amount of photons and expels them. And since photons carry momentum (<em>p = E/c</em>), we get a very small acceleration from each photon. We need an astronomical number of photons to get a considerable amount of starship acceleration.`,
        inspiration: {
          textTop: `Humanity's ambition to cross the interstellar void and reach Proxima Centauri (4.246 light-years away) within a human lifetime requires fundamentally rethinking propulsion physics. The starting question: what if a starship carried zero chemical reaction mass and pushed against the universe solely with directed electromagnetic radiation?`,
          image: 'images/photon_rocket_power_options.jpeg',
          textBottom: `According to calculations, the core challenge is that generating meaningful acceleration demands staggering continuous power: approximately 12.1 terawatts (TW).`
        },
        moreText: `<h3 class="detail-subheading">Mission Profile and Kinematics</h3>
<p>Consider a benchmark interstellar voyage targeting Proxima Centauri, the nearest star system:</p>
<div class="table-scroll">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Mission Parameter</th>
        <th>Value</th>
        <th>Significance</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>Target Distance (d)</th><td>4.246 light-years (&approx; 4.017 &times; 10<sup>16</sup> m)</td><td>Nearest stellar neighbor to Earth</td></tr>
      <tr><th>Total Voyage Duration (t)</th><td>20 Earth years (&approx; 6.312 &times; 10<sup>8</sup> s)</td><td>Feasible timeline within a human career</td></tr>
      <tr><th>Flight Trajectory</th><td>Constant acceleration (+a) for 10 yrs, midpoint flip, constant deceleration (&minus;a) for 10 yrs</td><td>Arrives at destination at rest relative to target star</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">Acceleration and Power Budget</h3>
<p>Applying the constant-acceleration distance relation across the first half of the trajectory:</p>
<div class="detail-formula">d/2 = &frac12; a (t/2)<sup>2</sup> &emsp;&rArr;&emsp; a = 4d / t<sup>2</sup></div>
<p>For a realistic <strong>100-metric-ton spacecraft (100,000 kg)</strong>, evaluating these equations yields:</p>
<div class="table-scroll">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Physical Parameter</th>
        <th>Calculated Value</th>
        <th>Engineering Context</th>
      </tr>
    </thead>
    <tbody>
      <tr><th>Required Acceleration (a)</th><td>0.403 m/s<sup>2</sup></td><td>Gentle ~0.04g acceleration (ideal for structures)</td></tr>
      <tr><th>Required Continuous Thrust (F)</th><td>40,300 N</td><td>F = m &middot; a for 100-ton vehicle</td></tr>
      <tr><th>Required Beam Power (P)</th><td><strong>12.1 TW</strong> (1.21 &times; 10<sup>13</sup> W)</td><td>&approx; 60% of humanity's total global electric grid, sustained for 20 years</td></tr>
      <tr><th>Thrust Efficiency Ratio</th><td><strong>~300 MW / Newton</strong></td><td>Derived directly from F = P / c &rArr; P/F = c = 3 &times; 10<sup>8</sup> W/N</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">Power Source Architectures: Trade-Off Analysis</h3>
<p>To supply 12.1 terawatts of continuous directed beam energy, two primary technological paths present themselves:</p>
<ul class="detail-list">
  <li><strong>Option 1: Earth-Based Beamed Laser:</strong> Reactor arrays remain rooted in the solar system, beaming laser energy to an ultra-reflective spacecraft sail. <em>Advantages:</em> Starship carries zero heavy reactor mass, keeping the vessel extraordinarily light. <em>Challenges:</em> Severe beam divergence over 4.24 light-years requiring planet-scale transmission optics; relativistic Doppler redshift degrading received momentum as the ship accelerates away; and no beam emitter exists at the destination to brake the starship upon arrival.</li>
  <li><strong>Option 2: Onboard Matter&ndash;Antimatter Annihilation:</strong> Photons are synthesized directly onboard via electron&ndash;positron (e&minus;/e+) or proton&ndash;antiproton annihilation, directed rearward by a parabolic mirror as high-energy gamma-ray exhaust. <em>The Storage Breakthrough:</em> Rather than stockpiling volatile antimatter onboard for decades (a catastrophic containment risk), antimatter is <strong>synthesized continuously in micro-quantities in-flight</strong> as demanded by the drive.</li>
</ul>

<h3 class="detail-subheading">Historical Lineage and Validation</h3>
<p>The photon rocket concept was first formulated in 1953 by German aerospace engineer <strong>Eugen S&auml;nger</strong>, who derived the exact 300 MW/N thrust relation and proposed matter&ndash;antimatter gamma lasers with parabolic reflectors.</p>
<p>Furthermore, the strategy of generating antimatter in-flight to bypass containment hazards independently mirrors physicist Richard Obousy's <strong>VARIES concept</strong> (Vacuum to Antimatter Rocket Interstellar Explorer System), which relies on Schwinger vacuum pair production driven by intense lasers.</p>

<h3 class="detail-subheading">Unresolved Questions &amp; Open Bottlenecks</h3>
<p style="font-style: italic; color: var(--accent-cyan); margin-bottom: 1rem;">Note: The idea is incomplete&mdash;there are a lot of problems with this concept and many unanswered questions listed below:</p>
<ul class="detail-list">
  <li><strong>Relativistic Velocity (0.42c):</strong> Midpoint peak velocity reaches v = a &middot; (t/2) &approx; 1.27 &times; 10<sup>8</sup> m/s &approx; <strong>0.42c</strong>. At 42% the speed of light, time dilation, relativistic mass dilation, and interstellar dust impacts pose extreme structural risks.</li>
  <li><strong>TW-Scale Collimation &amp; Mirror Survivability:</strong> Annihilation gamma rays emit isotropically. Collimating terawatts of high-energy gamma radiation into a narrow unidirectional beam without mirror ablation or thermal vaporization remains an unsolved materials challenge.</li>
  <li><strong>Radiative Waste Heat Rejection:</strong> In the hard vacuum of deep space, even a 0.01% inefficiency in a 12 TW powertrain produces gigawatts of waste heat that can only be discarded through enormous radiative surface panels.</li>
  <li><strong>Antimatter Synthesis Efficiency:</strong> Continuous micro-synthesis of antimatter requires enormous input power, creating an energy loop closure challenge that demands breakthrough power conversion efficiencies.</li>
</ul>`,
        references: [
          { title: 'E. Sänger, "The Theory of Photon Rockets," Ingenieur-Archiv, 21, 213 (1953)', url: '#' },
          { title: 'R. Frisbee, "How to Build an Antimatter Rocket for Interstellar Missions," AIAA Paper 2003-4696', url: '#' },
          { title: 'P. Gilster, "Antimatter Propulsion: Birth of a Concept," Centauri Dreams (2016)', url: '#' },
          { title: 'Research paper DOI and formal mission analysis publication will be updated soon', url: '#' }
        ]
      }
    }
  ]
};

// DOM Elements
const views = {
  hero: document.getElementById('view-hero'),
  projects: document.getElementById('view-projects'),
  projectDetail: document.getElementById('view-project-detail'),
  concepts: document.getElementById('view-concepts'),
  conceptDetail: document.getElementById('view-concept-detail'),
  contact: document.getElementById('view-contact')
};

const navBtns = {
  brand: document.getElementById('brand-btn'),
  home: document.getElementById('nav-home-btn'),
  projects: document.getElementById('nav-projects-btn'),
  concepts: document.getElementById('nav-concepts-btn'),
  contact: document.getElementById('nav-contact-btn')
};

// Routing & View Management
function switchView(viewName, dataId = null) {
  // Update persistent Navigation active states
  Object.values(navBtns).forEach(btn => btn && btn.classList.remove('active'));

  if (viewName === 'hero') {
    if (navBtns.home) navBtns.home.classList.add('active');
  } else if (viewName === 'projects' || viewName === 'projectDetail') {
    if (navBtns.projects) navBtns.projects.classList.add('active');
  } else if (viewName === 'concepts' || viewName === 'conceptDetail') {
    if (navBtns.concepts) navBtns.concepts.classList.add('active');
  } else if (viewName === 'contact') {
    if (navBtns.contact) navBtns.contact.classList.add('active');
  }

  // Hide all views
  Object.values(views).forEach(view => {
    if (view) {
      view.classList.remove('active-view');
      view.style.display = 'none';
    }
  });

  // Render & show target view
  if (viewName === 'projectDetail') {
    renderProjectDetail(dataId);
    if (views.projectDetail) {
      views.projectDetail.style.display = 'block';
      views.projectDetail.classList.add('active-view');
    }
  } else if (viewName === 'conceptDetail') {
    renderConceptDetail(dataId);
    if (views.conceptDetail) {
      views.conceptDetail.style.display = 'block';
      views.conceptDetail.classList.add('active-view');
    }
  } else if (views[viewName]) {
    views[viewName].style.display = 'block';
    views[viewName].classList.add('active-view');
  }

  // Scroll to top of content smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Dedicated Project Page (Sub sub page)
// 1. Image, 2. Name in large text, 3. Introduction, 4. Technical Details & Approach, 5. References & Links
function renderProjectDetail(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId) || portfolioData.projects[0];
  const container = document.getElementById('project-detail-content');
  if (!container) return;

  const d = project.detail;

  container.innerHTML = `
    <!-- 1. Image of the project -->
    <div class="detail-main-image-container">
      <img src="${d.image}" alt="${d.name}" class="detail-main-image">
    </div>

    <!-- 2. Name of the project in large text -->
    <h1 class="detail-title">${d.name}</h1>

    <!-- 3. Introduction -->
    <div class="detail-intro-section">
      <h2 class="section-subheading">Introduction</h2>
      <p class="detail-text">${d.introduction}</p>
    </div>

    <!-- 4. Technical Details & Approach -->
    <div class="detail-more-text-section">
      <h2 class="section-subheading">Technical Details &amp; Approach</h2>
      <p class="detail-more-text">${d.moreText}</p>
    </div>

    <!-- 5. References and links -->
    <div class="detail-references-section">
      <h2 class="section-subheading">References &amp; Links</h2>
      <ul class="references-list">
        ${d.references.map(ref => `
          <li class="reference-item">
            <span style="color: var(--accent-cyan);">&#8250;</span>
            <a href="${ref.url}" class="reference-link" target="_blank" rel="noopener noreferrer">${ref.title} &rarr;</a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

// Render Dedicated Concept Page (Sub sub page)
// 1. Image, 2. Name in large text, 3. Introduction, 4. Inspiration, 5. Technical Details & Approach, 6. References & Links
function renderConceptDetail(conceptId) {
  const concept = portfolioData.concepts.find(c => c.id === conceptId) || portfolioData.concepts[0];
  const container = document.getElementById('concept-detail-content');
  if (!container) return;

  const d = concept.detail;

  container.innerHTML = `
    <!-- 1. Image of the concept -->
    <div class="detail-main-image-container">
      <img src="${d.image}" alt="${d.name}" class="detail-main-image">
    </div>

    <!-- 2. Name of the concept in large text -->
    <h1 class="detail-title">${d.name}</h1>

    <!-- 3. Introduction -->
    <div class="detail-intro-section">
      <h2 class="section-subheading">Introduction</h2>
      <p class="detail-text">${d.introduction}</p>
    </div>

    <!-- 4. Inspiration -->
    <div class="detail-inspiration-section">
      <h2 class="section-subheading">Inspiration</h2>
      <p class="inspiration-text-top">${d.inspiration.textTop}</p>
      <div class="inspiration-image-container">
        <img src="${d.inspiration.image}" alt="Concept Inspiration Diagram" class="inspiration-image">
      </div>
      ${d.inspiration.textBottom ? `<p class="inspiration-text-bottom">${d.inspiration.textBottom}</p>` : ''}
    </div>

    <!-- 5. Technical Details & Approach -->
    <div class="detail-more-text-section">
      <h2 class="section-subheading">Technical Details &amp; Approach</h2>
      <div class="detail-more-text">${d.moreText}</div>
    </div>

    <!-- 6. References and links -->
    <div class="detail-references-section">
      <h2 class="section-subheading">References &amp; Links</h2>
      <ul class="references-list">
        ${d.references.map(ref => `
          <li class="reference-item">
            <span style="color: var(--accent-cyan);">&#8250;</span>
            ${ref.url && ref.url !== '#' 
              ? `<a href="${ref.url}" class="reference-link" target="_blank" rel="noopener noreferrer">${ref.title} &rarr;</a>`
              : `<span class="reference-text">${ref.title}</span>`}
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

// Render Scrollable Project Cards
function renderProjectCards() {
  const track = document.getElementById('projects-cards-track');
  if (!track) return;

  track.innerHTML = portfolioData.projects.map(proj => `
    <article class="content-card" onclick="navigateTo('project/${proj.id}')">
      <div class="card-media">
        <img src="${proj.cardImage}" alt="${proj.name}" loading="lazy">
      </div>
      <div class="card-content">
        <h3 class="card-title">${proj.name}</h3>
        <div class="card-cta">
          <span>explore more</span>
          <span>&rarr;</span>
        </div>
      </div>
    </article>
  `).join('');
}

// Render Scrollable Concept Cards
function renderConceptCards() {
  const track = document.getElementById('concepts-cards-track');
  if (!track) return;

  track.innerHTML = portfolioData.concepts.map(concept => `
    <article class="content-card" onclick="navigateTo('concept/${concept.id}')">
      <div class="card-media card-media--contain">
        <img src="${concept.cardImage}" alt="${concept.name}" loading="lazy">
      </div>
      <div class="card-content">
        <h3 class="card-title">${concept.name}</h3>
        <div class="card-cta">
          <span>explore more</span>
          <span>&rarr;</span>
        </div>
      </div>
    </article>
  `).join('');
}

// Setup Carousel Scroll Controls (one by one scrollable)
function setupCarousel(trackId, prevBtnId, nextBtnId) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  if (!track) return;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const card = track.querySelector('.content-card');
      const step = card ? card.offsetWidth + 32 : 400;
      track.scrollBy({ left: -step, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const card = track.querySelector('.content-card');
      const step = card ? card.offsetWidth + 32 : 400;
      track.scrollBy({ left: step, behavior: 'smooth' });
    });
  }
}

// Routing Navigation Helper
function navigateTo(route) {
  window.location.hash = route;
}
window.navigateTo = navigateTo;

function handleHashChange() {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  
  if (!hash || hash === 'hero' || hash === 'home') {
    switchView('hero');
  } else if (hash === 'projects') {
    switchView('projects');
  } else if (hash.startsWith('project/')) {
    const projectId = hash.replace('project/', '');
    switchView('projectDetail', projectId);
  } else if (hash === 'concepts') {
    switchView('concepts');
  } else if (hash.startsWith('concept/')) {
    const conceptId = hash.replace('concept/', '');
    switchView('conceptDetail', conceptId);
  } else if (hash === 'contact') {
    switchView('contact');
  } else {
    switchView('hero');
  }
}

// Form Submission Handler (AJAX via FormSubmit to nitinfromindia4@gmail.com)
window.handleThoughtsSubmit = function (e, form) {
  e.preventDefault();
  const banner = form.querySelector('.form-success-banner');
  const btn = form.querySelector('.form-submit-btn');
  const originalBtnText = btn ? btn.innerHTML : 'Send Thoughts &rarr;';

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = 'Sending...';
  }

  const formData = new FormData(form);

  fetch('https://formsubmit.co/ajax/nitinfromindia4@gmail.com', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
    .then(response => {
      if (!response.ok) throw new Error('Submission failed');
      return response.json();
    })
    .then(data => {
      if (banner) {
        banner.textContent = 'Thank you! Your message has been sent to Nitin.';
        banner.style.display = 'block';
      }
      form.reset();
      setTimeout(() => {
        if (banner) banner.style.display = 'none';
      }, 6000);
    })
    .catch(err => {
      form.submit();
    })
    .finally(() => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalBtnText;
      }
    });
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Setup Navbar Button Handlers
  if (navBtns.brand) {
    navBtns.brand.addEventListener('click', () => navigateTo('home'));
  }
  if (navBtns.home) {
    navBtns.home.addEventListener('click', () => navigateTo('home'));
  }
  if (navBtns.projects) {
    navBtns.projects.addEventListener('click', () => navigateTo('projects'));
  }
  if (navBtns.concepts) {
    navBtns.concepts.addEventListener('click', () => navigateTo('concepts'));
  }
  if (navBtns.contact) {
    navBtns.contact.addEventListener('click', () => navigateTo('contact'));
  }

  // Render initial cards
  renderProjectCards();
  renderConceptCards();

  // Setup Carousel buttons
  setupCarousel('projects-cards-track', 'proj-prev-btn', 'proj-next-btn');
  setupCarousel('concepts-cards-track', 'concept-prev-btn', 'concept-next-btn');

  // Listen for hash navigation & trigger initial route
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
});
