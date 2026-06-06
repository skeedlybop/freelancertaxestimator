/**
 * site-meta.ts — Author, contact, and editorial signals.
 *
 * These values populate the about page, the Person JSON-LD on article pages,
 * the byline on every guide, and the contact surfaces. Edit here, not in the
 * MDX frontmatter — the [...slug].astro route uses AUTHOR_NAME for the byline
 * and JSON-LD when the frontmatter `author` matches "Jason Mercer".
 */

export const SITE_NAME = "FreelancerTaxEstimator" as const;
export const SITE_URL = "https://freelancertaxestimator.com" as const;

/** Display name for the author / editor on every page. */
export const AUTHOR_NAME = "Jason Mercer" as const;

/** Short author title used under bylines. Kept honest about non-credentialed status. */
export const AUTHOR_TITLE = "Editor, FreelancerTaxEstimator" as const;

/**
 * One-sentence author summary surfaced on /about and (optionally) under bylines.
 * Honest framing: not a credentialed tax pro; an experienced self-employed
 * person who reads the underlying IRS publications.
 */
export const AUTHOR_SHORT_BIO =
  "Freelance software developer turned full-time editor. Not a CPA — built this site after getting hit with two consecutive years of quarterly underpayment penalties and deciding to learn the IRS math himself." as const;

/**
 * Longer biographical paragraphs for /about. Kept in this file so a name or
 * backstory change updates everywhere consistently.
 */
export const AUTHOR_LONG_BIO: readonly string[] = [
  "Jason Mercer started FreelancerTaxEstimator in 2024 after a second consecutive year of being hit with quarterly underpayment penalties as a freelance software developer. The first year, he didn't know self-employment tax existed. The second year, he knew about it but estimated wrong. The third year, he sat down with IRS Publication 505 and Form 1040-ES and built the calculator he wishes he'd had in 2021.",
  "He is not a CPA, Enrolled Agent, or tax attorney. He is a freelancer who learned the math by reading the primary sources, and who runs this site as an educational resource — not as a substitute for professional advice. For specific filing decisions, he refers visitors to a credentialed preparer (the IRS directory link is on every disclaimer).",
  "The site has one editor, one author byline, and one source-of-truth file for every dollar amount and rate it publishes. When a Revenue Procedure drops in late autumn, the constants get bumped and the entire site updates on rebuild.",
] as const;

/** Primary public email; surfaced on /about, /contact, and the footer. */
export const CONTACT_EMAIL = "hello@freelancertaxestimator.com" as const;

/** When the editorial team last reviewed site-wide content (not per-page). */
export const EDITORIAL_LAST_REVIEWED = "2026-06-07" as const;
