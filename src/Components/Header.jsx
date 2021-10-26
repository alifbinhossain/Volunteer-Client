import React from "react";
import logo from "../images/logos/Group 1329.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#3f90fc" };

  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/donation">
              Donation
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/events">
              Events
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/blog">
              Blog
            </Nav.Link>

            <button className="btn btn-primary  mx-3">Register</button>
            <button className="btn btn-dark ">Admin</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
