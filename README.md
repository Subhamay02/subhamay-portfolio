# Subhamay Kumar Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and a lightweight Three.js hero visual.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the source with ESLint.

## Project Structure

- `src/components/layout` contains page-level layout such as the navbar and footer.
- `src/components/hero` contains hero-specific composition, profile, and 3D loading components.
- `src/components/icons` contains reusable SVG icon components.
- `src/components/ui` contains reusable primitives such as section wrappers, buttons, panels, tags, and icons.
- `src/components/cards` contains reusable portfolio cards for skills, projects, publications, and achievements.
- `src/components/three` contains the React Three Fiber hero object.
- `src/sections` contains the top-level page sections shown in `App.jsx`.
- `src/data/portfolioContent.js` stores portfolio content used by the sections.
