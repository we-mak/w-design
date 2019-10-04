import { ReactChild } from "react";
import { GlobProps } from "../../types";

export interface BreadcrumbsItemProps extends GlobProps {
  isCurrentPage?: boolean;
  children?: ReactChild | string | number;
}

export interface BreadcrumbsProps extends GlobProps {
  children?: ReactChild | string | number;
}
