exports.seed = async function (knex) {
  await knex("howTos").insert([
    { id: 1, name: "Grilled Cheese" },
    { id: 2, name: "Restore Cast-Iron Woodstove" },
    { id: 3, name: "Purify Water" },
  ]);
};
