exports.seed = async function (knex) {
  await knex("howTos").insert([
    { id: 1, title: "Grilled Cheese", user_id: 1 },
    { id: 2, title: "Restore Cast-Iron Woodstove", user_id: 1 },
    { id: 3, title: "Purify Water", user_id: 2 },
  ]);
};
