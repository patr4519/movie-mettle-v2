import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import favoritesReducer from "../features/api/favoritesSlice";
import userReducer from "../features/api/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
