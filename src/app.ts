import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDef from "./schemas/typedefIndex";
import resolvers from "./resolvers/resolverIndex";
import { buildServerSchema, sendSchemaToServer } from "./firstApp.Integration";

const server = new ApolloServer({
  typeDefs: typeDef.typeDefs,
  resolvers,
});

const startServer = async () => {
  // await mongoose();

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });
  console.log(`🚀 Server ready at ${url}`);
  const firstAppSchemaBuild = await buildServerSchema(typeDef.firstAppTypeDef);
  console.log(firstAppSchemaBuild);
};
startServer();
