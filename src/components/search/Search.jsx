import styles from "./Search.module.css";

export default function Search({ onChange }) {
  return (
    <div className={styles.container}>
      <input
        onChange={onChange}
        className={styles.input}
        type="text"
        placeholder="Search...."
      />
    </div>
  );
}
