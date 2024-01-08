import React from "react";
import "./Tag.css";

/**
 * The `function Tag({ nom }) {` block is defining a functional component `Tag`. 
 * It is using destructuring to extract the `nom` prop from the component's props. 
 * The `nom` prop is then used to render a `<span>` element with the class name "tag" and the value of `nom` as its content.
 * 
 * @function
 * @name Tag
 * @kind function
 * @param {{ nom: any }} { nom }
 * @returns {React.JSX.Element}
 */
function Tag({ nom }) {
    return (
        <span className="tag">{nom}</span>
    );
}

export default Tag;
