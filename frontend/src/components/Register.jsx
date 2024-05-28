import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="registration-area">
      <div className="Registration_form">
                <div className="form-heading">
                    <h1>Online <span style={{color: "rgb(240, 174, 50)"}}>Training</span></h1>
                    <p style={{color: "#6d6868"}}>Free Registrtion yourself for the upcoming training from Home orgainze by Techpile.</p>
                </div>
                <div className="register-form">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className='input' placeholder="Name of Student"/>
                    <i className="fa-sharp fa-solid fa-phone-volume"></i>
                    <input type="number" className='input' placeholder="Mobile No."/>
                    <i className="fa-regular fa-envelope"></i>
                    <input type="email" className='input' placeholder="Email"/>
                    <i className="fa-solid fa-list"></i>
                    <input type="text" className='input' placeholder="Apply For"/>
                    <i className="fa-solid fa-signal"></i>
                    <select name="" id="">
                        <option value="">Training Mode</option>
                        <option value="">Online</option>
                        <option value="">Ofline</option>
                    </select>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <input type="text" className='input' placeholder="Collage Name"/>
                    <i className="fa-solid fa-layer-group"></i>
                    <input type="text" className='input' placeholder="Select Course"/>
                    <i className="fa-solid fa-calendar-days"></i>
                    <select name="year" id="select-_option">
                        <option value="">Year</option>
                        <option value="">2000</option>
                        <option value="">2001</option>
                        <option value="">2002</option>
                        <option value="">2003</option>
                    </select>
                    <button className="Reg-btn">REGISTER NOW</button>
                </div>
            </div>
            <div className="training-benefits">
                <div className="benefits-head">
                    <h1>Training <span style={{color: "rgb(240, 174, 50)"}}>Benefits</span></h1>
                    <p style={{color: "#6d6868"}}>Some Training Benefits</p>
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
                    <p>9. E-Certificate  and certificate verification service.</p>
                    <p>10. Certificate and project report distribution on campus of Techpile.</p>
                </div>
            </div>
    </div>
  )
}

export default Register
