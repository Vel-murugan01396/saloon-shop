import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Accordion1 from "./accordion1";
import Accordion2 from "./accordion2";
import Accordion3 from "./accordion3";

export default function Section2Page() {
  // const { register, handleSubmit } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="ssec2">
        <div className="ssecdiv1">
          <div className="accordion">
            <Accordion1 />
            <hr />
            <Accordion2 />
            <hr />
            <Accordion3 />
            <hr />
          </div>
        </div>
        <div className="ssecdiv2">
          <div className="ssubdiv1">
            <div className="ssd1">
              <img src="/image/aphone.png" alt="aphone" />
            </div>
            <div className="ssd2">
              <p>Emergency Contact</p>
              <h1>089 – 123 1988</h1>
            </div>
          </div>
          <div className="ssubdiv2">
            <h1>OPENING HOURS</h1>
            <p>Monday – Friday: 8.00 – 17.00</p>
            <hr />
            <p>Saturday: 9.00 – 17.00</p>
            <hr />
            <p>Sunday: 9.00 – 17.00</p>
            <hr />
          </div>
          {/* <div className="ff1"> */}
          <form className="ff1" onSubmit={handleSubmit(onSubmit)}>
            <select className="select1" {...register("Options1")}>
              <option value="Select Salon">Select Salon</option>
              <option value="Haru Shine">Haru Shine</option>
              <option value="Shang Shine">Shang Shine</option>
              <option value="Barber Shine">Barber Shine</option>
            </select>
            {/* <br /> */}
            <select className="select1" {...register("Options2")}>
              <option value="Select Salon">Select Barber</option>
              <option value="Mrs.Mary Lous">Mrs.Mary Lous</option>
              <option value="Mrs.Haru Theme"> Mrs.Haru Theme</option>
              <option value="Mrs.Poule">Mrs.Poule</option>
              <option value="Mrs.Drafter">Mrs.Drafter</option>
              <option value="Mrs.Doctor">Mrs.Doctor</option>
              <option value="Mrs.brober">Mrs.brober</option>
            </select>
            {/* <br /> */}
            <div className="f1">
              <input
                type="text"
                placeholder="First Name"
                className="t1"
                {...register("First Name", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "First Name should only contain letters",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Second Name"
                className="t1"
                {...register("Second Name", {
                  required: "Second Name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Second Name should only contain letters",
                  },
                })}
              />
            </div>
            {/* <br /> */}
            <div className="f1">
              <input
                type="text"
                placeholder="G-mail*"
                className="t1"
                {...register("gmail", {
                  required: "Gmail is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid Gmail address",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Phone*"
                className="t1"
                {...register("mobilenumber", {
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Mobile Number should be a 10-digit number",
                  },
                })}
              />
            </div>
            {/* <br /> */}
            <div className="f1">
              <input
                type="date"
                placeholder="Start*"
                className="date1"
                {...register("Date1", {
                  valueAsDate: true,
                })}
              />
              <input
                type="date"
                placeholder="End*"
                className="date1"
                {...register("Date2", {
                  valueAsDate: true,
                })}
              />
            </div>
            {/* <br /> */}
            <textarea
              placeholder="Message*"
              className="textbox"
              {...register("Message")}
            ></textarea>
            {/* <br /> */}
            <button className="bookbutton">Book Appointment</button>
          </form>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
