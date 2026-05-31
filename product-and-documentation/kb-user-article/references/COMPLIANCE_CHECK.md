# User Article Compliance Checklist

**Purpose:** Final mandatory validation before publishing user-facing KB articles to your help center. This checklist ensures articles meet structural, content, and quality standards.

**How to use:** Review each category. Check items as Pass/Fail. At the end, fill the summary table. If any category has Fails, revise and re-check before publishing.

---

## A. Structure Compliance

- [ ] **Title format correct** — "How to [action] using [Feature Name] in [Product Name]" or similar task-based format (not "Guide to X" or "Understanding X").
- [ ] **Opening line present and correct** — First sentence is: "This article explains how to [action] using [Feature Name] in [Product Name]." (May be slightly customized but follows this structure.)
- [ ] **Overview section present** — Brief 1-2 sentence summary of what users will accomplish, not how the feature works.
- [ ] **No overview sub-headings** — Overview is prose, not a bulleted list of points.
- [ ] **Prerequisites section present** — Lists what users need to know or have set up before starting. Links to prerequisite articles where applicable.
- [ ] **Descriptive headings** — Headings describe outcomes or tasks, not UI elements. Example: "Find the right content to share" not "Using the search sidebar."
- [ ] **Numbered steps (main workflow)** — Primary workflow uses numbered steps (1, 2, 3…). Steps are atomic and actionable.
- [ ] **Content coverage section labeled** — AI features (AI assistant, recommendations, auto-generated content) are labeled and explained separately if they're part of workflow.
- [ ] **Multi-platform organization clear** — If feature works on Outlook + Gmail + web, steps note platform differences or separate sections. No confusion about which entry point to use.
- [ ] **Correct template used** — Article uses kb-user-docs template structure (not kb-admin-docs, not blog template).
- [ ] **FAQs only if genuine** — FAQs section only present if questions genuinely appear in support tickets or customer feedback (not speculative).
- [ ] **Summary/Recap present for long articles** — If article has 4+ sub-sections, multi-platform coverage, or 800+ words of instructions → Summary section present, recapping what the user can now do. If short article → Summary correctly omitted.

---

## B. Content Accuracy

- [ ] **No invented information** — All product details, workflows, and features match [Product Name] capabilities. Any unknowns are marked [MISSING].
- [ ] **No unverified capabilities** — Claims like "automatically syncs to Salesforce" are only made if verified. Uncertain claims use [NEEDS VERIFICATION].
- [ ] **No accuracy percentages** — No claims like "99% of reps find this helpful" or "50% faster to prep." (Speculation without data.)
- [ ] **Coming Soon features handled correctly** — Features in development are clearly marked "Coming soon" with timeline if available. Article is still publishable without them.
- [ ] **Feature-specific details verified** — Max file sizes, character limits, integration support, API limits, etc. are accurate or marked [MISSING].
- [ ] **All [MISSING] markers descriptive** — Each [MISSING] explains what info is needed, not just "[MISSING info]." Example: "[MISSING: max file upload size for RFP documents]."

---

## C. Tone and Language

- [ ] **No marketing language** — Article avoids: revolutionary, seamless, unlock, discover, supercharge, leverage, game-changer, cutting-edge, best-in-class, industry-leading.
- [ ] **No sales angle** — Doesn't pitch [Product Name] or compare to competitors. Focuses on task completion.
- [ ] **"Users" not "reps"** — Language is general (users, you, your team) unless context demands specificity (e.g., sales reps are the audience).
- [ ] **"Interfaces" not "surfaces"** — Uses standard UI terms: "sidebar," "panel," "dialog," "button," "field" not "surface" or "plane."
- [ ] **No excessive "may" or "might"** — Avoids hedging ("You may be able to…"). Uses clear statements ("To do X, follow these steps.").
- [ ] **Direct phrasing** — Active voice. "Click Share" not "The Share button can be clicked by you."
- [ ] **Plain opening line** — First sentence doesn't use marketing language or assume advanced knowledge.
- [ ] **Instructive and approachable tone** — Helpful, not patronizing. Acknowledges that users are new to features without over-explaining.

---

## D. Images and Visuals

- [ ] **Screenshot placeholders present and specific** — If screenshots are needed, placeholders use exact labels: "[Screenshot: DSR Create modal with 'Title' field and 'Template' dropdown]" not "[Insert screenshot here]."
- [ ] **GIF/video length appropriate** — Videos/GIFs under 30 seconds for quick demos. Over 30 seconds only if necessary (e.g., complex workflow walkthrough).
- [ ] **No marketing graphics** — Screenshots show clean, unbranded UI. No colored arrows, badges, or "success" graphics added.
- [ ] **Standard entry point used** — Screenshots show the typical user entry point (e.g., Calendar for meeting prep, not a deep admin screen).

---

## E. Scope and Organization

- [ ] **One feature or workflow per article** — Article doesn't cover multiple unrelated features. Example: "Meeting Prep" is one article; "Create DSR" is another.
- [ ] **User workflows separated from admin setup** — If admin configuration is needed, article links to "[Admin: Set Up X Feature]" and doesn't include setup steps.
- [ ] **Admin setup referenced, not included** — Article assumes setup is done. Prerequisites link to admin docs.
- [ ] **Cross-references present and accurate** — Articles link to prerequisites, next-step articles, and related features using [link format].

---

## F. Smart Gap Detection

- [ ] **Gap detection was run** — Before finalizing article, gap detection analysis was performed (either manual review or tool output).
- [ ] **Gaps flagged with ⚠️ format** — Identified gaps are marked clearly: "⚠️ Gap: Article doesn't explain what multi-platform support means for this feature."
- [ ] **Gaps not auto-filled** — Instead of guessing details, gaps are left unfilled and marked [MISSING]. Article remains publishable despite gaps.

---

## G. Best Practice Recommendations

- [ ] **At least one 💡 Recommendation present** — Article includes at least one actionable suggestion for improvement (from BEST_PRACTICES.md framework).
- [ ] **Recommendations are actionable** — Recommendations state exactly what to add/change, not vague ideas. Example: "Add a 'Troubleshooting' section covering file size limits and permissions errors" not "Consider adding more help."
- [ ] **No speculative recommendations** — Recommendations aren't based on guessing user needs; they're grounded in documented gaps or best practices.

---

## H. Missing Info Handling

- [ ] **All unknowns marked [MISSING]** — Any detail about which info is uncertain, unverified, or unavailable is marked.
- [ ] **Markers are specific** — Each [MISSING] explains what's unknown. Example: "[MISSING: whether DSR analytics track anonymous buyers]" not "[MISSING: analytics info]."
- [ ] **Article is structurally complete despite gaps** — Users can still follow the main workflow and complete their task even with [MISSING] markers present.

---

## CRITICAL: Honest Assessment Rules

**Mark checks based on the ACTUAL article output — not on what you intended or attempted.**

These rules override any temptation to mark everything as "Pass":

1. **[MISSING] markers in a section = that section's check is ❌ Fail.** A section with placeholder content is not complete.
2. **[NEEDS VERIFICATION] markers = content accuracy check is ❌ Fail.** Unverified content is not accurate.
3. **⚠️ May be missing flags = gap detection check is ❌ Fail.** Identified gaps are real gaps until resolved.
4. **Screenshot/GIF placeholders (not real images) = visuals check is ❌ Fail.** Placeholders are not visuals.
5. **Improvement callouts (💡) don't count as completion.** They indicate areas that still need work.

**An honest checklist with 8 FAILs is infinitely more useful than a dishonest one with all PASSes.** The PM uses this checklist to know what's left to do.

---

## Output Format

Save as a **separate .md file** (NOT inside the article .docx). Filename: `KB-User-[Feature-Name]-CHECKLIST.md`

### Compliance Summary Table

| Category | Status | Notes |
|----------|--------|-------|
| A. Structure Compliance | Pass / Fail | [List any failed items] |
| B. Content Accuracy | Pass / Fail | [List any failed items] |
| C. Tone and Language | Pass / Fail | [List any failed items] |
| D. Images and Visuals | Pass / Fail | [List any failed items] |
| E. Scope and Organization | Pass / Fail | [List any failed items] |
| F. Smart Gap Detection | Pass / Fail | [List any failed items] |
| G. Best Practice Recommendations | Pass / Fail | [List any failed items] |
| H. Missing Info Handling | Pass / Fail | [List any failed items] |

**Overall Status:** 🟢 Ready to Publish / 🔴 Needs Revision

### Items Requiring Attention

List every failed item with what specifically needs to happen before it can pass.

### Verdict

Clear statement: "Ready to publish" or "Needs revision — X items require attention"

---

## Example Compliance Review (showing realistic honest assessment)

**Article:** "How to Create a Digital Sales Room Using Templates in [Product Name]"

| Category | Status | Notes |
|----------|--------|-------|
| A. Structure Compliance | ✅ Pass | Title correct, opening line present, all headings task-based, numbered steps clear. |
| B. Content Accuracy | ❌ Fail | 1 [MISSING] marker: "whether DSR templates include pre-built content". 0 [NEEDS VERIFICATION]. |
| C. Tone and Language | ✅ Pass | No marketing language, direct phrasing, approachable tone. |
| D. Images and Visuals | ❌ Fail | 3 screenshot placeholders used — no actual images available yet. |
| E. Scope and Organization | ✅ Pass | Single feature focus. Links to "Admin: Set Up DSR Templates" for setup details. |
| F. Smart Gap Detection | ❌ Fail | 3 gaps flagged (template customization limits, analytics delay, mobile limitations) — not yet resolved. |
| G. Best Practice Recommendations | ✅ Pass | Two recommendations present and actionable. |
| H. Missing Info Handling | ✅ Pass | [MISSING] markers are specific and descriptive. Article is structurally complete. |

**Overall Status:** 🔴 Needs Revision

**Items Requiring Attention:**
1. **B. Content Accuracy** — PM needs to confirm whether DSR templates include pre-built content
2. **D. Images and Visuals** — 3 screenshots needed: Create modal, Template selection, Share dialog
3. **F. Smart Gap Detection** — 3 gaps flagged: template customization limits, analytics delay, mobile limitations need confirmation

**Verdict:** Needs revision — 3 categories require attention before this article is publishable.

---

**Last updated:** 2026-04-21  
**Applies to:** User-facing KB articles (your help center)  
**Related:** BEST_PRACTICES.md, kb-user-docs skill template
