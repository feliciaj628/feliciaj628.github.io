import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import logo from "../icon.png";
// import "@fortawesome/fontawesome-free/css/all.css";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar text-gray-800 font-bold font">
        <div className="navbar-container">
          <div className="icon-cont-cont">
            <Link to="/" className="icon-container" onClick={closeMobileMenu}>
              {/* <img src={logo} id="icon" /> */}
              Felicia Jones
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <div className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="flex justify-end mobile-nav">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li> */}
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
