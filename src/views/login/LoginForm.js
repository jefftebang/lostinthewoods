import React, { useState } from "react";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";
import "./login.css";
import bgform from "../../bgform.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Email or Password is not valid.");
    } else {
      let apiOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      fetch("https://cap3backend.herokuapp.com/admin/login", apiOptions)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.token) {
            sessionStorage.userId = res.user._id;
            sessionStorage.email = res.user.email;
            sessionStorage.isAdmin = res.user.isAdmin;
            history.push("/");
            setEmail("");
            setPassword("");
          }
        });
    }
  };

  return (
    <div>
      <div>
        <h1
          className="text-center pb-5 teal-text font-weight-bold"
          style={{ marginTop: "100px" }}
        >
          Login
        </h1>
        <Form className="d-flex flex-column align-items-center">
          <FormGroup>
            <Label className="font-weight-bold">Email:</Label>
            <Input
              style={{
                width: "500px",
                backgroundColor: "transparent",
              }}
              className="rounded-0"
              placeholder="Enter email here"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <Label className="font-weight-bold">Password:</Label>
            <Input
              style={{
                width: "500px",
                backgroundColor: "transparent",
              }}
              className="rounded-0"
              placeholder="Enter password here"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </FormGroup>
          <div>
            <MDBBtn color="unique" className="rounded-0" onClick={handleLogin}>
              Login
            </MDBBtn>
          </div>
        </Form>
      </div>
      <div className="text-center">
        <img src={bgform} alt="lost in the woods logo" className="bgform" />
      </div>
    </div>
  );
};

export default LoginForm;
