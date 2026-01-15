import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: "1.index/1.index.md",
      type: "page",
    }),
    blog: defineCollection({
      source: "2.blog/*.md",
      type: "page",
      schema: z.object({
        draft: z.boolean(),
        tags: z.array(z.string()),
        date: z.string(),
        image: z.string(),
      }),
    }),
  },
});