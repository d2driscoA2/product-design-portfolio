# DisplayedUX — Brand Design Guide
**Danny Driscoll · Strategic Product Design**
Version 1.0 · March 2026

---

## 01. Brand Identity

**Brand Name:** DisplayedUX
**Tagline:** Strategic Product Design
**Full Name Usage:** DisplayedUX — Strategic Product Design
**Logo Wordmark:** "Displayed" + "UX" (UX renders in accent color)

### Logo Mark
The logo mark is a bull's-eye of four concentric circles. Color order from outside in:
- Outer ring: Royal Blue #4063FB
- Second ring: Coral #FF6F6E
- Third ring: Magenta #FF00AA
- Center: Amber #F5C200

**Logo rules:**
- Outer ring always gets a white stroke (strokeWidth 2) when on colored backgrounds
- On blue footer: use footer variant with white wordmark, amber UX
- On white/light nav: use default variant with dark wordmark
- Never alter the four circle colors
- Never add stroke to inner rings, outer ring only

### Decorative Bull's-eye Usage
The bull's-eye is used as a large decorative background element throughout the site.
- Hero: 520px, half-cropped off right edge, opacity 0.12, 60s slow rotation
- Philosophy section: 6 small floating instances (80-180px), opacity varies by theme
- Light mode opacity: .bullseye-float 0.10, .bullseye-float-alt 0.12
- Dark mode opacity: .bullseye-float 0.14, .bullseye-float-alt 0.16
- Always aria-hidden, pointer-events none
- Always respect prefers-reduced-motion

---

## 02. Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Royal Blue | #4063FB | Primary interactive, CTAs, footer bg, section accents |
| Coral | #FF6F6E | Hero accent, pull quote borders, eyebrow rules |
| Magenta | #FF00AA | Accent, Universal College App case study |
| Amber | #F5C200 | Accent, center bull's-eye, UX wordmark in footer |
| Light Blue | #5B9FE8 | Stats, Fraud Prevention case study accent |
| Charcoal | #606060 | Body text, footer background (non-blue contexts) |
| Off-white | #F2F2F2 | Page background secondary |
| Near-black | #1A1A1A | Primary text light mode |
| Near-white | #F5F5F5 | Primary text dark mode |
| Muted | #9CA3AF | Secondary text, labels, muted content |

### Case Study Accent Colors
- Self-Service Portal: Coral #FF6F6E
- Fraud Prevention Suite: Light Blue #5B9FE8
- Messaging API: Amber #F5C200
- Universal College App: Magenta #FF00AA

---

## 03. Typography

**Display/Heading font:** Plus Jakarta Sans
**Body font:** Inter

| Scale | Size | Weight | Usage |
|-------|------|--------|-------|
| Display | 72px | 800 | Hero headline |
| H1 | 48px | 700 | Page headings |
| H2 | 36px | 700 | Section headings |
| H3 | 24px | 600 | Card titles |
| Body Large | 18px | 400 | Lead paragraphs |
| Body | 16px | 400 | General body copy |
| Small | 14px | 400 | Secondary content |
| Label | 0.65rem | 600 | Eyebrow labels, uppercase, tracked wide |

### Typography Rules
- Max 2 typefaces anywhere on the site
- Eyebrow labels: always uppercase, tracked wide, preceded by a coral rule (w-8 h-px bg-brand-coral)
- Pull quotes: italic, larger size, coral left border
- Never use em dashes in copy

---

## 04. Light / Dark Mode

**Default:** Light mode
**Toggle:** Sun/moon icon in nav, saves to localStorage
**Implementation:** CSS custom properties on html[data-theme="dark"]

### CSS Variables

```css
:root {
  --color-bg: #FFFFFF;
  --color-bg-secondary: #F2F2F2;
  --color-bg-card: #FFFFFF;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #606060;
  --color-text-muted: #9CA3AF;
  --color-border: #E5E7EB;
  --color-nav-bg: #FFFFFF;
  --color-footer-bg: #4063FB;
}

[data-theme="dark"] {
  --color-bg: #0A0A0A;
  --color-bg-secondary: #141414;
  --color-bg-card: #141414;
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #9CA3AF;
  --color-text-muted: #9CA3AF;
  --color-border: #222222;
  --color-nav-bg: #0A0A0A;
  --color-footer-bg: #4063FB;
}
```

---

## 05. Component Patterns

### Navigation
- Sticky header
- White/dark bg matching theme
- Logo left, links right, theme toggle + Resume button far right
- Resume button: outlined, opens PDF in new tab
- Mobile: hamburger menu

### Hero Section
- Left-aligned headline
- Two-line headline with accent color on key phrase
- Eyebrow: name + title in charcoal, preceded by coral rule
- CTAs: primary filled (Royal Blue), secondary outlined
- Decorative bull's-eye: absolute positioned right, half cropped
- Circular headshot: right side, scale 1.35 to zoom in, no CSS border
- Stats row below CTAs: 4 columns, large colored number, company attribution above, descriptor below

### Case Study Cards
- 2-column grid on desktop
- Thumbnail image at top, object-fit contain, bg-secondary background
- Colored top border per case study accent color
- Eyebrow: client name in charcoal #606060
- Hover: lift effect (-translate-y-1), elevated shadow
- "View case study →" link in accent color

### Philosophy Cards
- Glassmorphism style
- Light: rgba(255,255,255,0.25), backdrop-blur 16px, saturate 180%
- Dark: rgba(255,255,255,0.04), backdrop-blur 16px
- Thin white border (rgba white 0.9 light, 0.12 dark)
- Floating bull's-eyes behind cards (z-0), cards at z-10
- Numbers 01/02/03 in #D1D5DB above each title

### Origin Story Section
- Two-column layout: pull quote left, story right
- Pull quote: large italic text, coral left border (4px)
- Closing line in bold: "That is the only thought I have carried into every project since."
- "Read full story →" link in coral

### Footer
- Background: Royal Blue #4063FB
- Three columns: brand, navigation, contact
- Logo: footer variant (white wordmark, amber UX)
- All text: white at varying opacity for hierarchy
- Top border: rgba(255,255,255,0.15)

---

## 06. Animation & Motion

- Bull's-eye rotation: 60s linear infinite (hero)
- Floating bull's-eyes: translateY/X 8-15px, 8-13s ease-in-out infinite
- Card hover lift: -translate-y-1, 150ms transition
- Hero fade-in: subheadline + CTAs fade up 150ms after mount
- prefers-reduced-motion: all animations paused/disabled

```css
@keyframes spin-slow {
  to { transform: rotate(360deg); }
}
@keyframes float-a { 
  0%, 100% { transform: translateY(0); } 
  50% { transform: translateY(-12px); } 
}
```

---

## 07. Accessibility

- WCAG AA minimum: 4.5:1 normal text, 3:1 large text
- Alt text on all images
- aria-hidden on all decorative elements
- Keyboard navigable with visible focus states
- Semantic HTML heading hierarchy
- prefers-reduced-motion respected everywhere
- Footer on Royal Blue: all text white or rgba(white) at sufficient contrast

---

## 08. Copy Voice & Tone

- Direct, spartan, no hedging
- Short sentences. Active voice.
- No em dashes. Use commas or periods.
- No filler words: very, really, just, basically, utilize
- Stats always attributed: "AT TELESIGN" / "AT CAPPEX"
- Case study headlines lead with outcome, not process

### Approved Homepage Copy (do not alter without permission)
- Hero headline: "Designing products where mistakes have consequences"
- Subline: "18+ years. TeleSign · Netflix · Cappex"
- Pull quote: "Someone pushed this design to production without thinking it could kill."
- Philosophy heading: "Three things I actually believe."

---

## 09. File & Folder Structure

```
public/images/
├── headshots/
│   ├── headshot-dark.png      ← used on site (both modes)
│   └── headshot-light.png
├── 1-self-service-customer-portal/
│   └── hero/portal-hero-home.png
├── 2-fraud-prevention-suite/
│   └── hero/fraud-hero-dashboard.png
├── 3-omnichannel-messaging-api/
│   └── hero/messaging-template-builder.png
├── 4-universal-college-application/
│   └── hero/college-app-hero.jpg
├── marketing/2022 Rebranding/
│   └── telesign-logo.svg
└── photography/              ← personal photos for About page
```

---

## 10. Case Study Stats Reference

### Self-Service Portal (Coral #FF6F6E)
- 48% faster enterprise onboarding (67→35 days)
- 85% customers live without CS support
- $500K→$2M+ daily transaction revenue
- 120+ countries navigated
- 7 months pandemic MVP

### Fraud Prevention Suite (Light Blue #5B9FE8)
- 21B+ annual transactions protected
- 1,000+ configurable risk parameters
- 5B+ unique phone numbers analyzed monthly
- 0-1000 real-time risk score scale
- Fortune 500 bank-grade fraud prevention

### Messaging API (Amber #F5C200)
- 22.2% CTR on RCS vs 3% traditional SMS
- 6 channels, 1 API
- 700+ direct carrier routes
- 50% faster customer implementation
- 2B+ reachable WhatsApp Business users

### Universal College App (Magenta #FF00AA)
- 47% completion vs 20-35% industry standard
- 600% user growth (250K→1.5M, now 4M+ as Appily)
- 200+ colleges including U of Michigan
- 25% longer session time (4.8→6 min)
- 6 hrs vs 30+ hrs student effort reduction

---

*This document grows with the project. Update it as new decisions are made.*
