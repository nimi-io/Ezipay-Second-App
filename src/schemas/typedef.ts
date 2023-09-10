// schema.ts

const typeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    password: String!
    
  }  
  type Mutation {
    signup(email: String!, password: String!): User
    login(email: String!, password: String!): String
  }
  type Query {
    hello: String
    exportSchema: String
    users: [User]
    user(email: String!): User
  }
`;

export default typeDefs;
