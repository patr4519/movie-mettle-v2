import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://63dbfd55c45e08a04352c66d.mockapi.io/users

export const apiUserSlice = createApi({
  reducerPath: "apiUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63dbfd55c45e08a04352c66d.mockapi.io",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersQuery } = apiUserSlice;
