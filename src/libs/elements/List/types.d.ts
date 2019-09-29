import { ReactNode, ReactChild } from "react";
import { GlobProps } from "../../types";

export interface ListProps extends GlobProps {
  component: ReactNode;
  items?: ReactChild[];
  footer?: ReactChild | ReactChild[];
}

export interface ListItemProps extends GlobProps {
  key?: string | number;
}
