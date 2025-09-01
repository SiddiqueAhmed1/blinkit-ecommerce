import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  avatar: "",
  mobile: "",
  verify_forgot_password: "",
  forgot_password_otp: "",
  verify_email: "",
  last_login_date: "",
  forgot_password_expiry: null,
  address_details: [],
  orderHistory: [],
  shopping_cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.mobile = action.payload.mobile;
      state.verify_forgot_password = action.payload.verify_forgot_password;
      state.forgot_password_expiry = action.payload.forgot_password_expiry;
      state.verify_email = action.payload.verify_email;
      state.address_details = action.payload.orderHistory;
      state.orderHistory = action.payload.orderHistory;
      state.shopping_cart = action.payload.shopping_cart;
    },
    logout: (state) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.avatar = "";
      state.mobile = "";
      state.verify_forgot_password = "";
      state.forgot_password_otp = "";
      state.verify_email = "";
      state.last_login_date = "";
      state.forgot_password_expiry = null;
      state.address_details = [];
      state.orderHistory = [];
      state.shopping_cart = [];
    },
    uploadAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    updateUserDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.mobile = action.payload.mobile;
    },
  },
});

export const { setUserDetails, logout, uploadAvatar, updateUserDetails } =
  userSlice.actions;

export default userSlice.reducer;
