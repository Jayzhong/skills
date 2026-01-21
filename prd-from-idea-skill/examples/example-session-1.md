# Example Session 1: Consumer Fitness App

This example demonstrates the full PRD-from-Idea workflow for a consumer mobile app idea.

---

## Stage 1: Idea Intake

**User Input**:
> "I want to build a habit tracking app for fitness"

**Agent Response**:

Great! Let's capture this idea. I have a few clarifying questions:

1. **What inspired this idea?**
   - [x] Personal pain point
   - [ ] Customer request
   - [ ] Other

2. **What platform are you thinking?**
   - [x] Mobile app (iOS/Android)

3. **Any known constraints?**
   - [ ] Timeline: None specific
   - [x] Budget: Bootstrapped / limited

**Idea Brief Created**:
```
Core Idea: A habit tracking app focused on fitness
Origin: Personal pain point
Platform: Mobile app
Initial Target: People trying to build fitness habits
Constraints: Limited budget (bootstrapped)
```

→ Proceeding to Stage 2: Problem Framing

---

## Stage 2: Problem Framing

**Agent Questions**:

1. What specific problem does this solve?
2. What happens when people try to build fitness habits today?

**User Response**:
> "I keep starting workout routines but never stick with them. Apps like MyFitnessPal are too complicated. I just want something simple that shows my streak."

**Agent Analysis** (applying Inspired):
The user is describing a problem with habit persistence, not fitness tracking. The competition isn't other fitness apps—it's complexity itself.

**Problem Statement Created**:
```
People trying to build fitness habits experience motivation drop-off 
after the initial enthusiasm (typically 2-3 weeks), resulting in 
abandoned goals and frustration. Currently, they use complex fitness 
apps or willpower alone, which fails because the feedback loop is 
too slow and the tracking overhead is too high.
```

**Problem Significance**:
- [x] Significant (users have tried other solutions)
- Evidence: Personal experience, validated by 2-3 week gym membership drop-off statistics

→ Proceeding to Stage 3: User & Scenarios

---

## Stage 3: User & Scenarios

**Agent Questions** (applying Mom Test principles):

1. Tell me about the last time you tried to start a fitness routine. What happened?
2. What apps or tools did you try? Why did you stop using them?

**User Response**:
> "I tried MyFitnessPal but got overwhelmed with calorie tracking. I used the Apple Fitness rings but they felt like chores. I just want to see that I showed up."

**Persona Created**:
```
Name: Alex the Aspiring Regular
Role: Knowledge worker, 25-40
Context: Wants to exercise but struggles with consistency
Technical sophistication: Intermediate
Goal: Build a sustainable exercise habit, not become an athlete
Frustrations: 
- Apps track too much
- No visible progress until weeks later
- Breaking a streak feels like total failure
```

**Jobs-to-be-Done**:
```
When I finish a workout, I want to log it in under 5 seconds, 
so I can see my streak without friction.

When I'm about to skip a workout, I want to see how far I've come,
so I have motivation to show up anyway.
```

**Beachhead Segment** (applying Crossing the Chasm):
```
Early adopters: Tech-savvy 25-35 year olds who have previously 
failed with fitness apps and are looking for a simpler approach.
They're already on Reddit/Twitter discussing habit formation.
```

→ Proceeding to Stage 4: Evidence & Assumptions

---

## Stage 4: Evidence & Assumptions

**Agent Questions**:

1. What evidence do you have that others share this problem?
2. What are the biggest unknowns?

**User Response**:
> "I've seen lots of Reddit threads about gym motivation and streak anxiety. But I haven't interviewed anyone."

**Assumptions Log Created**:

| ID | Assumption | Confidence | Risk | Validation Plan |
|----|------------|------------|------|-----------------|
| P1 | The problem is widespread enough | Medium | High | Survey 50 target users |
| U1 | Users want simplicity over features | Medium | High | A/B test simple vs feature-rich prototype |
| S1 | Streaks motivate without causing anxiety | Low | High | User interviews about streak psychology |
| B1 | Users will pay $2.99/month for this | Low | Medium | Landing page with pricing |

**Leap of Faith Assumptions**:
1. **S1**: Streak mechanics help more than they hurt (some users get anxious about breaking streaks)
2. **B1**: Willingness to pay for yet another fitness app

→ Gate A Assessment

---

## Gate A: Worth Doing?

| Criterion | Status | Notes |
|-----------|--------|-------|
| Problem is clear | ✓ | Habit persistence, not fitness tracking |
| Target user defined | ✓ | Tech-savvy 25-35, previous app failures |
| Evidence exists | ⚠️ | Personal + indirect (Reddit). Need interviews |
| Success is measurable | ✓ | 30-day retention, streak length |

**Gate A Verdict**: PASS (with conditions)
- Proceed, but validate S1 (streak psychology) before finalizing design
- Run 5 Mom Test interviews within 2 weeks

→ Proceeding to Stage 5: Solution Shaping

---

## Stage 5: Solution Shaping

**Agent Prompts** (applying Sprint principles):

Let's sketch 3 possible solutions before converging:

1. **Ultra-minimal**: Just streaks. Log workout → see streak. Nothing else.
2. **Gentle coach**: Streaks + encouraging push notifications + break forgiveness.
3. **Social accountability**: Streaks + friend groups who can see each other's progress.

**User Choice**: Option 2 (Gentle coach)

**Design Principles** (applying Design of Everyday Things):
```
- One-tap logging (reduce friction to action)
- Visible streak counter always on screen (feedback)
- Streak "shield" allows one miss per week (error tolerance)
- Encouraging, not shaming tone (mental model: supportive friend)
```

**Key User Flow**:
```
Open app → See current streak prominently → 
Tap "I worked out" → Celebration animation → 
Updated streak → Close app
```

Total interaction time: <10 seconds

→ Proceeding to Stage 6: MVP Scope

---

## Stage 6: MVP Scope

**Applying Lean Startup MVP thinking**:

What's the minimum needed to test if streaks + forgiveness works?

**MoSCoW Scope**:

| Category | Features |
|----------|----------|
| **MUST** | One-tap workout logging, Streak counter, Streak shield (1 miss/week) |
| **SHOULD** | Push notification reminders, Celebration animations |
| **COULD** | Workout type selection, Weekly summary, Widget |
| **WON'T** | Social features, Calorie tracking, Workout tutorials, Apple Health sync |

**Scope Challenge** (applying Hard Thing):
- Q: Can we launch without push notifications?
- A: Risky—reminder is core to habit formation. Move to MUST.

**Final MVP**: One-tap logging + Streak + Shield + Reminders

→ Proceeding to Stage 7: Metrics

---

## Stage 7: Metrics & Instrumentation

**North Star Metric** (applying Lean Startup):
```
7-day active users (DAU/7 = weekly engagement rate)
Why: Captures habit formation, not just downloads
```

**Success Metrics**:
| Metric | Target (30 days) |
|--------|------------------|
| D7 retention | 40% |
| D30 retention | 25% |
| Avg streak length | 14 days |

**Guardrail Metrics**:
| Metric | Threshold |
|--------|-----------|
| Uninstalls citing "anxiety" in feedback | <5% |
| Streak shield usage | <50% (if higher, streaks are too punishing) |

**Ethical Guardrails** (applying Hooked responsibly):
- No shame-based notifications ("You're falling behind!")
- Clear value in each session (see progress)
- Easy to pause or delete account

→ Proceeding to Stage 8: Risks

---

## Stage 8: Risks & Dependencies

**Risk Register**:

| Risk | Prob | Impact | Mitigation |
|------|------|--------|------------|
| Streak anxiety causes churn | Med | High | Build in streak shields; test in beta |
| Market saturated | High | Med | Position as "anti-complexity"; target failed-app users |
| Low willingness to pay | Med | High | Freemium with premium features; validate with landing page |
| App Store discovery | High | Med | Focus on Reddit/Twitter organic; product-led growth |

**Dependencies**:
| Dependency | Status |
|------------|--------|
| iOS developer (contractor) | Pending hire |
| Push notification service | Firebase (free tier) |

→ Gate B Assessment

---

## Gate B: Shippable?

| Criterion | Status | Notes |
|-----------|--------|-------|
| Scope fits resources | ✓ | 4-week build with 1 dev |
| Dependencies manageable | ✓ | Firebase free tier, need to hire dev |
| Critical risks mitigated | ⚠️ | Streak anxiety—need beta testing |
| Validation plan executable | ✓ | Beta with 50 users, 2-week test |

**Gate B Verdict**: PASS
- Proceed to launch planning
- Must complete beta validation before public launch

→ Proceeding to Stage 9: Launch Plan

---

## Stage 9: Launch & Validation Plan

**Launch Approach** (applying Crossing the Chasm):
```
Phase 1: Closed beta (50 users from Reddit fitness communities)
Phase 2: Public launch to beachhead (tech-savvy 25-35)
Phase 3: Expand to broader fitness beginners
```

**Validation Hypothesis**:
```
We believe that streak-based logging with forgiveness mechanics 
will achieve 40% D7 retention because users want simple, 
judgment-free habit tracking.
```

**Success/Failure Criteria**:
| Outcome | Metric | Action |
|---------|--------|--------|
| Success | D7 > 40%, no anxiety complaints | Proceed to public launch |
| Partial | D7 = 25-40% | Investigate, iterate on mechanics |
| Failure | D7 < 25% OR >10% anxiety feedback | Pivot design approach |

→ Proceeding to Stage 10: PRD Output

---

## Stage 10: PRD v1 Output

Final PRD v1 generated using the template, including:
- All sections populated from working draft
- Facts/Assumptions/Decisions clearly separated
- Open questions documented with owners

**Key Sections**:

### Facts
- F1: Personal experience validates problem (source: self)
- F2: 67% of gym memberships go unused after 3 months (source: IHRSA)

### Assumptions
- A1: Users prefer simplicity (confidence: Medium, validate: A/B test)
- A2: Streak shields reduce anxiety (confidence: Low, validate: beta interviews)
- A3: WTP $2.99/month (confidence: Low, validate: landing page)

### Decisions
- D1: Mobile-first, no web app (rationale: habit logging needs to be instant)
- D2: Freemium model (rationale: need volume to validate)
- D3: No social features in v1 (rationale: scope discipline; adds complexity)

### Open Questions
- Q1: What's the right reminder frequency? (owner: Test in beta)
- Q2: Should streak shield be unlimited or weekly? (owner: Test in beta)

---

## Session Summary

**Input**: "I want to build a habit tracking app for fitness"

**Output**: Complete PRD v1 with:
- Clear problem: habit persistence, not fitness tracking
- Defined user: tech-savvy 25-35, previous app failures
- Validated direction: simplicity + streaks + forgiveness
- Scoped MVP: 4 core features
- Measurable success: D7 retention, streak length
- Identified risks: streak anxiety, market saturation, WTP
- Validation plan: 50-user beta before public launch
- Explicitly separated facts, assumptions, decisions
