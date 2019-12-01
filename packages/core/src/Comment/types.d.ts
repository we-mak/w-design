import { ReactChild } from "react";
import { GlobProps } from "../typings";

export interface CommentProps extends GlobProps {
  message: string;
  time?: string;
  userName?: string | ReactChild;
  alt?: string;
  avatarSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  avatarUrl?: string;
  actions?: ReactChild | ReactChild[]; // Comment actions
  editEditor?: ReactChild; // edit comment Editor
  children?: any;
  style?: Object;
}
