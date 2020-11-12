import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
            <section className="section-contact">
                <h1 className="text-center contact-heading">Contact Me</h1>
                <div className="row2 d-flex" id="jackpotcontact">
                    <div className="col-3 card flex-column text-center">
                        <h2>Address</h2>
                        <p>63 W 39 St., Bayonne, NJ 07002</p>
                    </div>
                    <div className="col-3 card flex-column text-center">
                        <h2>Email</h2>
                        <Link to="mailto:jerseyjackpot@gmail.com?" className="email">jerseyjackpot@gmail.com</Link>
                    </div>
                    <div className="col-3 card flex-column text-center">
                        <h2>Phone</h2>
                        <p>(201)320-7304</p>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Contact;