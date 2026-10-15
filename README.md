# Portfolio (archive)

Personal portfolio — React 18, TypeScript, Vite, React Router, Mantine.

**Architecture:** route colocation (app directory style) — feature folders under `src/app/`, shared UI in `src/components/`, list metadata in `src/data/`, routing helpers in `src/lib/`.

## Layout

| Layer | Role |
|--------|------|
| `src/app/` | Screens: each route folder has `page.tsx`; segment-private `_components/`, `_data/`, `_assets/` |
| `src/components/` | Reusable UI (header, cards, …) |
| `src/app/project/_components/ProjectShell.tsx` | Layout chung cho mọi trang project (header, back, footer) |
| `src/data/` | Static registry (e.g. project list / `detailPath`) |
| `src/lib/` | Router (glob → routes), helpers |

Routes are built from `src/app/**/page.tsx` via `import.meta.glob` in `src/lib/router.tsx`. URLs mirror folder paths (`app/home` → `/`, `app/project/techx` → `/project/techx`). Adding a project: create the folder + `page.tsx`, register `detailPath` in `src/data/projects.registry.ts`.

## Scripts

```bash
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview dist
```
