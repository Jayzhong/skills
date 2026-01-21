# Usability Checklists

Distilled principles from Don Norman's "The Design of Everyday Things" and Steve Krug's "Don't Make Me Think" for usability-first product design.

## Part 1: Design of Everyday Things

### Key Insights

1. **Discoverability** - Users must be able to figure out what actions are possible without training or reading manuals.

2. **Feedback** - Every action needs immediate, clear feedback. Users should never wonder "Did that work?"

3. **Conceptual models** - Users form mental models of how things work. Design should match intuitive expectations.

4. **Affordances** - Physical properties suggest use. Buttons look pushable; sliders look slidable. Digital equivalents matter too.

5. **Signifiers** - Explicit signals showing where to act. Arrows, labels, visual cues that say "click here."

6. **Mapping** - Relationship between controls and outcomes should be natural. Left arrow moves left. Up increases.

7. **Constraints** - Limit possibilities to prevent errors. Greyed-out buttons, form validation, physical barriers.

8. **Error tolerance** - Design for human fallibility. Make errors reversible. Support undo.

9. **Knowledge in the world vs knowledge in the head** - Don't require memorization. Put information where it's needed.

10. **The gulf of execution and evaluation** - Users must understand how to act (execution) and interpret results (evaluation). Bridge both gulfs.

### When to Apply

**Trigger moments in PRD workflow:**
- Stage 5 (Solution Shaping): When designing user flows
- Stage 6 (MVP Scope): When prioritizing must-have UX elements
- Any interface design decision

---

## Part 2: Don't Make Me Think, Revisited

### Core Principles

1. **Self-evident is the goal** - A page should be obvious to users. If obvious isn't possible, self-explanatory is acceptable. Requiring thought is failure.

2. **People don't read, they scan** - Users satisfice: they pick the first reasonable option. Design for scanning, not reading.

3. **Create visual hierarchies** - Important things are larger, bolder, or more prominent. Logically related things are visually grouped.

4. **Conventions are your friend** - Users expect certain patterns. Don't innovate where convention works.

5. **Omit needless words** - Every word competes for attention. Get rid of half, then half again.

6. **Navigation answers three questions** - Where am I? Where can I go? How do I get back?

7. **The trunk test** - Drop someone deep in your site. Can they identify: site name, page name, sections, local navigation, search, current location indicator? If not, navigation fails.

8. **Home page is a compromise** - Too many stakeholders, too many goals. Don't expect it to satisfy everyone.

9. **Mobile first forces clarity** - Limited space forces prioritization. Start with mobile; expand for desktop.

10. **One user test is better than none** - A single morning of testing beats months of debate. Test early, test often.

### Mobile Usability Insights (Revisited Edition)

11. **Mobile isn't just smaller screens** - Mobile is used in different contexts (on-the-go, distracted, one-handed). Design for interruption and partial attention.

12. **Affordances must be obvious on touch** - Without hover states, tappable elements must look tappable. Flat design often fails this test.

13. **Manage real estate ruthlessly** - Every element must earn its place. If it's not essential for the current task, hide it.

14. **Memorability matters less than learnability** - Users won't remember complex gestures. Stick to standard swipe, tap, pinch patterns.

### The Reservoir of Goodwill

15. **Users arrive with limited patience** - Think of it as a reservoir that depletes with every frustration. When empty, they leave.

16. **What drains goodwill:**
    - Hiding information users need (phone numbers, prices, shipping costs)
    - Punishing users for not doing things your way
    - Asking for unnecessary information
    - Fake sincerity or overly corporate tone
    - Putting obstacles in front of features (forced registration)
    - Amateurish design that doesn't inspire confidence

17. **What builds goodwill:**
    - Anticipating what users need and making it easy to find
    - Telling users what they want to know honestly
    - Saving users steps wherever possible
    - Making it easy to recover from errors
    - When in doubt, apologize

### Accessibility as Usability

18. **Accessibility benefits everyone** - Curb cuts help wheelchair users and people with strollers. Captions help deaf users and people in loud environments. Good accessibility is good usability.

19. **Start with structure** - Proper heading hierarchy, meaningful link text, and logical reading order help screen readers and help everyone scan.

20. **Color is not enough** - Don't rely on color alone to convey information. Add text, icons, or patterns.

21. **Keyboard navigation matters** - Many users (not just those with disabilities) prefer keyboard. Ensure all interactive elements are reachable.

22. **Test with real assistive technology** - Screen readers reveal structural problems that visual inspection misses.

### When to Apply

**Trigger moments in PRD workflow:**
- Stage 5 (Solution Shaping): When defining main user flow
- Stage 6 (MVP Scope): When deciding what's essential vs nice-to-have
- Mobile design decisions: Apply mobile-specific insights
- Accessibility review: Ensure accessibility is designed in, not bolted on
- Final PRD review: Does the spec produce an obvious experience?

---

## Usability Checklist for PRD Review

### Discoverability & Signifiers
- [ ] Can users discover all key actions without reading documentation?
- [ ] Are clickable elements visually distinct?
- [ ] Is the primary action on each screen obvious?

### Feedback
- [ ] Does every user action produce visible feedback?
- [ ] Are loading states visible?
- [ ] Do error states explain what went wrong and how to fix it?

### Mental Models
- [ ] Does the product work like users expect based on similar products?
- [ ] Are metaphors consistent throughout?
- [ ] Does the structure match user mental models?

### Mapping & Layout
- [ ] Is the relationship between controls and outcomes natural?
- [ ] Are related items grouped visually?
- [ ] Does the visual hierarchy match importance?

### Constraints & Error Prevention
- [ ] Are invalid actions prevented (not just caught)?
- [ ] Are destructive actions confirmed?
- [ ] Is undo available for key actions?

### Scannability & Clarity
- [ ] Can users scan the page to find what they need?
- [ ] Is copy concise (half the words possible)?
- [ ] Are headlines descriptive (not clever)?

### Navigation
- [ ] Do users always know where they are?
- [ ] Is going back easy?
- [ ] Is the path to key tasks short?

### Mobile Usability (Revisited Edition)
- [ ] Do touch targets meet minimum size (44×44 points)?
- [ ] Are tappable elements obviously tappable (without hover)?
- [ ] Does the design work one-handed?
- [ ] Is critical content visible without scrolling?
- [ ] Are forms optimized for mobile input (correct keyboard types)?

### Accessibility
- [ ] Is there sufficient color contrast (4.5:1 for text)?
- [ ] Does color alone never convey critical information?
- [ ] Are all interactive elements keyboard accessible?
- [ ] Do images have meaningful alt text?
- [ ] Is there a logical heading hierarchy?
- [ ] Are form fields properly labeled?

### Goodwill Protection
- [ ] Is pricing/shipping information easy to find?
- [ ] Are there no forced registrations before seeing value?
- [ ] Are error messages helpful, not blaming?
- [ ] Is contact/support information visible?

---

## Lightweight Usability Testing Protocol

### Test Setup (15 minutes)
1. Recruit 5 target users (can be informal)
2. Prepare 3-5 task scenarios
3. Set up recording (screen + audio)

### Test Script (30 minutes per user)
1. **Intro (2 min)**: "We're testing the design, not you. Think aloud. There are no wrong answers."
2. **Background (3 min)**: "Tell me about your experience with [problem area]."
3. **Tasks (20 min)**: "I'd like you to [task]. Please think aloud as you go."
4. **Debrief (5 min)**: "What was confusing? What did you like? Any final thoughts?"

### What to Watch For
- Confusion or hesitation
- Wrong paths taken
- Questions asked
- Workarounds invented
- Emotional reactions (frustration, surprise)

### Analysis (30 minutes)
1. List all observed problems
2. Rate severity (0=not a problem, 4=catastrophic)
3. Identify patterns across users
4. Prioritize top 3-5 issues to fix

---

## Common Misuses & Anti-patterns

### Anti-pattern 1: Cleverness Over Clarity
- **Wrong**: Creative, surprising interactions that confuse users
- **Right**: Predictable, conventional patterns that work immediately

### Anti-pattern 2: Mystery Meat Navigation
- **Wrong**: Icons without labels; hover-to-reveal menus
- **Right**: Visible, labeled navigation

### Anti-pattern 3: Form Over Function
- **Wrong**: Beautiful design that doesn't work well
- **Right**: Usable design that also looks good

### Anti-pattern 4: Feature Pile-Up
- **Wrong**: Every feature visible on every screen
- **Right**: Progressive disclosure; show what's needed now

### Anti-pattern 5: Testing Too Late
- **Wrong**: Usability testing after development is done
- **Right**: Testing prototypes before development starts

### Anti-pattern 6: Ignoring Edge Cases
- **Wrong**: Happy path only; errors are "edge cases"
- **Right**: Error states designed as carefully as success states

### Anti-pattern 7: Mobile as Afterthought
- **Wrong**: Desktop design squeezed into mobile
- **Right**: Mobile-first design expanded to desktop

### Anti-pattern 8: Draining Goodwill (Revisited)
- **Wrong**: Hiding contact info, forcing registration, not apologizing for errors
- **Right**: Being transparent, removing friction, admitting mistakes

### Anti-pattern 9: Flat Design Extremism
- **Wrong**: Ultra-flat design where nothing looks clickable
- **Right**: Visual affordances that clearly indicate interactive elements

### Anti-pattern 10: Unclear Links
- **Wrong**: "Click here", "Learn more", vague link text
- **Right**: Descriptive links that make sense out of context

### Anti-pattern 11: Accessibility as Afterthought
- **Wrong**: Adding accessibility features after design is "done"
- **Right**: Designing for accessibility from the start (benefits everyone)
