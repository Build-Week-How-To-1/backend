const router = require("express").Router();
const HowTos = require("./model");
const Users = require("../users/model");
const Reviews = require("../reviews/model");

// GET all howTos by userId
router.get("/:userid", async (req, res, next) => {
  const { userid } = req.params;
  Users.findUserById(userid).then((user) => {
    if (user) {
      HowTos.findHowToByUser(userid)
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
    // res.json(await HowTos.findHowTos());
    let howTos = await HowTos.findHowTos();
    console.log("howTos", howTos);
    howTos = await Promise.all(
      howTos.map(async (howTo) => {
        console.log(howTo.id);
        const reviews = await Reviews.findReviewsByHowToId(howTo.id);
        console.log("reviews", reviews);
        howTo.reviews = reviews;
        // const resources = await HowTos.findResourcesByHowToId(howTo.id);
        // howTo.resources = resources;
        return howTo;
      })
    );
    res.status(200).json(howTos);
  } catch (err) {
    next(err);
  }
});

// POST new howTo
router.post("/", async (req, res, next) => {
  try {
    const howTo = await HowTos.addHowTo(req.body);
    res.status(201).json(howTo);
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
      console.log('we are here', changes)
      if (howTo) {
        //update
        HowTos.updateHowTo(changes, howToId).then(howToArr => {
          res.status(201).json({message: 'Change was successful.', changedHowTo: howToArr})
        }).catch(err => res.status(400).json({error: err, message: 'Error updating how-to', step: 'Put /:howToId findHowToById updateHowTo'}));
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
        HowTos.removeHowTo(howToId);
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

//REVIEWS

// GET all reviews by howToid
router.get("/:howToId/reviews", (req, res, next) => {
  try {
    const { howToId } = req.params;
    HowTos.findReviewsByHowToId(howToId).then((reviews) => {
      res.status(200).json(reviews);
    });
  } catch (err) {
    next(err);
  }
});

// POST new review
router.post("/:howToId/reviews", async (req, res, next) => {
  try {
    const review = await Reviews.addReview(req.body);
    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
});

// PUT update review
router.put("/:howToId/:reviewId", async (req, res, next) => {
  try {
    const changes = req.body;
    const { howToId, reviewId } = req.params;
    //verify review exists
    HowTos.findH(howToId).then((howTo) => {
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

// Delete review
router.delete("/:howToId/:reviewId", async (req, res, next) => {
  try {
    const { howToId, reviewId } = req.params;
    //verify howTo exists
    HowTos.findHowToById(howToId).then((howTo) => {
      if (howTo) {
        Reviews.removeReview(reviewId);
      } else {
        res.status(400).json({
          message: "Could not delete review",
        });
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
