import React, { useState } from "react";
import "./topbar.css";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, FormControl, Form } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

const Topbar = () => {
  let history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <div>
      <Navbar>
        <div className="container">
          <Navbar.Brand>
            <Link to="/">
              <img
                src="images/logo.png"
                height="99px"
                className="d-inline-block align-top logo"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <div
            className="border-right border-white"
            style={{ height: "50px" }}
          ></div>
          <Nav>
            <ul className="nav-links">
              <Link to="/">
                <li className="navlist">Home</li>
              </Link>
              <Link to="/gallery">
                <li className="navlist">Gallery</li>
              </Link>
              <Link to="/ourpackages">
                <li className="navlist">Packages</li>
              </Link>
              {sessionStorage.isAdmin === "false" && (
                <Link to="/bookings">
                  <li className="navlist">Bookings</li>
                </Link>
              )}
              <Link to="/contact">
                <li className="navlist">Contact</li>
              </Link>
            </ul>
          </Nav>
          <div
            className="border-right border-white"
            style={{ height: "50px" }}
          ></div>
          <div>
            {sessionStorage.userId ? (
              <div className="d-flex align-items-center">
                <h6 className="text-white font-weight-bold pr-3">
                  {sessionStorage.email}
                </h6>
                <button
                  className="rounded-pill py-2 px-4 btn btn-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="rounded-pill py-2 px-4 btn btn-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="rounded-pill py-2 px-4 btn btn-white">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Topbar;
