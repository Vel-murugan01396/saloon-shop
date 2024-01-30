import React from "react";
export default function Cartpage() {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => addToCart("Item 1")}>Add Item 1</button>
        <button onClick={() => addToCart("Item 2")}>Add Item 2</button>
        {/* Add more buttons or input fields to add other items */}
      </div>
    </>
  );
}
