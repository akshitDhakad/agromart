import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // Store the fetched data here
  isFetching: false,
  error: null, // Store any error message here
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    dataFetchStart: (state) => {
      state.isFetching = true;
      state.error = null; // Clear any previous errors
    },
    dataFetchSuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload; // Store the fetched data
    },
    dataFetchFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload; // Store the error message
    },
  },
});

export const { dataFetchStart, dataFetchSuccess, dataFetchFailure } =
  productSlice.actions;

export default productSlice.reducer;
