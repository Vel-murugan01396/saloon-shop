import React from "react";
import FooterPage from "../home/footer";
import NavebarPage from "../home/navebar";
import Section1Page from "./section1";
import Section2Page from "./section2";

export default function SingleBarberPage() {
  return (
    <>
      <NavebarPage />
      <Section1Page />
      <Section2Page />
      <FooterPage />
    </>
  );
}
