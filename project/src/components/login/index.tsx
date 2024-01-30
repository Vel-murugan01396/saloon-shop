import React from "react";
import NavebarPage from "../home/navebar";
import Addcartpage from "./addcart";
import Section1page from "./section1";
import Section2page from "./section2";
import { useSession } from "next-auth/react";

export default function Loginpage() {
  const { data: session } = useSession();
  return (
    <>
      <NavebarPage />
      <Section1page />
      <Section2page />
    </>
  );
}
