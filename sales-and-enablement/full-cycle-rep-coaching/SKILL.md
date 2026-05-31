---
name: full-cycle-rep-coaching
description: >
  Analyze a sales rep's recent meeting performance, identify skill gaps, and auto-assign targeted training.
  Chains together transcript analysis, competency scoring, and LMS course assignment into one coaching workflow.
  Use this skill whenever someone asks to coach a rep, review rep performance, analyze a rep's calls,
  identify training needs, build a coaching plan, or assess sales readiness. Also trigger when a manager
  says things like "how is [rep] doing", "coaching plan for [rep]", "what does [rep] need to work on",
  "prep for my 1:1 with [rep]", or "coaching snapshot for my team".
---

# Full-Cycle Rep Coaching Loop

You are building a comprehensive coaching analysis for a sales rep. This skill combines available meeting transcripts, a structured competency framework, and optional training assignment into a single workflow.

The goal is to replace gut-feel coaching with evidence-based coaching. Every recommendation you make should be traceable to a specific moment in a specific call.

## Before you start

Read the competency framework at `references/competency_framework.md` within this skill's directory. This defines the 6 competencies you'll score, the rubrics for each level, and the priority order for training recommendations.

## Step 1: Identify the rep

Check the available user directory, people resource, or identity lookup tool. Search it for the rep name the manager mentioned.

**If found:** Note the user ID and proceed to Step 2. Confirm: "I found [Name] ([email]). Pulling their recent calls now."

**If NOT found in the user directory:** This doesn't mean they don't exist. Some users appear as meeting participants but aren't in the primary user list. Try these in order:

1. **Search meetings directly** - use the available meeting search tool and scan the internal participants list for a name match. If you find them, you can proceed without a user ID by filtering meetings where they appear. Note their email from the participant data.
2. **Suggest similar names** from the user directory (fuzzy match - a short name might match a full legal name, or a full name might appear as an initial plus last name)
3. **Ask for email** — "I couldn't find [name] in the user directory. Can you share their email?"
4. **Use a user-resolution tool** - as a fallback, resolve the person by name or email if such a tool is available
5. **Offer alternatives** - list a few active reps from the user directory and offer to analyze one of them
6. **Offer manual coaching** - walk the manager through the competency framework for observation-based coaching

The key principle: never fabricate data, but exhaust every lookup path before telling the manager you can't find someone. A rep who shows up in meetings definitely exists — you just need to find them through a different path.

## Step 2: Gather recent meetings

Search for the rep's meetings with transcripts using the available meeting or conversation-intelligence system. If your environment exposes a meeting search tool, use transcript filtering where possible. Example:

```
meeting_search(rep=<rep_id_or_email>, has_transcript=true, limit=10)
```

**Always use `has_transcript=true`** — this filters to only meetings with recorded, transcribed calls. Without it, you'll get calendar events with no analyzable content.

Select the **3-5 most recent** meetings from the results. If only 2 are available, that's fine — you can still identify patterns and score competencies, just note that trend detection will be less reliable. If only 1 is available, do a deep-dive single-call analysis and be upfront with the manager about the limited sample. For each meeting, note:
- Meeting ID (you'll need this for transcript retrieval)
- Subject/title
- Date
- Account/opportunity name (if linked)
- Internal and external participants

**If no transcripts are found:**
- First, try a broader search without the rep filter - maybe the rep participated but isn't tagged. Search recent transcribed meetings and scan for the rep's name in participants.
- If still nothing, tell the manager: "No recorded calls with transcripts found for [rep]. This might mean call recording isn't enabled for them. Would you like me to help you set up a manual competency assessment instead?"

## Step 3: Analyze each transcript

For each meeting, fetch the transcript:
```
get_transcript(meeting_id=<meeting_id>)
```

The transcript is an array of timestamped speaker lines with `speaker`, `participant_type` ("seller" or "buyer"), `text`, and timing data.

### Quantitative analysis

Save the transcript to a temp file and run the analysis script:
```bash
python <this_skill_directory>/scripts/analyze_transcript.py \
  --transcript <transcript_json_file> \
  --output <analysis_output_file>
```

This extracts: talk ratio, question types (open vs. closed), paraphrasing instances, objection moments, feature-dump vs. value-connection signals, and next-step quality.

### Qualitative scoring

The script gives you signals. Your job is judgment. Read the actual conversation and score each of the 6 competencies (1-5) using the rubrics in the competency framework.

For every score, you MUST provide:
- **Score** (1-5)
- **Evidence quote** — a specific thing the rep said or did
- **Timestamp** — when it happened
- **Assessment** — what was good or what should change

Save per-call scores as JSON:
```json
{
  "call_id": "<meeting_id>",
  "account_name": "<from meeting data>",
  "call_date": "<from meeting data>",
  "talk_ratio": {"seller_pct": 65.2, "buyer_pct": 34.8},
  "scores": {
    "discovery_quality": 3,
    "active_listening": 4,
    "objection_handling": 2,
    "value_articulation": 3,
    "next_step_setting": 4,
    "talk_ratio_score": 3
  },
  "evidence": {
    "discovery_quality": "At 3:42, asked 'What challenges are you facing...' — good opener, but at 4:15 when buyer mentioned budget pressure, jumped to pricing instead of exploring impact.",
    ...
  }
}
```

## Step 4: Aggregate into a coaching profile

Run the aggregation script:
```bash
python <this_skill_directory>/scripts/score_aggregator.py \
  --scores <score_file_1> <score_file_2> ... \
  --output <profile_output_file>
```

This produces recency-weighted averages, strength/gap classification, trends, and training keyword mapping.

Add your narrative: What's the story of this rep? Are they improving? Is there one root cause (like talk ratio) driving multiple gaps? What's the single most impactful thing they could change?

## Step 4b: Enrich with deal context (when available)

If the meetings are linked to opportunities (you'll see `opportunity_id` and `opportunity_name` in the search results), pull the deal context:

```
get_deal_or_opportunity(opportunity_id=<id>)
```

This lets you connect call behaviors to deal outcomes. For example: "In the example deal (currently at Negotiation stage, $50K), the rep's weak discovery in the Feb 20 call may explain why the deal hasn't advanced - they don't fully understand the buyer's constraints."

This is optional but powerful — it turns coaching from "improve your skills" into "improve your skills to move these specific deals forward."

## Step 5: Match gaps to training

Use the available course catalog, LMS resources, roleplay library, or enablement content search to find training that matches the rep's gaps.

### Verification requirement

This is important: you MUST cite real courses, lessons, or roleplays from the connected LMS or provided course catalog. Here's the process:

1. For each growth area, identify the relevant keywords from the competency framework's training map
2. Search the course catalog for courses whose name or description contains those keywords
3. Search the roleplay or practice library similarly
4. Select **2-3 items total** across all gaps

For each recommendation, cite:
- **Exact name** as it appears in the resource (copy-paste, don't paraphrase)
- **ID** from the resource (this is how assignments work)
- **Why** it maps to this gap (one sentence)
- **Estimated time** if available in the resource

**If no courses match a gap:** Be transparent. Say: "No available course currently addresses [competency]. I recommend: [specific custom exercise]." For example, for a talk-ratio gap: "Record your next 3 discovery calls and review them with a focus on counting your questions vs. statements. Aim for a 2:1 ratio."

Do NOT recommend courses by name that you didn't find in the available course, lesson, or roleplay catalog. Made-up course names erode trust with the manager.

## Step 6: Present and get confirmation (REQUIRED — do not skip)

Before assigning any training, present the full plan using this structure:

---

**Coaching Plan for [Rep Name]**

**Summary:** [2-3 sentences on overall performance across X calls]

**Strengths:**
- [Competency] (X/5): "[Evidence quote from Call with Account]"

**Growth Areas:**
- [Competency] (X/5): "[Evidence quote from Call with Account]"

**Recommended Training:**
1. [Course Name] (ID: xxx) — addresses [gap]
2. [Roleplay Name] (ID: xxx) — practice [skill]

**1:1 Coaching Questions:**
1. [Moment-specific question: "In your call with [Account] on [date], when [specific thing happened], what were you thinking? What would you do differently?"]
2. [Growth area question: "What's your approach to [weak competency]? Walk me through how you typically handle [specific scenario from the gap]."]
3. [Self-assessment question: "If you could replay one call from this week, which one and why?"]

See `references/coaching_questions.md` for 5 proven question patterns (Replay the Moment, Alternative Path, Self-Assessment, Pattern Recognition, Skill Transfer) with examples. Always tie questions to real quotes, timestamps, and calls — never write generic questions like "How do you think your calls are going?"

**How to write good coaching questions:** Tie each question to a real moment from a real call. Generic questions ("How do you think your calls are going?") let the rep give generic answers. Specific questions ("When the buyer mentioned budget at 12:34, you moved to pricing - what was your read on the situation?") force genuine reflection. The best coaching questions make the rep re-live the moment and discover the insight themselves.

**Should I assign these courses to [Rep Name]? I'll only proceed after your confirmation.**

---

Wait for explicit "yes" or equivalent before proceeding to Step 7.

## Step 7: Assign training

After confirmation, assign each approved course using the available LMS assignment tool. For example:
```
assign_training(training_id=<id>, user_id=<rep_user_id>)
```

Report what was assigned with the course name and ID.

## Step 8: Generate formal document (if requested)

Only if the manager wants a document - use the available document-generation or page-generation tool for a rich coaching report, or present the structured analysis directly.

## Handling multiple reps

When the manager asks for coaching across multiple reps:

1. Run Steps 1-4 for each rep (you can process them in parallel if using subagents)
2. Present a **summary table** first:

| Rep | Overall | Top Strength | Key Growth Area | Priority Action |
|-----|---------|-------------|-----------------|-----------------|
| Rep A | 4.2/5 | Discovery (4.5) | Objection Handling (2.8) | Roleplay practice |
| Rep B | 3.1/5 | Next Steps (4.0) | Discovery (2.5) | Discovery course |

3. Below the table, give each rep a **3-4 line snapshot**: one strength with evidence, one growth area with evidence, one conversation starter
4. Only go deeper on specific reps if the manager asks

## Handling managers who ask about specific concerns

When the manager mentions a specific concern (e.g., "losing deals at negotiation"), weight your analysis toward the relevant competencies. For negotiation concerns, focus especially on objection handling, value articulation, and next-step setting. Still score all 6 competencies, but lead your report with the ones that address the manager's stated concern.

## Important principles

- **Evidence over opinion:** Every score traces to a transcript moment. No evidence = no claim.
- **Lead with strengths:** ~40% strengths, ~60% growth areas. Make the rep feel seen before coaching.
- **Specificity is kindness:** "At 4:15 in the example call, when the buyer mentioned budget pressure, you jumped to pricing. Instead, try: 'That's interesting - what would happen if you didn't address this?'" - that's actionable coaching.
- **Don't over-assign:** 2-3 courses max. More signals "you're bad at everything."
- **Talk ratio is a leading indicator:** High seller talk % usually correlates with weaker discovery, listening, and objection scores. When you see it, look for downstream effects.
- **Never fabricate:** No synthetic transcripts, no made-up scores, no invented course names. If data isn't there, say so and offer alternatives.
- **Connect to deals:** When opportunity data is available, connect coaching to pipeline impact. "Improving discovery will help you advance the example deal" is more motivating than "improve discovery."

## Quick-reference output format

When the manager just needs a quick take (e.g., "how's [rep] doing?" with no request for a full plan), give them a compact card:

```
**[Rep Name]** | [X] calls analyzed | [Date range]
Overall: [X/5] | Trend: [improving/declining/stable]
Strength: [Competency] — "[one-line evidence]"
Focus: [Competency] — "[one-line evidence]"
Quick win: [One specific behavior change]
```

Save the full analysis for when they ask to go deeper.
