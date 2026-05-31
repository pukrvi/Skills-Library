# Release Document Validation Checklist — New Card Format

Use this checklist to validate a generated release notes .docx before delivery. Go through each section systematically and mark PASS or FAIL.

## 1. Cover Page Validation

### 1.1 Title Block
- [ ] **PASS/FAIL**: Title reads "Product Release Notes" — 26pt bold #000000
- [ ] **PASS/FAIL**: Subtitle reads "{Month YYYY}" — 18pt #666666
- [ ] **PASS/FAIL**: Divider line present — 2pt bottom border #118D42, spacing after=240

### 1.2 Executive Summary
- [ ] **PASS/FAIL**: H2 heading "Executive Summary" — 18pt bold #000000
- [ ] **PASS/FAIL**: Summary is 2–3 sentences, no bullets or numbered lists
- [ ] **PASS/FAIL**: Leads with the biggest product shift, then lists other themes
- [ ] **PASS/FAIL**: A busy leader could read only this and understand the release

### 1.3 Top 5 Table
- [ ] **PASS/FAIL**: Sub-heading "Top 5 to know" — 14pt bold #000000
- [ ] **PASS/FAIL**: Table has exactly 3 columns: Feature (2400 DXA) | Impact (4760 DXA) | Primary Audience (2200 DXA)
- [ ] **PASS/FAIL**: Header row fill is #00611F with white bold 12pt text
- [ ] **PASS/FAIL**: Body rows alternate white / #F2FBF5
- [ ] **PASS/FAIL**: Feature column is bold; Impact and Audience are regular 12pt
- [ ] **PASS/FAIL**: Exactly 5 rows of features (the highest-impact ones)

### 1.4 Stat Strip
- [ ] **PASS/FAIL**: Sub-heading "Release at a glance" — 14pt bold #000000
- [ ] **PASS/FAIL**: 4-cell single-row table, each cell 2340 DXA
- [ ] **PASS/FAIL**: Cell fill is #E8F9EF
- [ ] **PASS/FAIL**: Numbers are 26pt bold #000000, centred
- [ ] **PASS/FAIL**: Labels are 14pt #666666, centred
- [ ] **PASS/FAIL**: Four cells: Total features | GA | Flag-controlled | Product areas
- [ ] **PASS/FAIL**: Stat numbers match actual feature counts in the document

## 2. Table of Contents Validation

- [ ] **PASS/FAIL**: Page break after cover page
- [ ] **PASS/FAIL**: TOC heading present (H2)
- [ ] **PASS/FAIL**: Product areas appear as bold headings (from H1)
- [ ] **PASS/FAIL**: Features appear as indented items (from H3)
- [ ] **PASS/FAIL**: Entries are hyperlinked

## 3. Product Area Sections

### 3.1 Product Area Headers
- [ ] **PASS/FAIL**: Each product area has an H1 heading — 26pt bold #000000
- [ ] **PASS/FAIL**: H1 headings have outline level 0 (for TOC generation)
- [ ] **PASS/FAIL**: Each product area has an italic intro line — 12pt italic #000000
- [ ] **PASS/FAIL**: Intro line summarises the theme, not individual features
- [ ] **PASS/FAIL**: Product areas appear in consistent order: LMS → DSR → Content → Integrations → Knowledge Search → Platform

## 4. Feature Card Validation

### 4.1 Feature Name
- [ ] **PASS/FAIL**: H3 heading — 14pt bold #000000
- [ ] **PASS/FAIL**: H3 has outline level 2 (for TOC)
- [ ] **PASS/FAIL**: Title Case, under 8 words
- [ ] **PASS/FAIL**: Names the capability, doesn't describe it

### 4.2 Italic One-Liner
- [ ] **PASS/FAIL**: Single sentence — 12pt italic #000000
- [ ] **PASS/FAIL**: 10–15 words, present tense, describes the new state
- [ ] **PASS/FAIL**: Leads with the benefit

### 4.3 Detail Table Structure
- [ ] **PASS/FAIL**: 2-column table, total width 9360 DXA
- [ ] **PASS/FAIL**: Label column: 2200 DXA, bold 12pt #000000, fill #E8F9EF
- [ ] **PASS/FAIL**: Value column: 7160 DXA, regular 12pt, alternating white / #F2FBF5
- [ ] **PASS/FAIL**: All borders: 1pt #2FA55D
- [ ] **PASS/FAIL**: Cell padding: 80 DXA top/bottom, 120 DXA left/right

### 4.4 Detail Table Rows (Full Card — high-impact features)
- [ ] **PASS/FAIL**: Row 1 "Why It Matters" — one sentence in present tense, positive language (what users can now do — never past-tense pain)
- [ ] **PASS/FAIL**: Row 2 "Target Audience" — exactly one of: Admins, Users, or All
- [ ] **PASS/FAIL**: Row 3 "Release Type" — exactly one of: GA, Beta, Early Access, Flag-controlled
- [ ] **PASS/FAIL**: Row 4 "Where to Find It" — uses UI > Path > Notation
- [ ] **PASS/FAIL**: Row 5 "How to Use" — numbered steps with imperative verbs
- [ ] **PASS/FAIL**: Rows appear in the fixed order above

### 4.5 Detail Table Rows (Standard Card — smaller features)
- [ ] **PASS/FAIL**: Same as Full Card but "Why It Matters" row is omitted
- [ ] **PASS/FAIL**: Remaining 4 rows in order: Target Audience → Release Type → Where to Find It → How to Use

### 4.6 Screenshot / GIF (MANDATORY)
- [ ] **PASS/FAIL**: Every feature has a screenshot, GIF, or labelled placeholder — NO EXCEPTIONS
- [ ] **PASS/FAIL**: Image is immediately after the detail table
- [ ] **PASS/FAIL**: Image is full content width (6.5 inches / 9360 DXA)
- [ ] **PASS/FAIL**: Aspect ratio is maintained (not stretched)
- [ ] **PASS/FAIL**: Italic caption below — 10pt #666666
- [ ] **PASS/FAIL**: If no image: dashed placeholder box with gray fill #F2FBF5 and descriptive text

## 5. Writing Quality Validation

### 5.1 Sentence Rules
- [ ] **PASS/FAIL**: All sentences are ≤20 words
- [ ] **PASS/FAIL**: Active voice throughout — no "is provided", "can be used", "has been implemented"
- [ ] **PASS/FAIL**: Present tense — no "will be", "is going to"
- [ ] **PASS/FAIL**: Benefits before mechanism — each description answers "why" before "how"

### 5.2 Terminology
- [ ] **PASS/FAIL**: All abbreviations defined on first use (e.g., "Digital Sales Room (DSR)")
- [ ] **PASS/FAIL**: No engineering jargon (API, schema, endpoint, payload) unless explained
- [ ] **PASS/FAIL**: No placeholder text ([INSERT], [TODO], [FIX], {{ }})
- [ ] **PASS/FAIL**: Feature names use Title Case

### 5.3 How to Use Steps
- [ ] **PASS/FAIL**: All steps use numbered format (1, 2, 3)
- [ ] **PASS/FAIL**: Each step starts with an imperative verb (Click, Select, Navigate, Open, View, Filter, Enable)
- [ ] **PASS/FAIL**: Steps describe what the user SEES after each action
- [ ] **PASS/FAIL**: Final step states the outcome or confirmation

## 6. Formatting & Brand Validation

### 6.1 Typography
- [ ] **PASS/FAIL**: All text is Calibri — no rogue fonts
- [ ] **PASS/FAIL**: Body text is 12pt (24 half-points)
- [ ] **PASS/FAIL**: Table text is 12pt (24 half-points)

### 6.2 Colour Palette
- [ ] **PASS/FAIL**: H1, H2, and H3 headings use #000000
- [ ] **PASS/FAIL**: Body/italic text uses #000000
- [ ] **PASS/FAIL**: Subtitle uses #666666
- [ ] **PASS/FAIL**: Label column fill is #E8F9EF
- [ ] **PASS/FAIL**: Alt row fill is #F2FBF5
- [ ] **PASS/FAIL**: Borders are #2FA55D
- [ ] **PASS/FAIL**: Header/footer text is #666666

### 6.3 Header & Footer
- [ ] **PASS/FAIL**: Header: right-aligned, 10pt #666666, format "[Product Name]  |  Product Releases  |  {DD Mon YYYY}"
- [ ] **PASS/FAIL**: Footer: centred, 10pt #666666, format "Page {number}" with PAGE field code

## 7. Completeness Validation

- [ ] **PASS/FAIL**: All features from the input/requirements are present in the document
- [ ] **PASS/FAIL**: Feature count in stat strip matches actual feature count
- [ ] **PASS/FAIL**: No empty sections or missing content
- [ ] **PASS/FAIL**: No TODO/FIXME/placeholder markers remain
- [ ] **PASS/FAIL**: Closing section present: "Questions or feedback?" with contact info
- [ ] **PASS/FAIL**: Document is ready for delivery to enablement and revenue leaders

## Validation Summary

| Section | Items | Pass | Fail |
|---------|-------|------|------|
| 1. Cover Page | 17 | __ | __ |
| 2. Table of Contents | 5 | __ | __ |
| 3. Product Area Sections | 5 | __ | __ |
| 4. Feature Cards | 22 | __ | __ |
| 5. Writing Quality | 11 | __ | __ |
| 6. Formatting & Brand | 10 | __ | __ |
| 7. Completeness | 6 | __ | __ |
| **TOTAL** | **76** | __ | __ |

**Result**: All items PASS → Document is ready for delivery. Any FAIL → Fix and re-validate.
