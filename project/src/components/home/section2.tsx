import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section2Page() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "sec2carousel",
    arrow: false,
  };
  return (
    <>
      <section id="number" className="grid grid-cols-2">
        <div id="first" className="grid grid-row-2">
          <div className="sfirst"></div>
          <div className="ssecond">
            <img src="/image/scissor.png" alt="1" className="sfimage1" />
            <h1>Opening Hours</h1>
            <img src="/image/dia1.png" alt="1" className="sfimage2" />
            <p>MONDAY - FRIDAY</p>
            <p>10:00 AM - 22:00 PM</p>
            <hr className="sfhr" />
            <p>SATURDAY</p>
            <p>10:00 AM - 20:00 PM</p>
            <hr className="sfhr" />
            <p>SUNDAY</p>
            <p>CLOSED</p>
          </div>
        </div>
        <div className="numdiv2">
          <h1>ABOUT AS STORY</h1>
          <img src="/image/scissor.png" alt="img" width="30px" />
          <h2>Welcome to Shang Affaires</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img src="/image/signature-1.png" alt="img" />
          <h2>John Doe</h2>
          <p>Director</p>
          <Slider {...settings}>
            <div>
              <img src="/image/award.png" alt="img1" className="smimage" />
            </div>
            <div>
              <img src="/image/award.png" alt="img1" className="smimage" />
            </div>
            <div>
              <img src="/image/award.png" alt="img1" className="smimage" />
            </div>
            <div>
              <img src="/image/award.png" alt="img1" className="smimage" />
            </div>
            <div>
              <img src="/image/award.png" alt="img1" className="smimage" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
