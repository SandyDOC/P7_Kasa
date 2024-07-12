import React, { useState } from 'react';
// import "./../../assets/scss/style.scss";
import './Collapse.scss'; 

const title = "Description";

function Collapse() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <button type="button" className="collapsible" onClick={toggleCollapsible}>
        {title}
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <p>
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et
          restaurants.<br />Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les
          voyageurs en solo et les voyageurs d'affaires.<br />Vous êtes à 1 station de la gare de l'est (7 minutes à
          pied).
        </p>
      </div>
    </>
  );
}

export default Collapse;

// import React from "react";
// import "./Collapse.scss";

// function Collapse() {
//     return (
//         <section className="collapse_about">
//         <button type="button" className="collapsible">Description</button>
//         <div className="content">
//             <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars
//                 et
//                 restaurants.<br>Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour
//                 les
//                 voyageurs en solo et les voyageurs d'affaires.<br>Vous êtes à 1 station de la gare de l'est (7
//                 minutes à
//                 pied).</p>
//         </div>
//         <button type="button" className="collapsible">Description</button>
//         <div className="content">
//             <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars
//                 et
//                 restaurants.<br>Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour
//                 les
//                 voyageurs en solo et les voyageurs d'affaires.<br>Vous êtes à 1 station de la gare de l'est (7
//                 minutes à
//                 pied).</p>
//         </div>
//         <button type="button" className="collapsible">Description</button>
//         <div className="content">
//             <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars
//                 et
//                 restaurants.<br>Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour
//                 les
//                 voyageurs en solo et les voyageurs d'affaires.<br>Vous êtes à 1 station de la gare de l'est (7
//                 minutes à
//                 pied).</p>
//         </div>
//     </section>

//     )
// }

// export default Collapse;
