const knexfile = require("./knexfile");
const knex = require("knex");

const env = process.env.NODE_ENV || "development";

const config = knexfile[env];

module.exports = knex(config);
