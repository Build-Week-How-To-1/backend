const db = require("../data/dbConfig");

async function addUser(user) {
  const [id] = await db("users").insert(user, 'id');
  return findUserById(id);
}

function findUser() {
  return db("users").select("id", "email");
}

function findUserBy(filter) {
  return db("users").select("id", "email", "password").where(filter);
}

function findUserById(id) {
  return db("users").select("id", "email").where({ id }).first();
}

module.exports = {
  addUser,
  findUser,
  findUserBy,
  findUserById,
};
