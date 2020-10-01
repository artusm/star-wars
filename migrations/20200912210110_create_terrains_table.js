exports.up = function (knex) {
  return knex.schema.createTable("terrains", (table) => {
    table.increments().primary();
    table.string("terrain_name", 32).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("terrains");
};
