import { IEmail } from "@/interfaces/email";
import { apiService } from "../api";

async function sendEmail({ body, subject, to }: IEmail) {
  const res = await apiService.get(
    `send-email?to=${to}&subject=${subject}&message=${body}`
  );

  console.log(res.data);

  if (res.status === 200)
    return true;

  return false;
}

export default sendEmail;
