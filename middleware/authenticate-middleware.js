// check if user is logged in before granting access to next middleware/route handler
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { jwtSecret } = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization; // tokens transferred in auth header

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET || jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "token not verified" });
      } else {
        // token is good, set username (and/or other props) to request object
        req.user = {
          email: decodedToken.email,
        };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No token provided" });
  }
};
