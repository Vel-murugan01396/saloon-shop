import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Section4Page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "sec5carousel2",
  };
  return (
    <>
      <section className="section5">
        <Carousel className="sec5carousel1">
          <div className="sec5cdiv">
            <div className="catimagem1"> </div>
            <h1>BEST ACCESSORIES STORE</h1>
            <p>
              The contents of his bag spilled all over the floor. the amount of
              a particular substance contained in something: Chocolate has a
              high fat content.
            </p>
            <div className="catimage1"></div>
            <p>
              <b>VELMURUGAN/</b>
              <span>SPEED RACESER</span>
            </p>
          </div>

          <div className="sec5cdiv">
            <div className="catimagem2"> </div>
            <h1>BEST ACCESSORIES STORE</h1>
            <p>
              The contents of his bag spilled all over the floor. the amount of
              a particular substance contained in something: Chocolate has a
              high fat content.
            </p>
            <div className="catimage1"></div>
            <p>
              <b>PATRIC/</b>
              <span>RAIDER</span>
            </p>
          </div>

          <div className="sec5cdiv">
            <div className="catimagem3"> </div>
            <h1>BEST ACCESSORIES STORE</h1>
            <p>
              The contents of his bag spilled all over the floor. the amount of
              a particular substance contained in something: Chocolate has a
              high fat content.
            </p>
            <div className="catimage1"></div>
            <p>
              <b>SIVA/</b>
              <span>EXPLOSER</span>
            </p>
          </div>
        </Carousel>
        <hr />
        <div>
          <Slider {...settings}>
            <div>
              <img src="/image/brand-1.png" alt="img1" className="dyimage" />
            </div>
            <div>
              <img src="/image/brand-2.png" alt="img1" className="dyimage" />
            </div>
            <div>
              <img src="/image/brand-3.png" alt="img1" className="dyimage" />
            </div>
            <div>
              <img src="/image/brand-4.png" alt="img1" className="dyimage" />
            </div>
            <div>
              <img src="/image/brand-5.png" alt="img1" className="dyimage" />
            </div>
            <div>
              <img src="/image/brand-3.png" alt="img1" className="dyimage" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
