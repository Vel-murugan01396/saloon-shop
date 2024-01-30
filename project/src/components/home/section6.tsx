import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function Section6Page() {
  return (
    <>
      <section id="section6" className="grid grid-cols-2">
        <Carousel>
          <div className="bgcarousel1">
            <div className="bgimage1"></div>
            <div className="bgcarouseltext">
              <div className="bgcarousel_subtext1">
                <h1>24</h1>
                <hr />
                <h1>Dec</h1>
              </div>
              <div className="bgcarousel_subtext2">
                <h1>7 Best Runway Beuty Looks</h1>
                <p>
                  Nullam imperdiet, sem at fringilla lobortis, sem nibh
                  fringilla nibh,...
                </p>
              </div>
            </div>
          </div>
          <div className="bgcarousel2">
            <div className="bgimage2"></div>
            <div className="bgcarouseltext">
              <div className="bgcarousel_subtext1">
                <h1>24</h1>
                <hr />
                <h1>Dec</h1>
              </div>
              <div className="bgcarousel_subtext2">
                <h1>7 Best Runway Beuty Looks</h1>
                <p>
                  Nullam imperdiet, sem at fringilla lobortis, sem nibh
                  fringilla nibh,...
                </p>
              </div>
            </div>
          </div>
        </Carousel>

        <div id="sec6div2" className="grid grid-row-2">
          <div className="div2sub1">
            <div className="smimage1">
              <img src="/image/thumb.png" alt="1" className="zimg" />
            </div>
            <div className="div2texts">
              <h1>December 24, 2021</h1>
              <h2>New Bridal Collection 2020</h2>
              <p>
                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla
                nibh,...
              </p>
              <h3>READ MORE {">"}</h3>
            </div>
          </div>
          <div className="div2sub2">
            <div className="smimage2">
              <img src="/image/single-blog-2.jpg" alt="1" className="zimg" />
            </div>
            <div className="div2texts">
              <h1>December 24, 2021</h1>
              <h2>New Bridal Collection 2020</h2>
              <p>
                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla
                nibh,...
              </p>
              <h3>READ MORE {">"}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
