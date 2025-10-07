import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

import { Page } from "../constants/page";

import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  const location = useLocation();
  const currentPath = location.pathname.substring(1) || Page.AboutMe;

  return (
    <Navbar expand="lg" className="site-navbar" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to={`/${Page.AboutMe}`}
          className="d-flex align-items-center"
        >
          <span className="brand-logo me-2">MM</span>
          <span className="brand-text">Michael McAlpin</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to={`/${Page.AboutMe}`}
              active={currentPath === Page.AboutMe}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${Page.Projects}`}
              active={currentPath === Page.Projects}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${Page.ContactMe}`}
              active={currentPath === Page.ContactMe}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
