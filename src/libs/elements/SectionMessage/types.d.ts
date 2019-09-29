import { ReactNode } from "react";
import { GlobProps } from "../../types";

export interface SectionMessageProps extends GlobProps {
  theme?: any;
  /* Message appearance */
  appearance?: "info" | "confirm" | "warn" | "error";
  title?: string;
  children: ReactNode;
}
