import React from "react";
import { useForm } from "react-hook-form";
export default function Section3Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className="Csection3">
        <div className="csectionmdiv">
          <div className="csectiondiv1">
            <hr className="line" />

            <div className="cdiv11">
              <h1>CONTACT US</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="cdiv12">
              <div className="cdivs12">
                <img src="/image/location.png" alt="" />
                <h1>ADDRESS</h1>
              </div>
              <p>6th Forrest Ray, Manhattan NYC 10001, USA</p>
            </div>
            <div className="cdiv12">
              <div className="cdivs12">
                <img src="/image/phone.png" alt="" />
                <h1>PHONE</h1>
              </div>
              <p>Mobile 1: (+01)-212-33-6789</p>
              <p>Mobile 2: (+01)-212-66-8888</p>
              <p>Hotline: 1900 888 888</p>
            </div>
            <div className="cdiv12">
              <div className="cdivs12">
                <img src="/image/mail.png" alt="" />
                <h1>EMAIL</h1>
              </div>
              <p>contact@shang.com</p>
              <p>support@shang.com</p>
            </div>
            <div className="iconimage1">
              <img src="/image/youtube.png" alt="image" className="iconimg" />
              <img src="/image/twitter.png" alt="image" className="iconimg" />
              <img src="/image/facebook.png" alt="image" className="iconimg" />
              <img src="/image/instagram.png" alt="image" className="iconimg" />
            </div>
          </div>
          <div className="csectiondiv2">
            <hr className="line" />

            <div className="cdiv11">
              <h1>DROP US A LINE</h1>
              <p>
                If you have any questions, please fell free to get in touch with
                us. We will reply to you as soon as possible. Thank you!
              </p>
            </div>
            <form className="vformmain" onSubmit={handleSubmit(onSubmit)}>
              <div className="cform1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="footerinput1"
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
                  placeholder="Your G-mail"
                  className="footerinput1"
                  {...register("gmail", {
                    required: "Gmail is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid Gmail address",
                    },
                  })}
                />
              </div>
              <div className="cform2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="!w-11/12 bg-transparent hover:bg-transparent hover:border-2 hover:border-amber-300 "
                  {...register("Subject")}
                />
              </div>
              <div className="cform3">
                <input
                  type="text"
                  placeholder="Message"
                  className="!w-11/12 h-14 bg-transparent hover:bg-transparent hover:border-2 hover:border-amber-300  "
                  {...register("Message")}
                />
              </div>
              <button className="cbutton">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
