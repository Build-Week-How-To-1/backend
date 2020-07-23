exports.up = async function (knex) {
  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("resources");
};
