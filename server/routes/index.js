const express = require("express");
const app = express();
// middlewares
const { celebrate } = require("celebrate");

// validation
const createUserValidation = require("../validate/createUser");
const createListValidation = require("../validate/createList")
const createItemValidation =  require("../validate/createItem")

// auth
const auth = require("../config/middleware/auth")

// Will require controllers here
const getStatus = require("../controllers/status/get");
const createUser = require("../controllers/register/createUser");
const loginUser = require("../controllers/login/loginUser")
const createList = require("../controllers/lists/create")
const createItem = require("../controllers/items/create")
const getItems = require("../controllers/items/get")

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

  //create list
  //provide title, event, description, jsonwebtoken in headers
  app.post("/list", auth, celebrate(createListValidation), createList);

  //create item
  //provide title, description, quantity, price, link, purchased, list_id(in params)
  app.post("/list/:list_id/item", auth, celebrate(createItemValidation), createItem)

  // get items of a specific list
  // provide list_id in url params
  app.get("/list/:list_id/items", auth, getItems)


  return app;
};
