import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),
  }),
});

export const { useGetUsersQuery } = categoryApi;
