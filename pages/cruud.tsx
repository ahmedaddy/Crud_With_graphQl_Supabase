import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { supabase } from "../lib/supabaseClient";
import React from "react";

const GET_ORDERS = gql`
  query GetAhmed {
    ahmed {
      age
    }
  }
`;

// const CREATE_ORDER = gql`
//   mutation CreateOrder($price: Float!) {
//     insertIntoordersCollection(objects: [{ price: $price }]) {
//       records {
//         id
//         price
//       }
//     }
//   }
// `;

// const UPDATE_ORDER = gql`
//   mutation UpdateOrder(
//     $set: ordersUpdateInput!
//     $filter: ordersFilter
//     $atMost: Int!
//   ) {
//     updateordersCollection(set: $set, filter: $filter, atMost: $atMost) {
//       records {
//         id
//         price
//       }
//     }
//   }
// `;

// const DELETE_ORDER = gql`
//   mutation DeleteOrder($filter: ordersFilter!) {
//     deleteFromordersCollection(filter: $filter, atMost: 1) {
//       records {
//         id
//       }
//     }
//   }
// `;
// const GET_TOTAL_ORDER_PRICE = gql`
//   query GetTotalOrderPrice {
//     order_total_view {
//       total_order_price
//     }
//   }
// `;

export default function OrdersPage() {
  const { loading, error, data, refetch } = useQuery(GET_ORDERS);
  // const [createOrder] = useMutation(CREATE_ORDER);
  // const [updateOrder] = useMutation(UPDATE_ORDER);
  // const [deleteOrder] = useMutation(DELETE_ORDER);
  // const {
  //   loading: priceLoading,
  //   error: priceError,
  //   data: priceData,
  // } = useQuery(GET_TOTAL_ORDER_PRICE);
  // console.log("Price data:", priceData);
  // console.log("Price Error:", priceError);

  console.log("data :", data);
  console.log("error :", error);

  const [price, setPrice] = useState<number>(0);
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchTotalPrice = async () => {
  //     try {
  //       const { data, error } = await supabase.rpc("sum_order_prices");
  //       console.log(data);
  //       if (error) throw error;
  //       setTotalPrice(data);
  //     } catch (err) {
  //       console.error("Error fetching total order price:", err);
  //     }
  //   };

  //   fetchTotalPrice();
  // }, [data]); // Re-fetch total price whenever order data changes

  // Create Order
  const handleCreateOrder = async () => {
    // await createOrder({
    //   variables: { price: price.toString() },
    // });
    setPrice(0);
    refetch(); // Refresh data
  };

  // Update Order
  const handleUpdateOrder = async (id: string) => {
    // const set = {
    //   price: editPrice.toString(), // Ensure price is a number
    // };
    // const filter = {
    //   id: {
    //     eq: id, // Ensure this matches the expected filter structure
    //   },
    // };
    // try {
    // const response = await updateOrder({
    //   variables: { set, filter, atMost: 1 },
    // });
    // console.log("Update response:", response);
    // } catch (error) {
    //   console.log("Error updating order:", error);
    // }
    // setEditingId(null);
    // refetch(); // Refresh data
  };

  // Delete Order
  const handleDeleteOrder = async (id: string) => {
    console.log("Deleting order:", id);
    // const filter = {
    //   id: {
    //     eq: id,
    //   },
    // };
    // try {
    //   const response = await deleteOrder({
    //     variables: { filter },
    //   });
    //   console.log("Delete response:", response);
    // } catch (error) {
    //   console.error("Error deleting order:", error);
    // }
    // refetch();
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Orders Management</h1>
      <h2>Total Orders Price : {totalPrice ? totalPrice : ""}</h2>
      {/* Create Order Form */}
      <div>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          placeholder="Enter price"
        />
        <button onClick={handleCreateOrder}>Add Order</button>
      </div>

      {/* Orders List */}
      <ul>
        {data?.ordersCollection?.edges.map(
          ({ node }: { node: { id: string; price: number } }) => (
            <li key={node.id}>
              {editingId === node.id ? (
                <>
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(parseFloat(e.target.value))}
                  />
                  <button onClick={() => handleUpdateOrder(node.id)}>
                    Save
                  </button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  Order #{node.id}: ${node.price}
                  <button
                    onClick={() => {
                      setEditingId(node.id);
                      setEditPrice(node.price);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteOrder(node.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
