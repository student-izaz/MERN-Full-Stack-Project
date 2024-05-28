import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <div>
      <div className="course_section flex">
      <div className="about_courses flex_col">
        <div className="course_head">
          <h1>Our Popular <span>Courses</span></h1>
          <p>We Believe to make IT Industry More Reliable for people</p>
        </div>
        <div className="all_course flex">
          <div className="course_card">
            <div className="img">
              <img src="images/course_web_dev.jpeg" alt="" />
            </div>
            <div className="course_details">
              <div className="title">
                <p>COMPLETE HTML/CSS/JS</p>
              </div>
              <div className="price">
                <p>Price - 5000</p>
              </div>
              <div className="buy_course_btn">
                <button type="button">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="course_card">
            <div className="img">
              <img src="images/course_php_mysql.webp" alt="" />
            </div>
            <div className="course_details">
              <div className="title">
                <p>PHP/MYSQL COURSE</p>
              </div>
              <div className="price">
                <p>Price - 3000</p>
              </div>
              <div className="buy_course_btn">
                <button type="button">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="course_card">
            <div className="img">
              <img src="images/course_mern.jpg" alt="" />
            </div>
            <div className="course_details">
              <div className="title">
                <p>MERN Full StacK</p>
              </div>
              <div className="price">
                <p>Price - 18000</p>
              </div>
              <div className="buy_course_btn">
                <button type="button">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="course_card">
            <div className="img">
              <img src="images/course_python.jpg" alt="" />
            </div>
            <div className="course_details">
              <div className="title">
                <p>PYTHON COURSE</p>
              </div>
              <div className="price">
                <p>Price - 5000</p>
              </div>
              <div className="buy_course_btn">
                <button type="button">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="course_card">
            <div className="img">
              <img src="images/course_java.jpg" alt="" />
            </div>
            <div className="course_details">
              <div className="title">
                <p>JAVA COURSE</p>
              </div>
              <div className="price">
                <p>Price - 5500</p>
              </div>
              <div className="buy_course_btn">
                <button type="button">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Courses
