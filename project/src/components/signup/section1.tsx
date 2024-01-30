import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(2, "First name should be at least 2 characters long")
    .max(10, "First name should not exceed 10 characters"),
  lastName: z
    .string()
    .min(2, "Last name should be at least 2 characters long")
    .max(10, "Last name should not exceed 10 characters"),
  email: z.string().email("Invalid email address"),
  createPassword: z
    .string()
    .min(6, "Password should be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Password should be at least 6 characters long"),
  // .refine((value, { createPassword }) => value === createPassword, {
  //   message: "Passwords do not match",
  // }),
});

export default function Section1page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateField = async (fieldName, fieldValue) => {
    try {
      const fieldSchema = schema.pick({ [fieldName]: true });
      await fieldSchema.parseAsync({ [fieldName]: fieldValue });
    } catch (error) {
      return error.message;
    }
  };
  return (
    <>
      <section className="sinsec">
        <div className="sinsecd1"></div>
        <div className="sinsecd2">
          <div className="sindiv1">
            <h1 className="sh1"> SIGN UP</h1>
            <form className="sinform" onSubmit={handleSubmit(onSubmit)}>
              <div className="sin12">
                <input
                  type="text"
                  placeholder="FirstName"
                  className="sininput"
                  {...register("firstName", {
                    required: "First name is required",
                    validate: (value) => validateField("firstName", value),
                  })}
                />
                <input
                  type="text"
                  placeholder="SecondName"
                  className="sininput"
                  {...register("secondName", {
                    required: "Second name is required",
                    validate: (value) => validateField("secondName", value),
                  })}
                />
              </div>
              <input
                type="text"
                placeholder="G-Mail"
                className="sininput1"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <div className="sin12">
                <input
                  type="text"
                  placeholder="Creat Password"
                  className="sininput"
                  {...register("createPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 characters long",
                    },
                  })}
                />
                <input
                  type="text"
                  placeholder="Conform Password"
                  className="sininput"
                  {...register("confirmPassword", {
                    required: "Password confirmation is required",
                    validate: (value) =>
                      validateField("confirmPassword", value),
                  })}
                />
              </div>
              <button className="signbutton" type="submit">
                <Link href="/cart">Sign Up</Link>
              </button>
              <div className="sigiconimg">
                <a href="https://www.google.com/">
                  <img src="/image/sgoogle.png" alt="1" className="signicon" />
                </a>
                <a href="https://www.linkedin.com/feed/">
                  <img src="/image/slink.png" alt="1" className="signicon" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src="/image/sface.png" alt="1" className="signicon" />
                </a>
                <a href="https://www.instagram.com/reel/Ct_x-bRIsUG/?img_index=1">
                  <img src="/image/sins.png" alt="1" className="signicon" />
                </a>
              </div>
              <div>
                <h1 className="sinhead">NOTE :</h1>
                <p className="sinpara">
                  When you choose a user signup page, it will show up inside the
                  organization signup page in its own section under the
                  organization details. Also note that when a user signup page
                  is attached, the user signup confirmation page is used.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
