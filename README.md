# Portfolio

Personal portfolio site: homepage, project archive, and lazy-loaded case study pages.

**Stack:** React 18, TypeScript, Vite, React Router 7, Tailwind CSS, SCSS (select components).

## Scripts

```bash
npm install
npm run dev       # local dev
npm run build     # typecheck + production build
npm run preview   # preview dist/
npm run lint
npm run test
```

## Source layout

```
src/
├── app/                 # Screens (one folder per route segment)
│   ├── home/            # Landing `/`
│   ├── project/         # Archive + case studies under `/project/*`
│   └── not-found/
├── components/          # Shared UI by domain
│   ├── home/            # Homepage sections
│   ├── layout/          # Root layout shell, footer, subpage nav
│   ├── ui/              # SEO and small primitives
│   └── back-to-top/
├── data/
│   └── mock/            # Static content & project catalog
├── lib/                 # Router, route table, helpers (no page UI)
└── assets/              # Global icons & images
```

**Mental model**

| Layer | Responsibility |
|--------|----------------|
| `app/` | What this URL renders — thin `page.tsx` + local `_data` / `_components` |
| `components/` | Blocks reused across routes (homepage, layout, UI) |
| `data/mock/` | Project list, footer copy, ordering for cards & archive |
| `lib/` | Route definitions, router, small utilities |

Cross-folder imports use **`@/`** (e.g. `@/data/mock/projects`, `@/components/ui/Tag`). Inside a route segment use **relative** paths: `./_components/...`, `../assets/...` for images next to that page. Do not import `@/assets` from case study bodies — colocate images under `app/project/{slug}/assets/`.

## Homepage

- **`app/home/page.tsx`** — composes sections.
- **`app/home/_data/content.ts`** — nav labels, hero, about, experience, marquee copy.
- **`components/home/`** — Navbar, Reveal, section components.

Featured project cards read metadata from **`data/mock/projects.ts`** (`getFeaturedProjects()`).

## Project section (`/project`)

| Piece | Location |
|--------|-----------|
| Archive list | `app/project/page.tsx` |
| Shared case study chrome | `app/project/_components/ProjectDetailShell.tsx` |
| Wrapper for metadata + body | `app/project/_components/CaseStudyPageLayout.tsx` |
| Case study routes (auto) | `lib/routes.ts` reads `detailPath` from registry + `app/project/**/page.tsx` |
| Browser router | `lib/router.tsx` |

Each case study lives in its **own folder**, for example:

```
app/project/techx/
├── page.tsx              # Named default export (Fast Refresh)
├── _components/
│   └── Body.tsx          # Long-form content & screenshots
└── assets/               # Optional, colocated images
```

**Example page:**

```tsx
import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";

function TechxPage() {
  return <CaseStudyPageLayout projectId="techx" Body={CaseStudyBody} />;
}

export default TechxPage;
```

- **`projectId`** must exist in `data/mock/projects.ts`.
- Optional **`After`** prop: extra block below the body (Thang Loi Group hub uses `./_components/PlatformsSection.tsx`).

**Fast Refresh:** export a **named** page component from `page.tsx`. Do not default-export anonymous factory components.

**Thang Loi Group:** hub at `app/project/thangloigroup/`; platform pages under `app/project/thangloigroup/{slug}/`. Platform link order: `TLG_PLATFORM_IDS` in `data/mock/projects.ts`.

## Add a new case study

1. **`data/mock/projects.ts`** — add a record with `id`, `detailPath: "/project/{slug}"` (slug can be nested, e.g. `thangloigroup/hrm`), and listing fields. Add `id` to **`ARCHIVE_PROJECT_IDS`** / **`FEATURED_PROJECT_IDS`** when it should appear in lists.
2. **`app/project/{slug}/`** — create **`page.tsx`** + **`_components/Body.tsx`** (+ **`assets/`** if needed). The folder path must match `detailPath` after `/project/`. Routes are registered automatically via `getCaseStudyRouteSlugs()` + `import.meta.glob`; **`lib/routes.ts` is not edited by hand.**
3. Run **`npm run build`** — fails fast if `detailPath` has no matching `page.tsx`.

Keep **`id`**, **`projectId`** in `page.tsx`, folder slug, and **`detailPath`** aligned.

## Site-wide copy

- Footer links: **`data/mock/site.ts`**
- Project titles, summaries, archive ordering: **`data/mock/projects.ts`**

## SEO

`components/ui/SEO.tsx` — used on homepage, archive, and `ProjectDetailShell`.
