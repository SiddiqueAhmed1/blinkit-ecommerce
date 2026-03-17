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
    setEditCategory: (state, action) => {
      const index = state.allCategory.findIndex(
        (item) => item._id === action.payload._id,
      );

      if (index !== -1) {
        state.allCategory[index] = {
          ...state.allCategory[index],
          ...action.payload,
        };
      }
    },
  },
});

export const {
  setAllCategory,
  setDeleteCategory,
  setAddCategory,
  setEditCategory,
} = productSlice.actions;

export default productSlice.reducer;
