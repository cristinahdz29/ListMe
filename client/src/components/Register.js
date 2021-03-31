import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/Registration.css'
import { NavLink } from "react-router-dom";

function Register(props) {
  // need to set up a state to collect info from the input boxes
  const [registrationInfo, setRegistrationInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // function to set state with user registration info
  const handleChange = (e) => {
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });
  };

  // function to handleSubmit of infor once button is clicked
  const handleSubmit = async () => {
    await axios.post("http://localhost:3001/register/user", {
      first_name: registrationInfo.firstName,
      last_name: registrationInfo.lastName,
      email: registrationInfo.email,
      password: registrationInfo.password,
    });

    props.history.push("/login/user");
  };

  //input boxes with handleChange,  button with handleSubmit function
  // and names for each

  return (
    <div className="registration-div">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            
            placeholder="Enter first name"
            name="firstName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            
            placeholder="Enter last name"
            onChange={handleChange}
            name="lastName"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <p>Already have an account? <NavLink to='/login/user'>Sign In!</NavLink> </p> 
    </div>
  );
}

export default Register;
