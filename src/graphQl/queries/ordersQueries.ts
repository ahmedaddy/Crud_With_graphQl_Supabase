import { gql } from "@apollo/client";
import { ORDER_FRAGMENT } from "../fragments/orderFragment";

export const GET_ORDERS = gql`
  query GetOrders {
    ordersCollection {
      edges {
        node {
          ...OrdersFragment
        }
      }
    }
  }
  ${ORDER_FRAGMENT}
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($price: BigFloat!) {
    insertIntoordersCollection(objects: [{ price: $price }]) {
      records {
        id
        price
      }
    }
  }
`;

export const UPDATE_ORDER = gql`
  mutation UpdateOrder(
    $set: ordersUpdateInput!
    $filter: ordersFilter
    $atMost: Int!
  ) {
    updateordersCollection(set: $set, filter: $filter, atMost: $atMost) {
      records {
        id
        price
      }
    }
  }
`;

export const DELETE_ORDER = gql`
  mutation DeleteOrder($filter: ordersFilter!) {
    deleteFromordersCollection(filter: $filter, atMost: 1) {
      records {
        id
      }
    }
  }
`;
// export const GET_TOTAL_ORDER_PRICE = gql`
//   query GetTotalOrderPrice {
//     order_total_view {
//       total_order_price
//     }
//   }
// `;
