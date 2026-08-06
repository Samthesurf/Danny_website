# DACTION Initiative Website (React)

React + TypeScript port of the DACTION Initiative website. Built with Vite and
react-router (SPA), preserving the original static site's design tokens, layout,
and copy.

## Stack

- Vite 8, React 19, TypeScript
- react-router-dom v7 (client-side routing, 7 top-level pages + story/bio detail routes)
- Plain CSS ported verbatim from the original `style.css` (no UI framework)

## Pages

- `/` Home
- `/about` About
- `/programs` Programs overview
- `/programs/:slug` Per-campaign story page
- `/gallery` Gallery
- `/team` Core team
- `/team/:slug` Team member bio
- `/partners` Partners & Recognition
- `/contact` Contact
- `*` 404 fallback

## Structure

```
src/
  App.tsx               Router + scroll manager
  main.tsx              Entry
  index.css             Design tokens & shared components (original stylesheet)
  components/
    Layout.tsx          Site header + footer + <Outlet/>
    Placeholder.tsx     Gradient photo placeholder block
  data/
    site.ts             Programs, team, partners, gallery, timeline, stats, nav
  pages/                One component per route
public/
  assets/logo.svg       Temporary brand mark (replace when the final logo is provided)
original_static/        The original plain-HTML site kept for reference
```

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
```

## Notes

- `public/assets/logo.svg` is the current temporary DACTION mark. Replace it with
  the final logo when available; the header, footer, and favicon all reference it.
- Original site referenced per-program and per-team-member detail pages that were
  never built. Those now render as stub pages ("being written") instead of 404s,
  ready to be filled in via `src/data/site.ts` + the `ProgramStory`/`MemberBio`
  components.
