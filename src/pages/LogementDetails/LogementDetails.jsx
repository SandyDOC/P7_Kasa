import React from "react";
import Header from "./components/Header/Header";
import Collapse from "./components/Collapse/Collapse";
import Footer from "./components/Footer/Footer";

const title = "Cozy loft on the Canal Saint-Martin";
const subtitle = "Paris, Île-de-France";
const hostText = "Alexandre Dumas";

function LogementDetails() {
  return <>
  <Header/>
  <img src="" alt="" />
  <i></i>
  <i></i>
  <h1>{title}</h1>
  <h2>{subtitle}</h2>
  <div className="host">
    <p>{hostText}</p>
    <figure></figure>
  </div>
  <div className="rate">
    <i className="star"></i>
    {/* <i className="star"></i>
    <i className="star"></i>
    <i className="star"></i>
    <i className="star"></i> */}
  </div>
    <Tag/>
    <Collapse/>
  <Footer/>
  </>
}

export default LogementDetails;