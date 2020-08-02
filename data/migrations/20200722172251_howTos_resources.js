exports.up = async function (knex) {
  await knex.schema.createTable("howTos_resources", (table) => {
    table
      .integer("howTos_id")
      .references("id")
      .inTable("howTos")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table
      .integer("resources_id")
      .references("id")
      .inTable("resources")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.text("resource_quantity").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("howTos_resources");
};
