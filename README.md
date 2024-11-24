# Louis' Portfolio

A modern, responsive portfolio website built with Vue 3 and TypeScript, featuring dark mode, internationalization, and a clean, minimalist design. Tailwind is used throughout and built-upon an existing template.

The main purpose of the site is twofold:

1. To showcase my work and experience as a software developer
2. To serve as a resume exporter for myself on development

## Technologies

- **Frontend Framework**: Vue 3 with TypeScript
- **Build Tool**: Vite
- **Styling**:
  - Tailwind CSS
  - @tailwindcss/typography for prose styling
  - Custom CSS animations
- **Features**:
  - Dark/Light theme toggle with persistence
  - Internationalization (i18n) supporting English, French, and German
  - Responsive design optimized for all devices
  - Print-optimized resume view
  - Dynamic article rendering with Markdown support
  - Image optimization and lazy loading

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check and build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions when pushing to the main branch.
