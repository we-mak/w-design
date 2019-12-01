import React, { Children, isValidElement } from "react";
import { BreadcrumbsContainer } from "./Styled";
import { BreadcrumbsProps, BreadcrumbsItemProps } from "./types";

const Breadcrumbs = ({ children, ...rest }: BreadcrumbsProps) => {
  const elements = Children.map(children, child => {
    if (!isValidElement(child)) return;

    return child;
  });
  return (
    <BreadcrumbsContainer aria-label="breadcrumb" {...rest}>
      {elements}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
export { BreadcrumbsItem } from "./BreadcrumbsItem";
export { BreadcrumbsProps, BreadcrumbsItemProps };
