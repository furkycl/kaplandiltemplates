# Kaplan International TV - Marketing Website Templates

Professional SPA marketing website templates for Kaplan International Languages. Built with React, TypeScript, TailwindCSS and Vite.

## About

This project contains multiple landing page templates designed to showcase Kaplan language schools worldwide and collect leads from prospective students. Each template offers a distinct visual approach while maintaining the same functionality.

**This is NOT the official Kaplan website.** It is an independent marketing platform that promotes Kaplan language schools through videos, media and information.

## Templates

| Template | Style | Description |
|----------|-------|-------------|
| **Template 1** | Modern Startup | Clean tech-style, video-heavy, large hero, Stripe-inspired |
| **Template 2** | Education / University | Structured layout, location grid, institutional feel |
| **Template 3** | Video-First Marketing | Dark theme, Netflix-style, big media sections, cinematic |

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool
- **TailwindCSS 4** - Utility-first CSS
- **React Router 7** - Client-side routing
- **Lucide React** - Icon library

## Features

- Single Page Application (SPA) architecture
- Mobile-first responsive design
- Lead capture forms with validation
- Interactive location explorer (35+ schools in 8 countries)
- Video gallery with embedded players
- Location detail modals
- Multi-language support structure (i18n ready)
- Admin panel compatible data architecture
- Clean component-based structure

## Project Structure

```
src/
  components/       # Shared components (LeadForm, LocationModal)
  data/             # Mock data (locations, videos, siteContent)
  hooks/            # Custom hooks (useLeadForm)
  locales/          # Translation files (en.json, tr.json)
  templates/
    template1/      # Modern Startup template
    template2/      # Education/University template
    template3/      # Video-First Marketing template
  utils/            # Utilities (i18n)
```

## Getting Started

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

Visit `http://localhost:5173` to see the template picker, then choose a template to preview.

## Locations Covered

- **USA**: Boston, Chicago, Los Angeles, New York, San Francisco, Santa Barbara
- **Canada**: Toronto, Vancouver
- **UK**: London, Cambridge, Oxford, Edinburgh, Manchester, Bath, and more
- **France**: Lyon, Nice, Biarritz, Paris
- **Germany**: Berlin, Freiburg, Heidelberg, Frankfurt
- **Switzerland**: Montreux, Engelberg, Leysin
- **Ireland**: Dublin
- **Online**: Online Courses

## Roadmap

- [ ] Admin panel integration for content management
- [ ] Backend API for lead form submissions
- [ ] Additional language translations
- [ ] Additional templates (3 more planned)
- [ ] Analytics integration
