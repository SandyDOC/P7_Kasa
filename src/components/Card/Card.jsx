import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement-details/${id}`} className="cardHome">
      <img src={cover} alt={title} className="card_img" />
      <figcaption className="text">{title}</figcaption>
    </Link>
  )
}

export default Card;
