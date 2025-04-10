import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { supabase } from "@/lib/supabaseClient";
import {
  CREATE_ORDER,
  DELETE_ORDER,
  GET_ORDERS,
  // GET_TOTAL_ORDER_PRICE,
  UPDATE_ORDER,
} from "../src/graphQl/queries/ordersQueries";
import { useCreateOrderMutation, useGetOrdersQuery } from "@/src/hooks/hook";
import { OrdersFragmentFragment } from "@/src/types/queries";

const typeDefs = gql`
  type Order {
    id: ID
    price: Float
  }

  type Query {
    ordersCollection: [Order]
  }

  type Mutation {
    createOrder(price: Float!): Order
    updateOrder(id: ID!, price: Float!): Order
    deleteOrder(id: ID!): Order
  }
`;

// const GET_S = gql`
//   {
//     ordersCollection {
//       edges {
//         node {
//           __typename
//         }
//       }
//     }
//   }
// `;

export default function OrdersPage() {
  const { loading, error, data, refetch } = useQuery(GET_ORDERS);
  // const { loading: l, error: e, data: da, refetch: r } = useQuery(GET_S);

  // const [createOrder] = useMutation(CREATE_ORDER);
  const [updateOrder] = useMutation(UPDATE_ORDER);
  const [deleteOrder] = useMutation(DELETE_ORDER);
  // const {
  //   loading: priceLoading,
  //   error: priceError,
  //   data: priceData,
  } = useQuery(GET_TOTAL_ORDER_PRICE);
  // console.log("data:", data);
  // console.log("Error:", error);
  // console.log("da:", da);
  const getOrdersQueryResult = useGetOrdersQuery();
  console.log(getOrdersQueryResult?.data?.ordersCollection?.edges);
  const [createOrder, { loading: l, error: e, data: d }] =
    useCreateOrderMutation();

  const [price, setPrice] = useState<number>(0);
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchTotalPrice = async () => {
      try {
        const { data, error } = await supabase.rpc("sum_order_prices");
        console.log(data);
        if (error) throw error;
        setTotalPrice(data);
      } catch (err) {
        console.error("Error fetching total order price:", err);
      }
    };

    fetchTotalPrice();
  }, [data]); // Re-fetch total price whenever order data changes

  // Create Order
  const handleCreateOrder = async () => {
    await createOrder({
      variables: { price: price.toString() },
    });
    setPrice(0);
    refetch(); // Refresh data
  };

  // Update Order
  const handleUpdateOrder = async (id: string) => {
    const set = {
      price: editPrice.toString(), // Ensure price is a number
    };
    const filter = {
      id: {
        eq: id, // Ensure this matches the expected filter structure
      },
    };
    try {
      const response = await updateOrder({
        variables: { set, filter, atMost: 1 },
      });
      console.log("Update response:", response);
    } catch (error) {
      console.log("Error updating order:", error);
    }
    setEditingId(null);
    refetch(); // Refresh data
  };

  // Delete Order
  const handleDeleteOrder = async (id: string) => {
    console.log("Deleting order:", id);
    const filter = {
      id: {
        eq: id,
      },
    };
    try {
      const response = await deleteOrder({
        variables: { filter },
      });
      console.log("Delete response:", response);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
    refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const uploadPDF = async (file: any) => {
    if (!file) return;
    const fileName = `${Date.now()}-${file.name}`; // Unique name
    const { data, error } = await supabase.storage
      .from("storage")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    return data.path;
  };
  const getPublicUrl = (filePath: any) => {
    const { data } = supabase.storage.from("storage").getPublicUrl(filePath);

    return data.publicUrl;
  };
  const saveFileUrlToDB = async (fileUrl: any) => {
    const { data, error } = await supabase.from("orders").insert([{ fileUrl }]);
    if (error) {
      console.error("Error inserting URL:", error);
    } else {
      console.log("File URL saved:", data);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };
  const handleUploadClick = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    await handleFileUpload(selectedFile);
    setSelectedFile(null); // Reset file input after upload
  };
  const handleFileUpload = async (file: any) => {
    const filePath = await uploadPDF(file);
    if (!filePath) return;
    console.log(filePath);
    const fileUrl = getPublicUrl(filePath);
    saveFileUrlToDB(fileUrl);
    console.log("File uploaded");
  };
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
        {getOrdersQueryResult?.data?.ordersCollection?.edges.map(({ node }) => (
          <li key={node.id}>
            {editingId === node.id ? (
              <>
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(parseFloat(e.target.value))}
                />
                <button onClick={() => handleUpdateOrder(node.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                Order #{node.id}: ${node.price}
                {
                  <a href={node?.fileUrl || "#"} target="_blank">
                    open file
                  </a>
                }
                <button
                  onClick={() => {
                    setEditingId(node.id);
                    setEditPrice(node?.price ?? 0);
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
        ))}
        {/* upload file */}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button onClick={handleUploadClick}>Upload</button>
      </ul>
    </div>
  );
}
