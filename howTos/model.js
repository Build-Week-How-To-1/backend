const db = require("../data/dbConfig");

async function addHowTo(howTo) {
  const [id] = await db("howTos").insert(howTo, "id");

  return db("howTos").where({ id }).first();
}

function findHowTos() {
  // return db("howTos as h")
  //   .select("h.id", "h.title", "h.img", "h.user_id", "u.email", "r.content")
  //   .innerJoin("users as u", "u.email", "h.user_id")
  //   .leftJoin("reviews as r", "r.howTos_id", "h.id");

  return db("howTos as h")
    .select("h.id", "h.title", "h.img", "h.user_id", "u.email")
    .join("users as u", "h.user_id", "u.id");
}

function findHowToByUser(user_id) {
  return db("howTos").where('id', user_id).first();
}

// find howto by user id fn?

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

function findResourecesByHowToId(id) {
  return db("resources").where("howTos_id", id);
}

module.exports = {
  addHowTo,
  findHowTos,
  findHowToByUser,
  findHowToById,
  removeHowTo,
  updateHowTo,
  findResourecesByHowToId,
};
