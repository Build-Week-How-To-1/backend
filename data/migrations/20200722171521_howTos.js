exports.up = async function (knex) {
  await knex.schema.createTable("howTos", (table) => {
    table.increments("id");
    table.text("title").notNull().unique();
    table.text("img");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("howTos");
};
