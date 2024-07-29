import { useParams } from 'react-router-dom';

import data from "./../../data/data.json";
import "./LogementDetails.scss";

import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "./../../components/Tag/Tag";
import Star from "./../../components/Star/Star";
import Collapse from "./../../components/Collapse/Collapse";

import Error from "../Error/Error";

// import ArrowLeft from "./../../assets/images/icons/arrow_left.png"; // Importation de l'image de la flèche gauche.
// import ArrowRight from "./../../assets/images/icons/arrow_right.png"; // Importation de l'image de la flèche droite.
// import Background from "./../../assets/images/img/Background.png";

function LogementDetails() {
  const widthLogement = '520px';
  const { id } = useParams();

  const logement = data.find((logementATrouver) => logementATrouver.id == id);

  // console.log(logement)

  // Vérifie si le logement est introuvable. Si c'est le cas, affiche un message d'erreur.
  if (!logement) {
    return <Error />
  }

  const { pictures, title, location, host, rating, tags, description, equipments } = logement;

  // Fonction pour transformer les équipements en une liste non ordonnée
  const renderEquipments = (equipments) => {
    return (
      <ul className="equipment-list">
        {equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <main>
      {/* <section className='carrousel'><img
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
        /></section> */}

      <Carrousel pictures={pictures}/>
      <div className="main_logement">
        <div className="presentation">
          <section id="informations">
            <h1>{title}</h1>
            <p>{location}</p>
          </section>
          <Tag tags={tags} />
        </div>
        <section id="host">
          <p>{host.name}</p>
          <img src={host.picture} alt="profil de l'hôte" />
          <Star rating={rating} />
        </section>
      </div>
      <section className="collapse">
        <Collapse title="Description" width={widthLogement}
          content={description}
        />
        <Collapse title="Équipements" width={widthLogement} content={renderEquipments(equipments)} />
      </section>
    </main>
  );
}

export default LogementDetails;

