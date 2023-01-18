import React, { useState } from "react";

function ToggleButton(props) {
  const [isActive, setIsActive] = useState(false);

  function handleClick(evt) {    
    evt.preventDefault();
    setIsActive(!isActive);
  }
  // npm classname
  let classNameButton = isActive ? "card-favicon favorite" : "card-favicon";

  return (
    <button className={classNameButton} onClick={handleClick}>
      {props.icon}
    </button>
  );
}

export default ToggleButton;