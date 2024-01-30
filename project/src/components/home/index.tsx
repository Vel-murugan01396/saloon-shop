import React from "react";
import Section1Page from "./section1";
import Section2Page from "./section2";
import Section3Page from "./section3";
import Section4Page from "./section4";
import Section5Page from "./section5";
import Section6Page from "./section6";
import Section7Page from "./section7";
import FooterPage from "./footer";
import Section10Page from "./section10";
import NavebarPage from "./navebar";
import OnebySlider from "./onebyslider";

export default function HomePage() {
  return (
    <>
      <div>
        <NavebarPage />
        <Section1Page />
        <Section2Page />
        <div className="textrow">
          <h1>Our Services</h1>
          <img src="/image/scissor.png" alt="" />
          <h3>- Trendy Salon & Spa -</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br></br>magna aliqua.
          </p>
        </div>
        <Section3Page />
        <div className="textrow2">
          <h1>Our Services</h1>
          <img src="/image/scissor.png" alt="" />
          <h3>- Looking A Beautiful Style -</h3>
        </div>
        <Section4Page />
        <Section5Page />
        <div className="textrow">
          <h1>APPOIMENT</h1>
          <img src="/image/scissor.png" alt="" />
          <h3>- Trendy Salon & Spa -</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br></br>magna aliqua.
          </p>
        </div>
        <Section10Page />
        <OnebySlider />

        <div className="textrow3">
          <h1>Our Blog</h1>
          <img src="/image/scissor.png" alt="image" />
          <p>
            <b>- Update The New Trend -</b>
          </p>
        </div>
        <Section6Page />

        <Section7Page />

        <FooterPage />
        {/* <MainHeader /> */}
      </div>
    </>
  );
}
