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
    <main className='container-logement'>
      <Carrousel pictures={pictures} />
      <div className="main_logement">

        <section id="informations">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="tags">
            {tags.map((tag, index) =>
            (
              <Tag key={index + tag} tag={tag} />
            ))
            }
          </div>
        </section>

        <section id="host">
          <div className='host-name'>
            <p>{host.name}</p>
            <img className='host-img' src={host.picture} alt="profil de l'hôte" />
          </div>
          <Star rating={rating} />
        </section>
      </div>

      <section id='container_collapse'>
        <Collapse title="Description"
          content={description}
        />
        <Collapse title="Équipements" content={renderEquipments(equipments)} />
      </section>
    </main>
  );
}

export default LogementDetails;

