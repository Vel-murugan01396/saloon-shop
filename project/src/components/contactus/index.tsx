import React from "react";
import Section1Page from "./section1";

import FooterPage from "../home/footer";
import Section3Page from "./section3";
import Section2Page from "./section2";
import Section4Page from "./section4";
import NavebarPage from "../home/navebar";
export default function ContactusPage() {
  return (
    <>
      <div>
        <NavebarPage />
        <Section1Page />
        {/* <Section2Page /> */}
        <Section3Page />
        <Section4Page />
        <FooterPage />
      </div>
    </>
  );
}
