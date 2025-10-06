import { useState } from "react";

import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { Page, type PageKey } from "./constants/page";

//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>(Page.AboutMe);

  return (
    <>
      <NavigationBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === Page.AboutMe && <AboutMe />}
      {currentPage === Page.Projects && <Projects />}
      {currentPage === Page.ContactMe && <ContactMe />}
    </>
  );
}

export default App;
