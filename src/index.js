import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

// Importando un compoente
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//renderizo mi componente
root.render(<App />);

