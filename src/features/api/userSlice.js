import { createSlice } from "@reduxjs/toolkit";
import { sortByTitle } from "../../functions/sortByTitle";
import { sortByDuration } from "../../functions/sortByDuration";
import { sortByDate } from "../../functions/sortByDate";
import { sortByOrder } from "../../functions/sortByOrder";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    addFavorite: (state, action) => {
      state[0].favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state[0].favorites = action.payload;
    },
    sortBy: (state, action) => {
      if (action.payload === 'order') {
        state[0].favorites.sort(sortByOrder)
      }
      if (action.payload === "title") {
        state[0].favorites.sort(sortByTitle);
      }
      if (action.payload === "duration") {
        state[0].favorites.sort(sortByDuration);
      }
      if (action.payload === "date") {
        state[0].favorites.sort(sortByDate);
      }
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const selectUser = (state) => state.user[0];

export const { addUser, clearUser, addFavorite, removeFavorite, sortBy } =
  userSlice.actions;

export default userSlice.reducer;
