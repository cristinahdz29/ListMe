import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/heading.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { defaultProps } from "grommet";

function Heading(props) {
  // will remove token from localStorage to logout user from the site
  const handleLogout = () => {
    localStorage.removeItem("jsonwebtoken");
    props.onLogout()
  };
  return (
    <div className="header-buttons">
      <div className="button-div">
        <NavLink to="/">
          <Button className="button" variant="light" size="lg">
            Home
          </Button>
        </NavLink>

        {/* if not authenticated/logged in, give them option to login */}
        {!props.isAuth ? (
          <NavLink to="/login/user">
            <Button variant="light" className="button" size="lg">
              Login
            </Button>
          </NavLink>
        ) : null}

        {/* if authenticated,show profile */}
        {props.isAuth ? (
          <NavLink to="/mylists">
            <Button className="button" variant="light" size="lg">
              My Lists
            </Button>
          </NavLink>
        ) : null}

        {/* if authenticated/logged in, give option to logout */}
        {props.isAuth ? (
          <NavLink to="/">
            <Button
              className="button"
              variant="light"
              size="lg"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </NavLink>
        ) : null}
      </div>
    </div>
  );
}

// need to access global state to hide tabs depending on user authentication
const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuthenticated
  }
}


//need to update global state
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({ type: "ON_LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
