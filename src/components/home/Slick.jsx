import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SLIDER_CARDS } from "../common/Helper";
import { SlickIcon } from "../common/Icons";
export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="transform translate-x-[600px] translate-y-5 opacity-70 text-6xl text-[#0A0A0A] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      →
    </div>
  );
};

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="text-6xl transform translate-y-[313px] opacity-70 translate-x-[520px] text-[#0A0A0A] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      ←
    </div>
  );
};

function Slick() {
  const settings = {
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 2.9,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container max-w-[1140px] mx-auto py-8 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl">
        <Slider {...settings}>
          {SLIDER_CARDS.map((data, i) => (
            <div
              key={i}
              className="border border-solid border-white bg-[#FFF3ED] rounded-3xl w-full max-w-[365px] px-[30px] py-5"
            >
                <SlickIcon/>
              <h2 className="text-2xl font-semibold text-black mt-8">{data.heading}</h2>
              <p>{data.paragraph}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slick;
