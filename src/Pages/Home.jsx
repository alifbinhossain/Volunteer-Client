import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { PuffLoader } from "react-spinners";
import Event from "../Components/Event";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [displayEvents, setDisplayEvents] = useState(events);
  const [searchResult, setSearchResult] = useState(null);
  const [totalFound, setTotalFound] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const inputRef = useRef();
  const history = useHistory();

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(true);
      axios("https://agile-tundra-46562.herokuapp.com/events").then((data) => {
        console.log(data);
        setEvents(data.data);
        setDisplayEvents(data.data);
        setSpinner(false);
      });
    }, 500);
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
    }, 1000);
  };

  const handleGoToRegister = (event) => {
    history.push(`/register/${event}`);
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
          variant="success"
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
          <PuffLoader color="#4aa96c" size={50} />
        </div>
      ) : (
        <section className="container my-4">
          <Row xs={1} md={3} lg={4} className="g-4">
            {displayEvents.map((event) => (
              <Col
                key={event._id}
                onClick={() => handleGoToRegister(event.title)}
              >
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
