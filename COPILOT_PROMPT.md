# Complete Prompt for Copilot: Frumefni Eclipse Event Website

## Project Overview
Create a stunning, visually captivating website for "Frumefni: The Elemental Contact" - a transformative 4-day eclipse experience in Iceland on August 12, 2026.

## Design Requirements

### Visual Style
- **Black Background**: Pure black (#000000) as the primary background throughout
- **Color Palette**:
  - Gold (#d4af37) - Primary accent for titles and highlights
  - Silver (#c0c0c0) - Secondary accent
  - Purple (#8b5cf6) - For CONNECT pillar
  - Blue (#3b82f6) - For LEARN pillar
  - White (#ffffff) - Primary text color
  - Gray (#cccccc) - Secondary text

### Animations & Effects
- Smooth scroll animations (fade-in, slide-in effects)
- Moving starfield background using CSS gradients
- Aurora borealis effect using animated color gradients
- Floating animations for key elements
- Pulsing glow effects on important features
- Eclipse animation (sun and moon)
- Particle effects suggesting cosmic energy

### Hero Section
- Full-screen height hero with video background
- Video should be the eclipse animation (MP4 format)
- Dark overlay to ensure text readability
- Animated eclipse icon (sun with moon passing over)
- Large "FRUMEFNI" title with golden gradient
- "The Elemental Contact" subtitle
- Tagline: "A Transformative Eclipse Experience in Iceland"
- **Countdown Timer to Totality**:
  - Displays days, hours, minutes, seconds
  - Counts down to August 12, 2026, 18:45 UTC
  - Elegant design with golden border
  - Large, bold numbers
- Three pillars displayed: CONNECT ⋅ EXPLORE ⋅ LEARN
- "Discover the Experience" call-to-action button
- Scroll indicator at bottom

## Content Sections

### 1. About Section - "The Elemental Contact"
**Intro Text**: Brief description of the 4-day transformative experience

**Three Pillar Cards** (in a grid):

1. **CONNECT** (Purple theme)
   - Icon: Connection symbol
   - Description: Foster radical self-acceptance and community bonds through intentionality, breathwork, and consent
   - Focus: Self • Community • Ber Tenging

2. **EXPLORE** (Gold theme)
   - Icon: Compass/direction symbol
   - Description: Interact with Iceland's ancient lava, basalt formations, and geothermal energy through direct skin-to-soil grounding
   - Focus: Earth • Lava • Basalt • Jarðtenging

3. **LEARN** (Blue theme)
   - Icon: Sun/eclipse symbol
   - Description: Experience profound sensory responses elicited by eclipse totality, cosmic shadow, and transformative silence
   - Focus: Cosmos • Eclipse • Totality

**Confluence Section**:
- Title: "Jarðtenging Augnablik" (The Confluence Moment)
- Animated circular symbol
- Description of the convergence of Earth, Cosmos, and Self

### 2. Experience Section - "The 4-Day Journey"
**Timeline Layout** (vertical with connecting line):

1. **Days 1-3: Innri Náttúra** (Inner Nature Workshop Series)
   - Bullet points:
     - Breathwork and grounding techniques
     - Consent and community practices
     - Introduction to Icelandic elemental wisdom
     - Physical and mental preparation
   - Deliverable: Workshop Handbook

2. **August 12, 2026: Jarðtenging Augnablik** (The Earth-Connection Moment)
   - Highlighted/featured card with gold border
   - Three icons: Earth Contact • Eclipse Totality • Community Unity
   - Ritual Space details:
     - Volcanic Ring: Natural rock barriers
     - Black Sand & Basalt: Grounding medium
     - The Horizon: Facing path of totality

3. **Post-Eclipse: Samsöfnun** (Data Collection & Gathering)
   - Anonymous sensory feedback collection
   - Guided reflection sessions
   - Community sharing circles
   - Integration practices
   - Deliverable: Anonymous Feedback Journal

4. **Post-Event: Synthesis**
   - Comprehensive analysis
   - Deliverable: Post-Event Synthesis Report

**"Why Frumefni is Different" box**: Explanation of how this transforms a celestial event into an intentional rite of passage

### 3. Culture Section - "Cultural Significance"
**Introduction**: About eclipses in Icelandic culture and Norse mythology

**Three Cultural Cards**:
1. **Sköll & Hati** (🐺)
   - Norse wolves chasing sun and moon
   
2. **Land of Fire & Ice** (🌋)
   - Iceland's unique geological landscape

3. **Northern Lights Tradition** (✨)
   - Gathering to witness celestial phenomena

**"The Perfect Location" Info Grid**:
- Duration of Totality: 2 minutes 18 seconds
- Eclipse Path: Across Iceland
- Optimal Viewing: Black Sand Beaches
- Temperature: 12-15°C (54-59°F)

**Icelandic Terms Glossary**:
- Frumefni: Elements / Elemental Substances
- Jarðtenging: Earth Connection / Grounding
- Augnablik: Moment / Instant
- Innri Náttúra: Inner Nature
- Samsöfnun: Collection / Gathering
- Ber Tenging: Bare Connection / Direct Contact

### 4. Footer
- Eclipse logo
- "FRUMEFNI" branding
- Event details (date, location)
- Festival Pillars
- Project Lead: Michael Brandon Lane
- Quote: "Where Earth, Cosmos, and Self converge in a moment of collective transformation"
- Copyright notice

## Technical Implementation

### Technology Stack
- **React** (modern hooks-based approach)
- **Vite** (fast build tool)
- **Pure CSS** (no CSS framework needed)
- **ES6+ JavaScript**

### Project Structure
```
src/
├── components/
│   ├── Hero.jsx & Hero.css
│   ├── About.jsx & About.css
│   ├── Experience.jsx & Experience.css
│   ├── Culture.jsx & Culture.css
│   └── Footer.jsx & Footer.css
├── App.jsx & App.css
├── main.jsx
└── index.css (global styles)
```

### Key Features
- Smooth scroll behavior
- Responsive design (mobile-first approach)
- Accessible (semantic HTML, proper heading hierarchy)
- Fast loading with optimized assets
- SEO-friendly meta tags

### Animation Guidelines
- Use CSS animations (not JavaScript-heavy solutions)
- Subtle, elegant transitions (0.3-0.4s duration)
- Float/pulse effects for mystical feel
- Glow effects on hover for interactive elements
- Fade-in animations on scroll (can use Intersection Observer)

### Performance
- Lazy load video in hero section
- Optimize images (use WebP with fallbacks)
- Minify CSS/JS in production
- Use CSS transforms for animations (better performance)

## Inspiration Reference
- Model site mentioned: www.intellmeai.com
- Take inspiration from its layout and professionalism
- Adapt to black background theme
- Add more dynamic, cosmic elements
- Include the countdown timer prominently

## Brand Guidelines

### Typography
- Headings: Bold, large, spaced letters
- Body: Readable, good line-height (1.6-1.8)
- Special terms: Italicized where appropriate

### Tone
- Mystical yet professional
- Transformative and inspiring
- Respectful of cultural significance
- Scientific meets spiritual

### Key Messages
1. This is not just eclipse viewing - it's a rite of passage
2. Honoring ancient wisdom in modern context
3. Connection with Earth, Cosmos, and Self
4. Transformative, intentional experience
5. Research-backed approach

## Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Fallbacks for unsupported features

---

## Final Notes
The website should feel:
- ✨ Visually stunning and captivating
- 🌑 Mysterious and cosmic
- ⚡ Modern and professional
- 🏔️ Connected to Iceland's raw beauty
- 🙏 Respectful and transformative

This is a once-in-a-lifetime event, and the website should reflect that magnitude and beauty.
