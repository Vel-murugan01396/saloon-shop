import React from "react";
import NavebarPage from "../home/navebar";
import Section1Page from "./section1";
import Section2Page from "./section2";
import FooterPage from "../home/footer";

export default function SalonsPage() {
  return (
    <>
      <div>
        <NavebarPage />
        <Section1Page />
        <Section2Page />
        <FooterPage />
        {/* <Doublepage /> */}
      </div>
    </>
  );
}
