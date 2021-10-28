import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const [allEvents, setAllEvents] = useState([]);
  const { event } = useParams();
  const { user } = useAuth();
  const date = new Date();
  console.log(date);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://agile-tundra-46562.herokuapp.com/volunteer", {
        name: data.fullName,
        email: data.email,
        date: data.date || null,
        description: data.description || null,
        event: data.event,
      })
      .then((data) => {
        const isAdded = data.data.insertedId;
        if (isAdded) {
          alert("Congrats! Your membership request was sent successfully..");
          reset();
        }
      });
  };

  useEffect(() => {
    axios
      .get("https://agile-tundra-46562.herokuapp.com/events/titles")
      .then((data) => setAllEvents(data.data));
  }, []);

  return (
    <div className="register">
      <div className="register__form">
        <div className="register__form--content">
          <h4 className="text-center mb-3">Register as a Volunteer</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Full Name"
              {...register("fullName", { required: true })}
              defaultValue={user?.displayName}
            />
            {errors.fullName?.type === "required" && (
              <small>Name is required</small>
            )}

            <input
              placeholder="Email"
              {...register("email", { required: true })}
              defaultValue={user?.email}
            />
            {errors.email?.type === "required" && (
              <small>Email is required</small>
            )}

            <textarea
              placeholder="Description"
              cols="30"
              rows="2"
              {...register("description")}
            />
            <input type="date" placeholder="Date" {...register("date")} />

            <select {...register("event", { required: true })}>
              <option value={event}>{event}</option>
              {allEvents.map((event) => (
                <option value={event}>{event}</option>
              ))}
            </select>
            {errors.event?.type === "required" && (
              <small>Event is required</small>
            )}

            <input className="btn-submit mt-3" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
