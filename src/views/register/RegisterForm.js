import React, { useState } from "react";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";
import "../login/login.css";
import bgform from "../../bgform.png";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let history = useHistory();

  const handleRegister = () => {
    if (password != confirmPassword) {
      alert("password does not match");
    } else {
      let apiOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      };

      fetch("https://cap3backend.herokuapp.com/admin/register", apiOptions)
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Success!") {
            history.push("/login");
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-center py-5 teal-text font-weight-bold mt-5">
        Register
      </h1>
      <Form className="d-flex flex-column align-items-center">
        <FormGroup>
          <Label className="font-weight-bold">First Name:</Label>
          <Input
            style={{
              width: "500px",
              backgroundColor: "transparent",
            }}
            className="rounded-0"
            placeholder="Enter your first name here"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label className="font-weight-bold">Last Name:</Label>
          <Input
            style={{
              width: "500px",
              backgroundColor: "transparent",
            }}
            className="rounded-0"
            placeholder="Enter your last name here"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </FormGroup>
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
          />
        </FormGroup>
        <FormGroup>
          <Label className="font-weight-bold">Confirm Password:</Label>
          <Input
            style={{
              width: "500px",
              backgroundColor: "transparent",
            }}
            className="rounded-0"
            placeholder="Confirm password here"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </FormGroup>
        <div>
          <MDBBtn color="unique" className="rounded-0" onClick={handleRegister}>
            Register
          </MDBBtn>
        </div>
      </Form>
      <div className="text-center">
        <img src={bgform} alt="lost in the woods logo" className="bgform" />
      </div>
    </div>
  );
};

export default RegisterForm;
