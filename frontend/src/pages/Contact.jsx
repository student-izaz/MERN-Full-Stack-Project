import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    phone_no: "",
    email: "",
    message: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitData = async (e) => {
    try {
      e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/form/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });


    if (response.ok) {
      setContact({ name: "", phone_no: "", email: "", message: "" });
      toast.success("Message Send Successfully!")
    }
    } catch (error) {
      console.log('contact', error)
    }
    
  };

  return (
    <>
      <div className="contact-area">
        <div className="contact-head">
          <h1>
            <span style={{ color: "rgb(241, 174, 50)" }}>Contact</span> With Us
          </h1>
          <p>
            You may contact us by contact number or fill this form any time need
            to proffesional <br />
            support or have any question.
          </p>
        </div>
        <div className="contact-form">
          <form className="mess-form" onSubmit={onSubmitData}>
            <h2>Send Your Message</h2>
            <div className="full_name">
              <div className="first_name">
                <p>Your Name :</p>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={contact.name}
                  required
                  onChange={handleInputs}
                />
              </div>
              <div className="cont_no">
                <p>Your Conatct :</p>
                <input
                  type="text"
                  placeholder="Enter Your Contact"
                  name="phone_no"
                  value={contact.phone_no}
                  required
                  onChange={handleInputs}
                />
              </div>
            </div>
            <p>Your Email :</p>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={contact.email}
              required
              onChange={handleInputs}
            />
            <p>Enter Message :</p>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="7"
              placeholder="Enter Your Message"
              requiredvalue={contact.message}
              required
              onChange={handleInputs}
              style={{ width: "100%", padding: "5px", fontSize: "16px" }}
            ></textarea>
            <br />
            <input type="submit" className="send-btn" value="Send" />
          </form>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="info-detail">
              <div className="contact-address">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                <h4>Office Address</h4>
                <p>
                  Plot No-44, Behind H.P Petrol Pump. Tedhi Pulia Road Rd Sector
                  5, Vikas Nagar Lucknow Uttar Pradesh 220622
                </p>
              </div>
              <div className="contact-address">
                <i className="fa-sharp fa-solid fa-phone-volume"></i>
                <h4>Call Us</h4>
                <p>91+ 8786738279</p>
                <p>91+ 7836738279</p>
              </div>
              <div className="contact-address">
                <i className="fa-regular fa-envelope"></i>
                <h4>Mail Us</h4>
                <p>techpile@gmail.com</p>
                <p>hr@techpile.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Map Section --> */}
      <div className="map-section">
        <div className="map-head">
          <h2>
            Find Us On{" "}
            <span style={{ color: "rgb(241, 174, 50)" }}>Google Map</span>
          </h2>
          <p>view us on google map easily</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56940.74400437873!2d80.91584204848971!3d26.87820583701239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stechpile%20technology!5e0!3m2!1sen!2sin!4v1694693440658!5m2!1sen!2sin"
            width="1500"
            height="350"
            style={{ border: "0", marginBottom: "25px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
