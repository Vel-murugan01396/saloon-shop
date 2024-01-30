import React from "react";
import { useForm } from "react-hook-form";
export default function Section10Page() {
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
      <section className="section10">
        <form
          className="w-8/12 bg-white border-8  border-amber-500  pt-8 pb-6 ml-48"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-2 w-9/12 ">
            <div className="section10sub1">
              <div className="ml-14 p-3">
                <label className="label">
                  Salon*
                  <select className="select12" {...register("Options1")}>
                    <option value="Select Salon">Select Salon</option>
                    <option value="Haru Shine">Haru Shine</option>
                    <option value="Shang Shine">Shang Shine</option>
                    <option value="Barber Shine">Barber Shine</option>
                  </select>
                </label>
                <label className="label">
                  Firstname*
                  <input
                    type="text"
                    className="ininin"
                    {...register("First Name", {
                      required: "First Name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "First Name should only contain letters",
                      },
                    })}
                  />
                </label>
                <label className="label">
                  Gmail*
                  <input
                    type="text"
                    className="ininin"
                    {...register("gmail", {
                      required: "Gmail is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid Gmail address",
                      },
                    })}
                  />
                </label>
                <label className="label">
                  Start*
                  <input
                    type="date"
                    className="ininin"
                    {...register("Start", {
                      valueAsDate: true,
                    })}
                  />
                </label>
                <label className="label">
                  Salon*
                  <input
                    type="text"
                    className="ininin"
                    {...register("Salon", {
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Salon should only contain letters",
                      },
                    })}
                  />
                </label>
              </div>
            </div>
            <div className="section10sub2">
              <div className="ml-14 p-4">
                <label className="label">
                  Barbar*
                  <select className="select12" {...register("Options2")}>
                    <option value="Select Barber">Select Barber</option>
                    <option value="Mrs.Mary Lous">Mrs.Mary Lous</option>
                    <option value="Mrs.Haru Theme"> Mrs.Haru Theme</option>
                    <option value="Mrs.Poule">Mrs.Poule</option>
                    <option value="Mrs.Drafter">Mrs.Drafter</option>
                    <option value="Mrs.Doctor">Mrs.Doctor</option>
                    <option value="Mrs.brober">Mrs.brober</option>
                  </select>
                </label>
                <label className="label">
                  Lastname*
                  <input
                    type="text"
                    className="ininin"
                    {...register("Second Name", {
                      required: "Second Name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Second Name should only contain letters",
                      },
                    })}
                  />
                </label>
                <label className="label">
                  Phone*
                  <input
                    type="text"
                    className="ininin"
                    {...register("mobilenumber", {
                      required: "Mobile Number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Mobile Number should be a 10-digit number",
                      },
                    })}
                  />
                </label>
                <label className="label">
                  End*
                  <input
                    type="date"
                    className="ininin"
                    {...register("End", {
                      valueAsDate: true,
                    })}
                  />
                </label>
                <label className="label">
                  Salon*
                  <input
                    type="text"
                    className="ininin"
                    {...register("Salon", {
                      required: "Salon is required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Salon should only contain letters",
                      },
                    })}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="w-10/12 ml-32">
            {/* <label className="ml-32 " id="label">
              Message* */}
            <textarea
              // className="!w-10/12 h-14"
              id="ininin"
              placeholder="Message*"
              {...register("Message")}
            ></textarea>
            {/* </label> */}
          </div>
          <br />
          <button className="appobutton">Book Appointment</button>
        </form>
      </section>
    </>
  );
}
