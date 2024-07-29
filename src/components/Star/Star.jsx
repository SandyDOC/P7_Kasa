import "./Star.scss"; 

import StarActive from "./../../assets/images/icons/star_active.png"; // Importation de l'image d'étoile active.
import StarInactive from "./../../assets/images/icons/star_inactive.png"; // Importation de l'image d'étoile inactive.

function Star({ rating }) {
    const totalStars = 5; 
    
    return (
        <div className="rate">
            {Array.from({ length: totalStars }, (v, index) => (
                <img
                    key={index}
                    src={index < rating ? StarActive : StarInactive}
                    className="star"
                    alt={index < rating ? `${rating} étoiles sur ${totalStars}` : `Aucune étoile sur ${totalStars}`}
                />
            ))}
        </div>
    );
}

export default Star;

// import StarActive from "./../../assets/images/icons/star_active.png"; // Importation de l'image d'étoile active.
// import StarInactive from "./../../assets/images/icons/star_inactive.png"; // Importation de l'image d'étoile inactive.

// function Star({rating}) {
//     // const { Star } = data; // Récupération de la valeur StarActive depuis les données. Supposons que StarActive est un champ de votre objet data.

//     return (
//         // <img src={StarActive}/>
//         <div className="rate">
//             {Array.from({ length: 5 }, (index) => (
//                 <img
//                     key={index}
//                     src={index < Star ? { StarActive } : { StarInactive }}
//                     // src={index < Star ? { StarActive } : { StarInactive }}
//                     className="star"
//                 />
//             ))}
//         </div>
//     );
// }
// export default Star;

// <div className="rate">
// </div>
{/* <img src={StarActive} alt="étoile remplie" /> */ }
