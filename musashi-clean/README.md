# Musashi Japanese Steakhouse

Marketing site for Musashi Japanese Steakhouse — 3900 Paradise Rd, Las Vegas, NV.

Built with React + Vite + Tailwind v4 + Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## Build

```bash
npm run build     # typechecks, then builds to dist/
npm run preview   # serve the production build locally
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Vercel auto-detects Vite. Confirm the defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

`vercel.json` rewrites all routes to `index.html` so client-side routes
(`/menu`, `/late-night`, `/find-us`, `/reserve`) work on direct load and refresh.

## Routes

| Path          | Section              |
| ------------- | -------------------- |
| `/`           | Hero, Reveal, Reviews |
| `/menu`       | Full menu            |
| `/late-night` | Late night menu      |
| `/find-us`    | Location & hours     |
| `/reserve`    | Reserve / call       |

## Editing content

- **Menu items and prices** — `src/data/menu.ts`
- **Hours logic / open-now indicator** — `src/hooks/use-business-hours.ts`
- **Colors and fonts** — `src/index.css` (the `@theme` block)
- **SEO, meta tags, structured data** — `index.html`

## Design tokens

| Token        | Hex       | Use                   |
| ------------ | --------- | --------------------- |
| `sumi`       | `#0F0F10` | Background            |
| `washi`      | `#EDE6D6` | Body text             |
| `gold`       | `#C8A24C` | Headings, accents     |
| `vermillion` | `#A6191A` | Seal, detail          |
| `ember`      | `#EA6A1E` | CTA, open indicator   |

Serif: Cormorant Garamond · Sans: Inter
