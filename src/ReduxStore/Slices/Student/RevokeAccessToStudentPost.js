

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const REVOKEACCESSTOMULTISTUDENTPOST= createAsyncThunk(
  "RevokeAccessToMultiStudentPost/RevokeAccessToMultiStudentPost",
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
const RevokeAccessToMultiStudentPostSlice = createSlice({
  name: "RevokeAccessToMultiStudentPostSlice",
  initialState: {
    RevokeAccessToMultiStudentPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateRevokeAccessToMultiStudentPost : (state)=>{
    state.RevokeAccessToMultiStudentPost.loading= false
    state.RevokeAccessToMultiStudentPost.error= false
    state.RevokeAccessToMultiStudentPost.data= []
    state.RevokeAccessToMultiStudentPost.message = ''
  }},
  extraReducers: (builder) => {
    builder.addCase(REVOKEACCESSTOMULTISTUDENTPOST.fulfilled, (state, action) => {
      state.RevokeAccessToMultiStudentPost = {
        ...state.RevokeAccessToMultiStudentPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(REVOKEACCESSTOMULTISTUDENTPOST.pending, (state, action) => {
      state.RevokeAccessToMultiStudentPost = {
        ...state.RevokeAccessToMultiStudentPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(REVOKEACCESSTOMULTISTUDENTPOST.rejected, (state, action) => {
      state.RevokeAccessToMultiStudentPost = {
        ...state.RevokeAccessToMultiStudentPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const RevokeAccessToMultiStudentPostAction = {
    REVOKEACCESSTOMULTISTUDENTPOST,
};

export { RevokeAccessToMultiStudentPostAction };
export default RevokeAccessToMultiStudentPostSlice.reducer;
export const {setInitialStateRevokeAccessToMultiStudentPost} = RevokeAccessToMultiStudentPostSlice.actions

