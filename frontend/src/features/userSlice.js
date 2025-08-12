import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
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
