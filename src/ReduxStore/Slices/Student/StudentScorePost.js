

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const STUDENTSCOREPOST= createAsyncThunk(
  "StudentScorePost/StudentScorePost",
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
const StudentScorePostSlice = createSlice({
  name: "StudentScorePostSlice",
  initialState: {
    StudentScorePost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(STUDENTSCOREPOST.fulfilled, (state, action) => {
      state.StudentScorePost = {
        ...state.StudentScorePost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(STUDENTSCOREPOST.pending, (state, action) => {
      state.StudentScorePost = {
        ...state.StudentScorePost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(STUDENTSCOREPOST.rejected, (state, action) => {
      state.StudentScorePost = {
        ...state.StudentScorePost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const StudentScorePostAction = {
    STUDENTSCOREPOST,
};

export { StudentScorePostAction };
export default StudentScorePostSlice.reducer;
