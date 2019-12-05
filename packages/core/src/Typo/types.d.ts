import { ReactChild } from "react";
import { MarginProps, FontWeightProps, ColorProps } from "styled-system";
import { GlobProps } from "../../../types/typings";

export interface TypoProps
  extends GlobProps,
    MarginProps,
    FontWeightProps,
    FontFamilyProps,
    ColorProps {
  appearance?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: any;
}
