exports.up = async function (knex) {
  await knex.schema.createTable("howTos", (table) => {
    table.increments("id");
    table.text("title").notNull().unique();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("howTos");
};
