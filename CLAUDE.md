# CLAUDE.md — freelancertaxestimator.com

This file orients any coding agent working on this project. Read it fully before building content or features.

## What this project is

A free **freelancer / self-employed tax estimator tool** (US federal) wrapped in a content moat. The calculator is the core utility; the content pages exist to (a) clear Google AdSense's quality bar, (b) capture long-tail organic search, and (c) build topical authority that survives AI-Overview zero-click erosion.

**Primary monetization:** Google AdSense (currently pending approval).
**Niche RPM band:** personal finance / tax = ~$15–45 RPM (high-value vertical).

## The single most important constraint: AdSense approval

As of 2026, Google AdSense **rejects thin tool-only sites** as "low value content." A bare calculator with no surrounding content will not be approved. The fix — and the whole point of the content plan in `content-plan.md` — is to ship the calculator alongside **18–22 pages of genuinely useful, original content** before/at the time of the AdSense review.

Every content page MUST:
- Be **original** and provide specific, actionable insight (not generic filler that could appear on any competitor site).
- Be **500–1,500 words** of real substance (target word counts are per-page in `content-plan.md`).
- Have a clear single author/expertise signal (E-E-A-T). Use a consistent author byline and an About page.
- Avoid scaled/templated near-duplicate pages. State pages and similar series MUST differ materially, not just swap a variable.
- Internally link to the calculator and to 2–4 related content pages.

Do NOT publish auto-generated near-identical pages, thin tag/archive pages, or placeholder stubs. Better to ship 18 strong pages than 50 thin ones.

## Required trust pages (AdSense will not approve without these)

- `/about` — who runs the site, the expertise/perspective behind it.
- `/contact` — a real contact method.
- `/privacy-policy` — must disclose AdSense/Google cookies & data use.
- `/terms` — terms of use.
- `/disclaimer` — **critical for tax content**: "informational only, not tax/financial/legal advice, consult a professional." Surface a short version near the calculator too.

## Content & technical rules

- **Format:** Each content page is a Markdown/MDX file with frontmatter. See the frontmatter schema in `content-plan.md`.
- **Accuracy is non-negotiable.** This is YMYL (Your Money or Your Life) content — Google holds it to a higher bar and inaccurate tax info is a real-world harm. All figures must cite the year and link an authoritative source (IRS.gov preferred). Keep a single source-of-truth constants file (see below) so figures update in one place.
- **Mobile-first, HTTPS, fast.** Core Web Vitals matter for both ranking and approval.
- **No medical/financial guarantees.** Frame estimates as estimates.

## Verified 2026 US tax constants (source of truth)

Put these in a single config (e.g. `src/data/tax-constants.ts`) and reference everywhere — never hardcode in prose without pulling from here.

| Constant | 2026 value | Source |
|---|---|---|
| Self-employment tax rate | 15.3% (12.4% Social Security + 2.9% Medicare) | IRS |
| Social Security wage base (12.4% applies up to) | $184,500 | IRS / SSA |
| Medicare portion (2.9%) | uncapped | IRS |
| SE tax floor (net earnings threshold) | $400 | IRS |
| Net earnings multiplier (92.35% of net profit) | 0.9235 | IRS |
| Business standard mileage rate | 72.5¢/mile | IRS (eff. Jan 1, 2026) |
| Q1 estimated payment due | Apr 15, 2026 | IRS |
| Q2 estimated payment due | Jun 15, 2026 | IRS |
| Q3 estimated payment due | Sep 15, 2026 | IRS |
| Q4 estimated payment due | Jan 15, 2027 | IRS |
| Additional Medicare tax (high earners) | 0.9% above threshold ($200k single / $250k MFJ) | IRS |

> Always re-verify these against IRS.gov at the start of each tax year and on any IRS mid-year update. Add a "last verified" date to the constants file.

## Calculator scope (reference)

Inputs: gross self-employment income, business expenses (or use mileage helper), filing status, other W-2 income (optional), state (optional, for set-aside guidance). Outputs: estimated net profit, SE tax, estimated income tax, total set-aside %, per-quarter payment amount, next due date. Always show the disclaimer.

## Build order

1. Trust pages (About, Contact, Privacy, Terms, Disclaimer) — fastest path to approval-eligible.
2. Tier 1 cornerstone content (the 5–6 highest-intent guides in `content-plan.md`).
3. Tier 2 supporting + long-tail pages.
4. Submit/resubmit for AdSense once 18+ substantive pages + trust pages are live and indexed.

See `content-plan.md` for the full page-by-page spec.
