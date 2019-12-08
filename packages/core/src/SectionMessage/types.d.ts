import { ReactNode } from "react";
import { GlobProps } from "../../../types/typings";

export interface SectionMessageProps extends GlobProps {
  /* Message appearance */
  appearance?: "info" | "confirm" | "warn" | "error";
  title?: string;
  children: ReactNode;
}
