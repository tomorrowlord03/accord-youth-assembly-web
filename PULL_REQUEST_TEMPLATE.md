---
name: Pull Request Template
about: Standard PR template for Accord Youth Assembly Web
title: '[type]: [scope] description'
labels: ''
assignees: ''
---

## Summary
**What does this PR do?**  
A clear, concise description of the change.

**Related issue(s):**  
Fixes #<issue_number> / Relates to #<issue_number>

---

## Type of Change
- [ ] **feat** — New feature / component
- [ ] **fix** — Bug fix
- [ ] **design** — Design token updates (requires `design/*` branch)
- [ ] **docs** — Documentation only
- [ ] **refactor** — Code restructuring, no behavior change
- [ ] **perf** — Performance improvement
- [ ] **test** — Adding/updating tests
- [ ] **chore** — Maintenance, tooling, dependencies

---

## Scope
**Component(s) affected:**
- [ ] Hero / Nanku Fade-In Animation
- [ ] Live Countdown
- [ ] Committee Cards & Agenda Modals
- [ ] Nanku Music Player
- [ ] Ticket Pass Cards & Registration Modal
- [ ] Announcement Marquee
- [ ] Tape Placard
- [ ] Design Tokens (`DESIGN.md` + `design-tokens/tokens.json`)
- [ ] Global Styles / Layout
- [ ] Accessibility / Reduced Motion
- [ ] Documentation (README, CONTRIBUTING, etc.)
- [ ] CI/CD / Deployment
- [ ] Other: _______________

---

## Design Token Changes (if applicable)
> **Required for `design/*` branches**

- [ ] `DESIGN.md` updated
- [ ] `design-tokens/tokens.json` updated
- [ ] Visual regression tests pass
- [ ] Design review requested from @tomorrowlord03

**Token categories modified:**
- [ ] colors
- [ ] spacing
- [ ] typography
- [ ] motion
- [ ] shadows
- [ ] borders
- [ ] breakpoints
- [ ] z-index

---

## Testing Checklist
### Functional
- [ ] Feature works as intended in Chrome (latest)
- [ ] Feature works as intended in Firefox (latest)
- [ ] Feature works as intended in Safari (latest)
- [ ] No console errors or warnings

### Responsive
- [ ] Mobile (≤640px) — single column, touch targets ≥44px
- [ ] Tablet (641–1024px) — 2-column committee grid
- [ ] Desktop (>1024px) — full layout, hover states

### Accessibility (WCAG 2.1 AA)
- [ ] Keyboard navigation — all interactive elements reachable
- [ ] Focus indicators visible (cyan/pink focus rings)
- [ ] Color contrast ≥ 4.5:1 (verified in DevTools)
- [ ] Reduced motion respected (`prefers-reduced-motion`)
- [ ] Screen reader tested (NVDA / VoiceOver)
- [ ] Semantic HTML — landmarks, heading hierarchy
- [ ] ARIA labels / live regions for dynamic content

### Visual Regression (for design/component changes)
- [ ] Compared against reference screenshots in `design-tokens/references/`
- [ ] Neon colors fidelity: `#FF007A` (pink), `#FFE600` (yellow), `#00E5FF` (cyan)
- [ ] Hard shadows crisp (8px offset, no unintended blur)
- [ ] Typography `clamp()` scaling correct at breakpoints
- [ ] Animation timing: Nanku arrival 1.3s cubic-bezier(0.16, 1, 0.3, 1)
- [ ] Starburst stagger delays: 0.7s, 0.9s, 1.1s

---

## Screenshots / Recordings
| Before | After |
|--------|-------|
| ![before](url) | ![after](url) |

*Drag and drop images here, or link to Loom/Video for animations*

---

## Deployment Notes
- [ ] No action needed (documentation / design tokens only)
- [ ] Merged to `main` release branch
- [ ] Breaking change — version bump needed

---

## Additional Context
Any other information, configuration, or data that might be relevant (e.g., design decisions, tradeoffs, future considerations).

---

## Reviewer Assignment
- **Maintainer**: @tomorrowlord03

---

*Template version: 1.0 — Accord Youth Assembly 2026*