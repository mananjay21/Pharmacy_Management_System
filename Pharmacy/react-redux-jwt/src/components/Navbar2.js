//import { render } from "@testing-library/react";
import { FaHome, FaUserPlus, FaSignInAlt, FaBook,FaMedrt,FaProductHunt } from "react-icons/fa";
import React, { Component } from "react";
import { MdOutlineLogout } from "react-icons/md"
function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm text-white">
            <div class="container-fluid">
                <a class="navbar-brand text-white" onClick={"/home"}><h5><FaHome />XYZ Pharmacy</h5></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="colapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                       
                            <a class="nav-link text-white" href="/profile2"><h5><FaHome />Home</h5></a>
                        
                            <a class="nav-link text-white" href="/drugs2"><h5><FaMedrt/>Drugs</h5></a>
                       
                            <a class="nav-link text-white" href="/order"><h5><FaProductHunt/>Order</h5></a>
                       
                            
                        
                    </ul>
                    
                </div>
            </div>
            <form class="d-flex">
                        <input class="form-control me-2 " type="Search" placeholder="Search Drugs  " />
                        <button class="btn text-white" type="button">Search</button>              
            </form>
            {/* <a class="nav-link" href="/home"><h1><MdOutlineLogout/></h1></a>  */}
            < a href="/home" > <button class="btn text-white" type="button"> Logout </button></a>
        </nav>


    );
}
export default Navbar;