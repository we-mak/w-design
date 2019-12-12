import React, { Children, isValidElement, ReactNode } from "react";
import { BreadcrumbsContainer } from "./Styled";
import { GlobProps } from "../../../types/typings";

export interface BreadcrumbsProps extends GlobProps {
  children?: ReactNode;
}

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
