// Mottar matrettene som props og viser dem i en liste

import { Dish } from "./dish";
import { menu as dishes } from "../data/menudata";
import styles from "../styles/Menu.module.css";

export const Menu = () => {
  const kategorier = [...new Set(dishes.map((dish) => dish.kategori))];

  return (
    <div className={styles.menuContainer}>
      {kategorier.map((kategori) => (
        <section
          key={kategori}
          className={`${styles.categoryCard} ${styles[kategori.toLowerCase()]}`}
        >
          <h2>{kategori}</h2>
          {dishes
            .filter((dish) => dish.kategori === kategori)
            .map((dish, i) => (
              <Dish key={i} {...dish} />
            ))}
        </section>
      ))}
    </div>
  );
};
