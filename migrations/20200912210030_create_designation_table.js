exports.up = function (knex) {
  return knex.schema.createTable("designations", (table) => {
    table.increments().primary();
    table.string("designation_name", 32).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("designations");
};
