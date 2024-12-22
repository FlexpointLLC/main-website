import { createApi } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "@/helpers/axiosBaseQuery";
import { tagTypesList } from "../tagTypes";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
