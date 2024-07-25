
// onBoardingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onBoardingComplete: false,
};

export const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState,
  reducers: {
    setOnBoardingComplete: (state, { payload }) => {
      state.onBoardingComplete = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnBoardingComplete } = onBoardingSlice.actions;

export default onBoardingSlice.reducer;
