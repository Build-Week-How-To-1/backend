exports.seed = async function (knex) {
  await knex("resources").insert([
    { name: "butter" },
    { name: "bread" },
    { name: "cheese" },
    { name: "wire brush" },
    { name: "cloth" },
    { name: "stove polish" },
    { name: "filter" },
    { name: "pot" },
    { name: "heat source" },
  ]);
};
