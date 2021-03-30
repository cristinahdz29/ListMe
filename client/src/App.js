import React from "react";

import './styles/App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


function App(props) {
  // adding state within our app
  // need to make a call to the backend to register a user
  

  return (
    <div className="main-content">
      <h1>
        Feeling <b>Overwhelmed?</b> Let us help.{" "}
        <b className="bold-overwhelmed">ListMe</b> offers a simple way to stay
        organized and up to date.
      </h1>
      <div className="home-options">
        <div className="home-link">
          <NavLink className="navLink" to="/register/user">
            <h3 className="bold-overwhelmed">Sign Up</h3>
          </NavLink>
        </div>
        <div className="home-link">
          <NavLink to='/explore'>
            <h3 className="bold-overwhelmed">Explore</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
