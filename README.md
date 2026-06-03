# Elementum Landing Page - React Frontend Assignment

A high-fidelity, production-ready, fully responsive React landing page built from the Figma design mockup.

## Features

- **Typography & Aesthetics**: Standardizes the geometric **Syne** typeface for headings and brand logo, and **Plus Jakarta Sans** for highly readable body paragraphs.
- **Cropped High-Fidelity Assets**: Uses assets cropped directly from the Figma design screenshots for a pixel-perfect representation of team avatars, meeting graphics, and circular accents.
- **Dynamic CSS Highlights**: Recreates the hand-drawn underlines (yellow highlights) and pill background highlighters (pink and green brush details) using modern CSS selectors.
- **Sticky Glassmorphic Navbar**: Adapts to scrolling with blurred translucent backgrounds and supports a slide-in navigation drawer for mobile screens.
- **Interactive Team Crescent**: Displays 8 floating team members in an elegant wave on desktop, supporting individual hover scaling effects and wrapping into a clean grid on smaller displays.
- **Fluid Scroll Reveals**: Section reveals and component mounts are handled gracefully using `framer-motion`.
- **Custom Services Accordion**: Features smooth height transitions, borders, and an animated rotating badge graphic overlay.
- **Testimonial Section**: Features a responsive mint card layout with floating customer avatars drifting in continuous micro-animations.
- **Newsletter Subscription**: Includes form inputs with robust real-time validation feedback.

## Tech Stack

- **React 18** (Functional components with hooks)
- **Vite** (Optimized bundler)
- **Framer Motion** (Subtle professional micro-animations)
- **Lucide React** (Clean, scalable vector icons)
- **Vanilla CSS3** (Responsive design system, Flexbox, CSS Grid)

## Component Structure

```text
src/
├── assets/                  # Cropped high-fidelity image assets
├── components/
│   ├── AboutSection/        # "Tomorrow should be better..." layout & red triangle
│   ├── Footer/              # Multi-column responsive footer
│   ├── Hero/                # Crescent avatar wave, wavy lines, headings
│   ├── Navbar/              # Sticky desktop links and mobile hamburger drawer
│   ├── Newsletter/          # Light green container, subscription form & validation
│   ├── ProgressSection/     # "See how we can help..." laptop image & wavy connectors
│   ├── ServicesAccordion/   # Accordion items, height animations & badge
│   └── Testimonials/        # Testimonial quote card & floating avatar profiles
├── App.jsx                  # Main container mounting all components
├── index.css                # Design system token parameters and resets
└── main.jsx                 # Vite app entrypoint
```

## Running the Application

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run in development mode**:
   ```bash
   npm run dev
   ```

3. **Build the production bundle**:
   ```bash
   npm run build
   ```
