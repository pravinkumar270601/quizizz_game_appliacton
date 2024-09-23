/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const QUESTIONWITHANSPOST= createAsyncThunk(
  "QuestionWithAnsPost/QuestionWithAnsPost",
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

const QuestionWithAnsPostSlice = createSlice({
  name: "QuestionWithAnsPostSlice",
  initialState: {
    QuestionWithAnsPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(QUESTIONWITHANSPOST.fulfilled, (state, action) => {
      state.QuestionWithAnsPost = {
        ...state.QuestionWithAnsPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONWITHANSPOST.pending, (state, action) => {
      state.QuestionWithAnsPost = {
        ...state.QuestionWithAnsPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONWITHANSPOST.rejected, (state, action) => {
      state.QuestionWithAnsPost = {
        ...state.QuestionWithAnsPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const QuestionWithAnsPostAction = {
  QUESTIONWITHANSPOST,
};

export { QuestionWithAnsPostAction };
export default QuestionWithAnsPostSlice.reducer;
