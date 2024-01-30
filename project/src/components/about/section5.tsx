import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Section5Page() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    className: "Aslider",
  };
  return (
    <>
      <section className="Asec5">
        <div>
          <Slider {...settings}>
            <div className="amaindiv">
              <div>
                <img src="/image/E1.png" alt="img1" className="dyimage" />
              </div>
              <div className="headings">
                <h1>PATRIC</h1>
                <p>Founder</p>
              </div>
              <div className="slidericondiv">
                <img src="/image/youtube.png" alt="" className="Aiconsize" />
                <img src="/image/twitter.png" alt="" className="Aiconsize" />
                <img src="/image/instagram.png" alt="" className="Aiconsize" />
                <img src="/image/facebook.png" alt="" className="Aiconsize" />
              </div>
            </div>
            <div className="amaindiv">
              <div>
                <img src="/image/E2.png" alt="img1" className="dyimage" />
              </div>
              <div className="headings">
                <h1>SIVA</h1>
                <p>Chairman</p>
              </div>
              <div className="slidericondiv">
                <img src="/image/youtube.png" alt="" className="Aiconsize" />
                <img src="/image/twitter.png" alt="" className="Aiconsize" />
                <img src="/image/instagram.png" alt="" className="Aiconsize" />
                <img src="/image/facebook.png" alt="" className="Aiconsize" />
              </div>
            </div>
            <div className="amaindiv">
              <div>
                <img src="/image/E3.png" alt="img1" className="dyimage" />
              </div>
              <div className="headings">
                <h1>VEL</h1>
                <p>Comedypice</p>
              </div>
              <div className="slidericondiv">
                <img src="/image/youtube.png" alt="" className="Aiconsize" />
                <img src="/image/twitter.png" alt="" className="Aiconsize" />
                <img src="/image/instagram.png" alt="" className="Aiconsize" />
                <img src="/image/facebook.png" alt="" className="Aiconsize" />
              </div>
            </div>
            <div className="amaindiv">
              <div>
                <img src="/image/E4.png" alt="img1" className="dyimage" />
              </div>
              <div className="headings">
                <h1>NITHIS</h1>
                <p>La Designer</p>
              </div>
              <div className="slidericondiv">
                <img src="/image/youtube.png" alt="" className="Aiconsize" />
                <img src="/image/twitter.png" alt="" className="Aiconsize" />
                <img src="/image/instagram.png" alt="" className="Aiconsize" />
                <img src="/image/facebook.png" alt="" className="Aiconsize" />
              </div>
            </div>
            <div className="amaindiv">
              <div>
                <img src="/image/E2.png" alt="img1" className="dyimage" />
              </div>
              <div className="headings">
                <h1>JADUD</h1>
                <p>Developer</p>
              </div>
              <div className="slidericondiv">
                <img src="/image/youtube.png" alt="" className="Aiconsize" />
                <img src="/image/twitter.png" alt="" className="Aiconsize" />
                <img src="/image/instagram.png" alt="" className="Aiconsize" />
                <img src="/image/facebook.png" alt="" className="Aiconsize" />
              </div>
            </div>
            <div className="amaindiv">
              <div>
                <img src="/image/E4.png" alt="img1" className="dyimage" />
              </div>
              <div className="headings">
                <h1>MINION</h1>
                <p>Fabric Designer</p>
              </div>
              <div className="slidericondiv">
                <img src="/image/youtube.png" alt="img" className="Aiconsize" />
                <img src="/image/twitter.png" alt="img" className="Aiconsize" />
                <img
                  src="/image/instagram.png"
                  alt="img"
                  className="Aiconsize"
                />
                <img
                  src="/image/facebook.png"
                  alt="img"
                  className="Aiconsize"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
