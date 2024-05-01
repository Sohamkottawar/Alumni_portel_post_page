import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3IiwiaWF0IjoxNzExOTk1MDczLCJleHAiOjE3MTIwODE0NzN9.-520rqfwhmRj2uu3RbBhzhg89BEKh9Mfb6BFKkLvRRk";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return Promise.reject(error);
  }
);

export default api;
