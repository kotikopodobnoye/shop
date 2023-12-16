import styles from "./PriceFilter.module.css";

export default function PriceFilter({ onInput }) {
  return (
    <div className={styles.container}>
      <input
        onInput={onInput}
        placeholder="From"
        className={styles.numeric}
        type="number"
        min="0"
        max="9999"
        name="min"
      />
      <span>-</span>
      <input
        onInput={onInput}
        placeholder="To"
        className={styles.numeric}
        type="number"
        min="0"
        max="9999"
        name="max"
      />
    </div>
  );
}
