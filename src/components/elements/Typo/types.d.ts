import { ReactChild } from "react";
import { GlobProps } from "../../../typings";

export interface TypoProps extends GlobProps {
  appearance?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: any;
  color?: string; // TODO: improve with hex, rgba
}
