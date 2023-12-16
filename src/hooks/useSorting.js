import { useState } from "react";

export const sortingTypes = {
  price_asc: "price_asc",
  price_desc: "price_desc",
  rating_desc: "rating_desc",
};

export const sortingFunctions = {
  [sortingTypes.price_asc]: (a, b) => a.price - b.price,
  [sortingTypes.price_desc]: (a, b) => b.price - a.price,
  [sortingTypes.rating_desc]: (a, b) => b.rating - a.rating,
};

export const sortingLabels = {
  [sortingTypes.price_asc]: "Price: Low to High",
  [sortingTypes.price_desc]: "Price: High to Low",
  [sortingTypes.rating_desc]: "Rating: High to Low",
};

export function useSorting() {
  const [sorting, setSorting] = useState("default");

  const sortingFunction = sortingFunctions[sorting] || (() => 0);

  return {
    sorting,
    setSorting,
    sortingFunction,
  };
}
