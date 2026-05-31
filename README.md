# freelancertaxestimator.com

Static Astro site for [freelancertaxestimator.com](https://freelancertaxestimator.com) — a free US-federal tax estimator for freelancers and self-employed.

Read [`CLAUDE.md`](./CLAUDE.md) before contributing — it sets the rules every page must follow.
Read [`content-plan.md`](./content-plan.md) for the page-by-page content roadmap.

## Stack

- **Astro 5** static site generator (with `@astrojs/mdx`, `@astrojs/tailwind`, `@astrojs/sitemap`).
- **TypeScript** with `@/*` alias → `src/*`.
- **Content collections** for guides (`src/content/guides/*.mdx`).
- **Single source of truth** for tax figures: [`src/data/tax-constants.ts`](./src/data/tax-constants.ts). Never hardcode a rate or dollar amount in prose — import it.
- **Deployed via Cloudflare** (`wrangler.jsonc` serves `./dist`).

## Local development

```bash
npm install
npm run dev      # local dev server with HMR
npm run build    # builds static site to dist/
npm run preview  # serves the built dist/
```

## Adding a content page

1. Create `src/content/guides/<slug>.mdx`.
2. Fill in the frontmatter (see schema in `src/content/config.ts` and example in `how-much-to-set-aside-for-taxes-freelancer.mdx`).
3. Import tax figures and components:
   ```mdx
   import { SE_TAX, TAX_YEAR } from "@/data/tax-constants";
   import CalculatorCTA from "@/components/CalculatorCTA.astro";
   import FAQ from "@/components/FAQ.astro";
   import Disclaimer from "@/components/Disclaimer.astro";
   ```
4. Always end with `<CalculatorCTA/>`, `<FAQ items={…}/>`, `<Disclaimer/>`.
5. Run `npm run build` and verify the page renders.

## Updating tax figures

Every dollar/rate/date comes from `src/data/tax-constants.ts`. To bump for a new tax year:

1. Re-verify each figure against IRS.gov (Rev. Proc. for the new year, SE-tax page, mileage announcement).
2. Update the constants and `LAST_VERIFIED`.
3. The whole site updates on rebuild — no per-page edits needed.

## Deploy

`npm run build` produces `./dist`, which `wrangler.jsonc` is configured to serve. Push to deploy.
