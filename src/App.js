
import React from "react";
import Contact from "./Contact";
import PortFolio from "./PortFolio";
import About from "./About";
import Info from "./Info";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>,
        <Routes>
          <Route path="#about"     element={<About />} />
          <Route path="#portfolio" element={<PortFolio />} />
          <Route path="#contact"   element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Info/>,
      <About/>,
      <PortFolio/>,
      <Contact/>
    </>
  )
}

export default App;