

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const  DELETEPUBLISHBYID= createAsyncThunk(
  "DeletePublishById/DeletePublishById",
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
const DeletePublishByIdSlice = createSlice({
  name: "DeletePublishByIdSlice",
  initialState: {
    PublishPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DELETEPUBLISHBYID.fulfilled, (state, action) => {
      state.DeletePublishById = {
        ...state.DeletePublishById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEPUBLISHBYID.pending, (state, action) => {
      state.DeletePublishById = {
        ...state.DeletePublishById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEPUBLISHBYID.rejected, (state, action) => {
      state.DeletePublishById = {
        ...state.DeletePublishById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const DeletePublishByIdAction = {
    DELETEPUBLISHBYID,
};

export { DeletePublishByIdAction };
export default DeletePublishByIdSlice.reducer;
