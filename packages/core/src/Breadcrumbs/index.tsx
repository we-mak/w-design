import React, { Children, isValidElement, ReactNode } from "react";
import styled from "styled-components";
import { GlobProps } from "../common/props";

export interface BreadcrumbsProps extends GlobProps {
  children?: ReactNode;
}

const BreadcrumbsContainer = styled.nav`
  color: ${props => props.theme.colors["N30"]};
  font-size: 0.6rem;
  display: flex;
  flex-wrap: wrap;
`;

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
