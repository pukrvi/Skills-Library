---
name: doc-writing-guide
description: Transform parsed feature data into a professionally formatted release notes .docx document with branded cover page, feature cards, detail tables, and mandatory screenshots/GIFs.
---

# Doc Writing Guide Sub-Skill

## Purpose

Transform structured feature data into a polished, branded .docx release notes document. The output is a Word file with a cover page, table of contents, feature detail cards rendered as two-column tables, and a closing section that can be adapted to the user's visual identity.

## Output Format

**Always produce a .docx file** using the host environment's document-generation tools or a standard library such as `docx` (docx-js). Never output markdown unless the user explicitly requests it.

## Brand Constants

| Token | Value | Where Used |
|-------|-------|------------|
| PRIMARY | #00611F | All headings, table labels, stat numbers |
| ACCENT | #118D42 | Title divider line |
| BODY | #000000 | Italic one-liner descriptions |
| SUBTITLE | #666666 | Subtitle text, stat strip labels |
| LABEL_BG | #E8F9EF | Detail table label column, stat strip cells |
| ALT_ROW | #F2FBF5 | Alternating value-column rows |
| HEADER_FILL | #00611F | Summary table header row |
| BORDER | #2FA55D | All table borders |
| GRAY | #666666 | Header, footer, placeholder text |
| Font | Calibri | Everything. No other fonts. |

## Step-by-Step Workflow

### 1. Initialise Document

Set up the docx-js Document with styles, numbering, and page properties:
- Page size: US Letter (12240 × 15840 DXA)
- Margins: 1 inch all sides (1440 DXA)
- Content width: 9360 DXA
- **Heading styles** (CRITICAL — every heading MUST use `heading:` property with the correct `HeadingLevel` so Word recognises it in the outline, navigation pane, and TOC. A bold paragraph without `heading:` is just normal text.):
  - **Title**: 28pt bold #000000 — `HeadingLevel.TITLE` — document title only
  - **H1**: 26pt bold #000000 — `HeadingLevel.HEADING_1` — product area names
  - **H2**: 18pt bold #000000 — `HeadingLevel.HEADING_2` — cover page sections, TOC heading
  - **H3**: 14pt bold #000000 — `HeadingLevel.HEADING_3` — feature names, cover sub-headings
  - **H4**: 12pt bold #000000 — `HeadingLevel.HEADING_4` — sub-feature details
- Header: right-aligned, 10pt #666666 — "[Product Name] | Product Releases | {DD Mon YYYY}"
- Footer: centred, 10pt #666666 — "Page {number}" with PAGE field code

### 2. Build Cover Page (Page 1)

In this exact order:
1. **Title**: "Product Release Notes" — **Title heading style** (`HeadingLevel.TITLE`), 28pt bold #000000, spacing after=40. Use `docTitle()` from DOC_TEMPLATE.md. **Do NOT use `para()` — that creates normal text without heading semantics.**
2. **Subtitle**: "{Month YYYY}" — 18pt #666666, spacing after=60 (plain paragraph, not a heading)
3. **Divider**: paragraph with bottom border (2pt #118D42, space=6), spacing after=240
4. **Executive Summary heading**: **H2** (`HeadingLevel.HEADING_2`) — 18pt bold #000000
5. **Summary paragraph**: 12pt body, 2–3 sentences (see WRITING_RULES.md for guidance)
6. **"Top 5 to know" sub-heading**: **H3** (`HeadingLevel.HEADING_3`) — 14pt bold #000000
7. **Top 5 table**: 3 columns (Feature 2400 DXA | Impact 4760 DXA | Primary Audience 2200 DXA). Header row: #00611F fill, white bold 12pt text. Body rows: alternating white / #F2FBF5. Borders: #2FA55D. All text 12pt. Pick the 5 highest-impact features.
8. **"Release at a glance" sub-heading**: **H3** (`HeadingLevel.HEADING_3`) — 14pt bold #000000
9. **Stat strip**: 4-cell single-row table (each cell 2340 DXA). Fill #E8F9EF. Number: 26pt bold #000000 centred. Label: 14pt #666666 centred. Always four cells: Total features, GA, Flag-controlled, Product areas.

### 3. Add Table of Contents (Page 2)

- Insert a page break after the cover page
- Add a TOC heading and note that the TOC should be generated from H1 (product areas) and H3 (features)
- Group features under their product area headings
- Use hyperlinked entries

### 4. Write Product Area Sections (Pages 3–N)

For each product area that has features:
1. **H1** (`HeadingLevel.HEADING_1`): Product area name — 26pt bold #000000
2. **Italic intro**: one sentence summarising the area — 12pt italic #000000, spacing after=120

### 5. Write Feature Cards

For each feature under a product area:

1. **H3** (`HeadingLevel.HEADING_3`): Feature name — 14pt bold #000000
2. **Italic one-liner**: single sentence summarising the user-visible change — 12pt italic #000000, spacing after=120
3. **Detail table**: 2-column table (9360 DXA total)
   - Label column: 2200 DXA, bold 12pt #000000, fill #E8F9EF
   - Value column: 7160 DXA, 12pt regular, alternating rows #F2FBF5
   - All borders: 1pt #2FA55D
   - Cell padding: 80 DXA top/bottom, 120 DXA left/right

**Full Card rows** (high-impact features):
| Row | Content Rules |
|-----|--------------|
| Why It Matters | One sentence in **present tense, positive language**: what users can now do and the impact. Never past-tense pain ("had no way to…", "couldn't…", "was broken…"). |
| Target Audience | Exactly one of: **Admins**, **Users**, or **All** |
| Release Type | One of: GA, Beta, Early Access, Flag-controlled |
| Where to Find It | UI > Path > Notation (e.g., "LMS > Admin > Home") |
| How to Use | Numbered steps with imperative verbs. Describe what user sees after each action. |

**Standard Card rows** (smaller features): Omit "Why It Matters". All other rows remain.

4. **Screenshot/GIF**: MANDATORY for every feature. Place immediately after the detail table. Full content width (6.5 inches). Add italic caption below (10pt #666666). If no image is available, insert a dashed placeholder box (see DOC_TEMPLATE.md).

### 6. Add Closing Section (Final Page)

- H3: "Questions or feedback?"
- Body: "Reach out in #product-releases on Slack or drop a note to product@example.ai. Flag-controlled features can be enabled on request."

### 7. Run Editorial Review (MANDATORY — before generating .docx)

Before rendering the document, rewrite all feature titles, descriptions, and labels into polished customer-facing language. Cross-check the rewritten content against the original source inputs to ensure accuracy. **The output of this step feeds into .docx generation — do not generate the Word document until the editorial pass is complete.**

### 8. Save and Validate

- Save as `{DD} {Month} {YYYY} - Release Notes.docx`
- Run the format-template-test checklist (see DOC_CHECKLIST.md)
- Verify all features are present, all images are placed, and all tables are properly formatted

## Reference Files

Consult these in order:

1. **DOC_STRUCTURE.md** — exact page flow, element order, and DXA dimensions
2. **DOC_TEMPLATE.md** — copy-paste docx-js code template with helper functions
3. **WRITING_RULES.md** — tone, sentence rules, and field-specific writing guidance
4. **DOC_CHECKLIST.md** — final validation checklist

## Quality Checklist

- [ ] Cover page title uses `HeadingLevel.TITLE` (not a plain para — must be a real heading style)
- [ ] Cover page has subtitle, divider, executive summary (H2), Top 5 table, stat strip
- [ ] TOC is present and grouped by product area
- [ ] Every product area uses `HeadingLevel.HEADING_1` and has an italic intro line
- [ ] Every feature uses `HeadingLevel.HEADING_3`, has italic one-liner, and detail table with all required rows
- [ ] Every feature has a screenshot, GIF, or labelled placeholder
- [ ] Detail tables use correct widths (2200 + 7160 = 9360 DXA)
- [ ] Label column is #E8F9EF, value rows alternate white / #F2FBF5
- [ ] All text is Calibri. No rogue fonts.
- [ ] Header shows "[Product Name] | Product Releases | {DD Mon YYYY}"
- [ ] Footer shows "Page {number}"
- [ ] Stat strip numbers match actual feature counts
- [ ] Sentences are under 20 words, active voice, benefit-first
- [ ] "Questions or feedback?" closing section is present
