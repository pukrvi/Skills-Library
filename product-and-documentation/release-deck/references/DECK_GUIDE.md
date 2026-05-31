---
name: deck-creating-guide
description: Transform release doc content into branded customer-facing PPTX decks using the generic Release Deck Design System.
---

# Deck Creating Guide

## Purpose

Transform release documentation content into branded, customer-facing PPTX slide decks that communicate product updates with visual impact. The workflow uses the **Release Deck Design System** (HTML/React) as the data/content layer, then converts or recreates it as a native editable PPTX.

## Key Constraints

- **CRITICAL**: Use the Release Deck Design System at `../../release-deck-system/`. Never invent new slide types, colors, or font sizes.
- Slides are 1920×1080 pixels (LAYOUT_WIDE = 13.333″ × 7.5″ in PPTX).
- Typography: Inter font only (variable font included in assets; falls back to Calibri in Office).
- Exactly **4 sections** — the Overview slide renders a 2×2 grid. More than 4 sections will be truncated.
- 3–5 bullets per feature slide.
- Final output is always `.pptx`. Use available presentation tooling to convert or recreate the HTML deck as editable slides.

## Release Deck Design System — Location

All system files live at `release-deck-system/` inside this skill.

Read `release-deck-system/DESIGN_SYSTEM_GUIDE.md` and `release-deck-system/README.md` for the complete token reference, component API, and house rules.

### System Files

| File | Purpose |
|------|---------|
| `template.html` | Deck shell — copy once per release, rename to `<Month> <Year> Product Updates.html` |
| `template-release-data.js` | Starter content — rename to `release-data.js` and fill in features |
| `slide-components.jsx` | Shared atoms: `Chip`, `Wordmark`, `BrandMark`, `Eyebrow`, `ScreenshotFrame` + design tokens (`TYPE`, `SP`, `C`) |
| `slide-layouts.jsx` | 5 slide types: `CoverSlide`, `OverviewSlide`, `SectionDividerSlide`, `FeatureSlide`, `ClosingSlide` |
| `colors_and_type.css` | CSS token layer — colors, spacing, typography, radii |
| `deck-stage.js` | Presentation shell — scaling, keyboard nav, speaker notes, print-to-PDF, PPTX export hooks |
| `assets/` | Optional brand assets and Inter variable font |

### Design Tokens (from slide-components.jsx)

**Type Scale** (1920×1080):

| Token | px | Where |
|-------|-----|-------|
| `TYPE.coverLg` | 180 | Cover "Product / Updates" |
| `TYPE.title` | 64 | Feature slide titles |
| `TYPE.subtitle` | 44 | Section titles, sub-heads |
| `TYPE.bodyLg` | 34 | Feature summary |
| `TYPE.body` | 30 | Body copy, bullets |
| `TYPE.small` | 24 | Captions, meta, TOC list items |
| `TYPE.pill` | 22 | Chip text |
| `TYPE.eyebrow` | 22 | Category eyebrow above titles |

**Colors**:

| Token | Hex | Usage |
|-------|-----|-------|
| `C.green` | `#0E8744` | Primary accent — eyebrows, bullets, section number, chip |
| `C.greenDeep` | `#0A5F30` | Cover band + closing gradient |
| `C.greenSoft` | `#E8F6EE` | Users chip bg |
| `C.ink` | `#1A1F26` | Headline text |
| `C.inkSoft` | `#4A5260` | Body text |
| `C.inkMuted` | `#8A8F98` | Captions, TOC numbers |
| `C.line` | `#E6E3DE` | Card borders |
| `C.surface` | `#F7F5F2` | Overview cards, section divider bg |
| `C.blue` | `#2D81FF` | General release chip, Admin audience |
| `C.purple` | `#8F00FF` | Early Access chip, mixed-audience chip |
| `C.amber` | `#DE7F10` | Feature-Flag / Beta chips |

**Spacing**:

| Token | px | Where |
|-------|-----|-------|
| `SP.padX` | 100 | Slide left/right padding |
| `SP.padTop` | 90 | Slide top padding |
| `SP.padBottom` | 100 | Slide bottom padding |
| `SP.titleGap` | 44 | Gap below titles |
| `SP.itemGap` | 28 | Gap between bullets / cards |
| `SP.lineGap` | 16 | Gap within stacked text blocks |

## Step-by-Step Workflow

### 1. Preparation

Read these files before starting:
- `../../release-deck-system/SKILL.md` — system overview and house rules
- `../../release-deck-system/README.md` — full workflow, token reference, component API
- `references/CONTENT_TRANSFORM.md` — rules for converting doc content to slide content
- `references/SLIDE_TYPES.md` — the 5 slide types with props and layout details
- `references/SLIDE_SEQUENCING.md` — how to plan the 4-section deck structure

Also read the brand voice rules:
- `../brand-design-formatting/references/VOICE_TONE.md` — writing voice for customer-facing copy

### 2. Content Extraction

Parse the release documentation to extract features with their:
- Feature titles and descriptions
- Product categories
- Target audiences (mapped to AUDIENCE_STYLES)
- Release types (mapped to RELEASE_STYLES)
- Screenshots/images (if available)

### 3. Slide Planning

Plan the deck structure:
- **Exactly 4 sections** (the overview is a 2×2 grid — more will be truncated)
- Group features into 4 categories by importance and feature count
- Each section has: `id` (kebab-case), `title`, and `features[]`
- Sort sections by feature count descending

See `SLIDE_SEQUENCING.md` for detailed planning algorithm.

### 4. Create the Deck Files

#### Step 4a: Copy template

Copy the template files from the release-deck-system to the output directory:
```bash
cp release-deck-system/template.html "<Month> <Year> Product Updates.html"
cp release-deck-system/template-release-data.js release-data.js
```

Also copy (or symlink) the supporting files so the HTML can find them:
- `slide-components.jsx`
- `slide-layouts.jsx`
- `colors_and_type.css`
- `deck-stage.js`
- `assets/` folder (logos, fonts, brand marks)

#### Step 4b: Fill in `release-data.js`

Edit the data file with the month's content:

```js
window.RELEASE = {
  month: 'April',
  year: '2026',
  tagline: 'Innovation built around your success',
  overviewHeadline: 'Your Enablement Just Got Smarter',

  sections: [
    {
      id: 'lnc',
      title: 'Learning & Coaching',
      features: [
        {
          id: 'course-analytics',
          category: 'LMS',
          title: 'Improved Course Analytics',
          summary: 'One-sentence outcome.',
          bullets: [
            '**Summary Tiles** for an at-a-glance view.',
            '**Learner Status** — Enrolled, In Progress, Completed.',
          ],
          audience: 'Admin',
          release: 'General',
          screenshot: {
            src: 'assets/screenshots/course-analytics.png',
            alt: 'Course Analytics dashboard',
            caption: 'Coaching → Courses → Analytics',
          },
        },
        // ... more features
      ],
    },
    // ... exactly 3 more sections (total 4)
  ],
};
```

Bullets support `**bold**` markdown.

#### Step 4c: Add matching `<section>` elements to the HTML

For every section and feature in the data, add `<section>` elements inside `<deck-stage>` in the same order:

```html
<deck-stage width="1920" height="1080">
  <section data-label="Cover"    id="s-cover"></section>
  <section data-label="Overview" id="s-overview"></section>

  <!-- Section 1 -->
  <section data-label="Section · LnC"        id="s-section-lnc"></section>
  <section data-label="Course Analytics"      id="s-f-course-analytics"></section>
  <section data-label="Role Plays"            id="s-f-roleplay-to-course"></section>

  <!-- Section 2 … Section 4 -->

  <section data-label="Closing" id="s-closing"></section>
</deck-stage>
```

- Section divider id: `s-section-<section.id>`
- Feature slide id: `s-f-<feature.id>`

#### Step 4d: Add screenshots

Drop PNGs into `assets/screenshots/` and point `feature.screenshot.src` at them. Omit `src` (or set to `null`) to render a striped placeholder.

#### Step 4e: (Optional) Speaker notes

Edit the `<script type="application/json" id="speaker-notes">` block. One string per slide, in order.

### 5. Convert to PPTX

Generate the final editable PowerPoint file using whatever presentation tooling is available in the host environment. A data-driven `pptxgenjs` script works well if you have one; otherwise use native slide/deck tooling to recreate each HTML slide as editable PPTX content.

```bash
# Optional dependencies for a custom Node conversion path
npm install pptxgenjs sharp
```

**Expected folder layout** (the script looks for `deck/` subfolder):
```
<deckDir>/
  deck/release-data.js          ← window.RELEASE = { ... }
  deck/speaker-notes.js         ← (optional) window.SPEAKER_NOTES = [...]
  deck/assets/screenshots/*.png | *.gif | *.jpg
```

**Output:** `<Month> <Year> Product Updates.pptx`

#### QA the PPTX
```bash
python -m markitdown "<out>.pptx"                    # content QA
soffice --headless --convert-to pdf "<out>.pptx"     # visual QA via PDF
```

#### PDF (alternative)
Open the HTML deck in a browser, `Cmd/Ctrl+P`. `deck-stage.js` paginates one slide per page.

### 6. Quality Assurance

Run validation against `references/DECK_CHECKLIST.md`.

## Reference Files

### Deck Structure
1. **SLIDE_TYPES.md** — The 5 slide types with React component props and layout specs
2. **SLIDE_SEQUENCING.md** — Algorithm for planning 4-section deck structure
3. **CONTENT_TRANSFORM.md** — Rules for transforming doc content into slide content

### Design System (read from the system folder)
4. **release-deck-system/README.md** — Full component API, token reference, house rules
5. **release-deck-system/DESIGN_SYSTEM_GUIDE.md** — System overview and quick reference

## House Rules

1. **Keep to 4 sections.** The overview grid is exactly 2×2.
2. **Titles are nouns, not verdicts.** "Improved Course Analytics", not "Coaching Just Got A Whole Lot Better".
3. **One screenshot per feature slide.** Screenshot on the right; bullets on the left.
4. **3–5 bullets per feature.** Any more and the slide reads dense from the back of a room.
5. **Keep the brand mark consistent.** Use `<Wordmark>` or `<BrandMark>` and override `window.RELEASE.brandName`/`footerText` instead of editing every slide.
6. **Never go below 22px.** The type scale is designed for boardroom legibility.
7. **Footer is consistent.** Use `window.RELEASE.footerText` on the left and page number on the right, on every slide.

## Important Warnings

- **Never create slides from scratch** — always use the design system components
- **Never invent new colors or font sizes** — use only the tokens in `C`, `TYPE`, `SP`
- **Always exactly 4 sections** — the overview 2×2 grid requires this
- **Always deliver PPTX** — the HTML deck is an intermediate, not the final deliverable
