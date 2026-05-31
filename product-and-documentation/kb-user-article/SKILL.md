---
name: kb-user-article
description: Write a user-facing knowledge base article for a SaaS product help center. Use when drafting, reviewing, or improving user docs, feature guides, how-to articles, workflow walkthroughs, platform-specific guides, or help center content.
---

# Write User KB Article

You are writing a user-facing knowledge base article for a product help center.

## Default Output: .docx

**Always produce the final article as a .docx file** unless the user explicitly requests a different format (e.g., .md, .html). Use the host environment's document-generation tools or a standard library such as `docx-js`.

Name the file: `KB-User-[Feature-Name].docx`

## Step 1: Load the skill

Read `references/KB_USER_GUIDE.md` to understand the full 7-step workflow.

## Step 2: Follow the workflow

The reference file contains the complete workflow — follow it exactly. It will direct you to read specific reference files as needed:

- `references/ARTICLE_STRUCTURE.md` — section ordering, scoping, naming
- `references/BEST_PRACTICES.md` — SaaS documentation frameworks and reusable product-documentation patterns
- `references/TEMPLATES.md` — article templates for different article types
- `references/TONE_AND_FORMATTING.md` — voice rules, callout boxes, image standards
- `references/COMPLIANCE_CHECK.md` — 8-category pass/fail validation
- `references/VERIFICATION_AND_REVIEW.md` — content verification, review checklists
- `references/FULL_FRAMEWORK.md` — complete unabridged framework

## Step 3: Use company knowledge (only when needed)

If you need specific product, market, or feature details while writing, use only the user's supplied product docs, screenshots, source material, or an explicitly available product-knowledge skill. Do not assume product behavior from the examples in this skill.

## Step 4: Run the Editorial Review (MANDATORY)

Before generating the .docx, run an editorial review to ensure all content is customer-facing quality. Rewrite internal or engineering phrasing into clear user-facing language, then cross-check the rewritten content against the original source material. **Do not skip this step.**

## Step 5: Generate outputs (2 separate files)

After the editorial review, generate **two separate files**:

### File 1: Clean article (.docx)
1. Read the host system's docx skill for docx-js patterns (styles, tables, images, lists)
2. Read the heading hierarchy table in `references/ARTICLE_STRUCTURE.md` — it defines exactly which `HeadingLevel` to use for each element
3. Generate the .docx with proper heading styles. **CRITICAL**: Every heading MUST use the `heading:` property with the correct `HeadingLevel` — otherwise Word treats it as plain text. Use `docTitle()` for the article title (`HeadingLevel.TITLE`), `heading(text, HeadingLevel.HEADING_1)` for major sections, `HEADING_2` for sub-sections, `HEADING_3` for details. **Never use `para()` with manual bold/size formatting for headings.**
4. Include a neutral header such as "User Knowledge Base Article" and footer with page numbers
5. **The .docx must contain ONLY the article** — no compliance checklist, no editorial notes, no QA artifacts
6. Save as `KB-User-[Feature-Name].docx`

### File 2: Compliance checklist (.md)
1. Run the compliance check from the workflow (Step 1)
2. Mark each item honestly against the ACTUAL article output — if sections have [MISSING] markers, mark those checks as FAIL
3. Include editorial notes and a verdict (Ready to publish / Needs revision)
4. Save as `KB-User-[Feature-Name]-CHECKLIST.md`

## Utility Scripts

If the user provides input as a PDF or video, use available PDF, OCR, image extraction, or frame extraction tooling to collect source text and screenshots.

## Key Rule

Never write about unverified features. Use `[MISSING: description]` markers instead of inventing details.
