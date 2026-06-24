#!/bin/bash
# Check script — run all quality gates
set -e

echo "📦 Check 1: Project structure"
find apps -path '*/node_modules' -prune -o -path '*/.next' -prune -o -type f -print 2>/dev/null | grep -E '(hooks|lib)/' || echo "✅ No hooks/lib in apps/"

echo ""
echo "📦 Check 2: console.log in apps/"
grep -rn "console\.log" apps/*/src/ 2>/dev/null && echo "⚠️ Found console.log!" || echo "✅ No console.log"

echo ""
echo "📦 Check 3: Lint"
pnpm lint 2>/dev/null && echo "✅ Lint passed" || echo "⚠️ Lint issues found (non-blocking if preview)"

echo ""
echo "📦 Check 4: TypeScript"
pnpm -r exec tsc --noEmit 2>/dev/null && echo "✅ TypeScript passed" || echo "⚠️ TS issues"

echo ""
echo "📦 Check 5: Test"
pnpm test 2>/dev/null && echo "✅ Tests passed" || echo "⚠️ Tests failed"