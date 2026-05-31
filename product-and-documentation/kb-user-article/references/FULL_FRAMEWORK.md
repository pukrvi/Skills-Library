# [Product Name] KB User Documentation Framework

## Section 1: Article Structure for User Articles

### 1.1 Opening Line

**Format:** "This article explains how to [action] using [Feature Name] in [Product Name]."

**Rules:**
- One sentence only
- Plain, simple language
- No marketing language
- Clearly state the purpose and scope

**Good Examples:**
- "This article explains how to use [Product Name] Meeting Prep within Google Calendar."
- "This article explains how to prepare and submit an RFP using [Product Name]'s RFP Automation."
- "This article explains how to use AI assistant to search your team's content and get AI-powered answers."

**Bad Examples:**
- "RFP automation takes a RFP document..." (too complex for opening line)
- "Discover how AI assistant revolutionizes your sales workflow..." (marketing language)
- "This article explains how administrators can configure..." (wrong audience—should be user-focused)

---

### 1.2 Overview

**Length:** 2-3 short paragraphs

**Content to Answer:**
- What is this feature?
- What does it enable?
- Why is it useful?

**Rules:**
- Concise and accessible
- No sub-headings within the Overview
- Merge "Who is it for?" content into the Overview section
- Capabilities can be presented in a table format if needed
- Use "users" not "reps"
- Use "interfaces" not "surfaces"
- Place callout boxes (Tips, Notes, Warnings) after the Overview section

**Tip Example:** "All without switching between multiple tools."

**Note Example:** "Search results are based only on content stored in [Product Name] and do not pull data from your CRM."

---

### 1.3 Prerequisites

**Standard Requirement:**
- Active product account (always required—may be omitted if universal)

**Additional Prerequisites (as applicable):**
- Chrome extension for Gmail, Calendar, Outlook, LinkedIn
- [Product Name] app for Slack or Teams
- Access to team library content
- Meeting with external participant (for Meeting Prep feature)

**Rules:**
- List only genuine prerequisites
- Be specific about integrations and access
- Omit this section entirely if no genuine prerequisites exist beyond an active product account

---

### 1.4 Context / Feature Walkthrough (Main Body)

**Structure:**
- Use descriptive, action-oriented headings
- Numbered steps for sequential tasks
- 1-3 bullet points per step (maximum)
- Screenshots placed immediately after relevant steps
- Group related capabilities with sub-sections

**Heading Rules:**
- Good: "How to Access Meeting Prep", "Creating a Call Plan", "Searching Your Content"
- Bad: "Context", "Overview", "Information", "Process"

**Content Patterns:**
- Feature-first, then workflow
- Show entry point from standard location (not alternative paths)
- Group related capabilities together with logical sub-sections
- Each section should focus on one discrete task or feature capability

---

### 1.5 Content Coverage / Indexing

**When Required:** Mandatory for AI/search features (AI assistant, Meeting Prep, etc.)

**Required Content:**
- Clear note about what content is indexed
- Table of supported content types
- Explicit mention of what is NOT indexed
- Conditions that affect indexing behavior

**Verification:** Verify content coverage details with engineering before publication

---

### 1.6 Multi-Platform Section

**Structure:**
- Note at top of article specifying platforms covered
- List all applicable platforms
- Group platform-specific screenshots in dedicated sub-section at end of article

**Example Note:** "This feature is available in Google Calendar, Outlook, and the [Product Name] web app."

---

### 1.7 FAQs

**Requirements:**
- Only include genuine, frequently asked questions
- Brief, direct answers
- Include known limitations
- Omit this section entirely if no genuine FAQs exist

---

## Section 2: Tone and Language Guidelines

### 2.1 Voice

**Characteristics:**
- Clear and instructive
- Professional but approachable (warmer than admin documentation)
- Confident and direct
- Task-oriented
- Never sales or marketing tone

**Critical Rule:** Never write from a sales perspective or use promotional language.

**Example:**
- Good: "You can use AI assistant to search your content library and get instant answers."
- Bad: "Unlock the power of AI-driven search to revolutionize your team's knowledge discovery."

---

### 2.2 Word Choice

**Rules:**
- Avoid excessive use of "may" (use "can" or "will" instead)
- Never include accuracy percentages or confidence metrics in feature descriptions
- State page refresh behavior definitively (e.g., "The page refreshes" not "The page may refresh")
- Mention "Coming Soon" features briefly and only if highly relevant to current user need
- Avoid complex or jargon-heavy words in opening lines

**Examples:**
- Good: "You can view all content types in the library."
- Bad: "You may be able to view content types in the library."
- Good: "The page refreshes automatically."
- Bad: "The page may refresh automatically."

---

### 2.3 Scope and Boundaries

**Rules:**
- One feature or workflow per article
- User perspective only (not admin perspective)
- Reference admin articles for setup and configuration steps; do not duplicate admin content
- Separate user and admin flows into different articles
- Focus on what users need to accomplish, not what administrators configure

---

## Section 3: Image, Video, and Visual Guidelines

### 3.1 What to Use

**Approved Media Types:**
- Product screenshots (from the actual product interface)
- Product GIFs (under 30 seconds)
- Trainn videos (for content over 30 seconds or complex multi-step workflows)

---

### 3.2 What NOT to Use

**Prohibited:**
- YouTube videos
- External animated GIFs (e.g., Giphy, Tenor)
- Marketing graphics or promotional imagery
- Images with colorful or decorative backgrounds
- Stock photography unrelated to the actual product interface
- Illustrative graphics that do not show the actual interface

---

### 3.3 Screenshot Standards

**Quality Requirements:**
- Clean, minimal backgrounds (showing only relevant interface elements)
- Crop tightly to show context without excess whitespace
- Consistent sizing across article
- Placed immediately after the step they illustrate
- Include annotations (arrows, circles, highlights) to indicate specific UI elements
- Taken from the correct entry point shown in the article

**Placement:** Screenshots should appear immediately after the step number and description.

---

### 3.4 Multi-Platform Screenshot Organization

**Structure:**
- Note at top of article stating all platforms covered
- List all applicable platforms
- At the end of the article, create a dedicated sub-section for platform-specific screenshots
- Group screenshots by platform

**Example Sub-section Header:** "Meeting Prep Screenshots by Platform"

---

### 3.5 When to Use GIFs vs Screenshots vs Videos

**Screenshots (Static Images):**
- Single-step actions or single-state illustrations
- Button locations or menu paths
- Form fields or input areas
- Static reference material

**GIFs (Animated, Under 30 Seconds):**
- Multi-step actions that happen quickly
- Transitions or state changes
- Scroll or navigation sequences
- Actions taking 3-10 seconds to complete

**Trainn Videos (Over 30 Seconds or Complex Workflows):**
- Workflows with multiple steps and pauses
- Scenarios requiring explanation or context
- Complex multi-step processes
- Demos of interconnected features

---

## Section 4: Callout Boxes and Formatting

### 4.1 Callout Types

**Tip**
- Helpful advice, shortcuts, or best practices
- Format: `> **Tip:** [content]`
- Example: "**Tip:** You can search by content type to narrow results quickly."

**Note**
- Important context or clarification
- Format: `> **Note:** [content]`
- Example: "**Note:** Search results are based only on content stored in [Product Name] and do not pull data from your CRM."

**Warning**
- Important cautions or limitations
- Format: `> **Warning:** [content]`
- Example: "**Warning:** Deleting content cannot be undone."

---

### 4.2 Tables

**Use Tables For:**
- Feature capabilities and comparison
- Supported content types and availability
- Block types and their uses
- Mode comparisons (e.g., Draft vs. Live)
- Field descriptions and requirements
- Platform availability and prerequisites

**Table Format:**
- Clean, minimal design
- Header row with bold text
- Consistent column widths
- Clear alignment (left-align text, center for Yes/No)

---

### 4.3 Text Formatting

**Bold:** UI elements, button names, field labels
- Example: "Click the **Create New** button."

**Numbered Lists:** Sequential steps or ordered procedures
- Example: "1. Click the button. 2. Select the option. 3. Click Save."

**Bullet Lists:** Non-sequential items, options, or features
- Example: "You can search by: content type, author, date, or keyword."

---

## Section 5: Article Scoping Rules

### 5.1 One Article, One Task

**Rule:** Each article should focus on a single feature or workflow.

**Examples of Appropriate Scope:**
- "How to use Meeting Prep in Google Calendar"
- "Creating a Call Plan"
- "Searching Your Content Library"

---

### 5.2 When to Split Articles

**Split into Separate Articles When:**
- User and admin flows are distinct (create separate articles for each)
- Platform-specific guidance is extensive (may create platform-specific article)
- Multiple distinct components exist that serve different purposes (create separate articles)
- Workflows are significantly different in scope (split to maintain focus)

**Example:** Meeting Prep in Google Calendar (user) and Meeting Prep Setup (admin) should be separate articles.

---

### 5.3 Cross-Referencing

**Format:** Use clear, descriptive links to related articles.

**Example:** "For details on creating an agent, see [Agent Studio — Admin Setup Guide]."

**Usage:**
- Reference admin articles for setup steps (don't duplicate)
- Link to related user features
- Point to prerequisite articles
- Guide users to next logical steps in their workflow

---

## Section 6: Content Verification Requirements

### 6.1 Golden Rule

**Never write about unverified features.** Every feature, capability, and workflow described in the article must be tested in the actual product and confirmed to work as described.

---

### 6.2 Core Checklist

**Required Before Publication:**
- [ ] Every feature has been tested in the actual product
- [ ] All screenshots are taken from the real product interface
- [ ] UI paths and navigation steps match the current product (not outdated screenshots)
- [ ] No accuracy percentages or confidence metrics are included
- [ ] No non-working capabilities are described as working
- [ ] Coming Soon features are noted briefly and clearly
- [ ] Entry points match the standard, documented access path (not alternative/undocumented paths)

---

### 6.3 Feature-Specific Verification

#### AI Features (AI assistant, Meeting Prep AI Analysis, etc.)

**Verify:**
- [ ] Content source access and indexing behavior confirmed with engineering
- [ ] Indexing behavior is accurate (what is/isn't indexed)
- [ ] Prompts have been tested individually with realistic inputs
- [ ] Mode differences verified (e.g., Draft vs. Live behavior)
- [ ] No CRM data access is claimed unless verified with product team
- [ ] Content coverage is accurate and current

#### Meeting Prep

**Verify:**
- [ ] Correct entry point (standard access path documented)
- [ ] External participant detection works as described
- [ ] Opportunity and lead resolution behavior confirmed
- [ ] All sub-features (AI analysis, agenda generation, key topics, etc.) tested
- [ ] Multi-platform behavior is consistent or differences are documented

#### Content Features (Templates, Blocks, Sharing)

**Verify:**
- [ ] Block types available and tested
- [ ] Template availability confirmed
- [ ] Sharing and access controls behavior verified
- [ ] Form fields and required vs. optional status documented
- [ ] All UI paths match current product

#### Communication Tools (Slack, Teams Integration)

**Verify:**
- [ ] App installation prerequisites confirmed
- [ ] Command syntax and behavior tested
- [ ] Notification behavior confirmed
- [ ] Platform-specific differences documented

---

## Section 7: Article Type Templates

### 7.1 Feature Guide / How-To Template

**Best For:** Meeting Prep, RFP Automation, Content Sharing, AI assistant Projects

**Structure:**

```
# [Feature Name] — [Descriptor]

This article explains how to [action] using [Feature Name] in [Product Name].

## Overview

[2-3 paragraphs explaining what the feature is, what it enables, and why it's useful]

## Prerequisites

[List genuine prerequisites if applicable]

## [Descriptive Heading for Main Workflow]

1. [First step with 1-3 bullets]
   - [Bullet detail]
   - [Bullet detail]

[Screenshot after step]

2. [Second step with 1-3 bullets]
   - [Bullet detail]

[Screenshot after step]

## [Sub-feature or Related Capability]

1. [Step]
   - [Detail]

[Screenshot]

## FAQs

Q: [Genuine question]
A: [Brief answer]

## [Platform-Specific Section if Applicable]

[Screenshots organized by platform]
```

---

### 7.2 User Overview / Concept Article Template

**Best For:** AI assistant Overview, Template Hub Overview, Feature Concepts

**Structure:**

```
# [Feature Name] — Overview

This article explains [concept/feature] in [Product Name].

## What is [Feature]?

[2-3 paragraphs explaining the concept, capabilities, and use cases]

## Key Capabilities

| Capability | Description |
|---|---|
| [Capability 1] | [What it does] |
| [Capability 2] | [What it does] |

## When to Use [Feature]

- [Use case 1]
- [Use case 2]
- [Use case 3]

## Related Articles

- [Link to how-to guide]
- [Link to step-by-step workflow]
- [Link to platform-specific guide]

## FAQs

Q: [Question]
A: [Answer]
```

---

### 7.3 Step-by-Step Workflow Guide Template

**Best For:** How to Request Verification, Submit RFP, Create Call Plan

**Structure:**

```
# [Workflow Name] — Step-by-Step Guide

This article explains how to [complete workflow] in [Product Name].

## Overview

[Brief overview of what the workflow accomplishes]

## Prerequisites

[What user needs before starting]

## Step 1: [Action]

1. [Numbered step]
   - [Detail]
   - [Detail]

[Screenshot]

2. [Next step]
   - [Detail]

[Screenshot]

## Step 2: [Action]

1. [Numbered step]

[Screenshot]

2. [Numbered step]

[Screenshot]

## Step 3: [Completion/Next Steps]

1. [Final step]

[Screenshot]

> **Tip:** [Helpful advice for completing the workflow]

## What Happens Next?

[Explain what occurs after completion, notifications, next steps]

## Common Questions

Q: [Question]
A: [Answer]
```

---

### 7.4 Platform-Specific Feature Guide Template

**Best For:** Meeting Prep — Google Calendar, AI assistant in Slack, RFP in Outlook

**Structure:**

```
# [Feature Name] — [Platform Name]

This article explains how to use [Feature Name] in [Platform] within [Product Name].

## Overview

[2-3 paragraphs specific to this platform implementation]

## Prerequisites

- [Platform-specific prerequisites]
- [Required integrations]

## Getting Started

1. [Access step]
   - [Detail]

[Screenshot]

2. [First action]

[Screenshot]

## [Main Workflow]

1. [Step]

[Screenshot]

2. [Step]

[Screenshot]

## Platform-Specific Notes

[Any platform-specific quirks, limitations, or differences]

## [Alternative Workflow or Related Feature]

1. [Step]

[Screenshot]

## FAQs

Q: [Question specific to this platform]
A: [Answer]
```

---

### 7.5 Use Case / Prompt Guide Template

**Best For:** AI assistant Use Cases, RFP Best Practices, Meeting Prep Scenarios

**Structure:**

```
# [Feature Name] — Use Cases and Prompts

This article explains how to use [Feature Name] for [specific use case] in [Product Name].

## Use Case: [Specific Scenario]

### What You'll Accomplish

[Brief description of the outcome]

### Sample Prompt or Request

"[Actual example prompt users can use]"

### Tips for Best Results

- [Tip 1]
- [Tip 2]
- [Tip 3]

[Screenshot or example result]

## Use Case: [Another Scenario]

### What You'll Accomplish

[Description]

### Sample Prompt or Request

"[Actual example prompt]"

### Tips for Best Results

- [Tip 1]
- [Tip 2]

[Screenshot or example]

## Common Variations and Adjustments

- [Adjustment 1]
- [Adjustment 2]

## Related Articles

- [Link to how-to guide]
- [Link to feature overview]
```

---

## Section 8: Review Checklist

### Structure Review

- [ ] Opening line follows format: "This article explains how to [action] using [Feature Name] in [Product Name]."
- [ ] Overview is 2-3 paragraphs, concise, no sub-headings
- [ ] Prerequisites are specific and genuine (omitted if none beyond active account)
- [ ] Main body uses descriptive, action-oriented headings
- [ ] Steps are numbered with 1-3 bullets each
- [ ] Content coverage section included for AI/search features
- [ ] Multi-platform screenshots organized in dedicated sub-section (if applicable)
- [ ] FAQs included only if genuine questions exist

### Content Accuracy Review

- [ ] Every feature described has been tested in the actual product
- [ ] Screenshots are from the real product, not mock-ups or outdated versions
- [ ] No accuracy percentages or confidence metrics included
- [ ] No non-working capabilities described
- [ ] Coming Soon features noted briefly only if necessary
- [ ] Feature-specific verification checklist completed (AI, Meeting Prep, Content, Communication)

### Tone Review

- [ ] Voice is instructive and supportive, not sales or marketing
- [ ] No promotional language ("revolutionary," "seamless," "unlock," "discover," "supercharge," "leverage")
- [ ] "Users" used instead of "reps"
- [ ] "Interfaces" used instead of "surfaces"
- [ ] Excessive "may" replaced with "can" or "will"
- [ ] Opening line uses simple, plain language
- [ ] No marketing language or sales angle

### Images Review

- [ ] Only product screenshots, product GIFs (under 30 sec), or Trainn videos used
- [ ] No YouTube, external GIFs, marketing graphics, or decorative backgrounds
- [ ] Screenshots have clean backgrounds and tight crops
- [ ] Screenshots placed immediately after relevant steps
- [ ] Screenshots include annotations or indicators
- [ ] Standard entry point used for screenshots
- [ ] GIFs are under 30 seconds
- [ ] Multi-platform screenshots grouped in dedicated sub-section

### Scope Review

- [ ] One feature or workflow per article
- [ ] User and admin flows separated into different articles
- [ ] Admin content referenced, not duplicated
- [ ] Related articles cross-referenced
- [ ] Unrelated features not combined

---

## Section 9: Common Mistakes to Avoid

1. **Sales or Marketing Angle**
   - Avoid: "Revolutionary," "seamless," "unlock," "discover," "supercharge," "leverage"
   - Replace with clear, instructive language focused on what users can do

2. **Colorful or Decorative Image Backgrounds**
   - Avoid screenshots with bright backgrounds, gradients, or decorative elements
   - Use clean, minimal screenshots showing only the interface

3. **Unverified Feature Claims**
   - Never describe features that haven't been tested in the actual product
   - Especially critical for AI capabilities, CRM data access, and prompt examples
   - Verify all claims with product team before writing

4. **Overly Detailed Overview**
   - Keep Overview to 2-3 concise paragraphs
   - Move detailed capability information to main body or tables
   - Don't use sub-headings within Overview

5. **Merging User and Admin Flows**
   - Separate user-facing articles from admin setup articles
   - Reference admin articles from user articles, don't duplicate

6. **Using "May" Instead of Direct Language**
   - Replace: "You may be able to" with "You can"
   - Replace: "The page may refresh" with "The page refreshes"
   - Use confident, direct language

7. **Using YouTube or External Animated GIFs**
   - Only use product GIFs (under 30 sec) or Trainn videos (over 30 sec)
   - External GIFs from Giphy, Tenor, etc., are not permitted

8. **Including Marketing-Style Graphics**
   - Avoid stock photos, illustrative graphics, or promotional images
   - Use only actual product interface screenshots

9. **Including Accuracy Percentages**
   - Never state "AI is 85% accurate" or similar metrics
   - Describe capabilities and limitations without specific accuracy claims

10. **Combining Unrelated Features**
    - One article = one feature or workflow
    - Split complex features into separate articles for focus

11. **Using Wrong Entry Point**
    - Document the standard, primary access path
    - Don't describe alternative or undocumented entry points
    - Example: Meeting Prep should be accessed from calendar, not extension sidebar

12. **Including Admin Setup Steps in User Article**
    - Keep admin and user content separate
    - Reference admin articles for setup prerequisites

---

## Section 10: Article Naming Conventions

### Format

`[Feature Name] — [Descriptor]`

### Examples

- "[Product Name] Meeting Prep — Google Calendar"
- "AI assistant — Overview"
- "RFP Automation — User Guide"
- "Template Hub"
- "AI assistant — Use Cases and Prompts"
- "Answer Verification — How to Request Verification"

### Rules

- Feature name comes first
- Descriptor provides clarity (e.g., platform, article type, use case)
- User version is default (no need to specify "User" unless ambiguous with admin version)
- Keep names concise for sidebar display
- Descriptive enough to be useful without being verbose

---

## Section 11: Smart Gap Detection

### 11.1 How It Works

Smart gap detection identifies missing, incomplete, or underdeveloped sections in articles by applying context-specific checklists. Use these checklists when creating new articles or reviewing existing ones.

---

### 11.2 AI Feature Gap Checklist

**Use for:** AI assistant, Meeting Prep, AI-powered features

- [ ] Content indexing behavior is explained (what is/isn't indexed)
- [ ] Source attribution is discussed (where information comes from)
- [ ] Mode differences are documented (Draft vs. Live, if applicable)
- [ ] Limitations or constraints are clearly stated
- [ ] Use case examples or sample prompts are provided
- [ ] Content coverage table is included
- [ ] Conditions affecting indexing are explained
- [ ] Accuracy or confidence limitations (if any) are documented

---

### 11.3 Workflow / How-To Gap Checklist

**Use for:** Step-by-step processes, Request Verification, Submit RFP, Create Call Plan

- [ ] Correct entry point is documented
- [ ] Each step is numbered and concise
- [ ] What happens after completion is explained
- [ ] Error states or edge cases are addressed
- [ ] Related features are cross-referenced
- [ ] Screenshots accompany each major step
- [ ] Prerequisites are clearly listed
- [ ] "What's Next" guidance is provided

---

### 11.4 Feature Overview Gap Checklist

**Use for:** Feature introductions, capability summaries, concept articles

- [ ] Capabilities table is included
- [ ] Platform availability is noted
- [ ] Prerequisites are specified
- [ ] All sub-features are covered
- [ ] Content coverage is documented (for AI features)
- [ ] Related how-to articles are linked
- [ ] Use cases are provided
- [ ] Key limitations are stated

---

### 11.5 Platform-Specific Gap Checklist

**Use for:** Platform-specific implementations (Google Calendar, Slack, Outlook, etc.)

- [ ] Platform-specific prerequisites are listed
- [ ] Platform-specific access/entry point is documented
- [ ] Behavior differences from other platforms are noted
- [ ] Screenshots are from correct platform
- [ ] Platform limitations are disclosed
- [ ] Cross-platform inconsistencies are explained
- [ ] Navigation paths match platform UI conventions

---

### 11.6 General User Article Gap Checklist

**Use for:** All user-facing articles

- [ ] Opening line follows format and is clear
- [ ] Prerequisites are complete and specific
- [ ] Admin setup cross-reference provided (if applicable)
- [ ] Standard entry point documented
- [ ] Visual elements (screenshots/videos) are included and current
- [ ] FAQs address genuine confusion points
- [ ] Tone is instructive, not promotional
- [ ] Cross-references to related articles provided
- [ ] Scope is focused (one feature/workflow per article)

---

## Section 12: Using This Framework for Automation

### 12.1 Article Generation

**Process:**
1. Determine article type (Feature Guide, Overview, Workflow, Platform-Specific, Use Case)
2. Select corresponding template from Section 7
3. Follow structure and placeholders
4. Apply tone guidelines from Section 2
5. Insert image placeholders with [Screenshot: Description]
6. Flag sections requiring product verification
7. Run gap detection checklist for the article type
8. Verify content accuracy (Section 6.3)

**Output:** Draft article with placeholders, verification flags, and gap detection results

---

### 12.2 Article Review

**Process:**
1. Run review checklist from Section 8 (all four categories)
2. Check for common mistakes from Section 9
3. Verify article scoping (Section 5)
4. Run gap detection checklist specific to article type (Section 11)
5. Verify content accuracy requirements (Section 6)
6. Check image/video compliance (Section 3)
7. Review callout boxes and formatting (Section 4)

**Output:** Reviewed article with feedback, revision flags, and verification requirements

---

### 12.3 Feedback Processing

**Process:**
1. Map feedback to specific framework rules (sections 1-7)
2. Apply corrections to article structure or content
3. Re-run relevant checklist (Section 8 or Section 11)
4. Flag any sections requiring product testing or verification
5. Add items to gap detection for monitoring
6. Document correction rationale for future reference

**Output:** Revised article, compliance confirmation, verification status

---

## Appendix: Quick Reference

### Core Rules

- **One article, one feature/workflow** — don't combine unrelated content
- **Never write about unverified features** — test everything in the actual product
- **User perspective only** — reference admin articles, don't duplicate
- **Clear, instructive tone** — no marketing language
- **Standard entry points** — use documented access paths, not alternatives
- **Product screenshots only** — no external graphics, marketing images, or YouTube

### Key Formatting

| Element | Format | When to Use |
|---|---|---|
| **Callout: Tip** | `> **Tip:** [content]` | Helpful advice |
| **Callout: Note** | `> **Note:** [content]` | Important clarification |
| **Callout: Warning** | `> **Warning:** [content]` | Important caution |
| **Bold** | `**text**` | UI elements |
| **Numbered List** | `1. 2. 3.` | Sequential steps |
| **Bullet List** | `- - -` | Non-sequential items |
| **Table** | \| Header \| Header \| | Capabilities, supported types |

### Verification Priority

1. **Golden Rule:** Never write about unverified features
2. **Core Checklist:** Every feature tested, current screenshots, no accuracy percentages
3. **Feature-Specific:** AI features, Meeting Prep, Content, Communication tools
4. **Content Accuracy:** Match current product, test all claims

---

**Framework Version:** 1.0  
**Last Updated:** 2026  
**Scope:** [Product Name] User Documentation
