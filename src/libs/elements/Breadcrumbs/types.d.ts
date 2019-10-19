import { ReactNode } from "react";
import { GlobProps } from "../../types";

export interface BreadcrumbsItemProps extends GlobProps {
  isCurrentPage?: boolean;
  children?: ReactNode;
}

export interface BreadcrumbsProps extends GlobProps {
  children?: ReactNode;
}
