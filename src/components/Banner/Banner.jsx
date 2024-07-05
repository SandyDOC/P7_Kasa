import React from "react";

function Banner({image, title}) {
    return (
        <div id="banner">
            <img src={image} alt="bannière"/>
            <p>{title}</p>
        </div>
    )
  
}

export default Banner;