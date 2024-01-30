import React from "react";
import NavebarPage from "../home/navebar";
import FooterPage from "../home/footer";
import GridPage from "./grid";
import Section1 from "./section1";
export default function BarberGridPage() {
  return (
    <>
      <NavebarPage />
      <Section1 />
      <GridPage />
      <FooterPage />
    </>
  );
}
