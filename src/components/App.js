import { useMemo } from "react";
import styles from "./App.module.css";
import { generateGoods } from "../utils/generate-goods";
import Good from "./good/Good";
import Search from "./search/Search";
import Sorts from "./sorts/Sorts";
import PriceFilter from "./price-filter/PriceFilter";
import { useSorting } from "../hooks/useSorting";
import { useFilters } from "../hooks/useFilters";

function App() {
  const allGoods = useMemo(() => generateGoods(100), []);

  const availableColors = Array.from(new Set(allGoods.map((el) => el.color)));

  const availableCategories = Array.from(
    new Set(allGoods.map((el) => el.category))
  );

  const { sorting, setSorting, sortingFunction } = useSorting();
  const { filters, setFilters, filterFunction } = useFilters();

  function handleToggleSorting(type) {
    if (sorting === type) {
      return setSorting("default");
    }

    setSorting(type);
  }

  const displayGoods = useMemo(
    () => allGoods.filter(filterFunction).sort(sortingFunction),
    [allGoods, filterFunction, sortingFunction]
  );

  const handleColorInput = (color, isOn) => {
    const currentColors = filters.colors;

    if (isOn) {
      currentColors.add(color);
    }

    if (!isOn) {
      currentColors.delete(color);
    }

    setFilters((prev) => ({
      ...prev,
      colors: currentColors,
    }));
  };

  const handlePriceInput = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      price: {
        ...prev.price,
        [name]: isNaN(parseInt(value)) ? undefined : parseInt(value),
      },
    }));
  };

  const handleCategoryInput = (category, isOn) => {
    const currentCategories = filters.categories;

    if (isOn) {
      currentCategories.add(category);
    }

    if (!isOn) {
      currentCategories.delete(category);
    }

    setFilters((prev) => ({
      ...prev,
      categories: currentCategories,
    }));
  };

  const handleSearchInput = (e) => {
    const { value } = e.target;

    setFilters((prev) => ({
      ...prev,
      searchTerm: value,
    }));
  };

  return (
    <div className={styles.container}>
      <Search onChange={handleSearchInput} />
      <Sorts onToggle={handleToggleSorting} sorting={sorting} />
      <div className={styles.container__columns}>
        <div>
          <div className={styles.filters}>
            <div className={styles.filter__container}>
              <h2 className={styles.filter__container_title}>Color</h2>
              {availableColors.map((color) => (
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleColorInput(color, e.target.checked)}
                    name={color}
                  />
                  <span>{color}</span>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                </label>
              ))}
            </div>
            <div className={styles.filter__container}>
              <h2 className={styles.filter__container_title}>Category</h2>
              {availableCategories.map((category) => (
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleCategoryInput(category, e.target.checked)
                    }
                    name={category}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
            <div className={styles.filter__container}>
              <h2 className={styles.filter__container_title}>Price</h2>
              <PriceFilter onInput={handlePriceInput} />
            </div>
          </div>
          <div className={styles.goods__count}>
            <span>Total goods: {displayGoods.length} </span>
          </div>
        </div>
        {displayGoods.length === 0 ? (
          <div className={styles.not_found}>No goods with current filters</div>
        ) : (
          <div>
            <div className={styles.goods__container}>
              {displayGoods.map((good) => (
                <Good key={good.id} {...good} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
