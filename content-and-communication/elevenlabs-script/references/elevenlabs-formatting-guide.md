# ElevenLabs Formatting Reference Guide

Complete reference for all formatting techniques available when writing scripts for ElevenLabs 
AI voice generation. Organized by category for quick lookup.

## Table of Contents
1. [Audio Tags (v3+ Models)](#1-audio-tags)
2. [Pause and Timing Control](#2-pause-and-timing)
3. [Word Distortion Techniques](#3-word-distortion)
4. [Spacing and Pacing Hacks](#4-spacing-and-pacing)
5. [Capitalization and Emphasis](#5-capitalization-and-emphasis)
6. [Voice Design Prompt Keywords](#6-voice-design-keywords)
7. [Best Practices and Limits](#7-best-practices)

---

## 1. Audio Tags

Audio tags are the primary control mechanism for ElevenLabs Multilingual v3 and newer models. 
They tell the AI *how* to deliver the next line.

**Syntax**: `[modifier] text to be spoken`

### Emotion and Tone Tags
| Tag | Effect |
|-----|--------|
| `[whispered]` | Soft, breathy, intimate delivery |
| `[shouted]` | Loud, intense, forceful delivery |
| `[sad tone]` | Melancholic, sorrowful inflection |
| `[excited]` | Energetic, enthusiastic delivery |
| `[nervous]` | Anxious, shaky, uncertain tone |
| `[angry]` | Aggressive, heated delivery |
| `[calm]` | Soothing, composed, steady tone |
| `[sarcastic]` | Dry, ironic inflection |

### Pacing Tags
| Tag | Effect |
|-----|--------|
| `[speaking slowly]` | Deliberate, measured pacing |
| `[speaking quickly]` | Rapid, urgent delivery |
| `[monotone]` | Flat, robotic, unemotional pacing |

### Action Tags
| Tag | Effect |
|-----|--------|
| `[laughs]` | Laughter sound |
| `[sighs]` | Audible sigh |
| `[clears throat]` | Throat clearing sound |
| `[gasps]` | Sharp intake of breath |
| `[coughs]` | Coughing sound |

### Combination Tags
You can combine modifiers for layered delivery:
- `[whispered, nervous] I think someone's watching us.`
- `[speaking slowly, sad tone] She was gone... just like that.`

**Compatibility note**: Audio tags work best on Eleven Multilingual v3 and newer. 
Older models (v1, v2) generally ignore these tags. If targeting older models, rely 
on punctuation and text distortion techniques instead.

---

## 2. Pause and Timing

### Break Tag (Exact Silence)
```
<break time="0.5s" />
```
Inserts absolute silence for the specified duration. Useful for:
- Dramatic timing between reveals
- Scene transitions
- Letting a heavy statement land

**Recommended durations**:
- `0.3s` — micro-pause, slight beat
- `0.5s` — noticeable pause, end of thought
- `1.0s` — dramatic beat, scene shift
- `2.0s` — long dramatic pause, major transition
- `3.0s+` — use rarely, for very deliberate silence

### Punctuation-Based Pauses
These are softer, more natural pauses:
- **Period** (`.`) — Standard sentence-ending pause
- **Comma** (`,`) — Brief breath pause
- **Ellipsis** (`...`) — Trailing pause with hesitation quality
- **Em dash** (`—`) — Abrupt break, thought interruption
- **Semicolon** (`;`) — Moderate pause, connects related thoughts

### Stacking Pauses
For longer natural pauses without the break tag:
- `I saw it... ... and I ran.` — Double ellipsis creates a longer trailing pause
- `Wait. ... No.` — Period + ellipsis = thinking pause

---

## 3. Word Distortion

### Vowel Stretching
Repeat vowels to elongate pronunciation. Stick to 3–4 repeated letters for best results.

| Input | Effect | Risk |
|-------|--------|------|
| `Noooo!` | Elongated "No" | ✅ Works well |
| `Pleeeease` | Drawn-out pleading | ✅ Works well |
| `Whyyy` | Extended questioning | ✅ Works well |
| `Nooooooooo` | Too many repeats | ⚠️ May become "No-oh-oh-oh" or be ignored |

**Rule of thumb**: 3–4 repeated vowels is the sweet spot. Beyond that, the AI may 
interpret each repetition as a separate syllable.

### Phonetic Slurring
Spell words the way they'd sound in casual, fast, or slurred speech:

| Standard | Phonetic Slur | Effect |
|----------|--------------|--------|
| What do you mean? | Whaddaya mean? | Casual, fast speech |
| Going to | Gonna | Informal register |
| Want to | Wanna | Relaxed delivery |
| Got you | Gotcha | Quick, casual |
| I don't know | I dunno | Lazy, relaxed |
| Let me | Lemme | Fast, casual |
| Give me | Gimme | Demanding or casual |

### Hyphen-Breaking (Robotic/Staccato)
Insert hyphens to force the AI to pause between syllables:

| Input | Effect |
|-------|--------|
| `Sys-tem fail-ure` | Robotic, stuttering delivery |
| `Re-boot-ing` | Mechanical, syllable-by-syllable |
| `Mal-func-tion` | Glitchy, broken speech |
| `I... can't... re-mem-ber` | Struggling, breaking down |

### Letter Spacing (Spelling Out)
| Input | Effect |
|-------|--------|
| `S T O P` | Reads individual letters: "Es Tee Oh Pee" |
| `S.T.O.P.` | Spells out slowly with slight pauses |
| `S-T-O-P` | Spells out with staccato rhythm |

---

## 4. Spacing and Pacing

### Short Sentences for Punch
Breaking content into short sentences creates a staccato, punchy feel:
```
He opened the door.
Silence.
Nothing but darkness.
And then... a sound.
```

### Long Sentences for Flow
Connected clauses with commas create a flowing, continuous delivery:
```
The wind swept through the valley, carrying with it the scent of pine and rain, 
and she closed her eyes and let it wash over her like a memory she'd forgotten.
```

### Line Breaks as Breath Points
Each new line is a natural breath point. Use this to control where the speaker pauses:
```
I want you to listen to me.
Really listen.
Because what I'm about to say... changes everything.
```

---

## 5. Capitalization and Emphasis

### CAPS for Volume/Intensity
Capitalized words are read louder and with more stress:

| Input | Effect |
|-------|--------|
| `I told you to STOP.` | "STOP" is emphasized and louder |
| `This is NOT a drill.` | "NOT" gets strong emphasis |
| `RUN!` | Shouted urgently |

### Rules for Effective Capitalization
- Capitalize only 1–3 key words per sentence for emphasis
- Capitalizing entire sentences makes the whole line loud (use intentionally)
- Combine with `[shouted]` for maximum intensity: `[shouted] GET DOWN NOW!`
- Don't capitalize common words like "the" or "and" for emphasis — it reads oddly

---

## 6. Voice Design Keywords

When creating a custom voice in ElevenLabs Voice Design, these keywords in the 
voice description prompt shape the voice texture:

### Texture Keywords
`Gritty`, `Raspy`, `Smooth`, `Silky`, `Gravelly`, `Husky`, `Breathy`, `Nasal`, 
`Deep`, `High-pitched`, `Warm`, `Cold`, `Metallic`

### Environment/Quality Keywords
`Old Radio`, `Static`, `Telephone`, `Lo-fi`, `Studio quality`, `Echoey`, 
`Muffled`, `Distant`, `Close-mic`

### Personality Keywords
`Nervous`, `Confident`, `Paranoid`, `Cheerful`, `Monotone`, `Dramatic`, 
`Fast-paced`, `Measured`, `Authoritative`, `Timid`

### Example Voice Design Prompts
- _"A paranoid, fast-talking man with a raspy voice, sounds like he is whispering into an old radio, high anxiety."_
- _"A warm, confident woman with a smooth, deep voice, studio quality, calm and authoritative."_
- _"A young, nervous boy with a high-pitched, breathy voice, speaking quickly, slightly echoey."_

---

## 7. Best Practices

### Do
- Use audio tags for clear emotional direction
- Use punctuation as your primary rhythm tool
- Keep vowel stretching to 3–4 repeats
- Use `<break>` tags for precise timing
- Test with short clips before formatting an entire script
- Match techniques to the mood — don't force effects

### Don't
- Over-tag every line with audio tags (let natural delivery breathe)
- Use more than 6–7 repeated vowel letters (model breaks down)
- Mix markdown formatting into the output (ElevenLabs reads raw text)
- Use `S T O P` spacing if you want a slow word (use `S.T.O.P.` instead)
- Combine more than 2–3 techniques on a single line
- Add commentary or directions that aren't part of the spoken text

### Technique Selection by Mood

| Mood | Primary Techniques |
|------|-------------------|
| Dramatic/Tense | `<break>` pauses, short sentences, `[whispered]`, CAPS for key words |
| Casual/Natural | Phonetic slurring, commas for flow, `[laughs]`, relaxed punctuation |
| Robotic/Glitchy | Hyphen-breaking, `[monotone]`, `<break>` tags, CAPS |
| Emotional/Sad | Ellipsis for trailing off, `[sad tone]`, `[sighs]`, long pauses |
| Urgent/Action | Short sentences, `[shouted]`, CAPS, `[speaking quickly]` |
| Eerie/Horror | `[whispered]`, long `<break>` pauses, ellipsis, slow pacing |
| Professional/Narration | Minimal tags, natural punctuation, `[calm]`, clean structure |
