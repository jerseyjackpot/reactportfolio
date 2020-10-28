import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

function Contact() {
    return (
        <div id="contact" className="container-fluid">
            <div className="row diff-bg">
            <br />
            <br />
            <br />
            <br />
            <br />
                <div className="col d-flex justify-content-center">
                    <h2>Contact Me</h2>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className="row diff-bg d-flex justify-content-around">
                <div className="col-md-3 card text-center">
                    <h3>Address</h3>
                    <p>63 W 39 St., Bayonne, NJ 07002</p>
                </div>
                <div className="col-md-3 card text-center">
                    <h3>Email</h3>
                    <Link to="mailto:jerseyjackpot@gmail.com?" className="email">jerseyjackpot@gmail.com</Link>
                </div>
                <div className="col-md-3 card text-center">
                    <h3>Phone</h3>
                    <p>(201)320-7304</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
  );
}

export default Contact;