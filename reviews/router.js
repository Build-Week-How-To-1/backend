const router = require("express").Router();
const HowTos = require("./model");
const Users = require("../users/model");
const Reviews = require("../reviews/model");

// GET all reviews by howToid
router.get("/:howToId/reviews", (req, res, next) => {
  try {
    const { howToId } = req.params;
    HowTos.findReviewByHowToId(howToId).then((reviews) => {
      res.status(200).json(reviews);
    });
  } catch (err) {
    next(err);
  }
});

// POST new review
router.post("", async (req, res, next) => {
  try {
    const { content } = req.body;
  } catch (err) {
    next(err);
  }
});

// PUT update review
router.put("/:howToId/:reviewId", async (req, res, next) => {
  try {
    const changes = req.body;
    const { reviewId } = req.params;
    //verify review exists
    Reviews.findReviewById(howToId).then((howTo) => {
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

// Delete howTo
router.delete("/:howToId", async (req, res, next) => {
  try {
    const { howToId } = req.params;
    //verify howTo exists
    HowTos.findHowToById(howToId).then((howTo) => {
      if (howTo) {
        HowTos.removeHowTo();
      } else {
        res.status(400).json({
          message: "Could not delete howTo",
        });
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
