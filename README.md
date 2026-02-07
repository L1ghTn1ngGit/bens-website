# Benjamin's Portfolio Website

A modern, bilingual portfolio website showcasing tutoring services, achievements, and activities. Built with React, Vite, and Tailwind CSS.

## Features

- Bilingual support (English/Russian) with seamless language switching
- Responsive design optimized for all screen sizes
- Image optimization with multiple resolutions and WebP support
- Interactive hero carousel with smooth transitions
- Performance-optimized with code splitting and lazy loading
- Custom scrollbar and floating decorations
- Skills carousel with responsive card display
- Photo gallery with hover effects
- Contact section with social links

## Tech Stack

- React 18.2.0
- Vite 5.4.21
- Tailwind CSS 3.4.1
- React Icons 5.0.1
- React Scroll 1.9.0
- Sharp (image optimization)

## Project Structure

```
BenWebsite/
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
│
├── public/
│   └── assets/
│       └── images/         # Optimized images with -sm/-md/-lg variants
│
├── scripts/
│   └── optimize-images.mjs # Image optimization script
│
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Main App component
    ├── translations.js    # Bilingual content dictionary
    │
    ├── context/
    │   └── LanguageContext.jsx  # Language state management
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx       # Navigation bar with language toggle
    │   │   ├── Footer.jsx       # Page footer
    │   │   └── index.js
    │   │
    │   ├── sections/
    │   │   ├── Hero.jsx         # Landing carousel
    │   │   ├── About.jsx        # About section
    │   │   ├── Services.jsx     # Services offered
    │   │   ├── Skills.jsx       # Skills carousel
    │   │   ├── Gallery.jsx      # Photo gallery
    │   │   ├── Contact.jsx      # Contact information
    │   │   └── index.js
    │   │
    │   └── ui/
    │       ├── Button.jsx
    │       ├── Card.jsx
    │       ├── CustomScrollbar.jsx
    │       ├── FloatingDecorations.jsx
    │       ├── InteractiveBlobs.jsx
    │       ├── PerformanceMonitor.jsx
    │       ├── ResponsiveImage.jsx
    │       ├── SectionHeading.jsx
    │       └── index.js
    │
    └── styles/
        └── index.css      # Global styles and custom components
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd BenWebsite
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```
The site will be available at http://localhost:3001

### Build for Production

```bash
npm run build
```
This creates a `dist` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Image Optimization

The project includes an automated image optimization script:

```bash
node scripts/optimize-images.mjs
```

This generates:
- Small variant (400px width): `-sm.jpg`
- Medium variant (800px width): `-md.jpg`
- Large variant (1200px width): `-lg.jpg`
- WebP versions of all variants

## Configuration

### Language Content

Edit `src/translations.js` to modify bilingual content.

### Styling

- Global styles: `src/styles/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Tailwind utility classes in JSX files

### Vite Configuration

The `vite.config.js` includes:
- Terser minification
- Manual code splitting (react-vendor, icons)
- CSS code splitting
- Port configuration (3001)

## Performance Optimizations

- Responsive images with srcSet
- WebP format support
- Code splitting for vendor bundles
- Memoized components and callbacks
- Optimized carousel with debounced scroll handlers
- Tailwind CSS purging for minimal bundle size

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2015+ JavaScript support required
- CSS Grid and Flexbox support required

## Contact Information

- Website: http://localhost:3001 (development)
- Contact Form: https://forms.gle/njc1mkTmSNtNuCa99
- LinkedIn: https://www.linkedin.com/in/benjamin-dron-1907a53a0
- Email: bendronedu@gmail.com
- Phone: (929) 669-5022

## License

Private project. All rights reserved.
