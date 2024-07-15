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
const content = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget fermentum augue. Nulla arcu tellus, consequat a tincidunt vitae, dictum quis nisi. Pellentesque sollicitudin, quam eu malesuada mollis, libero nunc egestas est, eget convallis nunc nulla sit amet dolor. Cras pellentesque, dui eu maximus facilisis, massa nunc egestas tortor, vitae accumsan dui lectus nec libero. Pellentesque cursus tellus eu risus congue sagittis. Aliquam erat volutpat. Ut vehicula, urna eget elementum interdum, mauris orci ultricies magna, non venenatis dolor tortor ut arcu.Morbi tempus est at convallis convallis. Fusce euismod, elit at vulputate placerat, dui leo gravida mauris, at gravida dolor neque id elit. Morbi at commodo felis. Quisque nec facilisis ipsum. Quisque aliquam a massa sed pretium. Nam dapibus tempor lectus. Praesent quis tempor nulla. Sed id fermentum orci.Cras eget luctus magna. Nulla rhoncus, nisl vitae porttitor tempus, urna magna cursus arcu, sit amet auctor diam elit et lorem. Aenean bibendum vestibulum neque vitae blandit. Mauris rutrum tellus tortor, non euismod sapien elementum fringilla. Etiam non imperdiet elit. Aliquam fringilla vitae magna ut commodo. Etiam bibendum malesuada facilisis. Integer maximus ipsum metus, sed aliquet ligula hendrerit quis. Donec non metus nec odio laoreet imperdiet et lacinia risus. Nam porta, lectus sit amet blandit molestie, ligula nibh scelerisque dui, a auctor sapien turpis eget libero. "

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
