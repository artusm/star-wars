exports.up = function (knex) {
  return knex.schema.createTable("climates_planets", (table) => {
    table
      .integer("climate_id")
      .unsigned()
      .references("id")
      .inTable("climates")
      .onDelete("CASCADE");
    table
      .integer("planet_id")
      .unsigned()
      .references("id")
      .inTable("planets")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("climates_planets");
};
