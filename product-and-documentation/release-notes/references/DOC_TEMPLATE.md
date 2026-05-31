# Release Notes docx-js Template

Copy-paste this Node.js template to generate a branded release notes .docx file. Requires: `npm install docx`

## Constants

```javascript
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak, ImageRun
} = require("docx");
const fs = require("fs");

const C = {
  PRIMARY:  "00611F",
  ACCENT:   "118D42",
  BODY:     "000000",
  SUBTITLE: "666666",
  HEADER_FILL: "00611F",
  LABEL_BG: "E8F9EF",
  ALT_ROW:  "F2FBF5",
  BORDER:   "2FA55D",
  GRAY:     "666666",
  LINK:     "0563C1",
  WHITE:    "FFFFFF",
  BLACK:    "000000",
};
const FONT = "Calibri";
const PAGE_W = 12240, PAGE_H = 15840, MARGIN = 1440;
const CONTENT_W = PAGE_W - 2 * MARGIN; // 9360
```

## Helper Functions

```javascript
const border = (c = C.BORDER) => ({ style: BorderStyle.SINGLE, size: 1, color: c });
const borders = (c) => ({ top: border(c), bottom: border(c), left: border(c), right: border(c) });
const cellMargin = { top: 80, bottom: 80, left: 120, right: 120 };

function txt(text, opts = {}) {
  return new TextRun({ text, font: FONT, size: opts.size || 22,
    bold: opts.bold, italics: opts.italic, color: opts.color || C.BLACK, underline: opts.underline });
}

// ── HEADING HIERARCHY (CRITICAL) ────────────────────────────────
// Every heading MUST set the `heading` property so Word sees it as
// a real heading (TOC, navigation pane, outline).  Without it the
// paragraph renders as "Normal" text that just happens to be bold.
//
// Release notes mapping:
//   docTitle()  → HeadingLevel.TITLE     (28pt)  "Product Release Notes"
//   heading(1)  → HeadingLevel.HEADING_1 (26pt)  Product area names
//   heading(2)  → HeadingLevel.HEADING_2 (18pt)  Cover sections, TOC heading
//   heading(3)  → HeadingLevel.HEADING_3 (14pt)  Feature names
//   heading(4)  → HeadingLevel.HEADING_4 (12pt)  Sub-feature details
//
// KB article mapping:
//   docTitle()  → HeadingLevel.TITLE     (28pt)  Article title
//   heading(1)  → HeadingLevel.HEADING_1 (26pt)  Major sections
//   heading(2)  → HeadingLevel.HEADING_2 (18pt)  Sub-sections
//   heading(3)  → HeadingLevel.HEADING_3 (14pt)  Details / steps
//   heading(4)  → HeadingLevel.HEADING_4 (12pt)  Nested details

const HEADING_MAP = {
  1: HeadingLevel.HEADING_1,
  2: HeadingLevel.HEADING_2,
  3: HeadingLevel.HEADING_3,
  4: HeadingLevel.HEADING_4,
};

/** Document title — uses Title heading style. One per document. */
function docTitle(text, opts = {}) {
  return new Paragraph({
    heading: HeadingLevel.TITLE,
    spacing: { before: opts.before || 0, after: opts.after || 40 },
    children: [txt(text, { size: 28, bold: true, color: "000000" })],
  });
}

/** Section heading — ALWAYS applies HeadingLevel for Word outline + TOC. */
function heading(text, level, opts = {}) {
  return new Paragraph({
    heading: HEADING_MAP[level] || HeadingLevel.HEADING_2,
    spacing: { before: opts.before || 240, after: opts.after || 120 },
    children: [txt(text, { size: level === 1 ? 26 : level === 2 ? 18 : level === 4 ? 12 : 14, bold: true, color: "000000" })],
  });
}

function para(children, opts = {}) {
  const ch = typeof children === "string" ? [txt(children, opts)] : children;
  return new Paragraph({ spacing: { after: opts.after || 160, before: opts.before || 0 }, alignment: opts.align, children: ch });
}

function italicDesc(text) {
  return para([txt(text, { italic: true, color: C.BODY })], { after: 120 });
}

function divider() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.ACCENT, space: 6 } },
    spacing: { after: 240 },
    children: [txt("", { size: 2 })],
  });
}

function numberedSteps(steps) {
  return steps.map((s, i) => new Paragraph({ children: [txt(`${i + 1}. ${s}`, { size: 20 })] }));
}
```

## Cover Page Elements

### Top 5 Summary Table

```javascript
function summaryTable(rows) {
  const cols = [2400, 4760, 2200];
  const headerTexts = ["Feature", "Impact", "Primary Audience"];
  const headerRow = new TableRow({
    tableHeader: true,
    children: headerTexts.map((h, i) =>
      new TableCell({
        width: { size: cols[i], type: WidthType.DXA },
        borders: borders(C.BORDER),
        shading: { fill: C.HEADER_FILL, type: ShadingType.CLEAR },
        margins: cellMargin,
        children: [new Paragraph({ children: [txt(h, { bold: true, color: C.WHITE, size: 20 })] })],
      })
    ),
  });
  const dataRows = rows.map((r, ri) =>
    new TableRow({
      children: r.map((cell, ci) =>
        new TableCell({
          width: { size: cols[ci], type: WidthType.DXA },
          borders: borders(C.BORDER),
          shading: ri % 2 === 1 ? { fill: C.ALT_ROW, type: ShadingType.CLEAR } : undefined,
          margins: cellMargin,
          children: [new Paragraph({ children: [txt(cell, { bold: ci === 0, size: 20 })] })],
        })
      ),
    })
  );
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: cols, rows: [headerRow, ...dataRows] });
}
```

### Stat Strip

```javascript
function statStrip(stats) {
  const cellW = Math.floor(CONTENT_W / stats.length);
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: stats.map(() => cellW),
    rows: [new TableRow({
      children: stats.map(s =>
        new TableCell({
          width: { size: cellW, type: WidthType.DXA },
          borders: borders(C.BORDER),
          shading: { fill: C.LABEL_BG, type: ShadingType.CLEAR },
          margins: { top: 120, bottom: 120, left: 120, right: 120 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [txt(s.num, { bold: true, color: C.PRIMARY, size: 36 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [txt(s.label, { color: C.SUBTITLE, size: 18 })] }),
          ],
        })
      ),
    })],
  });
}
```

## Feature Card Elements

### Detail Table (2-column)

```javascript
function infoTable(rows) {
  const LABEL_W = 2200, VAL_W = CONTENT_W - LABEL_W;
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [LABEL_W, VAL_W],
    rows: rows.map((r, i) =>
      new TableRow({
        children: [
          new TableCell({
            width: { size: LABEL_W, type: WidthType.DXA },
            borders: borders(C.BORDER),
            shading: { fill: C.LABEL_BG, type: ShadingType.CLEAR },
            margins: cellMargin,
            children: [new Paragraph({ children: [txt(r[0], { bold: true, color: C.PRIMARY, size: 20 })] })],
          }),
          new TableCell({
            width: { size: VAL_W, type: WidthType.DXA },
            borders: borders(C.BORDER),
            shading: i % 2 === 1 ? { fill: C.ALT_ROW, type: ShadingType.CLEAR } : undefined,
            margins: cellMargin,
            children: Array.isArray(r[1]) ? r[1] : [new Paragraph({ children: [txt(r[1], { size: 20 })] })],
          }),
        ],
      })
    ),
  });
}
```

### Screenshot Placeholder

```javascript
function screenshotPlaceholder(caption) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [new TableRow({
      height: { value: 2400, rule: "atLeast" },
      children: [new TableCell({
        width: { size: CONTENT_W, type: WidthType.DXA },
        borders: { top: { style: BorderStyle.DASHED, size: 1, color: C.BORDER },
          bottom: { style: BorderStyle.DASHED, size: 1, color: C.BORDER },
          left: { style: BorderStyle.DASHED, size: 1, color: C.BORDER },
          right: { style: BorderStyle.DASHED, size: 1, color: C.BORDER } },
        shading: { fill: "F2FBF5", type: ShadingType.CLEAR },
        margins: { top: 200, bottom: 200, left: 200, right: 200 },
        children: [
          new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 },
            children: [txt("[Screenshot / GIF placeholder]", { bold: true, color: C.GRAY, size: 22 })] }),
          new Paragraph({ alignment: AlignmentType.CENTER,
            children: [txt(caption || "Insert a product screenshot or animated GIF here.", { color: C.GRAY, size: 18 })] }),
        ],
      })],
    })],
  });
}
```

### Inserting an Actual Image

```javascript
function insertImage(imagePath, widthInches = 6.5) {
  const data = fs.readFileSync(imagePath);
  const ext = imagePath.split(".").pop().toLowerCase();
  const type = ext === "jpg" ? "jpeg" : ext; // png, jpeg, gif
  // Estimate height from 16:9 aspect ratio
  const heightInches = widthInches * (9 / 16);
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new ImageRun({
      type, data,
      transformation: { width: widthInches * 96, height: heightInches * 96 },
      altText: { title: "Feature screenshot", description: "Product feature screenshot", name: "screenshot" },
    })],
  });
}
```

### Feature Card Composer

```javascript
function featureCard(name, oneliner, rows, imagePath, imageCaption) {
  const elements = [];
  // H3 feature name — MUST use heading() so Word recognises it as Heading 3
  elements.push(heading(name, 3, { after: 40, before: 160 }));
  // Italic one-liner
  elements.push(italicDesc(oneliner));
  // Detail table
  elements.push(infoTable(rows));
  // Image or placeholder
  if (imagePath && fs.existsSync(imagePath)) {
    elements.push(insertImage(imagePath));
  } else {
    elements.push(screenshotPlaceholder(imageCaption || `Insert screenshot for: ${name}`));
  }
  return elements;
}
```

## Complete Working Example

```javascript
const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 0, after: 40 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 18, bold: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 14, bold: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
      { id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 12, bold: true, font: FONT, color: "000000" },
        paragraph: { spacing: { before: 160, after: 60 }, outlineLevel: 3 } },
    ],
  },
  numbering: { config: [
    { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022",
      alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
  ] },
  sections: [{
    properties: {
      page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } },
    },
    headers: { default: new Header({ children: [
      new Paragraph({ alignment: AlignmentType.RIGHT,
        children: [txt("[Product Name]  |  Product Releases  |  13 Apr 2026", { size: 20, color: C.GRAY })] })
    ] }) },
    footers: { default: new Footer({ children: [
      new Paragraph({ alignment: AlignmentType.CENTER, children: [
        txt("Page ", { size: 20, color: C.GRAY }),
        new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 20, color: C.GRAY }),
      ] })
    ] }) },
    children: [
      // ── COVER PAGE ──
      docTitle("Product Release Notes"),  // ← Title heading style, NOT a plain para()
      para([txt("April 2026", { size: 18, color: C.SUBTITLE })], { after: 60 }),
      divider(),
      heading("Executive Summary", 2, { before: 120 }),
      para("This is an LMS-heavy release. The biggest shift is support for folders in LMS with a unified learner experience and full-depth practice reporting."),
      heading("Top 5 to know", 3, { after: 80, before: 0 }),  // ← H3, not plain para()
      summaryTable([
        ["Folder-based LMS", "Flat categories replaced with nestable folders.", "Admins"],
        ["Practice Reporting", "Same analytics depth as courses.", "Users"],
      ]),
      heading("Release at a glance", 3, { after: 80, before: 200 }),  // ← H3, not plain para()
      statStrip([
        { num: "20", label: "Total features" }, { num: "17", label: "GA" },
        { num: "3", label: "Flag-controlled" }, { num: "5", label: "Product areas" },
      ]),

      new Paragraph({ children: [new PageBreak()] }),

      // ── PRODUCT AREA ──
      heading("Learning Management System", 1),
      italicDesc("A full rework of how admins organise content and how learners consume it."),

      // ── FEATURE CARD (Full) ──
      ...featureCard(
        "Redesigned LMS Folder Structure",
        "Folders replace flat categories; every course type lives in one Home view.",
        [
          ["Why It Matters", "Admins can now organise courses into nested folders that mirror their actual content structure."],
          ["Target Audience", "Admins"],
          ["Release Type", "Flag-controlled"],
          ["Where to Find It", "LMS > Admin > Home"],
          ["How to Use", numberedSteps([
            "View all courses in the Home tab.",
            "Filter by type or folder.",
            "Create a course and assign a folder.",
            "Switch to Folders tab to nest or move.",
          ])],
        ],
        null, // imagePath — pass GIF/PNG path here
        "Insert a GIF of the folder Home view."
      ),

      // ── FEATURE CARD (Standard) ──
      ...featureCard(
        "List View for Folders and Courses",
        "Toggle between card and list view based on personal preference.",
        [
          ["Target Audience", "All"],
          ["Release Type", "GA"],
          ["Where to Find It", "LMS > Admin > Home or Folders"],
          ["How to Use", numberedSteps([
            "Click the list view icon in the top right.",
            "Switch back to card view at any time.",
          ])],
        ],
        null,
        "Insert screenshot of list view toggle."
      ),

      new Paragraph({ children: [new PageBreak()] }),

      // ── CLOSING ──
      heading("Questions or feedback?", 3),
      para("Reach out in #product-releases on Slack or drop a note to product@example.ai. Flag-controlled features can be enabled on request."),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("13 April 2026 - Release Notes.docx", buf);
  console.log("Done:", buf.length, "bytes");
});
```

## Formatting Conventions Quick Reference

| Element | Font | Size | Weight | Colour | Word Style |
|---------|------|------|--------|--------|------------|
| Title | Calibri | 28pt | Bold | #000000 | `HeadingLevel.TITLE` — use `docTitle()` |
| Subtitle | Calibri | 18pt | Regular | #666666 | Normal (plain para) |
| Divider | — | — | — | #118D42 | 2pt bottom border |
| H1 (Product area) | Calibri | 26pt | Bold | #000000 | `HeadingLevel.HEADING_1` — use `heading(text, 1)` |
| H2 (Section) | Calibri | 18pt | Bold | #000000 | `HeadingLevel.HEADING_2` — use `heading(text, 2)` |
| H3 (Feature / sub-heading) | Calibri | 14pt | Bold | #000000 | `HeadingLevel.HEADING_3` — use `heading(text, 3)` |
| H4 (Detail) | Calibri | 12pt | Bold | #000000 | `HeadingLevel.HEADING_4` — use `heading(text, 4)` |
| Italic one-liner | Calibri | 12pt | Italic | #000000 | — |
| Body text | Calibri | 12pt | Regular | Black | — |
| Table text | Calibri | 12pt | Regular | Black | — |
| Table label | Calibri | 12pt | Bold | #000000 | Fill #E8F9EF |
| Stat number | Calibri | 26pt | Bold | #000000 | Centred, fill #E8F9EF |
| Stat label | Calibri | 14pt | Regular | #666666 | Centred |
| Header/footer | Calibri | 10pt | Regular | #666666 | — |
| Table borders | — | 1pt | — | #2FA55D | All sides |
| Cell padding | — | — | — | — | 80 top/bottom, 120 left/right |
