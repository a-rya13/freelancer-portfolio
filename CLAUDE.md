# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Non-standard Next.js version

This project pins `next@16.2.10` with `react@19.2.4` — versions newer than your training data, with breaking API/convention changes from the Next.js you know. **Before writing or editing any Next.js code (routing, data fetching, config, metadata, etc.), read the relevant guide under `node_modules/next/dist/docs/` first** (subfolders: `01-app`, `02-pages`, `03-architecture`, `04-community`). Heed any deprecation notices you find there.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

There is no test suite configured in this project.

## Architecture

This is a single-page freelancer portfolio site (Next.js App Router) plus dynamic per-project case study pages.

- **`app/page.tsx`** — the homepage. It's a straight composition of section components in order: `Navbar` → `Hero` → `TrustedIndustries` → `SelectedWork` → `Capabilities` → `Process` → `ContactCTA` → `Footer`. Sections are anchor-linked (`#work`, `#services`, `#process`, `#contact`) rather than routed — the navbar scrolls to them in-page.
- **`app/work/[slug]/page.tsx`** — case study pages, statically generated via `generateStaticParams()` from `data/projects`. Looks up the project by slug and 404s (`notFound()`) if missing.
- **`data/projects/`** — the content model. Each project is a hand-authored `Project` object (typed by `types/project.ts`) in its own file (`agarwal.ts`, `amari.ts`, `cms.ts`, `crm.ts`, `homestay.ts`), aggregated into a single `projects` array in `data/projects/index.ts`. This array is the single source of truth consumed by both the homepage's "Selected Work" section (filtered by `featured: true`) and the case study route. **To add/edit a project, add or edit a file here and register it in `index.ts` — there is no CMS or database.**
- **`components/`** is organized by role, not by feature:
  - `layout/` — `Navbar`, `Footer` (site chrome)
  - `sections/` — homepage sections, each typically self-contained and `"use client"` when it needs animation/interactivity
  - `sections/selected-work/` — the project showcase subsystem (`SelectedWork` → `ProjectShowcase` → `ProjectGallery`/`TechBadge`)
  - `case-study/` — components used only on `/work/[slug]` (currently `CaseStudyHero`)
  - `common/` — small shared primitives (`Container`, `SectionHeading`)
  - `ui/` — shadcn/ui-generated primitives (button, card, dialog, tabs, carousel, etc.) — treat as generated code, prefer composing over hand-editing
- **`lib/utils.ts`** — exports `cn()` (clsx + tailwind-merge), the standard shadcn className helper.
- **`hooks/`, `utils/`, `constants/`, `styles/`** currently exist but are empty — reserved locations for future extraction, not currently in use.

### Styling

- Tailwind CSS v4, configured via `app/globals.css` (`@import "tailwindcss"`) — there is no `tailwind.config.*` file; theme tokens (`--background`, `--foreground`, `--muted`, `--border`, `--radius`, `--font-heading`, `--font-body`) are plain CSS custom properties in `:root`.
- Two font families loaded via `next/font/google` in `app/layout.tsx`: Inter (`--font-inter`, body) and Space Grotesk (`--font-space`, headings via `--font-heading`).
- shadcn/ui config lives in `components.json` (style: `base-nova`, base color: `neutral`, icon library: `lucide`). Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`, all rooted at `@/*` → project root (see `tsconfig.json`).
- Motion/animation is done with `framer-motion` (scroll-triggered reveals via `whileInView`, mobile menu transitions, etc.) — see `components/layout/Navbar.tsx` and `components/sections/selected-work/SelectedWork.tsx` for the established pattern (a `fadeUp` variants object + `viewport={{ once: true }}`).
