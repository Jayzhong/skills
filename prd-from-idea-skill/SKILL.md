---
name: prd-from-idea
description: Transform vague product ideas into professional PRD v1 documents through a guided, evidence-aware workflow. Use when users say things like "help me turn an idea into a PRD", "I have a product idea", "write a PRD for...", "help me spec out this feature", or "I want to build...". Guides through problem framing, user research, assumption validation, MVP scoping, and launch planning with embedded product management best practices.
---

# PRD from Idea

A consultative skill that guides you from a rough product idea to a review-ready PRD v1 through 10 structured stages.

## What You Get

- **PRD v1** - Complete product requirements document with clearly separated Facts / Assumptions / Decisions / Open Questions
- **Working Draft** - Updated after each stage, always visible
- **Validated Thinking** - Evidence-based decisions, labeled assumptions with validation plans

## Quickstart

Just share your idea in any form:
- "I want to build a meal planning app for busy parents"
- "What if we added AI to our customer support?"
- "Help me write a PRD for a developer productivity tool"

Even a single sentence works. The skill will guide you through clarifying questions.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────┐
│  1. Idea Intake  →  2. Problem Framing  →  3. Users/JTBD   │
│                                                             │
│  4. Evidence & Assumptions  →  [GATE A: Worth Doing?]       │
│                                                             │
│  5. Solution Shaping  →  6. MVP Scope  →  7. Metrics        │
│                                                             │
│  8. Risks & Dependencies  →  [GATE B: Shippable?]           │
│                                                             │
│  9. Launch & Validation Plan  →  10. PRD v1 Output          │
└─────────────────────────────────────────────────────────────┘
```

For detailed stage specifications, consult [10-idea-to-prd-workflow.md](references/10-idea-to-prd-workflow.md).

## Stage Quick Reference

| Stage | Focus | Key Question | Reference to Load |
|-------|-------|--------------|-------------------|
| 1 | Idea Intake | What's the core idea? | — |
| 2 | Problem Framing | What problem are we solving? | [22-discovery-playbook.md](references/22-discovery-playbook.md) |
| 3 | Users & Scenarios | For whom? What job-to-be-done? | [21-mom-test-interview-kit.md](references/21-mom-test-interview-kit.md) |
| 4 | Evidence & Assumptions | What do we know vs believe? | [25-lean-experiment-kit.md](references/25-lean-experiment-kit.md) |
| 5 | Solution Shaping | How might we solve it? | [23-sprint-lite.md](references/23-sprint-lite.md), [24-usability-checklists.md](references/24-usability-checklists.md) |
| 6 | MVP Scope | What's the smallest valuable release? | [27-execution-and-tradeoffs.md](references/27-execution-and-tradeoffs.md) |
| 7 | Metrics | How do we measure success? | [25-lean-experiment-kit.md](references/25-lean-experiment-kit.md) |
| 8 | Risks & Dependencies | What could go wrong? | [27-execution-and-tradeoffs.md](references/27-execution-and-tradeoffs.md) |
| 9 | Launch Plan | How do we validate in market? | [26-go-to-market-chasm.md](references/26-go-to-market-chasm.md) |
| 10 | PRD Output | Final document | Use [prd-v1-template.md](templates/prd-v1-template.md) |

## Gate Definitions

### Gate A: Worth Doing?

Pass criteria (all must be met):
- [ ] Problem is clearly articulated and significant
- [ ] Target user segment is identified
- [ ] Evidence exists OR assumptions are logged with validation plan
- [ ] Success is measurable (we know what good looks like)

**If Gate A fails**: Pivot the problem framing or target user. Do not proceed to solution design without a clear problem worth solving.

### Gate B: Shippable?

Pass criteria (all must be met):
- [ ] MVP scope is controllable (fits time/resource constraints)
- [ ] Dependencies are identified and manageable
- [ ] Critical risks have mitigation plans
- [ ] Validation plan is executable with available resources

**If Gate B fails**: Descope to a smaller first release, resolve blocking dependencies, or redesign high-risk areas.

## Output Contract

Every PRD v1 must include these sections:

1. **Background** - Context and motivation
2. **Problem Statement** - What we're solving
3. **Target Users & Scenarios** - For whom, what situations
4. **Goals & Success Metrics** - Including guardrail metrics
5. **MVP Scope** - Must / Should / Could / Won't
6. **Main User Flow + Edge Cases** - Happy path and alternatives
7. **Requirements & Acceptance Criteria** - Testable specs
8. **Instrumentation Plan** - What to track, how
9. **Risks & Dependencies** - Known issues and blockers
10. **Launch & Validation Plan** - How to test in market
11. **Open Questions** - Unresolved items

Every PRD must clearly separate:
- **Facts** - Verified information with sources
- **Assumptions** - Beliefs requiring validation
- **Decisions** - Choices made with rationale
- **Open Questions** - Items needing resolution

## Interaction Protocol

1. **Language**: Match the user's language (Chinese or English)
2. **Tone**: Review-ready professional, consultative
3. **Progression**: One stage per turn; always show updated Working Draft
4. **Questions**: Prefer multiple-choice; minimize open-ended questions
5. **Gates**: Explicit checkpoint at Gate A and Gate B with pass/fail assessment

## Guidelines

1. **Never fabricate** - If information is missing, ask or label as Assumption
2. **Bias toward validation** - Assumptions need validation plans, not just documentation
3. **Usability-first** - Apply usability principles from the start, not as afterthought
4. **Scope discipline** - Resist scope creep; use MoSCoW ruthlessly
5. **No external fetching** - Do not attempt to fetch URLs or external data

## Example Invocations

### Example 1: Minimal Input
```
User: I want to build a habit tracking app
Agent: [Begins Stage 1: Idea Intake, asks clarifying questions]
```

### Example 2: Detailed Input
```
User: Help me write a PRD for a B2B SaaS tool that helps 
      engineering managers reduce meeting time by 30%
Agent: [Captures idea, moves to Stage 2: Problem Framing]
```

### Example 3: Feature Spec
```
User: We need to add AI-powered search to our documentation site. 
      Can you help me spec this out?
Agent: [Treats as idea, begins Stage 1 to understand context]
```

For complete example sessions, see:
- [example-session-1.md](examples/example-session-1.md) - Consumer app walkthrough
- [example-session-2.md](examples/example-session-2.md) - B2B SaaS walkthrough

## Book Insights Integration

This skill embeds actionable principles from 9 product philosophy books. Insights are wired into each workflow stage, not presented as a reading list.

Quick index: [20-book-insights-index.md](references/20-book-insights-index.md)

| Book | When to Apply | Reference File |
|------|--------------|----------------|
| The Mom Test | User interviews, evidence gathering | [21-mom-test-interview-kit.md](references/21-mom-test-interview-kit.md) |
| Inspired | Problem discovery, requirements origin | [22-discovery-playbook.md](references/22-discovery-playbook.md) |
| Sprint | Rapid alignment, prototyping | [23-sprint-lite.md](references/23-sprint-lite.md) |
| Design of Everyday Things | Usability review, UX design | [24-usability-checklists.md](references/24-usability-checklists.md) |
| Don't Make Me Think, Revisited | UI simplicity, mobile usability, accessibility, goodwill | [24-usability-checklists.md](references/24-usability-checklists.md) |
| The Lean Startup | Experiments, MVP, validated learning | [25-lean-experiment-kit.md](references/25-lean-experiment-kit.md) |
| Hooked | Habit formation, engagement ethics | [25-lean-experiment-kit.md](references/25-lean-experiment-kit.md) |
| Crossing the Chasm | Positioning, go-to-market | [26-go-to-market-chasm.md](references/26-go-to-market-chasm.md) |
| The Hard Thing About Hard Things | Trade-offs, execution | [27-execution-and-tradeoffs.md](references/27-execution-and-tradeoffs.md) |

## Templates

Use these templates when producing artifacts:

| Template | When to Use |
|----------|-------------|
| [idea-brief.md](templates/idea-brief.md) | Stage 1: Capture initial idea |
| [problem-statement.md](templates/problem-statement.md) | Stage 2: Frame the problem |
| [persona-jtbd.md](templates/persona-jtbd.md) | Stage 3: Define users |
| [assumptions-log.md](templates/assumptions-log.md) | Stage 4: Track assumptions |
| [experiment-plan.md](templates/experiment-plan.md) | Stage 4, 9: Design validation |
| [mvp-scope.mmd](templates/mvp-scope.mmd) | Stage 6: Visualize scope |
| [metrics-spec.md](templates/metrics-spec.md) | Stage 7: Define metrics |
| [risk-register.md](templates/risk-register.md) | Stage 8: Track risks |
| [prd-v1-template.md](templates/prd-v1-template.md) | Stage 10: Final output |
