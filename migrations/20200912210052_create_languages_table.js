exports.up = function (knex) {
  return knex.schema.createTable("languages", (table) => {
    table.increments().primary();
    table.string("language_name", 32).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("languages");
};
