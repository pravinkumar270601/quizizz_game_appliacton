

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const GETALLSTUDENTS= createAsyncThunk(
  "getAllStudents/getAllStudents",
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
const getAllStudentsSlice = createSlice({
  name: "getAllStudentsSlice",
  initialState: {
    getAllStudents: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETALLSTUDENTS.fulfilled, (state, action) => {
      state.getAllStudents = {
        ...state.getAllStudents,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLSTUDENTS.pending, (state, action) => {
      state.getAllStudents = {
        ...state.getAllStudents,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLSTUDENTS.rejected, (state, action) => {
      state.getAllStudents = {
        ...state.getAllStudents,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllStudentsAction = {
    GETALLSTUDENTS,
};

export { getAllStudentsAction };
export default getAllStudentsSlice.reducer;
