import React, { ReactNode } from "react";
import { BreadcrumbsItemWrapper, Seperator } from "./Styled";
import { GlobProps } from "../common/props";

export interface BreadcrumbsItemProps extends GlobProps {
  isCurrentPage?: boolean;
  children?: ReactNode;
}

export const BreadcrumbsItem = ({ isCurrentPage, children }: BreadcrumbsItemProps) => {
  return (
    <BreadcrumbsItemWrapper>
      {children}
      {!isCurrentPage && <Seperator role="presentation">/</Seperator>}
    </BreadcrumbsItemWrapper>
  );
};
