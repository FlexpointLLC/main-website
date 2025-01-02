import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPaymentIntent: build.query({
      query: () => ({
        url: `/payment-intent`,
        method: "GET",
      }),
      providesTags: [tagTypes.payments],
    }),
  }),
});

export const { useCreatePaymentIntentQuery } = paymentApi;
