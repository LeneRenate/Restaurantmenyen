const menuContainer = document.createElement("div");

function makeMenu() {
  const forrettSec = document.createElement("section");
  forrettSec.classList.add("forrettSec");

  const hovedrettSec = document.createElement("section");
  hovedrettSec.classList.add("hovedrettSec");

  const dessertSec = document.createElement("section");
  dessertSec.classList.add("dessertSec");

  menuContainer.append(forrettSec, hovedrettSec, dessertSec);
}

// Allerede lagd som jsx-fil
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

function populateSections() {
  for (dishes in Dish)
    if (dish.kategori === "Forrett") {
      forrettSec.append(dish);
    } else if (dish.kategori === "Hovedrett") {
      hovedrettSec.append(dish);
    } else {
      dessertSec.append(dish);
    }
}
