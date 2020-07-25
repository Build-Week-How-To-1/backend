exports.seed = async function (knex) {
  await knex("howTos").insert([
    { id: 1, title: "Grilled Cheese" },
    { id: 2, title: "Restore Cast-Iron Woodstove" },
    { id: 3, title: "Purify Water" },
  ]);
};
