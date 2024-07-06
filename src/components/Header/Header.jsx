import React from "react";
import Logo from "./../../assets/images/logo/Logo_Kasa-Red.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
    <header>
        <img src={Logo} alt="logo Kasa" />
        <nav>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">A propos</NavLink></li>
           </ul>
        </nav>
    </header>
    )
}

export default Header;