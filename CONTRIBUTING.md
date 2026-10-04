# Contributing to Accord Youth Assembly Web

Thank you for contributing to the official website and design system for **Accord Youth Assembly 2026 feat. NANKU**!

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Branching Strategy](#branching-strategy)
- [Design Token Changes](#design-token-changes)
- [Component Development](#component-development)
- [Pull Request Process](#pull-request-process)
- [Visual Regression Testing](#visual-regression-testing)
- [Accessibility Requirements](#accessibility-requirements)
- [Commit Message Convention](#commit-message-convention)

---

## Code of Conduct
This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/tomorrowlord03/accord-youth-assembly-web.git
cd accord-youth-assembly-web

# No build step required — this is a vanilla HTML/CSS/JS project
# Open index.html directly in a browser or serve with:
npx serve .
# or
python -m http.server 8000
```

---

## Branching Strategy

| Branch | Purpose | Protection |
|--------|---------|------------|
| `main` | Production-ready, deployable code | ✅ Required reviews, status checks |
| `develop` | Integration branch for features | ✅ Required reviews |
| `feature/*` | Individual features (components, pages, utils) | — |
| `design/*` | **Design token updates only** — protected | ✅ Required design review + visual regression |
| `fix/*` | Bug fixes | — |
| `docs/*` | Documentation updates | — |

### Branch Naming Conventions
```
feature/nanku-audio-player-waveform
feature/committee-agenda-modals
design/token-spacing-scale-v2
design/color-palette-extended
fix/countdown-timezone-offset
docs/contributing-guidelines-update
```

---

## Design Token Changes

**Design tokens are the single source of truth.** Changes to tokens affect the entire system.

### Token Files
- `DESIGN.md` — Canonical human-readable specification
- `design-tokens/tokens.json` — Machine-consumable token export (colors, spacing, typography, motion, shadows, borders)

### Process for Token Changes
1. Create a `design/*` branch from `develop`
2. Update both `DESIGN.md` and `design-tokens/tokens.json` in the same commit
3. Run visual regression tests (see below)
4. Open PR with `design/` prefix — requires **design review approval** from Anshuman (@tomorrowlord03)
5. Visual regression must pass before merge

### Token Categories
```
colors/         → Palette, semantic aliases, opacity scales
spacing/        → Base unit, scale, component spacing
typography/     → Font families, sizes, weights, line heights, letter spacing
motion/         → Durations, easings, keyframe definitions
shadows/        → Elevation levels, colored shadows, glow effects
borders/        → Widths, radii, styles
breakpoints/    → Responsive thresholds
z-index/        → Layering scale
```

---

## Component Development

### Component Structure (Future `src/` Migration)
When we graduate from prototype to production (`src/`), each component gets:
```
src/components/[ComponentName]/
├── ComponentName.html      # Template / markup
├── ComponentName.css       # Scoped styles (token-driven)
├── ComponentName.js        # Behavior logic
├── ComponentName.stories.js # Storybook stories (required)
├── ComponentName.test.js   # Unit tests
└── README.md               # Usage docs, props, variants
```

### Current Prototype Components (in `index.html`, `styles.css`, `app.js`)
| Component | Location | Status |
|-----------|----------|--------|
| Hero / Nanku Fade-In | `index.html:hero-section`, `styles.css:.nanku-fade-in` | ✅ Implemented |
| Live Countdown | `index.html:#countdown`, `app.js:Countdown` | ✅ Implemented |
| Committee Cards + Modals | `index.html:.committee-card`, `app.js:CommitteeModals` | ✅ Implemented |
| Nanku Music Player | `index.html:#music-player`, `app.js:MusicPlayer` | ✅ Implemented |
| Ticket Pass Cards | `index.html:.pass-card`, `app.js:PassRegistration` | ✅ Implemented |
| Announcement Marquee | `index.html:.marquee`, `styles.css:.marquee` | ✅ Implemented |
| Tape Placard | `index.html:.tape-placard`, `styles.css:.tape-placard` | ✅ Implemented |

### Requirements for New Components
1. **Token-driven**: Use only CSS custom properties from `design-tokens/tokens.json` — no hardcoded values
2. **Accessibility-first**: Semantic HTML, ARIA labels, focus states, keyboard navigation
3. **Responsive**: Mobile-first, test at all breakpoints (mobile ≤640px, tablet 641–1024px, desktop >1024px)
4. **Reduced motion**: Respect `@media (prefers-reduced-motion: reduce)`
5. **Storybook story** (when `src/` exists): All variants, states, and interactive controls
6. **Documentation**: Props, slots, CSS custom properties, usage examples

---

## Pull Request Process

### PR Title Format
```
[type]: [scope] short description

feat: committee add agenda modal keyboard navigation
fix: countdown timezone calculation for IST
design: tokens extend spacing scale for tighter cards
docs: readme add deployment instructions
```

### PR Checklist
- [ ] Branch follows naming convention
- [ ] Changes are scoped to a single concern
- [ ] `DESIGN.md` and `design-tokens/tokens.json` updated together (for token changes)
- [ ] Visual regression tests pass (for design/token/component changes)
- [ ] Accessibility audit: keyboard nav, contrast, ARIA, reduced motion
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Mobile responsive verified
- [ ] Documentation updated if API/surface changed
- [ ] No console errors or warnings

### Review Requirements
| Change Type | Required Reviews |
|-------------|------------------|
| Design tokens (`design/*`) | 1 design review (@tomorrowlord03) |
| New components | 1 review + accessibility check |
| Bug fixes | 1 review |
| Documentation | 1 review |

---

## Visual Regression Testing

### Setup (Future — Playwright + pixelmatch)
```bash
# Install
npm install --save-dev @playwright/test pixelmatch

# Run visual tests
npm run test:visual
```

### Current Manual Process
1. Open `index.html` in Chrome and Firefox
2. Compare against design reference screenshots in `design-tokens/references/`
3. Verify:
   - Color fidelity (especially neon pink `#FF007A`, cyber yellow `#FFE600`)
   - Shadow crispness (hard 8px offsets, no blur unless specified)
   - Typography scaling (`clamp()` behavior)
   - Animation timing (1.3s cubic-bezier for Nanku arrival)
   - Reduced motion fallback

### Visual Regression Gates
- **Design token PRs**: Must pass pixel-perfect comparison
- **Component PRs**: Must pass for all component states (default, hover, focus, active, disabled)
- **Breakpoint PRs**: Must pass at mobile, tablet, desktop viewports

---

## Accessibility Requirements

### Mandatory (WCAG 2.1 AA Minimum)
- **Color contrast**: All text ≥ 4.5:1 (headings ≥ 3:1); our neon tokens on navy exceed 7:1
- **Keyboard navigation**: Every interactive element reachable and operable via keyboard
- **Focus indicators**: Visible, high-contrast focus rings (use `--color-cyan-electric` or `--color-pink-burst`)
- **ARIA**: Proper roles, labels, live regions for dynamic content (countdown, music player)
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` disables non-essential animation
- **Alt text**: All images have meaningful `alt`; decorative images use `aria-hidden="true"`
- **Semantic HTML**: Landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), proper heading hierarchy

### Testing Checklist
- [ ] Tab through entire page — no focus traps
- [ ] Screen reader (NVDA/VoiceOver) announces content logically
- [ ] Color contrast verified with DevTools
- [ ] Reduced motion tested in OS settings
- [ ] Zoom to 200% — no horizontal scroll, content reflows

---

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `design` | Design token changes |
| `docs` | Documentation only |
| `style` | Formatting, no logic change |
| `refactor` | Code restructuring |
| `perf` | Performance improvement |
| `test` | Adding/updating tests |
| `chore` | Maintenance, tooling |

### Examples
```
feat(hero): add nanku ambient glow pulse animation
fix(countdown): correct IST offset for November 21
design(tokens): extend spacing scale with 0.5x step
docs(readme): add live demo badge and deployment steps
refactor(music-player): extract waveform visualizer module
```

---

## Questions?
Open a GitHub Discussion or reach out to:
- **Anshuman Yadav** (@tomorrowlord03) — Project Owner & Maintainer

---

*Last updated: October 2026*