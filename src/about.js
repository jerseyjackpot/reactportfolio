import React from "react";
import "./style.css";
import AboutMePic from "./img/Aboutme.jpg";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

function About() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img src={AboutMePic} className="img-fluid" alt="about me pic"/>
          <div className="col">
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
          <div className="row align-middle">
          <a href={process.env.PUBLIC_URL + "/Coding Resume Jacqueline Smith.pdf"} target="_blank">Click here to checkout Resume</a>
          {/* <div className=MDBBtn gradient="purple">
          
          </MDBBtn> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
