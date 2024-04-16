import { apiService } from "../api";

export const sendChatGPT = async (message: string) => {
  const res = await apiService.get<{ message: string }>("send-chatgpt?message=" + message);

  const { data } = await res;

  return data.message;
};
