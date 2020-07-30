const db = require("../data/dbConfig");

function findReviewByHowToId(id) {
  return db("reviews as r")
    .select("r.id", "r.content", "r.likes")
    .where(id, "=", "r.howTos_id");
}

async function addReview(review) {
  review.forEach(async (review) => {
    await db("reviews").insert(review);
  });
  return db("reviews").where("howTos_id", review[0].post_id);
}

async function updateReview(review, howToId) {
  review.forEach(async (review) => {
    await db("reviews").where("id", review.id).update(review);
  });
  return db("reviews").where("howTos_id", howToId);
}

module.exports = {
  addReview,
  //   findReviewBy,
  findReviewByHowToId,
  updateReview,
};
