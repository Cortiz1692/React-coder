import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";




function NavBar() {
  let activeStyle = {
    color: "#066699",
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="container-fluid">
          <a className="navbar-brand" href="">Reed Books</a>
          <FontAwesomeIcon icon={faGlasses} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/item/1">Categorias</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/contacto">Contacto</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <div className="carrito">
            <CartWidget />
            </div>
          </div>
        </div>
        </div>
    </nav>
  
    );


}

export default NavBar;



