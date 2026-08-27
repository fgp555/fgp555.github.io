#!/usr/bin/env bash
# Markdown (cv.md) -> DOCX (con el estilo de reference-style.docx) -> Google Doc.
#
# Uso:
#   ./publish.sh          # compila y sube
#   ./publish.sh --build  # solo compila el DOCX, no sube nada
set -e

cd "$(dirname "$0")"

if ! command -v pandoc >/dev/null 2>&1; then
  echo "✗ Pandoc no está instalado. Ver SETUP.md."
  exit 1
fi

echo "→ Compilando cv.md a DOCX (con el estilo de reference-style.docx)..."
pandoc cv.md -o cv_franklin_gomez_fullstack.docx --reference-doc=reference-style.docx
echo "✓ cv_franklin_gomez_fullstack.docx actualizado"

if [ "$1" = "--build" ]; then
  exit 0
fi

echo
echo "→ Subiendo a Google Docs..."
python cv_sync.py push
