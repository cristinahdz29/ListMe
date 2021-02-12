// LOGIC TO CREATE A USER

// need to require the Users model
const { Users } = require("../../models");

// need to require bcrypt to hash users password
const bcrypt = require("bcryptjs");

/**
 * Solves equations of the form a * x = b
 * @example <caption>Example usage of method1.</caption>
 * @param {Object} payload user values needed for creation
 * @returns {Object} User object
 */

module.exports = async (payload) => {
  //hashing password
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(payload.password, salt);

  //creating user
  const user = await Users.create({
    first_name: payload.first_name,
    last_name: payload.last_name,
    email: payload.email,
    password: hash,
  });

  return user.toJSON();
};
