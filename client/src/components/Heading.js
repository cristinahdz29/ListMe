import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/heading.css'
import { NavLink } from "react-router-dom";

function Heading() {
    return (
      <div className="header-buttons">
        <div className="button-div">
          <NavLink to="/">
            <Button className="button" variant="light" size="lg">
              Home
            </Button>
          </NavLink>
          <NavLink to="/login/user">
            <Button variant="light" className="button" size="lg">
              Login
            </Button>
          </NavLink>
          <NavLink to="/register/user">
            <Button className="button" variant="light" size="lg">
              Sign Up
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button className="button" variant="light" size="lg">
              Logout
            </Button>
          </NavLink>
        </div>
      </div>
    );
}

export default Heading