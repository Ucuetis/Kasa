import React from "react";
import "./Card.css";

/**
 * The `function Card({ id, image, titre }) {` block is a functional component in React. 
 * It is destructuring the props object passed to the component and extracting the `id`, `image`, and `titre` properties. 
 * These properties can then be used within the component to render the card with the provided data.
 * 
 * @function
 * @name Card
 * @kind function
 * @param {{ id: any image: any titre: any }} { id, image, titre }
 * @returns {React.JSX.Element}
 */
function Card({ id, image, titre }) {
    return (
        <div className="card" id={id}>
            <img className="card-img" src={image} alt="Fiche appartement" />
            <div className="card-dark"></div>
            <span className="card-title">{titre}</span>
        </div>
    );
}

export default Card;
