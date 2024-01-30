import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z
    .string()
    .min(4, "Username should be at least 4 characters long")
    .max(15, "Username should not exceed 20 characters"),
  password: z
    .string()
    .min(6, "Password should be at least 6 characters long")
    .max(20, "Password should not exceed 30 characters")
    .regex(
      /^(?=.*[!@#$%^&*])/,
      "Password should contain at least one special character"
    ),
});

export default function Section1page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  useEffect(() => {
    let timer;
    if (isLoginSuccessful) {
      timer = setTimeout(() => {
        setIsLoginSuccessful(false);
      }, 2000); // Set the timeout to 5 seconds (5000 milliseconds)
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isLoginSuccessful]);
  const onSubmit = async (data) => {
    try {
      schema.parse(data);
      console.log("Form data is valid!");
      // Add your authentication logic here
      console.log("User logged in successfully!");
      setIsLoginSuccessful(true);
      setSubmittedData(data);
    } catch (error) {
      console.error(
        "Form data is invalid or authentication failed:",
        error.message
      );
      setIsLoginSuccessful(false);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <section className="loginsec1">
        <div className="logoinmdiv">
          <h1 className="logh1">Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="USER"
              className="loginput"
              {...register("username")}
            />

            <input
              type={passwordVisible ? "text" : "password"}
              className="loginput"
              placeholder="PASSWORD"
              {...register("password")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="hidebut"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>

            <button className="Logbutton">Login</button>
          </form>

          <div className="lsub3">
            Don't have an account?
            <a href="http://localhost:3000/signup" className="anl">
              Sign Up
            </a>
          </div>
          <a href="#" className="anl">
            Forgot your password?
          </a>
        </div>
      </section>
      {isLoginSuccessful && (
        <div className="popup">
          <h2>Thank You For Successful Login</h2>
          <img src="/image/tick.png" alt="1" className="suceestick" />
        </div>
      )}
    </>
  );
}
