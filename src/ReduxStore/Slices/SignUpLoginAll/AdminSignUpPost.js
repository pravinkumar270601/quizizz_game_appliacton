



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";
// PublishPost
// PUBLISHPOST
const   ADMINSIGNUPPOST= createAsyncThunk(
  "AdminSignUpPost/AdminSignUpPost",
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
const AdminSignUpPostSlice = createSlice({
  name: "AdminSignUpPostSlice",
  initialState: {
    AdminSignUpPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfAdminSignUpPost: (state) => {
      state.AdminSignUpPost.loading = false
      state.AdminSignUpPost.error = false
      state.AdminSignUpPost.data = []
      state.AdminSignUpPost.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ADMINSIGNUPPOST.fulfilled, (state, action) => {
      state.AdminSignUpPost = {
        ...state.AdminSignUpPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADMINSIGNUPPOST.pending, (state, action) => {
      state.AdminSignUpPost = {
        ...state.AdminSignUpPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADMINSIGNUPPOST.rejected, (state, action) => {
      state.AdminSignUpPost = {
        ...state.AdminSignUpPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const AdminSignUpPostAction = {
    ADMINSIGNUPPOST,
};

export { AdminSignUpPostAction };
export default AdminSignUpPostSlice.reducer;
export const {setInitialStateOfAdminSignUpPost} = AdminSignUpPostSlice.actions