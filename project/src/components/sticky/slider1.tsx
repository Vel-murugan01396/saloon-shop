import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SlidePage() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // className: "sec2carousel",
    arrow: false,
  };
  return (
    <>
      {/* <div className="slider2"> */}
      <Slider {...settings}>
        <div className="smslide">
          <img src="/image/s1.jpg" alt="s1" className="w-52" />
          <h2>Magic Of New Beginnings</h2>
        </div>
        <div className="smslide">
          <img src="/image/s2.jpg" alt="s1" className="w-52" />
          <h2>How To Fake A Healthy Glow</h2>
        </div>
        <div className="smslide">
          <img src="/image/s3.jpg" alt="s1" className="w-52" />
          <h2>New Bridal Collection 2020</h2>
        </div>
        <div className="smslide">
          <img src="/image/s4.jpg" alt="s1" className="w-52" />
          <h2>When you have a breakfast</h2>
        </div>
      </Slider>
      {/* </div> */}
    </>
  );
}
