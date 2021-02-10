// controller to login in a user into the app
const findUserByEmail = require("../../services/users/findByEmail");
const createToken = require("../../services/users/login");

module.exports = async (req, res, next) => {
  //let user_id = "";

  //checking if user exists (has registered) by using findByEmail service
  const user = await findUserByEmail(req.body.email);

  //if user exists, need to compare passwords and if match, create a token
  if (user) {
    const token = await createToken(user, req.body);
    if (token) {
      return res.json({ token: token });
    }
  }
  res.status(400).json({ message: "Incorrect username or password" });
};
