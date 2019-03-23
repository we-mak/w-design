import * as React from "react";
import Tag from "clean-tag";

type Props = {
  /** custom html tag */
  customHTMLtag?: string;
  children?: any;
};

// Create custom html tag with clean tag
const CustomTag = ({ customHTMLtag, children, ...props }: Props) =>
  React.createElement(Tag[customHTMLtag || "div"], { children, ...props });

export default CustomTag;
