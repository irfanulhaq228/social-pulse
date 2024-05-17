"use client";

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div className="h-[400px] flex justify-center items-center gap-5">
        <div>Content 1</div>
        <div>Img 1</div>
      </div>
      <div className="h-[400px] flex justify-center items-center gap-5">
        <div>Content 2</div>
        <div>Img 2</div>
      </div>
      <div className="h-[400px] flex justify-center items-center gap-5">
        <div>Content 3</div>
        <div>Img 3</div>
      </div>
      <div className="h-[400px] flex justify-center items-center gap-5">
        <div>Content 4</div>
        <div>Img 4</div>
      </div>
      <div className="h-[400px] flex justify-center items-center gap-5">
        <div>Content 5</div>
        <div>Img 5</div>
      </div>
    </Carousel>
  );
};

export default ImageSlider;
