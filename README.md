# Asit Kumar Nayak — Personal Portfolio

Dark, animated, multi-page portfolio built with React 19, Framer Motion, Lenis and Tailwind CSS.

🌐 **Live portfolio:** https://asit-nayak-portfolio.vercel.app/

## Pages

- `/` — Home: kinetic hero, stats, skills marquee, Core Spotlight bento, featured projects, CTA
- `/about` — Story, quick facts, highlights
- `/experience` — Timeline: NPTEL internship + 3 IIT Madras Teaching Assistant roles
- `/projects` — All 10 projects with category filter (ML & Deep Learning / Full-Stack / AI Tools)
- `/skills` — Languages, frameworks & libraries, platforms & tools, teaching topics
- `/education` — IIT Madras BS in Data Science & Applications + coursework
- `/hackathons` — ANRF AISEHack 2.0 spotlight (Top 20, Round 2 Private Leaderboard)
- `/contact` — Email, phone, LinkedIn, GitHub

## Run locally

```bash
yarn install
yarn start
```

The site is static and does not require a backend or environment variables.

## Customize

All content lives in one file: `src/data/portfolio.js` — name, links, experience, projects, skills, education, hackathons. Update project `github` and `demo` URLs there once you have them.

- Colors & fonts: `tailwind.config.js` and `src/index.css`
- Logo mark: `src/components/Logo.jsx` and `public/favicon.svg`
- Your résumé: `public/resume.pdf` (replace with your latest)

## Build

```bash
yarn build
```

## Deploy

The project is deployed on [Vercel](https://vercel.com/) at https://asit-nayak-portfolio.vercel.app/. Import the GitHub repository to create a connected deployment; Vercel runs `yarn build` and publishes the `build` directory. `vercel.json` preserves static assets and rewrites direct portfolio routes to the React app.
