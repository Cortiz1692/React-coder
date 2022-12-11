import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  let urlDetail = `/item/${props.id}`;

  return (
    <Link to={urlDetail}>
      <div className="card">
        <ToggleButton icon="♥" />
        <div className="card-img">
          <img src={props.img} alt="imagen producto"></img>
        </div>
        <div className="card-detail">
          <h2>{props.title}</h2>
          <h4 className="priceTag">$ {props.price}</h4>
          <small>{props.description}</small>
        </div>
      </div>
    </Link>
  );
}

export default Item;

