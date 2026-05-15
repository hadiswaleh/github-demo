#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://z2c.activ8.digital}"
OUT_DIR="${2:-./extracted-site}"

mkdir -p "$OUT_DIR"

echo "Downloading pages and assets from: $BASE_URL"

wget \
  --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  --directory-prefix "$OUT_DIR" \
  "$BASE_URL"

echo "Done. Output at: $OUT_DIR"
