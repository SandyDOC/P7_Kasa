import React from "react";
import Banner from "./../../components/Banner/Banner";
import BannerHome from "./../../assets/images/img/banniereHome.png";
import Card from "./../../components/Card/Card";
import "./Home.scss";
import "./../../assets/scss/style.scss";

function Home() {
  return (
    <main>
    <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
    <section id="gallery">
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