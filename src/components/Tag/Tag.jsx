import React from "react";
import "./Tag.scss";

const location = "Paris 10";

function Tag() {
  return <>
  <span className="tag">{location}</span>
  </>
}

export default Tag;