import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./views/home/Home";
import Albums from "./views/albums/Albums";
import OurPackages from "./views/packages/OurPackages";
import Bookings from "./views/bookings/Bookings";
import Contact from "./views/contact/Contact";
import Footer from "./components/Footer";
import LoginForm from "./views/login/LoginForm";
import RegisterForm from "./views/register/RegisterForm";

const Main = () => {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Albums} />
        <Route path="/ourpackages" component={OurPackages} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Main;
