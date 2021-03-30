import React, { useState } from "react";
import axios from "axios";
import { setAuthenticationHeaders } from "../utils/authenticate";
// need to create login to login ppl -- get the logic from GoodTutor

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/Login.css'

function Login(props) {
  // create state to save loginCredentials of user
  const [loginCredentials, setLoginCredentials] = useState({}); // empty object 1st

  //state for errors
  const [error, setError] = useState(false); // setting error to false at first
  // create function to handle change in input boxes
  // attempt to make a function within a function
  const handleChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  // also need JSON web token when the login has been successful
  // if Login is successful, will have a token returned as result
  const userLoggedIn = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login/user", {
        email: loginCredentials.email,
        password: loginCredentials.password,
      });
      const result = response.data;
      console.log(result);
      return result; // result is the token created and sent from the backend
    } catch (err) {
      return null;
    }
  };

  // create a function that calls the above function when Sign In button is clicked
  const handleLogin = async () => {
    let userToken = await userLoggedIn(); // userToken will be in the form of an object

    if (userToken) {
      const token = userToken.token; // accessing token from the userToken object

      localStorage.setItem("jsonwebtoken", token); // setting the token in the localstorage as 'jsonwebtoken'

      // after getting the token, we can set default authentication headers for axios to include jsonwebtoken
      // Will send the token for every request user makes -- need to make this middleware in utils folder
      setAuthenticationHeaders(token);

      if (token) {
        props.history.push("/");
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  // need input boxes (onChange={handleChange}) for email and password
  // need a button (onClick={handleChange})
  return (
    <div className="login-div">
      <Form>
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

        <Button variant="primary" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
