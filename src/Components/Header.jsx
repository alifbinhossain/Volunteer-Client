import React from "react";
import logo from "../images/logos/Group 1329.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const activeStyle = { color: "#4aa96c" };
  const { user, logOut } = useAuth();

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
              <button className="btn btn-success mx-lg-3 button-100">
                Register
              </button>
            </Link>
            <button className="btn btn-success my-2 my-lg-0 button-100">
              Admin
            </button>
            {user && (
              <button
                className=" ms-lg-3 btn btn-dark button-100"
                onClick={logOut}
              >
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
