---
name: elevenlabs-script
description: >
  Transform rough script drafts or finished scripts into optimized ElevenLabs AI voice generation format. 
  Use this skill whenever the user asks to write, format, convert, or optimize a script for AI voice generation, 
  text-to-speech, ElevenLabs, audio narration, voiceover, or any AI audio tool. Also trigger when the user 
  mentions "voice script", "TTS script", "audio script", "narration script", "voice AI", or wants to convert 
  text into a format suitable for AI-generated speech. Even if they don't mention ElevenLabs by name, if 
  they're preparing text for any AI voice/audio generation tool, use this skill.
---

# ElevenLabs Script Formatter

This skill takes a user's rough draft, finished script, or text content and rewrites it into a clean, 
input-ready script optimized for ElevenLabs AI voice generation. The output should be a text file 
that can be pasted directly into ElevenLabs (or similar TTS tools) to produce high-quality, 
expressive audio.

## Why This Matters

AI voice generators like ElevenLabs don't just read text—they interpret formatting cues, punctuation 
patterns, capitalization, and special tags to control how words are spoken. A well-formatted script 
can mean the difference between flat, robotic audio and a dynamic, emotionally rich performance. 
This skill encodes the knowledge of how to leverage these formatting tools effectively.

## Workflow

1. **Analyze the input**: Read the user's draft or specifications. Identify the intended tone, 
   pacing, emotional beats, characters/voices, and any special delivery instructions.
2. **Read the reference guide**: Before writing, read `references/elevenlabs-formatting-guide.md` 
   for the full set of formatting techniques available.
3. **Rewrite the script**: Apply ElevenLabs formatting techniques to produce an expressive, 
   input-ready script.
4. **Output the result**: Save as a `.txt` file the user can paste directly into ElevenLabs.

## Script Rewriting Rules

### Understand the Input First

Before reformatting, determine:
- **Who is speaking?** (single narrator, multiple characters, dialogue)
- **What's the mood?** (dramatic, calm, urgent, comedic, eerie, professional)
- **What's the pacing?** (fast-paced action, slow contemplative, mixed)
- **Are there special moments?** (whispers, shouts, pauses, emotional breaks, emphasis)

### Apply Formatting Techniques

Use these tools from the ElevenLabs formatting system. Mix and match based on what the script needs—
don't force every technique into every script.

#### Audio Tags (for ElevenLabs v3+ models)
Wrap delivery instructions in square brackets before the text they apply to:
- `[whispered] text` — soft, breathy delivery
- `[shouted] text` — loud, intense delivery  
- `[speaking slowly] text` — deliberate pacing
- `[speaking quickly] text` — rapid delivery
- `[laughs]`, `[sighs]`, `[clears throat]` — character actions
- `[sad tone]`, `[excited]`, `[nervous]` — emotional direction

#### Punctuation for Rhythm
- **Ellipsis** (`...`) — creates hesitation, trailing off, or suspense
- **Em dash** (`—`) — abrupt interruption or shift in thought
- **Commas** — natural micro-pauses; add extras where you want the speaker to breathe
- **Periods** — full stops; short sentences create punchy, staccato delivery
- **Question marks and exclamation points** — affect intonation naturally

#### Pauses
- `<break time="0.5s" />` — half-second silence
- `<break time="1.0s" />` — one-second silence
- `<break time="2.0s" />` — two-second dramatic pause
- Use sparingly for dramatic timing that punctuation alone can't achieve

#### Emphasis and Volume
- **CAPITALIZED WORDS** — read louder, with more intensity. Use for key emphasis.
- Don't capitalize entire sentences unless the whole line is shouted.

#### Word Distortion and Stretching
- **Vowel repetition** (3–4 repeats max): `Noooo!`, `Pleeeease` — elongates the word
- **Hyphen-breaking**: `Sys-tem... fail-ure` — creates staccato, robotic cadence
- **Phonetic slurring**: `Whaddaya mean?` — casual or slurred delivery
- **Spaced letters**: `S.T.O.P.` or `S-T-O-P` — spelled out slowly

### Structural Guidelines

When writing the final script:

1. **One line per delivery unit** — Each line should be a natural breath group or thought. 
   Don't cram an entire paragraph into one line.
2. **Blank lines for scene breaks** — Separate sections with blank lines to give the 
   audio natural breathing room.
3. **Character labels** — If multiple voices, prefix lines with the character name 
   (the user will assign different voices in ElevenLabs):
   ```
   NARRATOR: The room fell silent.
   ALICE: [whispered] Did you hear that?
   BOB: [nervous] I... I don't think we should be here.
   ```
4. **Keep it clean** — The output should be paste-ready. No markdown formatting, no 
   code blocks, no commentary. Just the script text.
5. **Preserve the author's intent** — Don't rewrite the content or story. Rewrite the 
   *delivery*. The user's words and meaning stay intact; you're adding the performance layer.

### What NOT to Do

- Don't overuse audio tags — a script plastered with `[whispered]` on every line sounds unnatural
- Don't stretch words beyond 3–4 repeated letters (`Nooooooooo` breaks the model)
- Don't use markdown formatting (headers, bold, lists) in the output — ElevenLabs reads raw text
- Don't add stage directions the user didn't imply — stay faithful to their script
- Don't mix too many techniques in a single line — it confuses the model

## Output Format

The final output should be a plain `.txt` file containing only the formatted script. 
No preamble, no explanation, no markdown — just the ElevenLabs-ready text.

If the user asks for explanations of what you changed and why, provide that separately 
in conversation, not in the file.

## Examples

**Example 1: Simple narration input**

User provides:
> "The door creaked open. Sarah walked in. She couldn't believe what she saw."

Output:
```
The door creaked open.

<break time="0.5s" />

Sarah walked in.

[whispered] She couldn't believe... what she saw.
```

**Example 2: Dramatic scene input**

User provides:
> "The system is failing and the operator is panicking, shouting warnings while alarms go off"

Output:
```
[nervous] The readings are... they're off the charts.

<break time="0.3s" />

Sys-tem integrity... dropping.

[shouted] EVERYONE GET OUT! NOW!

<break time="1.0s" />

[whispered] It's... too late.
```

**Example 3: Casual dialogue**

User provides:
> "Two friends chatting about weekend plans, keep it natural and relaxed"

Output:
```
ALEX: So whaddaya wanna do this weekend?

JORDAN: I dunno, man... maybe hit the beach?

ALEX: [laughs] Dude, it's gonna be like, forty degrees.

JORDAN: Yeah... yeah, good point. Movie night then?
```
