#!/bin/bash
set -e

DIST="dist"
JS_FILES=(app.js content.js gallery.js i18n.js theme.js)

echo "Cleaning dist..."
rm -rf "$DIST"
mkdir -p "$DIST/js" "$DIST/css"

echo "Copying static files..."
cp index.html gallery.html schedule.html robots.txt sitemap.xml "$DIST/"
cp -r images "$DIST/"

echo "Minifying JS..."
for f in "${JS_FILES[@]}"; do
  npx --yes terser "js/$f" --compress --mangle -o "$DIST/js/$f"
done

echo "Minifying CSS..."
npx --yes clean-css-cli -o "$DIST/css/style.css" css/style.css

echo "Build complete → $DIST/"
