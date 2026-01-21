# Idea-to-PRD Workflow Specification

This document details the 10-stage workflow for transforming a product idea into a PRD v1.

## Table of Contents
1. [Stage 1: Idea Intake](#stage-1-idea-intake)
2. [Stage 2: Problem Framing](#stage-2-problem-framing)
3. [Stage 3: User & Scenarios](#stage-3-user--scenarios)
4. [Stage 4: Evidence & Assumptions](#stage-4-evidence--assumptions)
5. [Gate A: Worth Doing?](#gate-a-worth-doing)
6. [Stage 5: Solution Shaping](#stage-5-solution-shaping)
7. [Stage 6: MVP Scope](#stage-6-mvp-scope)
8. [Stage 7: Metrics & Instrumentation](#stage-7-metrics--instrumentation)
9. [Stage 8: Risks & Dependencies](#stage-8-risks--dependencies)
10. [Gate B: Shippable?](#gate-b-shippable)
11. [Stage 9: Launch & Validation Plan](#stage-9-launch--validation-plan)
12. [Stage 10: PRD v1 Output](#stage-10-prd-v1-output)

---

## Stage 1: Idea Intake

**Goal**: Capture the raw idea in the user's own words.

**Inputs**: User's initial idea (can be one sentence or detailed)

**Outputs**: 
- Idea Brief (use [idea-brief.md](../templates/idea-brief.md))
- Initial context captured

**Questions to Ask** (multiple choice preferred):
1. What's the core idea in one sentence?
2. What inspired this idea?
   - [ ] Personal pain point
   - [ ] Customer request
   - [ ] Competitive observation
   - [ ] Business opportunity
   - [ ] Other: ___
3. What's the intended platform/context?
   - [ ] Mobile app
   - [ ] Web app
   - [ ] Desktop software
   - [ ] API/service
   - [ ] Hardware
   - [ ] Other: ___
4. Do you have any constraints I should know about?
   - [ ] Timeline pressures
   - [ ] Budget limits
   - [ ] Technical constraints
   - [ ] Regulatory requirements
   - [ ] No specific constraints yet

**Book Insights**: None directly applied; focus on listening.

**Completion Criteria**: Core idea captured, context understood.

---

## Stage 2: Problem Framing

**Goal**: Articulate the underlying problem the idea addresses.

**Inputs**: Idea Brief from Stage 1

**Outputs**: 
- Problem Statement (use [problem-statement.md](../templates/problem-statement.md))
- Problem significance assessment

**Questions to Ask**:
1. What problem does this solve?
2. Who currently has this problem?
3. How do they solve it today (current alternatives)?
4. What's the cost of not solving it?
   - [ ] Time wasted
   - [ ] Money lost
   - [ ] Frustration/stress
   - [ ] Missed opportunities
   - [ ] Risk exposure
5. How significant is this problem?
   - [ ] Critical (hair on fire)
   - [ ] Significant (willing to pay)
   - [ ] Nice to have (might use if free)
   - [ ] Unclear (need to validate)

**Book Insights to Apply**:
- **Inspired**: Distinguish problem discovery from solution delivery. Don't skip to features.
- **Lean Startup**: Frame problem as hypothesis to test.

**Problem Statement Format**:
```
[Target user] experiences [problem] when [situation], 
resulting in [negative outcome]. Currently, they 
[current workaround], which [limitation of workaround].
```

**Completion Criteria**: Problem statement passes "so what?" test—significance is clear.

---

## Stage 3: User & Scenarios

**Goal**: Define target users and their jobs-to-be-done.

**Inputs**: Problem Statement from Stage 2

**Outputs**: 
- Persona(s) (use [persona-jtbd.md](../templates/persona-jtbd.md))
- Key scenarios/use cases

**Questions to Ask**:
1. Who specifically has this problem?
   - Demographics
   - Context (work/personal/both)
   - Technical sophistication
2. What job are they trying to accomplish?
3. When does this problem occur?
   - [ ] Specific trigger events
   - [ ] Regular cadence
   - [ ] Unpredictable situations
4. Who else is involved in the workflow?
   - Decision makers
   - Influencers
   - End users (if different)

**Book Insights to Apply**:
- **Mom Test**: Avoid leading questions. Ask about past behavior, not future intent.
- **Crossing the Chasm**: Identify if targeting early adopters or mainstream. Define the beachhead.

**Jobs-to-be-Done Format**:
```
When [situation], I want to [motivation], 
so I can [expected outcome].
```

**Completion Criteria**: Can describe a real person and specific situation where problem occurs.

---

## Stage 4: Evidence & Assumptions

**Goal**: Separate what we know from what we believe.

**Inputs**: Problem + User definitions from Stages 2-3

**Outputs**: 
- Assumptions Log (use [assumptions-log.md](../templates/assumptions-log.md))
- Evidence inventory
- Validation plan for critical assumptions

**Questions to Ask**:
1. What evidence do you have for this problem?
   - [ ] Direct user interviews
   - [ ] Support tickets / feedback
   - [ ] Usage data / analytics
   - [ ] Market research
   - [ ] Personal experience only
   - [ ] Intuition only
2. What are the biggest unknowns?
3. Which assumptions would kill the product if wrong?

**Book Insights to Apply**:
- **Mom Test**: Evaluate evidence quality. "Would buy" is weak; "already tried to solve" is strong.
- **Lean Startup**: Identify leap-of-faith assumptions requiring immediate validation.

**Assumption Categories**:
- **Problem assumptions**: Does this problem exist at claimed severity?
- **User assumptions**: Is our target user correctly defined?
- **Solution assumptions**: Will our approach solve the problem?
- **Business assumptions**: Will this create/capture value?

**Completion Criteria**: Critical assumptions identified with validation owners and plans.

---

## Gate A: Worth Doing?

**Checkpoint before solution design.**

**Pass Criteria** (all required):
| Criterion | Check |
|-----------|-------|
| Problem is clearly articulated | [ ] |
| Problem significance is validated or explicitly assumed | [ ] |
| Target user is specifically defined | [ ] |
| Evidence exists OR assumptions have validation plans | [ ] |
| Success criteria are measurable | [ ] |

**If Fail**:
- **Pivot option**: Reframe problem or target different user
- **Pause option**: Gather more evidence before proceeding
- **Kill option**: Acknowledge idea isn't viable (valid outcome)

**Gate Summary Output**:
```
GATE A ASSESSMENT
Status: [PASS / FAIL]
Problem: [one-line summary]
User: [target user summary]
Evidence Quality: [Strong/Medium/Weak + explanation]
Proceed: [Yes / Pivot / Pause / Kill]
```

---

## Stage 5: Solution Shaping

**Goal**: Explore solution approaches without over-committing.

**Inputs**: Validated problem + user from Stages 2-4

**Outputs**: 
- Solution direction (not detailed spec)
- Key user flows (happy path)
- Design principles/constraints

**Questions to Ask**:
1. What solution approaches could work?
   - [ ] New product
   - [ ] Feature in existing product
   - [ ] Integration with third-party
   - [ ] Process/workflow change
   - [ ] Other: ___
2. What's the simplest version that delivers value?
3. What's non-negotiable in the experience?

**Book Insights to Apply**:
- **Sprint**: Use "How Might We" framing. Sketch multiple options before converging.
- **Design of Everyday Things**: Apply visibility, feedback, mapping, constraints.
- **Don't Make Me Think**: Prioritize self-explanatory over powerful.

**Design Principles Prompts**:
- What should this feel like to use?
- What's the #1 thing users should accomplish?
- What complexity should we hide?
- What errors must we prevent?

**Completion Criteria**: Clear solution direction with rationale; not a detailed spec.

---

## Stage 6: MVP Scope

**Goal**: Define the smallest release that delivers value.

**Inputs**: Solution direction from Stage 5

**Outputs**: 
- MoSCoW scope (use [mvp-scope.mmd](../templates/mvp-scope.mmd))
- Scope rationale

**Questions to Ask**:
1. What's absolutely required to deliver core value?
2. What could wait for v2?
3. What constraints affect scope?
   - [ ] Ship date
   - [ ] Team size
   - [ ] Technical debt
   - [ ] Dependencies
4. What's explicitly out of scope (Won't)?

**Book Insights to Apply**:
- **Lean Startup**: MVP is smallest thing that enables validated learning.
- **Hard Thing**: Scope discipline under pressure. Cut features, not corners.

**MoSCoW Definition**:
- **Must**: Without these, product doesn't work. Core value delivery.
- **Should**: Important but not critical for launch. Strong v1.1 candidates.
- **Could**: Nice additions if time permits. Low priority.
- **Won't**: Explicitly excluded from this version. Documented for clarity.

**Scope Challenge Questions**:
- For each "Must": What happens if we launched without it?
- For each "Should": What would make this a "Must"?
- Is there a smaller "v0.5" that could validate faster?

**Completion Criteria**: Crisp scope with clear rationale for each category.

---

## Stage 7: Metrics & Instrumentation

**Goal**: Define how success will be measured.

**Inputs**: MVP scope from Stage 6

**Outputs**: 
- Metrics specification (use [metrics-spec.md](../templates/metrics-spec.md))
- Instrumentation requirements

**Questions to Ask**:
1. What does success look like in 30/90/180 days?
2. What's the primary success metric (North Star)?
3. What guardrail metrics prevent bad outcomes?
4. What leading indicators predict success?

**Book Insights to Apply**:
- **Lean Startup**: Actionable metrics over vanity metrics. Can this metric inform a decision?
- **Hooked**: If building habit-forming product, define engagement ladder. Include ethical guardrails.

**Metric Types**:
- **North Star**: The one metric that best captures value delivery
- **Input metrics**: Leading indicators we can influence
- **Output metrics**: Lagging indicators that confirm success
- **Guardrail metrics**: Things that shouldn't get worse

**Instrumentation Requirements**:
- What events to track
- What properties to capture
- Where data will be stored
- Who needs access

**Completion Criteria**: Clear success definition with measurable targets.

---

## Stage 8: Risks & Dependencies

**Goal**: Identify what could go wrong and what we depend on.

**Inputs**: Scoped MVP + metrics from Stages 6-7

**Outputs**: 
- Risk Register (use [risk-register.md](../templates/risk-register.md))
- Dependency map
- Mitigation plans

**Questions to Ask**:
1. What could prevent us from shipping?
2. What external dependencies exist?
   - [ ] APIs / services
   - [ ] Teams / resources
   - [ ] Approvals / compliance
   - [ ] Technology choices
3. What could make this fail after launch?
4. What's the worst realistic outcome?

**Book Insights to Apply**:
- **Hard Thing**: Distinguish "wartime" (survival risks) from "peacetime" (optimization risks).
- Face ugly truths early; don't hide from hard problems.

**Risk Categories**:
- **Technical**: Can we build it?
- **Market**: Will anyone want it?
- **Resource**: Can we afford it?
- **Execution**: Can we ship it?
- **Regulatory**: Is it allowed?

**Risk Assessment Matrix**:
| Impact | Low Probability | High Probability |
|--------|----------------|------------------|
| High   | Monitor        | Mitigate now     |
| Low    | Accept         | Monitor          |

**Completion Criteria**: Critical risks have mitigation plans or explicit acceptance.

---

## Gate B: Shippable?

**Checkpoint before launch planning.**

**Pass Criteria** (all required):
| Criterion | Check |
|-----------|-------|
| MVP scope fits available resources | [ ] |
| Dependencies are identified and manageable | [ ] |
| Critical risks have mitigation plans | [ ] |
| Success metrics are instrumented | [ ] |
| Validation plan is executable | [ ] |

**If Fail**:
- **Descope option**: Cut to smaller MVP that fits constraints
- **Resolve option**: Address blocking dependencies or risks
- **Redesign option**: Rethink solution approach

**Gate Summary Output**:
```
GATE B ASSESSMENT
Status: [PASS / FAIL]
Scope Fit: [Yes / Needs adjustment]
Critical Dependencies: [list]
Top Risks: [list with mitigation status]
Proceed: [Yes / Descope / Resolve / Redesign]
```

---

## Stage 9: Launch & Validation Plan

**Goal**: Plan how to release and validate in market.

**Inputs**: De-risked MVP from Stages 6-8

**Outputs**: 
- Validation plan (use [experiment-plan.md](../templates/experiment-plan.md))
- Launch approach

**Questions to Ask**:
1. How will we release?
   - [ ] Big bang (full launch)
   - [ ] Beta/pilot (limited users)
   - [ ] Feature flag (gradual rollout)
   - [ ] Smoke test (landing page)
2. Who are the first users?
3. What will we learn from launch?
4. What signals would cause us to pivot?

**Book Insights to Apply**:
- **Crossing the Chasm**: Start narrow. Dominate a beachhead before expanding.
- **Sprint**: Time-box validation. Know when to declare success or failure.

**Validation Design**:
- **Hypothesis**: What specific belief are we testing?
- **Method**: How will we test it?
- **Success criteria**: What number/outcome = validation?
- **Duration**: How long until we decide?
- **Next steps**: What do we do if validated? If not?

**Launch Checklist**:
- [ ] Instrumentation verified
- [ ] User feedback channel established
- [ ] Support/ops team briefed
- [ ] Rollback plan defined
- [ ] Success/failure criteria documented

**Completion Criteria**: Clear validation hypothesis with decision criteria.

---

## Stage 10: PRD v1 Output

**Goal**: Produce the final PRD document.

**Inputs**: All previous stage outputs

**Outputs**: 
- PRD v1 (use [prd-v1-template.md](../templates/prd-v1-template.md))
- Optionally: Written to `/docs/PRD_v1.md` if file writing available

**Final Document Structure**:
1. Background
2. Problem Statement
3. Target Users & Scenarios
4. Goals & Success Metrics
5. MVP Scope (Must/Should/Could/Won't)
6. Main User Flow + Edge Cases
7. Requirements & Acceptance Criteria
8. Instrumentation Plan
9. Risks & Dependencies
10. Launch & Validation Plan
11. Open Questions

**Required Sections at End**:
- **Facts**: Verified information with sources
- **Assumptions**: Beliefs with confidence levels and validation plans
- **Decisions**: Choices made with documented rationale
- **Open Questions**: Unresolved items with owners

**Quality Checklist**:
- [ ] No unsubstantiated claims
- [ ] All assumptions labeled
- [ ] All decisions have rationale
- [ ] Scope is MoSCoW categorized
- [ ] Metrics are measurable
- [ ] Risks have mitigations
- [ ] Open questions have owners

**Completion Criteria**: PRD passes review-readiness check.
