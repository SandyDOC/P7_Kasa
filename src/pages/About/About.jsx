import React from "react";
import data from "./../../data/aboutList.json";
import "./About.scss";

import Banner from "./../../components/Banner/Banner";
import BannerImage from "./../../assets/images/img/bannerAbout.png";
import Collapse from "./../../components/Collapse/Collapse";


function About() {
  const widthAbout = '961px';
    return (
    <section className="container_about">
      <Banner image={BannerImage}/>

      {data.map((item) => (
        <Collapse key={item.id} title={item.title} content={item.content} width={widthAbout}/>
      ))}         
    </section>
    )
}

export default About;