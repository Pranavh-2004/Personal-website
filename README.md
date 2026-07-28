# Pranav Hemanth — Portfolio

A research-focused personal website covering systems, security, AI evaluation,
networking, and developer infrastructure. The interface uses restrained terminal
accents, an interactive command palette, and dedicated routes for deeper content.

## Stack

- React 18, TypeScript, and Vite
- Lightweight History API routing
- Tailwind CSS plus a custom responsive design system
- Radix Dialog and Lucide icons
- Vitest and Testing Library

## Local Development

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The development server prints the local URL when it starts.

## Checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Content

Portfolio copy and structured data live in
`src/content/portfolio.ts`. Update that file for roles, publications, projects,
skills, certificates, gallery entries, and external links.

The downloadable CV is served from `public/cv.pdf`. The profile photo and gallery
images use the existing Cloudinary assets, with responsive transformations added
at the URL level.

## Routes

- `/` — current positioning and selected work
- `/research` — publications and research notes
- `/projects` — filterable project index
- `/experience` — research, professional, and academic history
- `/archive` — certificates and gallery

Vercel's SPA rewrite is configured in `vercel.json`.
