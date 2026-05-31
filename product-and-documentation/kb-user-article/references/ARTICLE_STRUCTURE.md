# [Product Name] Knowledge Base — User Documentation Framework
## Quick Reference: Article Structure, Scoping, and Naming

**For complete details, see `references/FULL_FRAMEWORK.md`**

---

## Heading Hierarchy for .docx Output (CRITICAL)

When generating the article as a `.docx` file, every heading **MUST** use the `heading:` property with the correct `HeadingLevel` so Word recognises it in the outline, navigation pane, and table of contents. A bold paragraph without `heading:` is just normal text — it will not appear in the outline or TOC.

| Element | HeadingLevel | Size | Usage |
|---------|-------------|------|-------|
| Article title | `HeadingLevel.TITLE` | 28pt | The article name — one per document. Use `docTitle()`. |
| Major sections | `HeadingLevel.HEADING_1` | 26pt | Overview, Prerequisites, How to Use, Tips, FAQs |
| Sub-sections | `HeadingLevel.HEADING_2` | 18pt | Feature sub-flows, multi-step sections |
| Details | `HeadingLevel.HEADING_3` | 14pt | Individual steps, use case groups |
| Nested details | `HeadingLevel.HEADING_4` | 12pt | Option variants, edge cases |

**Never use `para()` with manual bold/size formatting for headings.** Always use `heading()` or `docTitle()` from the DOC_TEMPLATE helpers. If writing inline docx-js code, always include `heading: HeadingLevel.HEADING_X` in the Paragraph constructor.

---

## 1. Article Structure for User Articles

Every user-facing Knowledge Base article must follow this mandatory structure, in this exact order. User articles help end users discover, understand, and use features effectively. The tone is clear, task-oriented, and supportive.

### 1.1 Opening Line

The very first line of the article, placed directly below the title. A single sentence that tells users what this article helps them accomplish.

**Format:** "This article explains how to [action] using [Feature Name] in [Product Name]."

**Rules:**
- One sentence only
- Use plain, simple language — no complex jargon in the opening line
- Clearly state the scope: what the user will accomplish or understand
- Do not use marketing or promotional tone

**Good examples:**
- "This article explains how to prepare for a meeting using Meeting Prep in [Product Name]."
- "This article explains how to share content with buyers in a Digital Sales Room in [Product Name]."
- "This article explains how to ask questions and get answers using AI assistant in [Product Name]."

**Bad examples:**
- "Unlock powerful preparation features with Meeting Prep." (marketing tone)
- "This article is about AI assistant." (vague, does not state what user will do)

### 1.2 Overview

A brief section (2–3 short paragraphs maximum) that explains what the feature is and why a user would use it.

The Overview should answer:
- What is this feature?
- What does it do for the user?
- Why is it useful?

**Rules:**
- Keep it concise — do not go into step-by-step details here
- Do not include sub-headings within the Overview section
- If there was previously a "What is it?" section, merge that content into the Overview
- Use "users" not "reps" or "sales reps" when referring to people
- Use "interfaces" not "surfaces"

**Callout boxes** should appear directly after the Overview when needed:

- Tip example: "**💡 Tip:** You can use Meeting Prep both from your calendar and from the Chrome extension."
- Note example: "**ℹ️ Note:** Meeting Prep indexes the content you share with it. Public or archived content may not be accessible."

### 1.3 Prerequisites

A bullet list of requirements the user must meet before starting.

**Standard user prerequisites to consider:**
- Active product account — often the only prerequisite for basic features
- Feature access (e.g., "Digital Sales Rooms enabled by admin")
- Related setup (e.g., "Calendar integration enabled")
- Content or data available (e.g., "One or more playbooks created")

**Rules:**
- Only include prerequisites that genuinely apply
- Be specific about what is required
- If there are no prerequisites beyond an active account, omit the section entirely
- If a prerequisite requires admin setup, reference the admin article: "Your admin must [action]. See [Admin Article Link]."

### 1.4 Main Body

This is the core of the article. For user articles, this section walks through how to use the feature or accomplish a task.

**Naming the section:**
- Use headings that describe what the user will do
- Good: "How to Prepare for a Meeting", "Sharing Content with Buyers", "Asking Questions with AI assistant"
- Bad: "Details", "How It Works", "User Interface"

**Structure within this section:**
- Use sub-headings (##, ###) to break the content into logical groups
- Use numbered steps: "Step 1: [Action]", "Step 2: [Action]"
- Each step should include 1–3 bullet points or short sentences describing what the user does
- Include a product screenshot after each step or group of steps
- Use Note or Tip callout boxes for helpful context or shortcuts
- Use Warning callout boxes for irreversible actions or important cautions

**User-specific structure patterns:**
- Feature tour first, then workflow: Start by explaining what the feature shows/offers, then walk through how to use it
- Clear entry points: Always show where the user accesses the feature (calendar event, sidebar, Chrome extension, etc.)
- What happens next: Explain what the user should expect after they complete the action (confirmation message, processing time, what to do with the result)
- Multi-step workflows: Break into logical sub-sections, each with a clear outcome

### 1.5 Content Coverage / Indexing Section

For articles about AI features (AI assistant, agents, content profiling), include a dedicated section explaining what content the feature can and cannot access.

**What to include:**
- Which content types are supported (e.g., "AI assistant can access playbooks, templates, competitive intel, and case studies")
- Which content types are NOT supported (e.g., "AI assistant cannot access email attachments or external URLs")
- Limitations on how content is accessed (e.g., "AI assistant accesses only content shared with you")
- Information about content freshness or recency

**Rules:**
- Be explicit about what is and is not supported — do not leave users guessing
- Use a bulleted list or table format for clarity
- Reference related content indexing documentation if available

### 1.6 Multi-Platform Section

If a feature works differently across platforms (web, mobile, Chrome extension, Slack), group platform-specific content at the end.

**What to include:**
- Note at the top: "This feature works on web, mobile, and the Chrome extension. Platform-specific differences are noted below."
- Sub-section for each platform with key differences or platform-specific steps
- Screenshots for each platform showing the same action

**Rules:**
- Only include platforms where the feature is actually available
- Highlight differences, not duplicate common content
- Group all platform content at the END of the article, not scattered throughout

### 1.7 FAQs / Troubleshooting

Include this section only if the feature has common user questions or known issues.

**Rules:**
- Only include questions that users genuinely encounter
- Keep answers brief and direct
- Include troubleshooting steps for common issues
- If the article does not need FAQs, omit this section entirely

### 1.8 Summary / Recap (Conditional)

A closing section that recaps the key takeaways of the article. **Include this section only for long articles** — those with 4+ main body sub-sections, multi-platform coverage, or articles that span more than roughly 800 words of instructional content. **Omit it entirely for short articles** (single-task how-tos, quick feature guides, or articles under ~500 words).

**What to include:**
- A brief paragraph (2–4 sentences) summarizing what the user learned or can now do
- A bullet list of the key actions or capabilities covered (3–6 bullets max)
- A forward pointer: what to try next, related features, or a cross-reference to the next logical article

**Format:**
```
## Summary

[1–2 sentence recap of what was covered.]

**What you can now do:**
- [Capability 1 — e.g., "Prepare for meetings using AI-powered briefings"]
- [Capability 2 — e.g., "Access meeting insights from your calendar or Chrome extension"]
- [Capability 3 — e.g., "Share prep summaries with your team"]

[Optional forward pointer — e.g., "To learn more about sharing content with buyers, see [Digital Sales Rooms — Sharing Guide]."]
```

**Rules:**
- Do NOT repeat the Overview — the Summary focuses on what the user **can now do**, not what the feature **is**
- Do NOT add new information — only recap what was already covered in the article
- Keep it concise — if the summary exceeds 6 bullets, the article itself may need splitting
- Place it as the last section (after FAQs if present, or after the main body)
- **Skip entirely for short articles** — a 3-step how-to does not need a recap

**When to include vs. skip:**

| Article Type | Include Summary? |
|-------------|-----------------|
| Feature overview with 5+ sub-sections | ✅ Yes |
| Multi-platform feature guide | ✅ Yes |
| Long workflow walkthrough (10+ steps) | ✅ Yes |
| Use case / prompt guide with many examples | ✅ Yes |
| Simple single-task how-to (3–5 steps) | ❌ No |
| Short feature tip or quick guide | ❌ No |
| FAQ-only or troubleshooting article | ❌ No |

---

## 5. Article Scoping Rules

### 5.1 One Article, One Feature or Workflow

Every user article must have a clearly defined scope. Before writing, determine:
- What is the user task or feature? (One feature or workflow per article)
- What does the user accomplish? (Clear outcome)
- Does this involve admin setup? (If yes, reference the admin article)

### 5.2 When to Split Articles

Split into separate articles when:
- A feature has both user and admin flows (e.g., "How to Use Answer Verification" and "Admin: Managing Verified Answers")
- A workflow has multiple distinct paths that each warrant their own walkthrough (e.g., "Sharing via Email" vs. "Sharing via Digital Sales Room")
- A feature covers different platforms so extensively that a single article becomes unwieldy (e.g., "Meeting Prep — Web" and "Meeting Prep — Chrome Extension")
- A feature has multiple sub-features or components each needing detailed coverage

### 5.3 Cross-Referencing

When a topic is covered in another article, link to it rather than re-explaining:
- "For admin setup, see [Feature Name — Admin Setup]."
- "For details on content indexing, see [AI assistant — Content Coverage]."
- "For more on this workflow, see [Related Feature — How-To]."

---

## 10. Article Naming Conventions

### Title Format

Use this format for user article titles: **[Feature Name] — [Descriptor]** or simply **[Feature Name]**

**Examples:**
- "Meeting Prep — How to Prepare for a Call"
- "AI assistant — Overview"
- "Digital Sales Rooms — Sharing Content with Buyers"
- "RFP Automation — How to Submit an RFP"
- "Meeting Prep — Chrome Extension"
- "AI assistant — Use Cases and Prompts"

**Rules:**
- The feature name comes first
- Add a descriptor to clarify scope if needed (How-To, Overview, Use Cases, Platform-Specific)
- For the same feature on different platforms, include the platform name
- Keep it concise — the title should fit comfortably in the Knowledge Base sidebar
