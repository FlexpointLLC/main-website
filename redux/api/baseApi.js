import { createApi } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "@/helpers/axiosBaseQuery";
import { tagTypesList } from "../tagTypes";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
