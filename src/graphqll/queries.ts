import { gql } from "@apollo/client";

export const QUERY = gql`
  {
    ordersCollection {
      edges {
        node {
          id
          price
        }
      }
    }
  }
`;
