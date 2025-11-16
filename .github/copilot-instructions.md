<!-- Copilot instructions for repository contributors and AI coding agents -->
# Repository Summary

- Framework: Next.js (App Router) using the `app/` directory.
- Language: TypeScript + React 19. Project bootstrapped from `create-next-app`.
- Styling: TailwindCSS v4 + PostCSS; global styles live in `app/globals.css`.
- Build scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint` (see `package.json`).

# Quick Orientation for an AI coding agent

- Entry points:
  - Main UI entry: `app/page.tsx` (edit this to change the homepage).
  - Root layout and app-wide styles: `app/layout.tsx` and `app/globals.css`.
  - Static assets: `public/assets/` (served at `/assets/...`).

- Important config files:
  - `package.json` — scripts and dependency versions (Next 16, React 19).
  - `next.config.ts` — Next configuration (currently minimal placeholder).
  - `tsconfig.json` — strict TypeScript settings and path alias `@/*` → `./*`.
  - `eslint.config.mjs` — project lint rules (run via `npm run lint`).

# Architectural notes (what I learned from the code)

- App Router: The repo uses the Next.js App Router (`app/`). Files under `app/` are server components by default; client components must include `'use client'` at the top.
- Fonts: Google fonts are loaded via `next/font/google` inside `app/layout.tsx` (see `Geist` and `Geist_Mono` usage). Global classes add font CSS variables.
- Image handling: `next/image` is used in `app/page.tsx` — continue using `next/image` for optimized images.

# Conventions and patterns to follow

- Component placement: put page-level files in `app/<route>/page.tsx`. Shared UI components can be added under `components/` or at the repo root—there is currently no dedicated `components/` folder yet.
- Styling: prefer Tailwind utility classes inside JSX. Global overrides belong in `app/globals.css`.
- TypeScript: keep `strict: true`. Add types for new props and exported functions. Use `React.FC` or explicit function types as in existing files.
- Linting: run `npm run lint` before opening PRs. ESLint is configured via `eslint.config.mjs`.

# Helpful, concrete examples (copyable)

- Run dev server:

  npm run dev

- Build for production:

  npm run build
  npm run start

- Edit homepage example:
  - Open `app/page.tsx` and update the returned JSX. The page auto-refreshes in dev.

# Integration & external points

- Static files: use `public/assets/` for icons and images; reference them as `/assets/<file>` or via `next/image`.
- External services: none configured in codebase; if adding API keys, prefer environment variables and document them in README.

# What not to change without confirming

- `tsconfig.json` compiler options (especially `moduleResolution`, `paths`, and `strict`) — these affect builds.
- `next.config.ts` behavior — it's intentionally empty for now; add config only when needed and test `next build`.
- Dependency version upgrades (Next/React/Tailwind) — these may require code changes.

# Where to look for more context

- `README.md` at repo root — general setup and dev commands.
- `app/layout.tsx` — demonstrates project font + global layout patterns.

# If something is unclear

- Ask: mention which route, component, or build task. Provide a minimal reproduction (file path + desired change) and run `npm run dev` locally to validate.

<!-- End of copilot instructions -->
