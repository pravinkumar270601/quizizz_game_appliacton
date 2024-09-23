

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const   ADMINLOGINPOST= createAsyncThunk(
  "AdminLoginPost/AdminLoginPost",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

// PublishPostSlice
const AdminLoginPostSlice = createSlice({
  name: "AdminLoginPostSlice",
  initialState: {
    AdminLoginPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ADMINLOGINPOST.fulfilled, (state, action) => {
      state.AdminLoginPost = {
        ...state.AdminLoginPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADMINLOGINPOST.pending, (state, action) => {
      state.AdminLoginPost = {
        ...state.AdminLoginPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADMINLOGINPOST.rejected, (state, action) => {
      state.AdminLoginPost = {
        ...state.AdminLoginPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const AdminLoginPostAction = {
  ADMINLOGINPOST,
};

export { AdminLoginPostAction };
export default AdminLoginPostSlice.reducer;
