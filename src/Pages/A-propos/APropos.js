import React from "react";
import Banner from "../../Components/Banner/Banner";
import AProposBanner from "../../Assets/Img/AProposBanner.png";
import Collapse from "../../Components/Collapse/Collapse";

/**
 * The `function APropos() {` block is defining the functional component `APropos`. 
 * This component returns a JSX element that represents the content of the "APropos" page. 
 * It includes a `Banner` component, which displays an image and a title, and multiple `Collapse` components, 
 * which display collapsible sections with titles and descriptions.
 * 
 * @function
 * @name APropos
 * @kind function
 * @returns {React.JSX.Element}
 */
function APropos() {
    return(
        <div className="APropos">
            <Banner image={AProposBanner} titre="Bannière"/>
            <Collapse 
                titre="Fiabilité" 
                description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
            <Collapse 
                titre="Respect" 
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse 
                titre="Service" 
                description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <Collapse 
                titre="Sécurité" 
                description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
                cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div>
    );
}

export default APropos;
