exports.up = function (knex) {
  return knex.schema.createTable("characters", (table) => {
    table.increments().primary();
    table.string("name").unique();
    table.integer("height").unsigned();
    table.float("mass").unsigned();
    table.string("birth_year");
    table
      .integer("gender_id")
      .unsigned()
      .references("id")
      .inTable("genders")
      .onDelete("set null");
    table
      .integer("specie_id")
      .unsigned()
      .references("id")
      .inTable("species")
      .onDelete("set null");
    table
      .integer("homeworld_id")
      .unsigned()
      .references("id")
      .inTable("planets")
      .onDelete("set null");
    table.specificType("skin_colors", "text[]");
    table.specificType("hair_colors", "text[]");
    table.specificType("eye_colors", "text[]");
    table.string("image_path");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("characters");
};
