import React from "react"; // Importation de React (nécessaire pour tout composant React).
import "./Tag.scss"; // Importation des styles spécifiques pour les tags.

function Tag(props) {
    const { tags } = props; // Extraction des tags depuis les propriétés reçues.

    return (
        <>
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </>
    );
}

export default Tag;
// const location = "Paris 10";
{/* <span className="tag">{location}</span> */ }