import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";

function Home() {
  return <>
  <Header/>
    <Banner/>
    <Card/>
  <Footer/>
     {/* <Header/> */}
  </>
}

export default Home;