# Maryum Akram — Portfolio

Personal portfolio site for Maryum Akram, AI Automation Engineer. Live at
[maryumakram16.github.io/maryum-portfolio](https://maryumakram16.github.io/maryum-portfolio/).

Three pages — Landing, Work, Contact — built around one claim ("I turn slow, manual business
processes into AI systems that run themselves") and one action (book a 30-minute intro call).
Work page covers three case studies: MediLens, RoshanAI, and SkillSync AI, each scoped to the
features actually built solo or with attribution noted for collaborator-built pieces.

## Stack

- React + Vite
- Deployed on GitHub Pages via GitHub Actions
- Contact form wired to [Formspree](https://formspree.io) (no backend needed)

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` by default.

## Building

```bash
npm run build
```

Outputs to `dist/`. `npm run preview` serves the build locally to sanity-check before deploy.

## Project structure

```
src/
  components/     Shared components (Nav, ContactForm, HeroVisual)
  pages/          Landing, Work, Contact — one file + one CSS file each
  assets/images/  Project screenshots, organized by project folder
  siteConfig.js   Central config: Calendly URL, email, LinkedIn, Formspree endpoint
```

`siteConfig.js` is the single place to update contact/booking links — nothing else in the
codebase hardcodes them.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which builds and deploys to GitHub
Pages automatically.

## Notes on AI-assisted development

Parts of this codebase were built with Claude as a pair-programming tool — normal practice in
2026. Feature decisions, copy, attribution scoping, and what to ship were mine throughout.
