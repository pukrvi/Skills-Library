# Writing for AI Prompting

## Prompting is world building
A model is a universe of probabilities. Your prompt sets the laws of that temporary universe.

## Constrain the universe
Include:
- Role: who the model is acting as.
- Audience: who the output is for.
- Context: the world and constraints.
- Output format: exact structure to produce.

Bad
- Tell me a story.

Better
- Write a cyberpunk story set in India in 2049. Use street slang. Focus on gang signs as language. Output five scenes with one paragraph each.

## Be the lawmaker
State rules explicitly and positively:
- Use short sentences.
- Avoid jargon.
- Use second person.
- Provide three options.
- Do not mention internal reasoning.

## Instruction manual via examples
Few shot prompting:
- Give 1 to 3 examples that match the exact style, length, and format you want.
- Use the same delimiters and headings in examples as in the desired output.

## Prompt template
Copy and fill:

Role:
You are a [ROLE].

Audience:
Write for [AUDIENCE].

Objective:
Produce [OUTPUT] that achieves [GOAL].

World constraints:
- Setting: [SETTING]
- Tone: [TONE]
- Allowed concepts: [ALLOWED]
- Forbidden concepts: [FORBIDDEN]  (avoid if you can express as allowed constraints instead)

Output format:
- [FORMAT RULE 1]
- [FORMAT RULE 2]

Examples:
Example 1:
[INPUT]
[OUTPUT]

Example 2:
[INPUT]
[OUTPUT]
