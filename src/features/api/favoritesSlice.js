import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectFavorites = (state) => state.favorites;

export const { addFav } = favoritesSlice.actions;

export default favoritesSlice.reducer;
