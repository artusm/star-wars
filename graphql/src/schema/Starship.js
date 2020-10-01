import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from "graphql";
import { GraphQLLong, GraphQLURL } from "graphql-scalars";

import Character from "./Character.js";

export default new GraphQLObjectType({
  name: "Starship",
  sqlTable: "starships",
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
      type: GraphQLLong,
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
      type: GraphQLLong,
      sqlColumn: "cargo_capacity",
    },
    consumables: {
      type: GraphQLString,
    },
    hyperdriveRating: {
      type: GraphQLFloat,
      sqlColumn: "hyperdrive_rating",
    },
    MGLT: {
      type: GraphQLInt,
    },
    starshipClass: {
      type: GraphQLString,
      sqlColumn: "starship_class",
    },
    imagePath: {
      type: GraphQLString,
      sqlColumn: "image_path",
    },
    characters: {
      type: new GraphQLList(Character),
      junction: {
        sqlTable: "characters_starships",
        uniqueKey: ["character_id", "starship_id"],
        sqlJoins: [
          (starshipTable, relationTable) =>
            `${starshipTable}.id = ${relationTable}.starship_id`,
          (relationTable, characterTable) =>
            `${relationTable}.character_id = ${characterTable}.id`,
        ],
      },
    },
  }),
});
