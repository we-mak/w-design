import { ReactNode, ReactChild } from "react";
import { GlobProps } from "../../../typings";

export interface ListProps extends GlobProps {
  component: ReactNode;
  items?: ReactChild[];
  footer?: ReactChild | ReactChild[];
}

export interface ListItemProps extends GlobProps {
  key?: string | number;
}
