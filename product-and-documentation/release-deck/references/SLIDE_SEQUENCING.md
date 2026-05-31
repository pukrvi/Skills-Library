# Slide Sequencing Guide

How to plan the deck structure to tell a cohesive, compelling story about product updates.

## Critical Constraint: Exactly 4 Sections

The Overview slide renders a **2×2 grid** of section cards. The system always uses exactly 4 sections — no more, no fewer. More than 4 sections will be silently truncated by `.slice(0, 4)`.

This means every release deck must group features into exactly 4 categories.

## Deck Size Guidelines

| Deck Type | Total Slides | Use Case |
|-----------|-------------|----------|
| Minimum | 8 | 4 sections with 1 feature each |
| Small | 10–14 | 4 sections with 1–2 features each |
| Medium | 14–18 | Standard monthly release |
| Large | 18–24 | Major release, many features |
| Maximum | 27 | 4 sections with 5 features each |

**Slide Composition**:
- Fixed slides: Cover (1) + Overview (1) + 4 Section Dividers (4) + Closing (1) = **7 fixed slides**
- Variable: Feature Detail slides = remaining slides (one per feature)
- Total = 7 + number of features

## Ordering Algorithm

The foundational sequence for all release decks:

```
1. Cover Slide
2. Overview (2×2 grid of all 4 sections)
3. Section 1 Divider
   3a–3n. Section 1 Feature slides
4. Section 2 Divider
   4a–4n. Section 2 Feature slides
5. Section 3 Divider
   5a–5n. Section 3 Feature slides
6. Section 4 Divider
   6a–6n. Section 4 Feature slides
7. Closing Slide
```

**Section Sorting**: Rank sections by feature count from highest to lowest. This puts the largest updates first, creating momentum.

## Grouping Features into 4 Sections

### When you have exactly 4 product areas
Direct 1:1 mapping — each product area becomes a section.

### When you have fewer than 4 product areas
- Create broader section titles that can encompass multiple areas
- Example: "Reporting" (1 feature) + "Analytics" (1 feature) → "Reporting & Analytics" section
- Use generic section titles like "Platform Improvements" or "Experience Enhancements" to bundle smaller updates

### When you have more than 4 product areas
- Combine related areas into 4 umbrella sections
- Prioritize by feature count: top 3 areas get their own section
- Remaining areas merge into a 4th section (e.g., "Additional Improvements" or "Platform Updates")
- Example with 6 areas:
  - LMS (4 features) → Section 1: "Learning & Coaching"
  - DSR (3 features) → Section 2: "Digital Sales Rooms"
  - CMS (2 features) → Section 3: "Content Management"
  - Integrations (1) + Analytics (1) + Admin (1) → Section 4: "Platform & Integrations"

## Feature Order Within Section

Within each section, order features by:
1. **Complexity** (simple → complex) — easy wins first, builds momentum
2. **Strategic importance** (high → low)
3. **User workflow** (natural sequence of use)

## Key Decisions

### Decision 1: Section Titles

Section titles appear on the Section Divider slide at 140px — they must be short and impactful.

**Good titles**: "Learning & Coaching", "Digital Sales Rooms", "Content Management", "Platform & Integrations"

**Bad titles**: "New Features for the Learning Management System Module" (too long), "Misc" (too vague)

### Decision 2: Overview Headline

The `overviewHeadline` appears at 72px on the Overview slide. It should be:
- A compelling summary of the release theme
- Max ~8 words
- Outcome-focused, not feature-focused

**Examples**: "Your Enablement Just Got Smarter", "Faster Coaching, Smarter Content", "Built for How Teams Sell Today"

### Decision 3: Feature Count Per Section

| Scenario | Recommendation |
|----------|---------------|
| 1 feature per section | Acceptable but deck feels thin — consider if 4 sections is necessary |
| 2–4 features per section | Ideal sweet spot |
| 5+ features per section | Consider splitting or condensing minor features into a single "Improvements" slide |

## Example Slide Plans

### Example 1: Standard Monthly Release (16 slides)

Feature inventory: LMS (3), DSR (2), CMS (2), Integrations (2)

```
1. Cover: "Product Updates — April 2026"
2. Overview: 2×2 grid (LMS, DSR, CMS, Integrations)
3. Section Divider: "Learning & Coaching"
4. Feature: Course Analytics
5. Feature: Role Play to Course
6. Feature: Learner Dashboard
7. Section Divider: "Digital Sales Rooms"
8. Feature: DSR Templates
9. Feature: DSR Analytics
10. Section Divider: "Content Management"
11. Feature: Smart Content Tagging
12. Feature: Content Performance
13. Section Divider: "Integrations"
14. Feature: Salesforce Sync
15. Feature: Slack Notifications
16. Closing
```

### Example 2: Small Release (10 slides)

Feature inventory: LMS (2), Admin (1)

Grouping strategy: Only 2 real areas, need to create 4 sections.
- Split LMS into "Course Management" and "Coaching Tools"
- Admin stays as "Administration"
- Add "Platform Improvements" for any minor fixes/updates

```
1. Cover
2. Overview: 2×2 grid
3. Section Divider: "Course Management"
4. Feature: Course Analytics
5. Section Divider: "Coaching Tools"
6. Feature: Role Play Scoring
7. Section Divider: "Administration"
8. Feature: User Management
9. Section Divider: "Platform Improvements"
   (No features — divider only, or include a minor update)
10. Closing
```

**Note**: If fewer than 4 meaningful sections exist, it's better to split a large section than to create an empty one.

### Example 3: Large Release (22 slides)

Feature inventory: LMS (5), DSR (4), CMS (3), Integrations (2), Admin (1)

Grouping: Merge Admin into Integrations → "Platform & Administration"

```
1. Cover
2. Overview
3–8. Learning & Coaching (divider + 5 features)
9–13. Digital Sales Rooms (divider + 4 features)
14–17. Content Management (divider + 3 features)
18–21. Platform & Administration (divider + 3 features)
22. Closing
```

## Workflow Checklist

- [ ] Extract all features and categories from release doc
- [ ] Count features per category
- [ ] Group into exactly 4 sections (merge or split as needed)
- [ ] Write section titles (short, impactful, max ~3 words)
- [ ] Sort sections by feature count (descending)
- [ ] Write overviewHeadline (max ~8 words, outcome-focused)
- [ ] Order features within each section
- [ ] Confirm total slide count (7 + feature count)
- [ ] Verify every feature appears exactly once
- [ ] Map each feature to release-data.js format (id, category, title, summary, bullets, audience, release, screenshot)
