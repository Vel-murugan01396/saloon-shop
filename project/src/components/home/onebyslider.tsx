import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function OnebySlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "onebyone",
  };

  return (
    <>
      <section className="section11">
        <div className="sec11text">
          <h1>Our Shop</h1>
          <img src="/image/scissor.png" alt="" />
          <h3>- Lets Try Them Now -</h3>
        </div>
        <Slider {...settings}>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/1a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>Woodclub Brush</h1>
                <p>$32.00</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/2a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>Military Brush</h1>
                <p>$28.50</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/3a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>Styler Brush</h1>
                <p>$20.00</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/4a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>Boar Brush</h1>
                <p>$32.50</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/5a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>Flat top Brush</h1>
                <p>$33.00</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/6a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>club Brush</h1>
                <p>$30.00</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/7a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>Wood Brush</h1>
                <p>$32.00</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
          <div className="onemdiv">
            <div className="onesmdiv">
              <img src="/image/8a.jpg" alt="img1" />
              <div className="onesdiv">
                <h1>Salve Brush</h1>
                <p>$90.00</p>
              </div>
            </div>
            <div className="shovdiv">
              <img src="/image/search.png" alt="1" className="himg" />
              <img src="/image/cart.png" alt="2" className="himg" />
              <img src="/image/heart.png" alt="3" className="himg" />
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
