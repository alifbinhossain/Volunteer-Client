import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Event from "../Components/Event";
import Header from "../Components/Header";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/events").then((data) => setEvents(data.data));
  }, []);
  return (
    <div className="home">
      <h1 className="text-center mt-4">I grow by helping people in need.</h1>

      <section className="container my-4">
        <Row xs={1} md={3} lg={4} className="g-4">
          {events.map((event) => (
            <Col key={event._id}>
              <Event event={event}></Event>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Home;
