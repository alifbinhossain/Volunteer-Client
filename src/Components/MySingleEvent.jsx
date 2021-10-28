import React from "react";
import { Card } from "react-bootstrap";

const MySingleEvent = ({ singleEvent, handleDeleteEvent }) => {
  const { description, date, event, img, name, _id } = singleEvent;

  return (
    <Card className="flex-row my-single-event p-2">
      <Card.Img variant="top" src={img} />
      <Card.Body className=" py-0 pt-2  d-flex flex-column justify-content-between">
        <Card.Title>{event?.slice(0, 12)}..</Card.Title>
        <Card.Text className="mb-auto">
          <small>
            Volunteer Name : <span>{name}</span>{" "}
          </small>
          <small>
            Date : <span>{date}</span>{" "}
          </small>
        </Card.Text>
        <button className="btn-delete" onClick={() => handleDeleteEvent(_id)}>
          Delete
        </button>
      </Card.Body>
    </Card>
  );
};

export default MySingleEvent;
