import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";
import joinMonster from "join-monster";
import knex from "../../database.js";

export default function dbCall(sql, knex, context) {
  // this is a little trick to help debugging and demo-ing. the client will display whatever is on the X-SQL-Preview header
  // DONT do something like this in production
  if (context) {
    context.set(
      "X-SQL-Preview",
      context.response.get("X-SQL-Preview") +
        "%0A%0A" +
        sql.replace(/%/g, "%25").replace(/\n/g, "%0A")
    );
  }
  // send the request to the database
  return knex.raw(sql);
}

export const createResource = (
  type,
  singleName,
  multipleName,
  idName = "id"
) => ({
  [multipleName]: {
    type: new GraphQLList(type),
    resolve: (parent, args, context, resolveInfo) =>
      joinMonster(resolveInfo, context, (sql) => dbCall(sql, knex, context)),
  },
  [singleName]: {
    type,
    args: {
      id: {
        description: `The ${multipleName || `${singleName}s`} ID number`,
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    where: (tableName, args) => `${tableName}.${idName} = ${args.id}`,

    resolve: (parent, args, context, resolveInfo) =>
      joinMonster(resolveInfo, context, (sql) => dbCall(sql, knex, context)),
  },
});

export const createSimpleType = (name, sqlTable, sqlColumn, fields = {}) => {
  return new GraphQLObjectType({
    name,
    sqlTable,
    uniqueKey: "id",
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
        sqlColumn,
      },
      ...fields,
    }),
  });
};
