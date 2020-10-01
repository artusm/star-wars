exports.up = function (knex) {
  return knex.schema.createTable("colors", (table) => {
    table.increments().primary();
    table.string("color_name", 32).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("colors");
};
