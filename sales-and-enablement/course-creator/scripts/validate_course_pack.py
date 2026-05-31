#!/usr/bin/env python3
"""
Validate a Course Creator JSON blueprint.

Usage:
    python validate_course_pack.py path/to/course_blueprint.json

This validator is intentionally lightweight. It checks the constraints that matter most for target LMS readiness:

- delivery format is self_paced
- modules exist
- final module includes a graded assessment
- final feedback form exists and is placed after the final assessment
- knowledge checks are ungraded
- assessments are graded
- flip cards do not appear in assessments
- checklist assessments are warned against
- free response and pitch assessments have manual review support
"""

import json
import sys
from pathlib import Path

ALLOWED_KC_TYPES = {"single_select", "multi_select", "matching", "sorting", "checklist", "flip_card"}
ALLOWED_ASSESSMENT_TYPES = {"single_select", "multi_select", "matching", "sorting", "checklist", "free_response", "pitch"}
MANUAL_TYPES = {"free_response", "pitch"}


def fail(message):
    return {"status": "fail", "message": message}


def warn(message):
    return {"status": "warn", "message": message}


def pass_msg(message):
    return {"status": "pass", "message": message}


def validate(data):
    results = []

    course = data.get("course", {})
    if course.get("delivery_format") != "self_paced":
        results.append(fail("course.delivery_format must be self_paced"))
    else:
        results.append(pass_msg("delivery format is self_paced"))

    modules = data.get("modules")
    if not isinstance(modules, list) or not modules:
        results.append(fail("modules must be a non-empty list"))
        return results
    results.append(pass_msg("modules exist"))

    final_module = modules[-1]
    final_items = final_module.get("items", [])
    final_assessments = [item for item in final_items if item.get("type") == "assessment" and item.get("graded") is True]
    if not final_assessments:
        results.append(fail("final module must include at least one graded assessment"))
    else:
        results.append(pass_msg("final module includes a graded assessment"))

    feedback = data.get("final_feedback_form", {})
    if not feedback.get("enabled"):
        results.append(fail("final_feedback_form.enabled must be true"))
    elif feedback.get("placement") != "after_final_assessment":
        results.append(fail("final_feedback_form.placement must be after_final_assessment"))
    else:
        results.append(pass_msg("feedback form is enabled after final assessment"))

    for m_index, module in enumerate(modules, start=1):
        for item in module.get("items", []):
            item_type = item.get("type")
            title = item.get("title", "untitled")

            if item_type == "knowledge_check":
                if item.get("graded") is not False:
                    results.append(fail(f"module {m_index} knowledge check '{title}' must be ungraded"))
                for q in item.get("questions", []):
                    q_type = q.get("type")
                    if q_type and q_type not in ALLOWED_KC_TYPES:
                        results.append(fail(f"knowledge check '{title}' has unsupported question type {q_type}"))

            if item_type == "assessment":
                if item.get("graded") is not True:
                    results.append(fail(f"module {m_index} assessment '{title}' must be graded"))
                for q in item.get("questions", []):
                    q_type = q.get("type")
                    if q_type and q_type not in ALLOWED_ASSESSMENT_TYPES:
                        results.append(fail(f"assessment '{title}' has unsupported question type {q_type}"))
                    if q_type == "flip_card":
                        results.append(fail(f"assessment '{title}' cannot use flip_card questions"))
                    if q_type == "checklist":
                        results.append(warn(f"assessment '{title}' uses checklist. prefer checklist in knowledge checks"))
                    if q_type in MANUAL_TYPES:
                        reviewers = item.get("reviewers") or course.get("settings", {}).get("reviewers") or []
                        rubric = q.get("rubric") or item.get("rubric")
                        if not reviewers:
                            results.append(fail(f"manual question in assessment '{title}' requires reviewers"))
                        if not rubric:
                            results.append(fail(f"manual question in assessment '{title}' requires a rubric"))

    if not any(r["status"] == "fail" for r in results):
        results.append(pass_msg("course blueprint passed required checks"))

    return results


def main():
    if len(sys.argv) != 2:
        print("Usage: python validate_course_pack.py path/to/course_blueprint.json")
        return 2

    path = Path(sys.argv[1])
    if not path.exists():
        print(f"File not found: {path}")
        return 2

    try:
        data = json.loads(path.read_text())
    except Exception as exc:
        print(f"Invalid JSON: {exc}")
        return 2

    results = validate(data)
    print(json.dumps({"results": results}, indent=2))
    return 1 if any(r["status"] == "fail" for r in results) else 0


if __name__ == "__main__":
    raise SystemExit(main())
