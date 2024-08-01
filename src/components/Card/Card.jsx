// import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss";


function Card({id, title, cover}) {
 return (
  <Link to={`/logement-details/${id}`}> 
 
    <figure>
      <img src={cover} alt={title} className="card_img" />
      <figcaption>{title}</figcaption>
    </figure>
  </Link>
 )
}

export default Card;
