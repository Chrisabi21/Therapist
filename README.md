# my-app

A production-ready **TypeScript + React + Vite** starter. Strict types, CSS Modules, path aliases, code-split routing — zero bloat.

## Quick start

```bash
npm install
npm run dev        # → http://localhost:5173
```

## Scripts

| Command             | Description                          |
|---------------------|--------------------------------------|
| `npm run dev`       | Start dev server with HMR            |
| `npm run build`     | Type-check + production build        |
| `npm run preview`   | Preview the production build locally |
| `npm run typecheck` | Run `tsc` without emitting           |

## Project structure

```
src/
├── main.tsx          # React entry point
├── App.tsx           # Router + layout shell
├── index.css         # Global reset & CSS design tokens
├── vite-env.d.ts
├── types/
│   └── index.ts      # Shared TypeScript interfaces & utility types
├── hooks/
│   ├── useFetch.ts        # Generic abort-safe data-fetching hook
│   └── useLocalStorage.ts # Type-safe localStorage hook
├── components/
│   ├── Button.tsx / .module.css
│   ├── Card.tsx   / .module.css
│   └── Navbar.tsx / .module.css
└── pages/
    ├── Home.tsx     / .module.css
    ├── About.tsx    / .module.css
    └── NotFound.tsx / .module.css
```

## Path aliases

Import from `@/` instead of relative paths:

```ts
import { Button } from "@/components/Button";
import { useFetch } from "@/hooks/useFetch";
```

## Adding a new page

1. Create `src/pages/MyPage.tsx`
2. Lazy-import it in `App.tsx`
3. Add a `<Route>` and optionally a `<NavLink>` in `Navbar.tsx`

## Tech stack

- **React 18** — concurrent rendering, `Suspense`, lazy loading
- **TypeScript 5** — strict mode, `exactOptionalPropertyTypes`
- **Vite 5** — instant HMR, ESM-first bundling
- **React Router 6** — file-less, declarative routing
- **CSS Modules** — scoped styles, no runtime cost
