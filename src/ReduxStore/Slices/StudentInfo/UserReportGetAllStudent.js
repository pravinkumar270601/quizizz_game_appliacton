

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const USERREPORTGETALLSTUDENT= createAsyncThunk(
  "UserReportGetAllStudent/UserReportGetAllStudent",
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
const UserReportGetAllStudentSlice = createSlice({
  name: "UserReportGetAllStudentSlice",
  initialState: {
    UserReportGetAllStudent: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateUserReportGetAllStudent : (state)=>{
        state.UserReportGetAllStudent.loading= false
        state.UserReportGetAllStudent.error= false
        state.UserReportGetAllStudent.data= []
        state.UserReportGetAllStudent.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(USERREPORTGETALLSTUDENT.fulfilled, (state, action) => {
      state.UserReportGetAllStudent = {
        ...state.UserReportGetAllStudent,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(USERREPORTGETALLSTUDENT.pending, (state, action) => {
      state.UserReportGetAllStudent = {
        ...state.UserReportGetAllStudent,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(USERREPORTGETALLSTUDENT.rejected, (state, action) => {
      state.UserReportGetAllStudent = {
        ...state.UserReportGetAllStudent,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const UserReportGetAllStudentAction = {
    USERREPORTGETALLSTUDENT,
};

export { UserReportGetAllStudentAction };
export default UserReportGetAllStudentSlice.reducer;
export const {setInitialStateUserReportGetAllStudent} = UserReportGetAllStudentSlice.actions

