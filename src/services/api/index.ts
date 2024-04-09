import axios from "axios";
import { API_KEY_CHAT } from "../keys";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1/",
  headers: {
    Authorization: `Bearer ${API_KEY_CHAT}`,
  },
});
