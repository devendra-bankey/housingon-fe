import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { identifyMe, loginUser, logoutUser } from "../services/authService";

// Async thunk to log in a user
export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await loginUser(formData);
      if (formData.role === data?.user.userType) {
        return data;
      } else {
        return thunkAPI.rejectWithValue({ message: "Role mismatch" });
      }
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    const response = await identifyMe(); // token sent via cookie
    return response.data.user;
  }
);

export const logoutUserThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await logoutUser();
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Logout failed" }
      );
    }
  }
);

// Initial state of the auth slice
const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

// Auth slice with reducers and extraReducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null; // Clear user on logout
    },
    setUserFromCookie: (state, action) => {
      state.user = action.payload; // Set user from cookie on refresh
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { logout, setUserFromCookie } = authSlice.actions;
export default authSlice.reducer;
