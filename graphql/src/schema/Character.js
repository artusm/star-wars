import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

import Planet from "./Planet.js";
import Gender from "./Gender.js";
import Specie from "./Specie.js";
import Starship from "./Starship.js";
import Vehicle from "./Vehicle.js";

const Character = new GraphQLObjectType({
  description: "a stem contract account",
  name: "Character",
  sqlTable: "characters",
  uniqueKey: "id",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    height: {
      type: GraphQLInt,
    },
    mass: {
      type: GraphQLFloat,
    },
    birthYear: {
      type: GraphQLString,
      sqlColumn: "birth_year",
    },
    skinColors: {
      type: new GraphQLList(GraphQLString),
      sqlColumn: "skin_colors",
    },
    hairColors: {
      type: new GraphQLList(GraphQLString),
      sqlColumn: "hair_colors",
    },

    eyeColors: {
      type: new GraphQLList(GraphQLString),
      sqlColumn: "eye_colors",
    },
    imagePath: {
      type: GraphQLString,
      sqlColumn: "image_path",
    },
    gender: {
      type: Gender,
      sqlJoin: (characterTable, genderTable) =>
        `${characterTable}.gender_id = ${genderTable}.id`,
    },
    specie: {
      type: Specie,
      sqlJoin: (characterTable, specieTable) =>
        `${characterTable}.specie_id = ${specieTable}.id`,
    },
    planet: {
      type: Planet,
      sqlJoin: (characterTable, planetTable) =>
        `${characterTable}.homeworld_id = ${planetTable}.id`,
    },
    starships: {
      type: new GraphQLList(Starship),
      junction: {
        sqlTable: "characters_starships",
        uniqueKey: ["character_id", "starship_id"],
        sqlJoins: [
          (characterTable, relationTable) =>
            `${characterTable}.id = ${relationTable}.character_id`,
          (relationTable, starshipTable) =>
            `${relationTable}.starship_id = ${starshipTable}.id`,
        ],
      },
    },
    vehicles: {
      type: new GraphQLList(Vehicle),
      junction: {
        sqlTable: "characters_vehicles",
        uniqueKey: ["character_id", "vehicle_id"],
        sqlJoins: [
          (characterTable, relationTable) =>
            `${characterTable}.id = ${relationTable}.character_id`,
          (relationTable, vehicleTable) =>
            `${relationTable}.vehicle_id = ${vehicleTable}.id`,
        ],
      },
    },
  }),
});

export default Character;
