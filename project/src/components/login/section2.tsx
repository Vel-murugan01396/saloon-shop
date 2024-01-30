import React, { useState } from "react";
import { userValidator, passwordValidator } from "./regexValidater";
import { signIn, signOut } from "next-auth/react";

export default function Section2page() {
  const [input, setInput] = React.useState({ user: "", password: "" });
  const [errorMessage, seterrorMessage] = React.useState("");
  const [succesMessage, setsuccesMessage] = React.useState("");

  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  }
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setsuccesMessage("");
    if (!userValidator(input.user))
      return seterrorMessage("please enter valid user id");

    if (!passwordValidator(input.password))
      return seterrorMessage(
        "password should have minimum 8 character with the combination of uppercase,lowercase,number and specialcharaters"
      );
    setsuccesMessage("Succesfully Validate");
  };
  return (
    <>
      <section className="loginsec1">
        <div className="logoinmdiv">
          <h1 className="logh1">Sign In</h1>
          <form onSubmit={formSubmit}>
            {errorMessage.length > 0 && (
              <div style={{ marginBottom: "3px", color: "red" }}>
                {errorMessage}
              </div>
            )}
            {succesMessage.length > 0 && (
              <div style={{ marginBottom: "3px", color: "green" }}>
                {succesMessage}
              </div>
            )}
            <input
              type="text"
              name="user"
              placeholder="USER"
              className="loginput22"
              onChange={handleChange}
            />

            <input
              className="loginput22"
              name="password"
              placeholder="PASSWORD"
              onChange={handleChange}
            />
            {/* //onClick={handleGoogleSignin} */}
            <button className="Logbutton" onClick={handleGoogleSignin}>
              Login
            </button>
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
    </>
  );
}
