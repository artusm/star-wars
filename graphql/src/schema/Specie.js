import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import Classification from "./Classification.js";
import Designation from "./Designation.js";
import Language from "./Language.js";
import Character from "./Character.js";
import Planet from "./Planet.js";

const Specie = new GraphQLObjectType({
  description: "a stem contract account",
  name: "Specie",
  sqlTable: "species",
  uniqueKey: "id",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    averageHeight: {
      type: GraphQLInt,
      sqlColumn: "average_height",
    },
    averageLifespan: {
      type: GraphQLInt,
      sqlColumn: "average_lifespan",
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
    planet: {
      type: Planet,
      sqlJoin: (specieTable, planetTable) =>
        `${specieTable}.homeworld_id = ${planetTable}.id`,
    },
    language: {
      type: Language,
      sqlJoin: (specieTable, languageTable) =>
        `${specieTable}.language_id = ${languageTable}.id`,
    },
    designation: {
      type: Designation,
      sqlJoin: (specieTable, designationTable) =>
        `${specieTable}.designation_id = ${designationTable}.id`,
    },
    classification: {
      type: Classification,
      sqlJoin: (specieTable, classificationTable) =>
        `${specieTable}.classification_id = ${classificationTable}.id`,
    },
    characters: {
      type: new GraphQLList(Character),
      sqlJoin: (specieTable, characterTable) =>
        `${specieTable}.id = ${characterTable}.specie_id`,
      orderBy: "id",
    },
  }),
});

export default Specie;
