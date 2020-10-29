import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarNav, MDBNavbarBrand, MDBNavItem, MDBCollapse, MDBContainer,
  MDBHamburgerToggler
} from 'mdbreact';
import "./navbar.css";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    collapse1: false,
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  collapseMenu = collapseID => {
    this.setState({
      ...this.state,
      [collapseID]: false,
    });
  }


  render() {
    return (
      <div className="stupidnavbar">
      <div className="container">
        <div className="navbar" id="hamburger" >
            <MDBNavbarBrand className="text-wrap">
              Jacqueline A. Smith - FullStack
              Developer
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="#000000" id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/about" className="nav-link js-scroll-trigger"onClick={() => this.collapseMenu('collapse1')}>About Me</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/portfolio" className="nav-link js-scroll-trigger">Portfolio</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/contact" className="nav-link js-scroll-trigger">Contact</Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;

