exports.up = function (knex) {
  return knex.schema.createTable("planets_terrains", (table) => {
    table
      .integer("terrain_id")
      .unsigned()
      .references("id")
      .inTable("terrains")
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
  return knex.schema.dropTable("planets_terrains");
};
