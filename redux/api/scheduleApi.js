import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAvailableSlots: build.query({
      query: ({ productSlug }) => ({
        url: `/available-slot/${productSlug}`,
        method: "GET",
      }),
      providesTags: [tagTypes.schedules],
    }),
  }),
});

export const { useGetAvailableSlotsQuery } = categoryApi;
