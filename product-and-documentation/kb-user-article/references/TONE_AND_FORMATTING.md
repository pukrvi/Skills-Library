# [Product Name] Knowledge Base — User Documentation
## Quick Reference: Tone, Word Choice, and Formatting

**For complete details, see `references/FULL_FRAMEWORK.md`**

---

## 2. Tone and Language Guidelines

### 2.1 Voice

User Knowledge Base articles are support content that help end users accomplish tasks. They are not marketing, not sales copy, and not admin configuration guides.

The tone should be:
- **Clear and instructive** — as if explaining a feature to a colleague who is using it
- **Professional but approachable** — warmer and more accessible than admin articles, but still professional
- **Confident and direct** — avoid hedging language like "may", "might", "possibly"
- **Task-oriented** — always focused on what the user will do and accomplish
- **Never written from a sales or marketing angle** — the goal is to help users use the feature, not to sell it

**Critical rule:** If a feature is described in marketing terms in source materials, rewrite it as a straightforward, user-friendly explanation.

**Remove marketing language:**
- "revolutionary", "seamless", "unlock", "discover", "supercharge", "leverage", "unlock the power"

Replace with:
- "helps you", "lets you", "allows you to", "makes it easier to"

### 2.2 Word Choice

**Specific rules:**
- **Use "users" not "reps"** — Even though [Product Name] is a sales tool, refer to people using the feature as "users", not "reps" or "sales reps"
- **Use "interfaces" not "surfaces"** — "The interface shows..." not "The surface displays..."
- **Use "can" not "may"** — Write "Users can choose an agent" not "Users may choose an agent." Be direct.
- **No accuracy percentages** — Never mention accuracy percentages or claim (e.g., "95% accurate"). Do not include unverified performance claims.
- **State action requirements definitively** — When a page does not auto-refresh, state it clearly: "You need to refresh the page to see updated results" not "You may need to refresh."
- **Brief "Coming Soon" notes** — When a feature is unreleased, note it briefly: "Automated Workflow: Coming soon." Do not explain unreleased features or speculate about them.

### 2.3 Scope and Boundaries

- **Each article covers one feature or one user workflow.** Do not merge unrelated features (e.g., don't combine "Meeting Prep" and "AI assistant" in one article)
- **User articles are user-only.** If a feature also has an admin configuration flow, that belongs in a separate admin article. Reference it: "Your admin must [action]. See [Admin Article]."
- **Do not include admin setup steps in user articles.** Reference the admin article instead.
- **Cross-reference related features** but do not re-explain them in the same article

---

## 3. Image, Video, and Visual Guidelines

### 3.1 What to Use

- **Product screenshots** — Images must come directly from the product
- **Product GIFs** — For workflows that need to show multi-step interaction within [Product Name] (screen recordings from the actual product). Keep GIFs under 30 seconds.
- **Trainn videos** — When a workflow is too long or complex for a GIF (more than 30 seconds of interaction, or involves too many clicks for a GIF to convey clearly)

### 3.2 What NOT to Use

- No YouTube video embeds
- No animated images that are not from [Product Name] itself (no external GIFs, no stock animations)
- No marketing-style graphics (e.g., colorful capability infographics, branded banner images)
- No images with colorful or decorative backgrounds — crop the image so only [Product Name] UI is visible

### 3.3 Screenshot Standards

- **Clean backgrounds:** Screenshots must have a plain/neutral background. If taken against a colorful desktop, crop or mask it.
- **Crop tightly:** Show only the relevant portion of the screen.
- **Consistent sizing:** Screenshots within the same article should be roughly the same width.
- **Placement:** Place screenshots immediately after the step they illustrate.
- **Annotations:** Use simple annotations (arrows, boxes, highlights) to point out the relevant UI element.
- **Standard entry point:** Always show from where users naturally access the feature (e.g., calendar event for Meeting Prep, not Chrome extension sidebar; Slack message for Slack features, not web dashboard)

### 3.4 When to Use GIFs vs. Screenshots vs. Videos

| Media Type | When to Use |
|---|---|
| Screenshot | Single action, single screen, reference point |
| GIF | Multi-step workflow under 30 seconds |
| Trainn Video | Workflow over 30 seconds, complex multi-screen flow |

---

## 3.5 Multi-Platform Screenshots

If a feature works across multiple platforms (web, mobile, Chrome extension, Slack), organize platform-specific screenshots at the end of the article.

**Structure:**
1. Include a note at the top of the platform-specific section: "This feature is available on web, mobile, and the Chrome extension. Platform-specific differences are noted below."
2. Create a sub-section for each platform
3. Group all platform screenshots together at the end, not scattered throughout the article
4. Show the same action/workflow on each platform for consistency

---

## 4. Callout Boxes and Formatting

### 4.1 Callout Types

| Type | Symbol | When to Use |
|---|---|---|
| **Tip** | 💡 | Helpful shortcuts, best practices, or pro tips |
| **Note** | ℹ️ | Important context, clarifications, or helpful reminders |
| **Warning** | ⚠️ | Irreversible actions, critical cautions, important limitations |

**Format:**
```markdown
> **💡 Tip:** [Helpful shortcut or pro tip]

> **ℹ️ Note:** [Important context or clarification]

> **⚠️ Warning:** [Critical caution or limitation]
```

### 4.2 Tables

Use tables in user articles to summarize:
- Feature capabilities and what each does
- Supported content types or object types
- Mode comparisons (e.g., "AI assistant in web vs. Slack")
- Platform differences
- Field descriptions or options
- Use case summaries

**Example:**
```markdown
| Feature | What It Does | When to Use |
|---|---|---|
| [Feature A] | [Brief description] | [When a user would use it] |
| [Feature B] | [Brief description] | [When a user would use it] |
```

### 4.3 Text Formatting

- **Bold for UI element names:** "Click **Share**", "Navigate to **Templates**", "Look for the **Open** button"
- **Bold for field names:** "Enter your **Meeting Title**", "Select from the **Template** dropdown"
- **Do not overuse bold** — it should highlight specific UI actions or critical terms, not entire sentences
- **Numbered lists for sequential steps** — "Step 1:", "Step 2:", etc.
- **Bullet lists for non-sequential items** — features, options, prerequisites, use cases
- **Headings hierarchy:**
  - `#` for article title
  - `##` for major sections (Overview, Prerequisites, Main Workflow, FAQs)
  - `###` for sub-sections and steps

---

## Quick Checklist: Tone and Formatting

- [ ] Voice is clear, instructive, professional but approachable (not sales-y)
- [ ] Uses "users" not "reps" or "sales reps"
- [ ] Uses "interfaces" not "surfaces"
- [ ] Uses "can" not "may"
- [ ] No marketing language ("revolutionary", "seamless", "unlock", "discover")
- [ ] No accuracy percentages or unverified claims
- [ ] All screenshots are from the actual product with clean backgrounds
- [ ] Screenshots are cropped tightly to show only relevant UI
- [ ] Screenshots placed immediately after the step they illustrate
- [ ] GIFs are under 30 seconds; longer workflows use Trainn videos
- [ ] No YouTube videos, external animations, or marketing graphics
- [ ] Callout boxes use correct format (💡 Tip, ℹ️ Note, ⚠️ Warning)
- [ ] Numbered lists for sequential steps, bullet lists for non-sequential items
- [ ] Bold used only for UI element names and field names, not overused
- [ ] Tables used for capabilities, platform differences, field descriptions
- [ ] Multi-platform content grouped at the end with a platform note
