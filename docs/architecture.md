# AIHub Architecture

## Overview
AIHub is a general-purpose directory and review platform, currently scoped to AI tools. The architecture supports any type of directory/review system.

## Tech Stack
- **Framework**: Next.js 14 (App Router) + React 19 + TypeScript (strict)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: SQLite (dev) / PostgreSQL (production) + Prisma ORM
- **Monorepo**: pnpm workspace + Turbo
- **i18n**: Built-in zh-CN + en
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Deploy**: Vercel

## Architecture Layers
```
apps/web/ (pages + UI)     ← Only page-specific code here
  │
shared/ (types, utils, validators, constants, messages)
  │
prisma/ (schema, migrations)
```

## Directory Structure
```
aihub/
├── shared/                    # Cross-platform code
│   ├── types/                 # TypeScript interfaces & DTOs
│   ├── constants/             # Enums, config data, site config
│   ├── utils/                 # Pure functions, helpers
│   ├── validators/            # Zod validation schemas
│   └── messages/              # i18n translation files (zh-CN.json, en.json)
├── apps/
│   └── web/                   # Next.js frontend
│       └── src/
│           ├── app/           # App Router pages & API routes
│           └── components/    # UI components
├── docs/                      # Architecture, progress, decisions
├── scripts/                   # Setup, check, deploy scripts
├── tests/                     # Unit & E2E tests
└── public/                    # Static assets
```

## Key Design Decisions
1. **Shared First** — All cross-platform logic in `shared/`. Apps only contain page UI.
2. **Generic Configurable** — Data model, UI copy, and theme are configurable for any directory type.
3. **Bilingual** — zh-CN + en with next-intl in shared/messages.
4. **Monorepo** — pnpm + Turbo for future multi-end support.

## Data Flow
1. User browses categories → API fetches items → Renders tool cards
2. View tool detail → Loads reviews, screenshots, pricing
3. Submit review → Validated via Zod → Saved to DB
4. Admin manages via dashboard