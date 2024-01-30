import React from "react";

export default function Section2Page({ addToCart }) {
  // const handleAddToCart = (itemName, itemPrice, itemImage) => {
  //   addToCart({ name: itemName, price: itemPrice, image: itemImage });
  // };
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <>
      <section className="psec1">
        <div className="pmaindiv1">
          <div className="pmdiv1">
            <div className="pmdiv1s1">
              <img src="/image/1a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Woodclub Brush</h1>
                <p>$32.00</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Woodclub Brush", price:"$32.00", image:"/image/1a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="pmdiv1s2">
              <img src="/image/2a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Military Brush</h1>
                <p>$28.50</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Military Brush", price:"$28.50", image:"/image/2a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="pmdiv1s3">
              <img src="/image/3a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Styler Brush</h1>
                <p>$20.00</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Styler Brush", price:"$20.00",image: "/image/3a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="pmdiv1">
            <div className="pmdiv1s1">
              <img src="/image/4a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Boar Brush</h1>
                <p>$32.50</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Boar Brush",price: "$32.50", image:"/image/4a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="pmdiv1s2">
              <img src="/image/5a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Flat top Brush</h1>
                <p>$33.00</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Flat top Brush", price:"$33.00",image: "/image/5a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="pmdiv1s3">
              <img src="/image/7a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Wood Brush</h1>
                <p>$32.00</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Wood Brush",price: "$32.00", image:"/image/7a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="pmdiv1">
            <div className="pmdiv1s1">
              <img src="/image/8a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Salve Brush</h1>
                <p>$90.00</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Salve Brush", price:"$90.00", image:"/image/8a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="pmdiv1s2">
              <img src="/image/3a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Styler Brush</h1>
                <p>$20.00</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Styler Brush",price: "$20.00",image: "/image/3a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="pmdiv1s3">
              <img src="/image/1a.jpg" alt="img1" className="cartimage" />
              <div className="onesdiv">
                <h1>Woodclub Brush</h1>
                <p>$32.00</p>
                <button
                  className="adcart"
                  onClick={() =>
                    handleAddToCart({itemname:"Woodclub Brush", price:"$32.00",image: "/image/1a.jpg"})
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
