import { config } from "./knexfile.js";
import knex from "knex";

const env = process.env.NODE_ENV || "development";

const db = knex(config[env]);

export default db;
