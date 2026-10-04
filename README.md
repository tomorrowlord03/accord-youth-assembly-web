# Accord Youth Assembly 2026 • Feat. NANKU Live in Raipur

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Design System: V2](https://img.shields.io/badge/Design_System-v2.0-ff007f.svg)](DESIGN.md)

> **"Where Youth Voice Meets Governance."**  
> **Dates & Location:** November 21st – 22nd, 2026 • Raipur, Chhattisgarh  
> **Production & Management:** PB Party Bashers & HYPN Stuff in collaboration with Raipur Municipal Corporation.

---

## ✦ Overview
Official website and design system for **Accord Youth Assembly 2026** (`@accordyouthassembly`), a premier youth summit integrating international diplomacy (UNSC, NCW), national parliamentary debate (Lok Sabha), creator ecosystems (AIIM), investigative journalism (IP), and urban municipal planning (RMC), culminating in a landmark live concert by indie trailblazer **NANKU**.

---

## ✦ Key Features & Technical Highlights

- **Cinematic Artist Entrance**: High-priority preload (`fetchpriority="high"`) and smooth landing fade-in transition (`@keyframes nankuArrival` with `@starting-style` progressive enhancement) with ambient neon aura backlighting.
- **Y2K Neo-Brutalist Design System**: Strict adherence to the 949-line design tokens specification (`#0B1026` Deep Navy, `#FF007F` Neon Pink, `#FFCC00` Bright Yellow, `#00FFFF` Cyan) paired with unblurred 8px hard offset shadows and paper collage aesthetics.
- **Interactive Assembly Council Showcase**: 6 councils with dynamic category filter tabs and interactive **"View Agenda"** study guide modals.
- **Interactive Nanku Music Player**: Embedded audio player widget featuring 5 tracks (*Kaafizyada*, *Faasle*, *Karun Main Kya*, *Prarthana*, *Kya Baat Hai*), animated equalizer waveform visualizer, scrubber, and playback controls.
- **Ticket-Style Registration Flow**: 3 pass tiers (Student Delegate, All-Access VIP, Concert Fan) featuring ticket clip notches and an interactive registration modal.
- **Milestone & Live Countdown**: Dynamic milestone tracker (*"60+ REGISTRATIONS COMPLETED ✨"*) with capacity bar and live timer ticking to November 21, 2026.
- **Full Accessibility**: Respects `prefers-reduced-motion` and ensures WCAG AAA color contrast for dark mode.

---

## ✦ Repository Architecture

```
accord-youth-assembly-web/
├── assets/
│   ├── nanku.jpeg              # Studio portrait of Nanku
│   └── poster-feed.jpeg        # Instagram campaign feed poster
├── design-tokens/
│   ├── DESIGN.md               # Master design system specification (v2.0)
│   └── tokens.json             # Programmatic design tokens export
├── index.html                  # Production web application (GitHub Pages entry)
├── styles.css                  # Token-based CSS architecture
├── app.js                      # Interactive client controller
├── DESIGN.md                   # Canonical design document
├── CONTRIBUTING.md             # Contributor guidelines & branch conventions
└── README.md                   # Repository documentation
```

---

## ✦ Branching & Contribution Workflow

- **`main`**: Primary production release branch.
- **`develop`**: Integration branch for upcoming features.
- **`feature/*`**: Component and page development.
- **`design/*`**: Design token updates (requires visual regression check).

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for full setup instructions, PR templates, and coding standards.
---

## ✦ Author & Maintainer

- **Anshuman Yadav ([@tomorrowlord03](https://github.com/tomorrowlord03))**: Concept, Architecture, Design System, UI Engineering & Performance
