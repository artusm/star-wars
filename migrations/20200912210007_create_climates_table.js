exports.up = function (knex) {
  return knex.schema.createTable("climates", (table) => {
    table.increments().primary();
    table.string("climate_name", 32).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("climates");
};
