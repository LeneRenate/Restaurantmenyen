// mottar data for én matrett som props og viser dem i et kortformat. Bruk feltene for tittel, pris, ingredienser og kategori i visningen.

import styles from "../styles/Dish.module.css";

export const Dish = ({ tittel, pris, ingredienser, kategori }) => {
  return (
    <article className={styles.eachDish}>
      <div className={styles.namePrice}>
        <h3 className={styles.dishName}>{tittel}</h3>
        <p className={styles.dishPrice}>{pris}</p>
      </div>
      <p className={styles.dishIngredients}>{ingredienser}</p>
      <p className={styles.dishCategory}>{kategori}</p>
    </article>
  );
};
