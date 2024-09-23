/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const IMAGEUPLOADPOST= createAsyncThunk(
  "ImageUploadPost/ImageUploadPost",
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

const ImageUploadPostSlice = createSlice({
  name: "ImageUploadPostSlice",
  initialState: {
    ImageUploadPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(IMAGEUPLOADPOST.fulfilled, (state, action) => {
      state.ImageUploadPost = {
        ...state.ImageUploadPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(IMAGEUPLOADPOST.pending, (state, action) => {
      state.ImageUploadPost = {
        ...state.ImageUploadPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(IMAGEUPLOADPOST.rejected, (state, action) => {
      state.ImageUploadPost = {
        ...state.ImageUploadPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const ImageUploadPostAction = {
    IMAGEUPLOADPOST,
};

export { ImageUploadPostAction };
export default ImageUploadPostSlice.reducer;
