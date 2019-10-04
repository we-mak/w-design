export interface PushMessageProps {
  value: string;
  appearance: "info" | "warn" | "success" | "error";
  dismissTimeout?: number; // time to auto dismiss message automatically
}
