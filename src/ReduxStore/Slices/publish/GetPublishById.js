

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const GETPUBLISHBYID= createAsyncThunk(
  "GetPublishById/GetPublishById",
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
const GetPublishByIdSlice = createSlice({
  name: "GetPublishByIdSlice",
  initialState: {
    PublishPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETPUBLISHBYID.fulfilled, (state, action) => {
      state.GetPublishById = {
        ...state.GetPublishById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPUBLISHBYID.pending, (state, action) => {
      state.GetPublishById = {
        ...state.GetPublishById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPUBLISHBYID.rejected, (state, action) => {
      state.GetPublishById = {
        ...state.GetPublishById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GetPublishByIdAction = {
    GETPUBLISHBYID,
};

export { GetPublishByIdAction };
export default GetPublishByIdSlice.reducer;
