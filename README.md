# 🧠 AI Learning Roadmap Dashboard

A modern, feature-rich personal AI/ML learning dashboard to track your journey through 400+ curated YouTube videos across 5 phases of AI/ML education.
  
   
# [Learn](https://my-ml-ai-roadmap-2026.vercel.app)

## 🚀 Features Implemented

### ✅ Dashboard
- Overall progress stats (total, completed, remaining, percentage)
- Beautiful glassmorphism stat cards
- Phase-by-phase progress bars
- Playlist-level progress grid
- "Continue Learning" resume banner (last watched video)
- Donut chart for overall completion
- Day streak tracker

### ✅ Roadmap Timeline
- All 5 phases with expandable sections
- 15+ playlists / sections
- 430+ individual video cards with YouTube thumbnails
- Phase filter buttons (All, Phase 1–5)
- Video status indicators (Not Started / In Progress / Completed)
- Per-section progress bars

### ✅ Video Player
- Embedded YouTube player inside the dashboard
- Fallback "Watch on YouTube" button if embed fails (Error 153)
- Previous / Next video navigation (keyboard arrow keys supported)
- Manual status controls: Not Started → In Progress → Completed
- Auto-mark "In Progress" after 5 seconds of watching
- Notes per video directly in the player modal

### ✅ Progress Tracking
- localStorage persistence (survives refresh, no backend needed)
- Video status: `not-started`, `in-progress`, `completed`
- Progress updates instantly across all UI elements
- Daily activity recording for streak tracking

### ✅ Notes System
- Create, edit, delete personal notes
- Link notes to specific videos (optional)
- Notes sidebar + full editor layout
- Notes saved to localStorage

### ✅ Search
- Real-time search across all 400+ videos
- Search by: Video title, Section/Playlist name, Phase name
- Filter by type: All, Videos, Playlists, Phases
- Quick search from top bar (navigates to search page)
- Search result highlighting

### ✅ Statistics Page
- Total videos completed
- Estimated learning hours
- Current day streak
- Phases fully completed
- Phase-by-phase bar chart (Chart.js)
- Completion donut chart
- Weekly activity line chart

### ✅ Dark / Light Mode
- Full dark & light theme support
- Glassmorphism effects in both themes
- Theme preference saved to localStorage

### ✅ Responsive Design
- Desktop, laptop, tablet, mobile support
- Collapsible sidebar (desktop)
- Mobile slide-in sidebar with overlay
- Fluid grid layouts

## 📂 Project Structure

```
index.html          Main entry point
css/
  style.css         All styles (glassmorphism, themes, animations)
js/
  data.js           All 430+ videos organized by phase/section
  storage.js        localStorage persistence layer
  app.js            Main application logic
```

## 🗺️ Roadmap Phases

| Phase | Topic | Videos |
|-------|-------|--------|
| Phase 1 | Basics (Linear Algebra, Statistics, Probability) | ~32 |
| Phase 2 | Data Handling (NumPy, Pandas, Matplotlib, Seaborn) | ~46 |
| Phase 3 | Core Machine Learning (100 Days ML + Projects) | ~156 |
| Phase 4 | Deep Learning (100 Days DL + TF/Keras + PyTorch) | ~156 |
| Phase 5 | Specialization (NLP, GenAI, LangChain, FastAPI) | ~43 |

## 💾 Data Storage (localStorage Keys)

| Key | Data |
|-----|------|
| `ai_roadmap_progress` | `{ [videoId]: 'not-started' \| 'in-progress' \| 'completed' }` |
| `ai_roadmap_notes` | Array of note objects |
| `ai_roadmap_last` | Last watched video ID |
| `ai_roadmap_theme` | `'dark'` or `'light'` |
| `ai_roadmap_streak` | `{ count, lastDate }` |
| `ai_roadmap_activity` | `{ [date]: completedCount }` |

## 🎯 Entry Points

| Page | Nav Item | URL Hash |
|------|----------|----------|
| Dashboard | Dashboard | `/` |
| Roadmap | Roadmap | (click nav) |
| Statistics | Statistics | (click nav) |
| Notes | Notes | (click nav) |
| Search | Search | (click nav) |


