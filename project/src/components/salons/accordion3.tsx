import React, { useState } from "react";

export default function Accordion3() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2 className="h2s">Baber Shine</h2>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <img src="/image/pro1.jpg" alt="" />
          <div className="tt1">
            <h2>General Info</h2>
            <p>
              Traditional methods of smile enhancement, like veneers, often have
              required painful hours in the dentist’s chair. Pellentesque
              fermentum massa vel enim feugiat gravida. Phasellus velit risus,
              euismod a lacus et, mattis condimentum augue.
            </p>
          </div>
          <div className="tt2">
            <h2>Services</h2>
            <div className="costp">
              <p>
                +Hair Cut - <span>$25</span>
              </p>
              <p>
                +Make Color - <span>$100</span>
              </p>
            </div>
            <div className="costp">
              <p>
                +Make Style - <span>$45</span>
              </p>
              <p>
                +New Trend - <span>$75</span>
              </p>
            </div>
            <div className="costp">
              <p>
                +Add Hair - <span>$80</span>
              </p>
              <p>
                +Full Style - <span>$140</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
