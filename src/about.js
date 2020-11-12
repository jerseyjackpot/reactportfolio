import React, { useState, useEffect } from "react";
import "./style.css";
import AboutMePic from "./img/Aboutme.jpg";



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
                Graduate of Albertus Magnus College and New Jersey City
                University.
              </li>
              <li>
                Holds an AA Degree in English and BA Degree in History (minored
                in Pre-Law, concentrated in Political Science).
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
          <a className="gradient-button" href={process.env.PUBLIC_URL + "/Coding Resume Jacqueline Smith.pdf"} target="_blank" onMouseover={ () => {setMouseState(0)} } onMouseout={ () => {setMouseState(45)} } style={{background: "linear-gradient("+ mouseState+"deg,#ff6ec4,#7873f5)"}}>Click here to checkout Resume</a>
          </div>
        </div>
   
  );
}

export default About;
