# Brand Style Guide: Zoek je stage
## Inspired by Uber's Bold, Modern Aesthetic

**Last Updated:** January 2026

---

## Brand Essence

### Personality
- **Bold** - Confident, direct, clear
- **Modern** - Clean, minimal, tech-forward
- **Accessible** - Friendly, student-focused, approachable
- **Trustworthy** - Professional, reliable, transparent

### Voice & Tone
- **Direct and Clear** - No jargon, straight to the point
- **Confident but Friendly** - "We've got you" energy
- **Empowering** - Focus on student's success
- **Casual Professional** - Like talking to a smart friend

---

## Visual Identity

### Color Palette

#### Primary Colors
```
Electric Blue    #0066FF  - Primary brand color, CTAs, headers
Vibrant Purple   #6366F1  - Secondary accent, gradients
Deep Blue        #1E40AF  - Dark variation
Light Blue       #EFF6FF  - Backgrounds, subtle areas
White            #FFFFFF  - Clean space, cards
```

#### Gradient (Signature Look)
```
Primary Gradient: linear-gradient(135deg, #6366F1 0%, #0066FF 100%)
Hero Gradient:    linear-gradient(to bottom right, #EFF6FF 0%, #DBEAFE 100%)
```

**Why This Palette:**
- Bold and energetic (niet saai!)
- Modern, tech-forward
- Stands out from traditional job boards
- Professional but vibrant
- Great for students (young, dynamic)

#### Supporting Colors
```
Navy         #1E293B  - Text, headers
Gray 800     #1F2937  - Secondary text
Gray 600     #4B5563  - Body text
Gray 400     #9CA3AF  - Disabled states
Gray 200     #E5E7EB  - Borders
Gray 100     #F3F4F6  - Subtle backgrounds
Gray 50      #F9FAFB  - Light backgrounds
```

#### Semantic Colors
```
Success      #00D084  - Notifications, success states
Warning      #FFA500  - Alerts, important info
Error        #FF3B30  - Errors, critical actions
Info         #0066FF  - Info messages
```

### Typography

#### Font Family
**Primary:** [**Inter**](https://fonts.google.com/specimen/Inter) or [**DM Sans**](https://fonts.google.com/specimen/DM+Sans)
- Similar to Uber's custom font
- Excellent readability
- Modern, geometric
- Free and Google Fonts available

**Alternative:** [**Space Grotesk**](https://fonts.google.com/specimen/Space+Grotesk) for more personality

#### Type Scale
```
Hero/Display       64-96px    Bold (700-800)
H1                 48-56px    Bold (700)
H2                 36-40px    Bold (700)
H3                 28-32px    Semibold (600)
H4                 20-24px    Semibold (600)
Body Large        18-20px    Regular (400)
Body              16px       Regular (400)
Body Small        14px       Regular (400)
Caption           12px       Medium (500)
```

#### Typography Rules
- **Line Height:** 1.5 for body, 1.2 for headings
- **Letter Spacing:** -0.02em for large headings (tighter)
- **Max Width:** 65-75 characters per line for readability
- **Bold for Impact:** Use bold weights liberally for hierarchy

### Layout & Spacing

#### Grid System
- **Desktop:** 12-column grid, 1440px max width
- **Tablet:** 8-column grid
- **Mobile:** 4-column grid
- **Gutters:** 24px (desktop), 16px (mobile)

#### Spacing Scale (8pt Grid)
```
4px   (0.5)   - Tiny gaps
8px   (1)     - Small spacing
16px  (2)     - Default spacing
24px  (3)     - Medium spacing
32px  (4)     - Large spacing
48px  (6)     - XL spacing
64px  (8)     - Section spacing
96px  (12)    - Hero spacing
128px (16)    - Major sections
```

#### White Space Philosophy
- **Generous padding** - Don't be afraid of white space
- **Breathing room** - Let content breathe
- **Clear sections** - Use space to separate sections
- **Focus attention** - Guide eye with spacing

---

## Design Principles

### 1. **Bold Typography**
```
✅ DO:
- Use large, bold headlines (48px+)
- High contrast (black on white)
- Short, punchy headlines
- Generous line height

❌ DON'T:
- Small, timid text
- Low contrast gray text for headers
- Long paragraphs in large fonts
```

### 2. **Minimal & Clean**
```
✅ DO:
- Remove unnecessary elements
- Use white space generously
- Simple, clear layouts
- One focus per section

❌ DON'T:
- Cluttered interfaces
- Too many colors
- Decorative elements without purpose
- Competing focal points
```

### 3. **Strong Hierarchy**
```
✅ DO:
- Clear visual hierarchy
- Size difference between heading levels
- Use weight for emphasis
- Guide the eye with spacing

❌ DON'T:
- Similar sizing for different levels
- Rely only on color for hierarchy
- Confusing content order
```

### 4. **High Contrast**
```
✅ DO:
- Black text on white backgrounds
- White text on black backgrounds
- Vibrant accent color
- Clear, readable text

❌ DON'T:
- Light gray on white
- Low contrast combinations
- Washed out colors
```

---

## Component Styles

### Buttons

#### Primary Button
```css
Background: #0066FF (Electric Blue)
Text: White, 16px, Semibold (600)
Padding: 16px 32px
Border Radius: 8px (or 24px for pill shape)
Hover: Darken 10% (#0052CC)
Transition: 150ms ease

Example: "Zoek je stage"
```

#### Secondary Button
```css
Background: Black
Text: White, 16px, Semibold (600)
Padding: 16px 32px
Border Radius: 8px
Hover: #333333
```

#### Ghost Button
```css
Background: Transparent
Text: Black, 16px, Semibold (600)
Border: 2px solid Black
Padding: 14px 30px
Border Radius: 8px
Hover: Black background, White text
```

### Input Fields
```css
Height: 56px (desktop), 48px (mobile)
Border: 2px solid #CCCCCC
Border Radius: 8px
Padding: 16px
Font: 16px Regular

Focus:
  Border: 2px solid #0066FF
  Box Shadow: 0 0 0 4px rgba(0, 102, 255, 0.1)

Error:
  Border: 2px solid #FF3B30
```

### Cards
```css
Background: White
Border: 1px solid #E5E5E5 (or none)
Border Radius: 12px
Padding: 24px
Box Shadow: 0 2px 8px rgba(0,0,0,0.04) (subtle)

Hover: 
  Box Shadow: 0 8px 24px rgba(0,0,0,0.12)
  Transform: translateY(-2px)
  Transition: 200ms ease
```

### Navigation
```css
Height: 64px (desktop), 56px (mobile)
Background: White
Border Bottom: 1px solid #E5E5E5
Position: Sticky top

Logo: 32px height
Links: 16px Medium, Black
CTA Button: Primary Blue
```

---

## Page Layouts (Uber-Style)

### Hero Section
```
Full viewport height (or 70vh)
Center aligned content
Large headline (64-80px)
Subheading (20px, Gray 700)
Primary CTA prominent
Background: White or Light Gray
Optional: Large product screenshot/illustration
```

**Example:**
```
─────────────────────────────────────
│                                   │
│      [80px Bold Black]            │
│    Vind de perfecte stage,        │
│         instant.                  │
│                                   │
│   [20px Regular Gray]             │
│   Alle stageplekken in            │
│   Nederland, één platform.        │
│                                   │
│   [Primary Button: Large]         │
│                                   │
│   [Product Screenshot]            │
│                                   │
─────────────────────────────────────
```

### Feature Sections
```
Alternating layout (left/right)
Large heading (48px)
Short description (18px)
Visual on opposite side
Generous spacing (96-128px between sections)
Background alternates: White / Gray 50
```

### Search Section (Key Feature)
```
Prominent placement (above fold)
Large search input (64px height)
Minimal distractions
Instant results preview
Clean, fast interface
```

---

## Imagery & Graphics

### Photography Style
```
✅ DO:
- High quality, crisp images
- Real students in internship settings
- Natural lighting
- Diverse representation
- Minimal editing (natural look)

❌ DON'T:
- Stock photo clichés
- Over-processed images
- Fake "corporate" vibes
- Low resolution
```

### Illustrations (if used)
```
Style: Geometric, simple, modern
Colors: Black outlines + Accent color
Complexity: Minimal, clear
Purpose: Support, don't distract

Examples:
- Simple line icons
- Geometric shapes
- Abstract representations
- Data visualizations
```

### Icons
```
Style: Outline or Solid (consistent)
Stroke: 2px
Size: 24px standard, 20px small, 32px large
Library: Heroicons, Lucide, or Phosphor

Recommended: Heroicons (modern, clean)
```

---

## Animation & Interaction

### Micro-interactions
```
Button Hover: 150ms ease
Card Hover: 200ms ease-out
Page Transitions: 300ms ease-in-out
Scroll Animations: Fade up, 400ms

Easing: 
  - ease-out for entrances
  - ease-in for exits
  - ease-in-out for states
```

### Hover States
```
Buttons: Darken + Scale (1.02) + Shadow
Cards: Lift up (-2px) + Shadow
Links: Underline + Color shift
Images: Subtle zoom (1.05) + Overlay
```

### Loading States
```
Skeleton screens (not spinners)
Progress bars for long actions
Optimistic UI updates
Smooth transitions
```

### Scrolling
```
Smooth scroll behavior
Parallax effects (subtle)
Sticky navigation
Fade-in animations on scroll
```

---

## Responsive Design

### Breakpoints
```
Mobile:     < 640px
Tablet:     640px - 1024px
Desktop:    > 1024px
Large:      > 1440px
```

### Mobile-First Approach
```
✅ Design for mobile first
✅ Touch-friendly (44px minimum tap target)
✅ Simplified navigation (hamburger)
✅ Stacked layouts
✅ Larger text on mobile (minimum 16px)
```

### Desktop Enhancements
```
✅ Multi-column layouts
✅ Hover states
✅ Larger imagery
✅ More content per view
✅ Advanced filters visible
```

---

## Example Implementations

### Homepage Hero (Uber Style)
```jsx
<section className="min-h-screen flex items-center justify-center bg-white">
  <div className="max-w-4xl mx-auto px-8 text-center">
    <h1 className="text-7xl font-bold mb-6 text-black tracking-tight">
      Vind de perfecte stage, instant.
    </h1>
    <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
      Alle stageplekken in Nederland op één platform. 
      Geen eindeloos zoeken meer.
    </p>
    <button className="bg-blue-600 text-white px-12 py-4 rounded-lg 
                     text-lg font-semibold hover:bg-blue-700 
                     transition-all duration-150">
      Start met zoeken
    </button>
  </div>
</section>
```

### Search Bar (Prominent)
```jsx
<div className="w-full max-w-4xl mx-auto">
  <input 
    type="search"
    placeholder="Zoek op functie, bedrijf of interesse..."
    className="w-full h-16 px-6 text-lg border-2 border-gray-300 
               rounded-xl focus:border-blue-600 focus:outline-none 
               focus:ring-4 focus:ring-blue-100 transition-all"
  />
</div>
```

### Feature Card
```jsx
<div className="bg-white rounded-xl p-8 border border-gray-200 
              hover:shadow-xl hover:-translate-y-1 
              transition-all duration-200 cursor-pointer">
  <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6"></div>
  <h3 className="text-2xl font-bold mb-4 text-black">
    Instant zoeken
  </h3>
  <p className="text-gray-700 text-lg">
    Vind in seconden de stage die bij je past. 
    Geen wachttijden, direct resultaten.
  </p>
</div>
```

---

## Website Structure

### Navigation (Uber-style)
```
┌─────────────────────────────────────────┐
│ [Logo]    Hoe werkt het?  Voor bedrijven │
│                            [Inloggen] [Aanmelden] │
└─────────────────────────────────────────┘

Simple, minimal, clear CTAs
```

### Footer (Minimalist)
```
┌─────────────────────────────────────────┐
│                                         │
│ Product        Bedrijf      Support     │
│ - Zoeken       - Over       - Help      │
│ - Features     - Team       - Contact   │
│                - Blog       - Privacy   │
│                                         │
│ © 2026 Zoek je stage                   │
│ [Social Icons]                          │
└─────────────────────────────────────────┘

Minimal, organized, not overwhelming
```

---

## Content Guidelines

### Headlines
```
✅ DO:
- Short and punchy (3-6 words)
- Active voice
- Benefit-focused
- Direct language

❌ DON'T:
- Long, wordy headlines
- Corporate jargon
- Passive voice
- Vague promises
```

**Examples:**
```
Good: "Vind je stage in seconden"
Bad:  "Ons innovatieve platform biedt uitgebreide mogelijkheden..."

Good: "Alle stages, één plek"
Bad:  "Een platform waar je verschillende mogelijkheden..."

Good: "Mis geen enkele kans"
Bad:  "Word geïnformeerd over relevante opportuniteiten"
```

### Body Copy
```
- Short paragraphs (2-3 lines)
- Active voice
- Student language (not corporate)
- Scannable (use lists)
- Clear, direct
```

---

## Do's and Don'ts Summary

### ✅ DO
- Use bold, large typography
- Embrace white space
- Keep it minimal
- Use high contrast
- Make CTAs prominent
- Design mobile-first
- Use real photography
- Animate subtly
- Focus on speed
- Be direct in copy

### ❌ DON'T
- Clutter the interface
- Use too many colors
- Make text too small
- Rely on decorative elements
- Use stock photo clichés
- Over-animate
- Use corporate jargon
- Hide important actions
- Complicate the layout
- Try to show everything at once

---

## Brand Applications

### Social Media
- **Square Posts:** Bold text on solid backgrounds
- **Stories:** Full-screen, minimal text overlay
- **Profile Pictures:** Simple logo, high contrast

### Email
- Plain text style or very minimal HTML
- Bold subject lines
- Short paragraphs
- Clear single CTA

### Print (if needed)
- High contrast
- Bold typography
- Minimal design
- QR codes for digital bridge

---

## Inspiration References

### Websites to Study
- **Uber.com** - Overall aesthetic, hero sections
- **Stripe.com** - Clean, developer-focused, bold
- **Linear.app** - Minimal, fast, modern
- **Vercel.com** - Typography, spacing, dark mode
- **Pitch.com** - Bold colors, simple layouts

### Design Systems
- **Uber Design** - Movement, bold choices
- **Stripe** - Balance, clarity
- **Tailwind UI** - Modern components

---

## Next Steps

1. **Choose accent color** (recommend Electric Blue)
2. **Set up design tokens** in code (Tailwind config)
3. **Create component library** (buttons, cards, inputs)
4. **Design homepage mockup** following this guide
5. **Test on multiple devices**
6. **Iterate based on user feedback**

---

**Remember:** Like Uber, your brand should feel **confident, modern, and effortlessly simple**. Every design decision should make the user experience faster and clearer.

**Questions?** Review Uber's website and ask: "Does this feel as bold and clear?"

