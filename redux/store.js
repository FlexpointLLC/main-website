import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./api/baseApi";
import reducer from "./reducer";

export const store = configureStore({
  reducer,
  preloadedState: {
    auth: {},
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});
