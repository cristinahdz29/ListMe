const express = require("express");
const app = express();
// middlewares
const { celebrate } = require("celebrate");

// validation
const createUserValidation = require("../validate/createUser");

// Will require controllers here
const getStatus = require("../controllers/status/get");
const createUser = require("../controllers/register/createUser");
const loginUser = require("../controllers/login/loginUser")

module.exports = () => {
  // Where routes for all requests will go

  // testing route
  app.get("/status", getStatus);

  // route to create a user
  // Provide email, password, first name, last name
  app.post("/register/user", celebrate(createUserValidation), createUser);

  //login user
  // provide email and password
  app.post("/login/user", loginUser)

  return app;
};
