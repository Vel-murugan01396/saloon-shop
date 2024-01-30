import React, { useState } from "react";
import Cpage from "../barberslide/cpage";

export default function NavebarPage({ cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
  };
  const handleCartClick = () => {
    if (cartItems.length > 0) {
      const selectedProduct = cartItems[cartItems.length - 1];
      console.log("Selected Product:", selectedProduct);
      // You can show the selected product in a modal or perform any other action
    }
  };

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-amber-400">
        <div className="flex items-center container mx-auto bg-transparent px-5 py-2">
          <a href="#">
            <img src="/image/logo-white.png" alt="img" className="h-8 " />
          </a>
          <ul className="ml-36 flex">
            <li className="hover:bg-red-200 hover:text-orange-400 mx-1 px-6 py-2 text-white relative group">
              <a href="http://localhost:3000/header">HOME</a>
              <ul className="absolute bg-slate-200 px-6 top-10 left-0 hidden group-hover:block w-56">
                <li className="my-1 hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="">HOME PAGE 1</a>
                </li>
                <li className="my-1 hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="">HOME PAGE 2</a>
                </li>
                <li className="my-1 hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="">HOME PAGE 3</a>
                </li>
              </ul>
            </li>
            <li className="hover:bg-red-200 hover:text-orange-400 mx-1 px-6 py-2 text-white relative group">
              <a href="http://localhost:3000/header">MENU</a>
              <ul className="absolute bg-slate-200 px-6 top-10 left-0 hidden group-hover:block w-[800px]">
                <li>
                  <a
                    href="#"
                    className={`hover:text-amber-400 hover:bg-white text-slate-500 pl-6 pr-2 ${
                      selectedCategory === "product1" && "font-bold"
                    }`}
                    onMouseOver={() => handleCategoryHover("product1")}
                  >
                    Category 1
                  </a>
                  <div className="w-full">
                    {/* Products division */}
                    <div className="p-5">
                      {/* <h2 className="font-bold">Products</h2> */}
                      {selectedCategory && (
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          {/* Display the selected categories for the hovered product */}
                          {selectedCategory === "product1" && (
                            <>
                              <div>
                                <h1 className="font-serif text-lg italic font-medium">
                                  Sale product
                                </h1>
                                <div className=" grid grid-rows-2  gap-4 p-4">
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/6a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          GET POLISH TOP COAT
                                        </h1>
                                      </a>

                                      <p className="text-orange-400  text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/5a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          STYLER BRUSH
                                        </h1>
                                      </a>

                                      <p className="text-orange-400  text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h1 className="font-serif text-lg italic font-medium">
                                  {" "}
                                  Random product
                                </h1>
                                <div className=" grid grid-rows-2  gap-4 p-4">
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/4a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          FLAT TOP COMB
                                        </h1>
                                      </a>

                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/3a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          PREMIUM STRAIGHT RAZOR
                                        </h1>
                                      </a>

                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h1 className="font-serif text-lg italic font-medium">
                                  Last product
                                </h1>
                                <div className=" grid grid-rows-2  gap-4 p-4">
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/1a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          WOOD CLUB BRUSH
                                        </h1>
                                      </a>
                                      <img
                                        src="/image/stars.png"
                                        alt="s"
                                        className="starsimage"
                                      />
                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/2a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          MILITARY BRUSH
                                        </h1>
                                      </a>
                                      <img
                                        src="/image/stars.png"
                                        alt="s"
                                        className="starsimage"
                                      />
                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {selectedCategory === "product2" && (
                            <>
                              <div>
                                <h1 className="font-serif text-lg italic font-medium">
                                  Featured Product
                                </h1>
                                <div className=" grid grid-rows-2  gap-4 p-4">
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/7a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          GET POLISH TOP COAT
                                        </h1>
                                      </a>

                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/8a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          STYLER BRUSH
                                        </h1>
                                      </a>

                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h1 className="font-serif text-lg italic font-medium">
                                  {" "}
                                  Best Product
                                </h1>
                                <div className=" grid grid-rows-2  gap-4 p-4">
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/5a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          FLAT TOP COMB
                                        </h1>
                                      </a>

                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/1a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          PREMIUM STRAIGHT RAZOR
                                        </h1>
                                      </a>

                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h1 className="font-serif text-lg italic font-medium">
                                  New Product
                                </h1>
                                <div className=" grid grid-rows-2  gap-4 p-4">
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/7a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          WOOD CLUB BRUSH
                                        </h1>
                                      </a>
                                      <img
                                        src="/image/stars.png"
                                        alt="s"
                                        className="starsimage"
                                      />
                                      <p
                                        className="text-orange-400 text-sm "
                                        id="pppp"
                                      >
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-gray-100 flex h-40 w-11/12"
                                    id="hovered"
                                  >
                                    <div className="w-full p-4 ">
                                      <img
                                        src="/image/2a.jpg"
                                        alt="1a"
                                        className="w-9/12 border-current border"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <a href="#">
                                        <h1 className="hover:text-amber-400 text-sm font-medium p-2">
                                          MILITARY BRUSH
                                        </h1>
                                      </a>
                                      <img
                                        src="/image/stars.png"
                                        alt="s"
                                        className="starsimage"
                                      />
                                      <p className="text-orange-400 text-sm">
                                        $30.00 -$36.00
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {selectedCategory === "product3" && (
                            <>
                              <div>
                                <img
                                  src="/image/b3.jpg"
                                  alt="11"
                                  className="w-full h-64"
                                  id="hover-image"
                                />
                              </div>
                              <div>
                                <img
                                  src="/image/b1.jpg"
                                  alt="11"
                                  className="w-full h-64"
                                  id="hover-image"
                                />
                              </div>
                              <div>
                                <img
                                  src="/image/b3.jpg"
                                  alt="11"
                                  className="w-full h-64"
                                  id="hover-image"
                                />
                              </div>
                            </>
                          )}
                          {/* Add more products and categories as needed */}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className={`hover:text-amber-400 hover:bg-white text-slate-500 pl-6 pr-2 ${
                      selectedCategory === "product2" && "font-bold"
                    }`}
                    onMouseOver={() => handleCategoryHover("product2")}
                  >
                    Category 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`hover:text-amber-400 hover:bg-white text-slate-500 pl-6 pr-2 ${
                      selectedCategory === "product3" && "font-bold"
                    }`}
                    onMouseOver={() => handleCategoryHover("product3")}
                  >
                    Category 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="hover:bg-red-200 mx-1 px-6 py-2 hover:text-orange-400 text-white">
              <a href="">SHOP</a>
            </li>
            <li className="hover:bg-red-200 mx-1 px-6 py-2 hover:text-orange-400 text-white relative group">
              <a href="">SHANG</a>
              <ul className="absolute bg-slate-200 px-6  top-10 left-0 hidden group-hover:block w-56">
                <li className="my-1 hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/salons">SALONS</a>
                </li>
                <li className="my-1  hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/barbergrid">BARBER GRID</a>
                </li>
                <li className="my-1  hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/barberslide">
                    BARBER SLIDSHOW
                  </a>
                </li>
                <li className="my-1  hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/singlebarber">SINGLE BABER</a>
                </li>
                <li className="my-1  hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/product">PRODUCTS</a>
                </li>
              </ul>
            </li>
            <li className="hover:bg-red-200 mx-1 px-6 py-2 hover:text-orange-400 text-white relative group">
              <a href="">BLOG</a>
              <ul className="absolute bg-slate-200 px-6  top-10 left-0 hidden group-hover:block w-56">
                <li className="my-1  hover:text-orange-400 text-slate-400 px-6 py-2">
                  <a href="">POST FORMATE</a>
                </li>
                <li className="my-1  hover:text-orange-400  text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/stick">STICKY</a>
                </li>
              </ul>
            </li>
            <li className="hover:bg-red-200 mx-1 px-6 py-2 hover:text-orange-400 text-white relative group">
              <a href="">PAGES</a>
              <ul className="absolute bg-slate-200 px-6 top-10 left-0 hidden group-hover:block w-56">
                <li className="my-1   hover:text-orange-400   text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/about">ABOUT US</a>
                </li>
                <li className="my-1   hover:text-orange-400 text-slate-400 px-6 py-2">
                  <a href="http://localhost:3000/contactus">CONTACT US</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="flex gap-6 ml-24 ">
            <a href="#">
              <img src="/image/heart.png" alt="img" className="h-5" />
            </a>
            <a href="#">
              <Cpage />
              {/* <img src="/image/search.png" alt="img" className="h-5" /> */}
            </a>
            <a href="http://localhost:3000/login">
              <img src="/image/headcontact.png" alt="img" className="h-5" />
            </a>
            {/* <div>
              <a href="http://localhost:3000/cart">
                <CartOption />
                <img src="/image/cart.png" alt="img" className="h-5" />
                {cartItemCount > 0 && (
                  <span className="badge">{cartItemCount}</span>
                )}
              </a>
            </div> */}
            <div className="cart-image" onClick={handleCartClick}>
              <img src="/image/cart.png" alt="Cart" className="h-5" />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
