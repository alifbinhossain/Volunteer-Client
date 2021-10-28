import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import MySingleEvent from "../Components/MySingleEvent";
import useAuth from "../hooks/useAuth";
import image from "../images/others/no-events.png";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const url = `https://agile-tundra-46562.herokuapp.com/volunteer/${user?.email}`;
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      axios.get(url).then((data) => {
        setEvents(data.data);
        setLoading(false);
      });
    }, 1000);
  }, [user]);

  const handleDeleteEvent = (id) => {
    const proceed = window.confirm(
      "Are you sure you don't want to work with this event?"
    );
    if (proceed) {
      const url = `https://agile-tundra-46562.herokuapp.com/volunteer/event/${id}`;
      axios.delete(url).then((data) => {
        const isDeleted = data.data.deletedCount;
        if (isDeleted) {
          alert("Deleted Successfully!");
          const remaining = events.filter((event) => event._id !== id);
          setEvents(remaining);
        }
      });
    }
  };

  return loading ? (
    <div
      className="spinner-box"
      style={{
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9fe6a0",
      }}
    >
      <PuffLoader color="#4aa96c" size={50} />
    </div>
  ) : events.length ? (
    <section className="my-events">
      <h1 className="text-center">My Events</h1>
      <div className="container mt-4">
        <Row xs={1} md={2} lg={3} className="g-3 ">
          {events.map((event) => (
            <Col key={event._id}>
              <MySingleEvent
                singleEvent={event}
                handleDeleteEvent={handleDeleteEvent}
              ></MySingleEvent>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  ) : (
    <div className="no-event">
      <div>
        <h2>No Events Added Yet!!</h2>
        <Link to="/register/Child Support">Join a event</Link>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default MyEvents;
