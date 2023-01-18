import React, { useState } from "react";
import InputForm from "./InputForm";

function CheckOutForm({ onCheckout }) {
  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    const newBuyerData = { ...buyerData };
    newBuyerData[nameInput] = value;
    setBuyerData(newBuyerData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    setBuyerData({
      name: "",
      email: "",
      phone: "",
    });
    onCheckout(buyerData);
  }

  return (
    <div>
      <h1>Genera tu orden de compra</h1>
      <form>
        <InputForm
          value={buyerData.name}
          name="name"
          title="Nombre completo"
          onChange={handleInputChange}
        />
        <InputForm
          value={buyerData.email}
          name="email"
          title="Email"
          onChange={handleInputChange}
        />
        <InputForm
          value={buyerData.phone}
          name="phone"
          title="Tel"
          onChange={handleInputChange}
        />

        <button onClick={onSubmit}>Crear orden</button>
      </form>
    </div>
  );
}

export default CheckOutForm;
