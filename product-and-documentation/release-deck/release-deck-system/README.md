# Release Deck Design System

A reusable slide-deck system for [Product Name]'s **monthly Product Updates / Release Notes** decks. Lift this folder into any project, edit `release-data.js`, and render a fully-branded 1920×1080 presentation — no styling work required.

---

## What's in the box

| File | Purpose |
|---|---|
| `template.html` | The deck shell. Copy this once per month; rename to `<Month> <Year> Product Updates.html`. |
| `template-release-data.js` | Starter content file. Rename to `release-data.js` and fill in the month's features. |
| `slide-components.jsx` | Shared atoms — `Chip`, `Wordmark`, `BrandMark`, `Eyebrow`, `ScreenshotFrame`, plus the design tokens (`TYPE`, `SP`, `C`). |
| `slide-layouts.jsx` | Five slide types — `CoverSlide`, `OverviewSlide`, `SectionDividerSlide`, `FeatureSlide`, `ClosingSlide`. |
| `colors_and_type.css` | Token layer — colors, spacing, typography, radii. |
| `deck-stage.js` | The presentation shell — scales to the viewport, keyboard + tap nav, speaker notes, and print-to-PDF support. |
| `assets/fonts/` | Local Inter font files — optional; the CSS also loads Inter from Google Fonts. |
| `assets/brand/` | Nucleus mark, sparkle decoration. |
| `preview/` | Static preview cards for reviewing each slide type in isolation. |

---

## Monthly workflow (the whole thing)

### 1. Copy the template

```
cp release-deck-system/template.html "<Month> <Year> Product Updates.html"
cp release-deck-system/template-release-data.js release-data.js
```

### 2. Fill in `release-data.js`

The whole deck is generated from this one file. Edit:

- `brandName`, `footerText`, `month`, `year`, `tagline` — shown in the header, footer, and cover.
- `overviewHeadline` — the big headline on slide 2.
- `sections[]` — **keep to exactly 4 sections** (the overview renders a 2×2 grid). Each section has:
  - `id` — kebab-case, used to build DOM ids.
  - `title` — shown on the section divider slide.
  - `features[]` — one object per feature slide.

Each feature takes:

```js
{
  id: 'course-analytics',
  category: 'LMS',                 // green eyebrow
  title: 'Improved Course Analytics',
  summary: 'One-sentence outcome.',
  bullets: [
    '**Summary Tiles** for an at-a-glance view.',
    '**Learner Status** — Enrolled, In Progress, Completed.',
  ],
  audience: 'Admin',               // see AUDIENCE_STYLES
  release: 'General',              // General / Beta / Feature-Flag / Early Access / Coming Soon
  screenshot: {
    src: 'assets/screenshots/course-analytics.png',  // optional — omit for placeholder
    alt: 'Course Analytics dashboard',
    caption: 'Coaching → Courses → Analytics',
  },
}
```

Bullets support `**bold**` markdown.

### 3. Add matching `<section>` elements to the HTML

The template has placeholders for the cover, overview, and closing slides. For each section/feature in your data you add two `<section>` elements in the same order:

```html
<!-- inside <deck-stage> -->
<section data-label="Cover"    id="s-cover"></section>
<section data-label="Overview" id="s-overview"></section>

<!-- Section 1 -->
<section data-label="Section · LnC"    id="s-section-lnc"></section>
<section data-label="Course Analytics" id="s-f-course-analytics"></section>
<section data-label="Role Plays"       id="s-f-roleplay-to-course"></section>

<!-- Section 2 … Section 4 -->

<section data-label="Closing" id="s-closing"></section>
```

- Section divider id: `s-section-<section.id>`
- Feature slide id: `s-f-<feature.id>`

The mount script in `template.html` walks your data in order and renders each slide into its matching `<section>`.

### 4. Add screenshots

Drop PNGs into `assets/screenshots/` and point `screenshot.src` at them. Omit `src` to render a striped placeholder with the alt text and caption.

### 5. (Optional) Speaker notes

Edit the `<script type="application/json" id="speaker-notes">` block. One string per slide, in order. If your deck has N slides, the array should have N entries. Delete the block entirely if you don't need notes.

### 6. Export

- **PDF** — open the deck, `Cmd/Ctrl+P`. `deck-stage.js` paginates one slide per page.
- **PPTX (editable)** — use `gen_pptx` with these inputs:
  ```js
  {
    width: 1920, height: 1080,
    resetTransformSelector: "deck-stage",
    slides: slideList.map((_, i) => ({
      showJs: `document.querySelector('deck-stage').goTo(${i})`,
      selector: "deck-stage > [data-deck-active]",
    })),
    fontSwaps: [{ from: "Inter", to: "Inter" }],
    googleFontImports: ["Inter"],
    filename: "Product-Updates-<Month>-<Year>",
  }
  ```

---

## Design tokens

All tokens are defined twice — as CSS variables in `colors_and_type.css` and as JS objects in `slide-components.jsx` (`TYPE`, `SP`, `C`). Use the JS tokens inside slide JSX; use the CSS variables for any plain-HTML styling.

### Type scale (at 1920×1080)

| Token | px | Where |
|---|---|---|
| `TYPE.coverLg` | 180 | Cover "Product / Updates" |
| `TYPE.title` | 64 | Feature slide titles |
| `TYPE.subtitle` | 44 | Section titles, sub-heads |
| `TYPE.bodyLg` | 34 | Feature summary |
| `TYPE.body` | 30 | Body copy, bullets |
| `TYPE.small` | 24 | Captions, meta, TOC list items |
| `TYPE.pill` | 22 | Chip text |
| `TYPE.eyebrow` | 22 | Category eyebrow above titles |

Nothing smaller than 22px is used anywhere — slides are seen from the back of a room.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `C.green` | `#0E8744` | Primary accent — eyebrows, bullets, section number, chip |
| `C.greenDeep` | `#0A5F30` | Darker green for the cover band + closing gradient |
| `C.greenSoft` | `#E8F6EE` | Audience: Users chip bg |
| `C.ink` | `#1A1F26` | Headline text |
| `C.inkSoft` | `#4A5260` | Body text |
| `C.inkMuted` | `#8A8F98` | Captions, TOC numbers |
| `C.line` | `#E6E3DE` | Card borders |
| `C.surface` | `#F7F5F2` | Overview cards, section divider bg |
| `C.blue` | `#2D81FF` | Release: General chip, Admin audience |
| `C.purple` | `#8F00FF` | Early Access chip, mixed-audience chip |
| `C.amber` | `#DE7F10` | Feature-Flag / Beta chips |

### Spacing

| Token | px | Where |
|---|---|---|
| `SP.padX` | 100 | Slide left/right padding |
| `SP.padTop` | 90 | Slide top padding |
| `SP.padBottom` | 100 | Slide bottom padding (reserves footer space) |
| `SP.titleGap` | 44 | Gap below titles |
| `SP.itemGap` | 28 | Gap between bullets / cards |
| `SP.lineGap` | 16 | Gap within stacked text blocks |

---

## Components

### `<Chip label value bg fg dot size />`

Inline pill used for audience/release tags. Pass `label="Audience"` and `value="Admin"` and it renders a two-word pill with a colored dot. Sizes: `md` (default) or `lg`.

### `<Wordmark color size whiteOnly />`

Renders a generic wordmark using `window.RELEASE.brandName`. `whiteOnly` flips the mark and text white for dark backgrounds. Default size is 40px tall.

### `<BrandMark color size />`

Generic brand icon. Used as a decorative element in the corner of cover, section divider, and closing slides.

### `<Eyebrow color>` · `{children}`

The small uppercase category label with the leading accent bar. Used above titles.

### `<ScreenshotFrame src alt caption>`

White card with border + soft shadow, aspect-filling the image. If `src` is omitted it shows a striped placeholder with `alt` as the label.

### `<SlideHeader>` · `<SlideFooter>`

Layout helpers that every slide type uses. You shouldn't need to use these directly — they're internal to the slide layouts.

---

## Slide types

| Layout | What it's for | Key props |
|---|---|---|
| `CoverSlide` | Title slide | `month`, `year`, `tagline` |
| `OverviewSlide` | Slide 2 — 2×2 TOC grid | `sections`, `tagline`, `month`, `year`, `featuresCount` |
| `SectionDividerSlide` | Between sections | `number`, `title` |
| `FeatureSlide` | Each feature | `category`, `title`, `summary`, `bullets`, `audience`, `release`, `screenshot` |
| `ClosingSlide` | Wrap-up | `month` |

All slides also take `index` + `total` which feed the footer page counter.

---

## House rules

1. **Keep to 4 sections.** The overview grid is exactly 2×2. More than 4 sections will be truncated with `.slice(0, 4)`.
2. **Titles are nouns, not verdicts.** "Improved Course Analytics", not "Coaching Just Got A Whole Lot Better".
3. **One screenshot per feature slide.** Put the screenshot on the right; bullets on the left.
4. **3–5 bullets per feature.** Any more and the slide reads dense from the back of a room.
5. **Keep brand treatment consistent.** Use `<Wordmark>` or `<BrandMark>` and override `brandName`/`footerText` in `release-data.js`.
6. **Never go below 22px.** The type scale is designed to be legible from the back of a boardroom.
7. **Footer is consistent.** `footerText` appears on the left, page number on the right, on every slide.

---

## Reviewing changes to the system

Open any file in `preview/` to see the slide type in isolation. These are full 1920×1080 renders of each layout with sample content, used for auditing type sizes, spacing, and colors in a side-by-side review.
