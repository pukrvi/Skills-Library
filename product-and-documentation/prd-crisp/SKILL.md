---
name: prd-crisp
description: Generate a concise 2-page PRD (.md) — the decision document leaders and engineers read before the full spec
---

# Generate 2-Page PRD

Generate a concise 2-page PRD that gives leaders and engineers everything they need to decide "should we build this?" and understand "what are we building and why?" -- before diving into the full spec.

## Default Output: .md

**Always produce the final PRD as a markdown (.md) file.** Write clean, well-structured markdown directly -- no docx generation needed.

Name the file: `[Feature-Name]-PRD.md`

## Step 1: Load Skills

Read BOTH of these before doing anything else:

```
prd-guide.md
../discovery-grill/SKILL.md, if available
```

## Step 2: Understand the Feature

Accept any of:
- A feature name ("SSO support")
- A problem statement ("Enterprise customers keep asking for centralized auth")
- A user request, Slack thread, transcript, or file path
- A vague idea ("We should do something about onboarding drop-off")

## Step 3: Discovery Grill (MANDATORY)

**This step runs before any content generation.** Follow the discovery-grill skill exactly:

1. Identify [Product Name] area from the user's input
2. Load relevant product knowledge from the user's supplied materials or an explicitly available product-knowledge skill
3. Generate up to **20 clarifying questions** ranked by importance (aim for 8-12 for a crisp PRD)
4. Ask questions using the host environment's question tool or chat in batches of up to 4
5. Each question gets **4 contextual options** with `multiSelect: true` for non-exclusive questions (free text is always available via "Other" -- users can type "Ask me later" there to defer)
6. Adapt questions based on prior answers -- skip resolved unknowns, add new ones
7. Stop when you have clarity or hit 20 questions or the user says "enough"
8. Track all "Ask me later" responses for the post-delivery reminder

**For crisp PRDs**: Lean toward fewer questions (8-12). You're writing 2 pages, not a novel.

## Step 4: Generate the PRD

Follow the prd-guide.md rules exactly. Use this structure:

```markdown
# Feature / Change Name

## Problem Statement

## User Stories

## Requirements

## Goals

## Non-Goals

## Expected End State
```

Section defaults:

- **Title**: Only the feature or change name. Do not append "PRD", "2-Page PRD", "Draft", or any label.
- **Problem Statement**: 1-2 paragraphs. Covers what is changing, who has the problem, what blocks them, what happens if we do nothing, and why now. This replaces the old separate "Overview" section -- all context lives here.
- **User Stories**: 3-5 stories. Format: "As a [specific user type], I want [capability], so that [outcome]." Cover distinct user perspectives. Most critical story first.
- **Requirements**: Table with MoSCoW priorities (P0, P1, P2). 5-12 rows. Each requirement is one buildable behavior. **No cap on acceptance criteria per requirement** -- write as many ACs as needed to fully specify testable behavior. Use detail blocks after the table for complex requirements with 4+ ACs.
- **Goals**: 3-5 outcome-based bullets. Start each with a user or customer outcome. Goals explain why these requirements were chosen.
- **Non-Goals**: Optional. Include only when scope risk exists. 3-7 bullets.
- **Expected End State**: 1-2 short paragraphs. Describe the completed customer/user experience after this ships.

### Requirements Table Format

```markdown
| # | Priority | Requirement | Acceptance Criteria |
|---|----------|-------------|---------------------|
| R1 | P0 | Short requirement statement. | AC 1. First testable criterion. AC 2. Second testable criterion. AC 3. Third testable criterion. |
| R2 | P0 | Short requirement statement. | AC 1. First testable criterion. AC 2. Second testable criterion. |
| R3 | P1 | Short requirement statement. | AC 1. First testable criterion. AC 2. Second testable criterion. AC 3. Third. AC 4. Fourth. |
```

For complex requirements, add a detail block:

```markdown
#### R1 Detail

- AC 1. Given X, when Y, then Z.
- AC 2. The system displays [specific content].
- AC 3. Edge case: if [condition], then [behavior].
- AC 4. Negative case: [action] does NOT [undesired behavior].
- AC 5. Data: [specific data requirement].
```

Priority definitions:
- P0: Must have for the release to solve the core customer problem.
- P1: Should have for a complete, polished release, but not required for the core workflow.
- P2: Could have if time allows. Useful enhancement, not required for launch.

### Sections NOT included by default

These are omitted unless the user explicitly requests them:
- Success Metrics
- Open Questions
- Timeline & Dependencies
- Technical Considerations

**Hard constraints**: 600-1000 words, tables over paragraphs, no filler.

## Step 5: Save as .md

1. Write the PRD as clean markdown with proper heading hierarchy, tables, and bullet lists
2. Save as `[Feature-Name]-PRD.md`

## Step 6: Offer Full PRD + Deferred Question Reminder

After delivery, do two things:

1. **Remind about deferred questions**: If the user typed "Ask me later" in any Discovery Grill question, list them in chat:
   ```
   Deferred questions to revisit:
   1. [Question text] -- deferred
   2. [Question text] -- deferred
   
   These weren't needed to write the draft, but resolving them will strengthen the PRD. Want to tackle any of them now?
   ```
   This goes in **chat only** -- never in the .md file.

2. **Offer full PRD**: "Would you like me to expand this into the Full PRD with deeper requirements, technical considerations, success metrics, and implementation decisions?"

## Utility Scripts

If the user provides input as a PDF or existing document, use available PDF, OCR, document parsing, or media extraction tooling to pull the relevant source content.

## Company Knowledge (only when needed)

For product-specific personas, terminology, or behavior, rely only on user-provided source material, a provided repo, or an explicitly available product-knowledge skill.

If the user provides input with the request, treat it as the raw input to process. If no input is provided, ask the user to describe the feature or problem.
