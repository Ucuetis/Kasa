import React from "react";
import "./Banner.css";

/**
 * The `function Banner({image, texte}) {` block is a destructuring assignment in JavaScript. 
 * It allows you to extract properties from an object and assign them to variables with the same name. 
 * In this case, it is extracting the `image` and `texte` properties from the object passed as an argument to the `Banner` function. 
 * This allows you to access these properties directly within the function without having to use the object syntax (e.g., `props.image`, `props.texte`).
 * 
 * @function
 * @name Banner
 * @kind function
 * @param {{ image: any texte: any }} { image, texte }
 * @returns {React.JSX.Element}
 */
function Banner({image, texte}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière"/>
            <div className="banner-dark"></div>
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;
