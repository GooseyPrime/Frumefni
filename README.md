# Frumefni: The Elemental Contact

A stunning, visually captivating website for the August 12, 2026 Total Solar Eclipse event in Iceland.

## Features

- **Hero Section with Countdown Timer**: Real-time countdown to the moment of totality
- **Black Background Theme**: Sleek, cosmic-inspired design throughout
- **Animated Elements**: Moving backgrounds, particle effects, and smooth animations
- **Three Pillars**: CONNECT • EXPLORE • LEARN
- **4-Day Journey**: Detailed timeline of the transformative experience
- **Cultural Significance**: Honoring Icelandic eclipse traditions
- **Responsive Design**: Beautiful on all devices

## Technology Stack

- **React**: Modern UI framework
- **Vite**: Lightning-fast build tool
- **CSS3**: Advanced animations and effects
- **Pure JavaScript**: No heavy dependencies

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
Frumefni/
├── public/
│   └── eclipse-icon.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with countdown
│   │   ├── Hero.css
│   │   ├── About.jsx         # Three pillars section
│   │   ├── About.css
│   │   ├── Experience.jsx    # 4-day timeline
│   │   ├── Experience.css
│   │   ├── Culture.jsx       # Cultural significance
│   │   ├── Culture.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Video Background

To add your eclipse video to the hero section:

1. Place your video file in the `/public` directory
2. Name it `eclipse-animation.mp4` or update the path in `src/components/Hero.jsx`
3. The video will automatically loop and play on the hero section

## Customization

### Colors

The color scheme is defined in CSS variables in `src/index.css`:

- `--bg-black`: #000000
- `--accent-gold`: #d4af37
- `--accent-silver`: #c0c0c0
- `--accent-purple`: #8b5cf6
- `--accent-blue`: #3b82f6

### Eclipse Date

The countdown timer is set for August 12, 2026. To adjust:
Edit the date in `src/components/Hero.jsx` line 12:
```javascript
const eclipseDate = new Date('2026-08-12T18:45:00Z');
```

## Event Details

**Frumefni: The Elemental Contact** is a pioneering fusion of radical wellness, performance art, and ethnographic research set against the backdrop of the August 12, 2026, Total Solar Eclipse in Iceland.

### Festival Pillars
- **CONNECT**: Foster radical self-acceptance and community bonds
- **EXPLORE**: Interact with Iceland's elemental landscape
- **LEARN**: Experience the transformative power of eclipse totality

### Project Lead
Michael Brandon Lane

## License

See LICENSE file for details.

## Contact

For more information about the Frumefni event, please visit the website or contact the project team.

---

*"Where Earth, Cosmos, and Self converge in a moment of collective transformation"*
