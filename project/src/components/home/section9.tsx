import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section9Page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    className: "slider",
  };

  return (
    <>
      <section>
        <div>
          <h2> Multiple items </h2>
          <Slider {...settings}>
            <div>
              <div>
                <img src="/image/b1.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b2.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b3.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b4.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b5.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b1.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b2.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b3.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
            <div>
              <div>
                <img src="/image/b4.jpg" alt="img1" className="dyimage" />
              </div>
              <h1>esxdcjkg</h1>
              <p>bvvbvbn</p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
