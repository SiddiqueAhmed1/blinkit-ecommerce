import axios from "axios";

axios.defaults.withCredentials = true;

// 1. Send accessToken in request
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 2. Handle expired token in response
axios.interceptors.response.use(
  (response) => response, // success hole direct return
  async (error) => {
    let originalRequest = error.config;

    if (error.response?.status === 400 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  },
);

// refreshAccessToken
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/refresh-token",
      {
        headers: { Authorization: `Bearer ${refreshToken}` },
      },
    );

    const accessToken = response.data.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error(error);
    return null;
  }
};
