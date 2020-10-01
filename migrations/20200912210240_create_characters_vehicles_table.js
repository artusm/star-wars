exports.up = function (knex) {
  return knex.schema.createTable("characters_vehicles", (table) => {
    table
      .integer("character_id")
      .unsigned()
      .references("id")
      .inTable("characters")
      .onDelete("CASCADE");
    table
      .integer("vehicle_id")
      .unsigned()
      .references("id")
      .inTable("vehicles")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("planets_terrains");
};
