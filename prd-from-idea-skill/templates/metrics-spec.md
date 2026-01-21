# Metrics Specification

**Product/Feature**: [Name]
**Version**: v1.0
**Last updated**: [Date]

---

## Metrics Overview

### North Star Metric
The single metric that best captures value delivery to users.

| Attribute | Value |
|-----------|-------|
| **Metric name** | |
| **Definition** | [Precisely how is this calculated?] |
| **Current baseline** | [Current value, if known] |
| **30-day target** | |
| **90-day target** | |
| **Why this metric** | [Why does this capture value?] |

---

## Success Metrics

### Primary Success Metrics
Lagging indicators that confirm we're delivering value.

| Metric | Definition | Baseline | Target | Measurement Method |
|--------|------------|----------|--------|-------------------|
| | | | | |

### Leading Indicators
Input metrics we can influence that predict success.

| Metric | Definition | Baseline | Target | Measurement Method |
|--------|------------|----------|--------|-------------------|
| | | | | |

---

## Guardrail Metrics

Things that should NOT get worse. If these degrade, we need to investigate.

| Metric | Definition | Current | Threshold for Alert |
|--------|------------|---------|---------------------|
| [e.g., Error rate] | | | |
| [e.g., Support tickets] | | | |
| [e.g., Page load time] | | | |

---

## Engagement Metrics (if applicable)

For products where user engagement matters.

| Metric | Definition | Target | Ethical Consideration |
|--------|------------|--------|----------------------|
| Daily Active Users | | | |
| Retention (D1/D7/D30) | | | |
| Session frequency | | | |
| Feature adoption | | | |

### Ethical Guardrails
- [ ] We're measuring intentional use, not addictive use
- [ ] Users can accomplish their goals efficiently
- [ ] No dark patterns to inflate metrics
- [ ] Easy opt-out/unsubscribe maintained

---

## Instrumentation Plan

### Events to Track

| Event Name | Trigger | Properties | Priority |
|------------|---------|------------|----------|
| | [When does this fire?] | [What data to capture] | P0/P1/P2 |
| | | | |

### User Properties

| Property | Description | Update Frequency |
|----------|-------------|------------------|
| | | |

### Technical Implementation

| Aspect | Details |
|--------|---------|
| Analytics tool | [e.g., Mixpanel, Amplitude, GA4] |
| Implementation owner | |
| Data warehouse | |
| Dashboard location | |
| Data retention policy | |

---

## Reporting Cadence

| Report | Frequency | Audience | Owner |
|--------|-----------|----------|-------|
| Daily dashboard | Daily | Team | Auto |
| Weekly metrics review | Weekly | Product team | PM |
| Monthly business review | Monthly | Leadership | PM |

---

## Experiment Metrics

For A/B tests and experiments.

| Experiment | Primary Metric | Secondary Metrics | MDE | Sample Size |
|------------|---------------|-------------------|-----|-------------|
| | | | | |

*MDE = Minimum Detectable Effect*

---

## Data Quality Checks

| Check | Frequency | Owner | Action if Failed |
|-------|-----------|-------|------------------|
| Event volume monitoring | Daily | Eng | Alert + investigate |
| Property completeness | Weekly | PM | Backfill or fix |
| Dashboard accuracy | Monthly | PM | Audit + correct |

---

## Metric Definitions Changelog

| Date | Metric | Change | Reason |
|------|--------|--------|--------|
| | | | |
