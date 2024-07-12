import React from "react";
import "./Carrousel.scss";

import Background from "./../../assets/images/img/Background.png";
import ArrowLeft from "./../../assets/images/icons/arrow_left.png";
import ArrowRight from "./../../assets/images/icons/arrow_right.png";

function Carrousel() {
    return (
        <section className="carrousel">
            <img
                src={Background}
                className="carrousel-img"
                alt="image relaxante d'une statue de Bouddha"
            />
            <img
                className="arrow_left"
                src={ArrowLeft}
                alt="flèche gauche"
            />
            <img
                className="arrow_right"
                src={ArrowRight}
                alt="flèche droite"
            />
        </section>
    )
}

export default Carrousel;