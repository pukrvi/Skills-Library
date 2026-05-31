#!/usr/bin/env python3
"""
Analyze a sales call transcript against the competency framework.

Usage:
    python analyze_transcript.py --transcript <path_to_transcript_json> --output <output_path>

Input: JSON transcript with structure:
    [{"speaker": "Name", "participant_type": "seller"|"buyer", "text": "...", "start_ms": 0, "end_ms": 1000, "timestamp": "00:00"}]

Output: JSON competency analysis with scores, evidence, and talk ratio.
"""

import json
import argparse
import re
from collections import defaultdict


def load_transcript(path):
    with open(path, 'r') as f:
        return json.load(f)


def calculate_talk_ratio(transcript):
    """Calculate talk-to-listen ratio based on word count per participant type."""
    seller_words = 0
    buyer_words = 0
    seller_turns = 0
    buyer_turns = 0

    for line in transcript:
        word_count = len(line.get("text", "").split())
        ptype = line.get("participant_type", "unknown")

        if ptype == "seller":
            seller_words += word_count
            seller_turns += 1
        elif ptype == "buyer":
            buyer_words += word_count
            buyer_turns += 1

    total_words = seller_words + buyer_words
    if total_words == 0:
        return {"seller_pct": 0, "buyer_pct": 0, "seller_words": 0, "buyer_words": 0,
                "seller_turns": 0, "buyer_turns": 0, "total_words": 0}

    return {
        "seller_pct": round(seller_words / total_words * 100, 1),
        "buyer_pct": round(buyer_words / total_words * 100, 1),
        "seller_words": seller_words,
        "buyer_words": buyer_words,
        "seller_turns": seller_turns,
        "buyer_turns": buyer_turns,
        "total_words": total_words
    }


def extract_questions(transcript):
    """Extract all questions asked by the seller."""
    questions = []
    open_ended_patterns = [
        r'\b(tell me|walk me through|help me understand|describe|explain|what happens|how do you|why do you|what does|what would|how would|can you share|what are)\b',
    ]

    for line in transcript:
        if line.get("participant_type") != "seller":
            continue
        text = line.get("text", "")
        if "?" in text:
            is_open = any(re.search(p, text.lower()) for p in open_ended_patterns)
            questions.append({
                "text": text,
                "timestamp": line.get("timestamp", ""),
                "is_open_ended": is_open
            })

    return questions


def detect_paraphrasing(transcript):
    """Detect instances where the seller paraphrases or references what the buyer said."""
    paraphrase_patterns = [
        r'\b(so what i\'?m hearing|it sounds like|if i understand correctly|so you\'?re saying|you mentioned|going back to what you said|earlier you mentioned|so basically)\b',
    ]

    instances = []
    for line in transcript:
        if line.get("participant_type") != "seller":
            continue
        text = line.get("text", "").lower()
        for pattern in paraphrase_patterns:
            if re.search(pattern, text):
                instances.append({
                    "text": line.get("text", ""),
                    "timestamp": line.get("timestamp", ""),
                    "pattern_matched": pattern
                })
                break

    return instances


def detect_objection_handling(transcript):
    """Detect objection moments and how the seller responded."""
    objection_indicators = [
        r'\b(concern|worried|not sure|too expensive|competitor|already have|budget|timeline|priority|pushback|hesitant|risk)\b',
    ]
    acknowledge_patterns = [
        r'\b(i understand|that\'?s a (great|good|fair) (question|point|concern)|i hear you|appreciate you raising|that makes sense|valid concern)\b',
    ]

    objections = []
    for i, line in enumerate(transcript):
        if line.get("participant_type") != "buyer":
            continue
        text = line.get("text", "").lower()

        is_objection = any(re.search(p, text) for p in objection_indicators)
        if not is_objection:
            continue

        # Look at the next seller response
        seller_response = None
        acknowledged = False
        for j in range(i + 1, min(i + 4, len(transcript))):
            if transcript[j].get("participant_type") == "seller":
                seller_response = transcript[j].get("text", "")
                acknowledged = any(re.search(p, seller_response.lower()) for p in acknowledge_patterns)
                break

        objections.append({
            "buyer_statement": line.get("text", ""),
            "buyer_timestamp": line.get("timestamp", ""),
            "seller_response": seller_response,
            "acknowledged": acknowledged
        })

    return objections


def detect_feature_dumping(transcript):
    """Detect potential feature dumping vs. value-based selling."""
    feature_dump_indicators = [
        r'\b(we also have|another (feature|thing|capability)|let me show you|we can also|additionally we|on top of that we)\b',
    ]
    value_indicators = [
        r'\b(based on what you (told|said|mentioned)|for (your|a) team like|this (means|helps|saves|reduces|eliminates)|the (impact|result|outcome) (is|would be))\b',
    ]

    feature_dumps = 0
    value_connections = 0

    for line in transcript:
        if line.get("participant_type") != "seller":
            continue
        text = line.get("text", "").lower()

        if any(re.search(p, text) for p in feature_dump_indicators):
            feature_dumps += 1
        if any(re.search(p, text) for p in value_indicators):
            value_connections += 1

    return {"feature_dump_count": feature_dumps, "value_connection_count": value_connections}


def detect_next_steps(transcript):
    """Analyze the end of the call for next step quality."""
    strong_close_patterns = [
        r'\b(how about we schedule|let\'?s (book|schedule|set up)|does (tuesday|wednesday|thursday|monday|friday|next week) work|i\'?ll send (the|a) (calendar|invite))\b',
    ]
    weak_close_patterns = [
        r'\b(let me know|feel free to|we\'?ll be in touch|i\'?ll follow up|circle back|touch base|reach out)\b',
    ]

    # Focus on last 20% of transcript
    last_segment = transcript[int(len(transcript) * 0.8):]

    strong_signals = []
    weak_signals = []

    for line in last_segment:
        if line.get("participant_type") != "seller":
            continue
        text = line.get("text", "").lower()

        for p in strong_close_patterns:
            if re.search(p, text):
                strong_signals.append({"text": line.get("text", ""), "timestamp": line.get("timestamp", "")})
                break

        for p in weak_close_patterns:
            if re.search(p, text):
                weak_signals.append({"text": line.get("text", ""), "timestamp": line.get("timestamp", "")})
                break

    return {"strong_close_signals": strong_signals, "weak_close_signals": weak_signals}


def analyze(transcript):
    """Run full analysis on a transcript."""
    talk_ratio = calculate_talk_ratio(transcript)
    questions = extract_questions(transcript)
    paraphrasing = detect_paraphrasing(transcript)
    objections = detect_objection_handling(transcript)
    value_vs_features = detect_feature_dumping(transcript)
    next_steps = detect_next_steps(transcript)

    open_ended_count = sum(1 for q in questions if q["is_open_ended"])
    closed_count = len(questions) - open_ended_count

    return {
        "talk_ratio": talk_ratio,
        "questions": {
            "total": len(questions),
            "open_ended": open_ended_count,
            "closed": closed_count,
            "details": questions
        },
        "active_listening": {
            "paraphrase_count": len(paraphrasing),
            "instances": paraphrasing
        },
        "objection_handling": {
            "objections_detected": len(objections),
            "acknowledged_count": sum(1 for o in objections if o["acknowledged"]),
            "details": objections
        },
        "value_articulation": value_vs_features,
        "next_steps": next_steps,
        "call_duration_estimate": {
            "total_words": talk_ratio["total_words"],
            "estimated_minutes": round(talk_ratio["total_words"] / 150, 1)  # ~150 wpm speaking pace
        }
    }


def main():
    parser = argparse.ArgumentParser(description="Analyze a sales call transcript")
    parser.add_argument("--transcript", required=True, help="Path to transcript JSON")
    parser.add_argument("--output", required=True, help="Path for output analysis JSON")
    args = parser.parse_args()

    transcript = load_transcript(args.transcript)
    result = analyze(transcript)

    with open(args.output, 'w') as f:
        json.dump(result, f, indent=2)

    print(f"Analysis complete. Results saved to {args.output}")
    print(f"Talk ratio: Seller {result['talk_ratio']['seller_pct']}% / Buyer {result['talk_ratio']['buyer_pct']}%")
    print(f"Questions asked: {result['questions']['total']} ({result['questions']['open_ended']} open-ended)")
    print(f"Paraphrasing instances: {result['active_listening']['paraphrase_count']}")
    print(f"Objections detected: {result['objection_handling']['objections_detected']}")


if __name__ == "__main__":
    main()
