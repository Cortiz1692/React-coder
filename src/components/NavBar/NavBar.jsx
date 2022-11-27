import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlasses} from "@fortawesome/free-solid-svg-icons";



function NavBar() {
    return (
        <div>
           <FontAwesomeIcon icon={faGlasses} />
            <h1>Libros</h1>
            <h2>Generos</h2>

            
            <ul calssName="list">
              
                <li className="link">Desarrollo Personal</li>
                <li className="link">Educación Financiera</li>
                <li className="link">Novelas</li>
                <li className="link">Ciencia Ficcion</li>
                <li className="link">Terror</li>
                       
            </ul>

            <CartWidget />
        </div>
    );
}

export default NavBar;