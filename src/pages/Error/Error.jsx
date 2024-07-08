import React from "react";
import "./Error.scss";
import {Link} from "react-router-dom";

function Error() {
    return (
    <main>
     <p>404</p>
     <p>Oups! La page que vous demandez n'existe pas.</p>
     <Link to="/">Retourner sur la page d’accueil</Link>
     {/* <p>Retourner sur la page d’accueil</p> */}
    </main>
    )
  }
  
  export default Error;