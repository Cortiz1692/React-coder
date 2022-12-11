import React, { useState, useEffect } from "react";
// 1. importar la Promise
import getItems, { getItemsCategory } from "../../services/mockService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const categoryID = useParams().categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsCategory(categoryID).then((respuestaFiltrada) =>
        setProducts(respuestaFiltrada)
      );
    }
  }, [categoryID]);

  return <ItemList products={products} />;
}

export default ItemListContainer;