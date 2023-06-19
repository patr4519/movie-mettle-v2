import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.push(action.payload);
    },
    removeFav: (state, action) => {
      return (state = state.filter((movie) => movie.Title !== action.payload));
    },
  },
});

export const selectFavorites = (state) => state.favorites;

export const { addFav, removeFav } = favoritesSlice.actions;

export default favoritesSlice.reducer;
