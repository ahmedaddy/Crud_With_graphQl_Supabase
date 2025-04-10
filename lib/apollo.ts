import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL, // Replace with your Hasura GraphQL endpoint
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "", // Replace with your Hasura admin secret if needed
  },
});

export default client;
