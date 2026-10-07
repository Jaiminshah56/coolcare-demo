---
name: Arctic Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#545c72'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c748b'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  title-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an atmospheric, hyper-clean, and high-trust retail and service experience for premium HVAC solutions. Drawing inspiration from modern technical minimalism infused with frosted glassmorphism, it visually conveys crisp airflow, clinical reliability, and precision thermal engineering.

### Target Audience & Emotional Intent
- **Audience**: Discerning homeowners seeking premium climate comfort, property managers requiring mission-critical repair uptime, and HVAC technicians sourcing authentic OEM spare parts.
- **Emotional Resonance**: Relief, absolute climate control, clinical hygiene, prompt technical competence, and pristine transparency.

### Design Movement & Aesthetic Form
The interface synthesizes **Pristine Functional Minimalism** with **Atmospheric Glacial Glassmorphism**. Layouts leverage expansive ice-white surfaces, deep oceanic contrast anchors, razor-sharp technical typography, and softly blurred frosty panels that emulate condensation on brushed condenser coils. High-trust badges and micro-metrics ensure frictionless conversion across retail and emergency dispatch flows.

## Colors

The palette is engineered around the physics of cold air: high-albedo whites, deep structural navy depths, and intense spectral cyans.

### Palette Architecture
- **Primary (`#0284C7` - Vivid Ocean Blue)**: Drives core actions, technical highlights, interactive states, and focal links. Evokes steady operational power and reliability.
- **Secondary (`#06B6D4` - Arctic Cyan)**: Accents energy ratings, active cooling diagnostics, live system telemetry, and high-visibility status badges.
- **Tertiary (`#0F172A` - Deep Marine Navy)**: Serves as the bedrock contrast tone for high-authority typography, architectural framing, footers, and inverted technical panels.
- **Neutral Canvas (`#F8FAFC` to `#FFFFFF`)**: An ultra-clean, clinical ground reminiscent of surgical cleanrooms and pristine airflow pathways.

### Functional Application
- **Surfaces**: Primary canvas sits at `#F8FAFC`, elevated surface cards use `#FFFFFF`, and floating frosted panels leverage `rgba(255, 255, 255, 0.75)` with a backdrop blur.
- **Data & Status**:
  - *Cooling Active*: `#06B6D4` (Arctic Cyan)
  - *Heating Mode*: `#F97316` (Warm Ember)
  - *Certified OEM / In Stock*: `#10B981` (Crisp Mint)
  - *Emergency Dispatch / Filter Alert*: `#EF4444` (Vivid Crimson)
- **Contrast Ratios**: Body text (`#1E293B`) against canvas exceeds 11:1; primary CTAs (`#0284C7` with white text) guarantee strict WCAG AAA compliance.

## Typography

Typography pairs technical authority with effortless legibility. 

- **Display & Headlines (`Space Grotesk`)**: Provides an engineered, modernist geometry. Its distinct structural letterforms echo technical blueprints and precision machinery without sacrificing consumer warmth.
- **Body & Labels (`Hanken Grotesk`)**: Ensures supreme clarity across complex specifications, diagnostic breakdowns, pricing tables, and mobile checkout forms.

### Styling Guidelines
- Numeric values such as BTU ratings, SEER2 metrics, and part numbers must be set with tabular figures (`font-variant-numeric: tabular-nums`) to preserve mechanical alignment in product comparisons.
- High-level category tags and trust markers use uppercase tracking with `label-sm` to reinforce an authenticated, industrial-grade standard.

## Layout & Spacing

The layout philosophy relies on an open, breathable 12-column fluid grid system that maintains structural rigidity while evoking expansive, unrestricted airflow.

### Grid Architecture
- **Desktop (1280px+)**: 12-column layout, max-width constrained to `1440px`, with `margin: 3rem` and `gutter: 1.5rem`.
- **Tablet (768px – 1279px)**: 8-column layout with `margin-tablet: 2rem` and `gutter: 1.5rem`.
- **Mobile (Below 768px)**: 4-column layout with `margin-mobile: 1.25rem` and `gutter-mobile: 1rem`.

### Spatial Flow
Whitespace is an active design element symbolizing air circulation:
- Grouped technical attributes and badge clusters utilize tight cohesion (`space-xs` to `space-sm`).
- Standard form inputs, interactive controls, and list items maintain comfortable touch targets via `space-md`.
- Content cards, diagnostic sections, and pricing modules separate structural chunks using generous `space-lg` to `space-xl` breathing room.

## Elevation & Depth

Depth mimics physical layered glass filters, chilled surfaces, and refined hardware enclosures through translucent backdrops and cold-tinted ambient illumination.

### Tiers of Depth
- **Level 0 (Base Canvas)**: Flat `#F8FAFC` ground.
- **Level 1 (Card & Modular Tier)**: Pure `#FFFFFF` surface accompanied by a crisp, low-opacity ice border (`1px solid rgba(226, 232, 240, 0.8)`) and an ultra-soft oceanic drop shadow:
  `box-shadow: 0 4px 20px -2px rgba(2, 132, 199, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Frosted Floating Glass)**: Translucent panels for sticky headers, diagnostic overlays, and filter drawers. Styled with `background: rgba(255, 255, 255, 0.82)`, `backdrop-filter: blur(16px) saturate(180%)`, a refractive highlight border `1px solid rgba(255, 255, 255, 0.6)`, and ambient shadow:
  `box-shadow: 0 12px 32px -4px rgba(2, 132, 199, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modals & Emergency Drawers)**: High-altitude elements with `box-shadow: 0 24px 48px -8px rgba(15, 23, 42, 0.16)`.

## Shapes

The design system incorporates geometric curvature inspired by aerodynamic louvers and smoothed chassis casings of contemporary split systems.

### Corner Radius System
- Standard structural elements (cards, containers, dialogs) strictly implement a **16px to 24px** curvature radius (`rounded-lg` to `rounded-xl`).
- Micro-elements (input fields, buttons, interactive chips) utilize **8px to 12px** (`rounded` to `rounded-md`) to ensure sharp functional clarity.
- Trust seals, status dots, and live-chat prompts use full-pill styling (`rounded-full`) to immediately differentiate certified badges from architectural content cards.

## Components

### Buttons & Interactive Controls
- **Primary CTA ("Book Service" / "Instant Checkout")**: Solid `#0284C7` background, white text, 12px border-radius, `label-lg` font. Subtly glows on hover with `box-shadow: 0 0 20px rgba(6, 182, 212, 0.4)`. Transitions are rapid and smooth (180ms ease-out).
- **Secondary ("Explore Models")**: Transparent background with a `1.5px solid #0284C7` rim, `#0284C7` text, shifting to a soft ice-blue fill (`rgba(2, 132, 199, 0.06)`) on hover.
- **Tertiary / Utility**: Ghost styling with `#0F172A` text and `#F1F5F9` hover background.

### Cards (AC Units, Service Packages, Parts)
- **Container**: White surface with a 20px border radius, subtle rim border (`#E2E8F0`), and Level 1 elevation.
- **Product Presentation**: Product imagery sits on an icy gradient pedestal (`linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)`).
- **Data Cluster**: Specs (Tonnage, SEER2 rating, Inverter tech) sit inside an integrated grid of soft micro-chips (`#F8FAFC` fill, 8px radius).

### High-Trust Badges & Certification Indicators
- **Visual Structure**: Compact pill tags with a subtle frosted border (`rgba(6, 182, 212, 0.2)`), pale cyan background (`#ECFEFF`), and `#0369A1` typography.
- **Iconography**: Accompanied by micro vector icons indicating "OEM Verified", "5-Year Compressor Warranty", or "Same-Day Dispatch".

### Inputs & Booking Forms
- **Fields**: Background `#FFFFFF`, border `1.5px solid #CBD5E1`, text `#0F172A`, placeholder `#94A3B8`, border-radius 12px.
- **Focus State**: Border shifts instantly to `#0284C7` with an exterior focus halo of `0 0 0 3px rgba(6, 182, 212, 0.2)`.

### Filter & Selection Chips
- Interactive toggles for tonnage (1.5T, 2.0T, 3.0T) and brand filtering:
  - *Default*: Border `1px solid #E2E8F0`, background `#FFFFFF`, text `#475569`.
  - *Selected*: Background `#0F172A`, text `#FFFFFF`, border `1px solid #0F172A`.

### Spare Part Compatibility Selector
- Dedicated component allowing users to type or drop down AC model numbers. Returns an instantaneous visual validation pill:
  - *Guaranteed Fit*: `#ECFDF5` background with emerald badge and checkmark.
  - *Non-Compatible*: `#FEF2F2` background with crimson indicator and alternative suggestion link.