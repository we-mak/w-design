import * as React from "react";
import { GlobProps } from "../../../typings";

export interface TagProps extends GlobProps {
  /** custom html tag */
  customHTMLtag?: string;
  children?: any;
}

// Create custom html tag
const CustomTag = ({ customHTMLtag, children, className }: TagProps) =>
  React.createElement(customHTMLtag || "div", { children, className });

export default CustomTag;
