import React from "react";

import Banner from "./../../components/Banner/Banner";
import Card from "./../../components/Card/Card";
import BannerHome from "./../../assets/images/banniereHome.png";


function Home() {
  return <>
  
    <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
    <Card/>
  
     {/* <Header/> */}
  </>
}

export default Home;