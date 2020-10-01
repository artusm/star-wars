const { join } = require("path");

exports.seed = async function (knex) {
  const importFixture = async (tableName) => {
    const data = require(join(
      __dirname,
      "..",
      "database",
      "fixtures",
      `${tableName}.json`
    ));
    await knex(tableName).del();
    await knex(tableName).insert(data);
  };

  await importFixture("classifications");
  await importFixture("climates");
  await importFixture("colors");
  await importFixture("designations");
  await importFixture("genders");
  await importFixture("languages");
  await importFixture("terrains");
  await importFixture("starships");
  await importFixture("vehicles");
  await importFixture("planets");
  await importFixture("species");
  await importFixture("characters");
  await importFixture("climates_planets");
  await importFixture("planets_terrains");
  await importFixture("characters_starships");
  await importFixture("characters_vehicles");
};
