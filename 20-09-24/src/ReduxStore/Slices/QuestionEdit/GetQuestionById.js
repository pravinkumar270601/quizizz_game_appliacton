/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const GETQUESTIONBYID= createAsyncThunk(
  "GetQuestionById/GetQuestionById",
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

const GetQuestionByIdSlice = createSlice({
  name: "GetQuestionByIdSlice",
  initialState: {
    GetQuestionById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETQUESTIONBYID.fulfilled, (state, action) => {
      state.GetQuestionById = {
        ...state.GetQuestionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETQUESTIONBYID.pending, (state, action) => {
      state.GetQuestionById = {
        ...state.GetQuestionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETQUESTIONBYID.rejected, (state, action) => {
      state.GetQuestionById = {
        ...state.GetQuestionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GetQuestionByIdAction = {
    GETQUESTIONBYID,
};

export { GetQuestionByIdAction };
export default GetQuestionByIdSlice.reducer;
