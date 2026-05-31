# Document Structure Reference — New Format

This document defines the exact page flow, element order, and dimensions for the [Product Name] release notes .docx format. Follow this structure precisely.

## Page 1: Cover Page

Elements in this exact order:

### 1. Title
- Text: "Product Release Notes"
- Style: 26pt bold Calibri #000000, left-aligned
- Spacing: after=40 DXA

### 2. Subtitle
- Text: "{Month YYYY}"
- Style: 18pt Calibri #666666
- Spacing: after=60 DXA

### 3. Divider
- Empty paragraph with bottom border: 2pt solid #118D42, space=6
- Spacing: after=240 DXA

### 4. Executive Summary Heading
- Text: "Executive Summary"
- Style: H2 — 18pt bold Calibri #000000
- Spacing: before=120, after=120

### 5. Summary Paragraph
- 2–3 sentences, 12pt Calibri body text
- Lead with the biggest shift, then mention other themes
- No bullets or numbered lists

### 6. Top 5 Sub-Heading
- Text: "Top 5 to know"
- Style: 14pt bold Calibri #000000
- Spacing: before=0, after=80

### 7. Top 5 Table
- Width: 9360 DXA (full content width)
- Columns: Feature (2400) | Impact (4760) | Primary Audience (2200)
- Header row: fill #00611F, text white bold 12pt
- Body rows: alternating white / #F2FBF5
- Feature column: bold 12pt
- Impact and Audience columns: regular 12pt
- Borders: #2FA55D all sides
- Cell padding: 80 top/bottom, 120 left/right

### 8. Release at a Glance Sub-Heading
- Text: "Release at a glance"
- Style: 14pt bold Calibri #000000
- Spacing: before=200, after=80

### 9. Stat Strip
- 4-cell single-row table, each cell 2340 DXA (= 9360 total)
- Cell fill: #E8F9EF
- Number: 26pt bold #000000, centred
- Label: 14pt #666666, centred
- Cells always: Total features | GA | Flag-controlled | Product areas
- Borders: #2FA55D
- Cell padding: 120 all sides

---

## Page 2: Table of Contents

- Page break before
- Heading: "Table of Contents" (H2)
- Auto-generated from Heading 1 (product areas) and Heading 3 (features)
- Product areas appear as bold headings
- Features appear as indented, hyperlinked items
- Heading range: 1–3

---

## Pages 3–N: Feature Sections

### Product Area Header

- **H1 heading**: Product area name (e.g., "Learning Management System")
  - 26pt bold Calibri #000000
  - Outline level: 0 (for TOC)
  - Spacing: before=240, after=120
- **Italic intro**: One sentence summarising [Product Name] area
  - 12pt italic Calibri #000000
  - Spacing: after=120

### Feature Card (repeats per feature)

Each card has three parts:

#### Part 1: Feature Name
- H3 heading: 14pt bold Calibri #000000
- Outline level: 2 (for TOC)
- Spacing: before=200, after=80

#### Part 2: Italic One-Liner
- Single sentence describing the user-visible change
- 12pt italic Calibri #000000
- Spacing: after=120

#### Part 3: Detail Table
- Width: 9360 DXA
- Two columns: Label (2200 DXA) + Value (7160 DXA)

**Label column cells:**
- Bold 12pt Calibri #000000
- Fill: #E8F9EF
- Borders: 1pt #2FA55D
- Padding: 80 top/bottom, 120 left/right

**Value column cells:**
- Regular 12pt Calibri
- Alternating fill: odd rows white, even rows #F2FBF5
- Borders: 1pt #2FA55D
- Padding: 80 top/bottom, 120 left/right

**Full Card rows (5 rows — high-impact features):**

| Row | Label | Content |
|-----|-------|---------|
| 1 | Why It Matters | One sentence in present tense: what users can now do and the impact (positive framing, never past-tense pain) |
| 2 | Target Audience | Exactly one of: Admins, Users, or All |
| 3 | Release Type | GA / Beta / Early Access / Flag-controlled |
| 4 | Where to Find It | UI > Path > Notation (e.g., "LMS > Admin > Home") |
| 5 | How to Use | Numbered steps with imperative verbs |

**Standard Card rows (4 rows — smaller features):**
Same as Full Card but omit row 1 (Why It Matters).

#### Part 4: Screenshot / GIF (MANDATORY)
- Placed immediately after the detail table
- Full content width: 6.5 inches (9360 DXA)
- Maintain aspect ratio; do not stretch
- Italic caption below: 10pt #666666
- If no image yet: dashed-border placeholder box (gray fill #F2FBF5)

---

## Final Page: Closing

- H3: "Questions or feedback?" (14pt bold #000000)
- Body paragraph: "Reach out in #product-releases on Slack or drop a note to product@example.ai. Flag-controlled features can be enabled on request."

---

## Header and Footer

- **Header**: Right-aligned, 10pt Calibri #666666
  - Format: "[Product Name]  |  Product Releases  |  {DD Mon YYYY}"
- **Footer**: Centred, 10pt Calibri #666666
  - Format: "Page {number}" using a PAGE field code

---

## Complete Feature Card Example (Full)

```
H3: Redesigned LMS Folder Structure
Italic: Folders replace flat categories; every course type lives in one Home view.

┌──────────────────┬─────────────────────────────────────────────┐
│ Why It Matters   │ Admins can now organise courses into nested  │
│ (#E8F9EF bg)     │ folders that mirror their actual content     │
│                  │ structure — with filtering by type or folder.│
├──────────────────┼─────────────────────────────────────────────┤
│ Target Audience  │ Admins                                      │
│ (#E8F9EF bg)     │ (#FFFFFF bg)                                │
├──────────────────┼─────────────────────────────────────────────┤
│ Release Type     │ Flag-controlled                             │
│ (#E8F9EF bg)     │                                             │
├──────────────────┼─────────────────────────────────────────────┤
│ Where to Find It │ LMS > Admin > Home                          │
│ (#E8F9EF bg)     │ (#FFFFFF bg)                                │
├──────────────────┼─────────────────────────────────────────────┤
│ How to Use       │ 1. View all courses in the Home tab.        │
│ (#E8F9EF bg)     │ 2. Filter by type or folder.                │
│                  │ 3. Create a course and assign a folder.      │
│                  │ 4. Switch to Folders tab to nest or move.    │
│                  │ 5. Folders with content can't be deleted.    │
└──────────────────┴─────────────────────────────────────────────┘

[Screenshot / GIF of the folder Home view]
Caption: Redesigned LMS folder structure with Home tab
```

## Complete Feature Card Example (Standard)

```
H3: List View for Folders and Courses
Italic: Toggle between card and list view based on personal preference.

┌──────────────────┬─────────────────────────────────────────────┐
│ Target Audience  │ All                                         │
├──────────────────┼─────────────────────────────────────────────┤
│ Release Type     │ GA                                          │
├──────────────────┼─────────────────────────────────────────────┤
│ Where to Find It │ LMS > Admin > Home or Folders               │
├──────────────────┼─────────────────────────────────────────────┤
│ How to Use       │ 1. Click the list view icon (top right).    │
│                  │ 2. Switch back to card view at any time.     │
└──────────────────┴─────────────────────────────────────────────┘

[Screenshot / GIF of list view toggle]
```

## Section Ordering Rules

1. Cover page elements: always in the order specified above
2. Product areas: consistent order across sprints (LMS → DSR → Content → Integrations → Knowledge Search → Platform)
3. Features within a product area: grouped logically or by impact
4. Detail table rows: always in the fixed order (Why It Matters → Target Audience → Release Type → Where to Find It → How to Use)
5. Screenshot/GIF: always after the detail table, before the next feature
