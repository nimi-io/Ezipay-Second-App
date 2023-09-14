import axios, { AxiosResponse } from "axios";
import { GraphQLType } from "graphql";
import * as gql from "graphql";

export const sendSchemaToServer = async (query: any) => {
  const url = "http://localhost:2000/";
  // console.log(query);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, { query }, config);
    console.log(
      "Response from receiving server:",
      response.status,
      response.data.data
    );

    return response.data.data;
  } catch (error: any) {
    console.error("Error: Unable to update First service typedef", error.cause);
  }
};

export const buildServerSchema = async (typeDef: any) => {
  const buildSchema = gql.buildSchema(typeDef);

  return await sendSchemaToServer(
    `mutation {
      updateTypeDef(typeDefs: """${gql.printSchema(buildSchema)}""")
    }
    `
  );
};
