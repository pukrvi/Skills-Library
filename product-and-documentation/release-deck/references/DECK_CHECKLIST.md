# Release Deck Validation Checklist

Use this checklist to validate a generated HTML release deck before delivery. Go through each item systematically and mark PASS or FAIL.

---

## 1. Slide Structure Validation

### 1.1 Deck Overview
- [ ] **PASS/FAIL**: Slide count is reasonable
  - Fixed: Cover (1) + Overview (1) + 4 Section Dividers (4) + Closing (1) = 7 fixed
  - Variable: Feature slides (one per feature)
  - Typical range: 10–24 total slides
  - If FAIL: Verify all features have slides, no duplicates

- [ ] **PASS/FAIL**: Cover slide is slide 1
  - Content: "Product / Updates" title, month, year, tagline
  - If FAIL: Check RELEASE.month, RELEASE.year, RELEASE.tagline in release-data.js

- [ ] **PASS/FAIL**: Overview slide is slide 2
  - Content: 2×2 grid of exactly 4 section cards with feature bullet lists
  - If FAIL: Verify exactly 4 sections exist in RELEASE.sections

- [ ] **PASS/FAIL**: Exactly 4 section dividers present
  - One per RELEASE.sections entry
  - If FAIL: Verify data has exactly 4 sections

- [ ] **PASS/FAIL**: Feature slides follow their section divider
  - Flow: Section Divider → Feature 1 → Feature 2 → … → Next Section Divider
  - If FAIL: Check RELEASE.sections[].features[] order in release-data.js

- [ ] **PASS/FAIL**: Closing slide is the final slide
  - Content: green gradient, wrap-up CTA, CSM prompt
  - If FAIL: Verify the closing slide is generated last

### 1.2 Data/Slide Matching
- [ ] **PASS/FAIL**: Every section and feature in `release-data.js` has a corresponding slide
  - Total slides = 1 (cover) + 1 (overview) + sections.length + total features + 1 (closing)
  - If FAIL: Run `markitdown` on the PPTX and count slides vs. data entries

- [ ] **PASS/FAIL**: No duplicate or extra slides beyond what the data defines
  - If FAIL: Check release-data.js for duplicate feature entries

## 2. Design System Compliance

### 2.1 Color Accuracy
- [ ] **PASS/FAIL**: Primary green is `#0E8744` (C.green)
  - Used in: eyebrows, bullets, section number circles, chips
  - If FAIL: Verify the `C` token object is unmodified

- [ ] **PASS/FAIL**: Headline text is `#1A1F26` (C.ink)
  - Used in: all titles, bold bullet lead-ins
  - If FAIL: Check component styles

- [ ] **PASS/FAIL**: Body text is `#4A5260` (C.inkSoft)
  - Used in: summaries, bullet text, overview feature lists
  - If FAIL: Check component styles

- [ ] **PASS/FAIL**: Surface background is `#F7F5F2` (C.surface)
  - Used in: overview cards, section divider backgrounds
  - If FAIL: Verify layout components

- [ ] **PASS/FAIL**: Closing slide has green gradient
  - Gradient: `C.greenDeep` → `C.green` → `#26A35A` at 135deg
  - If FAIL: Check the closing slide layout function

- [ ] **PASS/FAIL**: No off-brand colors present
  - All colors must come from the `C` object in the deck system
  - If FAIL: Replace with system tokens

### 2.2 Typography
- [ ] **PASS/FAIL**: All text uses Inter font
  - Check: Inter is used in the generated HTML and PPTX
  - If FAIL: Verify the deck export or generation path preserves Inter

- [ ] **PASS/FAIL**: Cover title is 80pt
  - If FAIL: Check the cover slide layout function

- [ ] **PASS/FAIL**: Feature titles are 34pt
  - If FAIL: Check the feature slide layout function

- [ ] **PASS/FAIL**: No text smaller than 10pt (chip/footer minimum)
  - If FAIL: Check font size values in the deck components or PPTX generator

- [ ] **PASS/FAIL**: Font sizes follow clear hierarchy
  - Cover (80pt) > Section (68pt) > Overview headline (36pt) > Feature title (34pt) > Summary (14pt) > Bullets (12pt) > Chips/Footer (10pt)
  - If FAIL: Adjust sizes to maintain hierarchy

### 2.3 Spacing
- [ ] **PASS/FAIL**: Slide padding is 0.6″ left/right (`PAD`)
  - If FAIL: Check the horizontal padding token

- [ ] **PASS/FAIL**: Header top padding is 0.42″ (`TOP`)
  - If FAIL: Check the top padding token

## 3. Content Validation

### 3.1 Content Completeness
- [ ] **PASS/FAIL**: Every feature has a category eyebrow
  - Shown as green uppercase text above the title
  - If FAIL: Add `category` to each feature in release-data.js

- [ ] **PASS/FAIL**: Every feature has a title (max 60 characters)
  - If FAIL: Add or shorten titles

- [ ] **PASS/FAIL**: Every feature has a summary sentence
  - One-line outcome, 34px, benefit-first
  - If FAIL: Add summary to release-data.js

- [ ] **PASS/FAIL**: Every feature has 3–5 bullets
  - Bullets support `**bold**` lead-ins
  - If FAIL: Add or trim bullets

- [ ] **PASS/FAIL**: Every feature has audience and release chips
  - Audience: must be exactly one of: Admins, Users, All
  - Release: must match RELEASE_STYLES key (General, Beta, Feature-Flag, Early Access, Coming Soon)
  - If FAIL: Fix to exact string values

- [ ] **PASS/FAIL**: Overview cards show all 4 sections with feature lists
  - If FAIL: Verify sections data is complete

### 3.2 Content Quality
- [ ] **PASS/FAIL**: No placeholder text visible
  - Scan for: [INSERT], [PLACEHOLDER], [TODO], [MISSING], null, undefined
  - If FAIL: Fill in all placeholders

- [ ] **PASS/FAIL**: Feature titles are nouns, not verdicts
  - Good: "Improved Course Analytics"
  - Bad: "Coaching Just Got A Whole Lot Better"
  - If FAIL: Rewrite titles

- [ ] **PASS/FAIL**: Descriptions are customer-facing (not technical jargon)
  - If FAIL: Rewrite using VOICE_TONE.md guidelines

- [ ] **PASS/FAIL**: All text is properly spelled and grammatically correct
  - If FAIL: Correct spelling and grammar

## 4. Screenshot Validation

- [ ] **PASS/FAIL**: Screenshot status documented for each feature
  - Either: real screenshot present, or placeholder renders with alt text
  - If FAIL: Document which features need screenshots

- [ ] **PASS/FAIL**: Screenshots placed in `assets/screenshots/`
  - File names: kebab-case, matching feature.screenshot.src
  - If FAIL: Move/rename screenshot files

- [ ] **PASS/FAIL**: Screenshots are not pixelated or blurry
  - Visual check: should look sharp at 1920×1080 render
  - If FAIL: Replace with higher-resolution images

- [ ] **PASS/FAIL**: Placeholders have descriptive alt text and captions
  - For features without screenshots, the placeholder should clearly describe what to capture
  - If FAIL: Add descriptive alt/caption text

## 5. Functional Validation

- [ ] **PASS/FAIL**: PPTX generation or conversion ran without errors
  - Check console output for successful file creation
  - If FAIL: Fix release-data.js syntax, missing asset paths, or conversion settings

- [ ] **PASS/FAIL**: PPTX opens in PowerPoint / Google Slides without errors
  - Visual check: no blank/empty slides
  - If FAIL: Re-run the conversion and check for corrupted images

- [ ] **PASS/FAIL**: Slide count matches expected total
  - Expected: 1 (cover) + 1 (overview) + N (section dividers) + M (features) + 1 (closing)
  - If FAIL: Verify release-data.js sections and features arrays

- [ ] **PASS/FAIL**: Footer shows on every slide
  - Content: configured `footerText` + page number
  - If FAIL: Check the footer layout function

- [ ] **PASS/FAIL**: Speaker notes present (if speaker-notes.js provided)
  - Array length should match slide count
  - If FAIL: Fix speaker-notes.js or omit

## 6. Export Readiness

- [ ] **PASS/FAIL**: Source files preserved alongside PPTX
  - Required for re-generation: deck/release-data.js, deck/assets/
  - If FAIL: Ensure deck/ folder is kept with the output

- [ ] **PASS/FAIL**: File naming follows convention
  - PPTX: `<Month> <Year> Product Updates.pptx`
  - Data: `deck/release-data.js`
  - If FAIL: Rename files

---

## Validation Summary

| Section | Item Count | Pass | Fail | Status |
|---------|-----------|------|------|--------|
| 1. Slide Structure | 8 | __ | __ | |
| 2. Design System Compliance | 11 | __ | __ | |
| 3. Content | 10 | __ | __ | |
| 4. Screenshots | 4 | __ | __ | |
| 5. Functional | 5 | __ | __ | |
| 6. Export Readiness | 2 | __ | __ | |
| **TOTAL** | **40** | __ | __ | |

**Result**: If all items PASS → Deck is ready for delivery. If any FAIL → Fix issues and re-validate.

## CRITICAL: Honest Assessment Rules

**Mark checks based on the ACTUAL deck output — not on what you intended or attempted.**

1. **Missing screenshots = Screenshots check is FAIL.** Placeholder renders don't count as real screenshots.
2. **`[MISSING]` markers in content = Content check is FAIL.** Placeholder content is not complete.
3. **Audience/Release values that don't match STYLES maps = Compliance check is FAIL.** Chip won't render correctly.
4. **Fewer or more than 4 sections = Structure check is FAIL.** The 2×2 grid is non-negotiable.

**An honest checklist with 5 FAILs is infinitely more useful than a dishonest one with all PASSes.**
