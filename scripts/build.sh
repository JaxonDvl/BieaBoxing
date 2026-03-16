#!/bin/bash
set -e

DIST="dist"
JS_FILES=(app.js config.js content.js cookies.js gallery.js i18n.js maintenance.js theme.js)

echo "Cleaning dist..."
rm -rf "$DIST"
mkdir -p "$DIST/js" "$DIST/css"

echo "Copying static files..."
cp index.html gallery.html schedule.html coming-soon.html robots.txt sitemap.xml "$DIST/"
cp -r images "$DIST/"

echo "Minifying JS..."
for f in "${JS_FILES[@]}"; do
  terser "js/$f" --compress --mangle -o "$DIST/js/$f"
done

echo "Minifying CSS..."
cleancss -o "$DIST/css/style.css" css/style.css

echo "Build complete → $DIST/"
