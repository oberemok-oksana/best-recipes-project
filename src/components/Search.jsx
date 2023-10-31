import Fuse from "fuse.js";
import { useState } from "react";

const options = {
  keys: [
    { name: "data.title", weight: 5 },
    { name: "slug", weight: 3 },
    { name: "data.category", weight: 3 },
    "data.description",
    "data.ingredients",
  ],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

const Search = ({ searchList }) => {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  const recipes = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 4);

  const handleOnsearch = ({ target = {} }) => {
    const { value } = target;

    setQuery(value);
  };

  return (
    <div className="flex items-center gap-3 flex-col">
      <input
        className="py-2 rounded bg-black border-2 border-gray-400 text-slate-200 pl-2"
        type="text"
        placeholder="Пошук..."
        value={query}
        onChange={handleOnsearch}
      />
      <ul className=" flex flex-col z-10 absolute top-20">
        {recipes &&
          recipes.map((recipe) => (
            <li
              className="text-yellow-300 hover:text-yellow-500 text-left"
              key={recipe.slug}
            >
              <a href={`/recipes/${recipe.slug}`}>{recipe.data.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
