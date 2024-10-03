/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const QUESTIONAUDIOPOST= createAsyncThunk(
  "QuestionAudioPost/QuestionAudioPost",
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

const QuestionAudioPostSlice = createSlice({
  name: "QuestionAudioPostSlice",
  initialState: {
    QuestionAudioPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfQuestionAudioPost: (state) => {
      state.QuestionAudioPost.loading = false
      state.QuestionAudioPost.error = false
      state.QuestionAudioPost.data = []
      state.QuestionAudioPost.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(QUESTIONAUDIOPOST.fulfilled, (state, action) => {
      state.QuestionAudioPost = {
        ...state.QuestionAudioPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONAUDIOPOST.pending, (state, action) => {
      state.QuestionAudioPost = {
        ...state.QuestionAudioPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONAUDIOPOST.rejected, (state, action) => {
      state.QuestionAudioPost = {
        ...state.QuestionAudioPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const QuestionAudioPostAction = {
    QUESTIONAUDIOPOST,
};

export { QuestionAudioPostAction };
export default QuestionAudioPostSlice.reducer;
export const {setInitialStateOfQuestionAudioPost} = QuestionAudioPostSlice.actions
