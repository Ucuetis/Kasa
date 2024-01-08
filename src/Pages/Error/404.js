import React from "react";
import "./404.css";
import { NavLink } from "react-router-dom";

/**
 * The `function Error404() {` block is defining the functional component `Error404`. 
 * This component returns a JSX element that represents the content of the 404 error page.
 * 
 * @function
 * @name Error404
 * @kind function
 * @returns {React.JSX.Element}
 */
function Error404() {
    return (
        <div className="page-404">
            <h1 className="title-404">404</h1>
            <span className="description-404">
                Oops ! Vous avez atteint la zone interdite des licornes.<br/> 
                Elles ont décidées de prendre des vacances et ont emporté cette page avec elles.<br/>
                Veuillez patienter pendant que nous essayons de les convaincre de la ramener.<br/> 
                En attendant, pourquoi ne pas explorer d'autres parties magiques de notre site.
            </span>
            <NavLink to="/" className="link-site link-404">Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default Error404;
