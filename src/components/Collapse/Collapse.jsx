// /*// on met par défaut le collapse fermé
//     const [isOpen, setIsOpen] = useState(false);
//     // isOpen = false fermé --> chargement
//     // isOpen = true ouvert --> au premier click
//     // isOpen = false fermé --> au deuxième click
//     // onClick, on met à jour l'état à l'inverse de ce qu'il est, soit true ou false
//     // className, on détermine les classes css à mettre selon l'état de isOpen

import './Collapse.scss';
// import { useState } from 'react';
// import IconArrow from "./../../assets/images/icons/arrow_up.png";
// const Collapse = ({ title, content, width }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const collapseStyle = {
//     width: width
//   };
//   return (
//     <div id="collapse" style={collapseStyle}>
//       <button type="button" className="collapsible" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <img className={"icon " + (isOpen ? 'open' : '')} src={IconArrow} alt="triangle vers le haut" />
//       </button>
//       <div className={"content " + (isOpen ? "display" : "")}>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// }

// export default Collapse;

import { useState } from 'react';
import IconArrow from "./../../assets/images/icons/arrow_up.png";
// import "./Collapse.css"; // Importer le fichier CSS

const Collapse = ({ title, content, width }) => {
  const [isOpen, setIsOpen] = useState(false);

  const collapseStyle = {
    width: width
  };

  return (
    <div id="collapse" style={collapseStyle}>
      <button
        type="button"
        className="collapsible"
        onClick={() => setIsOpen(!isOpen)}
        style={collapseStyle} 
      >
        {title}
        <img className={"icon " + (isOpen ? 'open' : '')} src={IconArrow} alt="triangle vers le haut" />
      </button>
      <div className={"content " + (isOpen ? "display" : "")} style={collapseStyle}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;

