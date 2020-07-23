exports.up = async function (knex) {
  await knex.schema.createTable("reviews", (table) => {
    table.increments("id");
    table.text("name").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("reviews");
};
