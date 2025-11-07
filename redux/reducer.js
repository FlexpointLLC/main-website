import { baseApi } from "./api/baseApi";

// Minimal auth reducer to prevent RTK Query from accessing undefined auth state
const authReducer = (state = {}, action) => {
  // Always return a valid state object
  if (!state || typeof state !== "object") {
    return {};
  }
  return state;
};

const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
};

export default reducer;
