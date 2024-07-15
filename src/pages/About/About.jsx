import React from "react";
import "./About.scss";

import Banner from "./../../components/Banner/Banner";
import BannerImage from "./../../assets/images/img/bannerAbout.png";
import Collapse from "./../../components/Collapse/Collapse";

function About() {
    return (
    <section className="container_about">
      <Banner image={BannerImage}/>
        <Collapse className="collapsible_about" />
        <Collapse className="collapsible_about"/>
        <Collapse className="collapsible_about"/>
        <Collapse className="collapsible_about"/>
    </section>
    )
}

export default About;