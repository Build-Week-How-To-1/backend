const db = require("../data/dbconfig");

function findReviewsByHowToId(id) {
  return db("reviews as r")
    .select("r.id", "r.content", "r.likes")
    .where(id, "=", "r.howTos_id");
}

async function addReview(review) {
  review.forEach(async (review) => {
    await db("reviews").insert(review);
  });
  return db("reviews").where("howTos_id", review[0].howTos_id);
}

async function updateReview(review, howToId) {
  review.forEach(async (review) => {
    await db("reviews").where("id", review.id).update(review);
  });
  return db("reviews").where("howTos_id", howToId);
}

function removeReview(id) {
  return db("reviews").where({ id }).del();
}

module.exports = {
  addReview,
  //   findReviewBy,
  findReviewsByHowToId,
  updateReview,
  removeReview,
};
