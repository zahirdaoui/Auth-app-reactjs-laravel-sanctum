/* // src/api.js
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
});

// Optional: intercept requests or responses
api.interceptors.request.use(
  (config) => {
    // e.g., attach token if needed
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject("the error from " +error);
  }
);

export default api; */

// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // Add token if needed
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if server sent a response
    if (error.response) {
      // Return the server response data instead of a string
      return Promise.reject(error.response.data);
    } else {
      // Network error or CORS
      return Promise.reject({ error: error.message || "Network error" });
    }
  }
);

export default api;
