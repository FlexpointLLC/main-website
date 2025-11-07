import { baseApi } from "./api/baseApi";

// Minimal auth reducer to prevent RTK Query from accessing undefined auth state
const authReducer = (state = {}, action) => {
  return state;
};

const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
};

export default reducer;
