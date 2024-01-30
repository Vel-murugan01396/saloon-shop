import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function Section1Page() {
  return (
    <>
      <section className="section1">
        <Carousel className="section1c">
          <div className="hc1div1">
            <div className="overlaydiv">
              <div className="c2div">
                <h1>THE NEW HAIR TRENDING</h1>
                <p>Self:Condition:Gromming:Styleing</p>
                <button className="BOOKING">Book Me</button>
              </div>
            </div>
          </div>
          <div className="hc1div2">
            <div className="overlaydiv">
              <div className="c2div">
                <h1>THE NEW HAIR TRENDING</h1>
                <p>Self:Condition:Gromming:Styleing</p>
                <button className="BOOKING"> Book Me</button>
              </div>
            </div>
          </div>
          <div className="hc1div3">
            <div className="overlaydiv">
              <div className="c2div">
                <h1>THE NEW HAIR TRENDING</h1>
                <p>Self:Condition:Gromming:Styleing</p>
                <button className="BOOKING">Book Me</button>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </>
  );
}
