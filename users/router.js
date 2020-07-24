const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/token-middleware");
const Users = require("./model");

const router = require("express").Router();

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findBy({ email }).first();

    if (user) {
      return res.status(409).json({
        message: "email is already in use",
      });
    }

    const newUser = await Users.add({
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
    const user = await Users.findBy({ email }).first();

    if (!user) {
      return res.status(401).json({
        message: "You shall not pass!",
      });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "You shall not pass!",
      });
    }

    const token = generateToken(user);

    res.status(200).json({
      // token: jwt.sign(payload, process.env.JWT_SECRET),
      message: `Welcome ${user.email}!`,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
