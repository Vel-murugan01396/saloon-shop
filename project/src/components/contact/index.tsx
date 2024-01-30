import React from "react";
import { useForm } from "react-hook-form";

export default function ContactPageComponents() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleCheckboxChange = (e) => {
    // Set the value of the clicked checkbox to true
    setValue(e.name, e.checked);

    // Reset the values of other checkboxes to false
    const checkboxNames = ["checkbox1", "checkbox2", "checkbox3", "checkbox4"];
    checkboxNames.forEach((name) => {
      if (name !== e.name) {
        setValue(name, false);
      }
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="text-3xl text-blue-800 p-4 m-4 border-2 border-solid border-black">
        contact helo world
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input
              type="checkbox"
              name="checkbox1"
              {...register("checkboxbutton", {
                required: "Please select an option",
              })}
              onChange={handleCheckboxChange}
            />
            Option 1
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              {...register("checkboxbutton", {
                required: "Please select an option",
              })}
              onChange={handleCheckboxChange}
            />
            Option 2
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="checkbox3"
              {...register("checkboxbutton", {
                required: "Please select an option",
              })}
              onChange={handleCheckboxChange}
            />
            Option 3
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="checkbox4"
              {...register("checkboxbutton", {
                required: "Please select an option",
              })}
              onChange={handleCheckboxChange}
            />
            Option 4
          </label>
        </div>
        {errors.checkbox && <span>This field is required</span>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
