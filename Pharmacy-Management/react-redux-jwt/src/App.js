import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import Navbar_beforelogin from "./components/Navbar_beforelogin";
import { Sign_img } from "./components/Sign_img";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";





import { GrLogin } from "react-icons/gr";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import EventBus from "./common/EventBus";
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ListDrugs from "./components/ListDrugs";
import ViewDrugs from "./components/viewdrugs";
import CreateDrugComponent from "./components/createdrugs";
import AddOrder from "./components/createOrder";
import DrugsList from

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      
      <Router history={history}>
        <div>
          
      
                <Switch>
                  
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/profile" component={Landingpage} />
                  <Route exact path="/user" component={User} />
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/Landingpage" component={Landingpage}/>
                  <Route exact path="/aboutus" component={Aboutus} />
                  <Route exact path="/AddOrder" component={AddOrder}/>
                  <Route path = "/Drugs" exact component = {ListDrugs}></Route>
                  <Route path = "/Drugs2" exact component = {DrugsList}></Route>
                  <Route path = "/Order" exact component = {createOrder}></Route>
                  <Route path = "/Orders" exact component = {ListOrders}></Route>
                  
                  <Route path = "/view-drug/:id" component = {ViewDrugs}></Route>
                  <Route exact path="/add-drug/:id" component={CreateDrugComponent} />
                </Switch>
        
        <Footer />
        {/* <Navbar_beforelogin/> */}
        </div>
        {/* <Aboutus/> */}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
