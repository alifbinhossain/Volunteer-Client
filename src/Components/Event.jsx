import React from "react";
import { Card } from "react-bootstrap";

const Event = ({ event }) => {
  const { title, img } = event;
  const bg = [
    "orange",
    "orange2",
    "blue",
    "blue2",
    "green",
    "green2",
    "brown",
    "brown2",
  ];
  const randomBg = bg[Math.floor(Math.random() * 8)];

  return (
    <Card className="event">
      <Card.Img variant="top" src={img} />
      <Card.Body className={`${randomBg}  event__body`}>
        <Card.Title className="event__body--title">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Event;
