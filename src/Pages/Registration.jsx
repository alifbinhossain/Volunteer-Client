import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/volunteer", {
        name: data.fullName,
        email: data.email,
        data: data.date || null,
        description: data.description || null,
      })
      .then((data) => {
        const isAdded = data.data.insertedId;
        if (isAdded) {
          alert("Congrats! Your membership request was sent successfully..");
          reset();
        }
      });
  };

  return (
    <div className="register">
      <div className="register__form">
        <div className="register__form--content">
          <h4 className="text-center mb-3">Register as a Volunteer</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Full Name"
              {...register("fullName", { required: true })}
            />
            {errors.fullName?.type === "required" && (
              <small>Name is required</small>
            )}

            <input
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <small>Email is required</small>
            )}

            <input placeholder="Date" {...register("date")} />

            <textarea
              placeholder="Description"
              cols="30"
              rows="2"
              {...register("description")}
            />

            <input className="btn-submit mt-3" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
