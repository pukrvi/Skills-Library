# PRD Writer Guide (Full)

Write comprehensive PRDs that serve as the single source of truth for what to build, why, and how to measure success. The full PRD goes deeper than the crisp version: thorough requirements, exhaustive acceptance criteria, success metrics, open questions, and -- when codebase context is available -- technical considerations and implementation decisions.

## Structure

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

## Technical Considerations (conditional -- only with codebase access)
```

## Section Rules

### Title

Use only the feature or change name as H1.

Do not append "PRD", "Full PRD", "Product Requirements Document", or "Draft".

### Problem Statement

The anchor of the PRD. One place that gives any reader -- PM, engineer, designer, exec -- full context.

Write 2-3 paragraphs that answer ALL of these:

- What is this feature or change? (orient the reader in one sentence)
- Who has the problem and how do they experience it?
- What blocks them today?
- What happens if we do nothing? (cost of inaction -- churn risk, revenue impact, competitive gap)
- Why now? What makes this urgent or timely?
- What evidence supports this? (customer requests, support tickets, competitive intel, usage data)

The first sentence should orient anyone picking up this doc cold. Lead with the change, then ground it in the problem.

Good:

```markdown
## Problem Statement

Roleplays can move from Draft to Published, but not back to Draft. When an enablement leader discovers a published roleplay with outdated content, incorrect persona settings, or a compliance issue, their only option is to delete it -- losing all historical learner attempts, scores, and coaching data.

This forces a bad tradeoff: keep a broken roleplay live or destroy the data. Enterprise customers with compliance-driven coaching programs have flagged this as a blocker for expanding roleplay adoption. Three of our top-10 accounts raised this in QBRs last quarter, and two cited it as a factor in stalled expansion conversations.

The problem is compounding: as more teams adopt roleplays, the volume of published content grows, and the inability to gracefully retire content becomes a daily friction point for enablement admins.
```

Do not describe the solution. Do not list features. The problem statement is about the pain, not the fix.

### User Stories

5-10 user stories grouped by persona when the feature serves multiple user types. The full PRD goes deeper than crisp -- cover the happy path, edge cases, error states, and different user contexts.

Format:

```markdown
### Workspace Admin
1. As a Workspace Admin, I want to unpublish a roleplay, so that I can retire outdated content without losing historical data.
2. As a Workspace Admin, I want to see which learners have in-flight attempts before unpublishing, so that I can make an informed decision.

### Learner
3. As a Learner with an in-flight attempt, I want to complete my attempt after a roleplay is unpublished, so that my work is not lost.
4. As a Learner, I want my completed attempts to remain visible in my history, so that I can reference my past performance.

### Enablement Leader
5. As an Enablement Leader, I want unpublished roleplay data to appear in reporting, so that historical coaching metrics remain accurate.
```

Guidelines:
- User types should be specific: "Workspace Admin", "Sales Rep", "Enablement Leader" -- not "user".
- The capability describes what they want to accomplish, not how.
- The outcome explains the value delivered.
- Include edge cases: what happens when something goes wrong, when the user is mid-flow, when data is missing.
- Order by persona group, then by priority within each group.

### Requirements

This is the core of the full PRD. Use a table with MoSCoW priorities AND detailed acceptance criteria.

**There is no cap on the number of requirements or acceptance criteria.** Write as many as needed to fully specify every buildable behavior. A simple feature might have 8 requirements; a complex one might have 25. Each requirement gets as many acceptance criteria as needed to be fully testable.

```markdown
| # | Priority | Requirement | Acceptance Criteria |
|---|----------|-------------|---------------------|
| R1 | P0 | Requirement statement | AC 1. Criterion. AC 2. Criterion. AC 3. Criterion. |
```

Priority definitions:
- **P0 (Must Have)**: The feature cannot ship without these. They represent the minimum viable version. Ask: "If we cut this, does the feature still solve the core problem?" If no, it is P0.
- **P1 (Should Have)**: Significantly improves the experience but the core use case works without them. High-priority fast follows after launch.
- **P2 (Future Consideration)**: Explicitly out of scope for v1 but documented so architecture supports them later. Prevents accidental decisions that make them hard.

Always sort: P0 first, then P1, then P2. Within each group, order by product flow or dependency.

#### Requirement guidelines

- One row = one buildable behavior. If acceptance criteria cover unrelated behaviors, split the row.
- Start with a product behavior, not an implementation task.
- Keep the requirement statement scannable (1-2 lines).
- Note dependencies on other requirements (e.g., "Depends on R3").
- Flag cross-team dependencies explicitly.

#### Acceptance criteria guidelines

**Write exhaustive acceptance criteria.** Every requirement should have enough ACs that a QA engineer can write complete test cases from them alone. Do not hold back for brevity.

Each acceptance criterion must be:
- **Testable**: Can be verified with a specific test.
- **Specific**: States exact conditions and expected outcomes.
- **Observable**: Describes visible system behavior, not internal implementation.

Cover all of these for each requirement where applicable:
- **Happy path**: The standard successful flow.
- **Edge cases**: Boundary conditions, empty states, max limits.
- **Error cases**: What happens when something fails.
- **Negative cases**: What should NOT happen.
- **Data integrity**: What data is created, preserved, or removed.
- **Permissions**: Who can and cannot perform this action.
- **Concurrency**: What happens with simultaneous actions.

Format in-table: "AC 1. [criterion]. AC 2. [criterion]."

For complex requirements (4+ ACs), use a detail block after the table:

```markdown
#### R4 Detail

- AC 1. Given an admin clicks "Unpublish" on a published roleplay, the system shows a confirmation modal.
- AC 2. The modal displays the count of learners with in-flight attempts.
- AC 3. The modal states: in-flight attempts can be completed, new access is removed, the roleplay returns to Draft.
- AC 4. The "Confirm Unpublish" button is disabled until the admin checks a confirmation checkbox.
- AC 5. After confirming, the roleplay status changes to Draft within 5 seconds.
- AC 6. The roleplay is immediately removed from the learner-facing catalog.
- AC 7. Learners with in-flight attempts can still access and complete their attempt.
- AC 8. New learners who navigate to the roleplay URL see a "Not Available" message.
- AC 9. The admin sees a success toast: "Roleplay unpublished. [X] in-flight attempts will be allowed to complete."
- AC 10. The audit log records the unpublish action with admin name, timestamp, and in-flight count.
```

Bad acceptance criteria:

```markdown
The feature should work properly and be user-friendly.
```

Good acceptance criteria:

```markdown
AC 1. The confirmation modal loads in under 500ms.
AC 2. The in-flight count is accurate to within 1 minute of real-time data.
AC 3. If the admin cancels, no state change occurs and the roleplay remains Published.
```

Avoid vague words: "clearly", "properly", "seamlessly", "intuitively", "robustly", "user-friendly". Every one of these should be replaced with a specific, testable behavior.

### Goals

3-5 outcome-based goals. Goals explain why these requirements were chosen.

Guidelines:
- Start each goal with a user or customer outcome.
- Distinguish between user goals (what users get) and business goals (what the company gets).
- Goals are outcomes, not tasks: "Preserve all historical data after unpublish" not "Add backend support."
- Each goal should answer: "How will we know this succeeded?"

### Non-Goals

5-10 explicit exclusions. The full PRD is more thorough here than the crisp version.

For each non-goal, briefly explain why it is out of scope:

```markdown
1. **Bulk unpublish across multiple roleplays** -- Low request volume; adds UI complexity. Revisit if demand increases.
2. **Scheduled or automatic unpublish** -- Separate initiative; requires a scheduling system that does not exist yet.
3. **Learner-facing notifications** -- Out of scope for v1. In-flight learners are handled silently.
```

Non-goals prevent scope creep during implementation and set expectations with stakeholders.

### Expected End State

2-3 paragraphs. Paint the picture of what [Product Name] experience looks like after this ships, from both the user's and the business's perspective.

Answer:
- What can each user type do after this ships?
- What workflows are now possible that were not before?
- What customer problem is now solved?
- What should remain true over time (data integrity, backwards compatibility)?

### Success Metrics

Define how you will measure whether this feature succeeded.

#### Leading Indicators (days to weeks post-launch)

```markdown
| Metric | Target | Measurement |
|--------|--------|-------------|
| Adoption rate | 40% of admins with published roleplays use unpublish within 30 days | Product analytics |
| Task completion rate | 95% of unpublish attempts complete successfully | Error logs |
| Time to complete | Under 30 seconds from click to confirmation | Session recording |
```

#### Lagging Indicators (weeks to months)

```markdown
| Metric | Target | Measurement |
|--------|--------|-------------|
| Roleplay content freshness | 20% reduction in stale published roleplays within 90 days | Content age report |
| Support ticket reduction | 50% fewer "how do I retire a roleplay" tickets within 60 days | Zendesk |
```

Guidelines:
- Targets should be specific: "40% adoption within 30 days" not "high adoption."
- Base targets on comparable features, benchmarks, or explicit hypotheses.
- Define a "success" threshold and a "stretch" target when possible.
- Specify the measurement method and evaluation window.

### Open Questions

Questions that need answers before or during implementation.

```markdown
| # | Question | Owner | Blocking? | Notes |
|---|----------|-------|-----------|-------|
| Q1 | Should unpublished roleplays be restorable to Published? | PM | Yes | Affects whether unpublish is reversible or one-way. |
| Q2 | Do we need an admin audit log entry for unpublish? | Engineering | No | Can add post-launch if needed. |
| Q3 | What happens to scheduled assignments that reference an unpublished roleplay? | PM + Engineering | Yes | Need to decide: cancel, skip, or error. |
```

- Tag each with the owner who should answer.
- Distinguish blocking (must answer before starting) from non-blocking (can resolve during implementation).
- Include any assumptions you made in the PRD and flag them for validation.

### Timeline & Dependencies

- Hard deadlines (contractual commitments, events, compliance dates).
- Dependencies on other teams, features, or infrastructure.
- Suggested phasing if the feature is too large for one release.
- Risks that could affect the timeline.

### Technical Considerations (CONDITIONAL)

**Only include this section if you have access to the codebase or the user provides technical context.** Do not speculate about architecture, schemas, or APIs without evidence.

When included, this section covers:

#### Modules Affected
Which parts of the codebase will be built or modified. List specific modules, services, or components.

#### Interface Changes
APIs, endpoints, or internal interfaces that will be created or modified. Include request/response shapes when known.

#### Schema Changes
Database schema additions or modifications. Include table names, column definitions, and migration considerations.

#### API Contracts
New or modified API endpoints with method, path, request body, response shape, and error codes.

#### Architectural Decisions
Key technical decisions and their rationale. Use ADR (Architecture Decision Record) format when helpful:
- Decision: What we decided.
- Context: Why this decision was needed.
- Alternatives considered: What else we evaluated.
- Consequences: What this decision implies.

#### Migration & Rollback
Data migration strategy, backwards compatibility considerations, and rollback plan.

If the user does not provide codebase access or technical context, end the PRD after Timeline & Dependencies and note: "Technical Considerations will be added after engineering review."

## Priority Rules

- P0: Must have for the release to solve the core customer problem.
- P1: Should have for a complete, polished, or lower-risk release, but not required for the core workflow.
- P2: Could have if time allows. Useful enhancement, not required for launch.

If everything is P0, nothing is P0. Challenge the list. Most PRDs should have fewer P0s than total requirements.

If the user provides priorities, preserve them unless they conflict with core product logic.

## Engineering Readability Rules

Optimize for fast engineering review:

- Put buildable behavior in the Requirements table.
- Put test conditions in Acceptance Criteria (as many as needed -- no cap).
- Put scope boundaries in Non-goals.
- Put customer intent in Problem Statement, Goals, and Expected End State.
- Put measurement in Success Metrics.
- Put unresolved decisions in Open Questions.
- Put architecture in Technical Considerations (only with codebase access).
- Do not bury requirements in paragraphs.
- Do not mix unrelated requirements in one row.

## Quality Checklist

Before finalizing:

- Title is only the feature or change name.
- Problem Statement covers what, who, why, why now, and evidence.
- User Stories are grouped by persona and cover happy path + edge cases.
- Requirements are in a table, sorted P0 > P1 > P2.
- Every acceptance criterion is testable and specific -- no vague language.
- No acceptance criteria merely restate the requirement.
- Goals are outcome-based.
- Non-goals include rationale for each exclusion.
- Expected End State paints the complete post-ship picture.
- Success Metrics have specific targets and measurement methods.
- Open Questions are tagged with owner and blocking status.
- Technical Considerations are only present when codebase access exists.
