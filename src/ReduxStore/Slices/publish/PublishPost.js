/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const PUBLISHPOST= createAsyncThunk(
  "PublishPost/PublishPost",
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
const PublishPostSlice = createSlice({
  name: "PublishPostSlice",
  initialState: {
    PublishPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PUBLISHPOST.fulfilled, (state, action) => {
      state.PublishPost = {
        ...state.PublishPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(PUBLISHPOST.pending, (state, action) => {
      state.PublishPost = {
        ...state.PublishPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(PUBLISHPOST.rejected, (state, action) => {
      state.PublishPost = {
        ...state.PublishPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const PublishPostAction = {
  PUBLISHPOST,
};

export { PublishPostAction };
export default PublishPostSlice.reducer;
