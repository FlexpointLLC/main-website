import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductCalendar: build.query({
      query: ({ productSlug }) => ({
        url: `/get-calendar/${productSlug}`,
        method: "GET",
      }),
      providesTags: [tagTypes.schedules],
    }),
  }),
});

export const { useGetProductCalendarQuery } = categoryApi;
