/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const GRANTACCESSTOSTUDENT = createAsyncThunk(
  "grantAccessToStudent/grantAccessToStudent",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},

    { rejectWithValue }
  ) => {
    try {
      console.log(payload,"payload");

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
const grantAccessToStudentSlice = createSlice({
  name: "grantAccessToStudentSlice",
  initialState: {
    grantAccessToStudent: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GRANTACCESSTOSTUDENT.fulfilled, (state, action) => {
      state.grantAccessToStudent = {
        ...state.grantAccessToStudent,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GRANTACCESSTOSTUDENT.pending, (state, action) => {
      state.grantAccessToStudent = {
        ...state.grantAccessToStudent,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GRANTACCESSTOSTUDENT.rejected, (state, action) => {
      state.grantAccessToStudent = {
        ...state.grantAccessToStudent,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const grantAccessToStudentAction = {
  GRANTACCESSTOSTUDENT,
};

export { grantAccessToStudentAction };
export default grantAccessToStudentSlice.reducer;
