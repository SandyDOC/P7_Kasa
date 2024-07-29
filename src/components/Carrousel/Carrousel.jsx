import { useState } from "react"; // Importation du hook useState depuis React pour gérer l'état local.

import "./Carrousel.scss"; // Importation du fichier de style SCSS pour le composant Carrousel.
import ArrowLeft from "./../../assets/images/icons/arrow_left.png"; // Importation de l'image de la flèche gauche.
import ArrowRight from "./../../assets/images/icons/arrow_right.png"; // Importation de l'image de la flèche droite.

function Carrousel({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0); // Déclaration de l'état local pour l'index de l'image actuelle dans le carrousel.

    const length = pictures.length; // Détermine le nombre total d'images dans le carrousel.

    // Fonction pour passer à l'image suivante dans le carrousel.
    const nextImage = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1); // Passe à l'image suivante ou revient à la première si c'est la dernière image.
    };

    // Fonction pour revenir à l'image précédente dans le carrousel.
    const previousImage = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1); // Revient à l'image précédente ou passe à la dernière si c'est la première image.
    };

    return (
        // <section className="carrousel">
        //     {pictures.map((image, index) =>
        //      (
        //         <img key={index} className=".carrousel-img" src={pictures[currentIndex]}/>
        //     ))
        //     }
        // </section>
        <section className="carrousel">
            {length > 1 ? ( // Affiche la flèche gauche uniquement si le carrousel contient plus d'une image.
                <img
                    onClick={previousImage} // Ajoute un gestionnaire de clic pour passer à l'image précédente.
                    className="carrousel-button prev" // Ajoute une classe CSS pour styliser la flèche gauche.
                    src={ArrowLeft} // Spécifie la source de l'image de la flèche gauche.
                    alt="Previous" // Ajoute un texte alternatif pour l'image.
                />
            ) : null}
            <img
                className="carrousel_image" // Ajoute une classe CSS pour styliser l'image du carrousel.
                src={pictures[currentIndex]} // Spécifie la source de l'image actuelle à afficher dans le carrousel.
                alt={`Slide ${currentIndex + 1}`} // Ajoute un texte alternatif pour l'image actuelle.
            />
            {length > 1 ? ( // Affiche la flèche droite uniquement si le carrousel contient plus d'une image.
                <img
                    onClick={nextImage} // Ajoute un gestionnaire de clic pour passer à l'image suivante.
                    className="carrousel-button next" // Ajoute une classe CSS pour styliser la flèche droite.
                    src={ArrowRight} // Spécifie la source de l'image de la flèche droite.
                    alt="Next" // Ajoute un texte alternatif pour l'image.
                />
            ) : null}

            {pictures.map((image, index) => ( // Parcourt chaque image du carrousel.
                <div
                    key={index} // Ajoute une clé unique pour chaque élément de la liste.
                    className={index === currentIndex ? "active" : ""} // Ajoute une classe CSS "active" si l'image est actuellement affichée.
                >
                    {index === currentIndex ? ( // Affiche l'image uniquement si c'est l'image actuelle.
                        <img
                            src={image} // Spécifie la source de l'image.
                            alt="image de l'appartement" // Ajoute un texte alternatif pour l'image.
                            className="carrousel-img" // Ajoute une classe CSS pour styliser l'image.
                        />
                    ) : null}
                    {index === currentIndex && length > 1 ? ( // Affiche le numéro de l'image uniquement si c'est l'image actuelle et qu'il y a plus d'une image.
                        <span className="slider__number">
                            {currentIndex + 1}/{length}
                            {/*  Affiche le numéro de l'image actuelle et le nombre total d'images.  */}
                        </span>
                    ) : null}
                </div>
            ))}
        </section>
    );
}

export default Carrousel; // Exporte le composant Carrousel pour pouvoir l'utiliser dans d'autres parties de l'application.
