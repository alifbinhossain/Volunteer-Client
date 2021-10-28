import React from "react";
import logo from "../images/logos/Group 1329.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const Header = () => {
  const activeStyle = { color: "#4aa96c" };
  const { user, logOut } = useFirebase();

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
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/myevents">
              My Events
            </Nav.Link>

            <Link to="/register/Child Support">
              <button className="btn btn-success mx-lg-3">Register</button>
            </Link>
            <button className="btn btn-success ">Admin</button>
            {user && (
              <button className=" ms-3 btn btn-dark" onClick={logOut}>
                Sign Out
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
