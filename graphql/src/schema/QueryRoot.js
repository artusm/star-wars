import { GraphQLObjectType, GraphQLString } from "graphql";

import { createResource } from "../utils/index.js";
import joinMonster from "join-monster";
import Character from "./Character.js";
import Planet from "./Planet.js";
import Classification from "./Classification.js";
import Specie from "./Specie.js";
import Climate from "./Climate.js";
import Color from "./Color.js";
import Designation from "./Designation.js";
import Gender from "./Gender.js";
import Language from "./Language.js";
import Terrain from "./Terrain.js";
import Vehicle from "./Vehicle.js";
import Starship from "./Starship.js";

export default new GraphQLObjectType({
  description: "global query object",
  name: "Query",
  fields: () => ({
    version: {
      type: GraphQLString,
      resolve: () => joinMonster.version,
    },
    ...createResource(Character, "character", "characters"),
    ...createResource(Planet, "planet", "planets"),
    ...createResource(Classification, "classification", "classifications"),
    ...createResource(Climate, "climate", "climates"),
    ...createResource(Color, "color", "colors"),
    ...createResource(Designation, "designation", "designations"),
    ...createResource(Gender, "gender", "genders"),
    ...createResource(Language, "language", "languages"),
    ...createResource(Terrain, "terrain", "terrains"),
    ...createResource(Vehicle, "vehicle", "vehicles"),
    ...createResource(Starship, "starship", "starships"),
    ...createResource(Specie, "specie", "species"),
  }),
});
