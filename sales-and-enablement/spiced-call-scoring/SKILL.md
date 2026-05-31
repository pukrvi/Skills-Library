---
name: spiced-call-scoring
description: Score b2b sales call transcripts using spiced buyer qualification and call management rubrics. Use when you need evidence based scoring coaching feedback and next step guidance from a discovery call transcript. Triggered by call scoring spiced evaluation discovery call feedback coaching.
---

# SPICED Call Scoring

## Use when
- You have a discovery call transcript and want an evidence based SPICED score plus coaching.
- You need a strict rubric that requires buyer quotes for qualification points.
- You want a structured output report that managers can use immediately after a call.

## Do not use when
- You do not have a transcript or the transcript is incomplete.
- You need to analyze calls where the buyer did not speak much and you would need to infer.
- You want sentiment analysis without evidence quotes.

## Inputs required
- Full call transcript with speaker labels.
- Call context: call type, scheduled duration, buyer role if known, seller role if known.
- Optional: timestamps, talk time metrics from Gong or similar.

## Workflow steps
1. Open INPUTS_AND_PREP.md and normalize the transcript and metadata.
2. Apply EVIDENCE_RULES.md to set the scoring boundary.
3. Score SPICED using SPICED_RUBRIC.md and record direct buyer quotes for every point.
4. Score call management using CALL_MANAGEMENT_RUBRIC.md and record rep and buyer evidence.
5. Assemble the final report using OUTPUT_FORMAT.md.
6. Produce coaching and next steps using COACHING_PLAYBOOK.md.
7. Offer follow up deeper paths using FOLLOW_UP_PATHS.md.
8. Run QUALITY_ASSURANCE.md before delivering.

## Reference map
- INPUTS_AND_PREP.md: required inputs and transcript normalization.
- EVIDENCE_RULES.md: strict evidence rules and tie break rules.
- SCORING_OVERVIEW.md: how totals are computed and interpretation bands.
- SPICED_RUBRIC.md: qualification scoring criteria and evidence requirements.
- CALL_MANAGEMENT_RUBRIC.md: execution scoring criteria and evidence requirements.
- OUTPUT_FORMAT.md: exact report structure and tables.
- COACHING_PLAYBOOK.md: coaching guidance and how to write improvements.
- FOLLOW_UP_PATHS.md: option A and option B deeper analysis prompts.
- QUALITY_ASSURANCE.md: validation checklist to avoid over scoring and hallucination.
