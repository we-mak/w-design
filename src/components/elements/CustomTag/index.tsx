import * as React from "react";

type Props = {
  /** custom html tag */
  customHTMLtag?: string;
  children?: any;
};

// Create custom html tag with clean tag
const CustomTag = ({ customHTMLtag, children, ...props }: Props) =>
  React.createElement(customHTMLtag || "div", { children, ...props });

export default CustomTag;
