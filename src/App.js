import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar2 from "./layout/Navbar/Navbar2";
import Home from "./pages/Home";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar2 />
        <Routes>
          <Route path="/portfolio" exact element={<Home />} />
          {/* <Route path="/contact" exact element={<Contact />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/about" exact element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
