import React from "react";
import "./Header.css";
import logoHeader from "../../Assets/Img/LogoHeader.svg";
import { NavLink } from "react-router-dom";

/**
 * The `function Header() {` block is defining the functional component `Header`. 
 * This component returns a JSX element that represents the header section of the website.
 * 
 * @function
 * @name Header
 * @kind function
 * @returns {React.JSX.Element}
 */
function Header() {
    return (
        <header>
            <img src={logoHeader} alt="Logo Kasa" />
            <nav>
                <NavLink to="/" className="link-site link-menu">Accueil</NavLink>
                <NavLink to="/a-propos" className="link-site link-menu">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
