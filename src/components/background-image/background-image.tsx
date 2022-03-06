import React from "react";

import "./background-image.css";
import bg from "../../images/bg.jpg";

function BackgroundImage() {
  return (
    <div className="backgroundImageWrapper">
      <img className="image" src={bg} alt="bg" />
    </div>
  );
}

export default BackgroundImage;
