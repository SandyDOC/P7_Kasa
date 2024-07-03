import React from "react";

//Evènement au click sur le lien
const handleClick = (e) => {
    console.log("J'ai cliqué sur le lien");
  }

//Styles
const styleNav = {};
const styleA = {color: 'inherit',
               textDecoration: 'none',
               listStyle: 'none'};

function Header() {
    return <>
    <img src=".\public\logo\Logo_Kasa-Red.png" alt="logo Kasa" />
    <nav>
        <ul>
            <li><a onClick={handleClick} style={styleA} href="#Accueil">Accueil</a></li>
            <li><a onClick={handleClick} style={styleA} href="#A_propos">A propos</a></li>
        </ul>
    </nav>
    </>
}

export default Header;