import React, { useState } from "react";
import "./Collapse.css";
import arrow from "../../Assets/Img/CollapseArrow.svg";

/**
 * The `function Collapse({ titre, description }) {` block is a functional component that takes in two props, `titre` and `description`. 
 * These props are destructured from the component's props object. 
 * The component returns a JSX element that represents a collapsible section.
 * 
 * @function
 * @name Collapse
 * @kind function
 * @param {{ titre: any description: any }} { titre, description }
 * @returns {React.JSX.Element}
 */
function Collapse({ titre, description }) {

    const [ouvert, setOuvert] = useState(false);

    return (
        <div className="collapse" id={`collapse-${titre}`}>
            <div className="header-collapse">
                <div className="title-collapse">{titre}</div>
                <span className={`arrow-collapse ${ouvert}`} 
                    onClick={() => setOuvert(!ouvert)}
                >
                    <img src={arrow} alt="Ouvrir cette liste" />
                </span>
            </div>
            {
                ouvert && <div className="description-collapse">{description}</div>
            }
        </div>
    );
}

export default Collapse;
