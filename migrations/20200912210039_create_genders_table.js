exports.up = function (knex) {
  return knex.schema.createTable("genders", (table) => {
    table.increments().primary();
    table.string("name", 32).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("genders");
};
