---
name: release-notes
description: Create a release notes document from release inputs
---

Create a customer-facing release notes document from the provided release inputs.

## Instructions

1. Read `references/WRITING_GUIDE.md`, `references/DOC_STRUCTURE.md`, and `references/WRITING_RULES.md` for the document structure, formatting, and writing rules.

2. Parse the raw inputs into a structured feature list. Accept Slack messages, issue tracker notes, transcripts, changelog drafts, product briefs, or pasted release notes.

3. Apply the user's brand voice if they provide one. If they do not, use clear, customer-facing SaaS release language: outcome first, low jargon, no internal implementation detail.

4. Execute the pipeline:
   - Parse the user's input (Slack messages, transcript, or ClickUp data) into structured features
   - Group features by product category
   - Write the release notes document following the exact heading hierarchy
   - Apply brand voice and tone throughout

5. **Run the Editorial Review (MANDATORY)** — Before generating the .docx, run these passes on all feature titles, descriptions, labels, and CTAs:
   - Customer value: rewrite internal wording into user-visible outcomes.
   - Specificity: replace vague phrases with concrete capability and benefit.
   - Accuracy: cross-check every claim against the provided source material.
   - Brevity: remove filler, duplicated setup, and implementation trivia.
   - Risk: mark unverified claims as `[MISSING: description]` rather than inventing details.

6. Generate **two separate files**:

   **File 1: Clean release doc (.docx)**
   - Save as `{DD} {Month} {YYYY} - Release Notes.docx`
   - The .docx must contain ONLY the release notes — no QA checklist, no editorial notes
   - This is the customer-ready deliverable

   **File 2: QA checklist (.md)**
   - Run the format-template-test validation by reading `references/DOC_CHECKLIST.md` and checking against the requirements
   - Mark each item honestly against the ACTUAL document output
   - Save as `{DD} {Month} {YYYY} - Release Notes - QA.md`

If the user provides input with the request, treat it as the raw release input to process. If no input is provided, ask the user to paste release notes or provide a file.
