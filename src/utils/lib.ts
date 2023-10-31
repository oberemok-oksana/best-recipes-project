import type { RecipeCollection } from "./types";

export const getAllCategories = (allRecipes: RecipeCollection[]) => {
  const data = allRecipes.map((item) => item.data.category);
  const filteredData = data.filter((item, index, self) => {
    return (
      index ===
      self.findIndex(
        (obj) => obj.value === item.value && obj.label === item.label
      )
    );
  });
  return filteredData.sort((a, b) => a.label.localeCompare(b.label));
};
