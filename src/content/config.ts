import { z, defineCollection } from "astro:content";

const recipesCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    imageSrc: z.string(),
    description: z.string(),
    steps: z.array(z.string()),
    ingredients: z.array(z.string()),
    category: z.object({ value: z.string(), label: z.string() }),
    videoId: z.string(),
    draft: z.boolean(),
    date: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
