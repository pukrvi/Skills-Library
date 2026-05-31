# Business Case Creator Workflow

## 1. Normalize Deal Context

Create a working brief:

- Company, segment, team, and business model if known.
- Primary champion, economic buyer, technical buyer, users, blockers, and approvers.
- Current workflow, tools, process ownership, and constraints.
- Business initiative, trigger event, timeline, buying process, and budget context.
- Proposed solution and any known pricing or implementation assumptions.

Separate source evidence from interpretation. If sources conflict, prefer transcripts and direct buyer statements over CRM summaries, then note the conflict.

## 2. Current State and Pain Analysis

Extract:

- Current process: who does what, where work happens, handoffs, manual steps, and dependencies.
- Pain points: delays, missed revenue, rework, risk, compliance, poor visibility, inconsistent execution, or customer impact.
- Impact: frequency, severity, affected teams, opportunity cost, and executive relevance.
- Urgency: why now, what changed, deadline, initiative, renewal, audit, board priority, or growth constraint.

For each pain, capture:

| Pain | Evidence | Impact | Stakeholders | Evidence label |
| --- | --- | --- | --- | --- |
| What is broken | Quote or source note | Business consequence | Who cares | VERIFIED/ASSUMPTION/FALLBACK |

## 3. Decision Criteria and Risk

Map the buying logic before recommending anything.

### Option Set

Compare the realistic paths:

- Do nothing or maintain status quo.
- Build internally.
- Extend existing tools.
- Buy the recommended solution.
- Hybrid or phased path if needed.

### Decision Criteria

Classify criteria:

- `P1`: Must-have criteria that can block the deal.
- `P2`: Important criteria that shape preference.
- `P3`: Nice-to-have criteria that add confidence.

Examples: time to value, integration fit, security, total cost, admin effort, user adoption, executive reporting, global scale, compliance, analytics, and implementation risk.

### Risk Register

Capture risks in this format:

| Risk | Type | Why it matters | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| Example risk | Commercial, operational, technical, legal, adoption, change management | Business consequence | Proof, pilot, stakeholder action, or contract term | Person or role |

## 4. Value Quantification

Use conservative math and show the work.

### Cost of Inaction

Use:

```
cost_of_inaction = frequency * unit_impact * affected_population * time_period
```

Adapt the variables to the case. Examples:

- Hours wasted = repeated task frequency * minutes per task * number of people.
- Pipeline risk = affected pipeline * win-rate impact.
- Lost productivity = hours wasted * loaded hourly cost.
- Delay cost = opportunity value * delay duration.
- Quality risk = issue frequency * remediation cost.

### Value Categories

Separate value into:

- Hard savings: labor cost, vendor consolidation, avoided penalties, reduced rework, reduced support cost.
- Revenue impact: faster cycles, higher conversion, larger deal size, retention, expansion.
- Risk reduction: compliance, security, legal exposure, customer trust.
- Strategic value: visibility, standardization, scale, faster onboarding, decision quality.

Label each input:

| Input | Value | Source | Label | Validation needed |
| --- | --- | --- | --- | --- |
| Example: affected reps | 42 | CRM note | VERIFIED | None |
| Example: minutes lost per call | 10 | Inferred from transcript | ASSUMPTION | Confirm with manager |

If numbers are weak, provide ranges and explain what discovery would make the model reliable.

## 5. Build the Business Case

Use the Five Agreements:

1. Why change?
2. Why now?
3. Why this path?
4. Why this solution or vendor?
5. Why this next step?

The business case should include:

- Executive summary.
- Current-state problem.
- Business impact.
- Options considered.
- Recommended path.
- Value model.
- Success metrics.
- Risks and mitigations.
- Implementation or next-step plan.
- Validation log.

Use `references/executive-memo-template.md` for structure.

## 6. Coach the Champion

Create internal enablement that the champion can use without extra explanation:

- Forwardable email.
- Stakeholder-specific talk tracks.
- Objection responses.
- Meeting agenda.
- Questions the champion should ask internally.
- "What to avoid saying" when the evidence is not strong enough.

Keep internal coaching separate from buyer-forwardable content when it includes sensitive notes, deal strategy, or assumption quality warnings.

## 7. Assumption and Validation Log

Audit the final case:

| Claim | Label | Evidence | Risk if wrong | Validation question | Owner |
| --- | --- | --- | --- | --- | --- |
| Claim being made | VERIFIED/ASSUMPTION/FALLBACK | Source or rationale | Low/medium/high | Exact question to ask | Role |

Flag high-risk assumptions that affect budget, urgency, executive priority, or vendor preference.

## 8. Score and Gap Plan

Score the case using `references/scorecard.md`. If any section scores below 4, include a gap plan:

- What is missing.
- Why it matters.
- The next best question.
- Who should answer it.
- Whether the case is still safe to forward.
