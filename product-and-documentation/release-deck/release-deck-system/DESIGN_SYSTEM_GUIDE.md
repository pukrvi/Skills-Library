---
name: release-deck-system
description: Product-Updates / Release-Notes slide-deck system. 1920×1080 brand-consistent slides with tokens, atoms, and five slide layouts (Cover, Overview, Section, Feature, Closing).
---

# Release Deck Design System

This folder is a self-contained monthly-release-deck system. When the user asks you to build a new monthly Product Updates deck:

1. Copy `template.html` to `<Month> <Year> Product Updates.html` at the project root.
2. Copy `template-release-data.js` to `release-data.js` and fill it in with the month's features. Keep to **exactly 4 sections** (the overview is a 2×2 grid).
3. Add one `<section data-label="…" id="s-section-<id>">` per section and one `<section data-label="…" id="s-f-<featureId>">` per feature inside the `<deck-stage>`, in the same order as the data file.
4. Drop screenshots into `assets/screenshots/` and point `feature.screenshot.src` at them.
5. Load the deck, verify it, then export to PPTX via `gen_pptx` with `resetTransformSelector: "deck-stage"` and `selector: "deck-stage > [data-deck-active]"`.

Read `README.md` in this folder for the full workflow, token reference, and component API. Don't invent new slide types, colors, or font sizes — the system is prescriptive on purpose.

**Type scale** (1920×1080): cover 180 · title 64 · subtitle 44 · bodyLg 34 · body 30 · small 24 · eyebrow/pill 22. Never go below 22px.

**Colors**: green `#0E8744` (primary), ink `#1A1F26`, inkSoft `#4A5260`, surface `#F7F5F2`, plus blue/purple/amber for release-status chips.

**Spacing**: padX 100 · padTop 90 · padBottom 100 · titleGap 44 · itemGap 28 · lineGap 16.
