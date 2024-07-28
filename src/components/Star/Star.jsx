import React from "react"; // Importation de React (nécessaire pour tout composant React).
import "./Star.scss"; // Importation des styles spécifiques pour les étoiles.


import StarActive from "./../../assets/images/icons/star_active.png"; // Importation de l'image d'étoile active.
import StarInactive from "./../../assets/images/icons/star_inactive.png"; // Importation de l'image d'étoile inactive.

function Star(data) {
    const { Star } = data; // Récupération de la valeur StarActive depuis les données. Supposons que StarActive est un champ de votre objet data.

    return (
        <>
            {Array.from({ length: 5 }, (index) => (
                <img
                    key={index}
                    src={index < Star ? { StarActive } : { StarInactive }}
                    // alt={index < Star ? "Active Star" : "Inactive Star"}
                    className="star"
                />
            ))}
        </>
    );
}

export default Star;
// <div className="rate">
// </div>
{/* <img src={StarActive} alt="étoile remplie" /> */ }
