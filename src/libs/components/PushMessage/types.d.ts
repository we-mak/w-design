export interface MessageProps {
  value: string;
  appearance: "info" | "warn" | "success" | "error";
  dismissTimeout?: number; // time to auto dismiss message automatically
}

export interface PushMessageProps {
  messages: MessageProps[];
}
