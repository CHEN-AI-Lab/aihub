#!/usr/bin/env bash
# Setup script - install dependencies and configure project
set -euo pipefail

echo "🚀 AIHub Setup"
echo "==============="

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Edit .env.local with your values"
echo "  2. pnpm dev:web"