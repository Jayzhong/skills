# Example Session 2: B2B Developer Productivity Tool

This example demonstrates the PRD-from-Idea workflow for a B2B SaaS product with more emphasis on positioning, whole product, and assumption handling.

---

## Stage 1: Idea Intake

**User Input**:
> "Help me write a PRD for a B2B SaaS tool that helps engineering managers reduce meeting time by 30%"

**Agent Response**:

This is a focused idea! Let me capture and clarify:

1. **What inspired this idea?**
   - [x] Customer observation / market opportunity

2. **Do you have engineering managers you can talk to?**
   - [x] Yes, I'm connected to the target audience

3. **Any constraints?**
   - [x] Timeline: Want to validate in next 90 days
   - [x] Team: 2 engineers, 1 designer

**Idea Brief Created**:
```
Core Idea: Tool to reduce engineering manager meeting time by 30%
Origin: Market opportunity
Platform: Web app (SaaS)
Initial Target: Engineering managers at tech companies
Constraints: 90-day validation window, small team
Timeline Implication: Need to scope ruthlessly for MVP
```

→ Proceeding to Stage 2: Problem Framing

---

## Stage 2: Problem Framing

**Agent Questions** (applying Inspired):

Before we discuss solutions, let's understand the problem deeply:

1. What makes meeting time a problem for engineering managers specifically?
2. What have you observed them trying already?

**User Response**:
> "EMs I know spend 25-30 hours per week in meetings. They can't do actual work like 1:1s, career development, or hiring. Most meetings are status updates that could be async."

**Problem Statement Created**:
```
Engineering managers at tech companies (50-500 employees) spend 
25-30 hours per week in meetings, resulting in insufficient time 
for high-value work like 1:1s, career development, and hiring. 
Currently, they attempt to decline meetings or batch them, 
which fails because organizational culture expects synchronous 
updates and calendar tools don't distinguish meeting importance.
```

**Problem Significance**:
- [x] Critical for this persona (directly impacts job performance)
- Evidence needed: Quantify the opportunity cost of lost EM time

→ Proceeding to Stage 3: User & Scenarios

---

## Stage 3: User & Scenarios

**Agent prompts** (applying Mom Test questions):

To avoid leading questions, let's explore what EMs actually do:

1. Walk me through a typical week of meetings
2. Which meetings feel most wasteful?
3. Have you tried any tools or tactics to reduce meetings?

**User Response**:
> "Most wasteful are team standups (15 people, 30 min daily) and status meetings (weekly hour-long reviews). Some EMs use Slack threads instead but adoption is inconsistent."

**Persona Created**:
```
Name: Pat the Pressured EM
Role: Engineering Manager, 5-12 direct reports
Company: Tech company, 50-500 employees
Context: High meeting load, expected to be in most meetings
Technical sophistication: High
Goals: 
- Reclaim time for high-leverage work (1:1s, hiring, strategy)
- Maintain visibility into team status without synchronous meetings
Frustrations:
- Calendar is 80% meetings
- Can't decline without political cost
- Async tools (Slack) get lost in noise
```

**Jobs-to-be-Done**:
```
When I'm preparing for a status meeting, I want to see team 
updates automatically, so I can cancel the meeting if sync 
isn't needed.

When my calendar fills up with low-value meetings, I want to 
identify which to decline or make async, so I can protect 
time for 1:1s and deep work.
```

**Beachhead Segment** (applying Crossing the Chasm):
```
First target: Engineering managers at Series A-C tech companies 
(50-200 employees) who have 6+ direct reports and are already 
trying async standups via Slack. They're pragmatists who need 
proof it works.
```

→ Proceeding to Stage 4: Evidence & Assumptions

---

## Stage 4: Evidence & Assumptions

**Agent Questions**:

We have some evidence (user statements), but let's catalog what's known vs believed:

**Assumptions Log Created**:

| ID | Assumption | Confidence | Risk | Validation Plan |
|----|------------|------------|------|-----------------|
| P1 | Meeting overload is top-3 EM pain | Medium | High | Survey 30 EMs |
| P2 | 25-30 hrs/week in meetings is typical | Low | Med | Data from calendar analysis |
| U1 | EMs have authority to change meeting culture | Low | High | Interviews on organizational dynamics |
| S1 | Async updates can replace standups | Medium | High | Pilot with 3 teams |
| S2 | EMs will adopt new tool (change behavior) | Low | Critical | Prototype test with 5 EMs |
| B1 | EMs control budget or can influence purchase | Low | High | Buyer interviews |
| B2 | $20-50/user/month is acceptable price | Low | Med | Pricing survey |

**Leap of Faith Assumptions**:
1. **S2**: EMs will actually use a new tool consistently (behavior change is hard)
2. **U1**: Individual EMs can change meeting culture (may need org buy-in)

**Agent Note** (applying Mom Test):
We haven't validated these. Before proceeding past Gate A, recommend:
- 5 Mom Test interviews with target EMs
- Focus on past behavior, not hypothetical willingness

→ Gate A Assessment

---

## Gate A: Worth Doing?

| Criterion | Status | Notes |
|-----------|--------|-------|
| Problem is clear | ✓ | Meeting overload → lost high-value time |
| Target user defined | ✓ | EMs at 50-200 person tech companies |
| Evidence exists | ⚠️ | Anecdotal only. Need 5 interviews. |
| Success is measurable | ✓ | Meeting hours reduced, EM satisfaction |

**Gate A Verdict**: CONDITIONAL PASS
- Proceed with solution shaping
- MUST complete 5 Mom Test interviews before Gate B
- If interviews invalidate P1 or U1, pivot or kill

→ Proceeding to Stage 5 (with evidence gathering in parallel)

---

## Stage 5: Solution Shaping

**Agent Prompt** (applying Sprint):

Let's explore 3 solution directions:

1. **Meeting audit tool**: Analyzes calendar, recommends which meetings to decline/async
2. **Async standup replacement**: Structured daily updates that eliminate standup meetings
3. **Meeting cost calculator**: Shows dollar cost of meetings to influence culture change

**User Choice**: Combination of 1 + 2

**Solution Direction**:
```
A platform that:
- Connects to Google Calendar
- Analyzes meeting patterns (identifies recurring low-value meetings)
- Provides async standup capability as meeting replacement
- Shows impact: "You saved 4 hours this week"
```

**Design Principles** (applying Don't Make Me Think):
```
- Setup in under 5 minutes (calendar OAuth)
- Visible value in first week (meeting analysis dashboard)
- Low adoption friction for team members (simple async updates)
- Quantified results (hours saved prominently displayed)
```

→ Proceeding to Stage 6: MVP Scope

---

## Stage 6: MVP Scope

**Scope Discussion** (applying Hard Thing trade-offs):

With 2 engineers for 90 days, we need to be ruthless.

**Agent Challenge Questions**:
- Can we launch with JUST the async standup, no calendar analysis?
- Can we validate demand before building calendar integration?

**User Response**:
> "Calendar analysis is the magic. It shows them the problem they already feel."

**MoSCoW Scope**:

| Category | Features |
|----------|----------|
| **MUST** | Google Calendar OAuth, Meeting analysis dashboard, Async standup for 1 team |
| **SHOULD** | Meeting recommendations (decline/async suggestions), Weekly email summary |
| **COULD** | Slack integration, Multiple team support, Outlook support |
| **WON'T** | AI meeting notes, Video conferencing, Mobile app, SSO/enterprise features |

**MVP Validation Goal**:
Get 5 EMs to connect calendars, use async standups for 2 weeks, and measure perceived time savings.

**Whole Product Consideration** (applying Crossing the Chasm):
For pragmatist EMs to adopt, they also need:
- Clear onboarding for their team
- Integration with existing tools (Slack at minimum)
- Proof from similar companies

**Decision**: Add Slack integration to SHOULD (critical for async adoption)

→ Proceeding to Stage 7: Metrics

---

## Stage 7: Metrics & Instrumentation

**North Star Metric**:
```
Weekly active teams using async standups
Why: Captures actual behavior change, not just signups
```

**Success Metrics**:
| Metric | Definition | 90-day Target |
|--------|------------|---------------|
| Weekly active teams | Teams with 80%+ standup completion rate | 20 teams |
| Self-reported time saved | EM survey | 4+ hours/week average |
| Standup meeting elimination | Meetings canceled after async adoption | 50% of target teams |

**Guardrail Metrics**:
| Metric | Threshold |
|--------|-----------|
| Team member fatigue | <10% negative feedback on async |
| EM churn | <15%/month |
| Time to first value | <7 days to first insight |

→ Proceeding to Stage 8: Risks

---

## Stage 8: Risks & Dependencies

**Risk Register** (applying Hard Thing wartime thinking):

| Risk | Prob | Impact | Mitigation |
|------|------|--------|------------|
| EMs can't change culture alone | High | Critical | Target teams where EM has strong influence; include "convince your boss" playbook |
| Behavior change is hard | High | High | Focus on minimum-friction async; celebrate wins publicly |
| Calendar OAuth trust issues | Med | High | Clear privacy controls; enterprise security page |
| Standup fatigue (async feels like more work) | Med | Med | Make async faster than talking; time-box to 2 min |
| Outlook users excluded | Med | Med | Accept: focus on Google-first beachhead |

**Dependencies**:
| Dependency | Status | Risk |
|------------|--------|------|
| Google Calendar API | Available | Low |
| Slack API | Available | Low |
| Target users for pilot | Need to recruit | Medium |

→ Gate B Assessment

---

## Gate B: Shippable?

| Criterion | Status | Notes |
|-----------|--------|-------|
| Scope fits resources | ✓ | 2 engineers × 90 days = achievable |
| Dependencies manageable | ✓ | APIs available; need to recruit pilots |
| Critical risks mitigated | ⚠️ | Culture change risk accepted; mitigated with playbooks |
| Validation plan executable | ✓ | 5 EM pilot with clear success criteria |

**Gate B Verdict**: PASS
- Proceed to launch planning
- Mitigation: Create "convince your leadership" materials for pilot EMs

→ Proceeding to Stage 9: Launch Plan

---

## Stage 9: Launch & Validation Plan

**Launch Approach** (applying Crossing the Chasm beachhead):

```
Phase 1: Design partners (5 EMs from network, white-glove onboarding)
Phase 2: Waitlist beta (50 EMs from target segment)
Phase 3: Public launch to beachhead segment
```

**Validation Hypotheses**:

**Hypothesis 1: Problem validation**
```
EMs at 50-200 person tech companies will connect their calendars 
because they want visibility into their meeting problem.
Validation: 80% of pilot EMs complete onboarding.
```

**Hypothesis 2: Solution validation**
```
Teams using async standups will report saving 4+ hours/week 
and eliminate at least one recurring meeting.
Validation: 60% of pilot teams achieve this within 4 weeks.
```

**Decision Point**:
| Outcome | Criteria | Action |
|---------|----------|--------|
| Strong validation | Both hypotheses met | Raise seed funding, scale |
| Partial validation | H1 met, H2 partial | Iterate on async UX |
| Weak validation | Neither met | Pivot to different solution |

**Positioning Statement** (applying Crossing the Chasm):
```
For engineering managers at growing tech companies 
who spend too much time in status meetings, 
MeetingZero is a meeting reduction platform 
that eliminates unnecessary synchronous meetings 
through smart async alternatives. 
Unlike calendar blockers or async tools, 
MeetingZero shows you exactly which meetings 
to cut and provides direct replacements.
```

→ Proceeding to Stage 10: PRD Output

---

## Stage 10: PRD v1 Output

Final PRD v1 includes all sections with clear fact/assumption separation:

### Facts
- F1: Interviewed 5 EMs who report 25-30 hrs/week in meetings (source: discovery interviews)
- F2: Status standups are most-cited wasteful meeting type (source: 4/5 interviewees)
- F3: Google Calendar API supports required functionality (source: API docs)

### Assumptions
- A1: EMs will change behavior to use new tool (confidence: Low, validate: pilot usage data)
- A2: Async standups can fully replace sync standups (confidence: Medium, validate: pilot feedback)
- A3: $30/user/month is acceptable (confidence: Low, validate: post-pilot pricing survey)
- A4: EMs have enough org power to drive change (confidence: Low, validate: pilot org dynamics observation)

### Decisions
- D1: Google Calendar only for v1 (rationale: 70% of target market, faster to build)
- D2: Single team per account in MVP (rationale: scope control; enterprise multi-team is v2)
- D3: Freemium not planned for v1 (rationale: B2B; direct pilot → paid conversion)

### Open Questions
| ID | Question | Owner | Due |
|----|----------|-------|-----|
| Q1 | What's the minimum standup completion rate for value? | PM | Pilot week 2 |
| Q2 | Do EMs need to involve their directors in purchase? | PM | Buyer interviews |
| Q3 | Is Slack integration MUST or SHOULD for pilot? | PM + Design | Pre-pilot |

---

## Session Summary

**Input**: "Help me write a PRD for a B2B SaaS tool that helps engineering managers reduce meeting time by 30%"

**Output**: Complete PRD v1 with:
- Clear problem: Meeting overload → lost high-value work time
- Defined user: EMs at 50-200 person tech companies
- Addressed risks: Culture change, behavior adoption, org dynamics
- Scoped MVP: Calendar analysis + async standups for one team
- Positioned: Meeting reduction platform, not just another async tool
- Validation plan: 5 design partners → 50 beta users
- Explicit assumptions about behavior change and willingness to pay

**Key Lessons Demonstrated**:
1. B2B requires understanding buyer vs user dynamics
2. Behavior change products need extra assumption validation
3. Whole product thinking (Chasm) matters for pragmatist adoption
4. Scope discipline (Hard Thing) in resource-constrained environment
