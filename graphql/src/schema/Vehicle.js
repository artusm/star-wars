import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from "graphql";
import { GraphQLBigInt } from "graphql-scalars";

import Character from "./Character.js";

export default new GraphQLObjectType({
  name: "Vehicle",
  sqlTable: "vehicles",
  uniqueKey: "id",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },

    model: {
      type: GraphQLString,
    },
    manufacturer: {
      type: GraphQLString,
    },
    costInCredits: {
      type: GraphQLBigInt,
      sqlColumn: "cost_in_credits",
    },
    length: {
      type: GraphQLFloat,
    },
    maxAtmospheringSpeed: {
      type: GraphQLInt,
      sqlColumn: `max_atmosphering_speed`,
    },
    crew: {
      type: GraphQLInt,
    },

    passengers: {
      type: GraphQLInt,
    },
    cargoCapacity: {
      type: GraphQLBigInt,
      sqlColumn: "cargo_capacity",
    },
    consumables: {
      type: GraphQLString,
    },
    vehicleClass: {
      type: GraphQLString,
      sqlColumn: "vehicle_class",
    },
    imagePath: {
      type: GraphQLString,
      sqlColumn: "image_path",
    },
    characters: {
      type: new GraphQLList(Character),
      junction: {
        sqlTable: "characters_vehicles",
        uniqueKey: ["character_id", "vehicle_id"],
        sqlJoins: [
          (vehicleTable, relationTable) =>
            `${vehicleTable}.id = ${relationTable}.vehicle_id`,
          (relationTable, characterTable) =>
            `${relationTable}.character_id = ${characterTable}.id`,
        ],
      },
    },
  }),
});
