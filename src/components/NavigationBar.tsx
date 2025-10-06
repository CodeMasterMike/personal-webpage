import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import type { Dispatch, SetStateAction } from "react";

import { Page, type PageKey } from "../constants/page";

import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
  currentPage: PageKey;
  setCurrentPage: Dispatch<SetStateAction<PageKey>>;
};

function NavigationBar({ currentPage, setCurrentPage }: Props) {
  return (
    <Navbar expand="lg" className="site-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span className="brand-logo me-2">MM</span>
          <span className="brand-text">Michael McAlpin</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              onClick={() => setCurrentPage(Page.AboutMe)}
              active={currentPage === Page.AboutMe}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurrentPage(Page.Projects)}
              active={currentPage === Page.Projects}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurrentPage(Page.ContactMe)}
              active={currentPage === Page.ContactMe}
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
