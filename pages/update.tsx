import { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

const UpdatePasswordPage = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { error: updateError } = await supabase.auth.updateUser({
      email: email,
      password: newPassword,
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      setSuccess("Your password has been updated successfully.");
      setLoading(false);
      // Optionally, redirect to login after a successful update
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
          Update Your Password
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UpdatePasswordPage;
