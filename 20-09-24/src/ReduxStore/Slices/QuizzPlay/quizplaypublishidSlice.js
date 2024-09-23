// quizplaypublishidSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  quizPlayPublishId: null, // Change the state according to your needs
};

const quizplaypublishidSlice = createSlice({
  name: "quizplaypublishid",
  initialState,
  reducers: {
    setQuizPlayPublishId: (state, action) => {
      state.quizPlayPublishId = action.payload;
    },
    // clearQuizPlayPublishId: (state) => {
    //   state.quizPlayPublishId = null;
    // },
  },
//   extraReducers: (builder) => {
//     builder.addCase(cakeActions.cakeOrdered, (state) => {
//       state.quizPlayPublishId = "cake-ordered-id"; // Example logic, update as needed
//     });
//   },
});

export default quizplaypublishidSlice.reducer;
export const { setQuizPlayPublishId } = quizplaypublishidSlice.actions;
