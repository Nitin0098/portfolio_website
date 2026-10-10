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
  <li><strong>Face-Mounted Electromagnetic Coils (6 Faces):</strong> A planar circular copper coil is fabricated onto each face. These coils serve a dual purpose: passing controllable current produces a magnetic dipole to attract, repel, and move adjacent bots, while unactuated coils wirelessly harvest ambient power from an external oscillating magnetic field.</li>
  <li><strong>Edge Communication &amp; Power Pads:</strong> Four conductive copper contact pads sit on the edges and corners of each face. When bots latch together, these pads form an electrical bus that transmits commands across the swarm and routes energy from exterior bots to central bots supporting high structural loads.</li>
  <li><strong>Internal Supercapacitor Energy Buffer:</strong> Instead of chemical batteries, an internal electrostatic storage element buffers energy harvested from the environment for high-current actuation bursts.</li>
  <li><strong>On-Board Micro-Controller:</strong> A microscopic CMOS logic circuit or microcontroller etched into the core coordinates local timing, communication packets, and coil polarities. When linked together, the swarm can operate as a massively distributed computing processor.</li>
</ul>

<h3 class="detail-subheading">Powering the Swarm: The Harvest-Use Cycle ("Dual-Plexing")</h3>
<p>At the micro-scale, conventional chemical batteries are completely impractical due to volume constraints, weight, and cycle degradation. Microbots carry no internal batteries. Instead, they operate completely battery-free by drawing energy from an external oscillating magnetic field via electromagnetic induction.</p>
<p>To prevent interference between power reception and mechanical bonding, the system uses a synchronized control strategy called <strong>dual-plexing</strong>:</p>
<ul class="detail-list">
  <li><strong>Harvest Phase:</strong> For the majority of each cycle, the coils act as passive inductive pickups, capturing energy from the external magnetic field and storing it into the internal capacitor.</li>
  <li><strong>Actuation Phase:</strong> In brief, millisecond bursts, stored energy discharges into selected coils to generate controlled magnetic attraction or repulsion, repositioning bots and locking bonds.</li>
</ul>

<h3 class="detail-subheading">Overcoming Energy Limits: The Supercapacitor Breakthrough</h3>
<p>In my initial design version, I calculated the energy storage of a conventional parallel-plate capacitor with high-permittivity barium titanate (BaTiO<sub>3</sub>, &epsilon;<sub>r</sub> = 10,000). At microscopic dimensions (0.5&nbsp;mm cube), the capacitance was just 44.25&nbsp;pF. Even assuming an extreme voltage of 200&nbsp;V—which would cause electric arcing and dielectric breakdown at this scale—the stored energy was only ~885&nbsp;nJ, which is far too low to power actuation coils.</p>
<p>To solve this critical bottleneck, I upgraded the internal storage model to <strong>porous activated-carbon supercapacitor technology</strong> (electric double-layer capacitor). With porous carbon electrodes offering huge surface areas (~100–200&nbsp;F/g):</p>
<div class="detail-formula">C = 100 F/g &times; 12.5 &micro;g = 1.25 mF &emsp;&rArr;&emsp; E = &frac12; C V<sup>2</sup> = &frac12; (1.25 &times; 10<sup>&minus;3</sup>) &times; (2.7)<sup>2</sup> &approx; 4.56 mJ</div>
<p>This increases stored energy by over <strong>4,000&times;</strong> (from nanojoules to 4.56&nbsp;mJ) while operating at a safe, realistic voltage of just 2.7&nbsp;V, completely eliminating the need for high-voltage hazards and making electromagnetic actuation physically viable.</p>

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
      <tr><th>Supercapacitor Energy</th><td>~4.56 mJ (at 2.7 V)</td><td>High energy density buffer for multi-millisecond actuation pulses</td></tr>
    </tbody>
  </table>
</div>

<h3 class="detail-subheading">Potential Applications</h3>
<p>Because microbots act as modular building blocks, the range of potential applications spans several frontiers:</p>
<ul class="detail-list">
  <li><strong>Medical Nanorobotics:</strong> Targeted micro-scale drug delivery to diseased cells, non-invasive biopsies, and microsurgical intervention through capillary pathways without open incisions.</li>
  <li><strong>Environmental Remediation:</strong> Dispersible swarms for breaking down micro-pollutants and targeted oil spill absorption in marine environments.</li>
  <li><strong>Precision Micro-Manufacturing:</strong> High-precision pick-and-place assembly of micro-optics and semiconductor packages beyond traditional robotic reach.</li>
  <li><strong>Dynamic Programmable Matter:</strong> Reconfigurable tools and rapid prototyping where material geometry adapts in real time to mechanical demands.</li>
</ul>`,
        references: [
          { title: 'Research paper DOI and formal publication link will be updated soon', url: '#' }
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
