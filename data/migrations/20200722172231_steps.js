exports.up = async function (knex) {
  await knex.schema.createTable("steps", (table) => {
    table.increments("id");
    table.integer("step_number").notNull();
    table.text("instructions").notNull();
    table
      .integer("howTos_id")
      .references("id")
      .inTable("howTos")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("steps");
};
