import React from "react";
import { useForm } from "react-hook-form";

export default function FooterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className="section8">
        <div className="footer">
          <h1>Subscribe To Our Newsletter</h1>
          <img src="/image/scissor.png" alt="image" />
          <p>- To Keep Track Of The Latest Designs -</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="footer1">
            <input
              type="text"
              placeholder="Enter G-mail"
              className="!w-5/12 !rounded-full bg-transparent hover:bg-transparent hover:border hover:border-amber-300 !p-2"
              {...register("gmail", {
                required: "Gmail is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid Gmail address",
                },
              })}
            />
            <button className="footerbutton">Subscribe</button>
          </div>
        </form>
        <div className="footer2">
          <div className="footertext">
            <p>14 L.E Goulburn St, New York - (088) 1990 6969</p>
            <p>Copyright © 2022 Shang Affaires</p>
          </div>
          <hr></hr>
          <div className="iconimage">
            <img src="/image/youtube.png" alt="image" className="iconimg" />
            <img src="/image/twitter.png" alt="image" className="iconimg" />
            <img src="/image/facebook.png" alt="image" className="iconimg" />
            <img src="/image/instagram.png" alt="image" className="iconimg" />
          </div>
        </div>
      </section>
    </>
  );
}
