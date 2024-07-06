import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss";

const titreLocation = "Titre de la location";

function Card() {
 return (
  <Link to="/logement"> 
    <figure>
      <figcaption>{titreLocation}</figcaption>
    </figure>
  </Link>
 )
}

export default Card;
