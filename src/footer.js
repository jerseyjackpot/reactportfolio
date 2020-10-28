import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer className="page-footer">
            <div className="col social-media-area width-limit">
                <a href="https://www.instagram.com/mzjackalina/" className="fa fa-instagram">
                </a>
                <a href="https://github.com/jerseyjackpot" className="fa fa-github">
                </a>
                <a href="https://www.linkedin.com/in/jacqueline-smith-57031b61/" className="fa fa-linkedin">
                </a>
                <a href="https://www.reddit.com/user/jerseyjackpot" className="fa fa-reddit">
                </a>
            </div>
            <div className="footer-row">
                <h4 className="text-center">&copy;2020 Jacqueline A. Smith</h4>
            </div>
        </footer>
    );
}

export default Footer;