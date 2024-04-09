export interface IMessages {
  type: "system" | "user";
  message: string;
  animation?: boolean;
}
