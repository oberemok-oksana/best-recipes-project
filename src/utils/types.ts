export type Recipe = {
  layout: string;
  title: string;
  imageSrc: string;
  description: string;
  steps: string[];
  ingredients: string[];
  category: {
    value: string;
    label: string;
  };
  draft: boolean;
  videoId: string;
  date: Date;
};

export type RecipeCollection = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: Recipe;
};
