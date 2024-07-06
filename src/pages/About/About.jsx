import React from "react";

import Banner from "./../../components/Banner/Banner";
import Collapse from "./../../components/Collapse/Collapse";
import BannerImage from "./../../assets/images/img/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

function About() {
    return (
        <>
            <Banner image={BannerImage}  />
            <Collapse/>
        </>
       
    )
    
   
   
}

export default About;