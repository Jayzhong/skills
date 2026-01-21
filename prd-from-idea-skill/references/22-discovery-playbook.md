# Discovery Playbook

Distilled principles from Marty Cagan's "Inspired" on product discovery and where good requirements come from.

## Key Insights

1. **Discovery precedes delivery** - Before engineering builds, product must discover what to build. These are separate activities requiring different mindsets.

2. **The product trio drives discovery** - Product manager, designer, and tech lead work together. Not PM alone, not design-by-committee.

3. **Requirements come from understanding, not stakeholder requests** - Stakeholder input is valuable, but requirements emerge from deeply understanding user and business problems.

4. **Fall in love with the problem, not the solution** - Teams that fixate on solutions miss better alternatives and resist pivoting.

5. **Risks to address in discovery** - Value (will they buy it?), Usability (can they use it?), Feasibility (can we build it?), Viability (does it work for the business?).

6. **Opportunity assessment before solution** - Answer: What problem? For whom? How do we know? What alternatives? Why now? Why us?

7. **Prototype to learn, not to document** - Prototypes are disposable learning tools, not mini-products. Speed beats polish.

8. **Good ideas come from everywhere** - Leadership, customers, data, competitors, technology. Great PMs synthesize, not dictate.

9. **Engineers need the problem, not the solution** - Give engineers context and constraints; they often find better solutions than PMs imagine.

10. **Ship to learn, not just to release** - Every release is a hypothesis. Validate with data, then iterate.

11. **High-integrity commitments require high-integrity discovery** - Don't commit to dates or features until discovery validates them.

12. **Empowerment requires context** - Teams can only make good decisions if they understand company strategy and constraints.

## When to Apply

**Trigger moments in PRD workflow:**
- Stage 2 (Problem Framing): Distinguishing real problems from requested solutions
- Stage 5 (Solution Shaping): Ensuring discovery happened before committing
- Gate A: Validating discovery was done before moving to build

## Opportunity Assessment Framework

Before writing any PRD, answer these questions:

1. **What problem are we solving?** (state the problem, not a solution disguised as a problem)

2. **For whom?** (specific user segment, not "everyone")

3. **How do we know this is a real problem?** (evidence: interviews, data, support tickets)

4. **What are the alternatives today?** (competitors, workarounds, do-nothing)

5. **Why now?** (market timing, technology inflection, urgency)

6. **Why us?** (what is our unique advantage?)

7. **What are the risks?** (value, usability, feasibility, viability)

## Discovery vs Delivery Checklist

### Are We in Discovery Mode?
- [ ] We're exploring multiple solutions
- [ ] We're talking to users frequently
- [ ] We're prototyping and testing quickly
- [ ] We're comfortable killing ideas
- [ ] Our output is learning, not code

### Are We in Delivery Mode?
- [ ] We've validated the solution direction
- [ ] We're building production-quality code
- [ ] We're focused on execution, not exploration
- [ ] We have committed roadmaps
- [ ] Our output is shipped product

### Warning Signs of Skipped Discovery
- Requirements came directly from stakeholders without validation
- Nobody talked to users before writing the spec
- There's only one solution on the table
- Engineers see the spec for the first time at sprint planning
- "Just build what the customer asked for"

## Common Misuses & Anti-patterns

### Anti-pattern 1: Requirements Laundering
- **Wrong**: Stakeholder says "build X" → PM writes PRD for X
- **Right**: PM understands stakeholder's underlying need → discovers best solution

### Anti-pattern 2: Discovery Theater
- **Wrong**: One user interview to check a box
- **Right**: Continuous discovery with pattern matching across many conversations

### Anti-pattern 3: PM as Solo Decider
- **Wrong**: PM disappears, returns with fully-formed requirements
- **Right**: Product trio collaborates throughout discovery

### Anti-pattern 4: Feature Factory
- **Wrong**: Measure success by features shipped
- **Right**: Measure success by customer outcomes achieved

### Anti-pattern 5: Over-Indexing on Customers' Solutions
- **Wrong**: "Customer said they want a blue button, so we'll add a blue button"
- **Right**: "Customer struggles with navigation; let's explore the best solution"

### Anti-pattern 6: Waterfall Discovery
- **Wrong**: Finish all discovery, then start all delivery
- **Right**: Continuous discovery in parallel with delivery

### Anti-pattern 7: Analysis Paralysis
- **Wrong**: Research forever, never ship anything
- **Right**: Time-box discovery, ship to learn, iterate
