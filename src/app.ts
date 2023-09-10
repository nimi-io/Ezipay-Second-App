import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDef from "./schemas/typedefIndex";
import resolvers from "./resolvers/resolverIndex";
import mongoose from "./utils/db/db"; // Import your Mongoose connection


const server = new ApolloServer({
  typeDefs: typeDef.typeDefs,
  resolvers,
});

const startServer = async () => {
  await mongoose();

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });
  console.log(`🚀 Server ready at ${url}`);
};
startServer();
