import axiosInstance from "./axiosInstance";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async (arg, api) => {
    const { url, method = "GET", data, params, headers } =
      typeof arg === "string" ? { url: arg } : arg;

    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
