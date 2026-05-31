---
name: screenshot-media-guide
description: Guide for capturing, handling, and embedding product screenshots and GIFs in the release notes .docx document. Every feature card MUST have a visual — no exceptions.
---

# Screenshot & Media Guide

## Purpose

This sub-skill provides end-to-end guidance for managing product screenshots, GIFs, and media assets in the release notes .docx document. It covers when to use images, how to capture them, technical specifications, and how to embed them using docx-js.

## Golden Rule

**Every feature card in the release notes document MUST include a screenshot or GIF. No exceptions.** If a real screenshot is not yet available, insert the dashed placeholder box so the gap is visible and trackable.

## When to Use GIFs vs Screenshots

| Scenario | Format | Why |
|----------|--------|-----|
| Multi-step interaction | GIF | Shows the full workflow in motion |
| Before/after comparison | GIF | Reveals the change clearly |
| Static view or dashboard | PNG | Single frame captures the value |
| API or backend feature | PNG diagram | A simple architecture visual |
| Performance improvement | PNG chart/metric | Show the number, not the code |

**Never skip a visual.** Even infrastructure changes deserve an icon graphic or a metric screenshot.

## Screenshot Capture Guidelines

### Resolution & Format
- **Preferred format**: GIF for multi-step features, PNG for static views
- **Target resolution**: 2048 x 1158 pixels (16:9 aspect ratio)
- **Minimum width**: 1200 pixels (for legibility in the .docx)
- **Color space**: sRGB
- **Max file size**: GIF < 2MB, PNG < 500KB

### Capture Best Practices
- Clean environment: remove browser tabs, notifications, personal data
- Consistent browser: same browser and 100% zoom for all captures
- Representative data: realistic sample data, no customer PII
- Feature in context: show surrounding UI, don't crop too tight
- Light theme: capture in light mode for brand consistency
- Timing: feature fully loaded, no spinners or error states

### Capture Tools
- **Screen recording → GIF**: Use ffmpeg to extract a GIF from a screen recording or KT video
- **Static screenshots**: macOS Cmd+Shift+4, Windows Snip & Sketch, or Snagit
- **From video**: Use `video_screenshots_25s.py` for bulk frame extraction, then `screenshots_to_gif.py` to compose a GIF

## Extracting Media from Product KT Videos

The plugin includes two scripts for extracting visuals from product KT recordings:

### Script 1: video_screenshots_25s.py
Extracts still frames from a video at 25-second intervals.

```bash
python scripts/video_screenshots_25s.py input.mp4
python scripts/video_screenshots_25s.py input.mp4 --output-dir ./frames
python scripts/video_screenshots_25s.py input.mp4 --interval 15  # override interval
```

Output: numbered PNG files in `./screenshots_25s/` (or custom dir).

### Script 2: screenshots_to_gif.py
Composes a set of screenshot PNGs into an animated GIF.

```bash
python scripts/screenshots_to_gif.py ./frames --output feature.gif
python scripts/screenshots_to_gif.py ./frames --output feature.gif --duration 800 --resize 520
python scripts/screenshots_to_gif.py ./frames --output feature.gif --start 5 --end 12
```

Output: a single animated GIF optimised for embedding in the .docx.

### Combined Workflow (Video → GIF)

```bash
# 1. Extract frames from video
python scripts/video_screenshots_25s.py Product-KT.mp4 --output-dir ./frames

# 2. Pick a range of frames for a specific feature
python scripts/screenshots_to_gif.py ./frames --output lms-folders.gif --start 10 --end 18 --duration 600

# 3. The doc-writing-guide will embed this GIF into the feature card
```

### Direct ffmpeg GIF extraction (for precise timestamp ranges)

When you know the exact start time and duration for a feature demo:

```bash
ffmpeg -ss 120 -t 8 -i Product-KT.mp4 \
  -vf "fps=8,scale=520:-2:flags=lanczos" \
  -loop 0 feature-name.gif
```

Parameters:
- `-ss`: start time in seconds
- `-t`: duration in seconds (6–10s recommended)
- `fps=8`: frame rate (8 is good for file size)
- `scale=520:-2`: width 520px, auto height (even number)
- `-loop 0`: loop forever

## Embedding Images in the .docx

### Using docx-js ImageRun

```javascript
const fs = require("fs");
const { Paragraph, ImageRun, AlignmentType } = require("docx");

function insertImage(imagePath, widthInches = 6.5) {
  const data = fs.readFileSync(imagePath);
  const ext = imagePath.split(".").pop().toLowerCase();
  const type = ext === "jpg" ? "jpeg" : ext; // png, jpeg, gif
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

### Placeholder Box (when image is not yet available)

```javascript
function screenshotPlaceholder(caption) {
  // Dashed-border table cell, green tint fill #E8F9EF
  // Text: "[Screenshot / GIF placeholder]" in bold #666666
  // Caption below in 9pt #666666
  // See DOC_TEMPLATE.md for full implementation
}
```

### Sizing Rules
- **Width**: Always full content width — 6.5 inches (9360 DXA)
- **Aspect ratio**: Maintain 16:9; never stretch
- **Caption**: Italic 9pt #666666, placed below the image
- **Position**: Immediately after the feature detail table, before the next feature card

## File Naming Convention

| Asset Type | Pattern | Example |
|------------|---------|---------|
| Feature GIF | `feature-name.gif` | `lms-folder-structure.gif` |
| Feature PNG | `feature-name.png` | `practice-reporting.png` |
| Diagram | `diagram-feature-name.png` | `diagram-fathom-flow.png` |
| Icon | `icon-category.png` | `icon-integrations.png` |

**Rules**: lowercase, kebab-case, no spaces or underscores, include extension, under 40 characters.

## Media Inventory Checklist

Before finalising the release notes document, verify:

- [ ] Every feature card has a screenshot, GIF, or labelled placeholder
- [ ] All GIFs are under 2MB and loop smoothly
- [ ] All PNGs are under 500KB
- [ ] Images are full content width (6.5 inches)
- [ ] Captions are present and descriptive
- [ ] No images contain customer PII or test garbage
- [ ] File names follow kebab-case convention

## Reference

- **DOC_TEMPLATE.md**: `insertImage()` and `screenshotPlaceholder()` helper functions
- **video_screenshots_25s.py**: Bulk frame extraction script
- **screenshots_to_gif.py**: Screenshot-to-GIF composition script
- **DOC_TEMPLATE.md**: Placeholder-box and image-insertion patterns
