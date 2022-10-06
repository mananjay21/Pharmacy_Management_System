//import { render } from "@testing-library/react";
import React, { Component } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { Router, Switch, Route, Link } from "react-router-dom";
import { FaHome, FaUserPlus, FaSignInAlt, FaBook,FaMedrt,FaProductHunt } from "react-icons/fa";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm text-white">
      <div class="container-fluid">
        
        <a class="navbar-brand text-white" onClick={"/home"}>
          <h5><FaHome />XYZ Pharmacy</h5>
        </a>
        
        
        <Link to={"/AboutUs"} className="navbar-brand text-white">
          <h5>
            <FaBook /> About Us
          </h5>
        </Link>
        
            <a class="nav-link text-white" href="/profile">
              <h5><FaHome />Home</h5>
            </a>
            <a class="nav-link text-white" href="/drugs">
              <h5><FaMedrt/>Drugs</h5>
            </a>
            <a class="nav-link text-white" href="/Orders">
              <h5><FaProductHunt/>All Orders</h5>
            </a>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="colapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div class="collapse navbar-collapse" id="mynavbar"> */}
        {/* <ul class="navbar-nav me-auto">
          
          <li class="nav-item text-white">
            
          </li>
          <li class="nav-item text-white">
            
          </li>
        </ul> */}

        {/* </div> */}

        <form class="d-flex">
          <input
            class="form-control me-2 "
            type="text"
            placeholder="Search Drugs  "
          />
          <button class="btn text-white" type="button">
            Search
          </button>
        </form>
        <a href="/home">
          {" "}
          <button class="btn text-white" type="button">
            {" "}
            Logout{" "}
          </button>
        </a>
        {/* <a class="nav-link" href="/home"><h1><MdOutlineLogout/></h1></a>  */}
      </div>
    </nav>
  );
}
export default Navbar;
