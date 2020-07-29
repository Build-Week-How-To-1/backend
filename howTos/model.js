const db = require("../data/dbconfig");

async function addHowTo(howTo) {
  const [id] = await db("howTos").insert(howTo);

  return db("howTos").where({ id }).first();
}

function findHowTos() {
  return db("howTos as h")
    .innerJoin("users as u", "u.name", "h.user_id")
    .leftJoin("reviews as r", "r.content")
    .select("h.id", "h.title", "h.img", "h.user_id");
}

function findHowToBy(filter) {
  return db("howTos").where(filter).first();
}

function findHowToById(id) {
  return db("howTos").where({ id }).first();
}

function removeHowTo(id) {
  return db("howTos").where({ id }).del();
}

async function updateHowTo(changes, id) {
  await db("howTos").where({ id }).update(changes);
  return db("howTos").where({ id }).first();
}

module.exports = {
  addHowTo,
  findHowTos,
  findHowToBy,
  findHowToById,
  removeHowTo,
  updateHowTo,
};
