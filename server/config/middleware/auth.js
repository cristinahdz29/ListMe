// middleware to ensure I have the jsonwebtoken in the headers of the request

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json({ error: "unauthorized" });
  }

  const bearerAndToken = authHeader.split(" ");
  const token = bearerAndToken[1];

  if (!token) {
    res.status(401).json({ error: "unauthorized" });
  }

  // verifying if token recieved from client side is correct
  const decodedToken = jwt.verify(token, process.env.JWTKEY);

  if (!decodedToken) {
    res.status(401).json({ error: "unauthorized" });
  }

  req.user_id = decodedToken.user_id; // if this is true in our routes, it means we have the jsonwebtoken sent back to us

  next();
};
