import PropTypes from "prop-types";
import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { FaHome, FaUserPlus, FaSignInAlt,FaBook } from "react-icons/fa";

export class Navbar_beforelogin extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark">
          <Link to={"/"} className="navbar-brand">
            <h5>
              <FaHome /> XYZ Pharmacy
            </h5>
          </Link>

          {/* <Link to={"/Aboutus"} className="navbar-brand">
            <h5>
              <FaBook /> About Us
            </h5>
          </Link> */}

          
          

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="navbar-brand">
                <b>
                  <FaSignInAlt />
                  Login
                </b>
              </Link>
            </li>

            <li className="nav-item text-white">
              <Link to={"/register"} className="navbar-brand">
                <b>
                  <FaUserPlus /> Sign Up
                </b>
              </Link>
            </li>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar_beforelogin;
