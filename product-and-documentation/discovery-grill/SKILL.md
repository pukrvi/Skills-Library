---
name: discovery-grill
description: Interactive questioning system that probes the user on up to 20 critical product decisions before writing a PRD. Each question offers 4 contextual options plus "Ask me later" and free text. Tracks deferred questions and reminds the user in chat after the document is delivered. Can run standalone for early-stage ideation or as Step 0 inside prd-crisp and prd-full.
---

# PRD Discovery Grill

## Purpose

Before writing a single line of a PRD, grill the user on the most important design and product decisions. This replaces the old "ask 3-5 questions" step with a structured, guided questionnaire of up to 20 questions, asked **one batch at a time** with up to 4 questions per round.

The goal: reach shared understanding on every critical dimension **before** generating the document, so the PRD comes out right the first time instead of needing multiple revision rounds.

## When to Trigger

This skill runs as **Step 0** in both `/prd-crisp` and `/prd-full`, immediately after loading the PRD skill and understanding the user's initial feature input. It runs BEFORE any content generation.

## How It Works

### Phase 1: Analyze the Input

1. Read the user's initial input (feature name, problem statement, notes, file, etc.)
2. Identify which **product area** the feature falls into. If the user has supplied product categories, use those. Otherwise start from these generic SaaS categories:
   - Digital Sales Room (DSR)
   - Learning & Coaching (LMS)
   - Meeting Prep
   - AI assistant
   - AI Role Play
   - Content Management (CMS)
   - Analytics & Reporting
   - Admin & Settings
   - Cross-cutting / Platform
3. Load relevant product knowledge only from the user's supplied materials or an explicitly available product-knowledge skill. If no product knowledge exists, ask category-neutral questions and mark product-specific assumptions.
4. From the input + product knowledge, generate up to 20 questions — ranked by importance — that will resolve the key unknowns.

### Phase 2: Build the Question Bank

Select from these **question categories** based on what the user's input leaves unresolved. Not every category applies to every feature — skip categories where the answer is obvious from the input.

#### Category 1: Problem & User (always ask)
1. **Primary user persona** — Who feels this pain most? (Enablement Leader / VP Sales / Rep / Admin / Learner)
2. **Problem severity** — How critical is this? (Blocking revenue / Causing churn / Efficiency loss / Nice-to-have)
3. **Problem evidence** — Where is the signal coming from? (Customer requests / Support tickets / Internal observation / Competitive pressure)
4. **User volume** — How many users will this affect? (All users / Specific segment / Power users only / New users only)

#### Category 2: Scope & Boundaries
5. **Feature scope** — What's the smallest version that solves the core problem? (MVP with one flow / Full feature / Platform capability / Config option)
6. **Scope boundaries** — What should we explicitly exclude from v1? (Multi-tenant / Mobile / API / Offline)
7. **Build vs. integrate** — Should we build this or integrate an existing tool? (Build in-house / Third-party embed / Hybrid / Evaluate both)
8. **Platform impact** — Does this touch other pillars? (Standalone / Needs CMS data / Needs LMS data / Cross-pillar)

#### Category 3: Technical & Architecture
9. **Data requirements** — What data does this feature need? (CRM data / Content metadata / User behavior / New data source)
10. **Integration surface** — Which integrations matter for this feature? (Salesforce / Slack / Chrome Extension / None)
11. **AI involvement** — Does this feature use AI? (Core AI feature / AI-enhanced / AI-optional / No AI)
12. **Performance requirements** — What's the latency/scale expectation? (Real-time / Near real-time / Batch OK / Not latency sensitive)

#### Category 4: Business & GTM
13. **Target customer segment** — Who is this for? (All customers / Enterprise only / Mid-market / New prospects)
14. **Packaging impact** — How does this affect plans? (Free for all / Premium add-on / Enterprise only / Usage-based)
15. **Competitive driver** — Is this a response to competition? (Table-stakes catch-up / Differentiator / Unique to us / Not competitive)
16. **Revenue impact** — How does this drive revenue? (Reduces churn / Drives expansion / Wins new deals / Internal efficiency)

#### Category 5: Success & Measurement
17. **Primary success metric** — What's the #1 metric? (Adoption rate / Task completion time / Revenue impact / NPS change)
18. **Measurement readiness** — Can we measure this today? (Instrumented already / Needs new tracking / Needs analytics work / Can't measure directly)
19. **Success timeline** — When should we evaluate? (1 week post-launch / 30 days / 1 quarter / 2 quarters)

#### Category 6: Timeline & Dependencies
20. **Urgency** — What's driving the timeline? (Customer commitment / Competitive pressure / Internal roadmap / No hard deadline)

### Phase 3: Ask the Questions

Use the host environment's interactive question tool when available; otherwise ask in chat. Ask questions in batches of up to 4 at a time. For each question:

- **4 contextual options**: Drawn from the question bank above, adapted to the specific feature. Options should be concrete and informed by available product context.
- **Multi-select vs single-select**: Set `multiSelect: true` when the user could reasonably pick more than one answer. Set `multiSelect: false` (or omit) when exactly one answer is expected. See the classification below.
- **"Ask me later" as Other**: The user can always type a custom answer via the built-in "Other" text box. When phrasing questions, remind users they can type "Ask me later" in "Other" to defer. Do NOT waste an option slot on "Ask me later" — the Other text box handles it.

- **Question ordering**: Ask the most impactful questions first. Questions in Category 1 (Problem & User) almost always come first. Then prioritize based on what the specific feature needs most clarity on.

- **Adaptive questioning**: After each batch of answers, reassess. If the user's answers resolve downstream questions, skip them. If answers raise new questions, add them. The 20-question cap is a maximum, not a target — stop when you have enough clarity.

**Stop conditions**:
- All critical unknowns are resolved
- 20 questions asked
- User says "enough questions, just write it" (respect this immediately)

### Phase 4: Compile Discovery Summary

After all questions are answered, compile a **Discovery Summary** — a structured brief that feeds directly into the PRD generation step. This summary is NOT shown to the user as a separate artifact; it's used internally to inform the PRD.

Format:
```
## Discovery Summary
- **Feature**: [name]
- **Product Area**: [area]
- **Primary Persona**: [answer]
- **Problem**: [synthesized from answers]
- **Scope**: [v1 boundaries]
- **Key Decisions**: [list of resolved decisions]
- **Deferred Questions**: [list of "Ask me later" items with question numbers]
```

### Phase 5: Track Deferred Questions

Maintain a list of every question the user answered "Ask me later" to. After the PRD document is generated and delivered, remind the user in chat:

```
📋 **Deferred questions to revisit:**

1. [Question text] — you said "Ask me later"
2. [Question text] — you said "Ask me later"
...

These weren't needed to write the draft, but resolving them will strengthen the PRD. Want to tackle any of them now?
```

This reminder goes in **chat only** — never in the generated .docx.

## Adapting Questions to Product Area

The question bank above provides templates. When asking, adapt the options to the specific product area:

**Example — DSR feature:**
- Q1 options: "Sales rep sharing rooms" / "Buyer viewing content" / "Sales manager tracking" / "Enablement leader configuring"
- Q10 options: "Salesforce deal sync" / "Slack notifications" / "Chrome Extension access" / "Calendar integration"

**Example — LMS feature:**
- Q1 options: "Learner consuming courses" / "Enablement leader building courses" / "Manager tracking progress" / "Admin configuring paths"
- Q11 options: "AI Course Builder" / "AI assessment generation" / "AI-powered recommendations" / "No AI needed"

**Example — AI assistant feature:**
- Q1 options: "Rep asking questions" / "Enablement leader curating sources" / "Admin managing agents" / "Buyer in DSR"
- Q9 options: "CRM opportunity data" / "Approved content library" / "Call transcripts" / "Customer-specific data"

## Rules

1. **Never skip the grill.** It runs before any PRD content is written, every time.
2. **One batch at a time.** Ask up to 4 questions per round. Wait for answers before the next batch.
3. **Adapt, don't recite.** Options must be specific to the feature, not generic. Use product knowledge.
4. **Multi-select by default for non-exclusive questions.** Use `multiSelect: true` whenever answers aren't mutually exclusive. See the classification table in Phase 3.
5. **"Ask me later" goes in Other.** Don't use an option slot — the user types "Ask me later" in the built-in Other text box. Track these for the deferred reminder.
6. **Respect the user's pace.** If they say "enough" or "just write it," stop immediately and proceed with what you have.
7. **Deferred reminder is mandatory.** If any questions were deferred, the chat reminder after doc delivery is required.
8. **20 is the cap, not the target.** Smart questioning means asking fewer, better questions. If 8 questions give you clarity, stop at 8.
9. **For prd-crisp**: Lean toward fewer questions (8-12). The doc is 2 pages — you don't need 20 questions.
10. **For prd-full**: Go deeper (12-20). The full PRD has more sections that need input.
11. **Infer when you can.** If the answer is obvious from context, state your inference as part of the question: "I'm assuming X — is that right?" and make that the first (recommended) option.
