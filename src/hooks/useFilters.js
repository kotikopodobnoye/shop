import { useState } from "react";

export function useFilters() {
  const [filters, setFilters] = useState({
    categories: new Set(),
    colors: new Set(),
    price: {
      min: undefined,
      max: undefined,
    },
    searchTerm: "",
  });

  const { categories, colors, price, searchTerm } = filters;

  const filterFunctions = [
    categories.size > 0 ? (item) => categories.has(item.category) : () => true,
    colors.size > 0 ? (item) => colors.has(item.color) : () => true,
    price.max ? (item) => item.price <= price.max : () => true,
    price.min ? (item) => item.price >= price.min : () => true,
    searchTerm.trim().length
      ? (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
      : () => true,
  ];

  const filterFunction = (item) => filterFunctions.every((fn) => fn(item));

  return {
    filters,
    setFilters,
    filterFunction,
  };
}
