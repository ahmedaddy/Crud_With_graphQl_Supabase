import * as Types from "../types/queries";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export const OrdersFragmentFragmentDoc = gql`
  fragment OrdersFragment on orders {
    id
    price
    fileUrl
  }
`;
export const GetOrdersDocument = gql`
  query GetOrders {
    ordersCollection {
      edges {
        node {
          ...OrdersFragment
        }
      }
    }
  }
  ${OrdersFragmentFragmentDoc}
`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetOrdersQuery,
    Types.GetOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetOrdersQuery, Types.GetOrdersQueryVariables>(
    GetOrdersDocument,
    options
  );
}
export function useGetOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetOrdersQuery,
    Types.GetOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetOrdersQuery,
    Types.GetOrdersQueryVariables
  >(GetOrdersDocument, options);
}
export function useGetOrdersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        Types.GetOrdersQuery,
        Types.GetOrdersQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    Types.GetOrdersQuery,
    Types.GetOrdersQueryVariables
  >(GetOrdersDocument, options);
}
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<
  typeof useGetOrdersLazyQuery
>;
export type GetOrdersSuspenseQueryHookResult = ReturnType<
  typeof useGetOrdersSuspenseQuery
>;
export type GetOrdersQueryResult = Apollo.QueryResult<
  Types.GetOrdersQuery,
  Types.GetOrdersQueryVariables
>;
export const CreateOrderDocument = gql`
  mutation CreateOrder($price: BigFloat!) {
    insertIntoordersCollection(objects: [{ price: $price }]) {
      records {
        id
        price
      }
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  Types.CreateOrderMutation,
  Types.CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateOrderMutation,
    Types.CreateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.CreateOrderMutation,
    Types.CreateOrderMutationVariables
  >(CreateOrderDocument, options);
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>;
export type CreateOrderMutationResult =
  Apollo.MutationResult<Types.CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateOrderMutation,
  Types.CreateOrderMutationVariables
>;
export const UpdateOrderDocument = gql`
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
export type UpdateOrderMutationFn = Apollo.MutationFunction<
  Types.UpdateOrderMutation,
  Types.UpdateOrderMutationVariables
>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      set: // value for 'set'
 *      filter: // value for 'filter'
 *      atMost: // value for 'atMost'
 *   },
 * });
 */
export function useUpdateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateOrderMutation,
    Types.UpdateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdateOrderMutation,
    Types.UpdateOrderMutationVariables
  >(UpdateOrderDocument, options);
}
export type UpdateOrderMutationHookResult = ReturnType<
  typeof useUpdateOrderMutation
>;
export type UpdateOrderMutationResult =
  Apollo.MutationResult<Types.UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateOrderMutation,
  Types.UpdateOrderMutationVariables
>;
export const DeleteOrderDocument = gql`
  mutation DeleteOrder($filter: ordersFilter!) {
    deleteFromordersCollection(filter: $filter, atMost: 1) {
      records {
        id
      }
    }
  }
`;
export type DeleteOrderMutationFn = Apollo.MutationFunction<
  Types.DeleteOrderMutation,
  Types.DeleteOrderMutationVariables
>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeleteOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteOrderMutation,
    Types.DeleteOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.DeleteOrderMutation,
    Types.DeleteOrderMutationVariables
  >(DeleteOrderDocument, options);
}
export type DeleteOrderMutationHookResult = ReturnType<
  typeof useDeleteOrderMutation
>;
export type DeleteOrderMutationResult =
  Apollo.MutationResult<Types.DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteOrderMutation,
  Types.DeleteOrderMutationVariables
>;
