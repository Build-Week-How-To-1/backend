const db = require("../data/dbConfig");

async function addHowTo(howTo) {
  const [id] = await db("howTos").insert(howTo, "id");

  return db("howTos").where("id", id).first();
}

function findHowTos() {
  return db("howTos as h")
    .select("h.id", "h.title", "h.img", "h.user_id", "u.email")
    .join("users as u", "h.user_id", "u.id");
}

function findHowToByUser(user_id) {
  return db("howTos").where("id", user_id).first();
}

function findHowToById(id) {
  return db("howTos").where("id", id).first();
}

function removeHowTo(id) {
  return db("howTos").where("id", id).del();
}

async function updateHowTo(changes, id) {
  await db("howTos").where("id", id).update(changes);
  return db("howTos").where("id", id).first();
}

function findResourcesByHowToId(id) {
  return db("resources").where("howTos_id", id);
}

module.exports = {
  addHowTo,
  findHowTos,
  findHowToByUser,
  findHowToById,
  removeHowTo,
  updateHowTo,
  findResourcesByHowToId,
};
