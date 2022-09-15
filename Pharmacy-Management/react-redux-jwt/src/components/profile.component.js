import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Aboutus from "./Aboutus";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landingpage from "./Landingpage";

class Profile extends Component {

 
  render() {

    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <Navbar/>
        <Landingpage/>
        {/* <Footer/> */}
        {/* <h1>{currentUser.username}</h1> */}
        {/* <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a> */}
        
          </>
          
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);