import React from "react";

function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBottom: 12 }}>
      <label style={{ width: 145, marginRight: 6 }}>{props.title}</label>
      <input
        required
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputForm;
