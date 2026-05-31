# content-plan.md — freelancertaxestimator.com

Page-by-page content spec to clear AdSense approval and capture long-tail freelancer-tax search. Read `CLAUDE.md` first for the rules every page must follow.

**Goal:** 18–22 substantive, original pages + 5 trust pages live and indexed before the AdSense review. Quality over quantity — ship fewer strong pages, never thin near-duplicates.

---

## Frontmatter schema (every content page)

Each page is a `.md`/`.mdx` file. Use this frontmatter:

```yaml
---
title: "Page title (≤60 chars, keyword near front)"
description: "Meta description, 140–160 chars, includes primary keyword + value prop"
slug: "/url-path"
primaryKeyword: "main target query"
secondaryKeywords: ["...", "..."]
category: "guides | deadlines | deductions | how-it-works | trust"
author: "Consistent Author Name"
datePublished: "2026-MM-DD"
dateModified: "2026-MM-DD"
lastVerified: "2026-MM-DD"   # for pages citing tax figures
relatedSlugs: ["/...", "/..."]  # 2–4 internal links
schema: "Article | FAQPage | HowTo"  # JSON-LD type to emit
---
```

Body structure every page should follow: one `# H1` matching the title; a 2–3 sentence intro that answers the query immediately (wins featured-snippet/AIO citation); `## H2` sections; a short FAQ block (feeds FAQ schema); a CTA linking to the calculator; the disclaimer snippet. Pull all numeric tax figures from the constants file, never retype them in prose.

---

## TRUST PAGES (build first — required for approval)

| # | Slug | Title | Notes |
|---|---|---|---|
| T1 | `/about` | About freelancertaxestimator | Who runs it, why, the expertise/perspective. Real E-E-A-T signal. ~300–500 words. |
| T2 | `/contact` | Contact | Real contact method (form or email). |
| T3 | `/privacy-policy` | Privacy Policy | MUST disclose Google AdSense cookies, third-party data use, opt-out. |
| T4 | `/terms` | Terms of Use | Standard terms. |
| T5 | `/disclaimer` | Disclaimer | "Informational only, not tax/financial/legal advice." Also surface short version by the calculator. |

---

## TIER 1 — Cornerstone guides (highest intent, build after trust pages)

These are the pages that both convert calculator users and earn the high-RPM finance clicks. 1,000–1,500 words each, deeply useful.

### C1 — `/how-much-to-set-aside-for-taxes-freelancer`
- **Primary keyword:** how much to set aside for taxes self employed / freelancer
- **Word count:** 1,200–1,500
- **Sections:** the quick answer (rule-of-thumb % range and why it varies) → what actually determines your set-aside (SE tax 15.3%, income tax bracket, state) → worked example with real numbers → how to set aside (separate account, % of each invoice) → common mistakes → FAQ.
- **CTA:** "Get your exact set-aside % with the calculator."
- **Why:** highest-intent query in the niche; directly maps to the tool's main output.

### C2 — `/quarterly-estimated-taxes-guide`
- **Primary keyword:** quarterly estimated taxes self employed
- **Word count:** 1,200–1,500
- **Sections:** what quarterly estimated taxes are → who must pay (the $1,000 owed rule) → **2026 due dates table** (Apr 15, Jun 15, Sep 15, Jan 15 2027) → how to calculate each payment → how to pay (IRS Direct Pay / EFTPS) → safe-harbor rule (90%/100%/110%) to avoid penalties → FAQ.
- **Why:** recurring, seasonal, evergreen; anchors the "deadlines" category.

### C3 — `/self-employment-tax-explained`
- **Primary keyword:** self employment tax / how is self employment tax calculated
- **Word count:** 1,200–1,500
- **Sections:** what SE tax is (the employer+employee FICA you now both owe) → 2026 rate breakdown (12.4% SS up to $184,500 + 2.9% Medicare uncapped) → the 92.35% net-earnings step → worked example → the deduction for half of SE tax → additional Medicare tax for high earners → FAQ.
- **Why:** core education query; high commercial CPC (tax software, CPAs bid here).

### C4 — `/freelancer-tax-deductions-list`
- **Primary keyword:** freelancer / self employed tax deductions
- **Word count:** 1,300–1,500
- **Sections:** how deductions lower BOTH income and SE tax → categorized list with one-line "what qualifies" each (home office, mileage @ 72.5¢/mi 2026, software/subscriptions, health insurance, retirement (SEP/Solo 401k), phone/internet %, education, business meals, etc.) → recordkeeping → red flags/audit-sensitive ones → FAQ.
- **Why:** broad, high-volume, strong internal-link hub to deduction sub-pages.

### C5 — `/1099-vs-w2-taxes`
- **Primary keyword:** 1099 vs w2 taxes / 1099 tax rate
- **Word count:** 1,000–1,300
- **Sections:** the core difference (no withholding, you owe SE tax) → side-by-side take-home example → why 1099 income feels like it's taxed more → what to do about it (estimate, set aside, deduct) → FAQ.

### C6 — `/freelancer-tax-mistakes`
- **Primary keyword:** self employed tax mistakes
- **Word count:** 1,000–1,200
- **Sections:** missing quarterly payments → under-setting-aside → mixing personal/business → missing deductions → ignoring state tax → no records → FAQ. Each with the fix.

---

## TIER 2 — Supporting & long-tail pages (build after Tier 1)

Each 600–1,000 words, original, materially distinct. These capture specific queries AI Overviews handle poorly (specific situations + "do my numbers").

| # | Slug | Primary keyword | Angle / notes |
|---|---|---|---|
| S1 | `/how-to-pay-estimated-taxes-irs` | how to pay quarterly taxes online | Step-by-step: IRS Direct Pay vs EFTPS vs mail. Screenshots/steps (HowTo schema). |
| S2 | `/estimated-tax-penalty-safe-harbor` | estimated tax penalty / safe harbor rule | How the underpayment penalty works, the 90/100/110% safe harbors, how to avoid. |
| S3 | `/home-office-deduction-freelancers` | home office deduction self employed | Simplified ($5/sq ft) vs actual method; eligibility; example. |
| S4 | `/mileage-deduction-self-employed` | self employed mileage deduction | 2026 rate 72.5¢/mi; standard vs actual; log requirements. |
| S5 | `/self-employed-health-insurance-deduction` | self employed health insurance deduction | Above-the-line deduction, eligibility, interaction with marketplace. |
| S6 | `/sep-ira-vs-solo-401k` | retirement plans self employed | Contribution limits, tax savings, which to pick. High-RPM (investing ads). |
| S7 | `/first-year-freelancer-tax-guide` | freelancer taxes for beginners | The complete "I just went freelance" walkthrough; links to all cornerstones. |
| S8 | `/side-hustle-taxes` | side hustle taxes / do I owe taxes on side income | W-2 + 1099 combo case; the $400 threshold; under-withholding from day job. |
| S9 | `/llc-vs-sole-proprietor-taxes` | llc vs sole proprietor taxes | Tax treatment differences; when an S-corp election starts to make sense. |
| S10 | `/how-to-read-1099-nec` | 1099-NEC explained | What the form means, box-by-box, what to do with it. |
| S11 | `/saving-for-taxes-system` | how to save for taxes freelancer | The separate-account / percentage-per-invoice system; tools/automation. |
| S12 | `/quarterly-tax-dates-2026` | 2026 estimated tax deadlines | Tight, date-focused page (kept distinct from C2: this is the quick-reference + calendar download). |

> If you want state coverage later, add state pages ONLY if each carries genuinely distinct content (state-specific rates, deadlines, no-income-tax states grouped). Do not auto-spin 50 templated near-duplicates — that triggers scaled-content rejection. A single `/state-taxes-for-freelancers` overview page is safer to start.

---

## Internal linking map (do this — it's most of the SEO value)

- Calculator page ↔ links to C1, C2, C3 prominently.
- C1 (set-aside) ↔ C2 (quarterly), C3 (SE tax), S11 (saving system).
- C2 (quarterly) ↔ S1 (how to pay), S2 (penalty), S12 (2026 dates).
- C4 (deductions) ↔ S3, S4, S5, S6 (each deduction sub-page links back up to C4).
- C5 (1099 vs w2) ↔ S8 (side hustle), S10 (1099-NEC).
- S7 (first-year) ↔ everything (it's the beginner hub).
- Every page → calculator CTA.

## Publishing cadence for approval

You don't need all 22 before applying, but thin sites get rejected. Recommended: **all 5 trust pages + all 6 Tier 1 + at least 7 Tier 2 = 18 substantive pages**, indexed, before submitting/resubmitting to AdSense. Add the remaining Tier 2 pages post-approval to keep the site growing (a frozen site can lose ranking).

## Per-page acceptance checklist (Claude Code: verify before marking a page done)

- [ ] Original, specific, non-templated; would not read identically to a competitor.
- [ ] Hits target word count with real substance.
- [ ] All tax figures pulled from constants file + cite IRS source + show the year.
- [ ] Frontmatter complete; JSON-LD schema emitted.
- [ ] 2–4 internal links + calculator CTA.
- [ ] Disclaimer present.
- [ ] Mobile renders cleanly; no layout shift.
