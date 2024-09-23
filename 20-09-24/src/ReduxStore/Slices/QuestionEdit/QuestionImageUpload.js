/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const QUESTIONIMAGEUPLOAD= createAsyncThunk(
  "QuestionImageUpload/QuestionImageUpload",
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

const QuestionImageUploadSlice = createSlice({
  name: "QuestionImageUploadSlice",
  initialState: {
    QuestionImageUpload: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(QUESTIONIMAGEUPLOAD.fulfilled, (state, action) => {
      state.QuestionImageUpload = {
        ...state.QuestionImageUpload,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONIMAGEUPLOAD.pending, (state, action) => {
      state.QuestionImageUpload = {
        ...state.QuestionImageUpload,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(QUESTIONIMAGEUPLOAD.rejected, (state, action) => {
      state.QuestionImageUpload = {
        ...state.QuestionImageUpload,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const QuestionImageUploadAction = {
    QUESTIONIMAGEUPLOAD,
};

export { QuestionImageUploadAction };
export default QuestionImageUploadSlice.reducer;
