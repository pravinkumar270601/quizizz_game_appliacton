/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const GETALLQUESTION= createAsyncThunk(
  "GetAllQuestion/GetAllQuestion",
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

const GetAllQuestionSlice = createSlice({
  name: "GetAllQuestionSlice",
  initialState: {
    GetAllQuestion: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETALLQUESTION.fulfilled, (state, action) => {
      state.GetAllQuestion = {
        ...state.GetAllQuestion,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLQUESTION.pending, (state, action) => {
      state.GetAllQuestion = {
        ...state.GetAllQuestion,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLQUESTION.rejected, (state, action) => {
      state.GetAllQuestion = {
        ...state.GetAllQuestion,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GetAllQuestionAction = {
  GETALLQUESTION,
};

export { GetAllQuestionAction };
export default GetAllQuestionSlice.reducer;
