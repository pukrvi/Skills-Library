---
name: release-deck
description: Create a branded release deck from a release doc
---

Create a customer-facing release deck as an **editable PPTX**.

## Output Format

The deck is built in two stages: first, a data-driven HTML/React intermediate using the bundled Release Deck Design System, then converted or recreated as a native, editable PPTX. The final deliverable is always a `.pptx` file.

## Instructions

1. Read `references/DECK_GUIDE.md` for the full workflow for the HTML/React deck system.

2. Read the Release Deck Design System's own documentation:
   - `release-deck-system/DESIGN_SYSTEM_GUIDE.md` — quick reference for tokens, colors, type scale, and house rules
   - `release-deck-system/README.md` — full workflow, component API, and export instructions

3. Read `references/CONTENT_TRANSFORM.md`, `references/SLIDE_SEQUENCING.md`, and `references/SLIDE_TYPES.md` for content transformation and slide layout rules.

4. Execute the deck creation workflow:
   - Parse the release doc to extract features by category
   - Group features into **exactly 4 sections** (the overview is a 2×2 grid)
   - Copy the template files from the release-deck-system
   - Fill in `release-data.js` with the month's features, `brandName`, and optional `footerText`
   - Add matching `<section>` elements to the HTML
   - Drop any screenshots into `assets/screenshots/`
   - Verify the deck renders correctly

5. **Run the Editorial Review (MANDATORY)** — Before finalizing the deck, run these passes on feature titles, summaries, and bullets:
   - Customer value: rewrite internal wording into user-visible outcomes.
   - Specificity: make each slide concrete enough to understand without speaker notes.
   - Accuracy: cross-check against the release source.
   - Brevity: keep titles short, bullets tight, and slides scannable.
   - Risk: mark unverified claims as `[MISSING: description]`.

6. Run validation by reading `references/DECK_CHECKLIST.md` and checking against the requirements.

7. **Convert to PPTX** using the host environment's presentation tooling. If you have a compatible `build-pptx.js` script, run it; otherwise use `pptxgenjs`, PowerPoint/LibreOffice automation, or the host deck-generation tools to recreate the HTML deck as editable slides.
   ```bash
   npm install pptxgenjs sharp   # only if your conversion path needs these packages
   ```
   - Output: `<Month> <Year> Product Updates.pptx`

8. **QA the PPTX** — verify content with available extraction tools and visual spot-check:
   ```bash
   python -m markitdown "<Month> <Year> Product Updates.pptx"    # content QA
   soffice --headless --convert-to pdf "<out>.pptx"              # visual QA
   ```

9. **Generate two separate outputs**:

   **File 1: Release deck (.pptx)**
   - The editable PowerPoint deck
   - Name: `<Month> <Year> Product Updates.pptx`
   - This is the customer-ready deliverable

   **File 2: QA checklist (.md)**
   - Run the validation from step 8
   - Mark each item honestly against the ACTUAL deck output
   - Save as `<Month> <Year> Product Updates - QA.md`

## Key Rules

- **Exactly 4 sections** — the overview 2×2 grid requires this
- **Never invent new slide types, colors, or font sizes** — the design system is prescriptive
- **Never go below 22px text** — designed for boardroom legibility
- **3–5 bullets per feature** — any more is too dense
- **Feature titles are nouns, not verdicts** — "Improved Course Analytics", not "Coaching Just Got Better"
- Never write about unverified features — use `[MISSING: description]` markers instead

If the user provides input with the request, treat it as the release doc to transform. If no input is provided, ask the user for the release notes document.
