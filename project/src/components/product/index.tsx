import React, { useState } from "react";
import NavebarPage from "./navebar";
import Section1Page from "./section1";
import Section2Page from "./section2";

export default function Productpage() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <>
      <div>
        <NavebarPage cartItems={cartItems} />
        <Section1Page />
        <Section2Page addToCart={addToCart} />
      </div>
    </>
  );
}
