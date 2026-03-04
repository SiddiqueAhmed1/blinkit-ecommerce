import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  _id: "",
  name: "",
  email: "",
  avatar: "",
  mobile: "",
  refresh_token: "",
  verify_forgot_password: "",
  forgot_password_otp: "",
  verify_email: "",
  last_login_date: "",
  role: "",
  forgot_password_expiry: null,
  address_details: [],
  orderHistory: [],
  shopping_cart: [],
  isInitializing: true,
  isAuthLoader: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const payload = action.payload || {}; // avoid crash if null

      state._id = payload._id || "";
      state.name = payload.name || "";
      state.email = payload.email || "";
      state.avatar = payload.avatar || "";
      state.mobile = payload.mobile || "";
      state.role = payload.role || "";
      state.refresh_token = payload.refresh_token || "";
      state.verify_forgot_password = payload.verify_forgot_password || "";
      state.forgot_password_expiry = payload.forgot_password_expiry || null;
      state.verify_email = payload.verify_email || "";
      state.address_details = payload.address_details || [];
      state.orderHistory = payload.orderHistory || [];
      state.shopping_cart = payload.shopping_cart || [];
    },
    setIsInitilizing: (state, action) => {
      state.isInitializing = action.payload;
    },
    setAuthLoading: (state, action) => {
      state.isAuthLoader = action.payload;
    },
    logout: (state) => {
      Object.assign(state, initialState);
    },
    uploadAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    updateUserDetails: (state, action) => {
      state.name = action.payload.name || state.name;
      state.email = action.payload.email || state.email;
      state.mobile = action.payload.mobile || state.mobile;
    },
  },
});

export const {
  setUserDetails,
  logout,
  uploadAvatar,
  updateUserDetails,
  setIsInitilizing,
  setAuthLoading,
} = userSlice.actions;
export default userSlice.reducer;
