import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavbarBrand, Navbar, Row } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar expand="lg" aria-controls="responsive-navbar-nav" className="navbarjackpot">
      
        <NavbarBrand>
          Jacqueline A. Smith - Full Stack Developer
            </NavbarBrand>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        </Navbar>
    </>
  );
}

export default Header;

