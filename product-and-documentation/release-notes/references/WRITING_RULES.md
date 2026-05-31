# Writing Rules for Release Notes — New Card Format

These rules ensure release notes are clear, consistent, and optimised for busy enablement and revenue leaders. This covers the .docx release notes document with feature cards.

## Core Tone and Voice

- Write like you're explaining to a smart, busy colleague
- Confident and warm, not salesy or marketing-heavy
- Lead with benefits, then mechanism
- Active voice always
- Max 20 words per sentence — if it's longer, split it
- Spell out abbreviations on first use: "Digital Sales Room (DSR)"

## Section-Specific Rules

### Executive Summary (Cover Page)

- **Length**: 2–3 sentences
- **Content**: Lead with the biggest product shift, then list other themes
- **Tone**: Authoritative overview — a busy leader reads only this and gets the picture
- **No**: Bullet lists, numbered lists, or feature details
- **Example**: "This is an LMS-heavy release. The biggest shift is support for folders in LMS with a unified learner experience and full-depth practice reporting. Outside LMS, we shipped DSR meeting engagement tracking, a Fathom integration, a redesigned Business Vocabulary, and brand-aware thumbnails."

### Top 5 to Know Table

- Pick the 5 highest-impact features across all product areas
- **Feature column**: Bold feature name (short — 3–5 words)
- **Impact column**: One sentence describing the benefit, not the mechanism
- **Primary Audience column**: Exactly one of: "Admins", "Users", or "All"
- **Do**: "Flat categories replaced with nestable folders and a single Home view."
- **Don't**: "We have implemented a new folder-based architecture to replace the legacy category system."

### Product Area Intro Line

- One italic sentence setting context for [Product Name] section (12pt italic #000000)
- Focus on the theme of changes, not individual features
- **Do**: "A full rework of how admins organise content and how learners consume it — plus parity between practice and course reporting."
- **Don't**: "Several improvements have been made to the LMS module."

### Italic One-Liner (Per Feature)

- Single sentence summarising the user-visible change (12pt italic #000000)
- Aim for 10–15 words
- Written in present tense, describing the new state
- **Do**: "Folders replace flat categories; every course type lives in one Home view."
- **Don't**: "We replaced categories with folders so users can organize things better."

### Why It Matters (Detail Table Row — Optional)

- Use ONLY for high-impact features where the before/after context adds genuine value
- One sentence in **present tense, positive language** describing the new capability and its impact
- Frame as what users **can now do**, never as what was broken or missing before
- Focus on the user's world, not engineering decisions
- **Do**: "Admins can now organise courses into nested folders that mirror their actual content structure."
- **Do**: "Enablement leaders can easily spot which roleplays are landing and which reps are practising the most."
- **Don't**: "Categories were flat, mixed course types, and didn't scale." ← past-tense, negative framing
- **Don't**: "Enablement leaders had no easy way to spot which roleplays were landing." ← focuses on what was missing

### Target Audience (Detail Table Row)

Use ONLY these three labels — never invent new ones:
- **Admins** — features for administrators and enablement teams
- **Users** — features for reps, managers, learners, and other end-users
- **All** — features that apply to both admins and users

Pick exactly one label per feature. Do not comma-separate or combine.

### Release Type (Detail Table Row)

Exactly one of:
- **GA** — Available to all users
- **Beta** — Feature is in beta; expect changes
- **Early Access** — Limited release, opt-in
- **Flag-controlled** — Admin toggles on/off

One line only. No elaboration unless truly necessary.

### Where to Find It (Detail Table Row)

- Use UI > Path > Notation: `LMS > Admin > Home`
- Start from the top-level nav, not mid-screen
- **Do**: "LMS > Admin > Reports > Practice"
- **Don't**: "Navigate to the admin section then click on reports and then practice"

### How to Use (Detail Table Row)

- Always numbered steps (1, 2, 3)
- Start each step with an imperative verb: Click, Select, Navigate, Open, View, Filter, Enable
- Include what the user SEES after the action
- End the sequence with the outcome or confirmation
- **Do**:
  1. Select a practice to open its analytics.
  2. Review total learners, average score, and passing percentage.
  3. Filter by team or manager.
  4. Click Export to download rubric data.
- **Don't**: "The user can navigate to the practice analytics and they will see various metrics which can be filtered and exported."

### Screenshot / GIF

- **MANDATORY** for every feature — no exceptions
- GIF preferred for multi-step interactions; PNG for static views
- Full content width (6.5 inches)
- If not yet available, use the dashed placeholder box
- Caption below in 9pt italic #666666

## Do / Don't Quick Reference

| Do | Don't |
|----|-------|
| "Admins can now assign reps from the LMS dashboard." | "A new bulk assignment feature has been implemented." |
| "Folders replace flat categories; every course type lives in one Home view." | "We have replaced the category system with a new folder-based architecture." |
| "Practice now has the same analytics depth as courses." | "Analytics capabilities have been extended to the practice module." |
| "LMS > Admin > Home" | "Navigate to the admin section then click home" |
| "1. Click Export to download rubric data." | "The export functionality allows users to download data." |

## Feature Name Rules

- Title Case: capitalise first letter of each major word
- Lead with [Product Name] noun: "LMS Course Settings Versioning" not "Versioning for Settings"
- Keep under 8 words
- Name the capability, don't describe it

## Common Mistakes

### Leading with Specs
- **Wrong**: "We've implemented a new API-driven assignment engine."
- **Right**: "Reps now get assigned to training instantly."

### Passive Voice in How to Use
- **Wrong**: "The module can be accessed by clicking on Training."
- **Right**: "Click Training Module > Select Reps."

### Sentences Over 20 Words
- **Wrong**: "This new capability enables organisations to streamline their rep-to-territory assignment process while maintaining consistency."
- **Right**: "Assign reps to territories in minutes using AI-backed recommendations."

### Negative or Past-Tense Language in Why It Matters
- **Wrong**: "Previously, settings updates only took effect for newly enrolled learners." ← past-tense, negative
- **Wrong**: "Enablement leaders had no easy way to spot which roleplays were landing." ← focuses on old limitation
- **Wrong**: "This improves the user experience." ← vague, no specifics
- **Right**: "Settings updates now apply to all learners immediately, including those already enrolled."
- **Right**: "Enablement leaders can now see at a glance which roleplays are landing and which reps are practising the most."

## Consistency Checklist

- [ ] Benefit is clear in the first sentence of the one-liner
- [ ] All abbreviations defined on first use
- [ ] All sentences under 20 words
- [ ] Active voice and imperative verbs in How to Use
- [ ] Target Audience is exactly one of: Admins, Users, All
- [ ] Release Type is one of the four standard options
- [ ] Where to Find It uses > notation
- [ ] Every feature has a screenshot, GIF, or placeholder
- [ ] Could a busy manager understand this without technical knowledge?
