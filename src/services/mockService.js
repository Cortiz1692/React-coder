/* -------------- BACK-END -------------- */
import products from "../data/products";

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export function getItemsCategory(categoryID) {
  return new Promise((resolve, reject) => {
    let itemsFound = products.filter((item) => {
      return item.category === categoryID;
    });

    if (itemsFound.length > 0 )
      resolve(itemsFound);
    else 
    reject("No hay productos para esta categoría.")
  });
}

export function getSingleItem(itemID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemFound = products.find(
        (itemInArray) => itemInArray.id === parseInt(itemID)
      );
      if (itemFound) resolve(itemFound);
      else reject("Item no encontrado");
    }, 500);
  });
}

export default getItems;