# Sales Rep Competency Framework

## Scoring Rubric

Each competency is scored 1-5 based on observable behaviors in call transcripts.

---

## 1. Discovery Quality

Measures how effectively the rep uncovers buyer pain, impact, business context, and decision-making criteria.

| Score | Description | Observable Behaviors |
|-------|-------------|---------------------|
| 5 - Expert | Deep, structured discovery that uncovers multi-level pain | Asks 5+ open-ended questions; follows up on every answer to dig deeper; uncovers business impact in dollar terms; identifies all stakeholders; maps the decision process |
| 4 - Strong | Good discovery with some depth | Asks 3-4 open-ended questions; follows up on most answers; connects pain to business outcomes; identifies primary decision maker |
| 3 - Adequate | Basic discovery, surface-level | Asks a mix of open/closed questions; some follow-up; identifies the problem but not the impact; knows who they're talking to but not the full buying committee |
| 2 - Weak | Minimal or scripted discovery | Mostly closed questions; reads from a script feel; doesn't follow up; jumps to solution too quickly |
| 1 - Poor | No meaningful discovery | Launches straight into pitch; doesn't ask about the buyer's situation; monologue |

**Key indicators to look for:**
- Open-ended question starters: "Tell me about...", "Walk me through...", "Help me understand...", "What happens when..."
- Follow-up depth: "You mentioned X — can you say more about that?", "How does that affect..."
- Impact quantification: "What does that cost you?", "How much time does that take?"
- Stakeholder mapping: "Who else is involved?", "Who would need to sign off?"

---

## 2. Active Listening

Measures how well the rep absorbs, acknowledges, and builds on what the buyer communicates.

| Score | Description | Observable Behaviors |
|-------|-------------|---------------------|
| 5 - Expert | Exceptional listening that makes the buyer feel deeply heard | Paraphrases accurately; references earlier points in conversation; asks clarifying questions; comfortable with silence; picks up on emotional cues |
| 4 - Strong | Good listening with consistent acknowledgment | Regular paraphrasing; connects points the buyer made; asks for clarification when unsure |
| 3 - Adequate | Listens but sometimes misses cues | Occasional paraphrasing; sometimes redirects instead of exploring; may miss emotional undertones |
| 2 - Weak | Appears to listen but doesn't demonstrate it | Rarely paraphrases; ignores important buyer statements; focuses on own agenda |
| 1 - Poor | Doesn't listen | Talks over buyer; interrupts; repeats questions already answered; ignores buyer input entirely |

**Key indicators:**
- Paraphrasing: "So what I'm hearing is...", "It sounds like...", "If I understand correctly..."
- Referencing: "Earlier you mentioned...", "Going back to what you said about..."
- Silence comfort: Pauses after buyer finishes (vs. jumping in immediately)
- Interruption frequency: How often does the rep cut the buyer off?

---

## 3. Objection Handling

Measures how the rep responds when the buyer raises concerns, pushback, or competitive comparisons.

| Score | Description | Observable Behaviors |
|-------|-------------|---------------------|
| 5 - Expert | Turns objections into opportunities | Acknowledges the concern warmly; isolates it; asks questions to understand the root; reframes using buyer's own words; advances the conversation |
| 4 - Strong | Handles objections effectively | Acknowledges; asks a clarifying question; provides a relevant response; doesn't get defensive |
| 3 - Adequate | Addresses objections but mechanically | Acknowledges briefly; provides a canned response; moves on quickly without checking if the concern was resolved |
| 2 - Weak | Struggles with objections | Gets defensive; dismisses concerns; provides weak responses; avoids the topic |
| 1 - Poor | Ignores or fumbles objections | Pretends objection wasn't raised; changes subject; or panics and over-discounts |

**Key indicators:**
- Acknowledge: "That's a great question", "I understand that concern"
- Isolate: "Is that the main thing holding you back, or are there other concerns?"
- Explore: "Help me understand what's behind that concern"
- Reframe: "Other customers felt the same way, and what they found was..."

---

## 4. Value Articulation

Measures how well the rep connects product/solution capabilities to the buyer's specific situation and pain.

| Score | Description | Observable Behaviors |
|-------|-------------|---------------------|
| 5 - Expert | Compelling, buyer-specific value stories | Links every feature to buyer's stated pain; uses "you mentioned X, so..." framing; quantifies value; tells relevant customer stories; never feature-dumps |
| 4 - Strong | Good value connection | Usually ties features to buyer pain; uses some buyer language; provides relevant proof points |
| 3 - Adequate | Mix of value selling and feature listing | Sometimes connects to pain, sometimes lists features; generic use cases rather than buyer-specific |
| 2 - Weak | Mostly feature-focused | Describes what the product does, not why it matters; generic pitch; doesn't reference buyer's situation |
| 1 - Poor | Pure feature dump | Reads off features list; no connection to buyer; no differentiation; could be selling to anyone |

**Key indicators:**
- Buyer-specific framing: "Based on what you told me about [their pain]..."
- Value quantification: "This typically saves teams like yours X hours/dollars"
- Relevant stories: "A company in [buyer's industry] was dealing with the same thing..."
- Feature-dump warning signs: "We also have...", "Another thing we do is...", "Let me show you..."

---

## 5. Next Step Setting

Measures how effectively the rep secures concrete, committed next steps at the end of the conversation.

| Score | Description | Observable Behaviors |
|-------|-------------|---------------------|
| 5 - Expert | Strong close with mutual commitment | Proposes specific next step with date/time; gets verbal commitment; confirms attendees; sends calendar invite during call; creates urgency naturally |
| 4 - Strong | Good next step with some specificity | Proposes a clear next step; agrees on timing; identifies who should attend |
| 3 - Adequate | Next step identified but vague | "Let's reconnect next week" without specific time; "I'll send you some info" without clarity on what |
| 2 - Weak | Weak or passive close | "Let me know if you have questions"; "Feel free to reach out"; puts ball in buyer's court |
| 1 - Poor | No next step | Call ends without any agreed follow-up; "Great chatting" and nothing more |

**Key indicators:**
- Specific proposal: "How about we schedule a demo for Thursday at 2pm?"
- Commitment check: "Does that work for you?"
- Attendee planning: "Should we include [other stakeholder] in that meeting?"
- Calendar action: "Let me send the invite while we're on the call"

---

## 6. Talk-to-Listen Ratio

Measures the balance of conversation between rep and buyer. This is more of a quantitative metric than a behavioral competency.

| Call Type | Ideal Rep Talk % | Red Flag |
|-----------|-----------------|----------|
| Discovery | 30-40% | >60% (rep is lecturing, not discovering) |
| Demo | 50-65% | >80% (no buyer engagement) or <30% (buyer running the show) |
| Negotiation | 40-50% | >70% (not listening to buyer needs) |
| Check-in | 30-40% | >50% (not letting buyer share) |

**How to estimate from transcript:**
- Count speaker turns and word count per speaker
- Categorize each speaker as "seller" or "buyer" using the participant_type field
- Calculate percentage of words spoken by seller vs. buyer

---

## Composite Scoring

After scoring each individual competency across multiple calls:

1. **Average each competency** across all analyzed calls
2. **Weight by recency** — more recent calls should count slightly more (1.2x for most recent, 1.0x for older)
3. **Identify the trend** — is the rep improving, declining, or flat in each area?

### Strength/Gap Classification

- **Strength**: Average score >= 4.0
- **Adequate**: Average score 3.0-3.9
- **Growth area**: Average score < 3.0

### Training Priority

Growth areas are prioritized for training assignment. When multiple growth areas exist, prioritize:
1. Discovery (foundational — everything else depends on good discovery)
2. Active Listening (closely tied to discovery)
3. Objection Handling (critical for deal progression)
4. Value Articulation (impacts win rates)
5. Next Step Setting (impacts pipeline velocity)
