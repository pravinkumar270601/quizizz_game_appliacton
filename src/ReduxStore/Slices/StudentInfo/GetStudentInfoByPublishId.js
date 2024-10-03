



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const GETSTUDENTINFOBYPUBLISHID= createAsyncThunk(
  "GetStudentInfoByPublishId/GetStudentInfoByPublishId",
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
const GetStudentInfoByPublishIdSlice = createSlice({
  name: "GetStudentInfoByPublishIdSlice",
  initialState: {
    GetStudentInfoByPublishId: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GETSTUDENTINFOBYPUBLISHID.fulfilled, (state, action) => {
      state.GetStudentInfoByPublishId = {
        ...state.GetStudentInfoByPublishId,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETSTUDENTINFOBYPUBLISHID.pending, (state, action) => {
      state.GetStudentInfoByPublishId = {
        ...state.GetStudentInfoByPublishId,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETSTUDENTINFOBYPUBLISHID.rejected, (state, action) => {
      state.GetStudentInfoByPublishId = {
        ...state.GetStudentInfoByPublishId,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GetStudentInfoByPublishIdAction = {
    GETSTUDENTINFOBYPUBLISHID,
};

export { GetStudentInfoByPublishIdAction };
export default GetStudentInfoByPublishIdSlice.reducer;
