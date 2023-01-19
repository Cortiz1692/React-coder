import { useContext } from "react";
import React from "react";
import { cartContext } from "../../storage/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  const valueContext = useContext(cartContext);
  const totalItems = valueContext.totalItemsInCartfn();
  
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
}

export default CartWidget;