import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  _id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const { setUserDetails } = userSlice.reducer;

export default userSlice.reducer;
