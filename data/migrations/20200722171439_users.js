exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("email", 255).notNull().unique();
    table.text("password", 255).notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
