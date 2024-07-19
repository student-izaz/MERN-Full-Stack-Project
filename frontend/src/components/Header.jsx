import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {

  const [selectedTab, setSelectedTab] = useState("Home");

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
            <Link to='/' className={`${selectedTab === "Home" && "link-active"}`} onClick={()=>{setSelectedTab("Home")}}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`${selectedTab === "About" && "link-active"}`} onClick={()=>{setSelectedTab("About")}}>About Us</Link>
          </li>
          <li>
            <Link to="/registration" className={`${selectedTab === "Registration" && "link-active"}`} onClick={()=>{setSelectedTab("Registration")}}>Registration</Link>
          </li>
          <li>
            <Link to="#">Training</Link>
          </li>
          <li>
            <Link to="/course" className={`${selectedTab === "Course" && "link-active"}`} onClick={()=>{setSelectedTab("Course")}}>Course</Link>
          </li>
          <li>
            <Link to="/contact" className={`${selectedTab === "Contact" && "link-active"}`} onClick={()=>{setSelectedTab("Contact")}}>Contact</Link>
          </li>
          <li>
            <Link to="#">Gallery</Link>
          </li>
          <li>
            <Link to="/feedback" className={`${selectedTab === "Feedback" && "link-active"}`} onClick={()=>{setSelectedTab("Feedback")}}>Feedback</Link>
          </li>
        </ul>
      </div>
      <div className="auth-btn">
        <div className="login-btn">
          <Link to="/login">Login</Link>
        </div>
        <div className="signup-btn">
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
