

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const GETALLWITHPUBLISHWITHSTUEDENT= createAsyncThunk(
  "GetAllPublishesWithStudent/GetAllPublishesWithStudent",
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
const GetAllPublishesWithStudentSlice = createSlice({
  name: "GetAllPublishesWithStudentSlice",
  initialState: {
    PublishPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETALLWITHPUBLISHWITHSTUEDENT.fulfilled, (state, action) => {
      state.GetAllPublishesWithStudent = {
        ...state.GetAllPublishesWithStudent,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLWITHPUBLISHWITHSTUEDENT.pending, (state, action) => {
      state.GetAllPublishesWithStudent = {
        ...state.GetAllPublishesWithStudent,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLWITHPUBLISHWITHSTUEDENT.rejected, (state, action) => {
      state.GetAllPublishesWithStudent = {
        ...state.GetAllPublishesWithStudent,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GetAllPublishesWithStudentAction = {
    GETALLWITHPUBLISHWITHSTUEDENT,
};

export { GetAllPublishesWithStudentAction };
export default GetAllPublishesWithStudentSlice.reducer;
