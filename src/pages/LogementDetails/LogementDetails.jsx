import React from "react";
import data from "./../../data/data.json";

import "./LogementDetails.scss";

import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "./../../components/Tag/Tag";
import Star from "./../../components/Star/Star";
import Collapse from "./../../components/Collapse/Collapse";

import ProfilHost from "./../../assets/images/icons/Host.png";

const title = "Cozy loft on the Canal Saint-Martin";
const subtitle = "Paris, Île-de-France";
const hostText = "Alexandre Dumas";

const width = {width:"520px"};

function LogementDetails() {
  const widthLogement = '520px';

  return (
    <main>
      <Carrousel />
      <div className="main_logement">
        <div className="presentation">
          <section id="informations">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </section>
          <section className="tags">
            <Tag />
            <Tag />
            <Tag />
          </section>
        </div>
        <section id="host">
          <p>{hostText}</p>
          <img src={ProfilHost} alt="profil de l'hôte" />
          <div className="rate">
            <Star />
            <Star />
            <Star />
            <Star />
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
        <Collapse width={widthLogement}/>
        {/* <Collapse width={width}/> */}
      </section>
      {/* </div> */}
    </main>
  );
}

{/* <p>Cozy</p>
<p>Paris 10</p>
<p>Canal</p> */}
export default LogementDetails;

{/* <button type="button" className="collapsible">Description</button>
          <div className="content">
            <p>
              Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants.<br />
              Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.<br />
              Vous êtes à 1 station de la gare de l'est (7 minutes à pied).
            </p>
          </div>
          <button type="button" className="collapsible">Équipements</button>
          <div className="content">
            <p>
              Climatisation<br />
              Wi-Fi<br />
              Cuisine<br />
              Espace de travail<br />
              Fer à repasser<br />
              Sèche-cheveux<br />
              Cintres.
            </p>
          </div> */}