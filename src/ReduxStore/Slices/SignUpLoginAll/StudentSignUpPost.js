





/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const   STUDENTSIGNUPPOST= createAsyncThunk(
  "StudentSignUpPost/StudentSignUpPost",
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
const StudentSignUpPostSlice = createSlice({
  name: "StudentSignUpPostSlice",
  initialState: {
    StudentSignUpPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(STUDENTSIGNUPPOST.fulfilled, (state, action) => {
      state.StudentSignUpPost = {
        ...state.StudentSignUpPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(STUDENTSIGNUPPOST.pending, (state, action) => {
      state.StudentSignUpPost = {
        ...state.StudentSignUpPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(STUDENTSIGNUPPOST.rejected, (state, action) => {
      state.StudentSignUpPost = {
        ...state.StudentSignUpPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const StudentSignUpPostAction = {
    STUDENTSIGNUPPOST,
};

export { StudentSignUpPostAction };
export default StudentSignUpPostSlice.reducer;
