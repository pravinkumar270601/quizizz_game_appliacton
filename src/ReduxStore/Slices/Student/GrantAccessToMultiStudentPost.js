

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const GRANTACCESSTOMULTISTUDENTPOST= createAsyncThunk(
  "GrantAccessToMultiStudentPost/GrantAccessToMultiStudentPost",
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
const GrantAccessToMultiStudentPostSlice = createSlice({
  name: "GrantAccessToMultiStudentPostSlice",
  initialState: {
    GrantAccessToMultiStudentPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateGrantAccessToMultiStudentPost : (state)=>{
        state.GrantAccessToMultiStudentPost.loading= false
        state.GrantAccessToMultiStudentPost.error= false
        state.GrantAccessToMultiStudentPost.data= []
        state.GrantAccessToMultiStudentPost.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GRANTACCESSTOMULTISTUDENTPOST.fulfilled, (state, action) => {
      state.GrantAccessToMultiStudentPost = {
        ...state.GrantAccessToMultiStudentPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GRANTACCESSTOMULTISTUDENTPOST.pending, (state, action) => {
      state.GrantAccessToMultiStudentPost = {
        ...state.GrantAccessToMultiStudentPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GRANTACCESSTOMULTISTUDENTPOST.rejected, (state, action) => {
      state.GrantAccessToMultiStudentPost = {
        ...state.GrantAccessToMultiStudentPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const GrantAccessToMultiStudentPostAction = {
    GRANTACCESSTOMULTISTUDENTPOST,
};

export { GrantAccessToMultiStudentPostAction };
export default GrantAccessToMultiStudentPostSlice.reducer;
export const {setInitialStateGrantAccessToMultiStudentPost} = GrantAccessToMultiStudentPostSlice.actions

