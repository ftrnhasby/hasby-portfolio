# Hasby — AI & Programmatic Direct Response Video Portfolio

A high-performance personal portfolio showcasing programmatic vertical video ads, direct response video editing, and generative AI audio workflows.

Built with an Apple-inspired dark aesthetic, full bilingual support (Bahasa Indonesia & English), and static export optimization for Cloudflare Pages.

---

## 🌟 Featured Project: Katama Coffee & Space

A comprehensive direct response video case study for **Katama Coffee & Space** (Way Halim, Bandar Lampung). Features three complete creative variations rendered programmatically with **Remotion** and voiced with **ElevenLabs**:

1. **Variation 1: The WFC Reality Check** (30s) — Contrast / Reality Check (*Bukan Cuma Estetik, Tapi Serba Ada*).
2. **Variation 2: The Free Print Discovery** (44s) — Novelty / Feature-led Curiosity (*Nemu Kafe Free Print di Lampung*).
3. **Variation 3: The 2 AM Deadline Emergency** (44s) — Problem-to-Solution / High Urgency (*Panik Deadline Jam 12 Malem*).

### Case Study Features
- **Interactive Video Player:** Real HTML5 playback with multi-variation switching, timeline scrubbing, volume controls, and technical specs.
- **Verified Creative Brief:** Client challenge, target audience analysis, core pain points, and Katama's functional differentiators.
- **Frame-Accurate Scripts:** Word-for-word voiceover, visual cues, and conversion psychology intent.
- **6-Scene Storyboard Tables:** Detailed sequence breakdown with Remotion component mappings and sound design notes.
- **Honest Creative Evaluation:** Critical assessment of pacing, hook mechanics, and iteration roadmap without fabricated metrics.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router, Static HTML Export)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Video Production:** Remotion 4.0 (React-driven programmatic video)
- **Audio Pipeline:** ElevenLabs Neural Voice Synthesis (Multilingual v2)
- **Deployment Target:** Cloudflare Pages (Pure Static CDN)

---

## 🌐 Bilingual Architecture (ID / EN)

- Instant, client-side language switching between **Bahasa Indonesia (ID)** and **English (EN)**.
- Persisted via `localStorage` across page navigations and reloads.
- 100% compatible with Next.js static export (`output: 'export'`) with zero URL duplication or full-page reloads.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (Node.js 24 supported)
- npm 10+

### Installation
```bash
git clone https://github.com/ftrnhasby/hasby-portfolio.git
cd hasby-portfolio
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Static Build
```bash
npm run build
```
Generates production-ready static assets in the `out/` directory.

### Linting
```bash
npm run lint
```

---

## 📄 License
© 2026 Hasby. All rights reserved.
