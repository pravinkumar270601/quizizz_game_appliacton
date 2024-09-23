/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const DELETEQUESTIONBYID= createAsyncThunk(
  "DeleteQuestionById/DeleteQuestionById",
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

const DeleteQuestionByIdSlice = createSlice({
  name: "DeleteQuestionByIdSlice",
  initialState: {
    DeleteQuestionById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DELETEQUESTIONBYID.fulfilled, (state, action) => {
      state.DeleteQuestionById = {
        ...state.DeleteQuestionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEQUESTIONBYID.pending, (state, action) => {
      state.DeleteQuestionById = {
        ...state.DeleteQuestionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEQUESTIONBYID.rejected, (state, action) => {
      state.DeleteQuestionById = {
        ...state.DeleteQuestionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const DeleteQuestionByIdAction = {
    DELETEQUESTIONBYID,
};

export { DeleteQuestionByIdAction };
export default DeleteQuestionByIdSlice.reducer;
