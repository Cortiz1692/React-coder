import React from "react";
import { JellyTriangle } from '@uiball/loaders'

function Loader(props) {
  const colorLoader = props.color || "blue";

  return (
    <div style={{ display: "block", width: "100%" }}>
      <JellyTriangle size={200} speed={0.4} color={colorLoader} />
    </div>
  );
}

export default Loader;


