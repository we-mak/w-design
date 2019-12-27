import * as React from "react";
import { CSSProp } from "styled-components";
import { GlobProps } from "../common/props";

export interface TagProps extends GlobProps {
  /** custom html tag */
  tag?: string;
  children?: React.ReactNode;
  css?: CSSProp;
  tagRef?: React.MutableRefObject<any>;
  role?: string;
  style?: object;
}

// Create custom html tag
const CustomTag: React.FC<TagProps> = ({ tag = "div", children, css, tagRef, ...rest }) => {
  return React.createElement(tag, { children, css, ...rest, ref: tagRef });
};

export default CustomTag;
