import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
        state.push(action.payload)
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const selectCurUser = (state) => state.user;

export const { addUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
