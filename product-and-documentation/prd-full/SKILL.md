---
name: prd-full
description: Write a structured PRD (.md) from a problem statement or feature idea
---

# Write Full PRD

Write a comprehensive product requirements document -- the single source of truth for what to build, why, and how to measure success. Goes deeper than the crisp PRD with exhaustive requirements, thorough acceptance criteria, success metrics, open questions, and conditional technical considerations.

## Default Output: .md

**Always produce the final PRD as a markdown (.md) file.** Write clean, well-structured markdown directly -- no docx generation needed.

Name the file: `[Feature-Name]-PRD.md`

## Step 1: Load skills

Read ALL of these before doing anything else:

```
prd-guide.md
../discovery-grill/SKILL.md, if available
```

## Step 2: Understand the Feature

Accept any of:
- A feature name ("SSO support")
- A problem statement ("Enterprise customers keep asking for centralized auth")
- A user request ("Users want to export their data as CSV")
- A vague idea ("We should do something about onboarding drop-off")
- A file path to an existing doc, PDF, or transcript
- A crisp PRD to expand (check if the user is upgrading from `/prd-crisp`)

## Step 3: Discovery Grill (MANDATORY)

**This step runs before any content generation.** Follow the discovery-grill skill exactly:

1. Identify [Product Name] area from the user's input
2. Load relevant product knowledge from the user's supplied materials or an explicitly available product-knowledge skill
3. Generate up to **20 clarifying questions** ranked by importance (aim for 12-20 for a full PRD)
4. Ask questions using the host environment's question tool or chat in batches of up to 4
5. Each question gets **4 contextual options** with `multiSelect: true` for non-exclusive questions (free text is always available via "Other" -- users can type "Ask me later" there to defer)
6. Adapt questions based on prior answers -- skip resolved unknowns, add new ones
7. Stop when you have clarity or hit 20 questions or the user says "enough"
8. Track all "Ask me later" responses for the post-delivery reminder

**For full PRDs**: Go deeper (12-20 questions). The full PRD has detailed requirements, exhaustive acceptance criteria, success metrics, and open questions -- thorough input produces a thorough document.

**If expanding a crisp PRD**: Skip questions already answered in the crisp version. Focus the grill on gaps: success metrics, technical constraints, edge cases, and scope boundaries.

## Step 4: Check for Codebase Access

Before generating, determine whether you have access to the project's codebase:

- **If yes** (user provided a repo path, or you can read source files): Include the Technical Considerations section with modules, schemas, APIs, and architecture decisions.
- **If no**: Omit Technical Considerations entirely. Add a note at the end: "Technical Considerations will be added after engineering review."

Do not speculate about implementation without evidence.

## Step 5: Generate the PRD

Follow the prd-guide.md rules exactly. Use this structure:

```markdown
# Feature / Change Name

## Problem Statement

## User Stories

## Requirements

## Goals

## Non-Goals

## Expected End State

## Success Metrics

## Open Questions

## Timeline & Dependencies

## Technical Considerations (only if codebase access exists)
```

Section guidance:

- **Problem Statement**: 2-3 paragraphs. What is changing, who has the problem, what blocks them, cost of inaction, why now, evidence. Replaces the old separate "Overview" -- all context lives here.
- **User Stories**: 5-10 stories grouped by persona. Cover happy path, edge cases, error states. Format: "As a [specific user type], I want [capability], so that [outcome]."
- **Requirements**: Table with MoSCoW priorities (P0, P1, P2). **No cap on number of requirements or acceptance criteria.** Write as many as the feature needs. Each requirement is one buildable behavior. Each AC is testable, specific, and observable. Use detail blocks for complex requirements with 4+ ACs. Cover happy path, edge cases, error handling, permissions, data integrity, and concurrency.
- **Goals**: 3-5 outcome-based bullets. Distinguish user goals from business goals.
- **Non-Goals**: 5-10 explicit exclusions with rationale for each.
- **Expected End State**: 2-3 paragraphs painting the post-ship experience.
- **Success Metrics**: Leading indicators (days/weeks) and lagging indicators (weeks/months) in tables with specific targets and measurement methods.
- **Open Questions**: Table with owner, blocking status, and notes.
- **Timeline & Dependencies**: Deadlines, cross-team dependencies, phasing suggestions.
- **Technical Considerations** (conditional): Modules affected, interface changes, schema changes, API contracts, architectural decisions, migration & rollback plan.

### Requirements Table Format

```markdown
| # | Priority | Requirement | Acceptance Criteria |
|---|----------|-------------|---------------------|
| R1 | P0 | Requirement statement | AC 1. Criterion. AC 2. Criterion. AC 3. Criterion. |
```

For complex requirements, add detail blocks:

```markdown
#### R1 Detail

- AC 1. Given [precondition], when [action], then [outcome].
- AC 2. The system displays [specific content].
- AC 3. Edge case: if [condition], then [behavior].
- AC 4. Error case: if [failure], then [recovery behavior].
- AC 5. Permission: only [role] can perform this action.
- AC 6. Data: [specific data created/preserved/removed].
- AC 7. Negative: [action] does NOT [undesired behavior].
```

### Technical Considerations Format (when included)

```markdown
## Technical Considerations

### Modules Affected
- `module-name` -- what changes and why

### Schema Changes
- Table `roleplays`: add column `unpublished_at` (timestamp, nullable)
- Migration: backfill existing rows with NULL

### API Contracts
**POST /api/v1/roleplays/:id/unpublish**
- Auth: Workspace Admin role required
- Request body: `{ confirm: boolean }`
- Success response: `{ status: "draft", in_flight_count: number }`
- Error: 403 if not admin, 409 if already draft

### Architectural Decisions
- Decision: Use soft-delete pattern (status change) rather than separate archive table.
- Rationale: Simpler migration, no data movement, existing queries filter by status.
- Alternatives: Archive table (rejected -- adds complexity, breaks existing reporting queries).
```

## Step 6: Save as .md

1. Write the PRD as clean markdown with proper heading hierarchy, tables, and bullet lists
2. Save as `[Feature-Name]-PRD.md`

## Step 7: Review + Deferred Question Reminder

After generating, do two things:

1. **Remind about deferred questions**: If the user typed "Ask me later" in any Discovery Grill question, list them in chat:
   ```
   Deferred questions to revisit:
   1. [Question text] -- deferred
   2. [Question text] -- deferred
   
   These weren't needed to write the draft, but resolving them will strengthen the PRD. Want to tackle any of them now?
   ```
   This goes in **chat only** -- never in the .md file.

2. **Offer next steps**:
   - Ask if any sections need adjustment or expansion
   - Offer to add Technical Considerations if they were omitted and codebase context is now available
   - Offer to create follow-up artifacts (design brief, ticket breakdown, engineering spec)

## Utility Scripts

If the user provides input as a PDF or existing document, use available PDF, OCR, document parsing, or media extraction tooling to pull the relevant source content.

## Company Knowledge (only when needed)

For product-specific personas, terminology, or behavior, rely only on user-provided source material, a provided repo, or an explicitly available product-knowledge skill.

If the user provides input with the request, treat it as the raw input to process. If no input is provided, ask the user to describe the feature or problem.
