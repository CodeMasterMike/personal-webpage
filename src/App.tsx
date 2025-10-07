import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { Page } from "./constants/page";

function App() {
  return (
    <BrowserRouter basename="personal-webpage">
      <NavigationBar />
      <Routes>
        <Route path={`/${Page.AboutMe}`} element={<AboutMe />} />
        <Route path={`/${Page.Projects}`} element={<Projects />} />
        <Route path={`/${Page.ContactMe}`} element={<ContactMe />} />
        <Route
          path="*"
          element={<Navigate to={`/${Page.AboutMe}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
