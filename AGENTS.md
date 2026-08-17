# AGENTS.md

Guidance for AI coding agents (and humans) working in this repository.

## Project

Static link-in-bio site for jsisques, built with [Astro](https://astro.build). English and
Spanish locales with a language switch. The visual design comes from the "Página web de links"
Claude Design project (`Links.dc.html`) and its `jsisques-design-system`.

## Structure

- `src/pages/index.astro` — English (default locale, no URL prefix)
- `src/pages/es/index.astro` — Spanish (`/es/`)
- `src/components/LinksPage.astro` — the actual page content shared by both locales
- `src/components/*` — one component per section (avatar, social links, contact button,
  promo card, resource list, visit counter, language switch)
- `src/i18n/ui.ts` — all copy, keyed per locale; add new strings here for both `en` and `es`
- `src/i18n/utils.ts` — `useTranslations(lang)` and routing helpers
- `src/styles/tokens/*.css` — design tokens (colors, typography, spacing, radius, shadows,
  motion) ported verbatim from the jsisques design system. Don't hand-tune values here —
  change them at the source design and re-port, so the site and the design system don't drift.
- `src/styles/global.css` — imports the tokens and defines the shared page layout classes

## Commands

- `pnpm install`
- `pnpm dev` — local dev server
- `pnpm build` — type-check and static build to `dist/`
- `pnpm preview` — preview the production build
- `pnpm lint` — ESLint (`--fix`)
- `pnpm format` — Prettier (`--write`)
- `pnpm test` — Vitest

## Conventions

- **Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/)**
  (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:`).
- Adding copy: add the key to **both** `en` and `es` in `src/i18n/ui.ts` — never leave one
  locale missing a key.
- Adding a locale-specific route: create it under `src/pages/<locale>/` and reuse
  `LinksPage.astro` rather than duplicating markup.
- Keep `pnpm-lock.yaml` committed and in sync with `package.json`.
- Husky runs `lint-staged` (format + lint) on commit and `build` + `test:changed` on push.
- CI, GitHub Pages deploy, Docker builds, and the release train are shared reusable workflows
  from [`sisques-labs/workflows`](https://github.com/sisques-labs/workflows) — see
  `.github/workflows/`.
