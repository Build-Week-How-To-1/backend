const db = require("../data/dbconfig");

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function find() {
  return db("users").select("id", "email");
}

function findBy(filter) {
  return db("users").select("id", "email", "password").where(filter);
}

function findById(id) {
  return db("users").select("id", "email").where({ id }).first();
}

module.exports = {
  add,
  find,
  findBy,
  findById,
};
