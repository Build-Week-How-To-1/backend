exports.seed = async function (knex) {
  await knex("howTos").insert([
    { id: 1, content: "This was terrible", howTos_id: 1, user_id: 1 },
    { id: 2, content: "Came out great!", howTos_id: 2, user_id: 2 },
    { id: 3, content: "Got sick immediately", howTos_id: 3, user_id: 3 },
  ]);
};
