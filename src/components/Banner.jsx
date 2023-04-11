import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showThumbs={false}
      interval={5000}
      showStatus={false}
    >
      <div>
        <img className="img" src={require("./images/banner.jpg")} />
      </div>
      <div>
        <img className="img" src={require("./images/taylorAcoustics.jpeg")} />
      </div>
      <div>
        <img className="img" src={require("./images/tools2.jpeg")} />
      </div>
      <div>
        <img className="img" src={require("./images/clothes.jpeg")} />
      </div>
      <div>
        <img className="img" src={require("./images/iphones.jpeg")} />
      </div>
      <div>
        <img className="img" src={require("./images/VR.png")} />
      </div>
    </Carousel>
  );
}

export default Banner;
