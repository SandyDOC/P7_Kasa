import React from "react";
import "./Tag.scss";

const location = "Paris 10";

function Tag() {
// function Tag({tag}) {
  return <>
  {/* <span className="tag">{tag}</span> */}
  <span className="tag">{location}</span>
  </>
}

export default Tag;