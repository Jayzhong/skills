# PRD-from-Idea Skill Overview

## Philosophy

This skill embodies a core belief: **good products start with good problem framing, not good solutions**. 

The workflow is intentionally front-loaded with discovery work. Stages 1-4 focus entirely on understanding before any solution design begins. This prevents the common failure mode of building the right solution to the wrong problem.

## When to Use This Skill

**Best for:**
- New product ideas that need initial specification
- Feature requests that need proper scoping
- Vague stakeholder requirements that need structure
- Side projects that would benefit from product discipline

**Not ideal for:**
- Bug fixes or technical debt
- Well-defined implementation tasks
- Research projects without clear product goals
- Pure technical specifications (use a design doc instead)

## Relationship Between Stages

### Discovery Cluster (Stages 1-4)
These stages are about **learning**, not deciding. The goal is to understand:
- What problem exists?
- Who has this problem?
- How painful is it?
- What evidence supports our beliefs?

Output: Clear problem statement + target user + evidence/assumptions inventory

### Design Cluster (Stages 5-7)
These stages are about **shaping**, translating understanding into a buildable specification:
- What solution approach fits the problem?
- What's the smallest first version?
- How will we measure success?

Output: Scoped MVP + success metrics

### Delivery Cluster (Stages 8-10)
These stages are about **de-risking** and planning:
- What could go wrong?
- How do we validate our bets?
- What's the final specification?

Output: Risk mitigations + validation plan + PRD v1

## The Working Draft

Throughout the workflow, maintain a "Working Draft" that accumulates decisions. This draft:
- Is shown to the user at the end of each stage
- Clearly marks what's new or changed
- Separates Facts / Assumptions / Decisions / Open Questions
- Serves as the foundation for the final PRD

## Degradation Paths

### When Evidence is Insufficient
If direct evidence is unavailable (no user interviews, no data):
1. Document clearly as Assumption
2. Assign a confidence level (High/Medium/Low)
3. Create specific validation plan
4. Proceed with explicit risk acknowledgment

### When Scope Exceeds Capacity
If MVP scope exceeds available resources:
1. Apply MoSCoW ruthlessly
2. Challenge each "Must" - is it really required for first version?
3. Consider phased approach with smaller v0.5
4. Document what's deferred, not deleted

### When Gates Fail
Gate failure is not project failure. Options:
- **Pivot**: Change problem framing or target user
- **Pause**: Gather more evidence before proceeding
- **Pare down**: Reduce scope to meet gate criteria
- **Kill**: Acknowledge idea isn't viable (this is a valid outcome)

## Quality Standards

### For Problem Statements
Good: "Small business owners spend 5+ hours/week on invoice follow-ups, leading to cash flow problems and stress."
Bad: "Invoicing is hard."

### For User Definitions
Good: "Freelance designers with 5-15 active clients who invoice monthly and have no dedicated admin support."
Bad: "People who invoice."

### For Assumptions
Good: "Assumption: Users will pay $20/month for this (Confidence: Low). Validation: Run pricing survey with 50 target users."
Bad: "Users will probably pay for this."

### For MVP Scope
Good: "Must: Invoice creation, email sending, payment tracking. Should: Recurring invoices. Could: Payment processing integration. Won't (v1): Multi-currency support."
Bad: "Basic invoicing features."
