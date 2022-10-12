import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  return (
    <div className="w-[100%]">
      <Carousel className="glass mr-5">
        <div>
          <img src="/src/assets/project-1.png" />
          <p className="legend glass">Blog Site</p>
        </div>
        <div>
          <img src="/src/assets/project-2.png" />
          <p className="legend">Construction Site</p>
        </div>
        <div>
          <img src="/src/assets/project-3.png" />
          <p className="legend">Education Site</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
