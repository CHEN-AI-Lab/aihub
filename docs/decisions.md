# AIHub Architecture Decision Records

## ADR-001: Monorepo with pnpm + Turbo
**Date**: 2025-04-01
**Status**: Accepted

**Context**: Need to support shared code between multiple potential platforms (web, future mobile).

**Decision**: Use pnpm workspace + Turbo for monorepo orchestration with `shared/` and `apps/web/`.

**Consequences**: Clear separation of concerns. Shared code is tested independently.

---

## ADR-002: Generic Data Model
**Date**: 2025-04-01
**Status**: Accepted

**Context**: Should support any category directory, not just AI tools.

**Decision**: Use a generic "Item" model (name, description, url, category, pricing) instead of AI-tool-specific fields.

**Consequences**: Easy to pivot to other niches. Custom fields via features array.

---

## ADR-003: Bilingual by Default
**Date**: 2025-04-01
**Status**: Accepted

**Context**: Need to serve both Chinese and international users.

**Decision**: Build bilingual support from day one using message JSON files in `shared/messages/`.

**Consequences**: Every text string must be internationalized. More initial work but prevents tech debt.

---

## ADR-004: Prisma with SQLite/PostgreSQL
**Date**: 2025-04-01
**Status**: Accepted

**Context**: Need local dev without external dependencies and production-grade PostgreSQL.

**Decision**: Use Prisma with SQLite (`file:./dev.db`) for local dev and PostgreSQL for production. Same schema.

**Consequences**: No external DB needed locally. Schema changes require migrations.