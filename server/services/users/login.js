const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (user, payload) => {
  let storedPassword = user.password;
  let user_id = user.user_id;

  let result = await bcrypt.compare(payload.password, storedPassword);

  if (!result) {
    return null;
  }

  const token = jwt.sign({ user_id: user_id }, process.env.JWTKEY);
  return token;
};
