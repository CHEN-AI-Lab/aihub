# AIHub — AI Tool Directory & Review Platform

AIHub is a curated directory and review platform for AI tools. It helps users discover, compare, and review AI tools across multiple categories.

## Tech Stack
- **Framework**: Next.js 14 (App Router) + React 19 + TypeScript (strict)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: SQLite (dev) / PostgreSQL (production) + Prisma ORM
- **Monorepo**: pnpm workspace + Turbo
- **i18n**: Built-in zh-CN + en bilingual support
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Deploy**: Vercel

## Project Structure
```
aihub/
├── shared/               # Cross-platform code
│   ├── types/            # TypeScript type definitions
│   ├── constants/        # App constants & config
│   ├── utils/            # Utility functions
│   ├── validators/       # Zod validation schemas
│   └── messages/         # i18n translation files
├── apps/
│   └── web/              # Next.js web application
│       └── src/
│           ├── app/      # App Router pages
│           └── components/ # UI components
├── docs/                 # Architecture, progress, decisions
├── scripts/              # Setup, check, deploy scripts
├── tests/                # Unit & E2E tests
└── public/               # Static assets
```

## Commands
```bash
pnpm dev:web    # Start web dev server
pnpm build:web  # Build web app
pnpm test       # Run all tests
pnpm lint       # Code quality check
pnpm check      # TypeScript check
bash scripts/check.sh  # Full quality gate
```

## Key Features
- **Tool Directory** — Browse AI tools by category with search & filter
- **Reviews & Ratings** — Community-driven reviews with pros/cons
- **Comparison** — Side-by-side tool comparison
- **Bilingual** — Full zh-CN + en support
- **Configurable** — Data model, UI copy, and theme are configurable

## Environment Setup
Copy `.env.example` to `.env.local` and fill in required values.

## Deploy
Push to `main` branch → Vercel auto-deploys for production.