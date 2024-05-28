import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header-menu">
      <div className="logo">
        <img src="images/LOGO.png" />
      </div>
      <div className="menu-icon">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="main-links">
        <ul>
          <div className="cancel-icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <li>
            <Link to='/' className="link-active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="#">Training</Link>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="#">Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="logout">
        <Link to="">Logout</Link>
      </div>
    </section>
  );
}

export default Header;
