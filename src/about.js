import React, { useState } from "react";
import "./style.css";
import AboutMePic from "./img/Aboutme.jpg";
import Resume from "./Coding Resume Jacqueline Smith.pdf";



function About() {
  const [mouseState, setMouseState] = useState (45);

   return (
    <div className="container">
      <div className="row justify-content-center" id="aboutme">
          <img src={AboutMePic} className="img-fluid" alt="about me pic"/>
          
            <h2 className="social-media">5 things about Me</h2>
            <ol>
              <li>New Jersey born and raised, also lived in MD and CT</li>
              <li>
                Graduate of Rutgers University, New Jersey City
                University, and Albertus Magnus College.
              </li>
              <li>
                Holds a full stack Bootcamp Certificate, a BA Degree in History (minored
                in Pre-Law, concentrated in Political Science), an AA Degree in English.
              </li>
              <li>
                Enjoys photograhy and personally shot all of the images in the
                background
              </li>
              <li>
                Is an experienced Club DJ that has performed in NY, NJ, CT, PA,
                and MA over the last 18 years.
              </li>
            </ol>
          </div>
          <div className="row justify-content-center">
          <a href={Resume} target="_blank" className="gradient-button" onMouseOver={ () => {setMouseState(0)} } onMouseOut={ () => {setMouseState(45)} } style={{background: "linear-gradient("+ mouseState+"deg,#ff6ec4,#7873f5)"}}>Click here to checkout Resume</a>          
          </div>
        </div>
   
  );
}

export default About;
