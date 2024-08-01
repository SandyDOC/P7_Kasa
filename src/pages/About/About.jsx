import data from "./../../data/aboutList.json";
import "./About.scss";

import Banner from "./../../components/Banner/Banner";
import BannerImage from "./../../assets/images/img/bannerAbout.png";
import Collapse from "./../../components/Collapse/Collapse";


function About() {
  return (
    <main className="container_about">
      <Banner image={BannerImage} />
      <div className="collapses_container">
        {data.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  )
}

export default About;