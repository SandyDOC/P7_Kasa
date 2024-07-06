import React from "react";
import Banner from "./../../components/Banner/Banner";
import BannerHome from "./../../assets/images/img/banniereHome.png";
import Card from "./../../components/Card/Card";
import "./Home.scss";

function Home() {
  return (
  <main>
    <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
    <section id="gallery">
      <Card/>
    </section>
  </main>
  )
}

export default Home;