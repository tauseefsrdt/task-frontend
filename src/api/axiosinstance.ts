import axios from "axios";

const API = axios.create({
  baseURL: "https://task-backend-d0a8.onrender.com", // backend API
});

// Add token to headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 🔑 Token expired or invalid
      localStorage.removeItem("token");
      window.location.href = "/login"; // redirect to login page
    }
    return Promise.reject(error);
  },
);

export default API;
