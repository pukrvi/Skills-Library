# Course pack schema

Use this schema when building the final course pack or LMS-ready JSON blueprint.

## Markdown course pack sections

```markdown
# Course Pack: [Course Title]

## 1. Course Brief

## 2. Design Assumptions

## 3. Instructional Design Choices

## 4. Course Settings

## 5. Course Map

## 6. Module Build Plan

## 7. Lesson Content Plans

## 8. Knowledge Checks Ungraded

## 9. Assessments Graded

## 10. Final Assessment Module

## 11. Feedback Form

## 12. Reinforcement and Retention Plan

## 13. Measurement Plan

## 14. LMS Build Blueprint

## 15. Tool-Call Plan Optional

## 16. Quality Review Summary
```

## JSON blueprint schema

```json
{
  "course": {
    "title": "string",
    "description": "string",
    "category": "string",
    "target_audience": "string",
    "difficulty": "beginner|intermediate|advanced|mixed",
    "estimated_duration_minutes": 0,
    "delivery_format": "self_paced",
    "settings": {
      "sequential_learning": true,
      "passing_percentage": 70,
      "allow_retakes": true,
      "max_retakes": 2,
      "rating_and_feedback": true,
      "content_download": false,
      "certificates": false,
      "reviewers": []
    }
  },
  "modules": [
    {
      "module_title": "string",
      "module_goal": "string",
      "estimated_duration_minutes": 0,
      "items": [
        {
          "type": "lesson",
          "title": "string",
          "objective": "string",
          "content_blocks": []
        },
        {
          "type": "knowledge_check",
          "title": "string",
          "graded": false,
          "questions": []
        },
        {
          "type": "assessment",
          "title": "string",
          "graded": true,
          "questions": [],
          "passing_percentage": 70
        }
      ]
    }
  ],
  "final_feedback_form": {
    "enabled": true,
    "placement": "after_final_assessment",
    "questions": []
  },
  "quality_review": {
    "self_paced_only": true,
    "final_module_has_assessment": true,
    "last_step_is_feedback": true
  }
}
```

## Required fields in every final output

- Course title
- Course description
- Target audience
- Business goal
- Learner behavior goal
- Course category or category recommendation
- Estimated duration
- Course settings
- Module list
- Lesson objectives
- Knowledge checks marked ungraded
- Assessments marked graded
- Final assessment module
- Feedback form
- Measurement plan
- Quality review summary
