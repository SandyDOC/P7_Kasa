import { useState } from "react";
import "./Carrousel.scss";
import ArrowLeft from "./../../assets/images/icons/arrow_left.png";
import ArrowRight from "./../../assets/images/icons/arrow_right.png";

function Carrousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const length = pictures.length;

    // Fonction pour passer à l'image suivante dans le carrousel:
    // Passe à l'image suivante ou revient à la première si c'est la dernière image.
    const nextImage = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    // Fonction pour revenir à l'image précédente dans le carrousel:
    // Revient à l'image précédente ou passe à la dernière si c'est la première image.
    const previousImage = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    return (
        <section className="carrousel">
            {/* Affiche la flèche gauche uniquement si le carrousel contient plus d'une image */}
            {length > 1 ? (
                <img
                    onClick={previousImage}
                    className="carrousel-button prev"
                    src={ArrowLeft}
                    alt="Previous"
                />
            ) : null}
            {pictures.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={index === currentIndex ? "carrousel-img active" : "carrousel-img inactive"} // Ajoute une classe CSS pour styliser l'image.
                />
            ))}
            {/* Affiche le numéro de la slide uniquement si le carrousel contient plus d'une image         */}
            {length > 1 && (
                <span className="slider__number">
                    {currentIndex + 1}/{length}
                </span>
            )}
            {/* Affiche la flèche droite uniquement si le carrousel contient plus d'une image */}
            {length > 1 && (
                <img
                    onClick={nextImage}
                    className="carrousel-button next"
                    src={ArrowRight}
                    alt="Next"
                />
            )}
        </section>
    );
}

export default Carrousel; 