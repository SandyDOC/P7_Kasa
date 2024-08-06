// import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss";


function Card({id, title, cover}) {
 return (
  <Link to={`/logement-details/${id}`} className="cardHome"> 
 
    {/* <figure> */}
      <img src={cover} alt={title} className="card_img" />
      <figcaption className="text">{title}</figcaption>
    {/* </figure> */}
  </Link>
 )
}

export default Card;
