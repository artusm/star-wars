import { GraphQLSchema } from "graphql";

import QueryRoot from "./QueryRoot.js";

export default new GraphQLSchema({
  description: "a StarWars schema",
  query: QueryRoot,
});
