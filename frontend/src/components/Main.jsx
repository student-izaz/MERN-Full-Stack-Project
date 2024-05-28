import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div className="main-content">
            <div className="main-text">
                <h1>Welcome to <span>Techpile Technology</span></h1>
                <div className="animation-text">
                    <span className="text first-text" style={{color: "#656565;"}}>Learn</span>
                    <span className="text sec-text"></span>
                </div>
                <p>Our training session program to enhance knowledge to the next level and to make you afficience to work with a reputated organization.Techpile teach basics and those coding techniques to people in short time which took me ages to learn.</p>
                <div className="free-course-btn"><Link to="/course">Popular Courses</Link></div>
            </div>
            <div className="main-img">
                <img src="images/Main-img.jpg" />
            </div>
        </div>

        <div className="training">
            <div className="training_head">
                <h1><span>Training</span> at Techpile</h1>
                <p>Enter As Trainess, Exit As Professional</p>
            </div>
            <div className="training_box">
                <div className="box" style={{background: "green"}}>SUMMER TRAINING</div>
                <div className="box" style={{background: "blue"}}>WINTER TRAINING</div>
                <div className="box" style={{background: "black"}}>APPRENTICESHIP TRAINING</div>
                <div className="box" style={{background: "orange"}}>SYLLABUS TRAINING</div>
                <div className="box" style={{background: "blue"}}>INDUSTRIAL TRAINING</div>
                <div className="box" style={{background: "black"}}>SKILL PROGRAM</div>
            </div>
        </div>

        <div id="services">
            <div id="service_head">
                <h1><span>Techpile</span> In <span style={{color: "rgb(240, 174, 50)"}}>Web Designing</span>  & Development</h1>
                <p>Our Services are designed to make your business to the next level,reducing the gap between you and the height of success you wish to acheive.</p>
            </div>
            <div className="service-content">
                <div className="service_box">
                    <i className="fa-solid fa-code"></i>
                    <h2>Best in Website & Wed Development</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                </div>
                <div className="service_box">
                    <i className="fa-solid fa-laptop"></i>
                    <h2>Software And ERP Solution</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                </div>
                <div className="service_box" id="service_box1">
                    <i className="fa-sharp fa-solid fa-screwdriver-wrench"></i>
                    <h2>Domain & Hosting Server</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                </div>
            </div>
        </div>

        {/*------------ TRAINING SECTION -------------*/}
        <div id="training_program">
            <div id="training_program_head">
                <h1>Amazing <span style={{color: "rgb(240, 174, 50)"}}>Training</span> Programs</h1>
                <p>We are more appreciate in the field of Training as well. Techpile offers you the best<br/>development training via experienced consultants.</p>
            </div>
            <div id="training_boxes">
                <div className="training_program_box">
                    <i className="fa-solid fa-code"></i>
                    <h3>Summer Training(45-60 Days)</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                    <a href="">Know More</a>
                </div>
                <div className="training_program_box">
                    <i className="fa-solid fa-brush"></i>
                    <h3>Vocational Training(45-60 Days)</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                    <a href="">Know More</a>
                </div>
                <div className="training_program_box">
                    <i className="fa-solid fa-code"></i>
                    <h3>Summer Training(45 Days)</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                    <a href="">Know More</a>
                </div>
                <div className="training_program_box">
                    <i className="fa-brands fa-java"></i>
                    <h3>Apprenticeship Training(6 Months)</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                    <a href="">Know More</a>
                </div>
                <div className="training_program_box">
                    <i className="fa-sharp fa-solid fa-screwdriver-wrench"></i>
                    <h3>Syllabus Training(30 Days)</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                    <a href="">Know More</a>
                </div>
                <div className="training_program_box">
                    <i className="fa-brands fa-laptop"></i>
                    <h3>Skill Development(30 Days)</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate 
                        consectetur suscipit, similique ducimus error, pariatur exercitationem! 
                        Ducimus distinctio repellendus iusto dolore sapiente non dolor!
                    </p>
                    <a href="">Know More</a>
                </div>
            </div>
        </div>

        {/*----------------- LEARNING APP -------------------*/}
        <div className="learning_app">
            <div className="cover">
                <div className="text">
                    <h1>Also available on Google Play Store</h1>
                    <h2>Techpile Learning App.</h2><br/><br/>
                    <p>Download application and grow your knowledge.</p><br/><br/>
                    <a href="#">Google Play</a>
                </div>    
            </div>
        </div>

        {/* ---------------- TESTIMONIAL -------------------- */}
        <div id="testimonial">
            <div id="testimonial_head">
                <h1>Our <span>Testimonial</span></h1>
                <p>Trusted by over 1,000 student across all 50 collage</p>
            </div>
            <div id="reviews">
                <div className="review_box">
                    <i className="fa-solid fa-user"></i>
                    <h3>UserName</h3>
                    <p>No Testimonial Yet.</p>
                </div>
                
                <div className="testimonial-arrow" id="arrowl"><i className="fa-solid fa-angle-left"></i></div>
                <div className="testimonial-arrow" id="arrowr"><i className="fa-solid fa-angle-right"></i></div>
                <div className="circle">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Main;
