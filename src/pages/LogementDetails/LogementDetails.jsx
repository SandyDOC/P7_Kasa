import { useParams } from 'react-router-dom';

import data from "./../../data/data.json";
import "./LogementDetails.scss";

import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "./../../components/Tag/Tag";
import Star from "./../../components/Star/Star";
import Collapse from "./../../components/Collapse/Collapse";

import Error from "../Error/Error";

function LogementDetails() {
  const { id } = useParams();

  const logement = data.find((logementATrouver) => logementATrouver.id == id);

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
      <Carrousel pictures={pictures} />
      <div className="main_logement">
        <div className="presentation">
          <section id="informations">
            <h1>{title}</h1>
            <p>{location}</p>
          </section>
          <section className="tags">
            {tags.map((tag, index) =>
            (
              <Tag key={index+tag} tag={tag} />
            ))
            }
          </section>

        </div>
        <section id="host">
          <p>{host.name}</p>
          <img src={host.picture} alt="profil de l'hôte" />
          <Star rating={rating} />
        </section>
      </div>
      <section className='container_collapse'>
        <Collapse title="Description"
          content={description}
        />
        <Collapse title="Équipements" content={renderEquipments(equipments)} />
      </section>
    </main>
  );
}

export default LogementDetails;

