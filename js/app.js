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
      tag: 'System Architecture',
      name: 'Project Alpha // Autonomous Minimal Engine',
      summary: 'A minimalist computing canvas built for zero-latency visual interactions and high-performance agentic workflows.',
      cardImage: 'images/project-placeholder-hero.svg',
      detail: {
        image: 'images/project-placeholder-hero.svg',
        name: 'Project Alpha: Autonomous Minimal Engine',
        introduction: 'Project Alpha explores the boundary between ultra-lightweight web primitives and high-responsiveness interaction paradigms. Created with a strict focus on minimalism, it eliminates framework overhead to deliver an uncompromised user experience.',
        inspiration: {
          textTop: 'The motivation for Project Alpha originated from the growing weight and unnecessary complexity found across modern digital software. Inspired by Swiss graphic design traditions and early computing consoles, the goal was to strip away every non-essential layer and elevate raw clarity.',
          image: 'images/project-inspiration.svg',
          textBottom: 'By harmonizing mathematical geometry with purposeful negative space, the interface achieves structural tranquility while maintaining immediate tactile feedback on every interaction.'
        },
        moreText: 'Architecturally, the engine operates on native browser primitives without external dependencies. State transitions are coordinated through declarative hash routing and hardware-accelerated transforms, guaranteeing instantaneous frame dispatch and zero runtime overhead.',
        references: [
          { title: 'Minimalist Interface Principles & System Guidelines', url: '#' },
          { title: 'W3C Web Standards & High Frame-Rate Rendering', url: '#' },
          { title: 'Repository & Architecture Documentation', url: '#' }
        ]
      }
    },
    {
      id: 'project-beta',
      tag: 'Interactive System',
      name: 'Project Beta // Geometric Interface Sandbox',
      summary: 'An isometric exploration playground analyzing user responsiveness through minimal geometric spatial cues.',
      cardImage: 'images/project-2.svg',
      detail: {
        image: 'images/project-2.svg',
        name: 'Project Beta: Geometric Interface Sandbox',
        introduction: 'Project Beta investigates procedural spatial projection inside standard viewport constraints, offering a tactile playground for minimalist data navigation.',
        inspiration: {
          textTop: 'Drawing inspiration from isometric drafting and architectural axonometrics, this project seeks to represent multidimensional hierarchies with clean vector silhouettes.',
          image: 'images/project-inspiration.svg',
          textBottom: 'The result is an organic bridge between digital abstractions and clean, physical intuition.'
        },
        moreText: 'Through continuous micro-benchmarking, the system renders thousands of coordinates effortlessly, ensuring buttery 60 FPS feedback across all display devices.',
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
      tag: 'Mental Model',
      name: 'Concept 01 // Cognitive Architecture',
      summary: 'A conceptual framework mapping interconnected thought models to clean spatial interfaces.',
      cardImage: 'images/concept-placeholder-hero.svg',
      detail: {
        image: 'images/concept-placeholder-hero.svg',
        name: 'Concept 01: Cognitive Architecture',
        introduction: 'Cognitive Architecture posits that human-computer interaction should mirror internal cognitive flow: reducing sensory distraction and highlighting pure conceptual relationships.',
        inspiration: {
          textTop: 'Inspired by neural network topologies and natural constellation dynamics, Concept 01 removes the artificial fragmentation of menus in favor of unified relational networks.',
          image: 'images/concept-inspiration.svg',
          textBottom: 'Observing how the human mind associates nodes through spatial intuition led directly to the concentric focus model demonstrated here.'
        },
        moreText: 'In practice, this mental model replaces deep hierarchical silos with fluid contextual layers. Information is surfaced only when intentional focus is applied, maintaining an uncluttered cognitive workspace.',
        references: [
          { title: 'Cognitive Load Theory and Minimalist Information Design', url: '#' },
          { title: 'Relational Graph Interfaces in Ambient Computing', url: '#' },
          { title: 'Human Factors & Intentional User Experience Studies', url: '#' }
        ]
      }
    },
    {
      id: 'concept-harmonics',
      tag: 'Wave Theory',
      name: 'Concept 02 // Waveform Harmonics',
      summary: 'Investigating rhythmic visual cadences and frequency modulation in user interface timing.',
      cardImage: 'images/concept-2.svg',
      detail: {
        image: 'images/concept-2.svg',
        name: 'Concept 02: Waveform Harmonics',
        introduction: 'This concept applies harmonic wave equations to interface state transitions, yielding motion curves that feel physically authentic and effortless.',
        inspiration: {
          textTop: 'Inspired by acoustic standing waves and electromagnetic oscillations, this study investigates how natural frequencies foster intuitive user resonance.',
          image: 'images/concept-inspiration.svg',
          textBottom: 'Applying trigonometric damping to layout dynamics eliminates the artificial stiffness typical of standard ease transitions.'
        },
        moreText: 'Harmonic physics calculations are applied directly via requestAnimationFrame, allowing micro-interactions to naturally adapt to the user’s gesture velocity.',
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
  projects: document.getElementById('nav-projects-btn'),
  concepts: document.getElementById('nav-concepts-btn'),
  contact: document.getElementById('nav-contact-btn')
};

// Routing & View Management
function switchView(viewName, dataId = null) {
  // Update persistent Navigation active states
  Object.values(navBtns).forEach(btn => btn && btn.classList.remove('active'));

  if (viewName === 'projects' || viewName === 'projectDetail') {
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
    <div class="detail-intro-block">
      <p class="detail-intro-text">${d.introduction}</p>
    </div>

    <!-- 4. Inspiration { Text, Image, Text } -->
    <div class="detail-inspiration-section">
      <h2 class="inspiration-heading">Inspiration</h2>
      <p class="inspiration-text-top">${d.inspiration.textTop}</p>
      <div class="inspiration-image-container">
        <img src="${d.inspiration.image}" alt="Inspiration Diagram" class="inspiration-image">
      </div>
      <p class="inspiration-text-bottom">${d.inspiration.textBottom}</p>
    </div>

    <!-- 5. More text -->
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

    <!-- 7. Contact details (write your thoughts) -->
    <div class="detail-contact-section">
      <h2 class="contact-section-title">Contact Details</h2>
      <p class="contact-section-subtitle">Have inquiries or feedback about this project? Share your thoughts below.</p>
      
      <div class="contact-info-strip">
        <div class="contact-info-item">
          <span class="contact-info-label">Direct Email</span>
          <span class="contact-info-value">portfolio.contact@domain.com</span>
        </div>
        <div class="contact-info-item">
          <span class="contact-info-label">Status</span>
          <span class="contact-info-value">Open to collaborations &amp; ideas</span>
        </div>
      </div>

      <form class="thoughts-form" onsubmit="handleThoughtsSubmit(event, this)">
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input type="text" required class="form-input" placeholder="e.g. Alex Morgan">
        </div>
        <div class="form-group">
          <label class="form-label">Your Contact / Email</label>
          <input type="email" required class="form-input" placeholder="e.g. alex@example.com">
        </div>
        <div class="form-group">
          <label class="form-label">Write Your Thoughts</label>
          <textarea required class="form-textarea" placeholder="Write your thoughts, feedback, or ideas here..."></textarea>
        </div>
        <button type="submit" class="form-submit-btn">Send Thoughts &rarr;</button>
        <div class="form-success-banner">Thank you! Your thoughts have been received.</div>
      </form>
    </div>
  `;
}

// Render Dedicated Concept Page (Sub sub page)
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
    <div class="detail-intro-block">
      <p class="detail-intro-text">${d.introduction}</p>
    </div>

    <!-- 4. Inspiration { Text, Image, Text } -->
    <div class="detail-inspiration-section">
      <h2 class="inspiration-heading">Inspiration</h2>
      <p class="inspiration-text-top">${d.inspiration.textTop}</p>
      <div class="inspiration-image-container">
        <img src="${d.inspiration.image}" alt="Concept Inspiration Diagram" class="inspiration-image">
      </div>
      <p class="inspiration-text-bottom">${d.inspiration.textBottom}</p>
    </div>

    <!-- 5. More text -->
    <div class="detail-more-text-section">
      <h2 class="section-subheading">Conceptual Depth &amp; Implications</h2>
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

    <!-- 7. Contact details (write your thoughts) -->
    <div class="detail-contact-section">
      <h2 class="contact-section-title">Contact Details</h2>
      <p class="contact-section-subtitle">Interested in discussing or refining this concept? Write your thoughts below.</p>
      
      <div class="contact-info-strip">
        <div class="contact-info-item">
          <span class="contact-info-label">Direct Email</span>
          <span class="contact-info-value">portfolio.contact@domain.com</span>
        </div>
        <div class="contact-info-item">
          <span class="contact-info-label">Dialogue Status</span>
          <span class="contact-info-value">Active research &amp; inquiry</span>
        </div>
      </div>

      <form class="thoughts-form" onsubmit="handleThoughtsSubmit(event, this)">
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input type="text" required class="form-input" placeholder="e.g. Robin Lee">
        </div>
        <div class="form-group">
          <label class="form-label">Your Contact / Email</label>
          <input type="email" required class="form-input" placeholder="e.g. robin@example.com">
        </div>
        <div class="form-group">
          <label class="form-label">Write Your Thoughts</label>
          <textarea required class="form-textarea" placeholder="Write your thoughts, suggestions, or perspective..."></textarea>
        </div>
        <button type="submit" class="form-submit-btn">Send Thoughts &rarr;</button>
        <div class="form-success-banner">Thank you! Your thoughts have been received.</div>
      </form>
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
        <span class="card-tag">${proj.tag}</span>
        <h3 class="card-title">${proj.name}</h3>
        <p class="card-summary">${proj.summary}</p>
        <div class="card-cta">
          <span>Explore Dedicated Page</span>
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
        <span class="card-tag">${concept.tag}</span>
        <h3 class="card-title">${concept.name}</h3>
        <p class="card-summary">${concept.summary}</p>
        <div class="card-cta">
          <span>Explore Dedicated Page</span>
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
    navBtns.brand.addEventListener('click', () => navigateTo('hero'));
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
