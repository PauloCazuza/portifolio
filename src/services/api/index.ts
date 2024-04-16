import axios from "axios";

export const apiService = axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "https://api-email-nest-75g5hcuea-paulo-roberto-lopes-projects.vercel.app",
});
