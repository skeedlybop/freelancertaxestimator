import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://freelancertaxestimator.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [mdx(), sitemap(), tailwind({ applyBaseStyles: false })],
});
