import React, { useState } from "react";
export default function GridPage() {
  const [activeButton, setActiveButton] = useState(null);

  const showData = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };
  return (
    <>
      <div className="container">
        <div className="m1">
          <div className="c1">
            <button
              className={`button ${
                activeButton === "button1" ? "active" : ""
              } rounded-md bg-slate-200 hover:bg-amber-400 hover:text-neutral-200 text-slate-700 hover:border-none p-3 border border-slate-500 `}
              onClick={() => showData("button1")}
            >
              ALL
            </button>
          </div>
          <div className="c1">
            <button
              className={`button ${
                activeButton === "button2" ? "active" : ""
              }rounded-md bg-slate-200 hover:bg-amber-400 hover:text-neutral-200 text-slate-700 hover:border-none p-3 border border-slate-500 `}
              onClick={() => showData("button2")}
            >
              HARUTHEME
            </button>
          </div>
          <div className="c1">
            <button
              className={`button ${
                activeButton === "button3" ? "active" : ""
              } rounded-md bg-slate-200 hover:bg-amber-400 hover:text-neutral-200 text-slate-700 hover:border-none p-3 border border-slate-500 `}
              onClick={() => showData("button3")}
            >
              SHANG
            </button>
          </div>
        </div>

        {activeButton === "button1" && (
          <div className="grid grid-cols-3 gap-4 w-full p-28">
            <div className="babu">
              <img src="/image/single1.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. LEXUS BRYAN</h2>
                <p>Handsome</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single2.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. HARUTHEME</h2>
                <p>Hair Cut</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single3.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. LEXUS BRYAN</h2>
                <p>Hair Style</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single4.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. JOHN SHANG</h2>
                <p>Hair Style</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single5.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MRS. MARIAH XPANDER</h2>
                <p>Founder</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single1.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. ALEX FOUNDER</h2>
                <p>Make Color</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single2.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MRS.MINA FLETCHER</h2>
                <p>Hair Cut</p>
              </div>
            </div>
          </div>
        )}

        {activeButton === "button2" && (
          <div className="grid grid-cols-3 gap-4 w-full p-28">
            <div className="babu">
              <img src="/image/single1.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. LEXUS BRYAN</h2>
                <p>Handsome</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single2.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. HARUTHEME</h2>
                <p>Hair Cut</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single3.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. LEXUS BRYAN</h2>
                <p>Hair Style</p>
              </div>
            </div>
          </div>
        )}

        {activeButton === "button3" && (
          <div className="grid grid-cols-3 gap-4 w-full p-28">
            <div className="babu">
              <img src="/image/single1.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. LEXUS BRYAN</h2>
                <p>Handsome</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single2.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. HARUTHEME</h2>
                <p>Hair Cut</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single3.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. LEXUS BRYAN</h2>
                <p>Hair Style</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single4.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MR. JOHN SHANG</h2>
                <p>Hair Style</p>
              </div>
            </div>
            <div className="babu">
              <img src="/image/single5.jpg" alt="s1" className=" w-full h-80" />
              <div className="babu1">
                <h2>BOOK APPOINMENT</h2>
              </div>
              <div className="babu2">
                <h2>MRS. MARIAH XPANDER</h2>
                <p>Founder</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
