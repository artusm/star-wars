exports.up = function (knex) {
  return knex.schema.createTable("species", (table) => {
    table.increments().primary();
    table.string("name").unique();
    table.integer("average_height").unsigned();
    table.integer("average_lifespan").unsigned();

    table
      .integer("classification_id")
      .unsigned()
      .references("id")
      .inTable("classifications")
      .onDelete("set null");
    table
      .integer("designation_id")
      .unsigned()
      .references("id")
      .inTable("designations")
      .onDelete("set null");
    table
      .integer("language_id")
      .unsigned()
      .references("id")
      .inTable("languages")
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
  return knex.schema.dropTable("species");
};
