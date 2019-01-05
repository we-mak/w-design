import * as React from "react";
import Tag from "clean-tag";

type Props = {
  /** custom html tag */
  customHTMLtag?: string;
};

// Create custom html tag with clean tag
export const CustomTag = ({ customHTMLtag, ...props }: Props) =>
  React.createElement(Tag[customHTMLtag || "div"], { ...props });
