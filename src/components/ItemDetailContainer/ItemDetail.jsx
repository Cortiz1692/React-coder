import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ClickCount/ClickCount";
import { cartContext } from "../../storage/CartContext";

function ItemDetail({ product }) {
  const [countInCart, setCountInCart] = useState(0);

  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    //1. Guardar la cantidad en un estado
    setCountInCart(count);
    //2. ocultar el itemCount . . .
    addToCart(product, count);
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h4 className="priceTag">$ {product.price}</h4>
        <p>{product.description}</p>
      </div>
      <Link to="/cart">Ir al carrito</Link>
      <ItemCount onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;