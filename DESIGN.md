---
name: Aura Noir
colors:
  surface: '#07151d'
  surface-dim: '#07151d'
  surface-bright: '#2d3b44'
  surface-container-lowest: '#031018'
  surface-container-low: '#0f1d26'
  surface-container: '#13212a'
  surface-container-high: '#1e2c34'
  surface-container-highest: '#293640'
  on-surface: '#d6e4f0'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#d6e4f0'
  inverse-on-surface: '#24323b'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#111111'
  on-primary-container: '#7e7c7c'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#111111'
  on-tertiary-container: '#7e7c7c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#07151d'
  on-background: '#d6e4f0'
  surface-variant: '#293640'
  matte-charcoal: '#111111'
  brushed-gold: '#C5A059'
  gallery-white: '#F4F4F4'
  deep-obsidian: '#000A12'
  muted-gold: '#8E7341'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system is anchored in the concept of **Quiet Luxury**. It draws heavy inspiration from the curated atmosphere of private art galleries and high-end boutique hotels, where the space between objects is as important as the objects themselves. 

The aesthetic is characterized by a **Minimalist** approach with subtle **Glassmorphism** to add depth without clutter. The focus is on tactile quality, rhythmic spacing, and a "dark mode by default" philosophy that creates a sense of intimacy and exclusivity. Every element must feel intentional; if a component does not serve a functional or atmospheric purpose, it is removed.

## Colors

The palette is a study in shadows and metallic light. The foundation is **Matte Charcoal (#111111)**, providing a sophisticated, low-glare surface that allows photography to stand out. 

**Brushed Gold (#C5A059)** is used strictly as an accent for focal points, interactive states, and refined borders. It should never dominate the layout. **Gallery White** is reserved for high-contrast typography and subtle dividers. Neutral tones use **Deep Obsidian** to create layered depth within the dark interface, ensuring the UI doesn't feel "flat" but rather like a physical, architectural space.

## Typography

The typography pairing juxtaposes the classical elegance of **Playfair Display** with the surgical precision of **Manrope**.

- **Headlines:** Use Playfair Display for all major headings. It should feel editorial and commanding. Tighten letter-spacing for large displays to increase the "luxury" feel.
- **Body Text:** Manrope should be set with generous line-height to ensure maximum readability and "breathability" in the layout.
- **Labels & Micro-copy:** Use Manrope in all-caps with increased letter-spacing. This creates a technical, architectural drawing aesthetic for navigation and small details.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy to maintain the structured feel of a gallery floor plan. 

- **Desktop:** 12-column grid with wide 80px margins. The extra-wide margins act as a frame for the content.
- **Rhythm:** Use a strict 8px base unit. Section gaps are intentionally large (160px+) to force the user to slow down and appreciate one project or concept at a time.
- **Alignment:** Use asymmetrical layouts where imagery occupies 7-8 columns and text occupies 3-4, creating a dynamic, high-fashion editorial flow.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Glassmorphism** rather than traditional shadows. 

- **Surfaces:** Secondary containers use `#1A1A1A` against the primary `#111111` background.
- **Glass Effects:** Overlays (like navigation bars or image captions) use a 10px backdrop blur with a 10% white tint and a 0.5px hairline border in `brushed-gold` at low opacity.
- **Shadows:** If used, they must be "Ambient Shadows"—extremely soft, large radius (40px+), and very low opacity (15%), acting more like a soft glow than a drop shadow.

## Shapes

The shape language is **Sharp (0px)**. 

To evoke the feeling of luxury architecture and premium materials like stone, glass, and metal, UI elements should maintain hard 90-degree angles. This conveys precision, confidence, and timelessness. Circular elements are permitted only for specific functional icons or small status indicators to provide a single point of organic contrast.

## Components

- **Buttons:** Primary buttons are outlined in `brushed-gold` with a transparent background. Upon hover, they fill with a very subtle gold tint (5% opacity). Text is always `label-caps`.
- **Inputs:** Ghost-style inputs with only a bottom border (1px). The border remains `gallery-white` at 20% opacity, turning into `brushed-gold` on focus.
- **Cards:** Cards should not have visible borders. Depth is created by a slight background color shift (`#1A1A1A`) and generous internal padding (40px).
- **Navigation:** A minimalist top bar with a centered logo. Links use `label-caps` and a thin underline animation that expands from the center on hover.
- **Images:** All project imagery should feature a subtle "zoom-in" hover effect to emphasize the detail and quality of the interiors.
- **Dividers:** Use sparingly. When necessary, use a 0.5px line in `brushed-gold` at 30% opacity, often not spanning the full width of the container.