import { useContext } from "react";
import React from "react";
import { cartContext } from "../../storage/CartContext";

function CartWidget() {
  const valueContext = useContext(cartContext);
  const totalItems = valueContext.totalItemsInCartfn();
  
  return (
    <div>
      <span>🛒</span>
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
}

export default CartWidget;