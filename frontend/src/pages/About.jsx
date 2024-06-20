import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>    
    <div className="about-content">
        <div className="about-head">
            <h1>About Our <span style={{color: "rgb(240, 174, 50)"}}>Company</span></h1>
            <p>There are multiple reason to join us for multiple purpose related to your IT. Believe <br/>me you will find us best suitable.</p>
        </div>
        <div className="about-area">
            <div className="left"></div>
            <div className="right">
                <h2>Welcome to the Techpile, just here some like word to describe our work scope.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi autem porro optio cum fugit deleniti! Optio dolorum impedit assumenda fuga illo magnam quidem nobis nisi vero dicta, quasi repellat ea officia sed cumque? Minima vero maiores beatae. Temporibus at dolore vero, cupiditate ab numquam delectus libero sed iusto consequatur deleniti. Blanditiis expedita!<br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi autem porro optio cum fugit deleniti! Optio dolorum impedit assumenda fuga illo magnam quidem nobis nisi vero dicta, quasi repellat ea officia sed cumque? Minima vero maiores beatae. Temporibus at dolore vero, cupiditate ab numquam delectus libero sed iusto consequatur deleniti. Blanditiis expedita!</p>
                <Link to="/contact" id="contact-btn">Contact Us</Link>
            </div>
        </div>
    </div>
    
    <div className="about-text">
        <div className="about-head">
            <h1>We <span style={{color: "rgb(240, 174, 50)"}}>Believe</span></h1>
            <p>We believe to make IT industrymore reliable for pepole.</p>
        </div>
        <div className="about-area2">
            <div className="text">
                <h3>Our Vision</h3>
                <div className="outline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, corporis distinctio sint iure esse provident illum eveniet voluptate pariatur, impedit porro beatae non quos ipsam voluptatem, itaque quod. Eaque fugit sequi expedita iure velit, in, vitae.</p>
            </div>
            <div className="text">
                <h3>Our Mission</h3>
                <div className="outline" ></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, corporis distinctio sint iure esse provident illum eveniet voluptate pariatur, impedit porro beatae non quos ipsam voluptatem, itaque quod. Eaque fugit sequi expedita iure velit, in, vitae.</p>
            </div>
            <div className="text">
                <h3>Our Work Scope</h3>
                <div className="outline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit, corporis distinctio sint iure esse provident illum eveniet voluptate pariatur, impedit porro beatae non quos ipsam voluptatem, itaque quod. Eaque fugit sequi expedita iure velit, in, vitae.</p>
            </div>
            
        </div>
    </div>
  </>

  )

}

export default About
