import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductDetails: build.query({
      query: ({ storeSlug, productSlug }) => ({
        url: `/${storeSlug}/product/${productSlug}`,
        method: "GET",
      }),
      providesTags: [tagTypes.products],
    }),
  }),
});

export const { useGetProductDetailsQuery } = productApi;
