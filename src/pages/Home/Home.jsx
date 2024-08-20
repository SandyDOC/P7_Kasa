import data from "./../../data/data.json";

import Banner from "./../../components/Banner/Banner";
import BannerHome from "./../../assets/images/img/banniereHome.png";
import Card from "./../../components/Card/Card";

import "./Home.scss";

function Home() {
  return (
    <main className="container-home">
      <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
      <section id="gallery">
        {data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
        ))}
      </section>
    </main>
  )
}

export default Home;
