# Slide Types Reference

The Release Deck Design System uses 5 React slide components, rendered at 1920×1080. All components are defined in `slide-layouts.jsx` and use shared atoms from `slide-components.jsx`.

---

## Slide Type 1: CoverSlide

**Purpose**: Title slide introducing the release

**Component**: `<CoverSlide month year tagline index total />`

**Props**:

| Prop | Type | Example |
|------|------|---------|
| `month` | string | `"April"` |
| `year` | string | `"2026"` |
| `tagline` | string | `"Innovation built around your success"` |
| `index` | number | Slide position (for footer) |
| `total` | number | Total slide count (for footer) |

**Visual Layout**:
- White background with a 14px green gradient band running down the left edge (`C.green` → `C.greenDeep`)
- Wordmark ([Product Name] logo) in the header
- Tagline: 26px, uppercase, green, 0.24em letter-spacing
- "Product / Updates": 180px, bold 700, `C.ink`, tight line-height (0.92)
- Month + Year: 58px, month in `C.inkSoft`, year in green bold
- Decorative `<BrandMark>` (180px) in bottom-right corner
- Footer: no page number (noNum)

**Update Instructions**:
- Only `month`, `year`, and optionally `tagline` change per release
- Never modify the visual layout or logo placement

---

## Slide Type 2: OverviewSlide

**Purpose**: Slide 2 — 2×2 table-of-contents grid showing all 4 sections

**Component**: `<OverviewSlide sections tagline month year featuresCount index total />`

**Props**:

| Prop | Type | Example |
|------|------|---------|
| `sections` | array | From `RELEASE.sections` (max 4, truncated with `.slice(0, 4)`) |
| `tagline` | string | `"Your Enablement Just Got Smarter"` (overviewHeadline) |
| `month` | string | `"April"` |
| `year` | string | `"2026"` |
| `featuresCount` | number | Total feature count across all sections |
| `index` / `total` | number | For footer |

**Visual Layout**:
- White background
- Header: Wordmark left, two `<Chip>` pills right (Features count + Release month)
- `<Eyebrow>` "Overview" in green
- Headline: 72px, bold 700, `C.ink`, max-width 1350px
- 2×2 CSS grid of section cards:
  - Background: `C.surface` (#F7F5F2)
  - Border: 1px `C.line` (#E6E3DE), radius 16px
  - Section title: 32px bold, with section number (01–04) in `C.inkMuted`
  - Feature list: 24px, `C.inkSoft`, green dot bullets

**CRITICAL**: The grid is exactly 2×2. Always provide exactly 4 sections. More than 4 will be truncated silently.

**Update Instructions**:
1. Set `overviewHeadline` to a compelling one-line summary of the release
2. Ensure exactly 4 sections in the data
3. Feature titles in each card come from `feature.title` — keep them short

---

## Slide Type 3: SectionDividerSlide

**Purpose**: Visual separator introducing each section

**Component**: `<SectionDividerSlide number title index total />`

**Props**:

| Prop | Type | Example |
|------|------|---------|
| `number` | number | Section number (1–4) |
| `title` | string | `"Learning & Coaching"` |
| `index` / `total` | number | For footer |

**Visual Layout**:
- Background: `C.surface` (#F7F5F2)
- Wordmark in header
- Section number: 72×72px green circle with white number (30px bold)
- Section title: 140px, bold 700, `C.ink`, max-width 1500px
- Decorative `<BrandMark>` (120px) in bottom-right
- Footer with page number

**Update Instructions**:
- `number` is auto-assigned (1-indexed from section order)
- `title` comes from `section.title` in release-data.js

---

## Slide Type 4: FeatureSlide (Most Common — bulk of the deck)

**Purpose**: In-depth view of individual features

**Component**: `<FeatureSlide category title summary bullets audience release screenshot index total />`

**Props**:

| Prop | Type | Example |
|------|------|---------|
| `category` | string | `"LMS"` — shown as green eyebrow |
| `title` | string | `"Improved Course Analytics"` — max 60 chars |
| `summary` | string | One-sentence outcome (34px body-lg) |
| `bullets` | string[] | 3–5 items, support `**bold**` markdown |
| `audience` | string | One of AUDIENCE_STYLES keys (see below) |
| `release` | string | One of RELEASE_STYLES keys (see below) |
| `screenshot` | object | `{ src, alt, caption }` — omit `src` for placeholder |
| `index` / `total` | number | For footer |

**Visual Layout**:
- White background
- Header: Wordmark left, two `<Chip>` pills right (Audience + Release)
- `<Eyebrow>` with category text in green
- Title: 64px (`TYPE.title`), bold 700, `C.ink`
- Body grid: `1fr 1.35fr` — left text column, right screenshot column
  - Left: summary (34px medium 500, `C.ink`) + bullet list (30px, `C.inkSoft`, green dot bullets)
  - Right: `<ScreenshotFrame>` — white card with border, soft shadow, image fills the frame
- Footer with page number

**Audience Styles** (from `AUDIENCE_STYLES` in slide-components.jsx):

| Value | Chip Colors |
|-------|-------------|
| `"Admins"` | Blue tint bg, blue text |
| `"Users"` | Green soft bg, green text |
| `"All"` | Purple tint bg, purple text |

**Release Styles** (from `RELEASE_STYLES` in slide-components.jsx):

| Value | Chip Colors |
|-------|-------------|
| `"General"` | Blue soft bg, blue text |
| `"Feature-Flag"` | Amber tint bg, amber text |
| `"Beta"` | Yellow tint bg, amber text |
| `"Early Access"` | Purple soft bg, purple text |
| `"Coming Soon"` | Gray bg, gray text |

**Bold Markdown in Bullets**: Use `**text**` to bold lead-ins. The `TextMD` helper renders these as `<strong>` with `C.ink` color and weight 700.

**Screenshot Handling**:
- Provide `screenshot.src` pointing to a PNG in `assets/screenshots/`
- If `src` is `null` or omitted, a striped placeholder renders with `alt` text and `caption`
- One screenshot per feature — always on the right side

**Update Instructions**:
1. Keep titles to max 60 characters, noun phrases
2. Summary: one sentence, benefit-first, 34px readable
3. Bullets: 3–5 items, each ~1 line, bold lead-in + supporting detail
4. Audience and release must be exact string matches from the style maps above

---

## Slide Type 5: ClosingSlide

**Purpose**: Wrap-up with call-to-action

**Component**: `<ClosingSlide month index total />`

**Props**:

| Prop | Type | Example |
|------|------|---------|
| `month` | string | `"April 2026"` (combined month + year) |
| `index` / `total` | number | For footer |

**Visual Layout**:
- Full gradient background: `C.greenDeep` → `C.green` → #26A35A (135deg)
- All text is white
- Wordmark in white (header `onDark`)
- Eyebrow: "That's a wrap on {month}" — 26px, #C9F2DB, uppercase
- Headline: "Ready to unlock what's next?" — 132px, bold 700, white
- Body: "Talk to your CSM for a deep-dive..." — 36px, #E5F6EC
- Decorative `<BrandMark>` (260px) in bottom-right, 22% opacity, white
- Footer: white text on dark

**Update Instructions**:
- Only `month` changes per release
- Usually no other changes needed

---

## Summary Table

| Slide Type | Count | Background | Key Visual |
|-----------|-------|------------|------------|
| CoverSlide | 1 | White + green band | 180px "Product Updates" |
| OverviewSlide | 1 | White | 2×2 section card grid |
| SectionDividerSlide | 4 | Surface (#F7F5F2) | 140px section title + number circle |
| FeatureSlide | 8–20 | White | Left text + right screenshot |
| ClosingSlide | 1 | Green gradient | CTA headline |
| **Total** | **15–27** | — | — |
