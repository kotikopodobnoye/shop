import styles from "./Good.module.css";

export default function Good({
  name,
  description,
  color,
  price,
  rating,
  imgUrl,
  category,
}) {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt="" />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.color}>
        Color:{" "}
        <span className={styles.color__plate} style={{ color: `${color}` }}>
          {color}
        </span>
      </p>
      <p className={styles.category}>Category: {category}</p>
      <p className={styles.price}>Price: {price} BYN</p>
      <p className={styles.rating}>Rating: {rating}</p>
    </div>
  );
}
