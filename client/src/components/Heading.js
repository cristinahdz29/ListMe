import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/heading.css'

function Heading() {
    return (
      <div className="header-buttons">
        <div className="button-div">
          <Button variant="light" className="button" size="lg">
            Login
          </Button>
          <Button className="button" variant="light" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
    );
}

export default Heading