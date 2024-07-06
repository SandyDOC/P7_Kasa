import React from "react";

import Collapse from "./../../components/Collapse/Collapse";


const title = "Cozy loft on the Canal Saint-Martin";
const subtitle = "Paris, Île-de-France";
const hostText = "Alexandre Dumas";

function LogementDetails() {
  return <>
    <div class="carrousel">
      <img class="carrousel-img" src="images\images\Background.png" alt="image relaxante d'une statue de Bouddha">
      <img class="arrow_left" src="images\icons\arrow_left.png" alt="flèche gauche">
      <img class="arrow_right" src="images\icons\arrow_right.png" alt="flèche droite">
    </div>
    <div class="main_logement">
      <div class="presentation">
        <section id="informations">
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <p>Paris, Île-de-France</p>
        </section>
        <section class="tags">
          {/* <span></span> */}
          <p>Cozy</p>
          <p>Paris 10</p>
          <p>Canal</p>
        </section>
      </div>
      <section id="host">
        <p>Alexandre Dumas</p>
        <img src="images\icons\Host.png" alt="rond gris">
          <div class="rate">
            <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-xs fa-solid fa-star" aria-hidden="true"></i>
          </div>
      </section>
            <section class="collapse">
              <button type="button" class="collapsible">Description</button>
              <div class="content">
                <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars
                  et
                  restaurants.<br>Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour
                    les
                    voyageurs en solo et les voyageurs d'affaires.<br>Vous êtes à 1 station de la gare de l'est (7
                      minutes à
                      pied).</p>
                  </div>
                  <button type="button" class="collapsible">Équipements</button>
                  <div class="content">
                    <p>Climatisation<br>Wi-Fi<br>Cuisine<br>Espace de travail<br>Fer à repasser<br>Sèche-cheveux Cintres.
                    </p>
                    </div>
                    </section>
                    </div>
   </>
};

export default LogementDetails;

 {/* // <img src="" alt="" />
  // <i></i>
  // <i></i>
  // <h1>{title}</h1>
  // <h2>{subtitle}</h2>
  // <div className="host">
  //   <p>{hostText}</p>
  //   <figure></figure>
  // </div>
  // <div className="rate">
  //   <i className="star"></i>
  //   {/* <i className="star"></i>
  //   <i className="star"></i>
  //   <i className="star"></i>
  //   <i className="star"></i> */}
{/* // </div>
  //   <Tag/>
  //   <Collapse/> */} 