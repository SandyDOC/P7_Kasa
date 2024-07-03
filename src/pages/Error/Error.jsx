import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Error() {
    return <>
    <Header/>
     <p>404</p>
     <p>Oups! La page que vous demandez n'existe pas.</p>
     <p>Retourner sur la page d’accueil</p>
    <Footer/>
    </>
  }
  
  export default Error;