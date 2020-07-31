const db = require("../data/dbConfig");

function findReviewsByHowToId(id) {
  return db("reviews").where("howTos_id", id);
}

async function addReview(review) {
  review.forEach(async (review) => {
    await db("reviews").insert(review, 'id');
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
