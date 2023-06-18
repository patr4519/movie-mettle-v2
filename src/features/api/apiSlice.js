import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://www.omdbapi.com/?t=The Mummy&apikey=9fc0fef8

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com",
  }),
  endpoints: (builder) => ({
    getFilm: builder.query({
      query: (title) => `/?t=${title}&apikey=9fc0fef8`,
      keepUnusedDataFor: 300
    }),
  }),
});

export const { useGetFilmQuery } = apiSlice;
