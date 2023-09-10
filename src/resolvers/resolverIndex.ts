// resolvers.ts
import UserModel from "../data/user";
import { SignupArgs, User, LoginArgs } from "../utils/interface";
import { signup } from "./authResolver";
import typeDefs from "../schemas/typedef";
import { printSchema } from "graphql";
import { user, users } from "./userResolver";

const resolvers = {
  Query: {
    hello: () => "Hello, GraphQL!",
    // exportSchema: async () => {
    //   const schemaString = printSchema(typeDefs);
    //   return schemaString;
    // },
    users,
    user,
  },
  Mutation: {
    signup,
  },
};

export default resolvers;
