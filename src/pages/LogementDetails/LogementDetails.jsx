import { useParams } from 'react-router-dom';

import data from "./../../data/data.json";
import "./LogementDetails.scss";

import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "./../../components/Tag/Tag";
import Star from "./../../components/Star/Star";
import Collapse from "./../../components/Collapse/Collapse";
import Profil from '../../components/Profil/Profil';

import Error from "../Error/Error";

import ArrowLeft from "./../../assets/images/icons/arrow_left.png"; // Importation de l'image de la flèche gauche.
import ArrowRight from "./../../assets/images/icons/arrow_right.png"; // Importation de l'image de la flèche droite.
import Background from "./../../assets/images/img/Background.png";
import ProfilHost from "./../../assets/images/icons/Host.png";
const title = "title : Appartement cosy";
const subtitle = "location : Ile de France - Paris 17e";
const hostText = "host.name : Nathalie Jean";

function LogementDetails() {
  const widthLogement = '520px';
  const { id } = useParams();
  // const logement = data.find(logement => logement.id === "c67ab8a7");

  // Vérifie si le logement est introuvable. Si c'est le cas, affiche un message d'erreur.
  // if (!logement) {
  //   return <Error />
  // }

  // const { title, location, host} = logement;

  return (
    <main>
      <section className='carrousel'><img
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
        /></section>
        
      {/* <Carrousel /> */}
      <div className="main_logement">
        <div className="presentation">
          <section id="informations">
            {/* <h1>{logement.title}</h1> */}
            <h1>{title}</h1>
            {/* <p>{logement.location}</p> */}
            <p>{subtitle}</p>
          </section>

          <section className="tags">
            {/* {data.map((logement) => (
              <div key={logement.id}>
                <Tag tags={logement.tags} />
              </div>
            ))} */}
            {/* <Tag />
            <Tag />
            <Tag /> */}
          </section>
        </div>

        <section id="host">
          {/* <Profil/> */}
          <p>{hostText}</p>
          <img src={ProfilHost} alt="profil de l'hôte" />

          <div className="rate">
            <Star />
          </div>
          {/* <div className="rate">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
        ))}
      </div> */}
        </section>
      </div>


      <section className="collapse">
        {/* <Collapse title="Description" content={logement.description} index={0} width={widthLogement}/> */}
        <Collapse title="Équipements" content={data.description} width={widthLogement} />
        {/* <Collapse title="Équipements" content={item.equipments} width={widthLogement}/> */}
      </section>
      {/* </div> */}
    </main>
  );
}

export default LogementDetails;

/******* */
// <main>
//   <Carrousel pictures={logement.pictures} />
//   <div className="main_logement">
//     <div className="presentation">
//       <section id="informations">
//         <h1>{logement.title}</h1>
//         <p>{logement.location}</p>
//       </section>
//       <section className="tags">
//         {logement.tags.map((tag, index) => (
//           <Tag key={index} tag={tag} />
//         ))}
//       </section>
//     </div>
//     <section id="host">
//       <p>{logement.host.name}</p>
//       <img src={logement.host.picture} alt={`profil de ${logement.host.name}`} />
//       <div className="rate">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} filled={i < logement.rating} />
//         ))}
//       </div>
//     </section>
//   </div>
//   <section className="collapse">
//     <Collapse title="Description" content={logement.description} width="520px" />
//     <Collapse title="Équipements" content={<ul>{logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} width="520px" />
//   </section>
// </main>
