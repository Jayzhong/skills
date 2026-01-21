# PRD-from-Idea Skill

A consultative Agent Skill that guides users from a rough product idea to a professional PRD v1 through a structured 10-stage workflow.

## Quick Start

Simply share your product idea:
- "I want to build a meal planning app for busy parents"
- "Help me write a PRD for a developer productivity tool"
- "We need to add AI-powered search to our docs site"

The skill will guide you through problem framing, user research, assumption validation, MVP scoping, and launch planning.

## What You Get

- **PRD v1**: Complete product requirements document
- **Working Draft**: Updated after each stage
- **Templates**: Reusable artifacts for each workflow stage
- **Validated Thinking**: Evidence-based decisions, labeled assumptions with validation plans

## Workflow Overview

```
1. Idea Intake → 2. Problem Framing → 3. Users/JTBD
         ↓
4. Evidence & Assumptions → [GATE A: Worth Doing?]
         ↓
5. Solution Shaping → 6. MVP Scope → 7. Metrics
         ↓
8. Risks & Dependencies → [GATE B: Shippable?]
         ↓
9. Launch Plan → 10. PRD v1 Output
```

## Embedded Book Insights

The skill integrates actionable principles from 9 product philosophy books:

| Book | Insight Area |
|------|--------------|
| The Mom Test | User interviews, evidence quality |
| Inspired | Discovery vs delivery, requirements origin |
| Sprint | Rapid prototyping, time-boxed validation |
| Design of Everyday Things | Usability, mental models |
| Don't Make Me Think | Self-explanatory UI, scannability |
| The Lean Startup | MVP, validated learning, experiments |
| Hooked | Habit formation, engagement ethics |
| Crossing the Chasm | Positioning, beachhead strategy |
| The Hard Thing About Hard Things | Trade-offs, execution under uncertainty |

## Folder Structure

```
prd-from-idea-skill/
├── SKILL.md                    # Main skill file
├── README.md                   # This file
├── references/
│   ├── 00-skill-overview.md    # Skill philosophy
│   ├── 10-idea-to-prd-workflow.md  # Detailed workflow
│   ├── 20-book-insights-index.md   # Book reference index
│   ├── 21-mom-test-interview-kit.md
│   ├── 22-discovery-playbook.md
│   ├── 23-sprint-lite.md
│   ├── 24-usability-checklists.md
│   ├── 25-lean-experiment-kit.md
│   ├── 26-go-to-market-chasm.md
│   └── 27-execution-and-tradeoffs.md
├── templates/
│   ├── idea-brief.md
│   ├── problem-statement.md
│   ├── persona-jtbd.md
│   ├── assumptions-log.md
│   ├── experiment-plan.md
│   ├── mvp-scope.mmd
│   ├── metrics-spec.md
│   ├── risk-register.md
│   └── prd-v1-template.md
└── examples/
    ├── example-session-1.md    # Consumer app walkthrough
    └── example-session-2.md    # B2B SaaS walkthrough
```

## Key Features

### Two Quality Gates

- **Gate A (Worth Doing?)**: Clear problem, defined user, evidence or validated assumptions
- **Gate B (Shippable?)**: Controlled scope, manageable risks, executable validation plan

### Output Contract

Every PRD explicitly separates:
- **Facts**: Verified information with sources
- **Assumptions**: Beliefs with confidence levels and validation plans
- **Decisions**: Choices made with documented rationale
- **Open Questions**: Unresolved items with owners

### Safety Principles

- No external URL fetching (avoid prompt injection)
- Never fabricate facts or numbers
- When info is missing: ask questions or label as Assumption
- Maintain validation plans for all assumptions

## Usage Examples

See the `examples/` folder for complete walkthroughs:
- [example-session-1.md](examples/example-session-1.md): Consumer fitness app
- [example-session-2.md](examples/example-session-2.md): B2B meeting reduction SaaS
