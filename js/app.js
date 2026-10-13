/**
 * PORTFOLIO APPLICATION CORE SCRIPT
 * Manages view routing, scrollable card carousels, and dynamic page rendering.
 * Navigation bar & outer shell remain persistent.
 */

// Data Store for Projects and Concepts
const portfolioData = {
  projects: [
    {
      id: 'placeholder-project',
      name: 'Project Alpha',
      cardImage: 'images/project-placeholder-hero.svg',
      detail: {
        image: 'images/project-placeholder-hero.svg',
        name: 'Project Alpha',
        introduction: 'A minimalist architecture engineered for instantaneous feedback and lightweight execution.',
        moreText: 'The system operates on native browser primitives without external dependencies. State transitions are coordinated through declarative hash routing and hardware-accelerated transforms to ensure fluid high-framerate execution.',
        references: [
          { title: 'Minimalist Interface Principles & System Guidelines', url: '#' },
          { title: 'W3C Web Standards & High Frame-Rate Rendering', url: '#' },
          { title: 'Repository & Architecture Documentation', url: '#' }
        ]
      }
    },
    {
      id: 'project-beta',
      name: 'Project Beta',
      cardImage: 'images/project-2.svg',
      detail: {
        image: 'images/project-2.svg',
        name: 'Project Beta',
        introduction: 'An exploration of spatial coordinate projection and minimal geometric silhouettes.',
        moreText: 'Coordinate calculations are evaluated directly within the viewport canvas, maintaining zero layout recalculation overhead and fluid responsiveness across displays.',
        references: [
          { title: 'Axonometric Projections in Modern Web Interfaces', url: '#' },
          { title: 'Interactive Vector Kinematics Case Study', url: '#' }
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

<h3 class="detail-subheading">Powering the Swarm: Dual-Plexing</h3>
<p>At the micro-scale, conventional chemical batteries are completely impractical due to volume constraints, weight, and cycle degradation. Microbots carry no internal batteries. Instead, they operate completely battery-free by drawing energy from an external oscillating magnetic field via electromagnetic induction.</p>
<p>To prevent interference between power reception and mechanical bonding, the system uses a synchronized control strategy called <strong>dual-plexing</strong>(this is still very imature and needs further development):</p>
<ul class="detail-list">
  <li>For most structure lets say a triangular plate made by these microbots, It is not necessary every bot has to participate in structure formation. microbots use turn based mechanism, first a group of few bots disengage their actuation to harvest energy, while the other bots hold the structure together, then the bots swap, In this way bots act in unison to keep the structure stable, and as for bots that are in critical positions that they cannot disengage their actuation, other bots can simply supply their energy to these bots via communication pads.</li>
</ul>

<h3 class="detail-subheading">Overcoming Energy Limits: The Supercapacitor Breakthrough</h3>
<p>In my initial design version, I calculated the energy storage of a conventional parallel-plate capacitor with high-permittivity barium titanate (BaTiO<sub>3</sub>, &epsilon;<sub>r</sub> = 10,000). At microscopic dimensions (0.5&nbsp;mm cube), the capacitance was just 44.25&nbsp;pF. Even assuming an extreme voltage of 200&nbsp;V—which I think will certainly cause electric arcing and dielectric breakdown at this scale—the stored energy was only ~885&nbsp;nJ, which is far too low to power actuation coils.</p>
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
      id: 'mobius-law',
      name: 'The Möbius Law: Phase-Difference Framing of Multi-Twisted Strips',
      cardImage: 'images/mobius_law_diagram.jpeg',
      detail: {
        image: 'images/mobius_law_diagram.jpeg',
        name: 'The M&ouml;bius Law: Phase-Difference Framing of Multi-Twisted Strips',
        introduction: `The M&ouml;bius Law is a personal topological discovery framing the behavior of multi-twisted strips under centerline cutting through phase differences (<em>n&pi;</em>).<br><br>While experimenting hands-on with paper strips twisted by multiples of &pi; before joining their ends into closed bands, I noticed a striking, strict parity rule governing what happens when you cut the loop down its centerline. Framing the physical half-twists as a phase difference between the same plane at each end transformed an otherwise confusing geometric puzzle into an elegant, memorable mathematical principle.`,
        inspiration: {
          textTop: `This concept emerged from tactile mathematical curiosity&mdash;taking scissors, paper, and tape to explore spatial topology from first principles. I wanted to see what happens when you generalize beyond the classic single-twist M&ouml;bius strip into arbitrary multi-twist loops, cataloging the resulting topologies systematically.`,
          image: 'images/mobius_law_diagram.jpeg',
          textBottom: `By tracing centerline paths with a pencil before cutting, a profound topological truth revealed itself: one-sided surfaces possess a single continuous boundary curve of double length, whereas two-sided surfaces possess two distinct boundaries. The physical cut simply exposes the underlying boundary geometry.`
        },
        moreText: `<h3 class="detail-subheading">Setup and Definitions</h3>
<p>Consider a continuous strip of paper. Before joining its two ends into a closed band, rotate one end by an angle that is an integer multiple of &pi; (180&deg;):</p>
<ul class="detail-list">
  <li>Define this rotation as the <strong>phase difference</strong>, <em>n&pi;</em>, where <em>n</em> is a non-negative integer representing the number of half-twists.</li>
  <li><em>n</em> = 0 corresponds to an ordinary, untwisted cylindrical loop.</li>
  <li><em>n</em> = 1 corresponds to the canonical M&ouml;bius strip (single half-twist, phase &pi;).</li>
  <li>Glue the ends together to form a closed band, and execute a continuous longitudinal cut along its exact centerline.</li>
</ul>

<h3 class="detail-subheading">Statement of the Law</h3>
<p>Given a closed band formed with phase difference <em>n&pi;</em>, cutting it along its centerline produces:</p>
<div class="detail-formula">
  If n is even &rArr; 2 separate strips, each with phase difference n&pi;, linked together (interlocked n/2 times)<br><br>
  If n is odd &rArr; 1 single strip, twice the original length, with phase difference 2(n + 1)&pi;
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
      id: 'opto-acoustic',
      name: 'Opto-Acoustic Modulation: Mid-Air Volumetric Display',
      cardImage: 'images/opto_acoustic_diagram1.png',
      detail: {
        image: 'images/opto_acoustic_diagram2.png',
        name: 'Opto-Acoustic Modulation: Mid-Air Volumetric Display via Ultrasonic Refractive-Index Gradients',
        introduction: `Opto-Acoustic Modulation is a theoretical and quantitative physics investigation into synthesizing true free-space 3D voxels in empty ambient air&mdash;without projection screens, fog, mist, or head-mounted headsets.<br><br>By directing ultrasonic acoustic waves from phased transducer arrays to interfere constructively at precise 3D spatial coordinates, localized pockets of high and low air density are synthesized in room air. Because air's optical refractive index scales directly with density via the Gladstone&ndash;Dale relation, each acoustic interference node acts as a transient, lens-like gradient-index optical element. A synchronized, phase-locked laser pulse fired through the node is refracted toward an observer's pupil, producing the perception of an isolated luminous voxel floating in mid-air.`,
        inspiration: {
          textTop: `Another piece of science fiction that deeply captivated me was the interactive, walk-around 3D holographic workspace shown in Marvel films, archetype-exemplified by Tony Stark. Luminous, full-color diagrams hovering freely in room air that multiple people can view and manipulate from any angle without wearing bulky glasses.`,
          image: 'images/opto_acoustic_inspiration.png',
          textBottom: `Moving from cinematic sci-fi to real physics poses a brutal question: how do you create a &ldquo;pixel in thin air&rdquo; out of nothing? Light bends when transitioning between media of differing optical densities (refraction). Sound waves are travelling regions of compressed and rarefied air. Realizing that localized ultrasonic interference could sculpt density gradients in ambient air was my eureka moment&mdash;which I later discovered aligns with the deep-tech field of acousto-optics.`
        },
        moreText: `<h3 class="detail-subheading">Physical Mechanism: Wave Interference &amp; Density Modulation</h3>
<p>When two directional, phase-controlled ultrasonic beams superpose at an angle in open space, their acoustic pressure fields form a stationary interference pattern:</p>
<div class="detail-formula">p(x,t) = p<sub>a</sub> cos(kx &minus; &omega;t) + p<sub>a</sub> cos(kx + &omega;t) = 2p<sub>a</sub> cos(kx) cos(&omega;t)</div>
<p>At constructive antinodes, acoustic density oscillates with twice the single-wave amplitude, creating a periodic spatial lattice of steep density gradients &nabla;&rho; and matching refractive-index gradients &nabla;n.</p>

<div style="margin: 2rem 0; text-align: center;">
  <img src="images/opto_acoustic_diagram1.png" alt="Geometric representation of ultrasonic wave interference" style="width: 100%; max-width: 760px; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: #ffffff; padding: 1rem;">
  <p style="font-size: 0.9rem; color: var(--text-dim); margin-top: 0.75rem;">Figure: Geometric wave interference between two directional ultrasonic sources creating localized compression lattices in ambient air.</p>
</div>

<h3 class="detail-subheading">The Piezo-Optic Chain in Ambient Air</h3>
<p>Under adiabatic acoustic conditions, the density perturbation is governed by:</p>
<div class="detail-formula">&delta;&rho; = p / c<sup>2</sup> &emsp;(where c &approx; 343 m/s in air at 20 &deg;C)</div>
<p>The optical refractive index of a gas tracks density according to the <strong>Gladstone&ndash;Dale relation</strong>:</p>
<div class="detail-formula">n &minus; 1 = K &middot; &rho;, &emsp; where K &approx; 2.31 &times; 10<sup>&minus;4</sup> m<sup>3</sup>/kg (for air at 532 nm)</div>
<p>Combining these expressions yields the fundamental <em>piezo-optic coefficient</em> of ambient air:</p>
<div class="detail-formula">&delta;n / p = K / c<sup>2</sup> &approx; 1.96 &times; 10<sup>&minus;9</sup> Pa<sup>&minus;1</sup></div>
<p>Across an acoustic focal interaction length <em>L</em> &approx; &Lambda; (the acoustic wavelength, ~8.6 mm at 40 kHz), the total angular deflection experienced by a ray simplifies to an extraordinarily clean relation:</p>
<div class="detail-formula">&theta; &approx; 2&pi; &middot; &delta;n &emsp;(radians)</div>

<h3 class="detail-subheading">Quantitative Feasibility: Theory vs. Real Hardware</h3>
<p>Evaluating the physics against state-of-the-art ultrasonic phased arrays reveals the decisive physical constraints of the concept:</p>
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
      <tr><th>150 dB (256-Element Array)</th><td>~894 Pa</td><td>6.3 &times; 10<sup>&minus;3</sup></td><td>1.8 &times; 10<sup>&minus;6</sup></td><td>11 &mu;rad</td><td>0.18 rad</td></tr>
      <tr><th>160 dB (Acoustic Levitation)</th><td>~2.8 kPa</td><td>2.0 &times; 10<sup>&minus;2</sup></td><td>5.5 &times; 10<sup>&minus;6</sup></td><td>35 &mu;rad</td><td>0.56 rad</td></tr>
      <tr><th>165 dB (Peak Resonant Focus)</th><td>~5.0 kPa</td><td>3.5 &times; 10<sup>&minus;2</sup></td><td>9.8 &times; 10<sup>&minus;6</sup></td><td>62 &mu;rad</td><td>1.0 rad</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">The Decisive Barriers &amp; Hard Physical Ceilings</h3>
<ul class="detail-list">
  <li><strong>Deflection Deficit:</strong> Modern ultrasonic phased arrays reach 150&ndash;165 dB, producing angular deflections of only 10&ndash;62 &mu;rad (~0.003&deg;). Redirecting light by even a modest 1&deg; toward an off-axis viewer requires &delta;n &gtrsim; 10<sup>&minus;4</sup>, demanding sound pressure levels exceeding 190 dB (in the regime of acoustic shockwaves).</li>
  <li><strong>Fundamental Density Ceiling:</strong> Since gas density cannot be modulated by more than 100% of its base value, an absolute theoretical upper bound exists: |&delta;n| &le; n<sub>0</sub> &minus; 1 &approx; 2.8 &times; 10<sup>&minus;4</sup> in standard atmospheric air.</li>
  <li><strong>Stroboscopic Laser Timing:</strong> At 40 kHz, density oscillates with a 25 &mu;s period. Continuous-wave lasers integrate over both compression and rarefaction, canceling the net deflection. The system must operate stroboscopically, firing sub-microsecond laser pulses precisely synchronized with peak compression (t<sub>fire</sub>).</li>
</ul>

<h3 class="detail-subheading">System Control Architecture</h3>
<p>To address 3D space dynamically, the system integrates a three-layer pipeline:</p>
<ul class="detail-list">
  <li><strong>Host Computer:</strong> 3D voxelizer and spatial scheduler computing target coordinates and running GS-PAT iterative acoustic hologram solvers (>10,000 phase updates/sec on modern GPUs).</li>
  <li><strong>FPGA Real-Time Driver:</strong> Synthesizes multichannel transducer phases with nanosecond jitter while issuing microsecond-accurate triggers to the laser source.</li>
  <li><strong>Closed-Loop Eye Tracking:</strong> High-speed cameras track observer eye positions in real time, adjusting beam entry angles so refracted rays enter the pupil.</li>
</ul>

<h3 class="detail-subheading">Potential Applications</h3>
<ul class="detail-list">
  <li><strong>Engineering CAD &amp; Spatial Prototyping:</strong> Inspecting volumetric 3D models in mid-air with genuine depth perception and zero vergence-accommodation conflict.</li>
  <li><strong>Interactive Medical Imaging:</strong> Floating CT/MRI reconstructions for surgical planning without contaminating sterile fields.</li>
  <li><strong>Collaborative Telepresence:</strong> Shared mid-air visualizations visible to multiple participants in meeting environments.</li>
</ul>`,
        references: [
          { title: 'Nitinkumar Vishwakarma, "Mid-Air Volumetric Display via Ultrasonically Induced Refractive-Index Gradients: Concept, Quantitative Feasibility, and Limitations of Opto-Acoustic Modulation in Free Air" (2026)', url: '#' },
          { title: 'Y. Schrödel et al., "Acousto-optic modulation of gigawatt-scale laser pulses in ambient air," Nature Photonics, 18, 54–59 (2024)', url: '#' },
          { title: 'R. Hirayama et al., "A volumetric display for visual, tactile and audio presentation using acoustic levitation," Nature, 575, 320–323 (2019)', url: '#' },
          { title: 'Research paper DOI and formal preprint link will be updated soon', url: '#' }
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
        introduction: `Photon Rocket Propulsion is a theoretical astronautics concept investigating beamed radiation and matter&ndash;antimatter annihilation to eliminate the exponential fuel-mass penalties of the classical rocket equation for interstellar journeys.<br><br>Chemical and conventional fission rockets hit an impenetrable barrier over interstellar distances: propellant mass. To accelerate a starship to even a modest fraction of light speed within a human-relevant timeframe, the required chemical propellant mass exceeds the mass of the observable universe. A photon rocket bypasses this dilemma by expelling massless photons (<em>p = E/c</em>) as pure reaction mass&mdash;trading carried propellant mass for astronomical continuous power generation.`,
        inspiration: {
          textTop: `Humanity's ambition to cross the interstellar void and reach Proxima Centauri (4.246 light-years away) within a single generation requires fundamentally rethinking propulsion physics. The starting question: what if a starship carried zero reaction mass and pushed against the universe solely with directed electromagnetic radiation?`,
          image: 'images/photon_rocket_power_options.jpeg',
          textBottom: `Because each individual photon carries a tiny fraction of momentum (<em>p = E/c</em>), generating practical acceleration demands staggering continuous power&mdash;shifting the challenge from mass-ratio logistics to terawatt-scale optical engineering and continuous antimatter synthesis.`
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

<h3 class="detail-subheading">Relativistic Kinematics &amp; Open Bottlenecks</h3>
<ul class="detail-list">
  <li><strong>Relativistic Velocity:</strong> Midpoint peak velocity reaches v = a &middot; (t/2) &approx; 1.27 &times; 10<sup>8</sup> m/s &approx; <strong>0.42c</strong>. At 42% the speed of light, time dilation, relativistic mass dilation, and Lorentz contractions necessitate full relativistic rocket equations rather than classical Newtonian approximations.</li>
  <li><strong>TW-Scale Collimation &amp; Mirror Survivability:</strong> Annihilation gamma rays emit isotropically. Collimating terawatts of gamma radiation into a narrow unidirectional beam without mirror ablation or thermal vaporization remains an unsolved materials challenge.</li>
  <li><strong>Radiative Waste Heat Rejection:</strong> In the hard vacuum of deep space, even a 0.01% inefficiency in a 12 TW powertrain produces gigawatts of waste heat that can only be discarded through radiative surface panels.</li>
</ul>`,
        references: [
          { title: 'E. Sänger, "The Theory of Photon Rockets," Ingenieur-Archiv, 21, 213 (1953)', url: '#' },
          { title: 'R. Frisbee, "How to Build an Antimatter Rocket for Interstellar Missions," AIAA Paper 2003-4696', url: '#' },
          { title: 'P. Gilster, "Antimatter Propulsion: Birth of a Concept," Centauri Dreams (2016)', url: '#' },
          { title: 'Research paper DOI and formal mission analysis publication will be updated soon', url: '#' }
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
        introduction: `The Adaptive Thermoregulating Fabric (ATRF) is a smart, active textile engineered to dynamically heat or cool itself, maintaining optimal microclimate comfort for the wearer across extreme environmental swings.<br><br>Unlike conventional passive textiles that merely trap static air pockets, ATRF continuously senses localized skin surface temperatures in real time and actuates solid-state heating or cooling through an embedded mesh of microscopic thermal modules. Constructed as a decentralized two-dimensional array, the garment degrades gracefully under physical trauma: cutting, tearing, or piercing any section only disables local modules in that damaged zone, while the remainder of the garment continues regulating temperature completely uninterrupted.`,
        inspiration: {
          textTop: `Traditional clothing enforces a rigid compromise: bundle up in thick, bulky winter gear and overheat during physical exertion, or wear light garments and risk hypothermia in sudden cold snaps. I envisioned clothing operating like an artificial, active thermoregulatory organ&mdash;a second skin that balances heat flux dynamically.`,
          image: 'images/thermo_fabric_grid.jpeg',
          textBottom: `Conventional wearable heating relies on fragile, continuous wire loops where a single snag or cut breaks the entire circuit. ATRF solves this through architectural fault tolerance: independent, addressable modules linked by flexible serpentine interconnects that maintain system resilience even under severe textile wear.`
        },
        moreText: `<h3 class="detail-subheading">Modular Grid Architecture</h3>
<p>The garment is organized as a 2D mesh of autonomous, solid-state modules interconnected with their immediate cardinal neighbors (North, South, East, West). Because each module is a self-contained sensing and actuation node, the system possesses complete decentralized fault tolerance:</p>
<div class="table-scroll">
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
      <tr><th>Communication Bus</th><td>I2C Addressable Slave Bus</td><td>Shared multidrop bus for localized telemetry polling and command delivery</td></tr>
      <tr><th>Power Distribution</th><td>2-Wire DC Power Rail</td><td>Provides high-efficiency low-voltage power across the interconnected grid</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">Four-Conductor Stretchable Interconnects</h3>
<p>Modules are interconnected through serpentine, stretchable conductive tracks containing four conductors:</p>
<ul class="detail-list">
  <li><strong>Power (+) &amp; Power (&minus;):</strong> DC power routing supporting bidirectional TEC current drive.</li>
  <li><strong>I2C Serial Clock (SCL) &amp; Serial Data (SDA):</strong> High-speed digital communication allowing the master microcontroller to address individual modules.</li>
</ul>
<p>The loose, serpentine routing geometry accommodates natural textile shearing, bending, and stretching without inducing mechanical strain or fatigue fractures in the conductors.</p>

<h3 class="detail-subheading">Three-Layer Fabric Laminate Construction</h3>
<p>The physical fabric is engineered as a functional 3-layer sandwich:</p>
<ul class="detail-list">
  <li><strong>Outer Layer (Top):</strong> Weatherproof, abrasion-resistant, and wind-blocking protective textile shielding the electronics from external elements.</li>
  <li><strong>Inner Layer (Middle):</strong> Flexible, porous, and highly thermally conductive matrix. It physically encapsulates the module grid and wire mesh while allowing air and perspiration to pass freely. Its high lateral thermal conductivity diffuses heat smoothly, eliminating uncomfortable localized hot/cold spots.</li>
  <li><strong>Outer Layer (Bottom):</strong> Soft, breathable, skin-facing textile providing comfortable biometric contact.</li>
</ul>

<h3 class="detail-subheading">Closed-Loop Control &amp; Energy Harvesting</h3>
<p>A master microcontroller continuously executes an adaptive control loop:</p>
<ul class="detail-list">
  <li><strong>Zone-Based Thermal Regulation:</strong> Polling local modules and comparing readings against user comfort setpoints. Actuating specific regions independently (e.g., cooling the lumbar and upper back while warming fingers or extremities).</li>
  <li><strong>Thermoelectric Energy Harvesting (Seebeck Mode):</strong> When external temperatures diverge sharply from body temperature and active regulation is idled, the Peltier junctions run in reverse via the Seebeck effect, scavenging thermal gradients to trickle-charge wearable batteries.</li>
  <li><strong>Biometric Thermal Health Mapping:</strong> The dense grid of hundreds of temperature sensors generates a real-time spatial thermal map of the wearer's body, opening up health telemetry applications such as detecting early fever onset, inflammation, or circulatory constriction.</li>
</ul>

<h3 class="detail-subheading">Open Engineering Questions</h3>
<ul class="detail-list">
  <li><strong>Bus Scaling &amp; Capacitance:</strong> Addressing hundreds of I2C nodes on long flexible garments introduces capacitive bus loading; exploring segmented subnetworks or lightweight single-wire protocols.</li>
  <li><strong>Wearable Battery Life:</strong> Peltier elements exhibit moderate COP (coefficient of performance); smart duty-cycling and phase-change buffer materials will be required to maximize runtime.</li>
  <li><strong>Hermetic Washability:</strong> Micro-encapsulation of silicon dies and elastic conductive traces to endure repeated commercial laundry agitation and detergent exposure.</li>
</ul>`,
        references: [
          { title: 'Adaptive Thermoregulating Fabric (ATRF) — Technical Documentation & Concept Architecture Draft (v0.1)', url: '#' },
          { title: 'Research paper DOI and hardware prototype documentation will be updated soon', url: '#' },
          { title: 'Literature on Wearable Thermoelectric Generators and Stretchable E-Textiles', url: '#' }
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

// Form Submission Handler
window.handleThoughtsSubmit = function (e, form) {
  e.preventDefault();
  const banner = form.querySelector('.form-success-banner');
  const btn = form.querySelector('.form-submit-btn');

  if (btn) btn.disabled = true;
  if (banner) banner.style.display = 'block';

  setTimeout(() => {
    form.reset();
    if (btn) btn.disabled = false;
    setTimeout(() => {
      if (banner) banner.style.display = 'none';
    }, 4000);
  }, 600);
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
