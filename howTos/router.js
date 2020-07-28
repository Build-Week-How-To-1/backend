const router = require("express").Router();
const HowTos = require("./model");
const Users = require("../users/model");
const Reviews = require("../reviews/model");

// GET all howTos by userId
router.get("/:userid/user", (req, res, next) => {
  const { userid } = req.params;
  Users.findUserById(userid).then((user) => {
    if (user) {
      HowTos.findHowTosBy(userid)
        .then((howTos) => {
          res.status(200).json(howTos);
        })
        .catch((err) => {
          next(err);
        });
    } else {
      res.status(400).json({
        message: "Invalid user id",
      });
    }
  });
});

// Get all howTos
router.get("/", async (req, res, next) => {
  try {
    res.json(await HowTos.findHowTos);
  } catch (err) {
    next(err);
  }
});

// POST new howTo
router.post("", async (req, res, next) => {
  try {
    const { title, steps, resources } = req.body;
  } catch (err) {
    next(err);
  }
});

// PUT update howTo
router.put("/:howToId", async (req, res, next) => {
  try {
    const changes = req.body;
    const { howToId } = req.params;
    //verify howTo exists
    HowTos.findHowToById(howToId).then((howTo) => {
      if (howTo) {
        //update
        HowTos.updateHowTo(changes.howTo, howToId);
      } else {
        res.status(400).json({
          message: "Could not update howTo",
        });
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
