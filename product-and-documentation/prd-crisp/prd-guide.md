# PRD Writer Guide (Crisp)

Write compact PRDs that help PM, design, engineering, QA, and customer-facing teams align quickly.

Use short sections, bullets, and a requirements table. Keep the PRD skimmable for engineering. Prefer clarity over completeness when detail does not change the build.

## Structure

```markdown
# Feature / Change Name

## Problem Statement

## User Stories

## Requirements

## Goals

## Non-Goals

## Expected End State
```

## Section Rules

### Title

Use only the feature or change name as H1.

Do not append labels like "2-page PRD", "Product Requirement Document", "Draft PRD", or "PRD".

Good:

```markdown
# Unpublish Roleplays
```

Weak:

```markdown
# Unpublish Roleplays - 2-Page PRD
```

### Problem Statement

This is the anchor of the PRD. It replaces both the old "Overview" and "Problem Statement" sections with a single, dense opening that gives readers full context in one place.

Write 1-2 paragraphs that answer ALL of these:

- What is this feature or change? (the "what" -- one line)
- Who has the problem and how do they experience it?
- What blocks them today?
- What happens if we do nothing? (cost of inaction)
- Why now? What makes this urgent or timely?

The first sentence should orient anyone picking up this doc cold. Lead with the change, then ground it in the problem.

Good:

```markdown
## Problem Statement

Roleplays can move from Draft to Published, but not back to Draft. When an enablement leader discovers a published roleplay with outdated content, incorrect persona settings, or a compliance issue, their only option is to delete it -- losing all historical learner attempts, scores, and coaching data.

This forces a bad tradeoff: keep a broken roleplay live or destroy the data. Enterprise customers with compliance-driven coaching programs have flagged this as a blocker for expanding roleplay adoption. Three of our top-10 accounts raised this in QBRs last quarter.
```

Weak:

```markdown
## Problem Statement

We need an unpublish feature for roleplays so that admins can manage content better.
```

Do not describe the solution. Do not list features. The problem statement is about the pain, not the fix.

### User Stories

3-5 user stories. Place them right after the problem so the reader understands who benefits before hitting requirements.

Format:

```markdown
1. As a [specific user type], I want [capability], so that [outcome].
```

Guidelines:
- User types should be specific: "Workspace Admin", "Sales Rep", "Enablement Leader" -- not just "user".
- The capability describes what they want to accomplish, not how (no UI widgets).
- The outcome explains the value delivered.
- Cover distinct perspectives -- at least 2 different user types when applicable.
- Order by importance -- most critical story first.

Remove duplicate stories. If two stories describe the same behavior from the same perspective, merge them.

### Requirements

Use a table with MoSCoW priorities. This is the core of the PRD -- the part engineering builds from.

```markdown
| # | Priority | Requirement | Acceptance Criteria |
|---|----------|-------------|---------------------|
| R1 | P0 | Requirement statement | AC 1. First criterion. AC 2. Second criterion. AC 3. Third criterion. |
| R2 | P0 | Requirement statement | AC 1. First criterion. AC 2. Second criterion. |
| R3 | P1 | Requirement statement | AC 1. First criterion. AC 2. Second criterion. AC 3. Third criterion. AC 4. Fourth criterion. |
```

Priority definitions:
- P0: Must have for the release to solve the core customer problem.
- P1: Should have for a complete, polished release, but not required for the core workflow.
- P2: Could have if time allows. Useful enhancement, not required for launch.

Always sort rows by priority: all P0 rows first, then P1, then P2. Within each group, order by product flow or dependency.

#### Requirement guidelines

- Start each requirement with a product behavior, not an implementation task.
- One row = one buildable behavior. If acceptance criteria cover unrelated behaviors, split the row.
- Keep the requirement statement scannable (1-2 lines).
- Avoid implementation detail unless it affects product behavior.
- Aim for 5-12 rows in a crisp PRD, but do not artificially cap -- if the feature needs 15 rows, use 15 rows.

#### Acceptance criteria guidelines

**There is no cap on acceptance criteria per requirement.** Write as many as needed to fully specify the behavior. A complex requirement might have 2 ACs; a critical one might have 8. The goal is testability, not brevity.

Each acceptance criterion must be:
- **Testable**: A QA engineer can write a test case from it.
- **Specific**: States the exact condition and expected outcome.
- **Observable**: Describes visible system behavior, not internal implementation.

Format acceptance criteria as numbered items within the table cell: "AC 1. [criterion]. AC 2. [criterion]." This keeps the table scannable while allowing as many criteria as needed.

When a requirement is complex, add a detail block after the table:

```markdown
#### R4 Detail

- AC 1. Attempts started before unpublish can be completed and submitted.
- AC 2. Completed attempts appear in the learner's history with original scores.
- AC 3. Admin reporting includes all historical attempts regardless of publish state.
- AC 4. The learner dashboard does not show the roleplay after unpublish.
- AC 5. If a learner has the roleplay open in a browser tab, they can finish but cannot start a new attempt.
```

Use detail blocks when:
- A requirement has 4+ acceptance criteria that would make the table hard to read.
- Edge cases or boundary conditions need explanation.
- Given/When/Then format would clarify the behavior.

Bad acceptance criteria:

```markdown
The modal should clearly explain learner impact.
```

Good acceptance criteria:

```markdown
AC 1. The confirmation modal states: in-flight attempts can be completed, new learners cannot access the roleplay, and the roleplay returns to Draft.
AC 2. The modal shows the count of learners currently in-flight.
AC 3. The "Unpublish" button is disabled until the admin checks a confirmation checkbox.
```

Avoid vague words: "clearly", "properly", "seamlessly", "intuitively", "robustly", "user-friendly". Replace with specific, testable behavior.

### Goals

3-5 outcome-based bullets. Goals come after Requirements because the requirements are the "what" -- goals explain the "why we chose these requirements."

Guidelines:
- Start each goal with a user or customer outcome.
- Goals are outcomes, not tasks. "Preserve all historical data after unpublish" not "Add backend support for unpublish."
- Avoid backend/implementation language unless the user asks for an engineering spec.
- Do not include success metrics unless explicitly requested.

### Non-Goals

Optional. Include only when scope risk exists, the feature could easily expand, or stakeholders may assume extra functionality.

3-7 bullets. Each non-goal should be something a reasonable person might expect to be in scope.

Do not include obvious non-goals that no reviewer would expect.

### Expected End State

1-2 short paragraphs. Describe the completed customer/user experience after this ships.

Answer:
- What can users do after this ships?
- What behavior should feel obvious or natural?
- What customer problem is now solved?

Avoid implementation detail. Engineering behavior belongs in acceptance criteria.

## Compactness Rules

Use these defaults unless the user asks for more:

- Problem Statement: 1-2 paragraphs (replaces the old Overview + Problem Statement).
- User Stories: 3-5 stories.
- Requirements: 5-12 rows (no hard cap -- use what the feature needs).
- Acceptance Criteria: no cap per requirement -- write what is needed.
- Goals: 3-5 bullets.
- Non-goals: optional, 3-7 bullets when needed.
- Expected End State: 1-2 short paragraphs.

Remove:
- Success Metrics, unless explicitly requested.
- Open Questions, unless explicitly requested.
- Timeline, unless explicitly requested.
- Dependencies, unless explicitly requested.
- Long narrative explanations.

Target: 600-1000 words. Tables over paragraphs. No filler.

## Priority Rules

- P0: Must have for the release to solve the core customer problem.
- P1: Should have for a complete, polished, or lower-risk release, but not required for the core workflow.
- P2: Could have if time allows. Useful enhancement, not required for launch.

If everything is essential, still challenge the list. Most PRDs should have fewer P0s than total requirements.

If the user provides priorities, preserve them unless they conflict with core product logic. If priorities conflict, propose a corrected ordering and explain briefly.

## Engineering Readability Rules

Optimize the PRD for fast engineering review.

- Put buildable behavior in the Requirements table.
- Put test conditions in Acceptance Criteria (as many as needed).
- Put scope boundaries in Non-goals.
- Put customer intent in Problem Statement, Goals, and Expected End State.
- Do not bury requirements in paragraphs.
- Do not mix unrelated requirements in one row.

## Quality Checklist

Before finalizing:

- The title is only the feature or change name.
- Problem Statement covers what, who, why, and why now -- no separate Overview needed.
- User Stories use distinct personas and are not duplicates.
- Requirements are in a table, sorted P0 > P1 > P2.
- Every acceptance criterion is testable and specific.
- No acceptance criteria merely restate the requirement.
- Goals are outcome-based, not task-based.
- Non-goals are included only if they reduce scope ambiguity.
- Expected End State describes the completed customer experience.

## Relationship to Full PRD

The crisp PRD is the entry point. After delivering it, always offer to expand into the Full PRD with deeper requirements, technical considerations, success metrics, open questions, and implementation decisions.
