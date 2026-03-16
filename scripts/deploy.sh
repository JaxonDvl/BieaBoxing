#!/bin/bash
set -e

echo "=== Building project ==="
bash scripts/build.sh

echo "=== Deploying to Cloudflare ==="
npx wrangler versions upload

echo "=== Deploy complete ==="
