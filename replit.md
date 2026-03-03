# Astro Blog/Portfolio Site

## Overview
A personal blog and portfolio site built with Astro, React, TailwindCSS, and MDX. Originally authored by Dinh-Phong Nguyen ("xylophong").

## Tech Stack
- **Framework**: Astro v5
- **UI**: React 18 + TailwindCSS
- **Content**: MDX blog posts
- **Search**: Fuse.js
- **OG Images**: Satori + @resvg/resvg-js
- **Package manager**: npm

## Project Structure
- `src/content/blog/` - Blog post MDX files
- `src/components/` - Astro and React components
- `src/layouts/` - Page layout templates
- `src/pages/` - Astro page routes
- `src/config.ts` - Site configuration (title, author, social links, etc.)
- `public/` - Static assets

## Development
- Dev server runs on `0.0.0.0:5000`
- Workflow: `npm run dev` (Start application)
- Config: `astro.config.ts`

## Deployment
- Target: Static site
- Build: `npm run build` → outputs to `dist/`
- Note: Build script includes `jampack` for optimization and `astro check` for type-checking
