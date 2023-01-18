import React, { useState } from "react";
import Button from "../Button/Button";
import "./CkickCount.css";

function ClickCount({ stock, onAddToCart }) {
    const [count, setCount] = useState(1);


    function handleSuma() {
        if (count < 10) setCount(count + 1);
            
    }

    function handleResta() {
        if (count > 1) setCount(count - 1);
    }

    function onAdd() {
        console.log("Agregado al carrito");
    }

    return (
        <div className="itemcount_container">
          <div className="itemcount_control">
            <Button color="red" onButtonTouch={handleResta}>
              -
            </Button>
    
            <span>{count}</span>
    
            <Button color="green" onButtonTouch={handleSuma}>
              +
            </Button>
          </div>
          <div className="itemcount_btns">
            <Button onButtonTouch={() => onAddToCart(count)}>
              Agregar al carrito
            </Button>
          </div>
        </div>
      );
    }

export default ClickCount;