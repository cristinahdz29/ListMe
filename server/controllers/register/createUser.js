// need to require the Users model
const { Users } = require("../../models");
const renderUsers = require("../../views/users");
const findUserByEmail = require("../../services/users/findByEmail");
const createUser = require("../../services/users/create")

module.exports = async (req, res, next) => {
  //checking if user already exists
  const user = await findUserByEmail(req.body.email);

  //If student exists, then will send them a message stating that they already exists
  //If the DO NOT exist, will create user and add to db
  if (user) {
    res.status(400).send({ error: "User already exists" });
  } else {
    const user = await createUser(req.body)
    console.log(user)

    const payload = await renderUsers(user);
    res.status(201).json(payload);
  }
};
