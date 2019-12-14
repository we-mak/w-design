import * as React from "react";
import { CSSProp } from "styled-components";
import { GlobProps } from "../common/props";

export interface TagProps extends GlobProps {
  /** custom html tag */
  tag?: string;
  children?: any;
  css?: CSSProp;
}

// Create custom html tag
const CustomTag: React.FC<TagProps> = ({ tag, children, css, ...rest }) => {
  return React.createElement(tag || "div", { children, css, ...rest });
};

export default CustomTag;
