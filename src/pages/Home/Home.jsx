import React from "react";
import Banner from "./../../components/Banner/Banner";
import BannerHome from "./../../assets/images/img/banniereHome.png";
import Card from "./../../components/Card/Card";
import "./Home.scss";
import "./../../assets/scss/style.scss";
import {Link} from "react-router-dom";
// import LogementDetails from './pages/LogementDetails/LogementDetails';

function Home() {
  return (
    <main>
    <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
    <section id="gallery">
      {/* <Link to="/logement-details"><Card /></Link>       */}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </section>
  </main>
  )
}

export default Home;

 //Gestion des EVENEMENTS on...(onClick, onSubmit)
//  const handleClick = (e) => {
//   console.log(e)
//   alert("J'ai cliqué sur le titre")
// }

{/* <Card onClick={handleClick}/> */}