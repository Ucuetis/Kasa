import React from "react";
import "./Accommodation.css";
import { useParams, Navigate } from 'react-router-dom';
import HousingList from "../../Assets/Data/accommodation.json";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Tag from "../../Components/Tag/Tag";
import Star from "../../Assets/Img/Star.svg";
import EmptyStar from "../../Assets/Img/EmptyStar.svg";
import Collapse from "../../Components/Collapse/Collapse";

/**
 * The `Accommodation` function is the component that renders the details of the housing listing. 
 * It retrieves the `id` parameter from the URL using the `useParams` hook from the `react-router-dom` library. 
 * It then finds the corresponding housing listing object from the `HousingList` array using the `id`.
 * 
 * @function
 * @name Accommodation
 * @kind function
 * @returns {React.JSX.Element}
 */
function Accommodation() {

    const id = useParams();
    const ficheLogement = HousingList.find(logement => logement.id === id.id);


    const tagsLogement = ficheLogement?.tags.map((tags, index) => {
        return <Tag 
            key={index} 
            nom={tags} 
        />
    });

    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(ficheLogement?.rating)) {
            etoileComplete = false;
        }
        if (etoileComplete === true) {
            noteLogement.push(<img
                key={index}
                className="etoile"
                src={Star}
                alt={`${ficheLogement?.rating}/5`}
            />)
        } else {
            noteLogement.push(<img
                key={index}
                className="etoile"
                src={EmptyStar}
                alt={`${ficheLogement?.rating}/5`}
            />)
        }
    }


    const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return (
        <>
            {
                ficheLogement ? (
                    <div className="Sheet">
                        <Carrousel images={ficheLogement?.pictures} />
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{ficheLogement?.title}</span>
                                <span className="endroit-logement">{ficheLogement?.location}</span>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
                                    <img className="photo-propietaire" src={ficheLogement?.host.picture} alt="Propriétaire" />
                                </div>
                                <div className="note">
                                    {noteLogement}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Collapse titre="Description" description={ficheLogement?.description} />
                            <Collapse titre="Équipements" description={equipementsLogement} />
                        </div>
                    </div>
                ) : <Navigate replace to="/404" />
            }
        </>
    )
}

export default Accommodation;
