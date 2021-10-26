import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { PuffLoader } from "react-spinners";
import Event from "../Components/Event";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [displayEvents, setDisplayEvents] = useState(events);
  const [searchResult, setSearchResult] = useState(null);
  const [totalFound, setTotalFound] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      axios("http://localhost:5000/events").then((data) => {
        setEvents(data.data);
        setDisplayEvents(data.data);
      });

      setSpinner(false);
    }, 1000);
  }, []);

  const handleSearchFilter = () => {
    setSpinner(true);
    setTimeout(() => {
      const searchText = inputRef.current.value.toLowerCase();
      const searchedEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchText)
      );
      setDisplayEvents(searchedEvents);
      setSearchResult(searchText);
      setTotalFound(searchedEvents.length);
      setSpinner(false);
      inputRef.current.value = "";
    }, 1500);
  };

  return (
    <div className="home">
      <h1 className="text-center my-4">I grow by helping people in need.</h1>
      <InputGroup className="mb-3 flexible-width mx-auto">
        <FormControl
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearchFilter();
            }
          }}
          placeholder="search"
          ref={inputRef}
        />
        <Button
          onClick={handleSearchFilter}
          variant="primary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>

      {searchResult !== null && (
        <small className="result">
          Keyword: <span>{searchResult}</span>
        </small>
      )}
      {totalFound !== null && (
        <small className="result">
          Total Found : <span>{totalFound}</span>
        </small>
      )}

      {spinner ? (
        <div className="spinner-box">
          <PuffLoader color="#3f90fc" size={50} />
        </div>
      ) : (
        <section className="container my-4">
          <Row xs={1} md={3} lg={4} className="g-4">
            {displayEvents.map((event) => (
              <Col key={event._id}>
                <Event event={event}></Event>
              </Col>
            ))}
          </Row>
        </section>
      )}
    </div>
  );
};

export default Home;
