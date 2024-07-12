import React from "react";

import Banner from "./../../components/Banner/Banner";
import BannerImage from "./../../assets/images/img/bannerAbout.png";
import Collapse from "./../../components/Collapse/Collapse";

function About() {
    return (
    <section className="container_about">
      <Banner image={BannerImage}/>
      <div className="collapse_about">
        <Collapse className="collapsible_about" />
        <Collapse className="collapsible_about"/>
        <Collapse className="collapsible_about"/>
        <Collapse className="collapsible_about"/>
      </div>
    </section>
    )
}

export default About;