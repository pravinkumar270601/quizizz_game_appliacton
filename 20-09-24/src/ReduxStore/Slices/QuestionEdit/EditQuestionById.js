/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../helpers";

const EDITQUESTIONBYID= createAsyncThunk(
  "EditQuestionById/EditQuestionById",
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

const EditQuestionByIdSlice = createSlice({
  name: "EditQuestionByIdSlice",
  initialState: {
    EditQuestionById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(EDITQUESTIONBYID.fulfilled, (state, action) => {
      state.EditQuestionById = {
        ...state.EditQuestionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(EDITQUESTIONBYID.pending, (state, action) => {
      state.EditQuestionById = {
        ...state.EditQuestionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(EDITQUESTIONBYID.rejected, (state, action) => {
      state.EditQuestionById = {
        ...state.EditQuestionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const EditQuestionByIdAction = {
    EDITQUESTIONBYID,
};

export { EditQuestionByIdAction };
export default EditQuestionByIdSlice.reducer;
