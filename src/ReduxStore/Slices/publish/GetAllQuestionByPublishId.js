

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const GETALLQUESTIONBYPUBLISHID= createAsyncThunk(
  "GetAllQuestionByPublishId/GetAllQuestionByPublishId",
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
const GetAllQuestionByPublishIdSlice = createSlice({
  name: "GetAllQuestionByPublishIdSlice",
  initialState: {
    PublishPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETALLQUESTIONBYPUBLISHID.fulfilled, (state, action) => {
      state.GetAllQuestionByPublishId = {
        ...state.GetAllQuestionByPublishId,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLQUESTIONBYPUBLISHID.pending, (state, action) => {
      state.GetAllQuestionByPublishId = {
        ...state.GetAllQuestionByPublishId,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLQUESTIONBYPUBLISHID.rejected, (state, action) => {
      state.GetAllQuestionByPublishId = {
        ...state.GetAllQuestionByPublishId,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GetAllQuestionByPublishIdAction = {
  GETALLQUESTIONBYPUBLISHID,
};

export { GetAllQuestionByPublishIdAction };
export default GetAllQuestionByPublishIdSlice.reducer;
