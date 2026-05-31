#!/usr/bin/env python3
"""
Aggregate competency scores across multiple call analyses into a coaching profile.

Usage:
    python score_aggregator.py --analyses <path1> <path2> ... --output <output_path>
    python score_aggregator.py --analyses-dir <directory> --output <output_path>

Input: Multiple JSON analysis files from analyze_transcript.py, plus a scores JSON
       with competency scores assigned by the LLM after reviewing each analysis.

Scores JSON structure (one per call):
    {
        "call_id": "meeting_123",
        "account_name": "Acme Corp",
        "call_date": "2026-02-15",
        "scores": {
            "discovery_quality": 3,
            "active_listening": 4,
            "objection_handling": 2,
            "value_articulation": 3,
            "next_step_setting": 4,
            "talk_ratio_score": 3
        },
        "evidence": {
            "discovery_quality": "Asked 2 open-ended questions but didn't follow up...",
            "active_listening": "Paraphrased buyer's concern at 12:34...",
            ...
        }
    }

Output: Aggregated coaching profile with strengths, gaps, trends, and training recommendations.
"""

import json
import argparse
import os
from datetime import datetime


COMPETENCY_LABELS = {
    "discovery_quality": "Discovery Quality",
    "active_listening": "Active Listening",
    "objection_handling": "Objection Handling",
    "value_articulation": "Value Articulation",
    "next_step_setting": "Next Step Setting",
    "talk_ratio_score": "Talk-to-Listen Ratio"
}

TRAINING_MAP = {
    "discovery_quality": {
        "keywords": ["discovery", "questioning", "needs analysis", "pain"],
        "description": "Discovery and questioning skills"
    },
    "active_listening": {
        "keywords": ["listening", "communication", "empathy", "questioning"],
        "description": "Active listening and communication"
    },
    "objection_handling": {
        "keywords": ["objection", "handling", "negotiation", "pushback"],
        "description": "Objection handling techniques"
    },
    "value_articulation": {
        "keywords": ["value", "selling", "storytelling", "presentation", "pitch"],
        "description": "Value-based selling"
    },
    "next_step_setting": {
        "keywords": ["closing", "commitment", "next step", "advancing"],
        "description": "Closing and commitment techniques"
    },
    "talk_ratio_score": {
        "keywords": ["listening", "communication", "questioning", "discovery"],
        "description": "Conversation balance and listening"
    }
}

PRIORITY_ORDER = [
    "discovery_quality",
    "active_listening",
    "objection_handling",
    "value_articulation",
    "next_step_setting",
    "talk_ratio_score"
]


def load_scores(paths):
    """Load score files from provided paths."""
    all_scores = []
    for path in paths:
        with open(path, 'r') as f:
            all_scores.append(json.load(f))
    # Sort by date, most recent first
    all_scores.sort(key=lambda x: x.get("call_date", ""), reverse=True)
    return all_scores


def compute_weighted_averages(all_scores):
    """Compute recency-weighted average for each competency."""
    n = len(all_scores)
    if n == 0:
        return {}

    # Weight: most recent = 1.2, older = 1.0
    weights = []
    for i in range(n):
        if i == 0:
            weights.append(1.2)
        elif i == 1:
            weights.append(1.1)
        else:
            weights.append(1.0)

    averages = {}
    for comp in COMPETENCY_LABELS:
        weighted_sum = 0
        weight_total = 0
        scores_list = []
        for i, score_data in enumerate(all_scores):
            s = score_data.get("scores", {}).get(comp)
            if s is not None:
                weighted_sum += s * weights[i]
                weight_total += weights[i]
                scores_list.append({
                    "call": score_data.get("account_name", "Unknown"),
                    "date": score_data.get("call_date", "Unknown"),
                    "score": s
                })

        if weight_total > 0:
            averages[comp] = {
                "weighted_average": round(weighted_sum / weight_total, 2),
                "raw_scores": scores_list,
                "min": min(s["score"] for s in scores_list),
                "max": max(s["score"] for s in scores_list)
            }

    return averages


def classify_competencies(averages):
    """Classify into strengths, adequate, and growth areas."""
    strengths = []
    adequate = []
    growth_areas = []

    for comp in PRIORITY_ORDER:
        if comp not in averages:
            continue
        avg = averages[comp]["weighted_average"]
        entry = {
            "competency": comp,
            "label": COMPETENCY_LABELS[comp],
            "weighted_average": avg,
            "raw_scores": averages[comp]["raw_scores"]
        }

        if avg >= 4.0:
            strengths.append(entry)
        elif avg >= 3.0:
            adequate.append(entry)
        else:
            growth_areas.append(entry)

    return strengths, adequate, growth_areas


def detect_trends(averages):
    """Detect improving, declining, or flat trends for each competency."""
    trends = {}
    for comp, data in averages.items():
        scores = data["raw_scores"]
        if len(scores) < 2:
            trends[comp] = {"direction": "insufficient_data", "detail": "Need at least 2 calls to detect trend"}
            continue

        # Scores are sorted most-recent-first
        recent = scores[0]["score"]
        older_avg = sum(s["score"] for s in scores[1:]) / len(scores[1:])
        diff = recent - older_avg

        if diff > 0.5:
            trends[comp] = {"direction": "improving", "detail": f"Most recent: {recent}, older avg: {round(older_avg, 1)}"}
        elif diff < -0.5:
            trends[comp] = {"direction": "declining", "detail": f"Most recent: {recent}, older avg: {round(older_avg, 1)}"}
        else:
            trends[comp] = {"direction": "stable", "detail": f"Most recent: {recent}, older avg: {round(older_avg, 1)}"}

    return trends


def generate_training_recommendations(growth_areas):
    """Generate training recommendations based on growth areas."""
    recommendations = []
    for gap in growth_areas:
        comp = gap["competency"]
        mapping = TRAINING_MAP.get(comp, {})
        recommendations.append({
            "competency": comp,
            "label": gap["label"],
            "score": gap["weighted_average"],
            "search_keywords": mapping.get("keywords", []),
            "description": mapping.get("description", ""),
            "priority": PRIORITY_ORDER.index(comp) + 1 if comp in PRIORITY_ORDER else 99
        })

    recommendations.sort(key=lambda x: x["priority"])
    return recommendations[:3]  # Max 3 recommendations


def aggregate(all_scores):
    """Main aggregation logic."""
    averages = compute_weighted_averages(all_scores)
    strengths, adequate, growth_areas = classify_competencies(averages)
    trends = detect_trends(averages)
    training_recs = generate_training_recommendations(growth_areas)

    # Compute overall talk ratio
    talk_ratios = []
    for score_data in all_scores:
        tr = score_data.get("talk_ratio", {})
        if "seller_pct" in tr:
            talk_ratios.append(tr["seller_pct"])

    avg_talk_ratio = round(sum(talk_ratios) / len(talk_ratios), 1) if talk_ratios else None

    return {
        "summary": {
            "calls_analyzed": len(all_scores),
            "date_range": {
                "earliest": all_scores[-1].get("call_date", "") if all_scores else "",
                "latest": all_scores[0].get("call_date", "") if all_scores else ""
            },
            "average_talk_ratio_seller_pct": avg_talk_ratio,
            "overall_competency_average": round(
                sum(a["weighted_average"] for a in averages.values()) / len(averages), 2
            ) if averages else None
        },
        "competency_averages": averages,
        "strengths": strengths,
        "adequate": adequate,
        "growth_areas": growth_areas,
        "trends": trends,
        "training_recommendations": training_recs,
        "call_details": [
            {
                "call_id": s.get("call_id"),
                "account_name": s.get("account_name"),
                "call_date": s.get("call_date"),
                "scores": s.get("scores", {})
            }
            for s in all_scores
        ]
    }


def main():
    parser = argparse.ArgumentParser(description="Aggregate competency scores into coaching profile")
    parser.add_argument("--scores", nargs="+", help="Paths to score JSON files")
    parser.add_argument("--scores-dir", help="Directory containing score JSON files")
    parser.add_argument("--output", required=True, help="Output path for aggregated profile")
    args = parser.parse_args()

    paths = args.scores or []
    if args.scores_dir:
        for f in os.listdir(args.scores_dir):
            if f.endswith(".json") and f.startswith("scores_"):
                paths.append(os.path.join(args.scores_dir, f))

    if not paths:
        print("Error: No score files provided. Use --scores or --scores-dir.")
        return

    all_scores = load_scores(paths)
    result = aggregate(all_scores)

    with open(args.output, 'w') as f:
        json.dump(result, f, indent=2)

    print(f"Coaching profile generated: {args.output}")
    print(f"Calls analyzed: {result['summary']['calls_analyzed']}")
    print(f"Strengths: {', '.join(s['label'] for s in result['strengths'])}")
    print(f"Growth areas: {', '.join(g['label'] for g in result['growth_areas'])}")
    if result['training_recommendations']:
        print(f"Training recommended: {', '.join(r['label'] for r in result['training_recommendations'])}")


if __name__ == "__main__":
    main()
