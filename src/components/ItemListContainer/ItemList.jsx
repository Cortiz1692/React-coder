import React from "react";
import Flex from "../Flex/Flex";
import Item from "./Item";
import "./Itemlist.css";

function ItemList(props) {
  return (
    <div className="itemlist">
      <Flex>
        {props.products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            description={product.description}
          />
        ))}
      </Flex>
    </div>
  );
}

export default ItemList;