// ============================================================
//  AI ROADMAP DASHBOARD — Main Application
// ============================================================

/* ── State ── */
let currentPage = 'dashboard';
let currentVideoId = null;
let currentVideoList = [];
let currentVideoIndex = 0;
let charts = {};
let activeNote = null;
let searchType = 'all';

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(Storage.getTheme());
  setupNav();
  setupSidebar();
  setupTheme();
  setupPlayer();
  setupNotes();
  setupSearch();
  setupFilters();
  renderAll();
  showPage('dashboard');
  updateStreak();
});

/* ══════════════════════════════════════════════════════════
   NAV & PAGE ROUTING
══════════════════════════════════════════════════════════ */
function setupNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const page = item.dataset.page;
      showPage(page);
      // close mobile sidebar
      document.getElementById('sidebar').classList.remove('mobile-open');
      document.querySelector('.sidebar-overlay')?.classList.remove('show');
    });
  });
}

function showPage(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  const nav = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (el) el.classList.add('active');
  if (nav) nav.classList.add('active');
  const titles = {
    dashboard: ['Dashboard', 'Overview of your learning journey 🚀'],
    roadmap: ['Roadmap', 'Browse all phases and videos 🗺️'],
    statistics: ['Statistics', 'Track your learning metrics 📊'],
    notes: ['Notes', 'Your personal learning notes 📝'],
    search: ['Search', 'Find any video or topic instantly 🔍']
  };
  const [title, sub] = titles[page] || ['Page', ''];
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-subtitle').textContent = sub;
  if (page === 'statistics') renderStatistics();
  if (page === 'notes') renderNotesList();
  if (page === 'dashboard') renderDashboard();
}

/* ══════════════════════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════════════════════ */
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainWrap = document.getElementById('main-wrapper');
  const toggle = document.getElementById('sidebar-toggle');
  const mobileBtn = document.getElementById('mobile-menu-btn');

  // Desktop collapse
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainWrap.classList.toggle('sidebar-collapsed');
  });

  // Mobile overlay
  let overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  mobileBtn.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('show');
  });
}

/* ══════════════════════════════════════════════════════════
   THEME
══════════════════════════════════════════════════════════ */
function setupTheme() {
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = Storage.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    Storage.setTheme(next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  if (label) label.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

/* ══════════════════════════════════════════════════════════
   RENDER ALL
══════════════════════════════════════════════════════════ */
function renderAll() {
  renderDashboard();
  renderRoadmap();
  populateNoteVideoSelect();
}

/* ══════════════════════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════════════════════ */
function renderDashboard() {
  const completed = Storage.getCompletedCount();
  const total = TOTAL_VIDEOS;
  const remaining = total - completed;
  const pct = Math.round(completed / total * 100);

  // Stats
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-completed').textContent = completed;
  document.getElementById('stat-remaining').textContent = remaining;
  document.getElementById('stat-pct').textContent = pct + '%';

  // Sidebar
  const spf = document.getElementById('sidebar-progress-fill');
  const spp = document.getElementById('sidebar-progress-pct');
  if (spf) spf.style.width = pct + '%';
  if (spp) spp.textContent = pct + '%';

  // Streak
  const streak = Storage.getStreak();
  document.getElementById('streak-count').textContent = streak;

  // Continue banner
  const lastId = Storage.getLastWatched();
  if (lastId && VIDEO_MAP[lastId]) {
    const v = VIDEO_MAP[lastId];
    document.getElementById('continue-banner').style.display = 'flex';
    document.getElementById('continue-title').textContent = v.title;
    document.getElementById('continue-phase').textContent = `Phase ${v.phaseId} · ${v.sectionTitle}`;
    document.getElementById('continue-btn').onclick = () => openVideo(lastId);
  }

  // Phase progress list
  renderPhaseProgressList();

  // Overall Chart
  renderOverallChart(completed, remaining);

  // Playlist grid
  renderPlaylistGrid();
}

function renderPhaseProgressList() {
  const container = document.getElementById('phase-progress-list');
  container.innerHTML = '';
  ROADMAP_DATA.phases.forEach(phase => {
    const { completed, total, pct } = Storage.getPhaseProgress(phase.id);
    const div = document.createElement('div');
    div.className = 'phase-item';
    div.innerHTML = `
      <div class="phase-item-header">
        <span class="phase-item-name">Phase ${phase.id}: ${phase.title.split('—')[1]?.trim() || phase.title}</span>
        <span class="phase-item-meta">${completed}/${total}</span>
      </div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:${phase.color}"></div></div>
    `;
    container.appendChild(div);
  });
}

function renderOverallChart(completed, remaining) {
  const ctx = document.getElementById('overallChart');
  if (!ctx) return;
  if (charts.overall) { charts.overall.destroy(); }
  charts.overall = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'Remaining'],
      datasets: [{
        data: [completed || 0.001, remaining],
        backgroundColor: ['#6366f1', getComputedStyle(document.documentElement).getPropertyValue('--bg3').trim() || '#1e293b'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => ` ${c.label}: ${c.parsed}` } }
      },
      animation: { animateRotate: true, duration: 800 }
    }
  });
}

function renderPlaylistGrid() {
  const grid = document.getElementById('playlist-grid');
  grid.innerHTML = '';
  let playlistCount = 0;
  ROADMAP_DATA.phases.forEach(phase => {
    phase.sections.forEach(section => {
      playlistCount++;
      const { completed, total, pct } = Storage.getSectionProgress(section.id, section.videos);
      const card = document.createElement('div');
      card.className = 'playlist-card';
      card.innerHTML = `
        <div class="playlist-card-header">
          <div>
            <div class="playlist-card-title">${section.title}</div>
            <span class="playlist-phase-tag">Phase ${section.phase}</span>
          </div>
          <span class="playlist-card-count">${completed}/${total}</span>
        </div>
        <div class="playlist-prog-bar"><div class="playlist-prog-fill" style="width:${pct}%"></div></div>
        <div class="playlist-prog-text">
          <span style="color:var(--text-muted)">${pct}% complete</span>
        </div>
      `;
      card.addEventListener('click', () => {
        showPage('roadmap');
        setTimeout(() => {
          const el = document.getElementById('section-' + section.id);
          if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        }, 200);
      });
      grid.appendChild(card);
    });
  });
  document.getElementById('playlist-count-badge').textContent = `${playlistCount} playlists`;
}

/* ══════════════════════════════════════════════════════════
   ROADMAP
══════════════════════════════════════════════════════════ */
function renderRoadmap(filterPhase = 'all') {
  const container = document.getElementById('roadmap-container');
  container.innerHTML = '';
  ROADMAP_DATA.phases.forEach(phase => {
    if (filterPhase !== 'all' && String(phase.id) !== String(filterPhase)) return;
    const { completed, total, pct } = Storage.getPhaseProgress(phase.id);
    const block = document.createElement('div');
    block.className = 'phase-block';
    block.dataset.phase = phase.id;

    block.innerHTML = `
      <div class="phase-header" data-phase="${phase.id}">
        <div class="phase-header-left">
          <div class="phase-number" style="background:linear-gradient(135deg,${phase.color},${phase.color}cc)">${phase.id}</div>
          <div>
            <div class="phase-title">${phase.title}</div>
            <div class="phase-timeline"><i class="fas fa-clock"></i> ${phase.timeline}</div>
          </div>
        </div>
        <div class="phase-stats">
          <div class="phase-stat-item">
            <span class="phase-stat-num">${pct}%</span>
            <span class="phase-stat-lbl">Complete</span>
          </div>
          <div class="phase-stat-item">
            <span class="phase-stat-num">${completed}/${total}</span>
            <span class="phase-stat-lbl">Videos</span>
          </div>
          <div style="width:120px">
            <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:${phase.color}"></div></div>
          </div>
          <i class="fas fa-chevron-down" style="color:var(--text-muted); transition:transform 0.3s" id="phase-chevron-${phase.id}"></i>
        </div>
      </div>
      <div class="phase-body" id="phase-body-${phase.id}"></div>
    `;

    const body = block.querySelector(`#phase-body-${phase.id}`);
    phase.sections.forEach(section => {
      body.appendChild(buildSectionBlock(section, phase.color));
    });

    // Toggle
    block.querySelector('.phase-header').addEventListener('click', () => {
      const b = document.getElementById('phase-body-' + phase.id);
      const chevron = document.getElementById('phase-chevron-' + phase.id);
      b.classList.toggle('collapsed');
      chevron.style.transform = b.classList.contains('collapsed') ? 'rotate(-90deg)' : 'rotate(0)';
    });

    container.appendChild(block);
  });
}

function buildSectionBlock(section, phaseColor) {
  const { completed, total, pct } = Storage.getSectionProgress(section.id, section.videos);
  const wrap = document.createElement('div');
  wrap.className = 'section-block';
  wrap.id = 'section-' + section.id;

  wrap.innerHTML = `
    <div class="section-header" data-section="${section.id}">
      <div class="section-icon" style="background:linear-gradient(135deg,${phaseColor},${phaseColor}aa)">
        <i class="${section.icon}"></i>
      </div>
      <span class="section-title">${section.title}</span>
      <div style="width:80px">
        <div class="prog-bar" style="height:4px">
          <div class="prog-fill" style="width:${pct}%;background:${phaseColor}"></div>
        </div>
      </div>
      <span class="section-meta">${completed}/${total}</span>
      <i class="fas fa-chevron-down section-toggle" id="stoggle-${section.id}"></i>
    </div>
    <div class="videos-grid collapsed" id="vgrid-${section.id}"></div>
  `;

  const grid = wrap.querySelector(`#vgrid-${section.id}`);
  section.videos.forEach((video, idx) => {
    grid.appendChild(buildVideoCard(video, section, idx));
  });

  wrap.querySelector('.section-header').addEventListener('click', (e) => {
    if (e.target.closest('.progress-buttons')) return;
    const g = document.getElementById('vgrid-' + section.id);
    const t = document.getElementById('stoggle-' + section.id);
    g.classList.toggle('collapsed');
    t.classList.toggle('open');
  });

  return wrap;
}

function buildVideoCard(video, section, idx) {
  const status = Storage.getVideoStatus(video.id);
  const card = document.createElement('div');
  card.className = `video-card ${status}`;
  card.dataset.videoId = video.id;

  const thumbUrl = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
  const statusLabels = { completed: 'Completed', 'in-progress': 'In Progress', 'not-started': 'Not Started' };

  card.innerHTML = `
    <div class="video-thumb">
      <img src="${thumbUrl}" alt="${video.title}" loading="lazy" />
      <div class="video-play-overlay"><i class="fas fa-play-circle"></i></div>
      <span class="video-num">#${video.num}</span>
      <span class="video-status-dot ${status}"></span>
    </div>
    <div class="video-title">${video.title}</div>
    <div class="video-card-footer">
      <span class="video-date">${section.title.substring(0, 20)}</span>
      <span class="video-status-text ${status}">${statusLabels[status]}</span>
    </div>
  `;

  card.addEventListener('click', () => openVideo(video.id));
  return card;
}

/* ══════════════════════════════════════════════════════════
   VIDEO PLAYER MODAL
══════════════════════════════════════════════════════════ */
function openVideo(videoId) {
  const video = VIDEO_MAP[videoId];
  if (!video) return;

  currentVideoId = videoId;
  Storage.setLastWatched(videoId);

  // Build play list from section
  const phase = ROADMAP_DATA.phases.find(p => p.id === video.phaseId);
  const section = phase?.sections.find(s => s.id === video.sectionId);
  currentVideoList = section?.videos || [];
  currentVideoIndex = currentVideoList.findIndex(v => v.id === videoId);

  // Fill modal
  document.getElementById('modal-phase-tag').textContent = `Phase ${video.phaseId}`;
  document.getElementById('modal-video-title').textContent = video.title;
  document.getElementById('modal-playlist-name').innerHTML = `<i class="fas fa-list"></i> ${video.sectionTitle}`;
  document.getElementById('modal-video-num').innerHTML = `<i class="fas fa-hashtag"></i> ${video.num} of ${currentVideoList.length}`;

  const status = Storage.getVideoStatus(videoId);
  updateModalStatus(status);

  // Embed
  const iframe = document.getElementById('yt-iframe');
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}?rel=0&autoplay=0&modestbranding=1`;
  iframe.src = embedUrl;
  document.getElementById('player-error').style.display = 'none';
  iframe.style.display = 'block';

  iframe.onerror = () => showEmbedError(video);

  // Fallback links
  const ytUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
  document.getElementById('yt-fallback-link').href = ytUrl;
  document.getElementById('yt-open-link').href = ytUrl;

  // Nav buttons
  document.getElementById('prev-video-btn').disabled = currentVideoIndex <= 0;
  document.getElementById('next-video-btn').disabled = currentVideoIndex >= currentVideoList.length - 1;

  // Notes
  loadModalNote(videoId);

  // Open modal
  document.getElementById('player-modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Auto-mark in-progress
  if (status === 'not-started') {
    setTimeout(() => {
      if (currentVideoId === videoId) {
        setVideoStatus(videoId, 'in-progress');
      }
    }, 5000);
  }
}

function showEmbedError(video) {
  document.getElementById('yt-iframe').style.display = 'none';
  document.getElementById('player-error').style.display = 'flex';
  document.getElementById('yt-fallback-link').href = `https://www.youtube.com/watch?v=${video.videoId}`;
}

function updateModalStatus(status) {
  document.querySelectorAll('.status-btn').forEach(btn => btn.classList.remove('active'));
  const active = document.querySelector(`.status-btn[data-status="${status}"]`);
  if (active) active.classList.add('active');
  const tag = document.getElementById('modal-status-tag');
  tag.className = `status-tag ${status}`;
  const labels = { completed: 'Completed', 'in-progress': 'In Progress', 'not-started': 'Not Started' };
  tag.textContent = labels[status] || 'Not Started';
}

function setVideoStatus(videoId, status) {
  Storage.setVideoStatus(videoId, status);
  updateModalStatus(status);
  // Update video cards in DOM
  document.querySelectorAll(`[data-video-id="${videoId}"]`).forEach(card => {
    card.className = `video-card ${status}`;
    const dot = card.querySelector('.video-status-dot');
    if (dot) { dot.className = `video-status-dot ${status}`; }
    const text = card.querySelector('.video-status-text');
    if (text) {
      const labels = { completed: 'Completed', 'in-progress': 'In Progress', 'not-started': 'Not Started' };
      text.className = `video-status-text ${status}`;
      text.textContent = labels[status];
    }
  });
  refreshProgressBars();
  if (status === 'completed') showToast('✅ Video marked as completed!', 'success');
}

function refreshProgressBars() {
  // Dashboard stats
  const completed = Storage.getCompletedCount();
  const total = TOTAL_VIDEOS;
  const pct = Math.round(completed / total * 100);
  const elCompleted = document.getElementById('stat-completed');
  const elRemaining = document.getElementById('stat-remaining');
  const elPct = document.getElementById('stat-pct');
  if (elCompleted) elCompleted.textContent = completed;
  if (elRemaining) elRemaining.textContent = total - completed;
  if (elPct) elPct.textContent = pct + '%';
  const spfEl = document.getElementById('sidebar-progress-fill');
  const sppEl = document.getElementById('sidebar-progress-pct');
  if (spfEl) spfEl.style.width = pct + '%';
  if (sppEl) sppEl.textContent = pct + '%';
  // Update charts if on dashboard
  if (currentPage === 'dashboard') {
    renderOverallChart(completed, total - completed);
    renderPhaseProgressList();
    renderPlaylistGrid();
  }
}

function setupPlayer() {
  const modal = document.getElementById('player-modal');

  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (modal.classList.contains('open')) {
      if (e.key === 'ArrowRight') navigateVideo(1);
      if (e.key === 'ArrowLeft') navigateVideo(-1);
    }
  });

  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentVideoId) setVideoStatus(currentVideoId, btn.dataset.status);
    });
  });

  document.getElementById('prev-video-btn').addEventListener('click', () => navigateVideo(-1));
  document.getElementById('next-video-btn').addEventListener('click', () => navigateVideo(1));

  // Note toggle in modal
  document.getElementById('modal-note-toggle').addEventListener('click', () => {
    const area = document.getElementById('modal-notes-area');
    const btn = document.getElementById('modal-note-toggle');
    const isHidden = area.style.display === 'none';
    area.style.display = isHidden ? 'block' : 'none';
    btn.innerHTML = isHidden ? '<i class="fas fa-chevron-up"></i>' : '<i class="fas fa-chevron-down"></i>';
  });
  const mnh = document.querySelector('.modal-notes-header');
  if (mnh) mnh.style.cursor = 'pointer';

  document.getElementById('modal-save-note').addEventListener('click', () => {
    if (!currentVideoId) return;
    const content = document.getElementById('modal-note-input').value;
    const video = VIDEO_MAP[currentVideoId];
    const existingNote = Storage.getNoteForVideo(currentVideoId);
    Storage.saveNote({
      id: existingNote?.id || Date.now().toString(),
      title: video?.title?.substring(0, 50) || 'Video Note',
      content,
      videoId: currentVideoId
    });
    showToast('📝 Note saved!', 'success');
    if (currentPage === 'notes') renderNotesList();
  });
}

function closeModal() {
  const modal = document.getElementById('player-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  const iframe = document.getElementById('yt-iframe');
  if (iframe) iframe.src = '';
  const notesArea = document.getElementById('modal-notes-area');
  if (notesArea) notesArea.style.display = 'none';
  const noteToggle = document.getElementById('modal-note-toggle');
  if (noteToggle) noteToggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
}

function navigateVideo(direction) {
  const newIdx = currentVideoIndex + direction;
  if (newIdx < 0 || newIdx >= currentVideoList.length) return;
  openVideo(currentVideoList[newIdx].id);
}

function loadModalNote(videoId) {
  const note = Storage.getNoteForVideo(videoId);
  document.getElementById('modal-note-input').value = note?.content || '';
}

/* ══════════════════════════════════════════════════════════
   STATISTICS
══════════════════════════════════════════════════════════ */
function renderStatistics() {
  const completed = Storage.getCompletedCount();
  const streak = Storage.getStreak();
  const phasesCompleted = Storage.getCompletedPhasesCount();
  const estHours = Math.round(completed * 12 / 60); // assume ~12min/video average

  document.getElementById('stats-completed').textContent = completed;
  document.getElementById('stats-hours').textContent = `~${estHours}h`;
  document.getElementById('stats-streak').textContent = streak;
  document.getElementById('stats-phases').textContent = phasesCompleted;

  renderPhaseBarChart();
  renderSectionDonutChart();
  renderWeeklyChart();
}

function renderPhaseBarChart() {
  const ctx = document.getElementById('phaseBarChart');
  if (!ctx) return;
  if (charts.phaseBar) charts.phaseBar.destroy();

  const labels = ROADMAP_DATA.phases.map(p => `Phase ${p.id}`);
  const totals = ROADMAP_DATA.phases.map(p => p.sections.flatMap(s => s.videos).length);
  const completedArr = ROADMAP_DATA.phases.map(p => {
    const allVideos = p.sections.flatMap(s => s.videos);
    const prog = Storage.getProgress();
    return allVideos.filter(v => prog[v.id] === 'completed').length;
  });

  const isDark = Storage.getTheme() === 'dark';
  const tickColor = isDark ? '#94a3b8' : '#475569';

  charts.phaseBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Completed', data: completedArr, backgroundColor: '#6366f1', borderRadius: 6 },
        { label: 'Remaining', data: totals.map((t, i) => t - completedArr[i]), backgroundColor: isDark ? '#1e293b' : '#dde5f5', borderRadius: 6 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { stacked: true, ticks: { color: tickColor }, grid: { display: false } },
        y: { stacked: true, ticks: { color: tickColor }, grid: { color: isDark ? '#1e293b' : '#e8eeff' } }
      },
      plugins: { legend: { labels: { color: tickColor } } }
    }
  });
}

function renderSectionDonutChart() {
  const ctx = document.getElementById('sectionDonutChart');
  if (!ctx) return;
  if (charts.sectionDonut) charts.sectionDonut.destroy();

  const labels = [];
  const data = [];
  const colors = ['#6366f1','#8b5cf6','#10b981','#f59e0b','#ec4899','#3b82f6','#06b6d4','#84cc16','#f97316','#a855f7'];
  let ci = 0;
  const bgColors = [];

  ROADMAP_DATA.phases.forEach(phase => {
    const { completed, total } = Storage.getPhaseProgress(phase.id);
    if (total > 0) {
      labels.push(`Phase ${phase.id}`);
      data.push(completed);
      bgColors.push(colors[ci++ % colors.length]);
    }
  });

  const isDark = Storage.getTheme() === 'dark';
  const tickColor = isDark ? '#94a3b8' : '#475569';

  charts.sectionDonut = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: bgColors, borderWidth: 0 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { color: tickColor, font: { size: 11 } } } }
    }
  });
}

function renderWeeklyChart() {
  const ctx = document.getElementById('weeklyChart');
  if (!ctx) return;
  if (charts.weekly) charts.weekly.destroy();

  const weekly = Storage.getWeeklyActivity();
  const isDark = Storage.getTheme() === 'dark';
  const tickColor = isDark ? '#94a3b8' : '#475569';

  charts.weekly = new Chart(ctx, {
    type: 'line',
    data: {
      labels: weekly.map(d => d.label),
      datasets: [{
        label: 'Videos Completed',
        data: weekly.map(d => d.count),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#6366f1',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { ticks: { color: tickColor }, grid: { display: false } },
        y: { ticks: { color: tickColor, stepSize: 1 }, grid: { color: isDark ? '#1e293b' : '#e8eeff' }, beginAtZero: true }
      },
      plugins: { legend: { display: false } }
    }
  });
}

/* ══════════════════════════════════════════════════════════
   NOTES
══════════════════════════════════════════════════════════ */
function setupNotes() {
  document.getElementById('new-note-btn').addEventListener('click', createNewNote);
  document.getElementById('new-note-btn2').addEventListener('click', createNewNote);
  document.getElementById('save-note-btn').addEventListener('click', saveCurrentNote);
  document.getElementById('delete-note-btn').addEventListener('click', deleteCurrentNote);
}

function createNewNote() {
  activeNote = {
    id: Date.now().toString(),
    title: '',
    content: '',
    videoId: '',
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  showNoteEditor(activeNote);
}

function renderNotesList() {
  const list = document.getElementById('notes-list');
  const notes = Storage.getNotes();
  list.innerHTML = '';
  if (notes.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:13px">No notes yet.<br>Create your first note!</div>`;
    return;
  }
  notes.forEach(note => {
    const item = document.createElement('div');
    item.className = 'note-item' + (activeNote?.id === note.id ? ' active' : '');
    const date = new Date(note.updatedAt).toLocaleDateString();
    item.innerHTML = `
      <div class="note-item-title">${note.title || 'Untitled Note'}</div>
      <div class="note-item-preview">${note.content?.substring(0, 60) || 'Empty note...'}</div>
      <div class="note-item-date">${date}</div>
    `;
    item.addEventListener('click', () => {
      activeNote = note;
      showNoteEditor(note);
      document.querySelectorAll('.note-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
    list.appendChild(item);
  });
}

function showNoteEditor(note) {
  const placeholder = document.getElementById('notes-placeholder');
  const editArea = document.getElementById('notes-edit-area');
  const titleInput = document.getElementById('note-title-input');
  const contentInput = document.getElementById('note-content-input');
  const videoSelect = document.getElementById('note-video-select');
  if (!placeholder || !editArea) return;
  placeholder.style.display = 'none';
  editArea.style.display = 'flex';
  editArea.style.flexDirection = 'column';
  if (titleInput) titleInput.value = note.title || '';
  if (contentInput) contentInput.value = note.content || '';
  if (videoSelect) videoSelect.value = note.videoId || '';
}

function saveCurrentNote() {
  if (!activeNote) return;
  activeNote.title = document.getElementById('note-title-input').value || 'Untitled';
  activeNote.content = document.getElementById('note-content-input').value;
  activeNote.videoId = document.getElementById('note-video-select').value;
  Storage.saveNote(activeNote);
  renderNotesList();
  showToast('📝 Note saved!', 'success');
}

function deleteCurrentNote() {
  if (!activeNote) return;
  if (!confirm('Delete this note?')) return;
  Storage.deleteNote(activeNote.id);
  activeNote = null;
  document.getElementById('notes-placeholder').style.display = 'flex';
  document.getElementById('notes-edit-area').style.display = 'none';
  renderNotesList();
  showToast('🗑️ Note deleted', 'info');
}

function populateNoteVideoSelect() {
  const sel = document.getElementById('note-video-select');
  sel.innerHTML = '<option value="">Link to video (optional)</option>';
  ROADMAP_DATA.phases.forEach(phase => {
    phase.sections.forEach(section => {
      const optgroup = document.createElement('optgroup');
      optgroup.label = `Phase ${phase.id}: ${section.title}`;
      section.videos.forEach(video => {
        const opt = document.createElement('option');
        opt.value = video.id;
        opt.textContent = `#${video.num} ${video.title.substring(0, 50)}`;
        optgroup.appendChild(opt);
      });
      sel.appendChild(optgroup);
    });
  });
}

/* ══════════════════════════════════════════════════════════
   SEARCH
══════════════════════════════════════════════════════════ */
function setupSearch() {
  const input = document.getElementById('main-search-input');
  const btn = document.getElementById('main-search-btn');
  const quickInput = document.getElementById('quick-search');

  const doSearch = () => performSearch(input.value);
  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  input.addEventListener('input', () => { if (input.value.length > 2) doSearch(); });

  document.querySelectorAll('[data-search-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-search-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      searchType = btn.dataset.searchType;
      doSearch();
    });
  });

  quickInput.addEventListener('input', () => {
    if (quickInput.value.length > 1) {
      showPage('search');
      document.getElementById('main-search-input').value = quickInput.value;
      performSearch(quickInput.value);
    }
  });
}

function performSearch(query) {
  const container = document.getElementById('search-results');
  const q = query.trim().toLowerCase();

  if (!q) {
    container.innerHTML = `<div class="empty-state"><i class="fas fa-search fa-3x"></i><h3>Start typing to search</h3><p>Search through 400+ videos, playlists, and phases</p></div>`;
    return;
  }

  const results = [];

  ROADMAP_DATA.phases.forEach(phase => {
    // Phase match
    if ((searchType === 'all' || searchType === 'phase') && phase.title.toLowerCase().includes(q)) {
      results.push({ type: 'phase', icon: 'fas fa-layer-group', title: phase.title, meta: `${phase.timeline} · Phase ${phase.id}`, action: () => showPage('roadmap'), tag: 'Phase' });
    }
    phase.sections.forEach(section => {
      // Playlist/Section match
      if ((searchType === 'all' || searchType === 'playlist') && section.title.toLowerCase().includes(q)) {
        results.push({ type: 'playlist', icon: section.icon, title: section.title, meta: `Phase ${phase.id} · ${section.videos.length} videos`, action: () => { showPage('roadmap'); setTimeout(() => { document.getElementById('section-'+section.id)?.scrollIntoView({behavior:'smooth',block:'center'}); }, 300); }, tag: 'Playlist' });
      }
      // Video match
      if (searchType === 'all' || searchType === 'video') {
        section.videos.forEach(video => {
          if (video.title.toLowerCase().includes(q)) {
            const status = Storage.getVideoStatus(video.id);
            results.push({ type: 'video', icon: 'fas fa-play-circle', title: video.title, meta: `Phase ${phase.id} · ${section.title} · #${video.num}`, action: () => openVideo(video.id), tag: status === 'completed' ? '✅ Done' : status === 'in-progress' ? '⏳ In Progress' : 'Not Started' });
          }
        });
      }
    });
  });

  if (results.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="fas fa-search-minus"></i><h3>No results for "${query}"</h3><p>Try different keywords</p></div>`;
    return;
  }

  container.innerHTML = `<p style="color:var(--text-muted);font-size:13px;margin-bottom:12px">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong>${query}</strong>"</p>`;

  results.forEach(r => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      <div class="search-result-icon"><i class="${r.icon}"></i></div>
      <div class="search-result-info">
        <div class="search-result-title">${highlightText(r.title, q)}</div>
        <div class="search-result-meta">${r.meta}</div>
      </div>
      <span class="search-result-tag">${r.tag}</span>
    `;
    item.addEventListener('click', r.action);
    container.appendChild(item);
  });
}

function highlightText(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<span class="highlight">$1</span>');
}

/* ══════════════════════════════════════════════════════════
   FILTERS (Roadmap)
══════════════════════════════════════════════════════════ */
function setupFilters() {
  document.querySelectorAll('.roadmap-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.roadmap-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRoadmap(btn.dataset.filter);
    });
  });
}

/* ══════════════════════════════════════════════════════════
   STREAK
══════════════════════════════════════════════════════════ */
function updateStreak() {
  const streak = Storage.getStreak();
  document.getElementById('streak-count').textContent = streak;
}

/* ══════════════════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════════════════ */
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => { toast.classList.remove('show'); }, 3000);
}
