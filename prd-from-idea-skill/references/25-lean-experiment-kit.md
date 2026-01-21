# Lean Experiment Kit

Distilled principles from Eric Ries's "The Lean Startup" and Nir Eyal's "Hooked" for validated learning and engagement design.

## Part 1: The Lean Startup

### Key Insights

1. **Build-Measure-Learn** - The fundamental loop. Build the smallest thing to learn, measure what matters, learn and iterate. Minimize time through the loop.

2. **MVP is a learning vehicle** - Minimum Viable Product isn't a crappy v1. It's the smallest thing that enables validated learning about customers.

3. **Validated learning > opinions** - Opinions are free and wrong. Validated learning comes from experiments with real users.

4. **Vanity metrics lie** - Total users, page views, downloads feel good but don't inform decisions. Focus on actionable metrics.

5. **Actionable metrics inform decisions** - Cohort analysis, conversion rates, retention curves. Data you can act on.

6. **Innovation accounting** - How do you know you're making progress? Set milestones, measure engines of growth, know when to pivot.

7. **Pivot or persevere** - The hardest decision. Pivots aren't failures; they're course corrections based on learning.

8. **Small batches beat big batches** - Release often. Faster feedback, lower risk, better learning.

9. **Continuous deployment** - Every change can go to production. Remove friction between idea and feedback.

10. **Five Whys for root cause** - When something fails, ask "why" five times. Fix systems, not symptoms.

11. **Leap of faith assumptions** - Every startup bets on unproven beliefs. Identify yours and test them first.

12. **Get out of the building** - Talking to customers beats theorizing in conference rooms.

### When to Apply

**Trigger moments in PRD workflow:**
- Stage 4 (Evidence & Assumptions): Identifying leap-of-faith assumptions
- Stage 6 (MVP Scope): Defining minimum viable scope
- Stage 7 (Metrics): Choosing actionable metrics
- Stage 9 (Launch & Validation): Designing experiments

---

## MVP Types

| MVP Type | Description | Best For |
|----------|-------------|----------|
| **Concierge MVP** | Manual delivery of the service | Validating demand; learning about the problem |
| **Wizard of Oz** | Appears automated but is manual behind the scenes | Testing UX before building backend |
| **Landing Page** | Just a page describing the product | Validating interest before building |
| **Video MVP** | Explainer video showing the concept | Products that require seeing to understand |
| **Piecemeal MVP** | Cobbled together from existing tools | Testing workflow before custom build |
| **Single Feature MVP** | One feature, done well | Validating core value proposition |

## Experiment Design Template

```
EXPERIMENT PLAN

Hypothesis
We believe that [target user] has [problem] and will [behavior] 
because [reason].

Test
We will [specific action/test] with [number] of [user type].

metrics
We will measure [specific metric].

Criteria
This hypothesis will be validated if [metric] reaches [threshold].
This hypothesis will be invalidated if [metric] is below [threshold].

Duration
We will run this experiment for [time period].

Next Steps
If validated: [action]
If invalidated: [action]
```

---

## Part 2: Hooked

### Key Insights

1. **The Hook Model** - Trigger → Action → Variable Reward → Investment. This is the cycle that creates habits.

2. **External triggers prompt action** - Notifications, emails, ads. These start the loop until internal triggers take over.

3. **Internal triggers are emotions** - Boredom, loneliness, uncertainty, fear of missing out. Powerful and sustainable.

4. **Reduce friction to action** - Easier actions are more likely. Reduce steps, reduce thinking required.

5. **Variable rewards create desire** - Predictable rewards bore. Variable rewards (social, hunt, self) hook.

6. **Investment increases commitment** - Time, data, effort, social capital invested makes leaving harder.

7. **Habit zone = high frequency + high perceived utility** - Low frequency or low utility = requires marketing forever.

8. **Ethics matter** - Ask: Am I using this on myself? Does it materially improve life? Is the user's life better?

9. **Vitamins vs painkillers** - Painkillers solve immediate pain (higher willingness to pay). Vitamins enhance (need habit to persist).

10. **Habit testing reveals the core loop** - Identify habitués (power users). Study their behavior. Simplify path for new users.

### When to Apply

**Trigger moments in PRD workflow:**
- Stage 5 (Solution Shaping): If building habit-forming product
- Stage 7 (Metrics): If including engagement metrics
- Anytime designing for repeated use

---

## Ethical Guardrails for Engagement Design

### Before Designing for Retention

Ask yourself:
1. Would I use this product myself?
2. Does this genuinely improve the user's life?
3. Am I exploiting vulnerabilities (addiction, loneliness, FOMO)?
4. Would I be proud to explain this to my mom?

### Green Flags
- Users accomplish goals more effectively
- Users save time for things they value
- Users connect meaningfully with others
- Product respects user attention and time

### Red Flags
- Designed to maximize time-on-app regardless of value
- Exploits anxiety or FOMO for engagement
- Makes quitting deliberately difficult
- Dark patterns that trick users
- Children targeted without parental controls

### Healthy Engagement Metrics
- Task completion rate (did they succeed?)
- Goal achievement (did they get what they came for?)
- NPS / satisfaction (are they happy?)
- Intentional use (are they choosing to come back?)

### Unhealthy Metrics (as sole focus)
- Time on app (more isn't always better)
- Sessions per day (frequency without value)
- Notification clicks (attention hijacking)

---

## Common Misuses & Anti-patterns

### Anti-pattern 1: Perfectionist MVP
- **Wrong**: MVP that includes everything but slightly worse
- **Right**: MVP that includes only the core learning objective

### Anti-pattern 2: Vanity Metrics Celebration
- **Wrong**: "We have 10,000 signups!"
- **Right**: "5% of signups completed the core action and 2% returned week 2"

### Anti-pattern 3: Launch and Pray
- **Wrong**: Ship it and hope for the best
- **Right**: Ship with instrumentation and clear success criteria

### Anti-pattern 4: Pivot Avoidance
- **Wrong**: Keep building the same thing despite negative signals
- **Right**: Honest assessment and willingness to change course

### Anti-pattern 5: Engagement at All Costs
- **Wrong**: Maximize addictiveness without regard for user wellbeing
- **Right**: Design for healthy, intentional engagement

### Anti-pattern 6: Dark Patterns
- **Wrong**: Trick users into actions they don't intend
- **Right**: Honest UX that respects user autonomy

### Anti-pattern 7: Copying Consumer Hooks for B2B
- **Wrong**: Adding gamification to enterprise software
- **Right**: B2B habits form around workflow integration, not dopamine
