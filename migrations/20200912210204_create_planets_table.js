exports.up = function (knex) {
  return knex.schema.createTable("planets", (table) => {
    table.increments().primary();
    table.string("name").unique();
    table.integer("rotation_period").unsigned();
    table.integer("orbital_period").unsigned();
    table.integer("diameter").unsigned();
    table.string("gravity");
    table.float("surface_water").unsigned();
    table.bigInteger("population").unsigned();
    table.string("image_path");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("planets");
};
