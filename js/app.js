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
      id: 'placeholder-concept',
      name: 'Concept 01: Cognitive Architecture',
      cardImage: 'images/concept-placeholder-hero.svg',
      detail: {
        image: 'images/concept-placeholder-hero.svg',
        name: 'Concept 01: Cognitive Architecture',
        introduction: 'An examination of spatial mental models that prioritize visual focus and relational clarity.',
        inspiration: {
          textTop: 'Inspired by neural network topologies and natural constellation dynamics, exploring unified relational networks.',
          image: 'images/concept-inspiration.svg',
          textBottom: 'Associating nodes through spatial intuition replaces artificial fragmentation with continuous structural harmony.'
        },
        moreText: 'Contextual layers expand upon intentional interaction, maintaining an uncluttered cognitive workspace while preserving immediate access to core functions.',
        references: [
          { title: 'Cognitive Load Theory and Minimalist Information Design', url: '#' },
          { title: 'Relational Graph Interfaces in Ambient Computing', url: '#' },
          { title: 'Human Factors & Intentional User Experience Studies', url: '#' }
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
      <p class="inspiration-text-bottom">${d.inspiration.textBottom}</p>
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
