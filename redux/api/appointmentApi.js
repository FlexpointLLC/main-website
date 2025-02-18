import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAppointment: build.mutation({
      query: (data) => ({
        url: `/purchase`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.appointments],
    }),
    successAppointment: build.query({
      query: ({ storeSlug, order_id }) => ({
        url: `/${storeSlug}/success`,
        method: "GET",
        params: { order: order_id },
      }),
      providesTags: [tagTypes.appointments],
    }),
  }),
});

export const { useCreateAppointmentMutation, useSuccessAppointmentQuery } =
  appointmentApi;
