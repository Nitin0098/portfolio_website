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
        moreText: `<p style="margin-bottom: 1.2rem;"><strong>Here are the problems and how I solved it</strong></p><p style="margin-bottom: 1.2rem;"><strong>1. Critical mass</strong><br>Naturally neutrons leak out of the nuclear core, and  in traditional fission reactors we use heavy reflectors and use nuclear fuel of mass greater than critical mass, if it is lower than critical mass, the neutron multiplication factor drops below 1 and the reactor cannot sustain the chain reaction.</p><p style="margin-bottom: 1.2rem;"><strong>How CIRs solve this,</strong><br>Since CIRs fundamentally don't rely on chain reaction, in fact the neutron multiplication factor less than one is intentional, the size of the nuclear fuel is free from critical Mass constraints, allowing us to design the nuclear fuel small  as per our needs.</p><p style="margin-bottom: 1.2rem;"><strong>2. One of the most important factor is safety and here's how this design fixed it.</strong></p><p style="margin-bottom: 1.2rem;">Now this design that I created is comparatively much smaller then traditional Nuclear fission reactor, it can be portable and transported by truck to the places where it is needed, It has potential to power entire building or a group of house in a town using nothing but depleted uranium fuel or other transuranium fuel.</p><p style="margin-bottom: 1.2rem;">While everyone is chasing nuclear fusion, I believe we gravely neglect nuclear fission and it's capabilities, ADS is something we already have and it's just the leap of engineering that is needed to convert them into small(the size of 2-3 SUVs), decentralised , portable, and safe to be set up in towns, buildings without needing multi-million dollars setup or a 50 persons crew just to maintain, now it's obvious the power output will be significantly lower than traditional fission power plants and the power output should be scalable with size as per my calculations.</p><p style="margin-bottom: 1.2rem;">Comparison of CIRs with traditional Nuclear fission reactors</p><p style="margin-bottom: 1.2rem;">Deep overview of the construction:</p>`,
        references: [
          { title: 'https://doi.org/10.5281/zenodo.23281205', url: 'https://doi.org/10.5281/zenodo.23281205' }
        ]
      }
    },
    {
      id: 'concept-harmonics',
      name: 'Concept 02: Waveform Harmonics',
      cardImage: 'images/concept-2.svg',
      detail: {
        image: 'images/concept-2.svg',
        name: 'Concept 02: Waveform Harmonics',
        introduction: 'Applying harmonic wave equations to visual interaction rhythms and cadence.',
        inspiration: {
          textTop: 'Drawing from acoustic standing waves and electromagnetic oscillations to study how natural frequencies foster intuitive interaction.',
          image: 'images/concept-inspiration.svg',
          textBottom: 'Applying trigonometric damping to layout dynamics eliminates artificial stiffness across state transitions.'
        },
        moreText: 'Kinetic calculations run directly within the browser frame cycle, adapting micro-interactions naturally to user input velocity.',
        references: [
          { title: 'Principles of Wave Dynamics & Harmonic Motion', url: '#' },
          { title: 'Kinetic Ergonomics in Modern Software Design', url: '#' }
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
      <p class="detail-more-text">${d.moreText}</p>
    </div>

    <!-- 6. References and links -->
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
      <div class="card-media">
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
