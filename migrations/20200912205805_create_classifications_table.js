exports.up = function (knex) {
  return knex.schema.createTable("classifications", (table) => {
    table.increments().primary();
    table.string("classification_name", 32).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("classifications");
};
