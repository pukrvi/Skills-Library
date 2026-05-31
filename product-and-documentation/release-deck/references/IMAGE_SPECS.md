# Image Specifications

Complete technical specifications for all image assets used in [Product Name] release decks.

## Product Screenshots

### Standard Feature Screenshot

| Specification | Value |
|---------------|-------|
| **Format** | PNG (lossless, recommended), JPG (acceptable) |
| **Typical Resolution** | 2048 × 1158 pixels |
| **Aspect Ratio** | 16:9 (required) |
| **Minimum Width** | 1200 pixels (for legibility) |
| **Maximum File Size** | 500 KB |
| **Color Space** | sRGB |
| **Transparency** | Not required (opaque backgrounds acceptable) |

### Screenshot Usage on Slides

| Context | Width on Slide | Height on Slide | Notes |
|---------|---------------|-----------------|-------|
| Single screenshot (right side) | 8.5" | ~4.78" (maintains 16:9) | Standard feature detail slide |
| Dual images (side-by-side) | 4.0" each | ~2.25" each | Two screenshots at same height |
| Dual images (stacked) | 8.5" | ~2.4" each | Two screenshots vertically aligned |

### Positioning Coordinates

All coordinates are measured from the **slide origin (top-left corner = 0,0)**.

#### Single Screenshot (Standard)
```
X position: 10.5" from left edge
Y position: 0.75" from top edge
Width: 8.5"
Height: Calculated (8.5" ÷ 16 × 9 = 4.78")

EMU Coordinates (if editing XML):
X: 10,085,000 EMU
Y: 685,800 EMU
Width: 8,179,200 EMU
Height: 4,600,200 EMU
```

#### Dual Screenshots (Side-by-Side)
```
Screenshot 1:
X position: 10.5" from left
Y position: 0.75" from top
Width: 4.0"
Height: 2.25" (maintains 16:9)

Screenshot 2:
X position: 14.75" from left (0.25" gap from Screenshot 1)
Y position: 0.75" from top
Width: 4.0"
Height: 2.25"

EMU Coordinates:
Screenshot 1 X: 10,085,000 EMU, Width: 3,847,200 EMU
Screenshot 2 X: 14,194,800 EMU, Width: 3,847,200 EMU
```

#### Dual Screenshots (Stacked Vertical)
```
Screenshot 1:
X position: 10.5" from left
Y position: 0.75" from top
Width: 8.5"
Height: 2.4" (approximate, 16:9 aspect)

Screenshot 2:
X position: 10.5" from left
Y position: 3.5" from top (0.25" gap from Screenshot 1)
Width: 8.5"
Height: 2.4"

EMU Coordinates:
Screenshot 1 Y: 685,800 EMU
Screenshot 2 Y: 3,371,700 EMU
Both Width: 8,179,200 EMU
Both Height: 2,309,700 EMU
```

## Category Icons

Category icons are small badge-style graphics that identify feature categories on overview slides.

### Icon Specifications

| Specification | Value |
|---------------|-------|
| **Format** | PNG with transparency (preferred) or GIF |
| **Canvas Size** | 512 × 512 pixels or 1024 × 1024 pixels |
| **Actual Icon Size** | 90% of canvas (e.g., 460×460px on 512px canvas) |
| **Internal Padding** | 10% on all sides |
| **Display Size on Slide** | 0.85" × 0.85" |
| **Color** | Single color (Navy Core #0A1C38 or Activation Green #4CC77C) |
| **Style** | Flat, minimal, no gradients |
| **Line Weight** | 2–3pt strokes (if using outlines) |

### Icon Positioning on Overview Cards

Icons appear in the **top-left corner** of each overview card:

```
X position: Card left edge + 0.2"
Y position: Card top edge + 0.2"
Width: 0.85"
Height: 0.85"

EMU Coordinates (example for first card at left edge 0.75"):
X: 957,900 EMU (0.75" + 0.2" = 0.95")
Y: 927,100 EMU (0.75" + 0.2" = 0.95")
Width: 821,700 EMU (0.85")
Height: 821,700 EMU (0.85")
```

### Icon Design Guidelines

- **Aspect Ratio**: Perfect square (1:1)
- **Symmetry**: Prefer centered, symmetrical designs
- **Detail Level**: Minimal; avoid complex illustrations
- **Stroke vs. Fill**: Use either solid color fill OR 2-3pt strokes, not both
- **Margins**: 10% clear space around the actual icon
- **Consistency**: All category icons should use the same color (e.g., all Navy Core #0A1C38 or all Activation Green #4CC77C)

### Example Icon Sizes

| Use Case | Canvas | Display Size | Format |
|----------|--------|--------------|--------|
| Overview card badge | 512×512 | 0.85"×0.85" | PNG (transparent) |
| Alternative high-res | 1024×1024 | 0.85"×0.85" | PNG (transparent) |

**File Naming Examples**:
- `icon-performance.png`
- `icon-automation.png`
- `icon-collaboration.png`
- `icon-analytics.png`

## Decorative & Logo Assets

### [Product Name] Logo (Header/Footer)
- **Format**: PNG with transparency or SVG
- **Sizes**: Provide 512×512, 256×256, and 128×128 pixel versions
- **Color**: Standard brand green (Navy Core #0A1C38)
- **Use**: Header bar, footer, cover slide, closing slide

### Closing Slide Decorative Graphic
- **Format**: GIF or PNG with transparency
- **Recommended Size**: 1080 × 1080 pixels
- **Style**: Celebratory, on-brand green palette
- **Placement**: Center of closing slide, behind or beside thank-you message

### Section Divider Background (if needed)
- **Format**: PNG or GIF
- **Use**: Background image for section divider slides (optional; gradient is standard)
- **Recommended Size**: 1920 × 1080 pixels (full slide 20"×11.25" at 96 DPI)
- **Transparency**: Optional; can be semi-transparent overlay on gradient

## Image Replacement in PPTX

To replace an image after adding to the deck:

1. **Identify the image in XML**:
   Open `ppt/slides/slide2.xml` and find:
   ```xml
   <a:blip r:embed="rId5" cstate="print"/>
   ```

2. **Find the media file**:
   Check `ppt/slides/_rels/slide2.xml.rels` for the rId mapping:
   ```xml
   <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/old-screenshot.png"/>
   ```

3. **Replace the media file**:
   ```bash
   rm ppt/media/old-screenshot.png
   cp new-screenshot.png ppt/media/new-screenshot.png
   ```

4. **Update the relationship** (if filename changed):
   ```xml
   <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/new-screenshot.png"/>
   ```

5. **Repackage** the PPTX:
   ```bash
   zip -r output.pptx * -x "*.git*"
   ```

## Aspect Ratio Conversion Reference

When resizing images, maintain aspect ratio using these multipliers:

| Original | New Width | New Height (Calculated) |
|----------|-----------|------------------------|
| 2048×1158 (16:9) | 8.5" | 4.78" |
| 2048×1158 (16:9) | 4.0" | 2.25" |
| 2048×1158 (16:9) | 2.0" | 1.125" |
| 512×512 (1:1) | 0.85" | 0.85" |
| 1080×1080 (1:1) | 2.0" | 2.0" |

## File Size Optimization

To keep PPTX file size manageable, optimize images before adding:

### For PNG Screenshots
```bash
# Using ImageMagick
convert input.png -strip -quality 85 output.png

# Using pngquant (lossy PNG)
pngquant 256 input.png --output output.png
```

### For PNG Icons
```bash
# Icons compress well; aim for <50KB per icon
optipng -o2 input.png -out output.png
```

### Target File Sizes
- **Screenshots**: 300–500 KB per image
- **Icons**: 10–50 KB per image
- **Decorative graphics**: 100–300 KB
- **Total deck (with media)**: <10 MB recommended

## Validation Checklist

Before finalizing images:

- [ ] Format: PNG for all assets (JPG acceptable for screenshots only)
- [ ] Aspect ratio: 16:9 for screenshots, 1:1 for icons
- [ ] Minimum width: Screenshots ≥1200px wide
- [ ] File naming: Kebab-case, no spaces or special characters
- [ ] File size: Optimized, <500KB per screenshot
- [ ] Color space: sRGB (not CMYK)
- [ ] No transparency artifacts: Icons have clean edges if transparent
- [ ] Positioning: Matches EMU coordinates or 16:9 aspect ratio
- [ ] Consistency: All icons use same color; all screenshots use same resolution

---

**Next Step**: Use these specifications when capturing, resizing, and positioning images in your release deck. Refer back to SKILL.md for integration instructions.
