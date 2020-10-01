import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from "graphql";

import { GraphQLBigInt } from "graphql-scalars";

import Character from "./Character.js";
import Terrain from "./Terrain.js";
import Climate from "./Climate.js";

const Planet = new GraphQLObjectType({
  description: "a stem contract account",
  name: "Planet",
  sqlTable: "planets",
  // one of the columns must be unique for deduplication purposes
  uniqueKey: "id",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    rotationPeriod: {
      type: GraphQLInt,
      sqlColumn: "rotation_period",
    },
    orbitalPeriod: {
      type: GraphQLInt,
      sqlColumn: "orbital_period",
    },
    diameter: {
      type: GraphQLInt,
    },
    gravity: {
      type: GraphQLString,
    },
    surfaceWater: {
      type: GraphQLFloat,
      sqlColumn: "surface_water",
    },
    population: {
      type: GraphQLBigInt,
    },
    imagePath: {
      type: GraphQLString,
      sqlColumn: "image_path",
    },
    characters: {
      type: new GraphQLList(Character),
      sqlJoin: (planetTable, characterTable) =>
        `${planetTable}.id = ${characterTable}.homeworld_id`,
      orderBy: "id",
    },
    terrains: {
      type: new GraphQLList(Terrain),
      junction: {
        sqlTable: "planets_terrains",
        uniqueKey: ["terrain_id", "planet_id"],
        sqlJoins: [
          (planetTable, relationTable) =>
            `${planetTable}.id = ${relationTable}.planet_id`,
          (relationTable, terrainTable) =>
            `${relationTable}.terrain_id = ${terrainTable}.id`,
        ],
      },
    },
    climates: {
      type: new GraphQLList(Climate),
      junction: {
        sqlTable: "climates_planets",
        uniqueKey: ["climate_id", "planet_id"],
        sqlJoins: [
          (planetTable, relationTable) =>
            `${planetTable}.id = ${relationTable}.planet_id`,
          (relationTable, climateTable) =>
            `${relationTable}.climate_id = ${climateTable}.id`,
        ],
      },
    },
  }),
});

export default Planet;
