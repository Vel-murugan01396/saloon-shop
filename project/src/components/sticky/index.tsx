import React from "react";
import NavebarPage from "../home/navebar";
import FooterPage from "../home/footer";
import Section1Page from "./section1";
import Section2Page from "./section2";
export default function StickPage() {
  return (
    <>
      <NavebarPage />
      <Section1Page />
      <Section2Page />
      <FooterPage />
    </>
  );
}
