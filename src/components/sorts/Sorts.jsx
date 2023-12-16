import { sortingLabels, sortingTypes } from "../../hooks/useSorting";
import { classNames } from "../../utils/class-names";
import styles from "./Sorts.module.css";

export default function Sorts({ sorting, onToggle }) {
  return (
    <div className={styles.container}>
      {Object.values(sortingTypes).map((type) => (
        <button
          key={type}
          className={classNames(
            styles.btn,
            sorting === type && styles.btn__active
          )}
          onClick={() => onToggle(type)}
        >
          {sortingLabels[type]}
        </button>
      ))}
    </div>
  );
}
