import React from "react";
import "./LogementDetails.scss";
// import Tag from "./../../components/Tag/Tag";
import Collapse from "./../../components/Collapse/Collapse";
import Background from "./../../assets/images/img/Background.png";
const title = "Cozy loft on the Canal Saint-Martin";
const subtitle = "Paris, Île-de-France";
const hostText = "Alexandre Dumas";

function LogementDetails() {
  return (
    <>
      <section className="carrousel">
        <img
        image={Background}
          className="carrousel-img"
          src="./../../assets/images/img/Background.png"
          alt="image relaxante d'une statue de Bouddha"
        />
        <img
          className="arrow_left"
          src="images/icons/arrow_left.png"
          alt="flèche gauche"
        />
        <img
          className="arrow_right"
          src="images/icons/arrow_right.png"
          alt="flèche droite"
        />
      </section>
      <div className="main_logement">
        <div className="presentation">
          <section id="informations">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </section>
          <section className="tags">
            {/* <Tag/>
            <Tag/>
            <Tag/> */}
          </section>
        </div>
        <section id="host">
          <p>{hostText}</p>
          <img src="images/icons/Host.png" alt="rond gris" />
          <div className="rate">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
            ))}
          </div>
        </section>
        <section className="collapse">
          <Collapse/>
          <Collapse/>
        </section>
      </div>
    </>
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