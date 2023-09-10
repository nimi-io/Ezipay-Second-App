const ApolloClient = require("apollo-client");

const client = new ApolloClient.ApolloClient({
  uri: "http:/127.0.0.1:3000/graphql",
  link: myLink,
  cache: myCache,
});

const schema = client.query({
  query: introspectionQuery,

});

const jsonSchema = JSON.stringify(schema, null, 2);

console.log(jsonSchema);
