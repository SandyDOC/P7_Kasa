import StarActive from "./../../assets/images/icons/star_active.png"; // Importation de l'image d'étoile active.
import StarInactive from "./../../assets/images/icons/star_inactive.png"; // Importation de l'image d'étoile inactive.
import "./Star.scss"; 

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
