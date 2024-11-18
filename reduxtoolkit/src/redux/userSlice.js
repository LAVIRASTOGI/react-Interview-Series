import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../services/user";

const initialState = {
  user: {},
  loading: false,
  error: null,
};
export const getUserDetails = createAsyncThunk("/getUserDetails", async () => {
  const response = await userService();
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload,
          loading: false,
        };
      })
      .addCase(getUserDetails.rejected, (state) => {
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      });
  },
});

export default userSlice.reducer;
