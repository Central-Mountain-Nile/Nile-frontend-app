import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <Carousel autoPlay>
      <div>
        <img className="img" src={require("./images/banner.jpg")} />
      </div>
      <div>
        <img
          className="img"
          src={require("./images/pexels-karolina-grabowska-5650026.jpg")}
        />
      </div>
      <div>
        <img
          className="img"
          src={require("./images/pexels-meruyert-gonullu-6152258.jpg")}
        />
      </div>
      <div>
        <img
          className="img"
          src={require("./images/pexels-tara-winstead-6690884.jpg")}
        />
      </div>
    </Carousel>
  );
}

export default Banner;
