import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="contact">
      <div className="advertise">
        <div className="image">
          <img src="images/startupindia.png" alt="" />
        </div>
        <div className="image">
          <img src="images/gem.jpeg" alt="" />
        </div>
        <div className="image">
          <img src="images/googlePlay.jpg" alt="" />
        </div>
      </div>
      <div className="address">
        <h2>Content Address</h2>
        <hr />
        <br />
        <i className="fa-solid fa-home"></i>
        <span>
          Plot No-65,Behind petrol pump,
          <br />
          Ring Road, Sector 5,
          <br />
          Vikas Nagar,Lucknow,
          <br />
          Maharastra
        </span>
        <br />
        <br />
        <i className="fa-sharp fa-solid fa-phone-volume"></i>
        <span>+91-5764653476</span>
        <br />
        <i className="fa-sharp fa-solid fa-phone-volume"></i>
        <span>+91-5764653476</span>
        <br />
        <i className="fa-regular fa-envelope"></i> <span>techpile@gmail.com</span>
      </div>
      <div className="contact_info">
        <img src="images/logo1.png" />
        <br />
        <span style={{color: "fff"}}>
          Techpile is an organization working in both Software
          <br />
          Development and Software Training which aims to
          <br />
          make all the specials of it's client successful.
        </span>
        <br />
        <br />
        <br />
        <h3>Stay Connected</h3>
        <hr />
        <br />
        <span className="icon1">
          <i className="fa-brands fa-facebook"></i>
        </span>
        <span className="icon1">
          <i className="fa-brands fa-instagram"></i>
        </span>
        <span className="icon1">
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span className="icon1">
          <i className="fa-brands fa-youtube"></i>
        </span>
        <span className="icon1">
          <i className="fa-brands fa-whatsapp"></i>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
