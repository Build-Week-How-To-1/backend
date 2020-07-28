exports.up = async function (knex) {
  await knex.schema.createTable("reviews", (table) => {
    table.increments("id");
    table.text("content").notNull();
    table
      .integer("howTos_id")
      .references("id")
      .inTable("howTos")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("reviews");
};
