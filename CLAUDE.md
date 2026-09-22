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

This is a multi-page freelancer portfolio site (Next.js App Router) built as a personal brand/marketing site: a homepage plus dedicated `/work`, `/services`, `/about` pages and dynamic per-project case studies. There is no anchor-scrolled single-page layout — routes are real pages, each composing its own section components and each rendering its own `Navbar`/`Footer` (there's no shared route group layout for chrome; `app/layout.tsx` only sets up fonts, global `<html>/<body>`, SEO metadata/JSON-LD, and the site-wide `FloatingWhatsApp` button).

- **`app/page.tsx`** — homepage: `Hero` → `ServiceMarquee` → `SelectedWork` → `Capabilities` → `Footer`. Note `Navbar` is not rendered here directly — it's embedded inside `Hero` itself.
- **`app/work/page.tsx`** — work index; lists all projects via `WorkFilterTabs` (status/category filtering client component).
- **`app/work/[slug]/page.tsx`** — case study pages, statically generated via `generateStaticParams()` from `data/projects`. Looks up the project by slug and 404s (`notFound()`) if missing.
- **`app/services/page.tsx`** — services listing (`ServicesGrid`) plus the `Process` section.
- **`app/about/page.tsx`** — `About` → `FAQ` → `Feedback`.
- Every route page (except the homepage) builds its `<Metadata>` with `pageMetadata()` from `lib/seo.ts`, which fills in canonical URL, OpenGraph, and Twitter card fields from a `{ title, description, path }` input — use it for any new route rather than hand-writing metadata.

### Content model

Content lives in typed data files under `data/`, not a CMS/database — editing content means editing these files directly:

- **`data/projects/`** — each project is a hand-authored `Project` object (typed by `types/project.ts`) in its own file (`agarwal.ts`, `amari.ts`, `cms.ts`, `crm.ts`, `homestay.ts`), aggregated into a single `projects` array in `data/projects/index.ts`. This array is the single source of truth consumed by the homepage's "Selected Work" section (filtered by `featured: true`), `/work`, and the case study route. **To add/edit a project, add or edit a file here and register it in `index.ts`.**
- **`data/services.ts`**, **`data/capabilities.ts`**, **`data/faq.ts`** — similarly typed arrays feeding the Services/Capabilities/FAQ sections.
- **`constants/contact.ts`** — `CONTACT` (email/phone/WhatsApp links), `SOCIAL_LINKS`, `AVAILABILITY` — used by `Footer` and `FloatingWhatsApp`. Values are still placeholders (see TODO comments in the file).

### Components

`components/` is organized by role, not by feature:

- `layout/` — `Navbar`, `Footer` (site chrome; each page mounts these itself)
- `sections/` — page sections (`Hero`, `ServiceMarquee`, `Capabilities`, `Process`, `About`, `FAQ`, `Feedback`, `TrustedIndustries`, `ContactCTA`), typically self-contained and `"use client"` when they need animation/interactivity
  - `sections/selected-work/` — homepage project showcase (`SelectedWork` → `ProjectShowcase` → `ProjectGallery`/`TechBadge`)
  - `sections/work/` — `/work` page (`WorkFilterTabs`, `ProjectCard`)
  - `sections/services/` — `/services` page (`ServicesGrid`)
- `case-study/` — components used only on `/work/[slug]` (`CaseStudyHero`, `CaseStudyDetails`)
- `common/` — shared primitives (`Container`, `SectionHeading`, `AnimatedCounter`, `TypingText`, `FloatingWhatsApp`)
- `ui/` — shadcn/ui-generated primitives (accordion, avatar, badge, button, card, carousel, dialog, hover-card, navigation-menu, separator, sheet, tabs, tooltip) — treat as generated code, prefer composing over hand-editing
- `hooks/`, `utils/`, `styles/`, `components/animations/`, `components/project/` currently exist but are empty — reserved locations, not currently in use.

### Styling

- Tailwind CSS v4, configured via `app/globals.css` (`@import "tailwindcss"`) — there is no `tailwind.config.*` file. Theme tokens are plain CSS custom properties in `:root`, mapped into Tailwind color utilities via `@theme inline`. There are two token sets in play: an older light-mode set (`--background`, `--foreground`, `--muted`, `--border`, `--card`, `--subtle`) and the current dark theme actually used by pages (`--bg`, `--surface`, `--amber`/`--amber-hover`, `--text`, `--dim`, `--dimmest`, `--hairline` → `bg-bg`, `text-text`, `text-amber`, `text-dim`, etc.). Prefer the `bg`/`text`/`amber`/`dim` token set for new work — it's what every current page/section uses.
- Two font families loaded via `next/font/google` in `app/layout.tsx`: Space Grotesk (`--font-space`, mapped to `--font-heading` and `--font-body` — used for both headings and body) and JetBrains Mono (`--font-mono`, used for the small uppercase eyebrow/label text throughout).
- shadcn/ui config lives in `components.json` (style: `base-nova`, base color: `neutral`, icon library: `lucide`). Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`, all rooted at `@/*` → project root (see `tsconfig.json`).
- Motion/animation is done with `framer-motion` (scroll-triggered reveals via `whileInView`, mobile menu transitions, etc.) — see `components/layout/Navbar.tsx` and `components/sections/selected-work/SelectedWork.tsx` for the established pattern (a `fadeUp` variants object + `viewport={{ once: true }}`).

### SEO

`app/layout.tsx` sets global metadata defaults and a `Person` JSON-LD block using constants from `lib/seo.ts` (`SITE_URL`, `SITE_NAME`, `SITE_DESCRIPTION` — note `SITE_URL` is a placeholder pending a real production domain). `app/sitemap.ts` and `app/robots.ts` generate the sitemap/robots output; update `app/sitemap.ts` if new static routes are added.
