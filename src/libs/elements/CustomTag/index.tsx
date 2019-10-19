import * as React from "react";
import { CSSProp } from "styled-components";
import { GlobProps } from "../../../typings";

export interface TagProps extends GlobProps {
  /** custom html tag */
  customHTMLtag?: string;
  children?: any;
  css?: CSSProp;
}

// Create custom html tag
const CustomTag: React.FC<TagProps> = ({ customHTMLtag, children, css, ...rest }) => {
  return React.createElement(customHTMLtag || "div", { children, css, ...rest });
};

export default CustomTag;
