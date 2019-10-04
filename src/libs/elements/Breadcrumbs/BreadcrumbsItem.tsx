import React from "react";
import { BreadcrumbsItemWrapper, Seperator } from "./Styled";
import { BreadcrumbsItemProps } from "./types";

export const BreadcrumbsItem = ({ isCurrentPage, children }: BreadcrumbsItemProps) => {
  return (
    <BreadcrumbsItemWrapper>
      {children}
      {!isCurrentPage && <Seperator role="presentation">/</Seperator>}
    </BreadcrumbsItemWrapper>
  );
};
