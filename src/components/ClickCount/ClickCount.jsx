import React, { useState } from "react";
import Flex from "../Flex/Flex";

function ClickCount(props) {
    const [count, setCount] = useState(1);


    function handleSuma() {
        if (count < props.stock)
            setCount(count + 1)
    }

    function handleResta() {
        if (count >= 1)
            setCount(count - 1)
    }

    function onAdd() {
        console.log("Agregado al carrito");
    }

    return (
        
        <nav class="navbar navbar-expand-lg bg-light">
            <button disabled={count === 1} onClick={handleResta} className="btn btn-outline-danger  me-2" >-</button>
            <h3 className="me-2">{count}</h3>
            <button onClick={handleSuma} className="btn btn-outline-success  me-2">+</button>

            <button onClick={onAdd} className="btn btn-outline-success">Agregar al carrito</button>
        </nav>
       

    )

}

export default ClickCount;