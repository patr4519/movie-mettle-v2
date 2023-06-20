import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const selectUser = (state) => state.user[0];

export const { addUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
