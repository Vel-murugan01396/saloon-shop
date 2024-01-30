import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SlidePage() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // className: "sec2carousel",
    arrow: true,
  };
  return (
    <>
      <section className="ssslider">
        <Slider {...settings}>
          <div className="slide">
            <img src="/image/single1.jpg" alt="s1" className=" w-full h-80" />
            <div className="slide1">
              <h2>BOOK APPOINMENT</h2>
            </div>
            <div className="slide2">
              <h2>MR. LEXUS BRYAN</h2>
              <p>Handsome</p>
            </div>
          </div>
          <div className="slide">
            <img src="/image/single2.jpg" alt="s1" className=" w-full h-80" />
            <div className="slide1">
              <h2>BOOK APPOINMENT</h2>
            </div>
            <div className="slide2">
              <h2>MR. HARUTHEME</h2>
              <p>Hair Cut</p>
            </div>
          </div>
          <div className="slide">
            <img src="/image/single3.jpg" alt="s1" className=" w-full h-80" />
            <div className="slide1">
              <h2>BOOK APPOINMENT</h2>
            </div>
            <div className="slide2">
              <h2>MR. LEXUS BRYAN</h2>
              <p>Hair Style</p>
            </div>
          </div>
          <div className="slide">
            <img src="/image/single4.jpg" alt="s1" className=" w-full h-80" />
            <div className="slide1">
              <h2>BOOK APPOINMENT</h2>
            </div>
            <div className="slide2">
              <h2>MR. JOHN SHANG</h2>
              <p>Hair Style</p>
            </div>
          </div>
          <div className="slide">
            <img src="/image/single5.jpg" alt="s1" className=" w-full h-80" />
            <div className="slide1">
              <h2>BOOK APPOINMENT</h2>
            </div>
            <div className="slide2">
              <h2>MRS. MARIAH XPANDER</h2>
              <p>Founder</p>
            </div>
          </div>
          <div className="slide">
            <img src="/image/single3.jpg" alt="s1" className=" w-full h-80" />
            <div className="slide1">
              <h2>BOOK APPOINMENT</h2>
            </div>
            <div className="slide2">
              <h2>MR. ALEX FOUNDER</h2>
              <p>Make Color</p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
