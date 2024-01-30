import React from "react";

import FooterPage from "../home/footer";
import SlidePage from "./slide";
import Section1Page from "./section1";
import Cpage from "./cpage";
import NavebarPage from "../home/navebar";

export default function BarberSlidePage() {
  return (
    <>
      <NavebarPage />
      <Section1Page />
      <SlidePage />
      {/* <Cpage /> */}
      <FooterPage />
    </>
  );
}
