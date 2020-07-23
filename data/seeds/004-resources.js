exports.seed = async function (knex) {
  await knex("resources").insert([
    { name: "butter" },
    { name: "bread" },
    { name: "cheese" },
    { name: "wire brush" },
    { name: "rag" },
    { name: "stove polish" },
    { name: "filter" },
    { name: "pot" },
    { name: "heat source" },
  ]);
};
