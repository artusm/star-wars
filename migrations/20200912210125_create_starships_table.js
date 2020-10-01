exports.up = function (knex) {
  return knex.schema.createTable("starships", (table) => {
    table.increments().primary();
    table.string("name", 128).unique().notNullable();
    table.string("model").notNullable();
    table.string("manufacturer").notNullable();
    table.bigInteger("cost_in_credits").unsigned();
    table.float("length").unsigned();
    table.integer("max_atmosphering_speed").unsigned();
    table.integer("crew").unsigned();
    table.integer("passengers").unsigned();
    table.bigInteger("cargo_capacity").unsigned();
    table.string("consumables");
    table.float("hyperdrive_rating").unsigned();
    table.integer("MGLT").unsigned();
    table.string("starship_class").notNullable();

    table.string("image_path");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("starships");
};
