// ============================================================
//  STORAGE — localStorage persistence layer
// ============================================================

const STORAGE_KEYS = {
  PROGRESS: 'ai_roadmap_progress',       // { [videoId]: 'not-started' | 'in-progress' | 'completed' }
  NOTES: 'ai_roadmap_notes',             // [ { id, title, content, videoId, createdAt, updatedAt } ]
  LAST_WATCHED: 'ai_roadmap_last',       // videoId
  THEME: 'ai_roadmap_theme',             // 'dark' | 'light'
  STREAK: 'ai_roadmap_streak',           // { count, lastDate }
  ACTIVITY: 'ai_roadmap_activity',       // { [date]: count } — videos completed per day
};

const Storage = {
  // ── Progress ──────────────────────────────────────────────
  getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
    } catch { return {}; }
  },
  setVideoStatus(videoId, status) {
    const prog = this.getProgress();
    prog[videoId] = status;
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(prog));
    if (status === 'completed') this.recordActivity();
  },
  getVideoStatus(videoId) {
    return this.getProgress()[videoId] || 'not-started';
  },
  getCompletedCount() {
    const prog = this.getProgress();
    return Object.values(prog).filter(s => s === 'completed').length;
  },
  getInProgressCount() {
    const prog = this.getProgress();
    return Object.values(prog).filter(s => s === 'in-progress').length;
  },
  getSectionProgress(sectionId, videos) {
    const prog = this.getProgress();
    const completed = videos.filter(v => prog[v.id] === 'completed').length;
    return { completed, total: videos.length, pct: videos.length ? Math.round(completed / videos.length * 100) : 0 };
  },
  getPhaseProgress(phaseId) {
    const phase = ROADMAP_DATA.phases.find(p => p.id === phaseId);
    if (!phase) return { completed: 0, total: 0, pct: 0 };
    const allVideos = phase.sections.flatMap(s => s.videos);
    const prog = this.getProgress();
    const completed = allVideos.filter(v => prog[v.id] === 'completed').length;
    return { completed, total: allVideos.length, pct: allVideos.length ? Math.round(completed / allVideos.length * 100) : 0 };
  },

  // ── Notes ────────────────────────────────────────────────
  getNotes() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES)) || [];
    } catch { return []; }
  },
  saveNote(note) {
    const notes = this.getNotes();
    const idx = notes.findIndex(n => n.id === note.id);
    if (idx >= 0) {
      notes[idx] = { ...note, updatedAt: Date.now() };
    } else {
      notes.unshift({ ...note, id: note.id || Date.now().toString(), createdAt: Date.now(), updatedAt: Date.now() });
    }
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    return notes;
  },
  deleteNote(noteId) {
    const notes = this.getNotes().filter(n => n.id !== noteId);
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    return notes;
  },
  getNoteForVideo(videoId) {
    return this.getNotes().find(n => n.videoId === videoId) || null;
  },

  // ── Last Watched ─────────────────────────────────────────
  setLastWatched(videoId) {
    localStorage.setItem(STORAGE_KEYS.LAST_WATCHED, videoId);
  },
  getLastWatched() {
    return localStorage.getItem(STORAGE_KEYS.LAST_WATCHED);
  },

  // ── Theme ────────────────────────────────────────────────
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
  },
  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  // ── Streak & Activity ────────────────────────────────────
  recordActivity() {
    const today = new Date().toISOString().split('T')[0];
    // Activity
    const activity = this.getActivity();
    activity[today] = (activity[today] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.ACTIVITY, JSON.stringify(activity));
    // Streak
    const streak = this.getStreakData();
    if (streak.lastDate === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split('T')[0];
    const newCount = (streak.lastDate === yStr) ? streak.count + 1 : 1;
    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify({ count: newCount, lastDate: today }));
  },
  getStreakData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK)) || { count: 0, lastDate: '' };
    } catch { return { count: 0, lastDate: '' }; }
  },
  getStreak() {
    return this.getStreakData().count;
  },
  getActivity() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVITY)) || {};
    } catch { return {}; }
  },
  getWeeklyActivity() {
    const activity = this.getActivity();
    const result = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      result.push({ date: key, label: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()], count: activity[key] || 0 });
    }
    return result;
  },
  getCompletedPhasesCount() {
    return ROADMAP_DATA.phases.filter(p => {
      const allVideos = p.sections.flatMap(s => s.videos);
      const prog = this.getProgress();
      return allVideos.length > 0 && allVideos.every(v => prog[v.id] === 'completed');
    }).length;
  }
};
