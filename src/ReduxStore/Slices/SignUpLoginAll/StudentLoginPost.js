



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const STUDENTLOGINPOST = createAsyncThunk(
  "StudentLoginPost/StudentLoginPost",
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
const StudentLoginPostSlice = createSlice({
  name: "StudentLoginPostSlice",
  initialState: {
    StudentLoginPost: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfStudentLoginPost: (state) => {
      state.StudentLoginPost.loading = false
      state.StudentLoginPost.error = false
      state.StudentLoginPost.data = []
      state.StudentLoginPost.message = 'false'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(STUDENTLOGINPOST.fulfilled, (state, action) => {
      state.StudentLoginPost = {
        ...state.StudentLoginPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(STUDENTLOGINPOST.pending, (state, action) => {
      state.StudentLoginPost = {
        ...state.StudentLoginPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(STUDENTLOGINPOST.rejected, (state, action) => {
      state.StudentLoginPost = {
        ...state.StudentLoginPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const StudentLoginPostAction = {
  STUDENTLOGINPOST,
};

export { StudentLoginPostAction };
export default StudentLoginPostSlice.reducer;
export const {setInitialStateOfStudentLoginPost} = StudentLoginPostSlice.actions
