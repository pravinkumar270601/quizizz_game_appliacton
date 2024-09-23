

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST

const QUIZZGAMEPLAYQUESTION= createAsyncThunk(
  "QuizzGamePlayQuestion/QuizzGamePlayQuestion",
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
const QuizzGamePlayQuestionSlice = createSlice({
  name: "QuizzGamePlayQuestionSlice",
  initialState: {
    PublishPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(QUIZZGAMEPLAYQUESTION.fulfilled, (state, action) => {
      state.QuizzGamePlayQuestion = {
        ...state.QuizzGamePlayQuestion,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUIZZGAMEPLAYQUESTION.pending, (state, action) => {
      state.QuizzGamePlayQuestion = {
        ...state.QuizzGamePlayQuestion,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUIZZGAMEPLAYQUESTION.rejected, (state, action) => {
      state.QuizzGamePlayQuestion = {
        ...state.QuizzGamePlayQuestion,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const QuizzGamePlayQuestionAction = {
    QUIZZGAMEPLAYQUESTION,
};

export { QuizzGamePlayQuestionAction };
export default QuizzGamePlayQuestionSlice.reducer;
