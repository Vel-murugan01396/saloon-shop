import React from "react";
import Section1Page from "../about/section1";
import Section2Page from "./section2";
import Section4Page from "./section4";
import Section5Page from "./section5";
import FooterPage from "../home/footer";
import NavebarPage from "../home/navebar";
export default function AboutPage() {
  return (
    <>
      <NavebarPage />
      <Section1Page />
      <Section2Page />
      <Section4Page />
      <div className="atextrow2">
        <h1>Meet Our Team</h1>
        <img src="/image/scissor.png" alt="" />
        <h3>- Our Talent Member -</h3>
      </div>
      <Section5Page />
      <FooterPage />
    </>
  );
}
