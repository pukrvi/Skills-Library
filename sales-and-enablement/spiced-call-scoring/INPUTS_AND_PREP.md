# Inputs and Prep

## Required inputs
- Transcript with clear speaker labels for buyer and seller.
- Call type. Discovery demo follow up.
- Buyer role or title if mentioned in the transcript.

## Strongly recommended inputs
- Call duration in minutes.
- Any timestamps if available.

## Transcript normalization
1. Remove system messages and irrelevant noise.
2. Ensure each line starts with a speaker label.
3. If multiple buyers exist label each buyer uniquely.
4. Keep the original wording. Do not paraphrase in the input.

## Talk to listen calculation method
Preferred
- Use call analytics data if provided.

Fallback using transcript only
- Count tokens or words attributed to seller versus buyer.
- Report the method used and note that it is a transcript based estimate.
