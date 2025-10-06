import { useState } from "react";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const Page = {
  AboutMe: 0,
  Projects: 1,
  ContactMe: 2,
};

function App() {
  const [currentPage, setCurrentPage] = useState(Page.AboutMe);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Michael McAlpin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setCurrentPage(Page.AboutMe)}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => setCurrentPage(Page.Projects)}>
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => setCurrentPage(Page.ContactMe)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {currentPage === Page.AboutMe && <AboutMe />}
      {currentPage === Page.Projects && <Projects />}
      {currentPage === Page.ContactMe && <ContactMe />}
    </>
  );
}

export default App;
