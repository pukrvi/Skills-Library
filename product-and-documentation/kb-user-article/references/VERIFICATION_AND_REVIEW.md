# [Product Name] Knowledge Base — User Documentation
## Quick Reference: Verification, Review, and Common Mistakes

**For complete details, see `references/FULL_FRAMEWORK.md`**

---

## 6. Content Verification Requirements

### 6.1 The Golden Rule

Do not write about any feature, workflow, capability, or behavior that has not been tested and verified as working in [Product Name].

### 6.2 Core Verification Checklist (All User Articles)

Before publishing any user article, verify each of these points:
- [ ] Every step has been tested end-to-end in [Product Name]
- [ ] Every screenshot is from the actual product with real (or realistic) data
- [ ] All UI paths described (button names, menu locations, navigation steps) match the current product
- [ ] All feature descriptions match the actual user experience
- [ ] No accuracy percentages or unverified performance claims
- [ ] No capabilities listed that do not currently work
- [ ] "Coming Soon" features are noted briefly without detailed explanation

### 6.3 Feature-Specific Verification Add-Ons

In addition to the core checklist, apply these checks based on the feature type:

**AI Features (AI assistant, Agents, Roleplay):**
- [ ] Content indexing behavior verified — which content types can be accessed, which cannot
- [ ] Source attribution tested — how sources are displayed and cited
- [ ] Limitations and constraints documented (e.g., "AI assistant can access content shared with you")
- [ ] Output quality validated with realistic use cases
- [ ] Confidence or mode differences tested (if applicable)
- [ ] Example prompts tested and verified to produce expected results

**Meeting Prep:**
- [ ] Entry points verified (calendar event, Chrome extension, dashboard)
- [ ] Calendar integration confirmed (Google Calendar, Outlook, etc. as applicable)
- [ ] Content indexing tested (what content is accessible, what is not)
- [ ] Platform differences tested (web vs. mobile vs. Chrome extension)
- [ ] Workflow steps tested from start to finish
- [ ] Screenshots show the standard entry point (not a non-standard workflow)

**Content Features (Templates, Playbooks, Case Studies, Digital Sales Rooms):**
- [ ] Sharing options tested (email, link, DSR, etc.)
- [ ] Permission models verified (who can view, edit, share)
- [ ] Content types and formats supported documented
- [ ] Mobile experience tested (if applicable)
- [ ] Workflow steps verified with realistic content

**Communication Tools (Slack, Email integrations):**
- [ ] Platform integration verified and working
- [ ] Authentication/setup tested end-to-end
- [ ] Messages and notifications tested
- [ ] Platform-specific behavior documented
- [ ] Limitations noted (e.g., "Slack integration does not support video attachments")

---

## 8. Review Checklist

Before submitting any user article for review, verify each of these points:

**Structure:**
- [ ] Article begins with a single-sentence opening line for users
- [ ] Opening line follows format: "This article explains how to [action] using [Feature Name] in [Product Name]."
- [ ] Overview section is present and concise (2–3 paragraphs max)
- [ ] Overview does not contain sub-headings
- [ ] Prerequisites section is present (or omitted if no prerequisites)
- [ ] Main body uses descriptive section headings (not generic labels)
- [ ] Steps are numbered sequentially when documenting a process
- [ ] Screenshots placed after each step (or group of related steps)
- [ ] Content Coverage section present for AI features
- [ ] Multi-Platform section (if applicable) grouped at the end
- [ ] FAQs section included only if there are genuine common questions

**Content Accuracy:**
- [ ] Every step has been tested end-to-end
- [ ] All UI paths match the current product
- [ ] No accuracy percentages or unverified performance claims
- [ ] No capabilities listed that do not currently work
- [ ] "Coming Soon" features are noted briefly without detailed explanation
- [ ] Feature-specific verification add-ons have been completed (Section 6.3)

**Tone and Language:**
- [ ] Tone is clear, instructive, professional but approachable
- [ ] No sales or marketing angle — article focuses on how to use the feature, not on selling it
- [ ] Uses "users" not "reps"
- [ ] Uses "interfaces" not "surfaces"
- [ ] Does not overuse "may" — uses direct, confident phrasing
- [ ] Opening line is simple and free of complex terminology
- [ ] No promotional language ("revolutionary", "seamless", "unlock", "discover", "supercharge")

**Images and Visuals:**
- [ ] All images are product screenshots, product GIFs, or Trainn video embeds
- [ ] No YouTube video embeds, external animations, or marketing graphics
- [ ] Screenshots have clean, neutral backgrounds (no colorful wallpapers)
- [ ] Images are cropped to show the relevant UI area
- [ ] Screenshots placed immediately after the step they illustrate
- [ ] GIFs are under 30 seconds; longer workflows use Trainn video embeds
- [ ] Screenshots show standard entry points (calendar for Meeting Prep, not Chrome extension sidebar)

**Scope and Organization:**
- [ ] Article covers one user feature or workflow only
- [ ] User flows and admin setup are in separate articles (with cross-references)
- [ ] Related articles are cross-referenced with links
- [ ] No admin setup steps are included in the user article

---

## 9. Common Mistakes to Avoid

These are the most frequent issues found in rejected user articles:

1. **Writing from a sales or marketing angle.** User articles must never be written to sell the feature. The tone must always be instructional and focused on how the feature works. Remove words like "revolutionary", "seamless", "unlock", "discover", and "leverage". If the source material uses marketing language, rewrite it as a straightforward user-friendly explanation.

2. **Using colorful or decorative image backgrounds.** Every screenshot must show only [Product Name] UI with a clean background. Remove desktop wallpaper, colorful overlays, or branded backgrounds. Images should be cropped tightly to the relevant UI.

3. **Unverified feature claims.** If you have not tested the feature end-to-end, do not document it. This especially applies to content indexing behavior, platform differences, and workflows involving external systems.

4. **Mixing user and admin flows.** If a feature has distinct user and admin perspectives, write two separate articles. Do not include admin setup steps in a user article.

5. **Overly detailed Overview sections.** The Overview is a brief orientation — 2–3 paragraphs. Detailed step-by-step content belongs in the main body, not in the overview.

6. **Merging unrelated features or workflows.** Meeting Prep and AI assistant are separate features and should have separate articles. Do not combine them.

7. **Using "may" when you mean "can" or "will".** Be direct. "Users can choose an agent" is better than "Users may choose an agent."

8. **Including YouTube videos or external animated GIFs.** Only product screenshots, product GIFs, and Trainn video embeds are allowed.

9. **Marketing-style graphics or colorful infographics.** No capability matrices with gradients, colorful icons, or branded banner images. Stick to product screenshots and diagrams.

10. **Mentioning accuracy percentages or unverified claims.** Never say "95% accuracy" or "This saves you 2 hours per week" unless tested and verified. Do not make performance or capability claims without verification.

11. **Showing from the wrong entry point.** Always show features from their standard entry point. For Meeting Prep, show it from a calendar event (the primary entry point), not from the Chrome extension sidebar. For Slack features, show from Slack, not the web dashboard.

12. **Missing "What Happens Next" section.** After a workflow, explain what the user should expect (confirmation message, processing time, notification, next step). Do not leave them guessing.

13. **Including too many FAQs.** Only include questions that users genuinely ask. Remove generic or hypothetical questions.

14. **Combining features without splitting.** "RFP Automation" and "Content Management" are separate features. Do not merge them into one article.

15. **Missing platform-specific details.** If a feature works on mobile, Chrome extension, and web, test and document the differences. Do not assume they work the same everywhere.

---

## 11. Smart Gap Detection

When writing or reviewing a user article, use these checklists to identify potentially missing sections. Add a recommendation note rather than filling in gaps with unverified information.

**Recommendation format:**
```
⚠️ May be missing: [Description of the potentially missing section]. Consider adding a section on [topic] if it applies to this feature.
```

### 11.1 AI Features Gap Checklist

When writing articles about AI features (AI assistant, agents), check for these commonly missed sections:
- [ ] Content indexing behavior — What types of content can the feature access? What can't it access?
- [ ] Source attribution — How are sources displayed and cited?
- [ ] Limitations and constraints — What are the boundaries of what the feature can do?
- [ ] Example use cases — How would a user actually use this feature?
- [ ] Output quality expectations — What should the user expect in terms of quality/accuracy?
- [ ] Platform availability — Is this feature available on all platforms (web, mobile, Slack)?
- [ ] Confidence modes or settings — Are there options to adjust behavior or quality?

### 11.2 Workflow / How-To Gap Checklist

When writing step-by-step workflow articles, check for these sections:
- [ ] Clear entry point — Where does the user start (calendar event, sidebar, etc.)?
- [ ] What happens next — What confirmation, notification, or result should the user expect?
- [ ] Error states — What happens if something goes wrong? How does the user know?
- [ ] Alternative paths — Are there different ways to accomplish the same task?
- [ ] Time expectations — How long does this take? Should the user wait or come back later?

### 11.3 Feature Overview Gap Checklist

When writing overview/concept articles, check for these sections:
- [ ] Capabilities table — What can this feature do? A structured table helps.
- [ ] Platform availability — Works on web? Mobile? Chrome extension? Slack?
- [ ] Sub-feature coverage — Are all components of the feature addressed or referenced?
- [ ] Related features — Links to other features that work with this one
- [ ] Use cases — What would a user actually do with this?

### 11.4 Platform-Specific Gap Checklist

When writing articles about a feature on a specific platform, check for these sections:
- [ ] Platform prerequisites — Setup required (e.g., "Chrome extension installed and enabled")
- [ ] Platform behavior differences — How does this platform work differently?
- [ ] Platform limitations — What works on this platform? What doesn't?
- [ ] Screenshots from the correct platform — All images show this platform, not others
- [ ] Links to other platforms — Pointer to how this feature works on other platforms

### 11.5 General User Article Gap Checklist

- [ ] Prerequisites completeness — Are all user prerequisites listed?
- [ ] Admin setup reference — If admin setup is required, is it cross-referenced?
- [ ] Clear entry point — Where/how does the user access the feature?
- [ ] Visual completeness — Does every step have a screenshot?
- [ ] What happens next — Are expectations set for what occurs after the workflow?

**Important:** When gap detection identifies a missing section, do not add the content from your own knowledge. Flag it as a recommendation and verify with [Product Name]/engineering team before writing it.

---

## 12. Using This Framework for Automation

This framework is designed to be machine-readable and actionable for automation workflows.

### 12.1 For Article Generation

- Determine the article type (Feature Guide, Overview, Workflow, Platform-Specific, Use Cases)
- Select the appropriate template from TEMPLATES.md
- Follow the structure rules from ARTICLE_STRUCTURE.md exactly
- Apply tone and language rules from TONE_AND_FORMATTING.md
- Insert placeholder markers for images: `[Screenshot: description]`, `[GIF: description]`, `[Trainn Video: description]`
- Flag any capability claims that need verification: `[NEEDS VERIFICATION: description]`
- Run Smart Gap Detection and add recommendation notes for missing sections

### 12.2 For Article Review

- Run through the Review Checklist point by point
- Check for common mistakes (Section 9)
- Verify article scoping — especially user/admin separation
- Run Smart Gap Detection and flag missing sections
- Verify content accuracy against Core Verification and Feature-Specific Add-Ons (Section 6)

### 12.3 For Feedback Processing

When processing reviewer feedback on a draft:
- Map each feedback item to the relevant framework rule
- Apply the correction
- Re-run the Review Checklist to ensure no regressions
- Flag feedback items that require product testing before resolution
- If the reviewer identifies a gap, add it to the Smart Gap Detection checklist
