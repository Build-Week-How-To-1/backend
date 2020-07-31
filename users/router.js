const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/token-middleware");
const Users = require("./model");

const router = require("express").Router();

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findUserBy({ email }).first();

    if (user) {
      return res.status(409).json({
        message: "email is already in use",
      });
    }

    const newUser = await Users.addUser({
      email,
      password: await bcrypt.hash(password, 15),
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findUserBy({ email }).first();

    if (!user) {
      return res.status(401).json({
        message: "Invalid login info",
      });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = generateToken(user);

    res.status(200).json({
      message: `Welcome ${user.email}!`,
      token
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
