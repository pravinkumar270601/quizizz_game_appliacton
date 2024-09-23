

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const GETPUBLISHBYUSERID= createAsyncThunk(
  "GetPublishByUserId/GetPublishByUserId",
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
const GetPublishByUserIdSlice = createSlice({
  name: "GetPublishByUserIdSlice",
  initialState: {
    PublishPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETPUBLISHBYUSERID.fulfilled, (state, action) => {
      state.GetPublishByUserId = {
        ...state.GetPublishByUserId,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPUBLISHBYUSERID.pending, (state, action) => {
      state.GetPublishByUserId = {
        ...state.GetPublishByUserId,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPUBLISHBYUSERID.rejected, (state, action) => {
      state.GetPublishByUserId = {
        ...state.GetPublishByUserId,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GetPublishByUserIdAction = {
    GETPUBLISHBYUSERID,
};

export { GetPublishByUserIdAction };
export default GetPublishByUserIdSlice.reducer;
