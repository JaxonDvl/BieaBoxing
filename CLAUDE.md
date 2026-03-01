CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Start production**: `npm run start`

## Architecture

This is the Plansy presentational/landing website built with Next.js 16 (App Router) and TypeScript.

### Internationalization (i18n)

The site uses `next-intl` for multi-language support (English and Romanian):

- **Routing**: All pages are under `app/[locale]/` with locale-prefixed URLs (`/en/...`, `/ro/...`)
- **Middleware** (`middleware.ts`): Handles locale detection and redirects
- **Configuration**: `i18n/config.ts` defines locales; `i18n/routing.ts` configures routing; `i18n/request.ts` loads messages
- **Translation files**: JSON files in `messages/` directory (e.g., `en.json`, `ro.json`)
- **Navigation**: Use `Link`, `useRouter`, etc. from `@/i18n/navigation` for locale-aware navigation

When adding new text, add translation keys to all message files.

### Component Structure

- **`components/ui/`**: Reusable UI primitives (shadcn/ui pattern with Radix UI, CVA for variants)
- **`components/landing/`**: Landing page sections (Hero, Features, Pricing, FAQ, CTA, Footer)
- **`components/language-switcher.tsx`**: Locale switching component

### Styling

- Tailwind CSS v4 with `tw-animate-css` for animations
- CSS variables for theming defined in `app/globals.css` (supports light/dark mode via `.dark` class)
- Use `cn()` from `@/lib/utils` for conditional class merging (combines `clsx` + `tailwind-merge`)

### Path Aliases

`@/*` maps to the project root (e.g., `@/components`, `@/lib/utils`, `@/i18n/navigation`)

### Documentation

Project documentation is in the `/docs` folder.

### Static Export & Deployment

The site is configured for static export to shared hosting (dev.plansy.io via FTP):

- **Build output**: `npm run build` generates static files in the `/out` folder
- **Deployment**: Upload the contents of `/out` to the FTP public directory
- **Middleware**: Disabled for static export; root `/` redirects to `/en/` via client-side redirect
- **Images**: Unoptimized (no server-side image optimization on static hosting)
