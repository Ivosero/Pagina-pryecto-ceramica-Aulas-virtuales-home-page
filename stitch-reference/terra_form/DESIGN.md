---
name: Terra & Form
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#54433d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#87736c'
  outline-variant: '#d9c1b9'
  surface-tint: '#924a2e'
  primary: '#8f482c'
  on-primary: '#ffffff'
  primary-container: '#ad6042'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59a'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#7c5330'
  on-tertiary: '#ffffff'
  tertiary-container: '#986b46'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#743419'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#f3bb91'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#643e1e'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

The design system is rooted in the concept of "The Artist's Studio"—a space where raw materials meet refined craft. The brand personality is sophisticated yet accessible, bridging the gap between traditional craftsmanship and modern digital education. It targets discerning creatives who value tactile experiences and intentional learning.

The visual style is **Minimalist Editorial** with **Tactile** influences. It prioritizes generous negative space to allow high-quality imagery of ceramic work to breathe. The interface should feel as intentional and permanent as a fired vessel, avoiding fleeting digital trends in favor of a timeless, gallery-like aesthetic.

## Colors

The palette is derived from natural geological materials. 

- **Primary (Terracotta):** Used for primary actions and key brand moments. It evokes the warmth of a kiln and the soul of the craft.
- **Secondary (Sand):** Used for subtle accents, decorative elements, and softer call-to-actions.
- **Tertiary (Earthy Brown):** Reserved for deep contrast elements and sophisticated iconography.
- **Neutral (Ivory):** The primary background color. It provides a warmer, more organic feel than pure white, reducing eye strain during long lessons.
- **Accent (Charcoal):** Exclusively for typography and high-contrast borders to ensure maximum legibility and a grounded feel.

## Typography

This design system uses a high-contrast typographic pairing to balance tradition and utility. 

**Playfair Display** provides the editorial "voice," used for headlines and quotes to evoke a sense of heritage and artistry. **Inter** serves as the functional workhorse, providing clarity for instructional content, curriculum details, and interface labels. 

Always maintain generous line heights for body text to ensure a relaxed, scholarly reading pace. Use the uppercase Label style for navigation and small headers to add a structured, professional touch.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a gallery-like structure, while transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width. Use 64px outer margins to create a "framed" effect.
- **Spacing Rhythm:** Based on an 8px scale. Vertical rhythm should be loose; use `stack-lg` (80px) between major sections to emphasize the minimalist aesthetic.
- **Content Density:** Maintain low density. Instructional content should be centered in narrow columns (max 720px) to maximize focus and readability.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Ambient Shadows** rather than harsh borders.

- **Surfaces:** Use subtle shifts from the Ivory background (#FDFBF7) to a slightly darker Sand tint for container elements.
- **Shadows:** Use extremely soft, diffused shadows with a slight Terracotta tint (e.g., `rgba(188, 108, 77, 0.08)`) to mimic the way light hits an object in a studio. Shadows should have a large blur radius (20px-40px) and low opacity.
- **Interactive States:** When hovering over interactive cards, the elevation should increase slightly with a "lift" effect, accompanied by a subtle expansion of the shadow.

## Shapes

The shape language reflects the "Soft-Hand" of the potter. Avoid sharp edges which feel overly corporate or clinical.

- **Standard Elements:** Use a 12px (`rounded`) radius for buttons, input fields, and small UI components.
- **Large Containers:** Use a 24px (`rounded-xl`) radius for cards and modal containers.
- **Organic Accents:** Occasionally incorporate non-uniform, blob-like shapes for background decorative elements or image masks to reference the raw state of clay.

## Components

### Buttons & Interaction
- **Primary Button:** Solid Terracotta (#BC6C4D) with White or Ivory text. 12px radius. On hover, darken slightly and add a subtle lift.
- **Secondary Button:** Outlined in Charcoal (#2D2D2D) with a 1px weight. No fill.

### Cards
- **Course Cards:** Large 24px corner radius. Use full-bleed imagery at the top. Content below should use the Playfair Display for titles. The card should have a soft ambient shadow that intensifies on hover.

### Form Fields
- **Inputs:** Minimalist style. Underline-only or very light borders. Use the Sand color (#D4A373) for focus states. 
- **Labels:** Always use the `label-md` uppercase style for clear, professional categorization.

### Progress & Feedback
- **Progress Bars:** Thin, elegant lines. Use Terracotta for the "filled" state and a light Sand tint for the "unfilled" track. Avoid chunky, industrial-looking bars.

### Navigation
- **Header:** Transparent background that blurs the content behind it slightly (Glassmorphism) as the user scrolls. Use wide letter spacing for menu items to maintain the premium feel.