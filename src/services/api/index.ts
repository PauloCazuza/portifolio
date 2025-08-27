import axios from "axios";

export const apiService = axios.create({
  // baseURL: "http://localhost:3333",
  // baseURL: "https://api-email-nest.vercel.app/",
  baseURL: "https://backend-portiforio.vercel.app/",
});
