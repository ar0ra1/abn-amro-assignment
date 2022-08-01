import useSWR from "swr";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://api.tvmaze.com/" });

export default function useRequest(request, { fallbackData, ...config } = {}) {
  return useSWR(
    request && JSON.stringify(request),
    () => axiosInstance(request || {}).then((response) => response.data),
    {
      ...config,
      fallbackData: fallbackData && {
        status: 200,
        statusText: "InitialData",
        headers: {},
        data: fallbackData,
      },
    }
  );
}
