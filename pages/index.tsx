// pages/dashboard.tsx
import { supabase } from "../lib/supabaseClient";
import { Typography, Container, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
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

// const QUERY = gql`
//   {
//     __schema {
//       queryType {
//         fields {
//           name
//         }
//       }
//     }
//   }
// `;

// const QUERY = gql`
//   query GetOrders {
//     ordersCollection {
//       edges {
//         node {
//           id
//           price
//         }
//       }
//     }
//   }
// `;

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const { loading, error, data } = useQuery(QUERY);

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log(data);
  // if (data && data.ordersCollection) {
  //   console.log(data.ordersCollection.edges);
  // }

  useEffect(() => {
    const fetchAuthData = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error.message);
        return;
      }
      console.log("Session:", data.session);
      setUser(data.session?.user);
      // console.log("User:", data.session?.user);
    };

    fetchAuthData();
  }, []);

  const handleLogout = async () => {
    // Add logout logic here (e.g., clear cookies, localStorage, etc.)
    let { error } = await supabase.auth.signOut();
    // console.log(error);

    router.push("/login"); // Redirect to login page
  };

  const handleLogin = async () => {
    // Add logout logic here (e.g., clear cookies, localStorage, etc.)
    let { error } = await supabase.auth.signOut();
    // console.log(error);

    router.push("/login"); // Redirect to login page
  };
  const handleSignup = async () => {
    // Add logout logic here (e.g., clear cookies, localStorage, etc.)
    let { error } = await supabase.auth.signOut();
    console.log(error);

    router.push("/signup"); // Redirect to login page
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Welcome to the Dashboard!
      </Typography>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Email : {user?.email}
      </Typography>
      <Typography variant="h4" sx={{ mt: 4 }}>
        State : {user?.role}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={handleLogout}
      >
        Logout
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSignup}
      >
        SignUp
      </Button>
      <ul>
        {data?.ordersCollection?.edges.map(({ node }: any) => (
          <li key={node.id}>
            Order ID: {node.id}, Price: {node.price}
          </li>
        ))}
      </ul>
    </Container>
  );
}
