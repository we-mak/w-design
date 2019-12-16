import React, { ReactNode } from "react";
import { Seperator } from "./Seperator";
import { BreadcrumbsItemContainer } from "./BreadcrumbsItemContainer";
import { GlobProps } from "../common/props";

export interface BreadcrumbsItemProps extends GlobProps {
  isCurrentPage?: boolean;
  children?: ReactNode;
}

export const BreadcrumbsItem = ({ isCurrentPage, children }: BreadcrumbsItemProps) => {
  return (
    <BreadcrumbsItemContainer>
      {children}
      {!isCurrentPage && <Seperator role="presentation">/</Seperator>}
    </BreadcrumbsItemContainer>
  );
};
