---
name: alignment-loop
description: >-
  Reach genuine shared understanding on a complex, underspecified, or multi-source decision by asking the
  user clarifying questions in iterative BATCHES — surfacing every decision point and every place the
  sources conflict, processing each batch of answers before forming the next, and ending with a single
  consolidated decisions document that becomes the source of truth. Use when the user wants to align or
  "get on the same page" before building, brainstorm/lock decisions, reconcile two or more conflicting
  plans / specs / docs, be "grilled" with questions before a big change, de-risk an ambiguous requirement,
  or turn scattered intent into a locked decisions record. Trigger phrases: "align", "get on the same
  page", "ask me as many questions as you need", "in batches", "reconcile these plans", "shared
  understanding", "decision doc", "lock the decisions", "brainstorm this with me".
---

# Alignment Loop

A method for converging with a user on a complex decision through structured, iterative questioning, then
capturing the result as a durable decisions document. The goal is not to ask a quota of questions — it is
to leave nothing ambiguous and nothing assumed.

## When to use

- A request is big and underspecified (a migration, an architecture, a product pivot, a rebrand, a major refactor).
- Two or more source documents/plans must be reconciled and they disagree.
- The user explicitly wants to be questioned, to brainstorm, or to "get on the same page" before any building.
- Decisions made now have expensive consequences if wrong.

Do NOT use for quick factual questions, single obvious choices, or tasks where a sensible default is clearly fine.

## Core principles

1. **Ingest first, ask second.** Read *every* relevant source fully before the first question. Quote/track specifics; don't paraphrase from memory.
2. **Surface, don't smooth.** Where sources conflict, name the conflict and make the user choose. Where something is stated but consequential, confirm it anyway — explicit beats assumed.
3. **Batches, not a firehose.** Ask a small batch, then **process the answers before forming the next batch**. Later questions are shaped by earlier answers (and by new ambiguities the answers create).
4. **Recommend, but let them decide.** Lead each option set with a recommended choice and say why; give real pros/cons and trade-offs, not neutral mush.
5. **Catch contradictions.** If an answer conflicts with an earlier answer (or with a source), flag it and ask the user to reconcile — don't silently pick one.
6. **Be the expert on request.** When the user says "I'm not sure / give me more info," provide a crisp pros/cons or recommendation, then re-ask in the next batch.
7. **Verify present-day facts.** If a decision hinges on something that changes over time (pricing, platform policy, model availability, law), search the web before framing the question — don't anchor the user on stale assumptions.
8. **No fixed limit.** Keep going until shared understanding is genuinely reached. Don't stop early; don't pad.

## Workflow

1. **Read all sources.** Open every doc/file/spec in scope. For codebases, read the real models/configs so options are grounded, not invented.
2. **Build the decision inventory.** List every decision that must be made. Tag each: (a) sources agree, (b) **sources conflict**, (c) stated-but-worth-confirming, (d) unstated/open. Conflicts and keystone decisions go first — answers to them reshape everything downstream.
3. **Ask in batches.**
   - Use the question UI's multiple-choice tool. It caps at **4 questions per call** — so batch in groups of up to 4 (tell the user that's why, if they asked for 5).
   - Each option: a clear label + a description with the trade-off. Put the recommended option first and mark it. Where a source recommends something, say which.
   - Order keystone/conflicting decisions first; defer detail until the forks they depend on are settled.
4. **Process each batch before the next.** Restate what was locked in one tight line. Flag any contradiction with earlier answers or sources and resolve it. If the user asked for "more info," give the expert take, then re-ask that item next batch. Let the new answers generate the next batch's questions.
5. **Converge.** When the inventory is exhausted, write the **decisions document** (below) and present it as the alignment checkpoint. Explicitly invite corrections and ask whether any decision area was missed — if so, run more batches.
6. **(Optional) Propagate.** On confirmation, record the decision where the team keeps decisions, and update any sibling docs so nothing left in the repo conflicts with what was just decided. If a doc is too large/branded to safely auto-rewrite, add a superseding banner instead of silently editing it.

## The decisions document (the output artifact)

A single markdown file that becomes the source of truth. Structure:

- **Header** — date, status (e.g., "AGREED — pending sign-off"), and the sources reconciled.
- **Decisions by theme** — each decision stated plainly, with one line of rationale.
- **Resolved divergences** — a table: topic | source A said | source B said | what we chose | why.
- **Reversed/ superseded decisions** — anything this overturns from prior locked decisions, named explicitly so nothing changes "by accident."
- **Open / TBD** — what was deliberately deferred (and why), so gaps are visible, not hidden.
- **Follow-ups** — concrete actions these decisions trigger.

Keep it descriptive enough to stand alone months later, but scannable.

## Anti-patterns

- Asking everything up front in one giant list (defeats the point — later questions depend on earlier answers).
- Burying a real conflict by picking the "obvious" side without asking.
- Accepting a contradictory pair of answers without flagging it.
- Stopping at a question quota instead of at actual understanding.
- Producing only a chat summary with no durable artifact.
- Rewriting large branded/marketing docs wholesale when a superseding banner is safer.
