# Optiora — AI-Powered Business Intelligence Landing Page

A premium, dark-themed SaaS landing page built with **React 18 + Vite + Tailwind CSS**.

## Tech stack
- React 18 (JavaScript, no TypeScript)
- Vite
- Tailwind CSS
- lucide-react (icons)
- recharts (dashboard chart)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

> Note: this project was authored in a sandboxed environment without npm
> registry access, so dependencies could not be installed/build-verified here.
> All JSX was syntax-checked with the TypeScript compiler (zero parse errors),
> and every import was cross-checked against the corresponding component's
> export — but please run `npm install && npm run dev` locally as a final
> sanity check.

## Structure

```
src/
  components/   # 17 reusable components (Navbar, Hero, DashboardPreview, ...)
  App.jsx       # assembles all sections
  main.jsx      # React 18 root
  index.css     # Tailwind directives + custom utility classes
```

## Notes
- All nav links (`#product`, `#how-it-works`, `#intelligence`, `#pricing`, `#about`)
  smooth-scroll to their matching section anchors.
- Mobile menu, hover states, and card animations are pure CSS/Tailwind (no extra animation libs).
- Sales chart uses Recharts; all other sparklines/gauges are hand-drawn SVG.
