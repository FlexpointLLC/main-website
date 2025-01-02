import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./api/baseApi";
import reducer from "./reducer";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
