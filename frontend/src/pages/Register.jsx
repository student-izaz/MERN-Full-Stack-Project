import React, { useState } from "react";
import "./Register.css";
import { toast } from "react-toastify";

function Register() {
  const [regUser, setRegUser] = useState({
    name: "",
    email: "",
    phone_no: "",
    apply_for: "",
    training_mode: "",
    collage: "",
    course: "",
    year: "",
  });

  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegUser({
        ...regUser,
        [name]: value,
    })
  };

  const submitRegData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/form/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regUser),
      });
  
  
      if (response.ok) {
        const res_data = await response.json()
        console.log(res_data);
        setRegUser({
            name: "",
            email: "",
            phone_no: "",
            apply_for: "",
            training_mode: "",
            collage: "",
            course: "",
            year: "",
          })

        toast.success("Registration Successfully!")
      }
      } catch (error) {
        console.log('Registration', error)
      }
  };

  return (
    <div className="registration-area">
      <div className="Registration_form">
        <div className="form-heading">
          <h1>
            Online <span style={{ color: "rgb(240, 174, 50)" }}>Training</span>
          </h1>
          <p style={{ color: "#6d6868" }}>
            Free Registrtion yourself for the upcoming training from Home
            orgainze by Techpile.
          </p>
        </div>
        <form className="register-form" onSubmit={submitRegData}>
          <div>
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name of Student"
              onChange={handleInputData}
              value={regUser.name}
            />
            <i className="fa-sharp fa-solid fa-phone-volume"></i>
            <input
              type="number"
              className="input"
              placeholder="Mobile No."
              name="phone_no"
              onChange={handleInputData}
              value={regUser.phone_no}
            />
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              onChange={handleInputData}
              value={regUser.email}
            />
            <i className="fa-solid fa-list"></i>
            <input
              type="text"
              className="input"
              placeholder="Apply For"
              name="apply_for"
              onChange={handleInputData}
              value={regUser.apply_for}
            />
            <i className="fa-solid fa-signal"></i>
            <select
              name="training_mode"
              id=""
              onChange={handleInputData}
              value={regUser.training_mode}
            >
              <option value="Trainin Mode">Training Mode</option>
              <option value="Online">Online</option>
              <option value="Ofline">Ofline</option>
            </select>
            <i className="fa-solid fa-graduation-cap"></i>
            <input
              type="text"
              className="input"
              name="collage"
              placeholder="Collage Name"
              onChange={handleInputData}
              value={regUser.collage}
            />
            <i className="fa-solid fa-layer-group"></i>
            <input
              type="text"
              className="input"
              name="course"
              placeholder="Select Course"
              onChange={handleInputData}
              value={regUser.course}
            />
            <i className="fa-solid fa-calendar-days"></i>
            <select
              name="year"
              id="select-_option"
              onChange={handleInputData}
              value={regUser.year}
            >
              <option value="Year">Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <input type="submit" className="Reg-btn" value="REGISTER NOW" />
          </div>
        </form>
      </div>
      <div className="training-benefits">
        <div className="benefits-head">
          <h1>
            Training{" "}
            <span style={{ color: "rgb(240, 174, 50)" }}>Benefits</span>
          </h1>
          <p style={{ color: "#6d6868" }}>Some Training Benefits</p>
        </div>
        <div className="list-benefits">
          <p>1. 3-4 hourse face to face classNamees by video conferencing.</p>
          <p>2. Daily className wise task assignment to the students.</p>
          <p>3. Notes of every topices will be uploaded online.</p>
          <p>4. Online test will be orgainzed on every sunday.</p>
          <p>5. Technology selection according to student.</p>
          <p>6. Every day error solving on our portal.</p>
          <p>7. Complete guidance about every module of project.</p>
          <p>8. Training completion certificate with complete project.</p>
          <p>9. E-Certificate and certificate verification service.</p>
          <p>
            10. Certificate and project report distribution on campus of
            Techpile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
