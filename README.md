# Portfolio (archive)

Personal portfolio — React 18, TypeScript, Vite, Tailwind CSS. Single-page layout; project archive and case studies open in modals.

## Layout

| Layer | Role |
|--------|------|
| `src/app/home/page.tsx` | Home screen — state, effects, section composition |
| `src/app/home/_components/` | Page sections (header, hero, work, modals, …) |
| `src/app/home/_data/` | Copy & static lists (nav, experience, marquee) |
| `src/components/` | Shared UI (modal shell, project cards) |
| `src/data/` | Project registry for archive / detail popups |
| `src/hooks/` | Cross-page hooks (e.g. section spy) |
| `src/style/site.css` | Global site styles (modal, accordion, scroll) |

## Scripts

```bash
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview dist
```
