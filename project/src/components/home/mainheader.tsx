import React, { useState } from "react";

export default function MainHeader() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="w-10/12 flex bg-slate-200">
        <div className="w-2/12">
          {/* Categories division */}
          <div className="p-4 mt-12 ">
            <ul className="mt-2">
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
              {/* Add more categories as needed */}
            </ul>
          </div>
        </div>
        <div className="w-full">
          {/* Products division */}
          <div className="p-4">
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
      </div>
    </>
  );
}
