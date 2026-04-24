/* =====================================================
   PODWRITTEN PRESS KIT — SHARED RENDERER
   Edit this file to update ALL client press kit layouts
   ===================================================== */

(function () {
  const C = window.CLIENT;

  const ICONS = {
    instagram: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
    youtube:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>`,
    tiktok:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>`,
    web:       `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    podcast:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
    linkedin:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    facebook:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  };

  function esc(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function socialButtons() {
    return (C.social || []).map(s => `
      <a class="social-btn" href="${esc(s.url)}" target="_blank" title="${esc(s.label)}">
        ${ICONS[s.type] || ICONS.web}
      </a>`).join('');
  }

  function navItems(sections) {
    return sections.map(s => `
      <button class="nav-item" onclick="go('${s.id}')">
        <span class="nav-dot"></span>${esc(s.label)}
      </button>`).join('');
  }

  function coverageItems() {
    return (C.coverage || []).map(item => `
      <div class="coverage-item" data-type="${esc(item.type || 'podcast')}">
        <div>
          <div class="coverage-pub">${esc(item.show)}</div>
          ${item.episode ? `<div class="coverage-title">${esc(item.episode)}</div>` : ''}
        </div>
        ${item.url ? `<a class="coverage-link" href="${esc(item.url)}" target="_blank">Listen ↗</a>` : ''}
      </div>`).join('');
  }

  function talkingPoints() {
    return (C.talkingPoints || []).map((q, i) => `
      <div class="question-item">
        <span class="question-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="question-text">${esc(q)}</span>
      </div>`).join('');
  }

  function contactRows() {
    return (C.contactRows || []).map(row => `
      <div class="contact-row">
        <span class="contact-key">${esc(row.label)}</span>
        <span class="contact-val">
          ${row.url ? `<a href="${esc(row.url)}" target="_blank">${esc(row.value)}</a>` : esc(row.value)}
        </span>
      </div>`).join('');
  }

  function tags() {
    return (C.topics || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
  }

  const SECTIONS = [
    { id: 'about',     label: 'About' },
    { id: 'coverage',  label: 'Media Coverage' },
    { id: 'headshots', label: 'Headshots' },
    { id: 'topics',    label: 'Speaking Topics & Audiences' },
    { id: 'contact',   label: 'Contact' },
  ];

  document.title = `${C.name} — Press Kit`;

  document.body.innerHTML = `
  <div class="topbar">
    <span class="topbar-name">${esc(C.name)}</span>
    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu">${navItems(SECTIONS)}</div>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-avatar">
        ${C.photo ? `<img src="${esc(C.photo)}" alt="${esc(C.name)}" />` : `<span class="avatar-placeholder">${esc(C.name.split(' ').map(w=>w[0]).join(''))}</span>`}
      </div>
      <div class="sidebar-name">${esc(C.name)}</div>
      ${C.title ? `<div class="sidebar-client-title">${esc(C.title)}</div>` : ''}
      <nav class="sidebar-nav">${navItems(SECTIONS)}</nav>
      <div class="sidebar-socials">${socialButtons()}</div>
    </aside>
    <div class="main">
      <section id="about" class="section active">
        <div class="banner">
          <div class="banner-eyebrow">About</div>
          <h1 class="banner-name">Biography</h1>
        </div>
        <div class="content">
          <div class="about-tabs">
            <button class="about-tab active" onclick="switchTab('bio',this)">Short Bio</button>
            <button class="about-tab" onclick="switchTab('story',this)">Full Story</button>
          </div>
          <div id="tab-bio" class="about-tab-content">
            ${(C.bio || '').split('\n\n').map(p => `<p class="bio-text">${p.trim()}</p>`).join('')}
            ${C.topics && C.topics.length ? `<div class="topics-label">Topics they speak on</div><div class="tags">${tags()}</div>` : ''}
          </div>
          <div id="tab-story" class="about-tab-content" style="display:none;">
            ${C.story ? (C.story || '').split('\n\n').map(p => `<p class="bio-text">${p.trim()}</p>`).join('') : `<p class="bio-text" style="color:var(--muted);font-style:italic;">Full story coming soon.</p>`}
          </div>
        </div>
        <footer><span>Created by <a href="https://podwritten.com" target="_blank">podwritten.com</a></span></footer>
      </section>
      <section id="coverage" class="section">
        <div class="banner">
          <div class="banner-eyebrow">Media Coverage</div>
          <h1 class="banner-name">Press & Appearances</h1>
          <p class="banner-sub">Podcast interviews, press features, and published articles.</p>
        </div>
        <div class="content">
          <div class="filter-row">
            <button class="filter-btn active" onclick="filterCoverage('all',this)">All</button>
            <button class="filter-btn" onclick="filterCoverage('podcast',this)">Podcasts</button>
            <button class="filter-btn" onclick="filterCoverage('press',this)">Press</button>
            <button class="filter-btn" onclick="filterCoverage('article',this)">Articles</button>
          </div>
          <div class="coverage-list" id="coverageList">
            ${coverageItems() || '<p style="color:var(--muted);font-style:italic;padding:20px 0;">No coverage added yet.</p>'}
          </div>
        </div>
        <footer><span>Created by <a href="https://podwritten.com" target="_blank">podwritten.com</a></span></footer>
      </section>
      <section id="headshots" class="section">
        <div class="banner">
          <div class="banner-eyebrow">Headshots</div>
          <h1 class="banner-name">Photos & Media</h1>
          <p class="banner-sub">High-resolution photos cleared for press and editorial use.</p>
        </div>
        <div class="content">
          <p style="font-size:15px;color:var(--muted);margin-bottom:28px;line-height:1.75;">All headshots and media assets are available in the Google Drive folder below.</p>
          ${C.driveFolder ? `<a class="drive-link-btn" href="${esc(C.driveFolder)}" target="_blank">↗ &nbsp;Open full photo library in Google Drive</a>` : `<p style="color:var(--muted);font-style:italic;">No photo folder linked yet.</p>`}
        </div>
        <footer><span>Created by <a href="https://podwritten.com" target="_blank">podwritten.com</a></span></footer>
      </section>
      <section id="topics" class="section">
        <div class="banner">
          <div class="banner-eyebrow">Speaking Topics & Audiences</div>
          <h1 class="banner-name">Topics & Talking Points</h1>
        </div>
        <div class="content">
          <p class="questions-intro">The following questions are designed to spark meaningful conversations. Feel free to adapt them to your format or audience.</p>
          <div>${talkingPoints()}</div>
        </div>
        <footer><span>Created by <a href="https://podwritten.com" target="_blank">podwritten.com</a></span></footer>
      </section>
      <section id="contact" class="section">
        <div class="banner">
          <div class="banner-eyebrow">Contact</div>
          <h1 class="banner-name">Booking & Press</h1>
          <p class="banner-sub">For interview bookings and media enquiries, get in touch below. We aim to respond within 24 hours.</p>
        </div>
        <div class="content">
          <div class="contact-grid">
            <div class="contact-group">
              <h3>Press & Bookings</h3>
              ${contactRows()}
            </div>
            <div class="contact-group">
              <h3>Social</h3>
              ${(C.social || []).filter(s => s.label).map(s => `<div class="contact-row"><span class="contact-key">${esc(s.type)}</span><span class="contact-val"><a href="${esc(s.url)}" target="_blank">${esc(s.label)}</a></span></div>`).join('')}
            </div>
          </div>
        </div>
        <footer><span>Created by <a href="https://podwritten.com" target="_blank">podwritten.com</a></span></footer>
      </section>
    </div>
  </div>`;

  window.go = function(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(b => {
      if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(`'${id}'`)) b.classList.add('active');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('mobileMenu').classList.remove('open');
  };

  window.switchTab = function(tab, btn) {
    document.querySelectorAll('.about-tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.about-tab').forEach(b => b.classList.remove('active'));
    const el = document.getElementById('tab-' + tab);
    if (el) el.style.display = 'block';
    btn.classList.add('active');
  };

  window.toggleMenu = function() {
    document.getElementById('mobileMenu').classList.toggle('open');
  };

  window.filterCoverage = function(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#coverageList .coverage-item').forEach(item => {
      item.style.display = (type === 'all' || item.dataset.type === type) ? 'flex' : 'none';
    });
  };

  const firstNav = document.querySelector('.sidebar .nav-item');
  if (firstNav) firstNav.classList.add('active');

})();
