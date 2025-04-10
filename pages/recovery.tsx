import { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

const RecoveryPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    let { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess("Check your inbox for the password reset link.");
      setLoading(false);
      // Optionally, redirect to login page after success
      setTimeout(() => router.push("/login"), 3000);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Password Recovery
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success.main">{success}</Typography>}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Recovery Email"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RecoveryPage;
