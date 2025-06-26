import {
  Card,
  Container,
  Typography,
  Button,
  Box,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUserThunk } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" }); // Clear previous alert

    try {
      const resultAction = await dispatch(loginUserThunk(formData));

      if (loginUserThunk.fulfilled.match(resultAction)) {
        const data = resultAction.payload;

        setAlert({
          type: "success",
          message: "Login successful!",
        });

        // wait for 0.5s before navigating
        setTimeout(() => {
          if (data.user.userType === "1") {
            navigate("/admin");
          } else if (data.user.userType === "2") {
            navigate("/user");
          } else {
            console.warn("Unknown user type");
          }
        }, 500);
      } else {
        setAlert({
          type: "error",
          message: resultAction.payload?.message || "Login failed",
        });
      }
    } catch (err) {
      console.error("Login error:", err);
      setAlert({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 8, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            value={formData.password}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              displayEmpty
            >
              <MenuItem value="">
                <em>Select Role</em>
              </MenuItem>
              <MenuItem value="1">Admin</MenuItem>
              <MenuItem value="2">Contractor</MenuItem>
              <MenuItem value="3">Tenant</MenuItem>
              <MenuItem value="4">Landlord</MenuItem>
            </Select>
          </FormControl>

          {/* ALERT Component */}
          {alert.message && (
            <Alert severity={alert.type} sx={{ mb: 2 }}>
              {alert.message}
            </Alert>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
