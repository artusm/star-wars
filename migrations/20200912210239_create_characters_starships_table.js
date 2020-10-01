exports.up = function (knex) {
  return knex.schema.createTable("characters_starships", (table) => {
    table
      .integer("character_id")
      .unsigned()
      .references("id")
      .inTable("characters")
      .onDelete("CASCADE");
    table
      .integer("starship_id")
      .unsigned()
      .references("id")
      .inTable("starships")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("planets_terrains");
};
