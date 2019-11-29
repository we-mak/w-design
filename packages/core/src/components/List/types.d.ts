import { ReactNode, ReactElement } from "react";
import { BorderProps, MarginProps, JustifyContentProps } from "styled-system";
import { GlobProps } from "../../typings";

export interface ListProps extends GlobProps {
  header?: ReactNode;
  footer?: any;
  isLoading?: boolean;
  sourceData?: any[];
  rowKey?: string | ((item: any) => string);
  rows?: (item: any, index: number) => ReactNode;
  emptyView?: ReactElement;
}

export interface ListItemProps extends GlobProps {
  key?: string | number;
  thumbnail?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  actions?: ReactNode[];
  hasDivider?: boolean;
  children?: ReactNode | ReactNode[];
}

export interface ListFooterProps
  extends GlobProps,
    BorderProps,
    MarginProps,
    JustifyContentProps {}
