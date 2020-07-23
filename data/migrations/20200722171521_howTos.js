exports.up = async function (knex) {
  await knex.schema.createTable("howTos", (table) => {
    table.increments("id");
    table.text("title").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("howTos");
};
