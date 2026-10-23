import { translations } from './data/content.js';

/* ==========================================================================
   APP STATE & INITIALIZATION
   ========================================================================== */
let currentLang = localStorage.getItem('argon_lang') || 'en';
let currentTheme = localStorage.getItem('argon_theme') || 'dark';
let isAnnual = false;
let activeSimTab = 'fintech';
let simLoadFactor = 120;

// Apply initial theme immediately to prevent flashing
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcons(currentTheme);

/* ==========================================================================
   PRELOADER CONTROLLER
   ========================================================================== */
function runPreloader() {
  const counterEl = document.getElementById('preloader-counter');
  const barEl = document.getElementById('preloader-bar');
  const preloaderEl = document.getElementById('preloader');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (counterEl) counterEl.textContent = '100';
      if (barEl) barEl.style.width = '100%';
      setTimeout(() => {
        if (preloaderEl) preloaderEl.classList.add('loaded');
      }, 350);
    } else {
      const formatted = progress < 10 ? `0${progress}` : `${progress}`;
      if (counterEl) counterEl.textContent = formatted;
      if (barEl) barEl.style.width = `${progress}%`;
    }
  }, 40);
}

/* ==========================================================================
   CUSTOM CURSOR
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover detection
  const interactiveSelector = 'a, button, input, select, textarea, .module-card, .case-card, .tier-card, .sim-tab-btn';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ==========================================================================
   HERO CANVAS (PARTICLES & INTERACTIVE MESH)
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const particleCount = Math.min(window.innerWidth < 768 ? 35 : 75, 90);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 1
    });
  }

  let mouseCanvasX = null;
  let mouseCanvasY = null;
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
      mouseCanvasX = e.clientX - rect.left;
      mouseCanvasY = e.clientY - rect.top;
    } else {
      mouseCanvasX = null;
      mouseCanvasY = null;
    }
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const pointColor = isLight ? 'rgba(0, 135, 90, 0.45)' : 'rgba(0, 245, 160, 0.55)';
    const lineColor = isLight ? 'rgba(0, 135, 90, 0.08)' : 'rgba(0, 245, 160, 0.12)';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse subtle pull
      if (mouseCanvasX !== null) {
        const dx = mouseCanvasX - p.x;
        const dy = mouseCanvasY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          p.x += (dx / dist) * 0.4;
          p.y += (dy / dist) * 0.4;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = pointColor;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ==========================================================================
   WAVEFORM TELEMETRY CANVAS
   ========================================================================== */
let waveCanvas, waveCtx;
let wavePhase = 0;

function initWaveformCanvas() {
  waveCanvas = document.getElementById('waveform-canvas');
  if (!waveCanvas) return;
  waveCtx = waveCanvas.getContext('2d');

  function resizeWave() {
    waveCanvas.width = waveCanvas.parentElement.offsetWidth;
    waveCanvas.height = 180;
  }
  resizeWave();
  window.addEventListener('resize', resizeWave);

  function renderWave() {
    if (!waveCtx) return;
    const w = waveCanvas.width;
    const h = waveCanvas.height;
    waveCtx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const strokeColor = isLight ? '#00875A' : '#00F5A0';
    const fillColor = isLight ? 'rgba(0, 135, 90, 0.08)' : 'rgba(0, 245, 160, 0.12)';

    wavePhase += 0.035;
    const freq = (simLoadFactor / 250) * 0.035;
    const amp = 30 + (simLoadFactor / 600) * 35;

    waveCtx.beginPath();
    waveCtx.moveTo(0, h / 2);

    for (let x = 0; x <= w; x += 4) {
      const y = h / 2 + Math.sin(x * freq + wavePhase) * amp * Math.sin(x / w * Math.PI);
      waveCtx.lineTo(x, y);
    }

    waveCtx.strokeStyle = strokeColor;
    waveCtx.lineWidth = 2;
    waveCtx.stroke();

    waveCtx.lineTo(w, h);
    waveCtx.lineTo(0, h);
    waveCtx.closePath();
    waveCtx.fillStyle = fillColor;
    waveCtx.fill();

    requestAnimationFrame(renderWave);
  }
  requestAnimationFrame(renderWave);
}

/* ==========================================================================
   LOCALIZATION & DOM RENDERING
   ========================================================================== */
function renderAllContent() {
  const t = translations[currentLang];
  if (!t) return;

  // Header & Nav
  document.title = currentLang === 'id' 
    ? "Antigravity Argon — Arsitektur Web Berdaulat & Sistem Digital Enterprise"
    : "Antigravity Argon — Sovereign Web Architecture & Enterprise Digital Systems";

  setText('nav-brand-title', t.nav.brand);
  setText('nav-brand-badge', t.nav.badge);
  setText('nav-link-modules', t.nav.modules);
  setText('nav-link-simulator', t.nav.simulator);
  setText('nav-link-cases', t.nav.cases);
  setText('nav-link-process', t.nav.process);
  setText('nav-link-tiers', t.nav.tiers);
  setText('nav-cta-btn', t.nav.cta);
  setText('lang-label', currentLang.toUpperCase() === 'EN' ? 'EN / ID' : 'ID / EN');

  // Hero
  setText('hero-tag-text', t.hero.tag);
  const headlineEl = document.getElementById('hero-headline');
  if (headlineEl) {
    if (currentLang === 'id') {
      headlineEl.innerHTML = `Merancang batas baru <span class="italicized">lanskap digital berdaulat.</span>`;
    } else {
      headlineEl.innerHTML = `Architecting the sovereign <span class="italicized">digital frontier.</span>`;
    }
  }
  setText('hero-subheadline', t.hero.subheadline);
  setText('hero-cta-primary', t.hero.ctaPrimary);
  setText('hero-cta-secondary-text', t.hero.ctaSecondary);
  setText('stat1-val', t.hero.stat1Val);
  setText('stat1-lbl', t.hero.stat1Label);
  setText('stat2-val', t.hero.stat2Val);
  setText('stat2-lbl', t.hero.stat2Label);
  setText('stat3-val', t.hero.stat3Val);
  setText('stat3-lbl', t.hero.stat3Label);
  setText('stat4-val', t.hero.stat4Val);
  setText('stat4-lbl', t.hero.stat4Label);

  // Marquee
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) {
    const doubleList = [...t.marquee, ...t.marquee];
    marqueeTrack.innerHTML = doubleList.map(item => `
      <span class="marquee-item">
        ${escapeHtml(item)}
        <span class="marquee-dot" aria-hidden="true"></span>
      </span>
    `).join('');
  }

  // Mission
  setText('mission-tag', t.mission.tag);
  setText('mission-quote', t.mission.headline);
  setText('mission-col1-title', t.mission.col1Title);
  setText('mission-col1-text', t.mission.col1Text);
  setText('mission-col2-title', t.mission.col2Title);
  setText('mission-col2-text', t.mission.col2Text);

  // Modules
  setText('modules-tag', t.modules.tag);
  setText('modules-title', t.modules.title);
  setText('modules-subtitle', t.modules.subtitle);
  const modulesGrid = document.getElementById('modules-grid');
  if (modulesGrid) {
    modulesGrid.innerHTML = t.modules.items.map(m => `
      <article class="module-card">
        <div>
          <div class="module-top">
            <span class="module-id">${m.id}</span>
            <span class="module-category">${escapeHtml(m.category)}</span>
          </div>
          <h3 class="module-name">${escapeHtml(m.name)}</h3>
          <p class="module-desc">${escapeHtml(m.desc)}</p>
        </div>
        <div class="module-specs">
          <div class="module-spec-item">
            <span class="spec-lbl">Latency</span>
            <span class="spec-val">${m.latency}</span>
          </div>
          <div class="module-spec-item">
            <span class="spec-lbl">Stack</span>
            <span class="spec-val">${m.tech}</span>
          </div>
          <div class="module-spec-item">
            <span class="spec-lbl">Cadence</span>
            <span class="spec-val">${m.cadence}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Simulator
  setText('sim-tag', t.simulator.tag);
  setText('sim-title', t.simulator.title);
  setText('sim-subtitle', t.simulator.subtitle);
  renderSimulatorTabs();
  renderSimulatorContent();

  // Cases
  setText('cases-tag', t.cases.tag);
  setText('cases-title', t.cases.title);
  setText('cases-subtitle', t.cases.subtitle);
  const casesGrid = document.getElementById('cases-grid');
  if (casesGrid) {
    casesGrid.innerHTML = t.cases.items.map(c => `
      <article class="case-card">
        <div>
          <div class="case-card-header">
            <span class="case-code">${c.code}</span>
            <span class="case-badge">${escapeHtml(c.badge)}</span>
          </div>
          <h3 class="case-client">${escapeHtml(c.client)}</h3>
          <p class="case-project">${escapeHtml(c.project)}</p>
          <p class="case-details">${escapeHtml(c.details)}</p>
        </div>
        <div class="case-footer">
          <span class="case-metric">${escapeHtml(c.metric)}</span>
          <span class="case-location">${escapeHtml(c.location)}</span>
        </div>
      </article>
    `).join('');
  }

  // Methodology
  setText('method-tag', t.methodology.tag);
  setText('method-title', t.methodology.title);
  const stepsContainer = document.getElementById('timeline-steps');
  if (stepsContainer) {
    stepsContainer.innerHTML = t.methodology.steps.map(s => `
      <div class="step-card">
        <div class="step-number">${s.num}</div>
        <h3 class="step-title">${escapeHtml(s.title)}</h3>
        <p class="step-desc">${escapeHtml(s.desc)}</p>
      </div>
    `).join('');
  }

  // Tiers
  setText('tiers-tag', t.tiers.tag);
  setText('tiers-title', t.tiers.title);
  setText('toggle-lbl-q', t.tiers.toggleQuarterly);
  setText('toggle-lbl-a', t.tiers.toggleAnnual);
  renderTiers();

  // RFP Form
  setText('rfp-tag', t.rfp.tag);
  setText('rfp-title', t.rfp.title);
  setText('rfp-subtitle', t.rfp.subtitle);
  setText('lbl-rfp-name', t.rfp.nameLabel);
  setPlaceholder('rfp-name', t.rfp.namePlaceholder);
  setText('lbl-rfp-company', t.rfp.companyLabel);
  setPlaceholder('rfp-company', t.rfp.companyPlaceholder);
  setText('lbl-rfp-email', t.rfp.emailLabel);
  setPlaceholder('rfp-email', t.rfp.emailPlaceholder);
  setText('lbl-rfp-scope', t.rfp.scopeLabel);
  setText('lbl-rfp-budget', t.rfp.budgetLabel);
  setText('lbl-rfp-notes', t.rfp.notesLabel);
  setPlaceholder('rfp-notes', t.rfp.notesPlaceholder);
  setText('rfp-submit-btn', t.rfp.submitBtn);

  const scopeSelect = document.getElementById('rfp-scope');
  if (scopeSelect) {
    scopeSelect.innerHTML = t.rfp.scopeOptions.map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('');
  }

  const budgetSelect = document.getElementById('rfp-budget');
  if (budgetSelect) {
    budgetSelect.innerHTML = t.rfp.budgetOptions.map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('');
  }

  // Footer
  setText('footer-desc', t.footer.brandDesc);
  setText('footer-rights', t.footer.rights);
  setText('footer-status', t.footer.status);
  const footerLinks = document.getElementById('footer-links');
  if (footerLinks) {
    footerLinks.innerHTML = t.footer.links.map(l => `
      <li class="footer-link-item"><a href="#hero">${escapeHtml(l)}</a></li>
    `).join('');
  }

  // Modal
  setText('modal-title', t.rfp.successTitle);
  setText('modal-desc', t.rfp.successDesc);
  setText('modal-close-btn', t.rfp.successClose);
}

/* ==========================================================================
   SIMULATOR LOGIC
   ========================================================================== */
function renderSimulatorTabs() {
  const t = translations[currentLang];
  const tabsContainer = document.getElementById('sim-tabs');
  if (!tabsContainer || !t.simulator.tabs) return;

  tabsContainer.innerHTML = t.simulator.tabs.map(tab => `
    <button type="button" class="sim-tab-btn ${tab.id === activeSimTab ? 'active' : ''}" data-tab="${tab.id}">
      <span>//</span>
      <span>${escapeHtml(tab.name)}</span>
    </button>
  `).join('');

  tabsContainer.querySelectorAll('.sim-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSimTab = btn.getAttribute('data-tab');
      renderSimulatorTabs();
      renderSimulatorContent();
    });
  });
}

function renderSimulatorContent() {
  const t = translations[currentLang];
  const tab = t.simulator.tabs.find(x => x.id === activeSimTab) || t.simulator.tabs[0];
  if (!tab) return;

  setText('sim-header-title', tab.name);
  setText('sim-tagline', tab.tagline);

  const telemetryGrid = document.getElementById('telemetry-grid');
  if (telemetryGrid) {
    telemetryGrid.innerHTML = Object.entries(tab.metrics).map(([key, val]) => `
      <div class="telemetry-cell">
        <span class="tel-lbl">${escapeHtml(key)}</span>
        <span class="tel-val">${escapeHtml(val)}</span>
      </div>
    `).join('');
  }

  const nodesList = document.getElementById('sim-nodes-list');
  if (nodesList) {
    nodesList.innerHTML = tab.nodes.map(n => `
      <li class="sim-node-item">
        <span>${escapeHtml(n)}</span>
        <span class="node-status-badge">ONLINE</span>
      </li>
    `).join('');
  }
}

/* ==========================================================================
   PARTNERSHIP TIERS RENDERER
   ========================================================================== */
function renderTiers() {
  const t = translations[currentLang];
  const grid = document.getElementById('tiers-grid');
  if (!grid || !t.tiers.items) return;

  grid.innerHTML = t.tiers.items.map(tier => {
    const price = isAnnual ? tier.priceAnnual : tier.priceQuarterly;
    const isFeatured = tier.featured;
    return `
      <article class="tier-card ${isFeatured ? 'featured' : ''}">
        ${isFeatured ? `<div class="featured-pill">${escapeHtml(t.tiers.featuredBadge)}</div>` : ''}
        <div>
          <div class="tier-badge">${escapeHtml(tier.tier)} • ${escapeHtml(tier.badge)}</div>
          <h3 class="tier-name">${escapeHtml(tier.name)}</h3>
          
          <div class="tier-price-box">
            <div class="tier-price">${price}</div>
            <div class="tier-period">${tier.period}</div>
          </div>

          <p class="tier-desc">${escapeHtml(tier.desc)}</p>

          <ul class="tier-features">
            ${tier.features.map(f => `
              <li class="tier-feature-item">
                <svg class="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${escapeHtml(f)}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <a href="#rfp" class="${isFeatured ? 'btn-primary' : 'btn-secondary'} tier-btn">
            ${escapeHtml(tier.cta)}
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
function updateThemeIcons(theme) {
  const darkIcon = document.getElementById('theme-icon-dark');
  const lightIcon = document.getElementById('theme-icon-light');
  if (!darkIcon || !lightIcon) return;

  if (theme === 'light') {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
  } else {
    darkIcon.style.display = 'block';
    lightIcon.style.display = 'none';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('argon_theme', currentTheme);
  updateThemeIcons(currentTheme);
}

/* ==========================================================================
   LANGUAGE TOGGLE
   ========================================================================== */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  localStorage.setItem('argon_lang', currentLang);
  renderAllContent();
}

/* ==========================================================================
   EVENT HANDLERS & BINDINGS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  runPreloader();
  initCustomCursor();
  initHeroCanvas();
  initWaveformCanvas();
  renderAllContent();

  // Language switch listener
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }

  // Theme switch listener
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Billing cycle switch
  const billingToggle = document.getElementById('billing-toggle');
  if (billingToggle) {
    billingToggle.addEventListener('change', (e) => {
      isAnnual = e.target.checked;
      renderTiers();
    });
  }

  // Load slider listener
  const loadSlider = document.getElementById('load-slider');
  const loadDisplay = document.getElementById('load-val-display');
  if (loadSlider && loadDisplay) {
    loadSlider.addEventListener('input', (e) => {
      simLoadFactor = parseInt(e.target.value, 10);
      loadDisplay.textContent = `${simLoadFactor}k req/s`;
    });
  }

  // Mobile menu drawer
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('mobile-drawer-close');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }
  if (drawerCloseBtn && mobileDrawer) {
    drawerCloseBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }
  document.querySelectorAll('[data-drawer-link]').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  // RFP Form submission
  const rfpForm = document.getElementById('rfp-form');
  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const refCodeEl = document.getElementById('modal-ref-code');

  if (rfpForm) {
    rfpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = `ARGON-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      if (refCodeEl) refCodeEl.textContent = code;
      if (successModal) successModal.classList.add('active');
      rfpForm.reset();
    });
  }

  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }
});

/* ==========================================================================
   HELPERS
   ========================================================================== */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

function setPlaceholder(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.setAttribute('placeholder', text);
  }
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
