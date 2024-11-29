import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SLIDER_CARDS } from "../common/Helper";

function Slick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="overflow-hidden">
            <h2 className="text-[40px] text-[#101010] font-semibold text-center mb-10">
                Lorem Ipsum
            </h2>
            <Slider {...settings}>
            <div className="flex justify-center gap-6">
                    {SLIDER_CARDS.map((data, i) => (
                        <div key={i} className="max-w-[365px] bg-[#FFF3ED] rounded-3xl py-5 px-7">
                            <img src={data.imgSrc} alt="partner" />
                            <h2 className="mt-7 text-2xl font-semibold text-[#101010] leading-[150%]">
                                {data.heading}
                            </h2>
                            <p className="mt-4 text-[#101010]">{data.paragraph}</p>
                        </div>
                    ))}
            </div>
            </Slider>
        </div>
    );
}

export default Slick;
