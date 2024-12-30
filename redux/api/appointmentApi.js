import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAppointment: build.mutation({
      query: (data) => ({
        url: `/appointment`,
        method: "POST",
        body: data,
      }),
      providesTags: [tagTypes.appointments],
    }),
  }),
});

export const { useCreateAppointmentMutation } = appointmentApi;
