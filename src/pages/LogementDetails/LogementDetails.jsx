import React from "react";
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
        <Collapse width={width}/>
        <Collapse width={width}/>
      </section>
      {/* </div> */}
    </main>
  );
}

export default LogementDetails;

