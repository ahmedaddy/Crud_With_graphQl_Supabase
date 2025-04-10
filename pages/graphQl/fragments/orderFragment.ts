import { gql } from "@apollo/client";

export const ORDER_FRAGMENT = gql`
  fragment OrdersFragment on orders {
    id
    price
    fileUrl
  }
`;

