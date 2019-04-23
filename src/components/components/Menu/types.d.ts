import { GlobProps } from "../../../typings";

export interface MenuProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
}
export interface MenuItemProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  after?: React.ReactChild | React.ReactChild[];
  iconBefore?: React.ReactChild;
}
