import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function Section3Page() {
  return (
    <>
      <section className="grid grid-cols-3" id="section3">
        <div id="sec1">
          <div className="sec1sub1">
            <img src="/image/quality.png" alt="1" className="sec1i" />
            <h1>HAIR CUT</h1>
            <img src="/image/dia1.png" alt="1" className="sec2i" />
            <p>Man / Woman / Kids</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <h1>~$120.00</h1>
          </div>
        </div>
        <div className="grid grid-row-2" id="sec2">
          <div className="sec2sub1"></div>
          <div className="sec2sub2">
            <img src="/image/service.png" alt="1" className="sec1i" />
            <h1>HAIR STYLE</h1>
            <img src="/image/dia1.png" alt="1" className="sec2i" />
            <h2>Hairdryer__________$125.00</h2>
            <p>Duration / 15 minutes</p>
            <h2>Coloring__________$125.00</h2>
            <p>Duration / 45 minutes</p>
            <h2>Extravagant__________$225.00</h2>
            <p>Duration / 15 minutes</p>
          </div>
        </div>
        <div id="sec3">
          <div className="sec3sub1">
            <img src="/image/quality.png" alt="1" className="sec1i" />
            <h1>WEDDING HAIR</h1>
            <img src="/image/dia1.png" alt="1" className="sec2i" />
            <p>Bride / Groom / Maids</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <h1>~$115.00</h1>
          </div>
        </div>
      </section>
    </>
  );
}
