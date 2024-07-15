// /*// on met par défaut le collapse fermé
//     const [isOpen, setIsOpen] = useState(false);

//     // isOpen = false fermé --> chargement
//     // isOpen = true ouvert --> au premier click
//     // isOpen = false fermé --> au deuxième click
//     /*
//     * (isOpen ? "down" : "up")
//     * if(isOpen) {
//     *  className = "down"
//     * }
//     * else {
//     *  className = "up"
//     * }
//     * (isOpen ? "display" : "")
//     * if(isOpen) {
//     *  className = "display"
//     * }
//     * else {
//     *  className = ""
//     * }
//     * 

//     // onClick, on met à jour l'état à l'inverse de ce qu'il est, soit true ou false
//     // className, on détermine les classes css à mettre selon l'état de isOpen
//     return (
//       <div id="collapse">
//           <button type="button" onClick={() => setIsOpen(!isOpen)} className="collapsible arrow">{title}<i className={"arrow " + (isOpen ? "down" : "up")}></i></button>
//           <div className={"content " + (isOpen ? "display" : "")}>
//               <p>{content}</p>
//           </div>
//       </div>
//   )*/

import React, { useState } from 'react';
import './Collapse.scss';

const title = "test title";
const content = "test"

const Collapse = () => {
// const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="collapse">
      <button type="button" className="collapsible" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <i className= {"arrow " + (isOpen ? "down" : "up")}></i>
      </button>
      <div className={"content " + (isOpen ? "display" : "")}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
