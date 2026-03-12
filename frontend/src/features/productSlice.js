import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategory: [],
  subCategory: [],
  product: [],
};

const productSlice = createSlice({
  name: "Product",
  initialState: initialState,
  reducers: {
    setAllCategory: (state, action) => {
      state.allCategory = action.payload;
    },
    setDeleteCategory: (state, action) => {
      state.allCategory = state.allCategory.filter(
        (item) => item._id !== action.payload,
      );
    },
    setAddCategory: (state, action) => {
      state.allCategory = [...state.allCategory, action.payload];
    },
  },
});

export const { setAllCategory, setDeleteCategory, setAddCategory } =
  productSlice.actions;

export default productSlice.reducer;
