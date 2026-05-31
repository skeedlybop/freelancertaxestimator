import { defineCollection, z } from "astro:content";

const guides = defineCollection({
  type: "content",
  // NOTE: do NOT add a `slug` field here. Astro reserves `slug` in content
  // collections and derives it from the filename (or a `slug:` override in
  // frontmatter, without a leading slash). Use the filename as the URL slug.
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(100).max(180),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    category: z.enum(["guides", "deadlines", "deductions", "how-it-works", "trust"]),
    author: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    lastVerified: z.string().optional(),
    relatedSlugs: z.array(z.string()).default([]),
    schema: z.enum(["Article", "FAQPage", "HowTo"]).default("Article"),
  }),
});

export const collections = { guides };
