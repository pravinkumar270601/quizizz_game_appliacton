/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const QUESTIONVIDEOPOST= createAsyncThunk(
  "QuestionVideoPost/QuestionVideoPost",
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

const QuestionVideoPostSlice = createSlice({
  name: "QuestionVideoPostSlice",
  initialState: {
    QuestionVideoPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfQuestionVideoPost: (state) => {
      state.QuestionVideoPost.loading = false
      state.QuestionVideoPost.error = false
      state.QuestionVideoPost.data = []
      state.QuestionVideoPost.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(QUESTIONVIDEOPOST.fulfilled, (state, action) => {
      state.QuestionVideoPost = {
        ...state.QuestionVideoPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONVIDEOPOST.pending, (state, action) => {
      state.QuestionVideoPost = {
        ...state.QuestionVideoPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONVIDEOPOST.rejected, (state, action) => {
      state.QuestionVideoPost = {
        ...state.QuestionVideoPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const QuestionVideoPostAction = {
    QUESTIONVIDEOPOST,
};

export { QuestionVideoPostAction };
export default QuestionVideoPostSlice.reducer;
export const {setInitialStateOfQuestionVideoPost} = QuestionVideoPostSlice.actions
