# Design System: Accord Youth Assembly Website

**Version:** 1.0.0
**Last Updated:** 2026-10-04
**Author:** Anshuman Yadav (@tomorrowlord03)
**Scope:** Website for Accord Youth Assembly featuring Nanku (singer artist)

---

## 1. Brand Overview

| Property | Value |
|----------|-------|
| **Brand Name** | Accord Youth Assembly |
| **Tagline** | Where Youth Voice Meets Governance |
| **Vibe** | High-energy, Activist, Political, Youthful, Collage-style |
| **Context** | Youth political conference/assembly (MUN/Parliament style) featuring Indian & global governance committees + cultural events |
| **Featured Artist** | Nanku (Singer/Artist) |
| **Target Audience** | Gen Z students, young professionals, influencers, policy enthusiasts |
| **Primary Locations** | Raipur, India (with national reach) |

---

## 2. Color Tokens

### 2.1 Core Palette (Semantic)

```json
{
  "color": {
    "background": {
      "primary": { "value": "#0B1026", "description": "Deep Navy - Main background for 90% of surfaces" },
      "secondary": { "value": "#FFFFFF", "description": "Pure White - Inverted card backgrounds" },
      "tertiary": { "value": "#05070A", "description": "Near Black - Hero sections, footers" },
      "overlay": { "value": "rgba(11, 16, 38, 0.85)", "description": "Dark overlay for image legibility" }
    },
    "text": {
      "primary": { "value": "#FFFFFF", "description": "Pure White - Primary text on dark backgrounds" },
      "secondary": { "value": "#E8E8E8", "description": "Off-white - Secondary text, descriptions" },
      "muted": { "value": "#A0A8B8", "description": "Muted - Timestamps, meta info" },
      "inverse": { "value": "#0B1026", "description": "Dark Navy - Text on white backgrounds" },
      "accent": { "value": "#FFCC00", "description": "Bright Yellow - Highlighted text, headlines" }
    },
    "accent": {
      "pink": { "value": "#FF007F", "description": "Neon Pink - Primary action, energy, activism" },
      "yellow": { "value": "#FFCC00", "description": "Bright Yellow - Headlines, attention, stars" },
      "cyan": { "value": "#00FFFF", "description": "Cyan - Rare highlights, tech/futuristic elements" }
    },
    "border": {
      "primary": { "value": "#FFFFFF", "description": "White - Thick collage-style borders" },
      "accent": { "value": "#FF007F", "description": "Pink - Accent borders, focus states" },
      "subtle": { "value": "rgba(255, 255, 255, 0.2)", "description": "Subtle dividers" }
    },
    "status": {
      "success": { "value": "#00E676", "description": "Green - Registrations open, confirmed" },
      "warning": { "value": "#FFCC00", "description": "Yellow - Pending, limited spots" },
      "error": { "value": "#FF1744", "description": "Red - Sold out, errors" },
      "info": { "value": "#00FFFF", "description": "Cyan - Information" }
    }
  }
}
```

### 2.2 Gradient Tokens

```json
{
  "gradient": {
    "hero": {
      "value": "linear-gradient(135deg, #0B1026 0%, #1A1F3A 50%, #0B1026 100%)",
      "description": "Hero section background"
    },
    "card": {
      "value": "linear-gradient(145deg, #0B1026 0%, #141A35 100%)",
      "description": "Standard card background"
    },
    "pinkEnergy": {
      "value": "linear-gradient(90deg, #FF007F 0%, #FF3399 100%)",
      "description": "Pink energy gradient for buttons, highlights"
    },
    "yellowGlow": {
      "value": "radial-gradient(circle at center, #FFCC00 0%, transparent 70%)",
      "description": "Yellow glow behind headlines"
    },
    "overlay": {
      "value": "linear-gradient(180deg, rgba(11,16,38,0) 0%, #0B1026 100%)",
      "description": "Image overlay fade"
    }
  }
}
```

---

## 3. Typography Tokens

### 3.1 Font Families

```json
{
  "fontFamily": {
    "display": {
      "value": "'Anton', 'Oswald', 'Impact', sans-serif",
      "description": "Condensed ultra-bold for headlines",
      "fallback": "Arial Black, Helvetica Bold"
    },
    "heading": {
      "value": "'Oswald', 'Roboto Condensed', sans-serif",
      "description": "Condensed bold for section headers",
      "fallback": "Arial Bold"
    },
    "body": {
      "value": "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
      "description": "Clean readable body text",
      "fallback": "system-ui"
    },
    "mono": {
      "value": "'JetBrains Mono', 'Fira Code', monospace",
      "description": "Code, ticket numbers, dates"
    },
    "decorative": {
      "value": "'Permanent Marker', 'Architects Daughter', cursive",
      "description": "Handwritten style for slogans, stickers"
    }
  }
}
```

### 3.2 Type Scale (Mobile-first, clamp for fluid scaling)

```json
{
  "typeScale": {
    "display-1": { "fontFamily": "display", "fontSize": "clamp(2.5rem, 8vw, 5rem)", "fontWeight": 900, "lineHeight": 1.05, "letterSpacing": "-0.04em", "textTransform": "uppercase" },
    "display-2": { "fontFamily": "display", "fontSize": "clamp(2rem, 6vw, 3.5rem)", "fontWeight": 800, "lineHeight": 1.1, "letterSpacing": "-0.03em", "textTransform": "uppercase" },
    "display-3": { "fontFamily": "display", "fontSize": "clamp(1.5rem, 4vw, 2.5rem)", "fontWeight": 700, "lineHeight": 1.15, "letterSpacing": "-0.02em", "textTransform": "uppercase" },
    "heading-1": { "fontFamily": "heading", "fontSize": "clamp(1.75rem, 4vw, 2.5rem)", "fontWeight": 700, "lineHeight": 1.2, "letterSpacing": "-0.01em", "textTransform": "uppercase" },
    "heading-2": { "fontFamily": "heading", "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": 600, "lineHeight": 1.25, "letterSpacing": "0", "textTransform": "uppercase" },
    "heading-3": { "fontFamily": "heading", "fontSize": "clamp(1.25rem, 2.5vw, 1.5rem)", "fontWeight": 600, "lineHeight": 1.3, "letterSpacing": "0", "textTransform": "uppercase" },
    "body-lg": { "fontFamily": "body", "fontSize": "clamp(1.125rem, 1.5vw, 1.25rem)", "fontWeight": 400, "lineHeight": 1.6, "letterSpacing": "0" },
    "body": { "fontFamily": "body", "fontSize": "1rem", "fontWeight": 400, "lineHeight": 1.6, "letterSpacing": "0" },
    "body-sm": { "fontFamily": "body", "fontSize": "0.875rem", "fontWeight": 400, "lineHeight": 1.5, "letterSpacing": "0" },
    "label": { "fontFamily": "heading", "fontSize": "0.75rem", "fontWeight": 600, "lineHeight": 1.4, "letterSpacing": "0.1em", "textTransform": "uppercase" },
    "caption": { "fontFamily": "body", "fontSize": "0.75rem", "fontWeight": 400, "lineHeight": 1.4, "letterSpacing": "0" },
    "decorative": { "fontFamily": "decorative", "fontSize": "clamp(1rem, 2vw, 1.5rem)", "fontWeight": 400, "lineHeight": 1.4, "letterSpacing": "0" },
    "ticket": { "fontFamily": "mono", "fontSize": "0.75rem", "fontWeight": 500, "lineHeight": 1.3, "letterSpacing": "0.15em", "textTransform": "uppercase" }
  }
}
```

---

## 4. Spacing Tokens

```json
{
  "spacing": {
    "0": "0",
    "1": "0.25rem",   // 4px
    "2": "0.5rem",    // 8px
    "3": "0.75rem",   // 12px
    "4": "1rem",      // 16px - Base unit
    "5": "1.25rem",   // 20px
    "6": "1.5rem",    // 24px
    "8": "2rem",      // 32px
    "10": "2.5rem",   // 40px
    "12": "3rem",     // 48px
    "16": "4rem",     // 64px
    "20": "5rem",     // 80px
    "24": "6rem",     // 96px
    "fluid-sm": "clamp(1rem, 3vw, 1.5rem)",
    "fluid-md": "clamp(2rem, 5vw, 3rem)",
    "fluid-lg": "clamp(3rem, 8vw, 5rem)",
    "fluid-xl": "clamp(4rem, 10vw, 8rem)"
  }
}
```

---

## 5. Border & Radius Tokens

```json
{
  "border": {
    "width": {
      "hairline": "1px",
      "thin": "2px",
      "standard": "4px",
      "thick": "8px",
      "collage": "16px"
    },
    "radius": {
      "none": "0",
      "sharp": "2px",
      "small": "4px",
      "medium": "8px",
      "large": "16px",
      "pill": "9999px",
      "collage": "0" // Sharp corners for collage aesthetic
    },
    "style": {
      "solid": "solid",
      "dashed": "dashed",
      "pixel": "2px solid #FFFFFF" // Retro pixel border
    }
  }
}
```

---

## 6. Shadow Tokens

```json
{
  "shadow": {
    "none": "none",
    "hard": "8px 8px 0 0 #FFFFFF", // Collage-style hard shadow
    "hardPink": "8px 8px 0 0 #FF007F",
    "hardYellow": "8px 8px 0 0 #FFCC00",
    "elevation-1": "0 2px 8px rgba(0,0,0,0.3)",
    "elevation-2": "0 8px 24px rgba(0,0,0,0.4)",
    "elevation-3": "0 16px 48px rgba(0,0,0,0.5)",
    "glow-pink": "0 0 24px rgba(255, 0, 127, 0.4)",
    "glow-yellow": "0 0 24px rgba(255, 204, 0, 0.4)",
    "inner": "inset 0 2px 4px rgba(0,0,0,0.2)"
  }
}
```

---

## 7. Breakpoint Tokens

```json
{
  "breakpoint": {
    "xs": "320px",
    "sm": "480px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px",
    "container": "1200px"
  }
}
```

---

## 8. Z-Index Tokens

```json
{
  "zIndex": {
    "base": 0,
    "dropdown": 100,
    "sticky": 200,
    "modal-backdrop": 300,
    "modal": 400,
    "popover": 500,
    "tooltip": 600,
    "toast": 700,
    "loader": 800
  }
}
```

---

## 9. Animation & Transition Tokens

```json
{
  "motion": {
    "duration": {
      "instant": "0ms",
      "fast": "150ms",
      "normal": "250ms",
      "slow": "350ms",
      "slower": "500ms"
    },
    "easing": {
      "linear": "linear",
      "easeOut": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "easeIn": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      "easeInOut": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      "sharp": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    "transition": {
      "fast": "150ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "normal": "250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "all": "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    }
  }
}
```

---

## 10. Component Tokens

### 10.1 Buttons

```json
{
  "button": {
    "base": {
      "fontFamily": "heading",
      "fontSize": "label",
      "fontWeight": 600,
      "textTransform": "uppercase",
      "letterSpacing": "0.1em",
      "padding": "1rem 2rem",
      "borderRadius": "sharp",
      "border": "none",
      "cursor": "pointer",
      "transition": "all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    },
    "variants": {
      "primary": {
        "background": "#FF007F",
        "color": "#FFFFFF",
        "border": "4px solid #FFFFFF",
        "boxShadow": "8px 8px 0 0 #FFFFFF",
        "_hover": { "background": "#FFFFFF", "color": "#FF007F", "boxShadow": "8px 8px 0 0 #FF007F" },
        "_active": { "transform": "translate(4px, 4px)", "boxShadow": "4px 4px 0 0 #FF007F" },
        "_focus": { "outline": "3px solid #FFCC00", "outlineOffset": "4px" }
      },
      "secondary": {
        "background": "#FFCC00",
        "color": "#0B1026",
        "border": "4px solid #0B1026",
        "boxShadow": "8px 8px 0 0 #0B1026",
        "_hover": { "background": "#0B1026", "color": "#FFCC00", "boxShadow": "8px 8px 0 0 #FFCC00" },
        "_active": { "transform": "translate(4px, 4px)", "boxShadow": "4px 4px 0 0 #0B1026" }
      },
      "ghost": {
        "background": "transparent",
        "color": "#FFFFFF",
        "border": "4px solid #FFFFFF",
        "_hover": { "background": "#FFFFFF", "color": "#0B1026" }
      },
      "outline": {
        "background": "transparent",
        "color": "#FF007F",
        "border": "4px solid #FF007F",
        "_hover": { "background": "#FF007F", "color": "#FFFFFF" }
      }
    },
    "sizes": {
      "sm": { "padding": "0.5rem 1.25rem", "fontSize": "0.625rem" },
      "md": { "padding": "1rem 2rem", "fontSize": "0.75rem" },
      "lg": { "padding": "1.25rem 3rem", "fontSize": "1rem" },
      "xl": { "padding": "1.5rem 4rem", "fontSize": "1.25rem" }
    }
  }
}
```

### 10.2 Cards

```json
{
  "card": {
    "base": {
      "background": "#0B1026",
      "border": "4px solid #FFFFFF",
      "borderRadius": "none",
      "boxShadow": "8px 8px 0 0 #FFFFFF",
      "overflow": "hidden",
      "position": "relative"
    },
    "variants": {
      "default": {
        "background": "linear-gradient(145deg, #0B1026 0%, #141A35 100%)",
        "border": "4px solid #FFFFFF"
      },
      "inverted": {
        "background": "#FFFFFF",
        "border": "4px solid #0B1026",
        "boxShadow": "8px 8px 0 0 #0B1026"
      },
      "accent-pink": {
        "border": "4px solid #FF007F",
        "boxShadow": "8px 8px 0 0 #FF007F"
      },
      "accent-yellow": {
        "border": "4px solid #FFCC00",
        "boxShadow": "8px 8px 0 0 #FFCC00"
      },
      "photo": {
        "border": "none",
        "boxShadow": "none",
        "borderRadius": "none"
      },
      "ticket": {
        "background": "#0B1026",
        "border": "4px solid #FFFFFF",
        "borderRadius": "none",
        "boxShadow": "8px 8px 0 0 #FFFFFF",
        "clipPath": "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, calc(100% - 40px) 100%, 0 100%)"
      }
    },
    "padding": {
      "none": "0",
      "sm": "1rem",
      "md": "1.5rem",
      "lg": "2rem",
      "xl": "3rem"
    }
  }
}
```

### 10.3 Form Inputs

```json
{
  "input": {
    "base": {
      "fontFamily": "body",
      "fontSize": "1rem",
      "padding": "1rem 1.25rem",
      "background": "rgba(255,255,255,0.05)",
      "border": "2px solid rgba(255,255,255,0.3)",
      "borderRadius": "sharp",
      "color": "#FFFFFF",
      "width": "100%",
      "transition": "border-color 150ms, box-shadow 150ms, background 150ms"
    },
    "states": {
      "_placeholder": { "color": "#6A7488" },
      "_hover": { "borderColor": "rgba(255,255,255,0.6)", "background": "rgba(255,255,255,0.08)" },
      "_focus": { "borderColor": "#FF007F", "boxShadow": "0 0 0 4px rgba(255, 0, 127, 0.2)", "outline": "none" },
      "_error": { "borderColor": "#FF1744", "boxShadow": "0 0 0 4px rgba(255, 23, 68, 0.2)" },
      "_disabled": { "opacity": 0.5, "cursor": "not-allowed" }
    },
    "label": {
      "fontFamily": "heading",
      "fontSize": "label",
      "fontWeight": 600,
      "textTransform": "uppercase",
      "color": "#FFCC00",
      "marginBottom": "0.5rem",
      "display": "block"
    },
    "error": {
      "fontFamily": "body",
      "fontSize": "body-sm",
      "color": "#FF1744",
      "marginTop": "0.375rem"
    }
  }
}
```

### 10.4 Navigation

```json
{
  "navigation": {
    "header": {
      "height": "80px",
      "background": "rgba(11, 16, 38, 0.95)",
      "backdropFilter": "blur(12px)",
      "borderBottom": "1px solid rgba(255,255,255,0.1)",
      "position": "sticky",
      "top": 0,
      "zIndex": 200
    },
    "logo": {
      "fontFamily": "display",
      "fontSize": "1.5rem",
      "fontWeight": 900,
      "color": "#FFCC00",
      "letterSpacing": "-0.03em",
      "textTransform": "uppercase"
    },
    "navLink": {
      "fontFamily": "heading",
      "fontSize": "0.875rem",
      "fontWeight": 500,
      "color": "#FFFFFF",
      "textTransform": "uppercase",
      "letterSpacing": "0.05em",
      "padding": "0.5rem 1rem",
      "borderRadius": "sharp",
      "transition": "color 150ms, background 150ms",
      "_hover": { "color": "#FFCC00" },
      "_active": { "color": "#FF007F", "background": "rgba(255, 0, 127, 0.1)" }
    },
    "mobileMenu": {
      "background": "#0B1026",
      "borderTop": "1px solid rgba(255,255,255,0.1)",
      "padding": "1.5rem",
      "animation": "slideDown 250ms easeOut"
    }
  }
}
```

### 10.5 Hero Section

```json
{
  "hero": {
    "minHeight": "100vh",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative",
    "background": "linear-gradient(135deg, #0B1026 0%, #1A1F3A 50%, #0B1026 100%)",
    "overflow": "hidden",
    "content": {
      "maxWidth": "900px",
      "padding": "2rem",
      "textAlign": "center",
      "zIndex": 10
    },
    "headline": {
      "fontFamily": "display",
      "fontSize": "clamp(3rem, 10vw, 7rem)",
      "fontWeight": 900,
      "lineHeight": 1,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase",
      "color": "#FFCC00",
      "textShadow": "0 0 60px rgba(255, 204, 0, 0.3)",
      "marginBottom": "1.5rem"
    },
    "subheadline": {
      "fontFamily": "heading",
      "fontSize": "clamp(1.25rem, 3vw, 2rem)",
      "fontWeight": 600,
      "lineHeight": 1.3,
      "letterSpacing": "0.02em",
      "textTransform": "uppercase",
      "color": "#FF007F",
      "marginBottom": "2rem"
    },
    "description": {
      "fontFamily": "body",
      "fontSize": "clamp(1rem, 2vw, 1.25rem)",
      "lineHeight": 1.7,
      "color": "#E8E8E8",
      "maxWidth": "600px",
      "margin": "0 auto 3rem"
    },
    "ctaGroup": {
      "display": "flex",
      "gap": "1.5rem",
      "justifyContent": "center",
      "flexWrap": "wrap"
    },
    "decorativeElements": {
      "stars": { "position": "absolute", "opacity": 0.15, "animation": "float 6s ease-in-out infinite" },
      "particles": { "position": "absolute", "pointerEvents": "none" }
    }
  }
}
```

---

## 11. Layout Tokens

```json
{
  "layout": {
    "container": {
      "maxWidth": "1200px",
      "padding": "0 1.5rem",
      "margin": "0 auto"
    },
    "section": {
      "paddingY": "clamp(4rem, 10vw, 8rem)",
      "paddingX": "1.5rem"
    },
    "grid": {
      "columns": 12,
      "gap": "clamp(1.5rem, 3vw, 2rem)"
    },
    "sidebar": {
      "width": "280px",
      "collapsedWidth": "72px"
    }
  }
}
```

---

## 12. Visual Effects & Patterns

### 12.1 Collage Aesthetic Utilities

```css
/* Utility classes for the collage aesthetic */
.collage-border { border: 4px solid #FFFFFF; box-shadow: 8px 8px 0 0 #FFFFFF; }
.collage-border-pink { border: 4px solid #FF007F; box-shadow: 8px 8px 0 0 #FF007F; }
.collage-border-yellow { border: 4px solid #FFCC00; box-shadow: 8px 8px 0 0 #FFCC00; }

.collage-rotate-1 { transform: rotate(-2deg); }
.collage-rotate-2 { transform: rotate(2deg); }
.collage-rotate-3 { transform: rotate(-1.5deg); }

.photo-frame { border: 16px solid #FFFFFF; box-shadow: 0 0 0 4px #0B1026, 0 0 0 8px #FFFFFF; }

.pixel-border { border: 4px solid #FFFFFF; background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><rect width='4' height='4' fill='white'/><rect x='4' y='4' width='4' height='4' fill='white'/></svg>"); }

.star-burst::before {
  content: "★";
  position: absolute;
  color: #FF007F;
  font-size: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

.megaphone-icon::before { content: "📢"; }
.lightning-icon::before { content: "⚡"; }
```

### 12.2 Keyframe Animations

```json
{
  "keyframes": {
    "float": "0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); }",
    "pulse": "0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; }",
    "slideDown": "from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); }",
    "slideUp": "from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }",
    "fadeIn": "from { opacity: 0; } to { opacity: 1; }",
    "scaleIn": "from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }",
    "glowPulse": "0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 127, 0.3); } 50% { box-shadow: 0 0 40px rgba(255, 0, 127, 0.6); }",
    "marquee": "from { transform: translateX(0); } to { transform: translateX(-50%); }",
    "shimmer": "0% { background-position: -200% 0; } 100% { background-position: 200% 0; }"
  }
}
```

---

## 13. Page-Specific Design Specs

### 13.1 Home Page

| Section | Design Spec |
|---------|-------------|
| **Hero** | Full viewport, Nanku photo + event title "NANKU LIVE @ ACCORD", yellow headline, pink sub-headline, dual CTAs (Register, Watch Trailer) |
| **Countdown** | Ticket-style cards with flip animation, yellow numbers on navy |
| **Committees Grid** | 3-column desktop, collage cards with committee icons (UNSC, NCW, Lok Sabha, AIIM, IP) |
| **Nanku Feature** | Split layout: photo + bio, pink accent border, audio player widget |
| **Registration Stats** | Animated counters, "60+ Registrations" milestone badge |
| **Partners** | Logo carousel with grayscale→color hover, Raipur Municipal Corp highlighted |
| **Footer** | Dark navy, white borders, social links, newsletter signup |

### 13.2 Committees Page

| Element | Spec |
|---------|------|
| **Header** | "COMMITTEES & AGENDAS" in display-2, yellow |
| **Filter Tabs** | Pill buttons, pink active, ghost inactive |
| **Committee Cards** | Collage cards, committee icon + name + short desc, "View Agenda" button |
| **Agenda Modal** | Full-screen, navy bg, white borders, accordion sections |

### 13.3 Nanku Artist Page

| Element | Spec |
|---------|------|
| **Hero** | Full-bleed artist photo, overlay gradient, name in display-1 yellow |
| **Bio** | Two-column: narrative text + stats cards (streams, followers, cities) |
| **Music Player** | Sticky bottom bar, pink progress, yellow current time |
| **Gallery** | Masonry grid, collage borders, lightbox on click |
| **Tour Dates** | Ticket-style cards, venue + date + "GET TICKETS" button |

### 13.4 Registration Page

| Element | Spec |
|---------|------|
| **Header** | "REGISTER FOR ACCORD 2026" display-2 |
| **Progress** | Step indicator: Delegate Type → Details → Payment → Confirmation |
| **Form** | Dark inputs, pink focus, yellow labels, inline validation |
| **Delegate Cards** | Radio-style cards: Student / Influencer / Press / Observer |
| **Summary** | Ticket-style confirmation card with QR code placeholder |

---

## 14. Accessibility Tokens

```json
{
  "a11y": {
    "focusRing": "0 0 0 3px #FFCC00",
    "focusOffset": "4px",
    "minContrast": "WCAG AA (4.5:1)",
    "reducedMotion": "prefers-reduced-motion: reduce",
    "skipLink": {
      "position": "absolute",
      "top": "-100%",
      "left": "1rem",
      "padding": "1rem",
      "background": "#FF007F",
      "color": "#FFFFFF",
      "zIndex": 9999,
      "_focus": { "top": "1rem" }
    }
  }
}
```

---

## 15. Content Guidelines

### 15.1 Voice & Tone

| Context | Tone |
|---------|------|
| **Headlines** | Bold, urgent, uppercase, declarative |
| **Body Copy** | Direct, energetic, inclusive, slightly informal |
| **CTAs** | Action-oriented, first-person ("Claim My Spot", "Hear Nanku Live") |
| **Error States** | Helpful, not robotic ("Oops! That email's taken. Try another?") |
| **Success** | Celebratory ("You're in! 🎉 Check your inbox") |

### 15.2 Copy Patterns

- **Dates:** "NOV 21-22, 2026" (uppercase month, ticket style)
- **Locations:** "RAIPUR, CHHATTISGARH" (uppercase, spaced)
- **Committees:** "UNSC • NCW • LOK SABHA • AIIM • IP" (bullets, caps)
- **Milestones:** "60+ REGISTRATIONS ✨" (number + emoji)

---

## 16. Asset Requirements

### 16.1 Images

| Asset | Specs | Usage |
|-------|-------|-------|
| **Nanku Hero** | 1920x1080 min, 3:2 ratio, high contrast | Home hero, artist page |
| **Committee Icons** | SVG, 64x64, single color (white) | Committee cards, nav |
| **Partner Logos** | SVG preferred, max-height 60px | Footer, partners section |
| **Background Textures** | 2000x2000, seamless, low opacity | Section backgrounds |
| **Collage Elements** | PNG with transparency (stars, lightning, megaphones) | Decorative scattering |

### 16.2 Fonts to Load

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Permanent+Marker&display=swap" rel="stylesheet">
```

### 16.3 Favicon & PWA

- Favicon: 32x32, pink star on navy
- Apple Touch Icon: 180x180
- Manifest: name="Accord Youth Assembly", theme_color="#0B1026", background_color="#0B1026"

---

## 17. Implementation Checklist

### Phase 1: Foundation
- [ ] Set up CSS custom properties from tokens
- [ ] Configure Tailwind/UnoCSS/Styled Components with theme
- [ ] Load fonts with `font-display: swap`
- [ ] Create base reset & global styles

### Phase 2: Core Components
- [ ] Button (all variants + sizes)
- [ ] Card (all variants)
- [ ] Input/Form components
- [ ] Navigation/Header
- [ ] Modal/Dialog
- [ ] Toast/Notification

### Phase 3: Layout Components
- [ ] Container
- [ ] Grid/Flex utilities
- [ ] Section wrapper
- [ ] Hero component

### Phase 4: Pages
- [ ] Home
- [ ] Committees
- [ ] Nanku Artist Page
- [ ] Registration Flow
- [ ] Schedule/Agenda
- [ ] Partners/Sponsors

### Phase 5: Polish
- [ ] Collage decorative components (StarBurst, Megaphone, Lightning)
- [ ] Scroll animations (IntersectionObserver)
- [ ] Music player (Nanku tracks)
- [ ] Countdown timer
- [ ] Registration confirmation email template

---

## 18. Developer Notes

### CSS Custom Properties (Root)

```css
:root {
  /* Colors */
  --color-bg-primary: #0B1026;
  --color-bg-secondary: #FFFFFF;
  --color-bg-tertiary: #05070A;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #E8E8E8;
  --color-text-muted: #A0A8B8;
  --color-text-inverse: #0B1026;
  --color-accent-pink: #FF007F;
  --color-accent-yellow: #FFCC00;
  --color-accent-cyan: #00FFFF;
  --color-border-primary: #FFFFFF;
  --color-border-accent: #FF007F;
  
  /* Typography */
  --font-display: 'Anton', 'Oswald', 'Impact', sans-serif;
  --font-heading: 'Oswald', 'Roboto Condensed', sans-serif;
  --font-body: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-decorative: 'Permanent Marker', cursive;
  
  /* Spacing */
  --space-unit: 1rem;
  --container-max: 1200px;
  
  /* Shadows */
  --shadow-collage: 8px 8px 0 0 var(--color-border-primary);
  --shadow-collage-pink: 8px 8px 0 0 var(--color-accent-pink);
  --shadow-glow-pink: 0 0 24px rgba(255, 0, 127, 0.4);
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --transition-normal: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Z-index */
  --z-sticky: 200;
  --z-modal: 400;
}

/* Dark mode is default - no light mode needed per brand */
```

### Performance Budget

| Metric | Target |
|--------|--------|
| **LCP** | < 2.5s |
| **CLS** | < 0.1 |
| **FID** | < 100ms |
| **Total JS** | < 150KB gzipped |
| **Total CSS** | < 50KB gzipped |
| **Fonts** | < 100KB (subsetted) |
| **Images** | WebP/AVIF, responsive, lazy-loaded |

---

## 19. File Structure Recommendation

```
src/
├── design-tokens/
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   ├── shadows.json
│   ├── breakpoints.json
│   └── index.ts (exports all)
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── index.ts
│   ├── layout/
│   │   ├── Container/
│   │   ├── Grid/
│   │   ├── Section/
│   │   └── Header/
│   └── features/
│       ├── Hero/
│       ├── CommitteeCard/
│       ├── NankuPlayer/
│       ├── RegistrationForm/
│       ├── Countdown/
│       └── CollageElements/
├── pages/
│   ├── Home/
│   ├── Committees/
│   ├── Artist/
│   ├── Register/
│   └── Schedule/
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   ├── utilities.css
│   └── animations.css
└── utils/
    ├── cn.ts (classnames helper)
    └── formatters.ts
```

---

## 20. Quick Reference Card

```
╔══════════════════════════════════════════════════════════════════╗
║              ACCORD YOUTH ASSEMBLY - DESIGN QUICK REF           ║
╠══════════════════════════════════════════════════════════════════╣
║  BACKGROUND:    #0B1026 (Deep Navy)                              ║
║  TEXT:          #FFFFFF (White)                                  ║
║  ACCENT PINK:   #FF007F (Neon Pink - Actions, Energy)           ║
║  ACCENT YELLOW: #FFCC00 (Bright Yellow - Headlines, Stars)      ║
║  ACCENT CYAN:   #00FFFF (Rare highlights)                        ║
║                                                                    ║
║  FONT DISPLAY:  Anton/Oswald - UPPERCASE, TIGHT, BOLD           ║
║  FONT HEADING:  Oswald - UPPERCASE, SEMI-CONDENSED              ║
║  FONT BODY:     Inter - Clean, readable                          ║
║  FONT DECORATIVE: Permanent Marker - Slogans, stickers          ║
║                                                                    ║
║  BORDER:        4px solid #FFFFFF (collage style)               ║
║  SHADOW:        8px 8px 0 0 #FFFFFF (hard, no blur)             ║
║  RADIUS:        0-2px (sharp, ticket-style)                     ║
║                                                                    ║
║  BUTTON PRIMARY:  Pink bg, White text, White border, Hard shadow║
║  BUTTON SECONDARY: Yellow bg, Navy text, Navy border, Hard shadow║
║  CARD:            Navy bg, White border, Hard shadow            ║
║  INPUT:           Transparent bg, White border, Pink focus      ║
║                                                                    ║
║  KEY PATTERNS:  Stars ★  Megaphone 📢  Lightning ⚡              ║
║                 Thick borders, Rotation (-2deg to 2deg)         ║
║                 Ticket clip-path, Pixel borders                 ║
╚══════════════════════════════════════════════════════════════════╝
```

---

*End of DESIGN.md — This document contains all design tokens and specifications needed to build the Accord Youth Assembly website featuring Nanku. All values are derived from the @accordyouthassembly Instagram brand identity.*