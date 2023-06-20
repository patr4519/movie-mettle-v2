import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    addFavorite: (state, action) => {
      state[0].favorites.push(action.payload)
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const selectUser = (state) => state.user[0];

export const { addUser, clearUser, addFavorite } = userSlice.actions;

export default userSlice.reducer;
