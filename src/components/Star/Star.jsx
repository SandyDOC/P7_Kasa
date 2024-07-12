import React from "react";
import "./Star.scss";

import StarActive from "./../../assets/images/icons/star_active.png";
// import StarInactive from "./../../assets/images/icons/star_inactive.png";

function Star() {
    return <>
    <img src={StarActive} alt="étoile remplie" />
    </>
}

export default Star;